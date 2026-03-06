# Architecture Technique - Tech4Value MVP
## Solution de Pilotage Stratégique des Projets

**Version** : 1.0
**Date** : [À compléter]
**Auteur** : [Tech Lead]

---

## Table des Matières

1. [Vue d'Ensemble](#1-vue-densemble)
2. [Principes Architecturaux](#2-principes-architecturaux)
3. [Architecture Applicative](#3-architecture-applicative)
4. [Architecture Technique](#4-architecture-technique)
5. [Modèle de Données](#5-modèle-de-données)
6. [Intégrations](#6-intégrations)
7. [Sécurité](#7-sécurité)
8. [Performance & Scalabilité](#8-performance--scalabilité)
9. [Déploiement](#9-déploiement)
10. [Monitoring & Observabilité](#10-monitoring--observabilité)

---

## 1. Vue d'Ensemble

### 1.1 Contexte

Le MVP Tech4Value est une application web full-stack permettant le pilotage stratégique des projets pour une entreprise de 185 collaborateurs gérant 5 projets stratégiques.

### 1.2 Objectifs Architecturaux

- **Modularité** : Architecture découplée permettant l'évolution indépendante des composants
- **Interopérabilité** : Intégration native avec l'écosystème SI existant (Odoo, SharePoint, Power BI)
- **Scalabilité** : Support de 185 utilisateurs avec possibilité d'extension
- **Maintenabilité** : Code propre, testé, documenté
- **Performance** : Temps de réponse <500ms, chargement initial <2s

### 1.3 Contraintes

- **Temporelles** : Développement en 9 semaines (Phase 3)
- **Budgétaires** : Infrastructure ~2000€ (privilégier free tiers)
- **Techniques** : Compatibilité APIs existantes (Odoo v15, SharePoint Online)
- **Réglementaires** : RGPD, WCAG 2.1 AA, OWASP Top 10

---

## 2. Principes Architecturaux

### 2.1 Architecture Patterns

#### Pattern Principal : **Three-Tier Architecture**

```
┌──────────────────┐
│  Presentation    │  ← Frontend (React/Vue.js)
│      Layer       │
└────────┬─────────┘
         │ HTTPS/REST
┌────────▼─────────┐
│   Application    │  ← Backend (Node.js/Python)
│      Layer       │
└────────┬─────────┘
         │ SQL/NoSQL
┌────────▼─────────┐
│      Data        │  ← Database (PostgreSQL/MongoDB)
│      Layer       │
└──────────────────┘
```

#### Patterns Complémentaires

- **MVC** (Model-View-Controller) : Séparation des responsabilités
- **Repository Pattern** : Abstraction de l'accès aux données
- **Service Layer** : Logique métier centralisée
- **API Gateway** : Point d'entrée unique pour le frontend
- **Adapter Pattern** : Intégrations systèmes externes

### 2.2 Principes de Conception

- **SOLID** : Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **DRY** (Don't Repeat Yourself) : Réutilisation du code
- **KISS** (Keep It Simple, Stupid) : Simplicité avant complexité
- **YAGNI** (You Aren't Gonna Need It) : Implémenter uniquement ce qui est nécessaire
- **Separation of Concerns** : Découplage des responsabilités

### 2.3 Choix Technologiques

#### Option Retenue : **Stack JavaScript (MERN)**

**Justifications** :
- ✅ **Cohérence** : JavaScript/TypeScript full-stack (frontend + backend)
- ✅ **Écosystème** : NPM riche, communauté active
- ✅ **Performance** : Node.js async/non-blocking
- ✅ **Compétences** : Équipe maîtrise JavaScript
- ✅ **Déploiement** : Vercel + Railway (free tiers généreux)

**Stack Finale** :
- **Frontend** : React 18 + TypeScript + Tailwind CSS + Zustand
- **Backend** : Node.js 18 LTS + Express + TypeScript + Prisma ORM
- **Database** : PostgreSQL 15 (Supabase managed)
- **CI/CD** : GitHub Actions
- **Hosting** : Vercel (frontend) + Railway (backend + DB)

---

## 3. Architecture Applicative

### 3.1 Diagramme de Haut Niveau

```
┌─────────────────────────────────────────────────────────────────┐
│                        USERS (185 utilisateurs)                 │
│         PMO Global, Chefs de Projet, Direction, Collaborateurs  │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                     HTTPS (port 443)
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                   FRONTEND (React + TypeScript)                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Dashboard   │  │   Projects   │  │  Reporting   │          │
│  │  Component   │  │  Management  │  │   Module     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  - Authentication (JWT tokens)                                  │
│  - State Management (Zustand)                                   │
│  - API Client (Axios)                                           │
│  - Charts (Recharts)                                            │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                        REST API (JSON)
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKEND (Node.js + Express)                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                     API Gateway                          │  │
│  │  - Authentication Middleware (JWT)                       │  │
│  │  - Authorization Middleware (RBAC)                       │  │
│  │  - Rate Limiting                                         │  │
│  │  - Error Handling                                        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Projects   │  │     Users    │  │  Reporting   │          │
│  │   Service    │  │   Service    │  │   Service    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │    Odoo      │  │  SharePoint  │  │   Power BI   │          │
│  │   Adapter    │  │   Adapter    │  │   Adapter    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                           PostgreSQL
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                DATABASE (PostgreSQL 15 via Supabase)            │
│  ┌─────────┐ ┌──────────┐ ┌──────────┐ ┌─────────┐             │
│  │ Projects│ │  Users   │ │Timesheets│ │Documents│             │
│  └─────────┘ └──────────┘ └──────────┘ └─────────┘             │
└─────────────────────────────────────────────────────────────────┘
                                │
                                │
┌───────────────────────────────▼─────────────────────────────────┐
│                       EXTERNAL SYSTEMS                          │
│  ┌──────────┐  ┌──────────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Odoo    │  │  SharePoint  │  │ Power BI │  │ Azure AD │   │
│  │  v15     │  │    Online    │  │ (Export) │  │  (Mock)  │   │
│  └──────────┘  └──────────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Découpage en Modules

#### Frontend Modules

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base (Button, Input, Card...)
│   ├── dashboard/      # Composants Dashboard
│   ├── projects/       # Composants Projets
│   └── charts/         # Composants Graphiques
├── pages/              # Pages de l'application
│   ├── Dashboard.tsx
│   ├── Projects.tsx
│   ├── ProjectDetail.tsx
│   └── Reports.tsx
├── services/           # Services API
│   ├── api.ts          # Client API Axios
│   ├── projectsService.ts
│   └── usersService.ts
├── stores/             # State management (Zustand)
│   ├── authStore.ts
│   ├── projectsStore.ts
│   └── uiStore.ts
├── hooks/              # Custom React hooks
├── utils/              # Utilitaires
├── types/              # Types TypeScript
└── App.tsx             # Composant racine
```

#### Backend Modules

```
src/
├── api/                # Routes API
│   ├── projects.routes.ts
│   ├── users.routes.ts
│   ├── timesheets.routes.ts
│   └── reports.routes.ts
├── services/           # Logique métier
│   ├── projects.service.ts
│   ├── users.service.ts
│   ├── reporting.service.ts
│   └── integrations/
│       ├── odoo.service.ts
│       ├── sharepoint.service.ts
│       └── powerbi.service.ts
├── repositories/       # Accès données
│   ├── projects.repository.ts
│   └── users.repository.ts
├── middleware/         # Middlewares Express
│   ├── auth.middleware.ts
│   ├── rbac.middleware.ts
│   └── errorHandler.middleware.ts
├── models/             # Modèles Prisma
│   └── schema.prisma
├── utils/              # Utilitaires
├── config/             # Configuration
└── server.ts           # Point d'entrée
```

---

## 4. Architecture Technique

### 4.1 Stack Technique Détaillée

#### Frontend

| Composant | Technologie | Version | Justification |
|-----------|-------------|---------|---------------|
| **Framework** | React | 18.2+ | Standard industrie, écosystème riche, performance |
| **Langage** | TypeScript | 5.0+ | Type safety, meilleure maintenabilité |
| **Build Tool** | Vite | 4.0+ | Fast HMR, optimisations modernes |
| **Routing** | React Router | 6.0+ | Standard pour SPA React |
| **State Management** | Zustand | 4.0+ | Simple, performant, peu de boilerplate |
| **HTTP Client** | Axios | 1.4+ | Interceptors, error handling, retry logic |
| **UI Framework** | Tailwind CSS | 3.3+ | Utility-first, customizable, performant |
| **Component Library** | shadcn/ui | Latest | Composants accessibles basés sur Radix UI |
| **Charts** | Recharts | 2.5+ | Composable, responsive, React-native |
| **Forms** | React Hook Form | 7.0+ | Performance, validation (Zod) |
| **Date Handling** | date-fns | 2.30+ | Lightweight alternative à Moment.js |
| **Icons** | Lucide React | Latest | Modern, cohérent, tree-shakeable |

#### Backend

| Composant | Technologie | Version | Justification |
|-----------|-------------|---------|---------------|
| **Runtime** | Node.js | 18 LTS | Stable, support long-terme |
| **Framework** | Express | 4.18+ | Minimaliste, flexible, standard industrie |
| **Langage** | TypeScript | 5.0+ | Type safety, meilleure DX |
| **ORM** | Prisma | 5.0+ | Type-safe, migrations automatiques, introspection |
| **Validation** | Zod | 3.22+ | Schema validation TypeScript-first |
| **Authentication** | jsonwebtoken | 9.0+ | JWT standard |
| **Password Hashing** | bcrypt | 5.1+ | Sécurisé, standard industrie |
| **HTTP Client** | axios | 1.4+ | Pour intégrations externes (Odoo, SharePoint) |
| **Scheduling** | node-cron | 3.0+ | Tâches planifiées (sync Odoo, export Power BI) |
| **PDF Generation** | pdfkit | 0.13+ | Génération rapports PDF |
| **Excel Export** | exceljs | 4.3+ | Génération rapports Excel |

#### Database

| Composant | Technologie | Version | Justification |
|-----------|-------------|---------|---------------|
| **SGBD** | PostgreSQL | 15+ | Fiabilité, ACID, JSON support, performance |
| **Hosting** | Supabase | Latest | PostgreSQL géré, backups auto, free tier |
| **Connection Pooling** | Prisma (built-in) | - | Gestion efficace des connexions |

#### DevOps & Infrastructure

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| **Version Control** | Git + GitHub | Standard, collaboration, CI/CD intégré |
| **CI/CD** | GitHub Actions | Intégration native GitHub, free tier |
| **Frontend Hosting** | Vercel | Déploiement automatique, CDN global, free tier |
| **Backend Hosting** | Railway | PostgreSQL + backend, free tier |
| **Environment Vars** | dotenv | Gestion locale + secrets cloud |
| **Container** | Docker (optional) | Reproductibilité environnements |

### 4.2 Infrastructure Cloud

#### Vercel (Frontend)

```yaml
Project: tech4value-frontend
- Framework: React (auto-détecté)
- Build Command: npm run build
- Output Directory: dist
- Environment Variables:
  - VITE_API_URL: https://api.tech4value.railway.app
  - VITE_ENV: production
- Domain: tech4value-mvp.vercel.app
```

#### Railway (Backend + Database)

```yaml
Services:
  backend:
    - Runtime: Node.js 18
    - Start Command: npm run start
    - Environment Variables:
      - DATABASE_URL: postgresql://...
      - JWT_SECRET: ***
      - ODOO_API_URL: ***
      - SHAREPOINT_API_URL: ***
    - Port: 3000
    - Health Check: /health

  database:
    - Service: PostgreSQL 15
    - Storage: 1GB (free tier)
    - Backups: Daily (7 days retention)
```

---

## 5. Modèle de Données

### 5.1 Schéma Prisma

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// Users & Authentication
model User {
  id            String       @id @default(uuid())
  email         String       @unique
  name          String
  password      String       // hashed with bcrypt
  role          Role         @default(USER)
  poleId        String?
  pole          Pole?        @relation(fields: [poleId], references: [id])
  costPerDay    Float?       // Cost per day (for budget calculations)
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt

  timesheets    Timesheet[]
  assignedProjects ProjectAssignment[]
  @@map("users")
}

enum Role {
  ADMIN    // PMO Global
  PM       // Chef de Projet
  USER     // Collaborateur
}

// Organizational structure
model Pole {
  id          String    @id @default(uuid())
  name        String    @unique
  managerId   String?
  manager     User?     @relation(fields: [managerId], references: [id])

  users       User[]
  projects    Project[]
  @@map("poles")
}

// Projects
model Project {
  id              String    @id @default(uuid())
  externalId      String?   @unique // ID from Odoo if synced
  name            String
  description     String?
  status          ProjectStatus @default(IN_PROGRESS)

  budgetPlanned   Float
  budgetActual    Float     @default(0)

  startDate       DateTime
  endDate         DateTime

  poleId          String
  pole            Pole      @relation(fields: [poleId], references: [id])

  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt

  timesheets      Timesheet[]
  milestones      Milestone[]
  documents       Document[]
  risks           Risk[]
  assignments     ProjectAssignment[]
  reports         Report[]

  @@map("projects")
}

enum ProjectStatus {
  PLANNED
  IN_PROGRESS
  ON_HOLD
  COMPLETED
  CANCELLED
}

// Project-User many-to-many relationship
model ProjectAssignment {
  id          String    @id @default(uuid())
  projectId   String
  project     Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)
  userId      String
  user        User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  role        String    // "PM", "Developer", "Designer", etc.
  allocation  Float     @default(1.0) // 0.0 to 1.0 (FTE percentage)
  startDate   DateTime
  endDate     DateTime?

  @@unique([projectId, userId])
  @@map("project_assignments")
}

// Timesheets (synced from Odoo)
model Timesheet {
  id            String    @id @default(uuid())
  externalId    String?   @unique // ID from Odoo

  userId        String
  user          User      @relation(fields: [userId], references: [id])

  projectId     String
  project       Project   @relation(fields: [projectId], references: [id])

  date          DateTime
  hours         Float
  description   String?

  createdAt     DateTime  @default(now())
  syncedAt      DateTime  @default(now())

  @@index([projectId, date])
  @@map("timesheets")
}

// Milestones
model Milestone {
  id          String    @id @default(uuid())
  projectId   String
  project     Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)

  name        String
  dueDate     DateTime
  status      MilestoneStatus @default(PENDING)
  description String?

  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt

  @@map("milestones")
}

enum MilestoneStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
  DELAYED
}

// Documents (linked to SharePoint)
model Document {
  id              String    @id @default(uuid())
  projectId       String
  project         Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)

  name            String
  sharepointUrl   String
  driveItemId     String?   // Microsoft Graph API ID

  uploadedAt      DateTime  @default(now())
  uploadedBy      String

  @@map("documents")
}

// Risks
model Risk {
  id            String    @id @default(uuid())
  projectId     String
  project       Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)

  description   String
  probability   Int       // 1-5
  impact        Int       // 1-5
  score         Int       // probability × impact (calculated)
  status        RiskStatus @default(OPEN)

  mitigation    String?
  contingency   String?

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  @@map("risks")
}

enum RiskStatus {
  OPEN
  MITIGATED
  CLOSED
}

// Reports (generated PDF/Excel)
model Report {
  id          String    @id @default(uuid())
  projectId   String?
  project     Project?  @relation(fields: [projectId], references: [id])

  type        ReportType
  format      String    // "PDF" or "EXCEL"
  fileUrl     String    // Storage URL (S3, Vercel Blob, etc.)

  generatedAt DateTime  @default(now())
  generatedBy String

  @@map("reports")
}

enum ReportType {
  PROGRESS      // Rapport d'avancement
  BUDGET        // Rapport budgétaire
  RESOURCE      // Rapport de charge
  PORTFOLIO     // Rapport portefeuille
}
```

### 5.2 Diagramme Entité-Relation (ERD)

```
┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│    User     │────────▶│    Pole     │◀────────│   Project   │
│             │ N     1 │             │ 1     N │             │
│ - id        │         │ - id        │         │ - id        │
│ - email     │         │ - name      │         │ - name      │
│ - role      │         │ - managerId │         │ - status    │
└──────┬──────┘         └─────────────┘         └──────┬──────┘
       │                                               │
       │ 1                                             │ N
       │                                               │
       │         ┌──────────────────────┐              │
       └────────▶│ ProjectAssignment    │◀─────────────┘
                 │                      │
                 │ - userId             │
                 │ - projectId          │
                 │ - role               │
                 │ - allocation         │
                 └──────────────────────┘
```

---

## 6. Intégrations

### 6.1 Intégration Odoo

#### Configuration

```typescript
// src/services/integrations/odoo.service.ts

import axios from 'axios';

const ODOO_URL = process.env.ODOO_API_URL; // https://tech4value.odoo.com
const ODOO_DB = process.env.ODOO_DB; // tech4value
const ODOO_USER = process.env.ODOO_USER;
const ODOO_PASSWORD = process.env.ODOO_PASSWORD;

class OdooService {
  private sessionId: string | null = null;

  async authenticate() {
    const response = await axios.post(`${ODOO_URL}/web/session/authenticate`, {
      jsonrpc: '2.0',
      params: {
        db: ODOO_DB,
        login: ODOO_USER,
        password: ODOO_PASSWORD
      }
    });

    this.sessionId = response.data.result.session_id;
    return this.sessionId;
  }

  async getProjects() {
    // Fetch projects from Odoo
    const response = await axios.post(`${ODOO_URL}/web/dataset/call_kw`, {
      jsonrpc: '2.0',
      params: {
        model: 'project.project',
        method: 'search_read',
        args: [[]],
        kwargs: {
          fields: ['id', 'name', 'date_start', 'date', 'partner_id']
        }
      }
    }, {
      headers: { 'Cookie': `session_id=${this.sessionId}` }
    });

    return response.data.result;
  }

  async getTimesheets(projectId: number) {
    // Fetch timesheets for a project
    // Similar pattern as getProjects()
  }
}

export default new OdooService();
```

#### Synchronisation Automatique

```typescript
// src/jobs/sync-odoo.job.ts

import cron from 'node-cron';
import odooService from '../services/integrations/odoo.service';
import { syncProjectsFromOdoo } from '../services/sync.service';

// Run every day at 2 AM
cron.schedule('0 2 * * *', async () => {
  console.log('[CRON] Starting Odoo sync...');

  try {
    await odooService.authenticate();
    const odooProjects = await odooService.getProjects();
    await syncProjectsFromOdoo(odooProjects);

    console.log(`[CRON] Synced ${odooProjects.length} projects from Odoo`);
  } catch (error) {
    console.error('[CRON] Odoo sync failed:', error);
  }
});
```

### 6.2 Intégration SharePoint (Microsoft Graph API)

#### Configuration

```typescript
// src/services/integrations/sharepoint.service.ts

import axios from 'axios';

const GRAPH_API_URL = 'https://graph.microsoft.com/v1.0';
const TENANT_ID = process.env.AZURE_TENANT_ID;
const CLIENT_ID = process.env.AZURE_CLIENT_ID;
const CLIENT_SECRET = process.env.AZURE_CLIENT_SECRET;

class SharePointService {
  private accessToken: string | null = null;

  async authenticate() {
    const response = await axios.post(
      `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
      new URLSearchParams({
        client_id: CLIENT_ID!,
        client_secret: CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials'
      })
    );

    this.accessToken = response.data.access_token;
    return this.accessToken;
  }

  async getSiteDocuments(siteId: string, driveId: string) {
    const response = await axios.get(
      `${GRAPH_API_URL}/sites/${siteId}/drives/${driveId}/root/children`,
      {
        headers: { 'Authorization': `Bearer ${this.accessToken}` }
      }
    );

    return response.data.value;
  }

  async downloadDocument(driveId: string, itemId: string) {
    const response = await axios.get(
      `${GRAPH_API_URL}/drives/${driveId}/items/${itemId}/content`,
      {
        headers: { 'Authorization': `Bearer ${this.accessToken}` },
        responseType: 'stream'
      }
    );

    return response.data;
  }
}

export default new SharePointService();
```

### 6.3 Export Power BI

```typescript
// src/services/integrations/powerbi.service.ts

import { createWriteStream } from 'fs';
import { prisma } from '../lib/prisma';
import * as XLSX from 'exceljs';

class PowerBIService {
  async generateCSVExport() {
    // Fetch all data
    const projects = await prisma.project.findMany({
      include: {
        pole: true,
        timesheets: {
          include: { user: true }
        },
        milestones: true
      }
    });

    // Create workbook
    const workbook = new XLSX.Workbook();

    // Sheet 1: Projects
    const projectsSheet = workbook.addWorksheet('Projects');
    projectsSheet.columns = [
      { header: 'ID', key: 'id' },
      { header: 'Name', key: 'name' },
      { header: 'Status', key: 'status' },
      { header: 'Budget Planned', key: 'budgetPlanned' },
      { header: 'Budget Actual', key: 'budgetActual' },
      { header: 'Start Date', key: 'startDate' },
      { header: 'End Date', key: 'endDate' },
      { header: 'Pole', key: 'pole' }
    ];

    projects.forEach(project => {
      projectsSheet.addRow({
        id: project.id,
        name: project.name,
        status: project.status,
        budgetPlanned: project.budgetPlanned,
        budgetActual: project.budgetActual,
        startDate: project.startDate,
        endDate: project.endDate,
        pole: project.pole.name
      });
    });

    // Sheet 2: Timesheets
    const timesheetsSheet = workbook.addWorksheet('Timesheets');
    // ... similar pattern

    // Write to file
    const filePath = `./exports/powerbi_export_${Date.now()}.xlsx`;
    await workbook.xlsx.writeFile(filePath);

    return filePath;
  }
}

export default new PowerBIService();
```

---

## 7. Sécurité

### 7.1 Authentification & Autorisation

#### JWT Authentication

```typescript
// src/middleware/auth.middleware.ts

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = '1h';

export function generateToken(userId: string, role: string) {
  return jwt.sign({ userId, role }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.user = { id: decoded.userId, role: decoded.role };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}
```

#### RBAC (Role-Based Access Control)

```typescript
// src/middleware/rbac.middleware.ts

import { Request, Response, NextFunction } from 'express';

export function requireRole(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
}

// Usage:
// router.get('/admin/users', verifyToken, requireRole('ADMIN'), getUsersHandler);
```

### 7.2 Protection OWASP Top 10

| Vulnérabilité | Mitigation |
|---------------|------------|
| **Injection (SQL)** | Prisma ORM (parameterized queries), input validation (Zod) |
| **Broken Authentication** | JWT avec expiration, bcrypt pour passwords, rate limiting |
| **Sensitive Data Exposure** | HTTPS obligatoire, variables d'environnement, pas de secrets dans le code |
| **XML External Entities (XXE)** | N/A (API JSON uniquement) |
| **Broken Access Control** | RBAC middleware, vérification des permissions par route |
| **Security Misconfiguration** | Helmet.js (security headers), CORS configuré, environnements séparés |
| **Cross-Site Scripting (XSS)** | React échappe automatiquement, DOMPurify pour HTML user-generated |
| **Insecure Deserialization** | JSON.parse seulement, validation Zod |
| **Using Components with Known Vulnerabilities** | Dependabot alerts, npm audit, Snyk scans |
| **Insufficient Logging & Monitoring** | Winston logger, Sentry error tracking |

### 7.3 Sécurité des Données

```typescript
// Environment variables (.env)
DATABASE_URL="postgresql://user:password@host:5432/tech4value"
JWT_SECRET="your-super-secret-key-change-this"
ODOO_API_URL="https://tech4value.odoo.com"
ODOO_USER="integration_user"
ODOO_PASSWORD="secure-password"

// Password hashing
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}
```

---

## 8. Performance & Scalabilité

### 8.1 Optimisations Frontend

- **Code Splitting** : React.lazy() pour charger les routes dynamiquement
- **Lazy Loading** : Images et composants lourds chargés à la demande
- **Memoization** : React.memo() pour composants purs, useMemo/useCallback
- **Bundle Optimization** : Tree shaking, minification, compression gzip
- **CDN** : Assets statiques servis via Vercel Edge Network

```typescript
// Lazy loading example
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Projects = React.lazy(() => import('./pages/Projects'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Suspense>
  );
}
```

### 8.2 Optimisations Backend

- **Database Indexing** : Index sur colonnes fréquemment interrogées (projectId, userId, date)
- **Query Optimization** : Prisma includes sélectifs, pagination
- **Caching** : Redis pour données fréquemment accédées (si nécessaire)
- **Connection Pooling** : Prisma gère automatiquement le pool de connexions
- **Rate Limiting** : Protection contre abus

```typescript
// Pagination example
async function getProjects(page: number = 1, limit: number = 20) {
  const skip = (page - 1) * limit;

  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      skip,
      take: limit,
      include: {
        pole: true,
        _count: { select: { timesheets: true } }
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.project.count()
  ]);

  return {
    data: projects,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  };
}
```

### 8.3 Scalabilité

- **Horizontal Scaling** : Railway supporte scaling automatique (plan payant)
- **Database** : PostgreSQL gère facilement 185 utilisateurs simultanés
- **Stateless Backend** : JWT permet scaling horizontal sans session partagée
- **CDN** : Vercel Edge Network distribue le frontend mondialement

---

## 9. Déploiement

### 9.1 Environnements

| Environnement | Usage | URL |
|---------------|-------|-----|
| **Development** | Local development | http://localhost:5173 (frontend) + :3000 (backend) |
| **Staging** | Pre-production testing | https://tech4value-staging.vercel.app |
| **Production** | Live application | https://tech4value-mvp.vercel.app |

### 9.2 CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/ci.yml

name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run type check
        run: npm run type-check

      - name: Run tests
        run: npm run test

      - name: Upload coverage
        uses: codecov/codecov-action@v3

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Vercel
        run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

### 9.3 Stratégie de Déploiement

- **Frontend** : Déploiement automatique via Vercel (push sur main)
- **Backend** : Déploiement automatique via Railway (push sur main)
- **Database** : Migrations Prisma appliquées automatiquement
- **Rollback** : Vercel permet rollback instantané vers déploiement précédent

---

## 10. Monitoring & Observabilité

### 10.1 Logging

```typescript
// src/lib/logger.ts

import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

export default logger;
```

### 10.2 Error Tracking

- **Sentry** : Capture des erreurs frontend et backend
- **Alertes** : Email/Slack en cas d'erreur critique

```typescript
// src/lib/sentry.ts

import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1
});
```

### 10.3 Performance Monitoring

- **Vercel Analytics** : Core Web Vitals (LCP, FID, CLS)
- **Railway Metrics** : CPU, Memory, Request latency
- **Database Monitoring** : Supabase dashboard (query performance)

---

**Document validé le** : [Date]
**Prochaine révision** : [Date + 2 semaines]
**Version** : 1.0
