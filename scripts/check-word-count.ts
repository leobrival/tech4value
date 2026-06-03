import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

// ── ANSI colors ────────────────────────────────────────────────────────────
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// ── Priority badges ────────────────────────────────────────────────────────
const PRIORITY_BADGE: Record<string, string> = {
	P0: `${RED}${BOLD}[P0]${RESET}`,
	P1: `${YELLOW}${BOLD}[P1]${RESET}`,
	P2: `${DIM}[P2]${RESET}`,
};

// ── Types ──────────────────────────────────────────────────────────────────
interface SubsectionConfig {
	heading: string;
	min_words: number;
	max_words?: number;
	description?: string;
	criteria?: string;
	priority?: string;
	keywords?: string[];
	source_files?: string[];
}

interface SectionConfig {
	heading: string;
	min_words: number;
	max_words?: number;
	description?: string;
	subsections?: SubsectionConfig[];
}

interface DocumentConfig {
	file: string;
	sections: SectionConfig[];
}

type SectionStatus = "ok" | "under" | "empty" | "not_found";

interface SectionResult {
	heading: string;
	level: 2 | 3;
	wordCount: number;
	minWords: number;
	maxWords?: number;
	status: SectionStatus;
	description?: string;
	criteria?: string;
	priority?: string;
	keywords?: string[];
	missingKeywords?: string[];
	sourceFiles?: string[];
}

