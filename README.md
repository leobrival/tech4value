# Tech4Value - Solution de Pilotage Stratégique des Projets

**Projet d'Étude M2 CPIT 2025**

> MVP de solution de pilotage stratégique intégrant l'écosystème SI de Tech4Value (185 collaborateurs, 5 projets stratégiques).

---

## 📋 Vue d'Ensemble

Tech4Value est un projet académique visant à développer une solution de gestion de portefeuille de projets pour une entreprise de 185 collaborateurs. L'objectif est de centraliser le pilotage de 5 projets stratégiques en intégrant les systèmes existants (Odoo, SharePoint, Power BI, Azure AD).

### Objectifs

- ✅ Centraliser la gestion du portefeuille projets
- ✅ Automatiser les reportings (gain de 30% de temps)
- ✅ Améliorer la prise de décision (données consolidées)
- ✅ Optimiser l'allocation des ressources (78 ETP)

### Livrables

1. **Vidéo MVP** (15-20 min) - 64 points
2. **Dossier technique groupe** (85-110 pages PDF) - 148 points
3. **Dossiers individuels** (25-35 pages PDF par membre) - 8 points chacun

**Score total** : 220 points | **Durée** : 24 semaines (6 mois)

---

## 🗂️ Structure du Projet

```
tech4value/
├── .doc/                      # Documentation pédagogique
│   ├── README.md              # Index de la documentation
│   ├── cadre-pedagogique.md   # Cadre pédagogique du projet
│   ├── grilles-notation.md    # Grilles de notation (220 points)
│   └── etat-des-lieux-si.md   # État des lieux SI Tech4Value
│
├── templates/                 # Templates de gestion de projet
│   ├── gantt-template.csv     # Template de diagramme de Gantt
│   ├── raci-template.csv      # Template de matrice RACI
│   ├── budget-template.csv    # Template de budget détaillé
│   ├── risk-register-template.csv  # Template de registre des risques
│   └── cahier-des-charges-template.md  # Template de cahier des charges
│
├── planning/                  # Suivi de projet
│   ├── kanban.md              # Tableau Kanban (TODO/IN PROGRESS/DONE)
│   └── timesheet-template.csv # Template de feuille de temps
│
├── docs/                      # Documentation technique
│   ├── architecture/
│   │   └── architecture-technique.md  # Document d'architecture
│   └── user-guides/           # Guides utilisateurs
│
├── livrables/                 # Livrables finaux
│   ├── video/                 # Vidéo MVP (MP4 ou lien YouTube)
│   ├── dossier-groupe/        # Dossier technique groupe (PDF)
│   └── dossiers-individuels/  # Dossiers individuels (1 PDF par membre)
│
├── src/                       # Code source de l'application
│   ├── backend/               # Backend Node.js/Python
│   └── frontend/              # Frontend React/Vue.js
│
├── tests/                     # Tests automatisés
│
├── scripts/                   # Scripts de validation
│   ├── validate-docs.js       # Validateur de documents (v2.0)
│   ├── check-docs.sh          # Wrapper bash pour validation
│   ├── package.json           # Configuration NPM
│   └── README.md              # Documentation des scripts
│
├── tasks.md                   # Liste complète des 73 tâches
├── project.json               # Métadonnées du projet (NotebookLM, GitHub)
├── package.json               # Configuration projet (si applicable)
└── README.md                  # Ce fichier
```

---

## 🚀 Getting Started

### Prérequis

- **Node.js** >= 18.0.0 (pour les scripts de validation)
- **npm** >= 9.0.0
- **Git** (pour le versionnage)
- **Claude CLI** (pour la validation des documents)

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/tech4value.git
cd tech4value

# Installer les dépendances (scripts de validation)
cd scripts
npm install

# Vérifier que Claude CLI est installé
which claude
# Si non installé : npm install -g @anthropic-ai/claude-cli
```

### Validation des Documents

```bash
# Valider tous les documents de .doc/
npm run validate

# Valider avec sortie détaillée
npm run validate:verbose

