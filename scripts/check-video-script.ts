import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const RED = "\x1b[31m";
const CYAN = "\x1b[36m";
const BOLD = "\x1b[1m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

const PRIORITY_BADGE: Record<string, string> = {
	P0: `${RED}${BOLD}[P0]${RESET}`,
	P1: `${YELLOW}${BOLD}[P1]${RESET}`,
	P2: `${DIM}[P2]${RESET}`,
};

interface VideoSectionConfig {
	heading: string;
	min_words: number;
	max_words?: number;
	criteria?: string;
	points?: number;
	priority?: string;
	description?: string;
	keywords?: string[];
}

interface VideoConfig {
	file: string;
	words_per_minute: number;
	min_minutes: number;
	max_minutes: number;
	required_speakers: string[];
	sections: VideoSectionConfig[];
}

type SectionStatus = "ok" | "under" | "over" | "empty" | "not_found";

interface SectionResult extends VideoSectionConfig {
	wordCount: number;
	status: SectionStatus;
	missingKeywords?: string[];
}

function parseYaml(content: string): VideoConfig {
	const config: VideoConfig = {
		file: "",
		words_per_minute: 145,
		min_minutes: 15,
		max_minutes: 20,
		required_speakers: [],
		sections: [],
	};

	type State = "ROOT" | "SPEAKERS" | "SECTION" | "KEYWORDS";
	let state: State = "ROOT";
	let currentSection: Partial<VideoSectionConfig> | null = null;

	function extractValue(line: string, key: string): string {
		const idx = line.indexOf(`${key}:`);
		if (idx === -1) return "";
		return line.slice(idx + key.length + 1).trim();
	}

	function cleanValue(value: string): string {
		return value.replace(/^['"]|['"]$/g, "").trim();
	}

	function extractQuoted(line: string, key: string): string {
		return cleanValue(extractValue(line, key));
	}

	function flushSection(): void {
		if (currentSection?.heading && currentSection.min_words !== undefined) {
			config.sections.push(currentSection as VideoSectionConfig);
		}
		currentSection = null;
	}

	for (const rawLine of content.split("\n")) {
		const stripped = rawLine.trim();
		if (stripped === "" || stripped.startsWith("#")) continue;

		const indent = rawLine.length - rawLine.trimStart().length;

		if (indent === 0) {
			if (stripped.startsWith("file:")) {
				config.file = extractQuoted(stripped, "file");
				state = "ROOT";
			} else if (stripped.startsWith("words_per_minute:")) {
				config.words_per_minute = Number.parseInt(
					extractValue(stripped, "words_per_minute"),
					10,
				);
				state = "ROOT";
			} else if (stripped.startsWith("min_minutes:")) {
				config.min_minutes = Number.parseInt(
					extractValue(stripped, "min_minutes"),
					10,
				);
				state = "ROOT";
			} else if (stripped.startsWith("max_minutes:")) {
				config.max_minutes = Number.parseInt(
					extractValue(stripped, "max_minutes"),
					10,
				);
				state = "ROOT";
			} else if (stripped === "required_speakers:") {
				flushSection();
				state = "SPEAKERS";
			} else if (stripped === "sections:") {
				state = "SECTION";
			}
			continue;
		}

		if (state === "SPEAKERS" && indent === 2 && stripped.startsWith("- ")) {
			config.required_speakers.push(cleanValue(stripped.slice(2)));
			continue;
		}

		if (indent === 2 && stripped.startsWith("- heading:")) {
			flushSection();
			currentSection = { heading: extractQuoted(stripped, "heading") };
			state = "SECTION";
			continue;
		}

		if ((state === "SECTION" || state === "KEYWORDS") && currentSection) {
			if (state === "KEYWORDS" && indent === 6 && stripped.startsWith("- ")) {
				if (!currentSection.keywords) currentSection.keywords = [];
				currentSection.keywords.push(cleanValue(stripped.slice(2)));
				continue;
			}

			if (indent === 4) {
				state = "SECTION";
				if (stripped.startsWith("min_words:")) {
					currentSection.min_words = Number.parseInt(
						extractValue(stripped, "min_words"),
						10,
					);
				} else if (stripped.startsWith("max_words:")) {
					currentSection.max_words = Number.parseInt(
						extractValue(stripped, "max_words"),
						10,
					);
				} else if (stripped.startsWith("criteria:")) {
					currentSection.criteria = extractQuoted(stripped, "criteria");
				} else if (stripped.startsWith("points:")) {
					currentSection.points = Number.parseInt(
						extractValue(stripped, "points"),
						10,
					);
				} else if (stripped.startsWith("priority:")) {
					currentSection.priority = extractQuoted(stripped, "priority");
				} else if (stripped.startsWith("description:")) {
					currentSection.description = extractQuoted(stripped, "description");
				} else if (stripped === "keywords:") {
					state = "KEYWORDS";
				}
			}
		}
	}

	flushSection();

	if (!config.file) throw new Error("video-summary.yaml: missing 'file' key");
	if (config.sections.length === 0) {
		throw new Error("video-summary.yaml: no sections found");
	}

	return config;
}

function normalize(heading: string): string {
	return heading.toLowerCase().replace(/\s+/g, " ").trim();
}

function parseMarkdownSections(content: string): Map<string, string[]> {
	const sections = new Map<string, string[]>();
	let currentHeading: string | null = null;
	let buffer: string[] = [];

	function flush(): void {
		if (currentHeading) sections.set(normalize(currentHeading), buffer);
	}

	for (const line of content.split("\n")) {
		const match = line.match(/^## (.+)/);
		if (match) {
			flush();
			currentHeading = match[1].trim();
			buffer = [];
		} else {
			buffer.push(line);
		}
	}
	flush();

	return sections;
}

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

		const cleaned = trimmed
			.replace(/\*\*Intervenant\s*:\*\*.*$/gi, " ")
			.replace(/\*\*Visuel\s*:\*\*.*$/gi, " ")
			.replace(/\*\*Durée.*?:\*\*.*$/gi, " ")
			.replace(/\[[^\]]*\]/g, " ")
			.replace(/\([^)]*\)/g, " ")
			.replace(/[|*_`#~>]/g, " ")
			.replace(/\s+/g, " ")
			.trim();

		if (cleaned.length > 0) {
			count += cleaned.split(" ").filter((word) => word.length > 0).length;
		}
	}

	return count;
}

function analyzeSection(
	sectionConfig: VideoSectionConfig,
	sections: Map<string, string[]>,
): SectionResult {
	const lines = sections.get(normalize(sectionConfig.heading));
	let wordCount = 0;
	let status: SectionStatus = "not_found";

	if (lines) {
		wordCount = countWords(lines);
		if (wordCount === 0) status = "empty";
		else if (wordCount < sectionConfig.min_words) status = "under";
		else if (sectionConfig.max_words && wordCount > sectionConfig.max_words) {
			status = "over";
		} else status = "ok";
	}

	let missingKeywords: string[] | undefined;
	if (lines && sectionConfig.keywords && sectionConfig.keywords.length > 0) {
		const fullText = lines.join("\n").toLowerCase();
		missingKeywords = sectionConfig.keywords.filter(
			(keyword) => !fullText.includes(keyword.toLowerCase()),
		);
		if (missingKeywords.length === 0) missingKeywords = undefined;
	}

	return { ...sectionConfig, wordCount, status, missingKeywords };
}

function statusIcon(status: SectionStatus): string {
	switch (status) {
		case "ok":
			return `${GREEN}✅${RESET}`;
		case "under":
			return `${YELLOW}⚠️ ${RESET}`;
		case "over":
			return `${YELLOW}↗${RESET}`;
		case "empty":
			return `${RED}❌${RESET}`;
		case "not_found":
			return `${DIM}??${RESET}`;
	}
}

function formatMinutes(minutes: number): string {
	const whole = Math.floor(minutes);
	const seconds = Math.round((minutes - whole) * 60);
	return `${whole} min ${seconds.toString().padStart(2, "0")}`;
}

function formatResult(result: SectionResult, wordsPerMinute: number): string {
	const heading =
		result.heading.length > 50
			? `${result.heading.slice(0, 47)}...`
			: result.heading;
	const paddedHeading = heading.padEnd(53);
	const duration = result.wordCount / wordsPerMinute;

	let detail = "";
	if (result.status === "not_found") {
		detail = `${DIM}— section introuvable${RESET}`;
	} else {
		detail = `(${BOLD}${result.wordCount}${RESET} mots, ${formatMinutes(duration)}, min ${result.min_words}`;
		if (result.max_words) detail += `, max ${result.max_words}`;
		detail += ")";
		if (result.status === "under") {
			detail += ` ${YELLOW}— ${result.min_words - result.wordCount} mots manquants${RESET}`;
		} else if (result.status === "over" && result.max_words) {
			detail += ` ${YELLOW}— ${result.wordCount - result.max_words} mots au-dessus${RESET}`;
		} else if (result.status === "empty") {
			detail += ` ${RED}— section vide${RESET}`;
		}
	}

	const badge = result.priority
		? (PRIORITY_BADGE[result.priority] ?? `[${result.priority}]`)
		: "";
	const criteria = result.criteria ? `${CYAN}${result.criteria}${RESET}` : "";
	const points = result.points ? `${BOLD}${result.points} pts${RESET}` : "";

	const lines = [
		`${statusIcon(result.status)}  ${paddedHeading} ${detail}  ${badge} ${criteria} ${points}`.trimEnd(),
	];

	if (result.description)
		lines.push(`      ${DIM}↳ ${result.description}${RESET}`);
	if (result.missingKeywords && result.missingKeywords.length > 0) {
		lines.push(
			`      ${YELLOW}🔑 manquants : ${result.missingKeywords.map((kw) => `"${kw}"`).join(", ")}${RESET}`,
		);
	}

	return lines.join("\n");
}

function progressBar(done: number, total: number): string {
	const width = 20;
	const filled = total === 0 ? 0 : Math.round((done / total) * width);
	const bar = "█".repeat(filled) + "░".repeat(width - filled);
	const pct = total === 0 ? 0 : Math.round((done / total) * 100);
	return `${DIM}[${bar}]${RESET} ${pct}%`;
}

function findProjectRoot(startDir: string): string {
	let dir = startDir;
	while (dir !== path.dirname(dir)) {
		if (existsSync(path.join(dir, "package.json"))) return dir;
		dir = path.dirname(dir);
	}
	return startDir;
}

function printSummary(
	results: SectionResult[],
	config: VideoConfig,
	content: string,
): boolean {
	const totalWords = results.reduce((sum, result) => sum + result.wordCount, 0);
	const totalMinutes = totalWords / config.words_per_minute;
	const ok = results.filter((result) => result.status === "ok").length;
	const under = results.filter((result) => result.status === "under").length;
	const over = results.filter((result) => result.status === "over").length;
	const empty = results.filter((result) => result.status === "empty").length;
	const notFound = results.filter(
		(result) => result.status === "not_found",
	).length;
	const pointsCovered = results
		.filter((result) => result.status === "ok")
		.reduce((sum, result) => sum + (result.points ?? 0), 0);
	const totalPoints = results.reduce(
		(sum, result) => sum + (result.points ?? 0),
		0,
	);

	const missingSpeakers = config.required_speakers.filter(
		(speaker) => !content.toLowerCase().includes(speaker.toLowerCase()),
	);
	const durationOk =
		totalMinutes >= config.min_minutes && totalMinutes <= config.max_minutes;

	console.log(`\n${"─".repeat(78)}`);
	console.log(
		`  ${BOLD}${results.length} séquences analysées${RESET}  ·  ` +
			`${GREEN}✅ ${ok} OK${RESET}  ·  ` +
			`${YELLOW}⚠️  ${under} sous le min${RESET}  ·  ` +
			`${YELLOW}↗ ${over} au-dessus${RESET}  ·  ` +
			`${RED}❌ ${empty} vides${RESET}` +
			(notFound > 0 ? `  ·  ${DIM}?? ${notFound} introuvables${RESET}` : ""),
	);
	console.log(
		`  Durée estimée : ${BOLD}${formatMinutes(totalMinutes)}${RESET} ` +
			`${DIM}(${totalWords.toLocaleString("fr-FR")} mots à ${config.words_per_minute} mots/min)${RESET}`,
	);
	console.log(
		`  Fenêtre attendue : ${config.min_minutes}-${config.max_minutes} min  ` +
			(durationOk ? `${GREEN}✅${RESET}` : `${RED}❌${RESET}`),
	);
	console.log(
		`  Critères vidéo couverts : ${BOLD}${pointsCovered}/${totalPoints} pts${RESET}  ${progressBar(pointsCovered, totalPoints)}`,
	);

	if (missingSpeakers.length === 0) {
		console.log(
			`  Intervenants requis : ${GREEN}✅ ${config.required_speakers.join(", ")}${RESET}`,
		);
	} else {
		console.log(
			`  Intervenants requis : ${RED}❌ manquants : ${missingSpeakers.join(", ")}${RESET}`,
		);
	}

	const hasSectionProblems = results.some(
		(result) =>
			result.status === "under" ||
			result.status === "empty" ||
			result.status === "not_found" ||
			result.status === "over",
	);

	return !hasSectionProblems && durationOk && missingSpeakers.length === 0;
}

function main(): void {
	const projectRoot = findProjectRoot(process.cwd());
	const yamlPath = path.join(projectRoot, "video-summary.yaml");

	if (!existsSync(yamlPath)) {
		console.error(`${RED}Erreur : video-summary.yaml introuvable${RESET}`);
		process.exit(2);
	}

	let config: VideoConfig;
	try {
		config = parseYaml(readFileSync(yamlPath, "utf-8"));
	} catch (error) {
		console.error(
			`${RED}Erreur de lecture du YAML : ${(error as Error).message}${RESET}`,
		);
		process.exit(2);
	}

	const markdownPath = path.join(projectRoot, config.file);
	if (!existsSync(markdownPath)) {
		console.error(
			`${RED}Erreur : fichier cible introuvable : ${markdownPath}${RESET}`,
		);
		process.exit(2);
	}

	const content = readFileSync(markdownPath, "utf-8");
	const sections = parseMarkdownSections(content);
	const results = config.sections.map((section) =>
		analyzeSection(section, sections),
	);

	console.log(
		`\n${BOLD}Vérification du script vidéo${RESET} — ${DIM}${config.file}${RESET}\n`,
	);
	for (const result of results) {
		console.log(formatResult(result, config.words_per_minute));
	}

	const ok = printSummary(results, config, content);
	process.exit(ok ? 0 : 1);
}

main();
