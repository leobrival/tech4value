#!/usr/bin/env node

import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { existsSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { spawn, spawnSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, "..");
const ANNEX_DIR = join(PROJECT_ROOT, "deliverables", "group-file", "annexe");
const PDF_TIMEOUT_MS = 75_000;

const PRINT_CSS = `
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.45;
  color: #1f2933;
  max-width: 980px;
  margin: 40px auto;
  padding: 0 32px;
}
h1 {
  font-size: 30px;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
  color: #111827;
}
h2 {
  font-size: 22px;
  margin-top: 30px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 6px;
  color: #111827;
  page-break-after: avoid;
}
h3 {
  font-size: 17px;
  margin-top: 22px;
  color: #111827;
  page-break-after: avoid;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin: 16px 0;
  font-size: 12px;
  page-break-inside: auto;
}
tr {
  page-break-inside: avoid;
  page-break-after: auto;
}
th,
td {
  border: 1px solid #d1d5db;
  padding: 6px 8px;
  vertical-align: top;
}
th {
  background: #f3f4f6;
  font-weight: 700;
}
pre {
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 12px;
  white-space: pre-wrap;
  font-size: 11px;
  page-break-inside: avoid;
}
code {
  font-family: Menlo, Consolas, monospace;
  font-size: 0.92em;
}
blockquote {
  border-left: 4px solid #cbd5e1;
  margin-left: 0;
  padding-left: 14px;
  color: #475569;
}
hr {
  border: 0;
  border-top: 1px solid #e5e7eb;
  margin: 28px 0;
}
@page {
  size: A4;
  margin: 16mm;
}
`;

function commandExists(command) {
	const result = spawnSync("command", ["-v", command], {
		shell: true,
		stdio: "ignore",
	});
	return result.status === 0;
}

function findChrome() {
	const candidates = [
		process.env.CHROME_PATH,
		"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
		"/Applications/Chromium.app/Contents/MacOS/Chromium",
		"/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
		"google-chrome",
		"chromium",
		"chromium-browser",
	].filter(Boolean);

	for (const candidate of candidates) {
		if (candidate.includes("/") && existsSync(candidate)) {
			return candidate;
		}
		if (!candidate.includes("/") && commandExists(candidate)) {
			return candidate;
		}
	}

	throw new Error(
		"No Chromium-compatible browser found. Install Google Chrome/Chromium or set CHROME_PATH.",
	);
}

function run(command, args, options = {}) {
	const result = spawnSync(command, args, {
		cwd: PROJECT_ROOT,
		encoding: "utf8",
		stdio: "pipe",
		...options,
	});

	if (result.status !== 0) {
		throw new Error(
			`${command} failed\n${result.stdout ?? ""}\n${result.stderr ?? ""}`,
		);
	}

	return result;
}

function renderPdf(chrome, htmlPath, pdfPath, userDataDir) {
	return new Promise((resolvePromise, reject) => {
		const startedAt = Date.now();
		const child = spawn(
			chrome,
			[
				"--headless=new",
				"--disable-gpu",
				"--no-first-run",
				"--no-default-browser-check",
				`--user-data-dir=${userDataDir}`,
				`--print-to-pdf=${pdfPath}`,
				"--no-pdf-header-footer",
				pathToFileURL(htmlPath).href,
			],
			{ stdio: "ignore" },
		);

		let lastSize = 0;
		let stableTicks = 0;

		const interval = setInterval(() => {
			if (existsSync(pdfPath)) {
				const size = statSync(pdfPath).size;
				if (size > 0 && size === lastSize) {
					stableTicks += 1;
					if (stableTicks >= 3) {
						cleanup();
						resolvePromise();
					}
				} else {
					stableTicks = 0;
					lastSize = size;
				}
			}

			if (Date.now() - startedAt > PDF_TIMEOUT_MS) {
				cleanup();
				reject(new Error(`Timed out while rendering ${pdfPath}`));
			}
		}, 1_000);

		function cleanup() {
			clearInterval(interval);
			if (!child.killed) {
				child.kill("SIGTERM");
			}
		}

		child.on("exit", () => {
			if (existsSync(pdfPath) && statSync(pdfPath).size > 0) {
				cleanup();
				resolvePromise();
			}
		});

		child.on("error", (error) => {
			cleanup();
			reject(error);
		});
	});
}

async function main() {
	if (!commandExists("pandoc")) {
		throw new Error("pandoc is required. Install it before generating PDFs.");
	}

	const chrome = findChrome();
	const tempDir = await mkdtemp(join(tmpdir(), "tech4value-pdf-"));
	const cssPath = join(tempDir, "print.css");
	await writeFile(cssPath, PRINT_CSS);

	try {
		const markdownFiles = run("find", [
			ANNEX_DIR,
			"-maxdepth",
			"1",
			"-type",
			"f",
			"-name",
			"*.md",
		])
			.stdout.trim()
			.split("\n")
			.filter(Boolean)
			.sort();

		for (const markdownPath of markdownFiles) {
			const stem = basename(markdownPath, ".md");
			const htmlPath = join(tempDir, `${stem}.html`);
			const pdfPath = join(ANNEX_DIR, `${stem}.pdf`);
			const userDataDir = join(tempDir, `${stem}-profile`);

			run("pandoc", [
				markdownPath,
				"--standalone",
				"--from",
				"markdown+yaml_metadata_block",
				"--css",
				cssPath,
				"-o",
				htmlPath,
			]);

			await renderPdf(chrome, htmlPath, pdfPath, userDataDir);
			console.log(`Generated ${pdfPath}`);
		}
	} finally {
		await rm(tempDir, { recursive: true, force: true });
	}
}

main().catch((error) => {
	console.error(error.message);
	process.exit(1);
});
