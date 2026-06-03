import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

// ── Types ──────────────────────────────────────────────────────────────────
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

type ProjectSeed = {
	name: string;
	etp: number;
	status: string;
	budget: number;
	manager: string;
	risks: RiskSeed[];
};

type RiskSeed = {
	name: string;
	criticality: string;
	owner: string;
	mitigation: string;
};

// ── Data ───────────────────────────────────────────────────────────────────
const PROJECTS: ProjectSeed[] = [
	{
		name: "Mise en conformité RGPD",
		etp: 13,
		status: "À surveiller",
		budget: 45_000,
		manager: "Jules Courtin",
		risks: [
			{
				name: "Risque RGPD - Registre des traitements incomplet",
				criticality: "Élevée",
				owner: "Jules Courtin",
				mitigation: "Revue DPO, contrôle CNIL et plan de remédiation priorisé.",
			},
		],
	},
	{
		name: "Déploiement ERP Finance & Supply Chain",
		etp: 19,
		status: "Critique",
		budget: 110_000,
		manager: "Sarah Projet",
		risks: [
			{
				name: "Risque budget - Dépassement ERP Finance",
				criticality: "Critique",
				owner: "Jules Courtin",
				mitigation:
					"Arbitrage COPIL, gel du périmètre et suivi hebdomadaire CPI/SPI.",
			},
		],
	},
	{
		name: "Plateforme Data Lake et BI Groupe",
		etp: 18,
		status: "En retard",
		budget: 85_000,
		manager: "Léo Brival",
		risks: [
			{
				name: "Risque planning - Retard jalon architecture Data Lake",
				criticality: "Élevée",
				owner: "Léo Brival",
				mitigation:
					"Activation buffer planning, revue architecture et priorisation MoSCoW.",
			},
		],
	},
	{
		name: "Programme Green IT - Cloud durable",
		etp: 11,
		status: "OK",
		budget: 40_000,
		manager: "Léo Brival",
		risks: [
			{
				name: "Risque Green IT - Indicateurs carbone incomplets",
				criticality: "Moyenne",
				owner: "Léo Brival",
				mitigation:
					"Mesures de sobriété, suivi consommation et métriques hébergement.",
			},
		],
	},
	{
		name: "Portail RH unifié",
		etp: 17,
		status: "Risque adoption",
		budget: 70_000,
		manager: "Sarah Projet",
		risks: [
			{
				name: "Risque adoption - Faible engagement utilisateurs RH",
				criticality: "Moyenne",
				owner: "Jules Courtin",
				mitigation:
					"Programme early adopters, formation ciblée et mesure adoption J+30.",
			},
		],
	},
];

const EMPLOYEES = [
	{
		name: "Jules Courtin",
		job: "Project Manager / PMO",
		department: "Direction générale et PMO",
	},
	{
		name: "Léo Brival",
		job: "Tech Lead / DSI",
		department: "IT & Infrastructure",
	},
	{
		name: "Camille Direction",
		job: "Directrice générale",
		department: "Direction générale et PMO",
	},
	{
		name: "Sarah Projet",
		job: "Cheffe de projet",
		department: "Développement & Digital Factory",
	},
];

const DOCUMENTS = [
	"Cahier des charges Tech4Value",
	"PV COPIL #1",
	"Budget prévisionnel 350 000 €",
	"Registre des risques",
	"Guide utilisateur MVP",
	"Support de formation PMO",
];

const APPROVALS = [
	"Arbitrage budget ERP Finance",
	"Validation jalon Data Lake",
	"Plan adoption Portail RH",
	"Changement périmètre MVP",
];