# Valider en mode strict (pour CI/CD)
npm run check-conformance
```

---

## 📚 Documentation Clés

### Pour Démarrer

1. **[Cadre Pédagogique](.doc/cadre-pedagogique.md)** - Comprendre les objectifs du projet
2. **[Grilles de Notation](.doc/grilles-notation.md)** - Comprendre les critères d'évaluation (220 points)
3. **[État des Lieux SI](.doc/etat-des-lieux-si.md)** - Comprendre le contexte Tech4Value
4. **[Liste des Tâches](tasks.md)** - Voir les 73 tâches à réaliser

### Templates Disponibles

- **[Cahier des Charges](templates/cahier-des-charges-template.md)** - Template complet (14 sections)
- **[Architecture Technique](docs/architecture/architecture-technique.md)** - Template d'architecture (10 sections)
- **[Gantt](templates/gantt-template.csv)** - Planning détaillé avec dépendances
- **[RACI](templates/raci-template.csv)** - Matrice de responsabilités
- **[Budget](templates/budget-template.csv)** - Budget détaillé avec ROI
- **[Risques](templates/risk-register-template.csv)** - 25 risques identifiés avec mitigations

### Suivi de Projet

- **[Kanban Board](planning/kanban.md)** - Tableau de bord des tâches
- **[Timesheet](planning/timesheet-template.csv)** - Feuille de temps quotidienne

---

## 🎯 Plan d'Action (24 Semaines)

### Phase 1 : Cadrage & Analyse (Semaines 1-3)
- Constitution de l'équipe
- Analyse du besoin client
- Benchmark technologique
- Définition du périmètre MVP

### Phase 2 : Conception (Semaines 4-7)
- Architecture technique (backend, frontend, intégrations)
- Planification détaillée (Gantt, RACI)
- Budget & gestion des coûts
- Gestion des risques
- Maquettes & UX Design

### Phase 3 : Développement MVP (Semaines 8-16)
- Setup environnement
- **6 fonctionnalités core** (en parallèle) :
  - Dashboard de pilotage
  - Intégration Odoo
  - Intégration SharePoint
  - Export Power BI
  - Gestion multi-projets
  - Système de reporting
- Tests & QA (couverture ≥80%)
- Documentation technique

### Phase 4 : Aspects Transverses (Semaines 8-18, en parallèle)
- RGPD (conformité)
- Sécurité (OWASP audit)
- Accessibilité (WCAG 2.1 AA)
- Green IT (optimisations)
- Conduite du changement

### Phase 5 : Livrables Finaux (Semaines 19-24)
- **Vidéo MVP** (15-20 min) :
  - Script + démos + enregistrement + montage
- **Dossier technique groupe** (85-110 pages) :
  - 7 sections à rédiger en parallèle
- **Dossiers individuels** (25-35 pages chacun) :
  - Analyse personnelle, documentation utilisateur
- Finalisation & relecture

### Phase 6 : Soumission (Semaine 24)
- Packaging des livrables (ZIP)
- Soumission officielle
- Célébration & rétrospective

---

## 🛠️ Stack Technique (Recommandée)

### Frontend
- **Framework** : React 18 + TypeScript
- **UI** : Tailwind CSS + shadcn/ui
- **State** : Zustand
- **Charts** : Recharts
- **Build** : Vite

### Backend
- **Runtime** : Node.js 18 LTS + Express
- **Langage** : TypeScript
- **ORM** : Prisma
- **Database** : PostgreSQL 15 (Supabase)

### Infrastructure
- **Hosting Frontend** : Vercel (free tier)
- **Hosting Backend** : Railway (free tier)
- **CI/CD** : GitHub Actions
- **Monitoring** : Sentry + Vercel Analytics

### Intégrations
- **Odoo** : REST API
- **SharePoint** : Microsoft Graph API
- **Power BI** : Export CSV structuré
- **Azure AD** : Simulation SSO (RBAC)

---

## 📊 Objectifs de Qualité

### Code Quality

- ✅ **Tests** : Couverture ≥80% (unitaires + intégration + E2E)
- ✅ **Performance** : Lighthouse score ≥90
- ✅ **Sécurité** : Aucune vulnérabilité critique (OWASP)
- ✅ **Accessibilité** : WCAG 2.1 niveau AA
- ✅ **Documentation** : API complète (Swagger), README à jour

### Livrables

- ✅ **Vidéo** : 15-20 min, tous les membres parlent, démo fonctionnelle
- ✅ **Dossier groupe** : 85-110 pages, Gantt + RACI + Budget + Architecture
- ✅ **Dossiers individuels** : 25-35 pages, analyse personnelle approfondie

### Note Cible

- 🎯 **≥18/20** (≥198/220 points)

---

## 🤝 Équipe

| Rôle | Nom | Responsabilités |
|------|-----|-----------------|
| **Project Manager** | [À compléter] | Coordination, planning, risques |
| **Tech Lead** | [À compléter] | Architecture, choix techniques |
| **Business Analyst** | [À compléter] | Requirements, user stories |
| **Backend Developer** | [À compléter] | API, intégrations |
| **Frontend Developer** | [À compléter] | Interface, UX |
| **UX Designer** | [À compléter] | Maquettes, design system |
| **DevOps Engineer** | [À compléter] | Infrastructure, CI/CD |

---

## 📦 Ressources Externes

- **GitHub** : https://github.com/leobrival/tech4value
- **NotebookLM** : https://notebooklm.google.com/notebook/986cf3dc-a9b1-49f7-a118-6bb3856373ef
- **Odoo Documentation** : https://www.odoo.com/documentation/15.0/
- **Microsoft Graph API** : https://learn.microsoft.com/en-us/graph/
- **Power BI** : https://learn.microsoft.com/en-us/power-bi/

---

## 📝 Conventions

### Commits

Suivre la convention **Commitizen** :

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types : `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Exemple :
```
feat(dashboard): add KPI cards with real-time data

- Implement KPI calculation service
- Add Recharts integration
- Create responsive card layout

Closes #12
```

