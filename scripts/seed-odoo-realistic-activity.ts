import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

type JsonValue =
	| string
	| number
	| boolean
	| null
	| JsonValue[]
	| { [key: string]: JsonValue };

type EnvConfig = {
	ODOO_URL: string;
	ODOO_DB: string;
	ODOO_USERNAME: string;
	ODOO_API_KEY: string;
};

type ActivityTask = {
	project: string;
	name: string;
	description: string;
	deadline: string;
};

type TimesheetEntry = {
	project: string;
	employee: string;
	name: string;
	hours: number;
	date: string;
};

const TARGET_PROJECTS = [
	"Mise en conformité RGPD",
	"Déploiement ERP Finance & Supply Chain",
	"Plateforme Data Lake et BI Groupe",
	"Programme Green IT - Cloud durable",
	"Portail RH unifié",
];

const ADDITIONAL_EMPLOYEES = [
	{
		name: "Nadia Finance",
		job: "Responsable Finance",
		department: "Finance & Contrôle de gestion",
	},
	{
		name: "Thomas PMO",
		job: "Analyste PMO",
		department: "Direction générale et PMO",
	},
	{
		name: "Inès Data",
		job: "Data Analyst",
		department: "Data & BI",
	},
	{
		name: "Marc Infrastructure",
		job: "Ingénieur Cloud",
		department: "IT & Infrastructure",
	},
	{
		name: "Clara RH",
		job: "Référente RH",
		department: "Ressources humaines",
	},
];

const ACTIVITY_TASKS: ActivityTask[] = [
	{
		project: "Mise en conformité RGPD",
		name: "[Démo activité] Cartographie des traitements prioritaires",
		description:
			"Atelier de consolidation des traitements critiques avec le PMO, la DSI et les référents métier.",
		deadline: "2026-06-10",
	},
	{
		project: "Mise en conformité RGPD",
		name: "[Démo activité] Revue DPO du registre des risques",
		description:
			"Contrôle des risques résiduels et préparation du plan de remédiation RGPD.",
		deadline: "2026-06-14",
	},
	{
		project: "Déploiement ERP Finance & Supply Chain",
		name: "[Démo activité] Arbitrage budget lot finance",
		description:
			"Préparation du dossier COPIL sur les écarts budgétaires et options de réduction du périmètre.",
		deadline: "2026-06-12",
	},
	{
		project: "Déploiement ERP Finance & Supply Chain",
		name: "[Démo activité] Recette flux approvisionnement",
		description:
			"Vérification des flux fournisseurs, commandes et rapprochements avec l'équipe finance.",
		deadline: "2026-06-18",
	},
	{
		project: "Plateforme Data Lake et BI Groupe",
		name: "[Démo activité] Validation architecture ingestion",
		description:
			"Revue technique du pipeline d'ingestion et des contrats de données pour Power BI.",
		deadline: "2026-06-11",
	},
	{
		project: "Plateforme Data Lake et BI Groupe",
		name: "[Démo activité] Test API reporting PMO",
		description:
			"Test de l'API REST dédiée au reporting PMO avec fallback CSV/XLSX documenté.",
		deadline: "2026-06-17",
	},
	{
		project: "Programme Green IT - Cloud durable",
		name: "[Démo activité] Mesure empreinte hébergement",
		description:
			"Collecte des indicateurs d'usage cloud, consommation et optimisation de capacité.",
		deadline: "2026-06-13",
	},
	{
		project: "Programme Green IT - Cloud durable",
		name: "[Démo activité] Plan sobriété environnements",
		description:
			"Définition des règles d'extinction, dimensionnement et suivi des environnements non critiques.",
		deadline: "2026-06-20",
	},
	{
		project: "Portail RH unifié",
		name: "[Démo activité] Atelier adoption managers",
		description:
			"Session avec les managers pilotes pour identifier les irritants et préparer les supports d'adoption.",
		deadline: "2026-06-09",
	},
	{
		project: "Portail RH unifié",
		name: "[Démo activité] Parcours utilisateur collaborateur",
		description:
			"Validation du parcours collaborateur et priorisation des ajustements UX du MVP.",
		deadline: "2026-06-16",
	},
];