// ── Helpers ────────────────────────────────────────────────────────────────
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
			.replace(/^['"]|['"]$/g, "");
		env[key] = value;
	}

	if (env.ODOO_URL && !/^https?:\/\//.test(env.ODOO_URL)) {
		env.ODOO_URL = `https://${env.ODOO_URL}`;
	}

	if (!env.ODOO_DB && env.ODOO_URL) {
		try {
			env.ODOO_DB = new URL(env.ODOO_URL).hostname.split(".")[0] ?? "";
		} catch {
			// Keep ODOO_DB empty; validation below will report it.
		}
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
		if (dryRun) {
			console.log(`✓ ${label} already exists (#${existingId})`);
			return existingId;
		}

		await client.executeKw<boolean>(model, "write", [[existingId], values]);
		console.log(`↻ synced ${label} (#${existingId})`);
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

async function createAttachment(
	client: OdooClient,
	name: string,
	dryRun: boolean,
): Promise<void> {
	const existing = await client.executeKw<number[]>(
		"ir.attachment",
		"search",
		[[["name", "=", name]]],
		{ limit: 1 },
	);
	if (existing.length > 0) {
		console.log(`✓ document already exists: ${name}`);
		return;
	}
	if (dryRun) {
		console.log(`• would create document placeholder: ${name}`);
		return;
	}
	await client.executeKw<number>("ir.attachment", "create", [
		{
			name,
			type: "binary",
			datas: Buffer.from(
				`# ${name}\n\nDocument de démonstration Tech4Value.`,
				"utf-8",
			).toString("base64"),
			mimetype: "text/markdown",
		},
	]);
	console.log(`+ created document placeholder: ${name}`);
}

// ── Seeders ────────────────────────────────────────────────────────────────
async function seedEmployees(
	client: OdooClient,
	dryRun: boolean,
): Promise<void> {
	if (!(await modelExists(client, "hr.employee"))) {
		console.log("- skipped Employees: hr.employee model is not available");
		return;
	}
	for (const employee of EMPLOYEES) {
		await findOrCreate(
			client,
			"hr.employee",
			[["name", "=", employee.name]],
			{
				name: employee.name,
				job_title: `${employee.job} — ${employee.department}`,
			},
			`employee ${employee.name}`,
			dryRun,
		);
	}
}

async function seedProjects(
	client: OdooClient,
	dryRun: boolean,
): Promise<Map<string, number>> {
	const projectIds = new Map<string, number>();
	if (!(await modelExists(client, "project.project"))) {
		console.log("- skipped Projects: project.project model is not available");
		return projectIds;
	}

	for (const project of PROJECTS) {
		const projectId = await findOrCreate(
			client,
			"project.project",
			[["name", "=", project.name]],
			{
				name: project.name,
				description: `Tech4Value — ${project.etp} ETP — Budget ${project.budget.toLocaleString("fr-FR")} € — Statut ${project.status} — Responsable ${project.manager}`,
			},
			`project ${project.name}`,
			dryRun,
		);
		if (projectId) projectIds.set(project.name, projectId);
	}
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

	for (const project of PROJECTS) {
		const projectId = projectIds.get(project.name);
		if (!projectId && !dryRun) continue;

		for (const risk of project.risks) {
			const values: Record<string, JsonValue> = {
				name: risk.name,
				description: `Criticité : ${risk.criticality}\nResponsable : ${risk.owner}\nMitigation : ${risk.mitigation}`,
			};
			if (projectId) values.project_id = projectId;

			await findOrCreate(
				client,
				"project.task",
				[["name", "=", risk.name]],
				values,
				`risk task ${risk.name}`,
				dryRun,
			);
		}
	}
}

async function seedTimesheets(
	client: OdooClient,
	projectIds: Map<string, number>,
	dryRun: boolean,
): Promise<void> {
	if (!(await modelExists(client, "account.analytic.line"))) {
		console.log(
			"- skipped Timesheets: account.analytic.line model is not available",
		);
		return;
	}

	const entries = [
		{
			name: "Architecture technique",
			project: "Plateforme Data Lake et BI Groupe",
			employee: "Léo Brival",
			hours: 14,
		},
		{
			name: "Préparation COPIL",
			project: "Déploiement ERP Finance & Supply Chain",
			employee: "Jules Courtin",
			hours: 8,
		},
		{
			name: "Ateliers utilisateurs",
			project: "Portail RH unifié",
			employee: "Sarah Projet",
			hours: 12,
		},
	];

	for (const entry of entries) {
		const projectId = projectIds.get(entry.project);
		if (!projectId && !dryRun) continue;
		const label = `timesheet ${entry.name}`;
		const employeeIds = await client.executeKw<number[]>(
			"hr.employee",
			"search",
			[[["name", "=", entry.employee]]],
			{ limit: 1 },
		);
		const employeeId = employeeIds[0];
		if (!employeeId && !dryRun) {
			console.log(`- skipped ${label}: employee ${entry.employee} not found`);
			continue;
		}

		try {
			if (!projectId || !employeeId) {
				console.log(`• would create ${label}`);
				continue;
			}
			await findOrCreate(
				client,
				"account.analytic.line",
				[["name", "=", entry.name]],
				{
					name: entry.name,
					project_id: projectId,
					employee_id: employeeId,
					unit_amount: entry.hours,
				},
				label,
				dryRun,
			);
		} catch (error) {
			console.log(`- skipped ${label}: ${(error as Error).message}`);
		}
	}
}

async function seedDocuments(
	client: OdooClient,
	dryRun: boolean,
): Promise<void> {
	for (const document of DOCUMENTS) {
		await createAttachment(client, document, dryRun);
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
			console.log(
				`+ created approval category Arbitrage COPIL Tech4Value (#${categoryId})`,
			);
		} else if (categoryId) {
			console.log(`✓ approval category already exists (#${categoryId})`);
		} else {
			console.log(
				"• would create approval category Arbitrage COPIL Tech4Value",
			);
		}
	} catch (error) {
		console.log(`- skipped approval category: ${(error as Error).message}`);
	}

	for (const approval of APPROVALS) {
		try {
			const values: Record<string, JsonValue> = {
				name: approval,
				reason: "Demande de démonstration COPIL Tech4Value",
			};
			if (categoryId) values.category_id = categoryId;

			await findOrCreate(
				client,
				"approval.request",
				[["name", "=", approval]],
				values,
				`approval ${approval}`,
				dryRun,
			);
		} catch (error) {
			console.log(
				`- skipped approval ${approval}: ${(error as Error).message}`,
			);
		}
	}
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main(): Promise<void> {
	const dryRun = !process.argv.includes("--apply");
	const projectRoot = findProjectRoot(process.cwd());
	const config = loadEnv(path.join(projectRoot, ".env"));
	const client = new OdooClient(config);

	console.log(`Odoo demo configuration ${dryRun ? "(dry-run)" : "(apply)"}`);
	console.log(`Target: ${config.ODOO_URL.replace(/:\/\/.*@/, "://***@")}`);

	const uid = await client.authenticate();
	console.log(`✓ authenticated with Odoo user #${uid}`);

	await seedEmployees(client, dryRun);
	const projectIds = await seedProjects(client, dryRun);
	await seedTasks(client, projectIds, dryRun);
	await seedTimesheets(client, projectIds, dryRun);
	await seedDocuments(client, dryRun);
	await seedApprovals(client, dryRun);

	console.log("Done.");
	if (dryRun) {
		console.log("Run with --apply to create the demo data in Odoo.");
	}
}

main().catch((error) => {
	console.error(`Error: ${(error as Error).message}`);
	process.exit(1);
});