// ── YAML parser (zero dependencies, handles this project's YAML subset) ────
function parseYaml(content: string): DocumentConfig {
	const lines = content.split("\n");
	const config: DocumentConfig = { file: "", sections: [] };

	type State =
		| "ROOT"
		| "SECTION_BODY"
		| "SUBSECTION_LIST"
		| "SUBSECTION_BODY"
		| "KEYWORDS_LIST"
		| "SOURCE_FILES_LIST";
	let state: State = "ROOT";

	let currentSection: Partial<SectionConfig> | null = null;
	let currentSubsection: Partial<SubsectionConfig> | null = null;

	function flushSubsection() {
		if (
			currentSubsection?.heading &&
			currentSubsection.min_words !== undefined &&
			currentSection
		) {
			if (!currentSection.subsections) currentSection.subsections = [];
			currentSection.subsections.push(currentSubsection as SubsectionConfig);
		}
		currentSubsection = null;
	}

	function flushSection() {
		flushSubsection();
		if (currentSection?.heading && currentSection.min_words !== undefined) {
			config.sections.push(currentSection as SectionConfig);
		}
		currentSection = null;
	}

	function extractValue(line: string, key: string): string {
		const idx = line.indexOf(`${key}:`);
		if (idx === -1) return "";
		return line.slice(idx + key.length + 1).trim();
	}

	function extractQuoted(line: string, key: string): string {
		const match = line.match(new RegExp(`${key}:\\s*"(.+?)"`));
		if (match) return match[1];
		const raw = extractValue(line, key);
		return raw.replace(/^["']|["']$/g, "").trim();
	}

	for (const rawLine of lines) {
		const stripped = rawLine.trim();

		// skip comments and empty lines
		if (stripped.startsWith("#") || stripped === "") continue;

		const indent = rawLine.length - rawLine.trimStart().length;

		if (state === "ROOT") {
			if (stripped.startsWith("file:")) {
				config.file = extractValue(stripped, "file");
			} else if (stripped === "sections:") {
				state = "SECTION_BODY";
			}
			continue;
		}

		// new top-level section (indent 2, "- heading:")
		if (indent === 2 && stripped.startsWith("- heading:")) {
			flushSection();
			currentSection = { heading: extractQuoted(stripped, "heading") };
			state = "SECTION_BODY";
			continue;
		}

		if (state === "SECTION_BODY") {
			if (indent === 4) {
				if (stripped.startsWith("min_words:")) {
					if (currentSection)
						currentSection.min_words = Number.parseInt(
							extractValue(stripped, "min_words"),
							10,
						);
				} else if (stripped.startsWith("max_words:")) {
					if (currentSection)
						currentSection.max_words = Number.parseInt(
							extractValue(stripped, "max_words"),
							10,
						);
				} else if (stripped.startsWith("description:")) {
					if (currentSection)
						currentSection.description = extractQuoted(stripped, "description");
				} else if (stripped === "subsections:") {
					state = "SUBSECTION_LIST";
				}
			}
			continue;
		}

		if (state === "SUBSECTION_LIST" || state === "SUBSECTION_BODY" || state === "KEYWORDS_LIST" || state === "SOURCE_FILES_LIST") {
			// new subsection (indent 6, "- heading:")
			if (indent === 6 && stripped.startsWith("- heading:")) {
				flushSubsection();
				currentSubsection = { heading: extractQuoted(stripped, "heading") };
				state = "SUBSECTION_BODY";
				continue;
			}
			if (state === "KEYWORDS_LIST") {
				if (indent === 10 && stripped.startsWith("- ")) {
					if (currentSubsection) {
						if (!currentSubsection.keywords) currentSubsection.keywords = [];
						const kw = stripped.slice(2).replace(/^["']|["']$/g, "").trim();
						currentSubsection.keywords.push(kw);
					}
					continue;
				}
				// back to subsection fields (e.g. source_files: at indent 8)
				if (indent === 8) state = "SUBSECTION_BODY";
			}
			if (state === "SOURCE_FILES_LIST" && indent === 10 && stripped.startsWith("- ")) {
				if (currentSubsection) {
					if (!currentSubsection.source_files) currentSubsection.source_files = [];
					const filePath = stripped.slice(2).replace(/^["']|["']$/g, "").trim();
					currentSubsection.source_files.push(filePath);
				}
				continue;
			}

			if (state === "SUBSECTION_BODY" && indent === 8) {
				if (stripped.startsWith("min_words:")) {
					if (currentSubsection)
						currentSubsection.min_words = Number.parseInt(
							extractValue(stripped, "min_words"),
							10,
						);
				} else if (stripped.startsWith("max_words:")) {
					if (currentSubsection)
						currentSubsection.max_words = Number.parseInt(
							extractValue(stripped, "max_words"),
							10,
						);
				} else if (stripped.startsWith("description:")) {
					if (currentSubsection)
						currentSubsection.description = extractQuoted(stripped, "description");
				} else if (stripped.startsWith("criteria:")) {
					if (currentSubsection)
						currentSubsection.criteria = extractQuoted(stripped, "criteria");
				} else if (stripped.startsWith("priority:")) {
					if (currentSubsection)
						currentSubsection.priority = extractQuoted(stripped, "priority");
				} else if (stripped === "keywords:") {
					state = "KEYWORDS_LIST";
				} else if (stripped === "source_files:") {
					state = "SOURCE_FILES_LIST";
				}
			}
		}
	}

	flushSection();

	if (!config.file) throw new Error("summary.yaml: missing 'file' key");
	if (config.sections.length === 0)
		throw new Error("summary.yaml: no sections found");

	return config;
}

// ── Markdown section splitter ──────────────────────────────────────────────
interface ParsedSection {
	level: 2 | 3;
	lines: string[];
}

function parseMarkdownSections(content: string): Map<string, ParsedSection> {
	const sections = new Map<string, ParsedSection>();
	const lines = content.split("\n");

	let currentHeading: string | null = null;
	let currentLevel: 2 | 3 = 2;
	let buffer: string[] = [];

	function flush() {
		if (currentHeading !== null) {
			sections.set(normalize(currentHeading), {
				level: currentLevel,
				lines: buffer,
			});
		}
	}

	for (const line of lines) {
		const h2Match = line.match(/^## (.+)/);
		const h3Match = line.match(/^### (.+)/);

		if (h2Match) {
			flush();
			currentHeading = h2Match[1].trim();
			currentLevel = 2;
			buffer = [];
		} else if (h3Match) {
			flush();
			currentHeading = h3Match[1].trim();
			currentLevel = 3;
			buffer = [];
		} else {
			buffer.push(line);
		}
	}
	flush();

	return sections;
}

// ── Word counter ───────────────────────────────────────────────────────────
function countWords(lines: string[]): number {
	let count = 0;
	let inCodeBlock = false;

	for (const line of lines) {
		const trimmed = line.trim();

		if (trimmed.startsWith("```")) {
			inCodeBlock = !inCodeBlock;
			continue;
		}
		if (inCodeBlock) continue;

		// skip table separator rows (|---|---|)
		if (/^[\s|:\-]+$/.test(trimmed) && trimmed.includes("-")) continue;

		const cleaned = trimmed
			.replace(/!\[.*?\]\(.*?\)/g, " ") // images
			.replace(/\[.*?\]\(.*?\)/g, " ") // links
			.replace(/\|/g, " ") // table pipes
			.replace(/[*_`#~>]/g, " ") // markdown syntax
			.replace(/\s+/g, " ")
			.trim();

		if (cleaned.length > 0) {
			count += cleaned.split(" ").filter((w) => w.length > 0).length;
		}
	}

	return count;
}

// ── Heading normalizer ─────────────────────────────────────────────────────
function normalize(heading: string): string {
	return heading.toLowerCase().replace(/\s+/g, " ").trim();
}

// ── Section analyzer ───────────────────────────────────────────────────────
function analyzeSection(
	config: SectionConfig | SubsectionConfig,
	level: 2 | 3,
	sections: Map<string, ParsedSection>,
): SectionResult {
	const key = normalize(config.heading);
	const parsed = sections.get(key);

	let wordCount = 0;
	let status: SectionStatus;

	if (!parsed) {
		status = "not_found";
	} else {
		wordCount = countWords(parsed.lines);
		if (wordCount === 0) {
			status = "empty";
		} else if (wordCount < config.min_words) {
			status = "under";
		} else {
			status = "ok";
		}
	}

	const sub = config as SubsectionConfig;

	// Check which keywords are missing from the section text
	let missingKeywords: string[] | undefined;
	if (sub.keywords && sub.keywords.length > 0 && parsed) {
		const fullText = parsed.lines.join("\n").toLowerCase();
		missingKeywords = sub.keywords.filter(
			(kw) => !fullText.includes(kw.toLowerCase()),
		);
		if (missingKeywords.length === 0) missingKeywords = undefined;
	}

	return {
		heading: config.heading,
		level,
		wordCount,
		minWords: config.min_words,
		maxWords: config.max_words,
		status,
		description: config.description,
		criteria: sub.criteria,
		priority: sub.priority,
		keywords: sub.keywords,
		missingKeywords,
		sourceFiles: sub.source_files,
	};
}

// ── Formatters ─────────────────────────────────────────────────────────────
function statusIcon(status: SectionStatus): string {
	switch (status) {
		case "ok":
			return `${GREEN}✅${RESET}`;
		case "under":
			return `${YELLOW}⚠️ ${RESET}`;
		case "empty":
			return `${RED}❌${RESET}`;
		case "not_found":
			return `${DIM}??${RESET}`;
	}
}

function formatResult(result: SectionResult): string {
	const prefix = result.level === 3 ? "   " : "";
	const heading =
		result.heading.length > 48
			? `${result.heading.slice(0, 45)}...`
			: result.heading;
	const paddedHeading = heading.padEnd(51);

	// word count detail
	let detail = "";
	if (result.status === "not_found") {
		detail = `${DIM}— section introuvable dans le document${RESET}`;
	} else {
		const mot = result.wordCount <= 1 ? "mot" : "mots";
		const count = `${BOLD}${result.wordCount}${RESET} ${mot}`;
		const min = `min ${result.minWords}`;
		const max = result.maxWords ? `, max ${result.maxWords}` : "";
		detail = `(${count}, ${min}${max})`;

		if (result.status === "under") {
			const diff = result.minWords - result.wordCount;
			detail += ` ${YELLOW}— ${diff} manquants${RESET}`;
		} else if (result.status === "empty") {
			detail += ` ${RED}— section vide${RESET}`;
		}
	}

	// criteria + priority badge (subsections only)
	let meta = "";
	if (result.criteria || result.priority) {
		const badge = result.priority ? (PRIORITY_BADGE[result.priority] ?? `[${result.priority}]`) : "";
		const crit = result.criteria ? `${CYAN}${result.criteria}${RESET}` : "";
		meta = `  ${badge}${badge && crit ? " " : ""}${crit}`;
	}

	const mainLine = `${prefix}${statusIcon(result.status)}  ${paddedHeading} ${detail}${meta}`;

	if (result.level !== 3) return mainLine;

	const descPrefix = "         "; // 9 spaces to align under heading
	const lines: string[] = [mainLine];

	if (result.description) {
		lines.push(`${descPrefix}${DIM}↳ ${result.description}${RESET}`);
	}

	if (result.missingKeywords && result.missingKeywords.length > 0) {
		const kws = result.missingKeywords.map((k) => `"${k}"`).join(", ");
		lines.push(`${descPrefix}${YELLOW}🔑 manquants : ${kws}${RESET}`);
	}

	if (result.sourceFiles && result.sourceFiles.length > 0) {
		const basenames = result.sourceFiles.map((f) => path.basename(f)).join(", ");
		lines.push(`${descPrefix}${DIM}📄 ${basenames}${RESET}`);
	}

	return lines.join("\n");
}

// ── Summary ────────────────────────────────────────────────────────────────
function printSummary(results: SectionResult[]): void {
	const ok = results.filter((r) => r.status === "ok").length;
	const under = results.filter((r) => r.status === "under").length;
	const empty = results.filter((r) => r.status === "empty").length;
	const notFound = results.filter((r) => r.status === "not_found").length;
	const total = results.reduce((sum, r) => sum + r.wordCount, 0);

	// priority breakdown for subsections only
	const subsections = results.filter((r) => r.level === 3 && r.priority);
	const p0 = subsections.filter((r) => r.priority === "P0");
	const p0ok = p0.filter((r) => r.status === "ok").length;
	const p1 = subsections.filter((r) => r.priority === "P1");
	const p1ok = p1.filter((r) => r.status === "ok").length;

	console.log(`\n${"─".repeat(78)}`);
	console.log(
		`  ${BOLD}${results.length} sections analysées${RESET}  ·  ` +
			`${GREEN}✅ ${ok} OK${RESET}  ·  ` +
			`${YELLOW}⚠️  ${under} sous le min${RESET}  ·  ` +
			`${RED}❌ ${empty} vides${RESET}` +
			(notFound > 0 ? `  ·  ${DIM}?? ${notFound} introuvables${RESET}` : ""),
	);
	console.log(`  Total : ${BOLD}${total.toLocaleString("fr-FR")} mots${RESET}`);

	if (p0.length > 0 || p1.length > 0) {
		console.log(`\n  Progression par priorité :`);
		if (p0.length > 0)
			console.log(
				`    ${RED}${BOLD}P0${RESET} — ${p0ok}/${p0.length} sections OK  ${progressBar(p0ok, p0.length)}`,
			);
		if (p1.length > 0)
			console.log(
				`    ${YELLOW}${BOLD}P1${RESET} — ${p1ok}/${p1.length} sections OK  ${progressBar(p1ok, p1.length)}`,
			);
	}
}

function progressBar(done: number, total: number): string {
	const width = 20;
	const filled = Math.round((done / total) * width);
	const bar = "█".repeat(filled) + "░".repeat(width - filled);
	const pct = Math.round((done / total) * 100);
	return `${DIM}[${bar}]${RESET} ${pct}%`;
}

// ── Project root detection ─────────────────────────────────────────────────
function findProjectRoot(startDir: string): string {
	let dir = startDir;
	while (dir !== path.dirname(dir)) {
		if (existsSync(path.join(dir, "package.json"))) return dir;
		dir = path.dirname(dir);
	}
	return startDir;
}

// ── Main ───────────────────────────────────────────────────────────────────
function main(): void {
	const projectRoot = findProjectRoot(process.cwd());
	const yamlPath = path.join(projectRoot, "summary.yaml");

	if (!existsSync(yamlPath)) {
		console.error(
			`${RED}Erreur : summary.yaml introuvable à ${yamlPath}${RESET}`,
		);
		process.exit(2);
	}

	let config: DocumentConfig;
	try {
		const yamlContent = readFileSync(yamlPath, "utf-8");
		config = parseYaml(yamlContent);
	} catch (err) {
		console.error(
			`${RED}Erreur de lecture du YAML : ${(err as Error).message}${RESET}`,
		);
		process.exit(2);
	}

	const mdPath = path.join(projectRoot, config.file);
	if (!existsSync(mdPath)) {
		console.error(
			`${RED}Erreur : fichier cible introuvable : ${mdPath}${RESET}`,
		);
		process.exit(2);
	}

	const mdContent = readFileSync(mdPath, "utf-8");
	const sections = parseMarkdownSections(mdContent);

	console.log(
		`\n${BOLD}Vérification du nombre de mots${RESET} — ${DIM}${config.file}${RESET}\n`,
	);

	const allResults: SectionResult[] = [];

	for (const sectionConfig of config.sections) {
		const result = analyzeSection(sectionConfig, 2, sections);
		allResults.push(result);
		console.log(formatResult(result));

		if (sectionConfig.subsections) {
			for (const subConfig of sectionConfig.subsections) {
				const subResult = analyzeSection(subConfig, 3, sections);
				allResults.push(subResult);
				console.log(formatResult(subResult));
			}
		}
	}

	printSummary(allResults);

	const hasProblems = allResults.some(
		(r) =>
			r.status === "under" ||
			r.status === "empty" ||
			r.status === "not_found",
	);
	process.exit(hasProblems ? 1 : 0);
}

main();