const TIMESHEETS: TimesheetEntry[] = [
	{
		project: "Mise en conformité RGPD",
		employee: "Thomas PMO",
		name: "[Démo activité] Consolidation registre RGPD",
		hours: 6,
		date: "2026-06-03",
	},
	{
		project: "Mise en conformité RGPD",
		employee: "Jules Courtin",
		name: "[Démo activité] Préparation arbitrage conformité",
		hours: 4,
		date: "2026-06-04",
	},
	{
		project: "Déploiement ERP Finance & Supply Chain",
		employee: "Nadia Finance",
		name: "[Démo activité] Analyse écarts budget ERP",
		hours: 7.5,
		date: "2026-06-04",
	},
	{
		project: "Déploiement ERP Finance & Supply Chain",
		employee: "Sarah Projet",
		name: "[Démo activité] Coordination recette finance",
		hours: 5,
		date: "2026-06-05",
	},
	{
		project: "Plateforme Data Lake et BI Groupe",
		employee: "Léo Brival",
		name: "[Démo activité] Revue architecture data",
		hours: 6,
		date: "2026-06-05",
	},
	{
		project: "Plateforme Data Lake et BI Groupe",
		employee: "Inès Data",
		name: "[Démo activité] Tests indicateurs Power BI",
		hours: 7,
		date: "2026-06-06",
	},
	{
		project: "Programme Green IT - Cloud durable",
		employee: "Marc Infrastructure",
		name: "[Démo activité] Mesure capacité cloud",
		hours: 5.5,
		date: "2026-06-06",
	},
	{
		project: "Programme Green IT - Cloud durable",
		employee: "Léo Brival",
		name: "[Démo activité] Revue plan sobriété",
		hours: 3,
		date: "2026-06-07",
	},
	{
		project: "Portail RH unifié",
		employee: "Clara RH",
		name: "[Démo activité] Atelier adoption portail RH",
		hours: 6,
		date: "2026-06-07",
	},
	{
		project: "Portail RH unifié",
		employee: "Sarah Projet",
		name: "[Démo activité] Synthèse retours pilotes RH",
		hours: 4,
		date: "2026-06-08",
	},
];

const DOCUMENTS = [
	"[Démo activité] Compte rendu COPIL portefeuille S23",
	"[Démo activité] Synthèse arbitrage ERP Finance",
	"[Démo activité] Plan adoption Portail RH J+30",
	"[Démo activité] Rapport risques Data Lake",
	"[Démo activité] Note Green IT capacité cloud",
];

const APPROVALS = [
	"[Démo activité] Validation budget correctif ERP",
	"[Démo activité] Go jalon ingestion Data Lake",
	"[Démo activité] Approbation plan pilotes Portail RH",
	"[Démo activité] Arbitrage capacité IT Green Cloud",
];

const AUDIT_MODELS = [
	{ model: "hr.employee", label: "Employees" },
	{ model: "project.project", label: "Projects" },
	{ model: "project.task", label: "Tasks" },
	{ model: "account.analytic.line", label: "Timesheets" },
	{ model: "ir.attachment", label: "Documents / Attachments" },
	{ model: "approval.request", label: "Approvals" },
	{ model: "approval.category", label: "Approval categories" },
	{ model: "planning.slot", label: "Planning slots" },
];