### Branches

- `main` : Production-ready code
- `develop` : Integration branch
- `feature/<feature-name>` : Feature branches
- `fix/<bug-name>` : Bug fix branches

### Pull Requests

1. Créer une branche depuis `develop`
2. Implémenter la fonctionnalité + tests
3. Ouvrir une PR vers `develop`
4. Code review par un pair
5. Merge après validation

---

## 🎓 Critères d'Évaluation

### Vidéo (64 points)

- Structure : 5 pts
- Contexte & objectifs : 10 pts
- Qualité démo MVP : 10 pts
- Qualité visuelle/technique : 5 pts
- Originalité : 2 pts
- Impact potentiel : 10 pts
- Dépassement attentes : 2 pts
- Fluidité : 5 pts
- Pertinence : 5 pts
- Capter l'attention : 5 pts
- Convaincre : 5 pts

### Dossier Technique (156 points)

- **Management** (25 pts) : Coûts (10) + Méthodologie (5) + Changement (10)
- **Planification** (35 pts) : Gantt, RACI, Risques, Jalons
- **Solution Technique** (73 pts) : Architecture, Tests, GreenIT, RGPD, A11y, Documentation
- **Analyse Individuelle** (8 pts) : Défis, Forces/Faiblesses, Compétences, Axes d'amélioration
- **Respect Cadre & Bonus** (15 pts) : Professionnalisme (10) + Dépassement (5)

---

## 📞 Support

Pour toute question :

1. Consulter la [documentation](.doc/README.md)
2. Vérifier les [issues GitHub](https://github.com/leobrival/tech4value/issues)
3. Contacter l'encadrant pédagogique

---

## 📄 Licence

Ce projet est réalisé dans le cadre académique du Mastère Chef de Projet IT 2025.

---

**Dernière mise à jour** : [Date]
**Version** : 1.0
**Statut** : 🚀 Projet en cours

---

## ✅ Quick Start Checklist

- [ ] Lire le [cadre pédagogique](.doc/cadre-pedagogique.md)
- [ ] Étudier les [grilles de notation](.doc/grilles-notation.md)
- [ ] Consulter l'[état des lieux SI](.doc/etat-des-lieux-si.md)
- [ ] Parcourir la [liste des tâches](tasks.md)
- [ ] Remplir les templates ([Gantt](templates/gantt-template.csv), [RACI](templates/raci-template.csv), [Budget](templates/budget-template.csv))
- [ ] Mettre à jour le [Kanban](planning/kanban.md) quotidiennement
- [ ] Remplir le [timesheet](planning/timesheet-template.csv) quotidiennement
- [ ] Valider les documents régulièrement (`npm run validate`)

**Bon courage pour votre projet ! 🎯**