function loadEnv(filePath: string): EnvConfig {
	if (!existsSync(filePath)) {
		throw new Error(`Missing .env file at ${filePath}`);
	}

	const env: Record<string, string> = {};
	for (const line of readFileSync(filePath, "utf-8").split("\n")) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#")) continue;
		const index = trimmed.indexOf("=");
		if (index === -1) continue;
		const key = trimmed.slice(0, index).trim();
		const value = trimmed
			.slice(index + 1)
			.trim()
			.replace(/^["']|["']$/g, "");
		env[key] = value;
	}

	if (env.ODOO_URL && !/^https?:\/\//.test(env.ODOO_URL)) {
		env.ODOO_URL = `https://${env.ODOO_URL}`;
	}

	if (!env.ODOO_DB && env.ODOO_URL) {
		env.ODOO_DB = new URL(env.ODOO_URL).hostname.split(".")[0] ?? "";
	}

	const required = ["ODOO_URL", "ODOO_DB", "ODOO_USERNAME", "ODOO_API_KEY"];
	const missing = required.filter((key) => !env[key]);
	if (missing.length > 0) {
		throw new Error(
			`Missing required Odoo env variables: ${missing.join(", ")}`,
		);
	}

	return env as EnvConfig;
}

function findProjectRoot(startDir: string): string {
	let dir = startDir;
	while (dir !== path.dirname(dir)) {
		if (existsSync(path.join(dir, "package.json"))) return dir;
		dir = path.dirname(dir);
	}
	return startDir;
}

class OdooClient {
	private id = 1;
	private uid: number | null = null;
	private readonly url: string;

	constructor(private readonly config: EnvConfig) {
		this.url = config.ODOO_URL.replace(/\/$/, "");
	}

	get targetUrl(): string {
		return this.url;
	}

	async authenticate(): Promise<number> {
		const result = await this.call<number | false>("common", "authenticate", [
			this.config.ODOO_DB,
			this.config.ODOO_USERNAME,
			this.config.ODOO_API_KEY,
			{},
		]);
		if (!result) throw new Error("Odoo authentication failed");
		this.uid = result;
		return result;
	}

	async executeKw<T = JsonValue>(
		model: string,
		method: string,
		args: JsonValue[] = [],
		kwargs: Record<string, JsonValue> = {},
	): Promise<T> {
		if (!this.uid) throw new Error("Authenticate before calling execute_kw");
		return this.call<T>("object", "execute_kw", [
			this.config.ODOO_DB,
			this.uid,
			this.config.ODOO_API_KEY,
			model,
			method,
			args,
			kwargs,
		]);
	}

	private async call<T>(
		service: string,
		method: string,
		args: JsonValue[],
	): Promise<T> {
		const response = await fetch(`${this.url}/jsonrpc`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				jsonrpc: "2.0",
				method: "call",
				params: { service, method, args },
				id: this.id++,
			}),
		});

		if (!response.ok) {
			throw new Error(`Odoo HTTP error ${response.status}`);
		}

		const payload = (await response.json()) as {
			result?: T;
			error?: { message?: string; data?: { message?: string } };
		};
		if (payload.error) {
			throw new Error(
				payload.error.data?.message ??
					payload.error.message ??
					"Unknown Odoo error",
			);
		}
		return payload.result as T;
	}
}

async function modelExists(
	client: OdooClient,
	model: string,
): Promise<boolean> {
	try {
		const count = await client.executeKw<number>("ir.model", "search_count", [
			[["model", "=", model]],
		]);
		return count > 0;
	} catch {
		return false;
	}
}

async function fieldsExist(
	client: OdooClient,
	model: string,
	fields: string[],
): Promise<Set<string>> {
	try {
		const result = await client.executeKw<Record<string, JsonValue>>(
			model,
			"fields_get",
			[fields],
		);
		return new Set(Object.keys(result));
	} catch {
		return new Set();
	}
}

async function auditData(client: OdooClient): Promise<void> {
	console.log("\nAccessible Odoo data snapshot");
	for (const item of AUDIT_MODELS) {
		if (!(await modelExists(client, item.model))) {
			console.log(`- ${item.label}: model unavailable`);
			continue;
		}

		try {
			const count = await client.executeKw<number>(item.model, "search_count", [
				[],
			]);
			const records = await client.executeKw<
				Array<{ id: number; display_name?: string }>
			>(item.model, "search_read", [[]], {
				fields: ["display_name"],
				limit: 10,
				order: "id desc",
			});
			const sample = records
				.map((record) => `#${record.id} ${record.display_name ?? "sans nom"}`)
				.join("; ");
			console.log(
				`- ${item.label}: ${count} record(s)${sample ? ` | ${sample}` : ""}`,
			);
		} catch (error) {
			console.log(`- ${item.label}: read failed (${(error as Error).message})`);
		}
	}
}

async function findOrCreate(
	client: OdooClient,
	model: string,
	domain: JsonValue[],
	values: Record<string, JsonValue>,
	label: string,
	dryRun: boolean,
): Promise<number | null> {
	const existing = await client.executeKw<number[]>(model, "search", [domain], {
		limit: 1,
	});
	const existingId = existing[0];

	if (existingId) {
		console.log(`✓ ${label} already exists (#${existingId})`);
		return existingId;
	}

	if (dryRun) {
		console.log(`• would create ${label}`);
		return null;
	}

	const id = await client.executeKw<number>(model, "create", [values]);
	console.log(`+ created ${label} (#${id})`);
	return id;
}

async function seedEmployees(
	client: OdooClient,
	dryRun: boolean,
): Promise<Map<string, number>> {
	const employeeIds = new Map<string, number>();
	if (!(await modelExists(client, "hr.employee"))) {
		console.log("- skipped Employees: hr.employee model is not available");
		return employeeIds;
	}

	for (const employee of ADDITIONAL_EMPLOYEES) {
		const id = await findOrCreate(
			client,
			"hr.employee",
			[["name", "=", employee.name]],
			{
				name: employee.name,
				job_title: `${employee.job} - ${employee.department}`,
			},
			`employee ${employee.name}`,
			dryRun,
		);
		if (id) employeeIds.set(employee.name, id);
	}

	for (const name of ["Jules Courtin", "Léo Brival", "Sarah Projet"]) {
		const ids = await client.executeKw<number[]>("hr.employee", "search", [
			[["name", "=", name]],
		]);
		if (ids[0]) employeeIds.set(name, ids[0]);
	}

	return employeeIds;
}

async function getProjects(client: OdooClient): Promise<Map<string, number>> {
	const projectIds = new Map<string, number>();
	if (!(await modelExists(client, "project.project"))) return projectIds;

	const records = await client.executeKw<Array<{ id: number; name: string }>>(
		"project.project",
		"search_read",
		[[["name", "in", TARGET_PROJECTS]]],
		{ fields: ["name"], limit: 50 },
	);
	for (const project of records) projectIds.set(project.name, project.id);
	return projectIds;
}

async function seedTasks(
	client: OdooClient,
	projectIds: Map<string, number>,
	dryRun: boolean,
): Promise<void> {
	if (!(await modelExists(client, "project.task"))) {
		console.log("- skipped Tasks: project.task model is not available");
		return;
	}

	const fields = await fieldsExist(client, "project.task", [
		"name",
		"project_id",
		"description",
		"date_deadline",
	]);

	for (const task of ACTIVITY_TASKS) {
		const projectId = projectIds.get(task.project);
		if (!projectId) {
			console.log(
				`- skipped task ${task.name}: project ${task.project} not found`,
			);
			continue;
		}

		const values: Record<string, JsonValue> = { name: task.name };
		if (fields.has("project_id")) values.project_id = projectId;
		if (fields.has("description")) values.description = task.description;
		if (fields.has("date_deadline")) values.date_deadline = task.deadline;

		await findOrCreate(
			client,
			"project.task",
			[["name", "=", task.name]],
			values,
			`task ${task.name}`,
			dryRun,
		);
	}
}

async function seedTimesheets(
	client: OdooClient,
	projectIds: Map<string, number>,
	employeeIds: Map<string, number>,
	dryRun: boolean,
): Promise<void> {
	if (!(await modelExists(client, "account.analytic.line"))) {
		console.log(
			"- skipped Timesheets: account.analytic.line model is not available",
		);
		return;
	}

	const fields = await fieldsExist(client, "account.analytic.line", [
		"name",
		"project_id",
		"employee_id",
		"unit_amount",
		"date",
	]);

	for (const entry of TIMESHEETS) {
		const projectId = projectIds.get(entry.project);
		const employeeId = employeeIds.get(entry.employee);
		if (!projectId || !employeeId) {
			console.log(
				`- skipped timesheet ${entry.name}: missing project or employee reference`,
			);
			continue;
		}

		const values: Record<string, JsonValue> = { name: entry.name };
		if (fields.has("project_id")) values.project_id = projectId;
		if (fields.has("employee_id")) values.employee_id = employeeId;
		if (fields.has("unit_amount")) values.unit_amount = entry.hours;
		if (fields.has("date")) values.date = entry.date;

		try {
			await findOrCreate(
				client,
				"account.analytic.line",
				[["name", "=", entry.name]],
				values,
				`timesheet ${entry.name}`,
				dryRun,
			);
		} catch (error) {
			console.log(
				`- skipped timesheet ${entry.name}: ${(error as Error).message}`,
			);
		}
	}
}

async function seedDocuments(
	client: OdooClient,
	dryRun: boolean,
): Promise<void> {
	for (const name of DOCUMENTS) {
		const existing = await client.executeKw<number[]>(
			"ir.attachment",
			"search",
			[[["name", "=", name]]],
			{ limit: 1 },
		);
		if (existing[0]) {
			console.log(`✓ document already exists: ${name} (#${existing[0]})`);
			continue;
		}
		if (dryRun) {
			console.log(`• would create document ${name}`);
			continue;
		}
		const id = await client.executeKw<number>("ir.attachment", "create", [
			{
				name,
				type: "binary",
				datas: Buffer.from(
					`# ${name}\n\nDocument factice généré pour simuler l'activité Tech4Value.`,
					"utf-8",
				).toString("base64"),
				mimetype: "text/markdown",
			},
		]);
		console.log(`+ created document ${name} (#${id})`);
	}
}

async function seedApprovals(
	client: OdooClient,
	dryRun: boolean,
): Promise<void> {
	if (!(await modelExists(client, "approval.request"))) {
		console.log("- skipped Approvals: approval.request model is not available");
		return;
	}

	let categoryId: number | undefined;
	try {
		const categoryIds = await client.executeKw<number[]>(
			"approval.category",
			"search",
			[[["name", "=", "Arbitrage COPIL Tech4Value"]]],
			{ limit: 1 },
		);
		categoryId = categoryIds[0];
		if (!categoryId && !dryRun) {
			categoryId = await client.executeKw<number>(
				"approval.category",
				"create",
				[{ name: "Arbitrage COPIL Tech4Value" }],
			);
			console.log(`+ created approval category (#${categoryId})`);
		}
	} catch (error) {
		console.log(
			`- skipped approval category lookup: ${(error as Error).message}`,
		);
	}

	for (const name of APPROVALS) {
		const values: Record<string, JsonValue> = {
			name,
			reason:
				"Demande factice pour simuler un arbitrage COPIL dans la démonstration Tech4Value.",
		};
		if (categoryId) values.category_id = categoryId;

		try {
			await findOrCreate(
				client,
				"approval.request",
				[["name", "=", name]],
				values,
				`approval ${name}`,
				dryRun,
			);
		} catch (error) {
			console.log(`- skipped approval ${name}: ${(error as Error).message}`);
		}
	}
}

async function main(): Promise<void> {
	const dryRun = !process.argv.includes("--apply");
	const projectRoot = findProjectRoot(process.cwd());
	const config = loadEnv(path.join(projectRoot, ".env"));
	const client = new OdooClient(config);

	console.log(
		`Odoo realistic activity seed ${dryRun ? "(dry-run)" : "(apply)"}`,
	);
	console.log(`Target: ${client.targetUrl}`);
	const uid = await client.authenticate();
	console.log(`✓ authenticated with Odoo user #${uid}`);

	await auditData(client);
	console.log("\nSeeding realistic activity data");
	const projectIds = await getProjects(client);
	const employeeIds = await seedEmployees(client, dryRun);
	await seedTasks(client, projectIds, dryRun);
	await seedTimesheets(client, projectIds, employeeIds, dryRun);
	await seedDocuments(client, dryRun);
	await seedApprovals(client, dryRun);

	console.log("Done.");
	if (dryRun)
		console.log("Run with --apply to create the demo activity in Odoo.");
}

main().catch((error) => {
	console.error(`Error: ${(error as Error).message}`);
	process.exit(1);
});
