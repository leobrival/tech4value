# Dossier Technique - Tech4Value

**Plateforme de Pilotage Stratégique des Projets**

**Mastère Chef de Projet IT - Promotion 2025**

---

**Équipe Projet**

- **Jules Courtin** - Chef de Projet / Product Manager
- **Léo Brival** - Tech Lead / Architecte Solution

**Date** : Mars 2026
**Version** : 1.0 - Draft

---

## Table des Matières

1. [Présentation de l'Entreprise et de l'Équipe Projet](#1-présentation-de-lentreprise-et-de-léquipe-projet)
2. [Analyse de la Problématique](#2-analyse-de-la-problématique)
3. [Management de Projet](#3-management-de-projet) _(25 points)_
4. [Planification Détaillée](#4-planification-détaillée) _(35 points)_
5. [Solution Technique](#5-solution-technique) _(73 points)_
6. [Conduite du Changement](#6-conduite-du-changement)
7. [Respect du Cadre & Bonus](#7-respect-du-cadre--bonus) _(15 points)_
8. [Annexes](#8-annexes)

---

## 1. Présentation de l'Entreprise et de l'Équipe Projet

### 1.1 Tech4Value en Chiffres

**Tech4Value** est une entreprise de services numériques comptant **185 collaborateurs**, organisée en structure matricielle autour de **9 pôles** répartis sur **3 sites** (siège + antennes Rennes et Lyon).

| Pôle | Effectif | Missions Principales |
|------|----------|----------------------|
| Direction Générale & PMO | 10 | Gouvernance, priorisation stratégique, reporting exécutif |
| IT & Infrastructure | 32 | Supervision SI, réseau, ERP, cloud, sécurité opérationnelle |
| Développement & Digital Factory | 38 | Applications internes/clients (web, mobile, API) |
| Data & BI | 18 | Gouvernance donnée, Data Lake, reporting groupe |
| Sécurité & Conformité | 15 | RGPD, cybersécurité, audits, conformité SI |
| RH & Communication | 20 | Gestion RH, formations, communication corporate |
| Finance & Achats | 16 | Budgets, contrôle de gestion, contractualisation |
| RSE & Green IT | 6 | Indicateurs environnementaux, gouvernance durable cloud |
| Fonctions Support | 10 | Support administratif, juridique, gestion de site |
| **TOTAL** | **185** | |

### 1.2 Portefeuille de Projets Stratégiques

L'entreprise gère simultanément **5 projets stratégiques** mobilisant **78 ETP** (soit **42% des effectifs**) :

| Projet | Pôles Impliqués | ETP | Priorité |
|--------|-----------------|-----|----------|
| Mise en conformité RGPD | Sécurité, Data, PMO | 13 | Critique |
| Déploiement ERP Finance & Supply Chain | IT, Finance, PMO | 19 | Critique |
| Plateforme Data Lake & BI Groupe | Data & BI, IT, PMO | 18 | Haute |
| Programme Green IT - Cloud Durable | IT, RSE, Sécurité | 11 | Moyenne |
| Portail RH Unifié | RH, IT, PMO | 17 | Haute |

### 1.3 Équipe Projet

| Membre | Rôle | Responsabilités |
|--------|------|-----------------|
| **Jules Courtin** | Chef de Projet / PM | Cadrage fonctionnel, planification, gouvernance, conduite du changement, relation stakeholders |
| **Léo Brival** | Tech Lead / Architecte | Architecture technique, développement MVP, intégrations SI, CI/CD, documentation technique |

---

## 2. Analyse de la Problématique

### 2.1 Diagnostic de l'Existant

#### Constats Clés

L'analyse du système d'information existant révèle plusieurs dysfonctionnements structurels :

1. **Fragmentation des outils** : 7 outils hétérogènes (Trello, Jira, Notion, Excel, Odoo, SharePoint, Power BI) sans interconnexion native
2. **Reporting chronophage** : 30h/semaine consacrées au reporting manuel par le PMO
3. **Manque de visibilité transverse** : Aucun tableau de bord consolidé pour les 5 projets stratégiques
4. **Allocation sous-optimale** : Surcharge du pôle IT (120% de capacité) et sous-utilisation du pôle Data (70%)
5. **Taux de livraison à temps faible** : Seulement 65% des projets livrés dans les délais

#### Cartographie SI Existante

| Couche | Outil | Usage | Limite Identifiée |
|--------|-------|-------|-------------------|
| **ERP & Finance** | Odoo v15 Cloud | RH, comptabilité, facturation, achats | Désynchronisation Excel/Odoo |
| **CRM** | HubSpot | Cycles commerciaux, avant-vente | Non utilisé par les équipes techniques |
| **Collaboration** | M365 + SharePoint + Teams | Espaces projets, documents, communication | Gouvernance documentaire faible |
| **BI & Reporting** | Power BI | Dashboards, KPI | Données manuellement consolidées |
| **Sécurité** | Azure AD | Authentification, groupes, MFA | Pas de SSO unifié pour tous les outils |
| **Gestion de projet** | Trello / Jira / Notion / Excel | Suivi tâches et jalons | Éclatement multi-outils, pas de source unique |

### 2.2 Formulation du Besoin

**Besoin central** : Centraliser le pilotage stratégique des 5 projets dans une plateforme unifiée pour améliorer la visibilité, la coordination inter-pôles et la performance.

**North Star Metric** : Réduction de **30% du temps de reporting** (de 30h/semaine PMO à 21h/semaine).

### 2.3 Objectifs Stratégiques

| Objectif | KPI Cible | Baseline | Horizon |
|----------|-----------|----------|---------|
| Réduire le temps de reporting PMO | -30% (30h → 21h/semaine) | 30h/semaine | S12 |
| Améliorer la livraison à temps | +25% (65% → 90%) | 65% | S24 |
| Optimiser l'allocation ressources | +10% productivité (72% → 82%) | 72% | S12 |
| Consolider les outils | 7 → 1 plateforme intégrée | 7 outils | S18 |
| ROI mesurable | Payback < 3 mois | — | S6 |

---

## 3. Management de Projet

> **Section évaluée : 25 points** (Gestion des coûts : 10 pts | Méthodologie : 5 pts | Conduite du changement : 10 pts)

### 3.1 Gestion des Coûts (10 points)

#### 3.1.1 Budget Prévisionnel

| Poste de Coût | Phase MVP (M0-6) | Année 1 | Année 2 |
|---------------|------------------|---------|---------|
| **Ressources Humaines** | — (projet académique) | €900k | €870k |
| **Infrastructure Cloud** | €2 000 (free tiers) | €120k | €140k |
| **Licences & Services** | €500 | €30k | €35k |
| **Consulting & Design** | — | €50k | €30k |
| **Formation & Change** | — | €40k | €25k |
| **Recrutement Initial** | — | €95k | — |
| **TOTAL** | **~€2 500** | **€1 235k** | **€1 100k** |

> **Note** : Le projet étant académique, les coûts RH de la phase MVP sont nuls. Le budget ci-dessus projette les coûts réels pour un déploiement production.

#### 3.1.2 Analyse ROI

| Indicateur | Valeur |
|------------|--------|
| **Investissement initial** | €235k (setup) + €198k (MVP) |
| **Coût annuel opérationnel** | ~€1,22M/an |
| **Gains annuels estimés** | €1,06M/an (30% gain temps × 78 ETP) |
| **Payback period** | < 3 mois |
| **ROI à 3 ans** | 280% |

#### 3.1.3 Suivi Budgétaire

- **Fréquence** : Reporting mensuel au Copil
- **Outils** : Dashboard Power BI avec alertes de dépassement (seuil 10%)
- **Indicateurs suivis** : Budget réel vs prévisionnel, burn rate, ETC (Estimate to Complete)
- **Gouvernance** : Tout dépassement > 15% nécessite validation Comex

### 3.2 Justification de la Méthodologie (5 points)

#### 3.2.1 Choix : Méthodologie Agile Hybride

Nous avons retenu une approche **Agile Hybride** combinant :

- **Cadrage Waterfall** (Phases 1-2, Semaines 1-4) : Structuration du projet, documentation, architecture
- **Exécution Scrum** (Phases 3-4, Semaines 5-22) : Développement itératif par sprints de 2 semaines

**Justification** :

| Critère | Waterfall Pur | Agile Pur (Scrum) | **Hybride (Retenu)** |
|---------|--------------|-------------------|----------------------|
| Cadrage structuré | ✅ | ❌ | ✅ |
| Flexibilité exécution | ❌ | ✅ | ✅ |
| Documentation complète | ✅ | ❌ | ✅ |
| Feedback utilisateur rapide | ❌ | ✅ | ✅ |
| Adapté à l'académique | ❌ | ❌ | ✅ |
| Gestion risques | ✅ | ✅ | ✅ |

**Raisons du choix hybride** :

1. **Contrainte académique** : Le cadre pédagogique exige des livrables documentés (cahier des charges, Gantt, RACI) qui nécessitent un cadrage structuré
2. **Besoin d'itération** : Le MVP doit évoluer avec les retours des utilisateurs pilotes
3. **Équipe réduite** : 2 personnes nécessitent des cérémonies légères (daily async, sprint planning bi-hebdo)
4. **Intégrations SI** : Les POC techniques (Odoo, SharePoint) nécessitent des phases de discovery avant le développement

#### 3.2.2 Organisation de l'Équipe

**Matrice RACI Projet** :

| Activité | Jules (PM) | Léo (Tech Lead) | Direction | Copil |
|----------|-----------|-----------------|-----------|-------|
| Cadrage fonctionnel | R | C | A | I |
| Architecture technique | C | R | I | I |
| Planification & Gantt | R | C | I | A |
| Développement MVP | C | R | I | I |
| Tests & Qualité | I | R | I | I |
| Conduite du changement | R | C | A | I |
| Reporting Copil | R | C | I | A |
| Livrables académiques | R | R | I | I |

> R = Responsible, A = Accountable, C = Consulted, I = Informed

#### 3.2.3 Cérémonies Agile

| Cérémonie | Fréquence | Durée | Participants |
|-----------|-----------|-------|-------------|
| Sprint Planning | Bi-hebdomadaire | 1h | Jules + Léo |
| Daily Standup | Quotidien (async Slack) | 5 min | Jules + Léo |
| Sprint Review | Bi-hebdomadaire | 30 min | Jules + Léo + stakeholders |
| Sprint Retrospective | Bi-hebdomadaire | 30 min | Jules + Léo |
| Copil Reporting | Mensuel | 1h | PM + Direction |

### 3.3 Programme de Conduite du Changement (10 points)

> _Détaillé en Section 6 - Conduite du Changement_

---

## 4. Planification Détaillée

> **Section évaluée : 35 points** (Cohérence : 5 | Décomposition tâches : 5 | Calendrier : 5 | Dépendances : 5 | Risques : 5 | Outils : 5 | Jalons : 5)

### 4.1 Cohérence de la Planification Globale (5 points)

#### Framework : Now-Next-Later (Janna Bastow - ProdPad)

Le projet est structuré selon le framework **Now-Next-Later**, organisé en **4 phases majeures** sur **24 semaines** :

| Phase | Horizon | Semaines | Objectif Principal |
|-------|---------|----------|--------------------|
| **Phase 1 - NOW : Cadrage** | 0-4 semaines | S1-S4 | Analyse besoin, cahier des charges, architecture |
| **Phase 2 - NEXT : Fondations** | 1-3 mois | S5-S12 | Développement MVP, intégrations, tests |
| **Phase 3 - LATER : Consolidation** | 3-5 mois | S13-S18 | Intégrations avancées, beta testing, optimisation |
| **Phase 4 - Livrables** | 5-6 mois | S19-S24 | Vidéo, dossier technique, soumission |

### 4.2 Décomposition des Tâches (5 points)

#### Phase 1 - Cadrage (S1-S4)

| ID | Tâche | Sous-tâches | Owner | Durée |
|----|-------|-------------|-------|-------|
| T1.1 | Analyse stakeholders | Interviews 10-15 personnes, synthèse besoins | Jules | 2 semaines |
| T1.2 | Benchmark concurrentiel | Analyse 5-7 solutions (Monday, Asana, Wrike, Planisware, Sciforma, PPM Pro, Clarizen) | Jules | 2 semaines |
| T1.3 | Cahier des charges | Rédaction, validation Comex | Jules | 1 semaine |
| T1.4 | Atelier co-design MVP | 2 jours de workshops, wireframes, priorisation features | Jules + Léo | 3 jours |
| T1.5 | Architecture technique | Stack decisions, schémas, modèle de données | Léo | 2 semaines |
| T1.6 | Setup infrastructure | Railway (backend) + Vercel (frontend) + Supabase (DB) | Léo | 1 semaine |
| T1.7 | Matrice RACI | Atelier inter-pôles, validation 9 pôles | Jules | 1 semaine |

#### Phase 2 - Développement MVP (S5-S12)

| ID | Tâche | Sous-tâches | Owner | Durée |
|----|-------|-------------|-------|-------|
| T2.1 | Authentification Azure AD | SSO, RBAC, MFA | Léo | 2 semaines |
| T2.2 | Module Dashboard exécutif | KPI temps-réel, graphiques Recharts, vues par rôle | Léo | 3 semaines |
| T2.3 | Module Gestion Projets | CRUD projets, timesheets, milestones, risques | Léo | 3 semaines |
| T2.4 | Intégration Odoo API | POC, connecteur temps-réel, sync budgets/ressources | Léo | 3 semaines |
| T2.5 | Module Reporting | Génération rapports PDF/Excel, templates Copil | Léo | 2 semaines |
| T2.6 | Export Power BI | Pipeline CSV/XLSX → Power BI | Léo | 1 semaine |
| T2.7 | CI/CD Pipeline | GitHub Actions (lint, test, deploy auto) | Léo | 1 semaine |
| T2.8 | Tests automatisés | Unit + Integration + E2E, coverage ≥70% | Léo | Continue (S5-S12) |

#### Phase 3 - Consolidation (S13-S18)

| ID | Tâche | Sous-tâches | Owner | Durée |
|----|-------|-------------|-------|-------|
| T3.1 | Intégration SharePoint | Webhooks, gestion documentaire, métadonnées | Léo | 3 semaines |
| T3.2 | MVP Beta | Déploiement 3 projets pilotes, beta testing | Jules + Léo | 3 semaines |
| T3.3 | Optimisation performance | Caching, CDN, load testing 200 req/min | Léo | 2 semaines |
| T3.4 | Formation utilisateurs | Par vagues, support dédié, FAQ | Jules | 3 semaines |
| T3.5 | Migration données | Historiques depuis outils existants | Léo | 2 semaines |

#### Phase 4 - Livrables Académiques (S19-S24)

| ID | Tâche | Sous-tâches | Owner | Durée |
|----|-------|-------------|-------|-------|
| T4.1 | Script vidéo + storyboard | Structure, répartition temps de parole | Jules | 1 semaine |
| T4.2 | Enregistrement vidéo | Screencast MVP + voix-off | Jules + Léo | 1 semaine |
| T4.3 | Montage vidéo | Montage final, sous-titres, 15-20 min | Jules | 1 semaine |
| T4.4 | Dossier technique groupe | Rédaction 85-110 pages | Jules + Léo | 4 semaines |
| T4.5 | Dossiers individuels | 25-35 pages chacun | Jules / Léo | 3 semaines |
| T4.6 | Review & soumission | Relecture, corrections, soumission finale | Jules + Léo | 1 semaine |

### 4.3 Calendrier Projet (5 points)

```
S1  S2  S3  S4  S5  S6  S7  S8  S9  S10 S11 S12 S13 S14 S15 S16 S17 S18 S19 S20 S21 S22 S23 S24
|---PHASE 1 : CADRAGE---|------- PHASE 2 : DÉVELOPPEMENT MVP ---------|--- PHASE 3 : CONSOLIDATION ---|--- PHASE 4 : LIVRABLES ---|
                        △                          △                                    △                              △
                     Cahier              MVP Alpha                              MVP Beta                        Soumission
                   des charges           déployé                                stable                           finale
```

> **Note** : Un diagramme de Gantt détaillé est fourni en Annexe A avec les durées exactes par tâche.

### 4.4 Gestion des Dépendances (5 points)

| Tâche Dépendante | Prérequis | Type | Impact si Retard |
|-------------------|-----------|------|------------------|
| T2.1 (Auth Azure AD) | T1.6 (Infrastructure) | Finish-to-Start | Bloque tout le développement |
| T2.2 (Dashboard) | T2.1 (Auth) + T2.3 (Projets) | Finish-to-Start | Dashboard sans données |
| T2.4 (Odoo API) | T1.5 (Architecture) | Finish-to-Start | Données budget non disponibles |
| T2.6 (Power BI) | T2.5 (Reporting) | Finish-to-Start | Pas d'export automatisé |
| T3.2 (Beta) | T2.* (tous dev) | Finish-to-Start | Chemin critique du projet |
| T4.2 (Vidéo) | T3.2 (Beta stable) | Finish-to-Start | Démo sur version instable |

**Chemin critique** : T1.6 → T2.1 → T2.3 → T2.2 → T2.5 → T3.2 → T4.2 → T4.6

### 4.5 Gestion des Risques (5 points)

| ID | Risque | Probabilité | Impact | Criticité | Stratégie de Mitigation |
|----|--------|-------------|--------|-----------|--------------------------|
| R1 | API Odoo instable / documentation insuffisante | Moyenne | Élevé | **Critique** | POC précoce (S1-4), mock data en fallback |
| R2 | Retard livraison MVP | Moyenne | Élevé | **Critique** | Buffer 2 semaines, scope réduit (MoSCoW) |
| R3 | Adoption utilisateurs faible | Moyenne | Moyen | **Majeur** | Programme early adopters, champions par pôle |
| R4 | Surcharge équipe (2 personnes) | Haute | Moyen | **Majeur** | Priorisation RICE stricte, automatisation max |
| R5 | Incompatibilité Azure AD / SSO | Faible | Élevé | **Majeur** | POC auth S4, fallback JWT classique |
| R6 | Complexité intégration SharePoint | Moyenne | Moyen | **Modéré** | Phase 3 seulement, non critique pour MVP |
| R7 | Perte de données migration | Faible | Élevé | **Majeur** | Backup systématique, migration progressive |
| R8 | Non-respect deadlines académiques | Faible | Critique | **Critique** | Phase 4 dédiée, buffer 2 semaines |

**Matrice de criticité** :

```
Impact ↑
  Élevé   |  R5, R7  |  R1, R2, R8  |
  Moyen   |  R6      |  R3, R4      |
  Faible  |          |              |
          +---------+--------------+
           Faible     Moyenne    Haute → Probabilité
```

### 4.6 Outils de Planification (5 points)

| Outil | Usage | Fréquence |
|-------|-------|-----------|
| **Gantt (GanttPRO / MS Project)** | Planification macro, chemin critique, jalons | Mise à jour hebdomadaire |
| **GitHub Projects** | Backlog produit, sprint board, Kanban | Quotidien |
| **Now-Next-Later Board** | Roadmap produit, priorisation stratégique | Review bi-hebdomadaire |
| **RICE Scoring** | Priorisation features (Reach × Impact × Confidence / Effort) | Par sprint |
| **Matrice RACI** | Répartition responsabilités | Stable, revue mensuelle |
| **Power BI** | Dashboard KPI, suivi avancement | Temps-réel |

### 4.7 Jalons Clés - Milestones (5 points)

| Jalon | Semaine | Critère de Validation | Livrable |
|-------|---------|----------------------|----------|
| **M1 - Cadrage validé** | S3 | Cahier des charges approuvé Comex | CDC + Architecture |
| **M2 - Infrastructure opérationnelle** | S4 | Environnements dev/staging/prod déployés | CI/CD fonctionnel |
| **M3 - Auth & Sécurité** | S6 | SSO Azure AD + MFA opérationnels | Module auth |
| **M4 - Intégration Odoo** | S8 | Sync quotidienne budgets/ressources | Connecteur Odoo |
| **M5 - MVP Alpha** | S12 | 6 features core déployées, 3 projets pilotes | MVP fonctionnel |
| **M6 - Beta stable** | S18 | Tests OK, performance validée, formations lancées | MVP optimisé |
| **M7 - Vidéo finalisée** | S22 | 15-20 min, tous les membres présents | Fichier MP4 |
| **M8 - Soumission finale** | S24 | Dossier groupe + individuels complets | ZIP final |

---

## 5. Solution Technique

> **Section évaluée : 73 points** (Cohérence : 10 | Justification : 10 | Veille techno : 2 | Innovation : 2 | Veille CPIT : 5 | Tests : 5 | GreenIT : 2 | Normes : 5 | Accessibilité : 2 | Schémas : 5 | Limites : 5 | Doc utilisateur : 10 | Gouvernance & évolution : 10)

### 5.1 Cohérence de la Solution Proposée (10 points)

#### Architecture Three-Tier

La solution repose sur une architecture **Three-Tier** (Présentation / Application / Données), pattern éprouvé pour les applications web d'entreprise :

```
┌──────────────────────────────────────────────────────────────┐
│                    UTILISATEURS (185)                         │
│          PMO · Chefs de Projet · Direction · Équipes         │
└─────────────────────────┬────────────────────────────────────┘
                          │ HTTPS (443)
                          ▼
┌──────────────────────────────────────────────────────────────┐
│               COUCHE PRÉSENTATION (Vercel)                    │
│  React 18 · TypeScript · Tailwind CSS · Zustand · Recharts  │
│  [Dashboard] [Projets] [Reporting] [Timesheets] [Admin]     │
└─────────────────────────┬────────────────────────────────────┘
                          │ REST API (JSON)
                          ▼
┌──────────────────────────────────────────────────────────────┐
│               COUCHE APPLICATION (Railway)                    │
│  Node.js 18 · Express · TypeScript · Prisma ORM             │
│  ┌─────────┐ ┌────────┐ ┌──────────┐ ┌─────────────────┐   │
│  │ Auth MW │ │ RBAC   │ │ Rate     │ │ Error Handler   │   │
│  │ (JWT)   │ │        │ │ Limiter  │ │                 │   │
│  └─────────┘ └────────┘ └──────────┘ └─────────────────┘   │
│  ┌───────────┐ ┌───────────┐ ┌──────────┐ ┌────────────┐   │
│  │ Projects  │ │   Users   │ │Reporting │ │ Timesheets │   │
│  │ Service   │ │  Service  │ │ Service  │ │  Service   │   │
│  └───────────┘ └───────────┘ └──────────┘ └────────────┘   │
│  ┌──────────┐ ┌────────────┐ ┌──────────┐                   │
│  │  Odoo    │ │ SharePoint │ │ Power BI │  Adapters         │
│  │ Adapter  │ │  Adapter   │ │ Adapter  │                   │
│  └──────────┘ └────────────┘ └──────────┘                   │
└─────────────────────────┬────────────────────────────────────┘
                          │ SQL (Prisma)
                          ▼
┌──────────────────────────────────────────────────────────────┐
│              COUCHE DONNÉES (Supabase)                        │
│  PostgreSQL 15 · Row Level Security · Backups automatiques   │
│  [Users] [Projects] [Timesheets] [Milestones] [Documents]   │
└──────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌──────────────────────────────────────────────────────────────┐
│                  SYSTÈMES EXTERNES                            │
│  Odoo v15 (ERP)  ·  SharePoint Online  ·  Power BI  ·      │
│  Azure AD (SSO)  ·  HubSpot (CRM, optionnel)               │
└──────────────────────────────────────────────────────────────┘
```

#### Adéquation Solution / Besoins

| Besoin Identifié | Réponse Technique | Module Concerné |
|------------------|-------------------|-----------------|
| Visibilité 360° sur 5 projets | Dashboard exécutif temps-réel | Frontend (Recharts) |
| Réduction temps reporting | Génération automatique rapports | Reporting Service |
| Source unique de données | PostgreSQL centralisé + sync Odoo | Data Layer + Adapters |
| Allocation optimisée ressources | Visualisation capacité/charge | Dashboard + Analytics |
| Interopérabilité SI existant | Adapters Odoo, SharePoint, Power BI | Service Layer |
| Sécurité & RGPD | Azure AD SSO, RBAC, chiffrement | Auth + Middleware |

### 5.2 Qualité de la Justification Technique (10 points)

#### Stack Retenue : JavaScript Full-Stack (MERN adapté)

| Composant | Technologie | Version | Justification |
|-----------|-------------|---------|---------------|
| **Frontend Framework** | React | 18.2+ | Standard industrie, écosystème riche, communauté massive |
| **Langage** | TypeScript | 5.0+ | Type safety, refactoring sûr, meilleure maintenabilité |
| **Styling** | Tailwind CSS | 3.x | Utility-first, responsive natif, bundle optimisé |
| **State** | Zustand | 4.x | Léger (1KB), API simple, moins de boilerplate que Redux |
| **Charts** | Recharts | 2.x | Composants React natifs, responsive, customisable |
| **Backend** | Node.js + Express | 18 LTS | Async I/O, même langage front/back, écosystème NPM |
| **ORM** | Prisma | 5.x | Type-safe queries, migrations automatiques, schema-first |
| **Database** | PostgreSQL | 15 | Robustesse, ACID, JSON support, Row Level Security |
| **Hosting DB** | Supabase | Managed | Free tier généreux, backups, API REST auto-générée |
| **Frontend Hosting** | Vercel | — | Deploy instantané, CDN global, preview branches |
| **Backend Hosting** | Railway | — | Docker natif, scaling auto, free tier |
| **CI/CD** | GitHub Actions | — | Intégré au repo, workflows YAML, gratuit open source |
| **Auth** | Azure AD + JWT | — | SSO existant chez Tech4Value, MFA native |

#### Alternatives Évaluées et Rejetées

| Alternative | Technologie | Raison du Rejet |
|-------------|-------------|-----------------|
| Frontend Python (Django templates) | Django | Pas de SPA, UX inférieure pour dashboards |
| Frontend Vue.js | Vue 3 | Écosystème moins mature, moins de composants charts |
| Backend Python (FastAPI) | FastAPI | Langage différent du frontend, overhead de contexte |
| Backend Java (Spring Boot) | Spring | Over-engineering pour un MVP, temps de développement plus long |
| Database MongoDB | NoSQL | Relations complexes (projets/pôles/users) mieux gérées en SQL |
| Database MySQL | MySQL | PostgreSQL supérieur pour JSON, RLS, et extensions |
| Hosting AWS | EC2/RDS | Complexité inutile pour un MVP, coûts plus élevés |
| Low-code (Retool/Appsmith) | Low-code | Limites personnalisation, vendor lock-in |

### 5.3 Veille Technologique (2 points)

#### Sources de Veille Active

| Source | Type | Fréquence |
|--------|------|-----------|
| **State of JS / State of CSS** | Survey annuel | Annuel |
| **ThoughtWorks Technology Radar** | Radar technologique | Trimestriel |
| **Hacker News / dev.to** | Communauté développeur | Quotidien |
| **Newsletters** (TLDR, JavaScript Weekly, Node Weekly) | Curation tech | Hebdomadaire |
| **GitHub Trending** | Open source | Hebdomadaire |
| **Gartner Magic Quadrant PPM** | Marché PPM enterprise | Annuel |

#### Tendances Intégrées au Projet

| Tendance | Application dans Tech4Value |
|----------|----------------------------|
| **TypeScript adoption massive** (93% satisfaction) | TypeScript full-stack |
| **Server-side rendering Renaissance** | SSR pour SEO pages publiques |
| **Edge Computing** | Vercel Edge Functions pour API légères |
| **AI-assisted development** | Claude Code pour accélération développement |
| **Design Systems** | Tailwind CSS + composants réutilisables |

### 5.4 Innovation de la Solution (2 points)

| Innovation | Description | Différenciant |
|------------|-------------|---------------|
| **Dashboard temps-réel multi-projets** | Vue consolidée 5 projets avec KPI live | vs. Excel statique existant |
| **Sync bidirectionnelle Odoo** | Connecteur temps-réel budgets/ressources | vs. export CSV manuel |
| **Alertes proactives** | Détection risques 48h à l'avance | vs. reporting rétrospectif |
| **Rapports auto-générés** | PDF/Excel en 30 min (vs 4h manuelles) | -87% temps reporting |
| **Allocation intelligente** | Suggestions optimisation 78 ETP | vs. intuition seule |

### 5.5 Politique de Veille CPIT (5 points)

#### Veille Spécifique Chef de Projet IT

| Domaine de Veille | Périmètre | Sources Clés |
|-------------------|-----------|-------------|
| **Méthodologies Agile** | Scrum, SAFe, LeSS, Kanban | Scrum.org, SAFe Framework, Agile Alliance |
| **Gouvernance IT** | ITIL v4, COBIT 2019 | AXELOS, ISACA |
| **Gestion de Portefeuille** | PPM, MoP (Management of Portfolios) | PMI, AXELOS |
| **Transformation Digitale** | Change management, digital workplace | McKinsey Digital, Gartner |
| **Réglementation** | RGPD, NIS2, AI Act | CNIL, ANSSI, EU Commission |
| **Cybersécurité** | OWASP, Zero Trust | ANSSI, OWASP Foundation |
| **Green IT** | INR, GR491 | Institut du Numérique Responsable |

#### Application au Projet

- **ITIL v4** : Processus de gestion des incidents et changements pour la plateforme
- **RGPD** : Privacy by design dans le modèle de données (minimisation, consentement, droit à l'oubli)
- **OWASP Top 10** : Checklist sécurité intégrée au développement (cf. Section 5.8)
- **Green IT / GR491** : Éco-conception appliquée (cf. Section 5.7)

### 5.6 Rigueur des Tests (5 points)

#### Stratégie de Test

| Type de Test | Outil | Couverture Cible | Scope |
|-------------|-------|------------------|-------|
| **Unitaire** | Jest + Testing Library | ≥70% | Composants, services, utils |
| **Intégration** | Supertest | API routes | Endpoints REST |
| **E2E** | Playwright | Parcours critiques | Login → Dashboard → Reporting |
| **Performance** | k6 | 200 req/min | Endpoints critiques |
| **Sécurité** | OWASP ZAP (baseline) | Scan passif | Application déployée |

#### Résultats Attendus

| Métrique | Baseline | Cible S12 | Cible S18 |
|----------|----------|-----------|-----------|
| Test coverage (unit + integration) | 0% | ≥70% | ≥80% |
| Tests E2E parcours critiques | 0 | 5 scénarios | 10 scénarios |
| Temps exécution suite complète | — | < 2 min | < 3 min |
| Lighthouse Performance score | — | ≥85 | ≥90 |
| API latency p95 | — | < 200ms | < 150ms |

#### Pipeline CI/CD

```yaml
# .github/workflows/ci.yml (simplifié)
name: CI Pipeline
on: [push, pull_request]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run typecheck    # TypeScript compilation
      - run: npm run lint         # Biome linting
      - run: npm run test         # Jest + Supertest
      - run: npm run build        # Production build

  deploy:
    needs: quality
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: # Deploy to Vercel + Railway
```

### 5.7 Intégration GreenIT (2 points)

#### Principes d'Éco-Conception Appliqués

| Principe | Application Concrète | Impact |
|----------|---------------------|--------|
| **Sobriété fonctionnelle** | MVP scope réduit (6 features core, pas de feature inutile) | -40% code vs full scope |
| **Optimisation réseau** | API pagination (max 50 items/page), compression gzip | -60% bande passante |
| **Lazy loading** | Chargement à la demande des composants et images | -30% temps chargement initial |
| **Caching intelligent** | Redis cache + HTTP cache headers (ETag, Cache-Control) | -50% requêtes serveur |
| **Hébergement green** | Vercel (AWS régions EU) + Railway (EU) | Proximité utilisateurs |
| **Dark mode** | Réduction consommation écran OLED | -15% énergie écrans |
| **Suppression code mort** | Tree-shaking Webpack + bundle analysis | Bundle minimal |

#### Référentiel GR491 (Institut du Numérique Responsable)

- Conception : Minimisation des fonctionnalités (YAGNI)
- Développement : Optimisation des requêtes SQL (Prisma query optimization)
- Hébergement : Choix de datacenters européens certifiés
- Utilisation : Interface légère, navigation efficace, formulaires courts

### 5.8 Normes et Obligations Réglementaires (5 points)

#### RGPD (Règlement Général sur la Protection des Données)

| Exigence | Implémentation |
|----------|----------------|
| **Minimisation des données** | Collecte uniquement des données nécessaires au fonctionnement |
| **Privacy by design** | Chiffrement AES-256, pseudonymisation des exports |
| **Consentement** | Bandeau cookies, opt-in explicite pour analytics |
| **Droit d'accès et portabilité** | Export JSON/CSV des données personnelles |
| **Droit à l'effacement** | Soft delete avec purge automatique à 30 jours |
| **Registre des traitements** | Documenté dans le DPO register |
| **Notification de violation** | Procédure sous 72h, logs d'audit |

#### OWASP Top 10 (2021)

| Vulnérabilité | Mitigation |
|---------------|------------|
| A01 - Broken Access Control | RBAC middleware + Row Level Security PostgreSQL |
| A02 - Cryptographic Failures | HTTPS obligatoire, bcrypt (salt 12), JWT HttpOnly |
| A03 - Injection | Prisma ORM (queries paramétrées), validation Zod |
| A04 - Insecure Design | Threat modeling en phase cadrage |
| A05 - Security Misconfiguration | Security headers (CSP, HSTS, X-Frame-Options) |
| A06 - Vulnerable Components | npm audit, Snyk scan automatique |
| A07 - Auth Failures | Rate limiting login (5 tentatives/15 min), MFA Azure AD |
| A08 - Data Integrity | Signed deployments, CI/CD pipeline intégrité |
| A09 - Logging Failures | Winston structured logging, pas de données sensibles |
| A10 - SSRF | Validation URL, allowlist pour appels externes |

#### Sécurité - Headers HTTP

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### 5.9 Accessibilité (2 points)

#### Conformité WCAG 2.1 AA

| Critère | Implémentation |
|---------|----------------|
| **Contraste couleurs** | Ratio minimum 4.5:1 (texte normal), 3:1 (texte large) |
| **Navigation clavier** | Tous les éléments interactifs focusables, Tab/Shift+Tab |
| **Lecteurs d'écran** | Attributs ARIA, landmarks (`<header>`, `<nav>`, `<main>`) |
| **Textes alternatifs** | `alt` sur toutes les images informatives |
| **Formulaires** | Labels associés, messages d'erreur `aria-describedby` |
| **Responsive** | Touch targets ≥ 44px, pas de scroll horizontal |

#### Outils de Validation

- **axe-core** : Scan automatique dans la CI (0 violations critiques)
- **Lighthouse Accessibility** : Score cible ≥ 90
- **Tests manuels** : Navigation clavier + VoiceOver (macOS)

### 5.10 Qualité des Schémas Techniques (5 points)

Les schémas techniques suivants sont fournis dans le dossier :

| Schéma | Type | Localisation |
|--------|------|-------------|
| Architecture applicative Three-Tier | Diagramme d'architecture | Section 5.1 |
| Modèle de données (Prisma schema) | Diagramme entité-relation | Annexe B |
| Flux d'intégration Odoo | Diagramme de séquence | Annexe C |
| Pipeline CI/CD | Diagramme de flux | Section 5.6 |
| Architecture réseau / déploiement | Diagramme d'infrastructure | Annexe D |
| Parcours utilisateur (Dashboard) | Wireframe / User flow | Annexe E |

### 5.11 Analyse Critique des Limites (5 points)

#### Limites Techniques Identifiées

| Limite | Impact | Mitigation | Statut |
|--------|--------|------------|--------|
| **Équipe réduite (2 personnes)** | Scope limité, pas de spécialisation front/back | Priorisation RICE stricte, full-stack JS | Accepté |
| **API Odoo v15 limitée** | Certaines données non exposées via API | Mock data pour fonctionnalités manquantes | Contourné |
| **Pas de temps-réel WebSocket** | Refresh manuel nécessaire pour certaines données | Polling toutes les 30s, WebSocket en v2 | Différé |
| **Free tier infrastructure** | Limites de performance et stockage | Suffisant pour 185 users, scaling prévu en v2 | Accepté |
| **Azure AD mock (projet académique)** | Pas de vrai SSO en environnement de test | JWT classique avec simulation des rôles | Contourné |
| **Absence de tests E2E complets** | Couverture partielle des parcours utilisateur | Focus sur les 5 parcours critiques | Accepté |
| **Performance Power BI** | Export CSV uniquement, pas d'API bidirectionnelle | Pipeline XLSX suffisant pour les besoins | Accepté |

#### Axes d'Amélioration Technique

1. **WebSocket temps-réel** : Remplacer le polling par des connexions persistantes pour les KPI live
2. **Micro-services** : Découper le monolithe en services indépendants pour le scaling
3. **GraphQL** : Remplacer REST pour des requêtes plus flexibles côté frontend
4. **Machine Learning** : Prédiction de retards projets basée sur les données historiques
5. **Mobile native** : Application React Native pour les managers en déplacement

### 5.12 Documentation Utilisateur (10 points)

#### Structure de la Documentation

| Document | Public Cible | Contenu |
|----------|-------------|---------|
| **Guide de Démarrage Rapide** | Tous utilisateurs | Installation, premier login, navigation |
| **Guide Administrateur** | IT & PMO | Configuration, gestion utilisateurs, RBAC |
| **Guide Chef de Projet** | PMO, Chefs de projet | Création projet, suivi, reporting, jalons |
| **Guide Direction** | Direction Générale | Dashboard exécutif, KPI, aide à la décision |
| **FAQ** | Tous | Questions fréquentes, résolution problèmes courants |
| **Documentation API** | Développeurs | Endpoints REST, authentification, exemples |

#### Exemple - Guide de Démarrage Rapide

**1. Connexion**

- Accéder à `https://app.tech4value.com`
- Se connecter via Azure AD (SSO) ou identifiants locaux
- Première connexion : choisir son rôle et ses projets suivis

**2. Navigation Principale**

- **Dashboard** : Vue d'ensemble des 5 projets (KPI, risques, budget)
- **Projets** : Détail par projet (timesheets, milestones, documents)
- **Reporting** : Génération de rapports PDF/Excel
- **Admin** : Gestion utilisateurs et configuration (rôle Admin uniquement)

**3. Actions Courantes**

- Saisir ses heures : Projets → Mon Projet → Timesheet → Ajouter
- Consulter un KPI : Dashboard → Cliquer sur le KPI souhaité
- Générer un rapport : Reporting → Nouveau Rapport → Choisir template → Générer

### 5.13 Gouvernance et Vision d'Évolution (10 points)

#### Modèle de Gouvernance Post-Déploiement

| Instance | Fréquence | Participants | Objectif |
|----------|-----------|-------------|----------|
| **Comité Stratégique** | Trimestriel | Direction, DSI, PMO | Orientations produit, budget |
| **Comité Opérationnel** | Mensuel | PMO, Tech Lead, Représentants pôles | Suivi KPI, incidents, évolutions |
| **Sprint Review** | Bi-hebdomadaire | Équipe dev + stakeholders | Demo nouvelles features |
| **Maintenance Window** | Mensuel | Équipe technique | Mises à jour, patches sécurité |

#### Roadmap d'Évolution (24 mois post-MVP)

| Horizon | Fonctionnalités | Objectif Stratégique |
|---------|-----------------|---------------------|
| **V1.1 (M+3)** | WebSocket temps-réel, notifications push, mobile responsive avancé | Améliorer l'UX temps-réel |
| **V1.2 (M+6)** | Intégration Jira/Confluence, API GraphQL, webhooks custom | Interopérabilité étendue |
| **V2.0 (M+12)** | Module prédictif ML (retards projets), chatbot assistant | Intelligence augmentée |
| **V2.5 (M+18)** | Multi-tenant SaaS, onboarding self-service, marketplace plugins | Commercialisation B2B |
| **V3.0 (M+24)** | IA autonome allocation ressources, digital twin projets | Pilotage autonome |

#### Indicateurs de Succès Long Terme

| KPI | Cible M+6 | Cible M+12 | Cible M+24 |
|-----|-----------|------------|------------|
| Temps reporting PMO | 15h/semaine (-50%) | 10h/semaine (-67%) | 5h/semaine (-83%) |
| Projets livrés à temps | 90% | 92% | 95% |
| Taux adoption plateforme | 95% | 98% | 99% |
| NPS utilisateurs | 50+ | 60+ | 70+ |
| Uptime | 99.5% | 99.9% | 99.95% |

#### Plan de Maintenance

| Type | Fréquence | Responsable | Actions |
|------|-----------|-------------|---------|
| **Corrective** | Continue | Équipe dev | Correction bugs, incidents |
| **Évolutive** | Sprints bi-hebdo | Product Owner + dev | Nouvelles features |
| **Préventive** | Mensuelle | Tech Lead | Mises à jour dépendances, patches sécurité |
| **Adaptive** | Trimestrielle | Architecte | Évolution infrastructure, scaling |

---

## 6. Conduite du Changement

### 6.1 Stratégie Globale

La transformation numérique impacte **185 collaborateurs** répartis sur **3 sites**. La stratégie de conduite du changement s'articule autour de 4 piliers :

| Pilier | Objectif | Actions Clés |
|--------|----------|-------------|
| **Communication** | Créer l'adhésion | All-hands kickoff, newsletter hebdomadaire, transparence totale |
| **Formation** | Développer les compétences | Formations par rôle, tutoriels vidéo, ateliers pratiques |
| **Accompagnement** | Soutenir l'adoption | Champions par pôle, help desk dédié, FAQ évolutive |
| **Mesure** | Piloter l'adoption | NPS trimestriel, taux d'usage, satisfaction formation |

### 6.2 Plan de Communication

| Phase | Message | Canal | Cible | Timing |
|-------|---------|-------|-------|--------|
| **Awareness** | Vision transformation digitale | All-hands meeting | Tous (185) | S1 |
| **Understanding** | Pourquoi changer ? Bénéfices par rôle | Newsletter + vidéo | Tous | S2-S4 |
| **Buy-in** | Démonstrations MVP, témoignages early adopters | Ateliers démo mensuels | PMO + Managers | S6-S12 |
| **Adoption** | Guides d'utilisation, tips & tricks | Email + Slack | Tous | S12-S18 |
| **Reinforcement** | Success stories, reconnaissance contributeurs | Newsletter + all-hands | Tous | S18-S24 |

### 6.3 Programme de Formation

| Module | Public | Format | Durée | Contenu |
|--------|--------|--------|-------|---------|
| **Prise en Main** | Tous utilisateurs | E-learning + atelier | 2h | Navigation, saisie temps, consultation KPI |
| **Chef de Projet** | PMO (15-20 pers.) | Atelier présentiel | 4h | Gestion projets, reporting, milestones |
| **Direction** | Comex (10 pers.) | Atelier dédié | 1h30 | Dashboard exécutif, aide à la décision |
| **Administrateur** | IT (5 pers.) | Formation technique | 4h | Configuration, RBAC, intégrations, maintenance |

### 6.4 Programme Early Adopters

- **Sélection** : 2-3 champions par pôle (18-27 personnes au total)
- **Rôle** : Testeurs beta, ambassadeurs, relais de feedback
- **Avantages** : Accès anticipé, influence sur les priorités produit, reconnaissance interne
- **KPI** : Taux d'adoption > 80% à S6, NPS early adopters ≥ 50

### 6.5 KPI de la Conduite du Changement

| Indicateur | Baseline | Cible S6 | Cible S12 | Cible S24 |
|------------|----------|----------|-----------|-----------|
| NPS interne | 30 | 45 | 50 | 65 |
| Taux adoption MVP | 0% | 80% | 90% | 95% |
| Satisfaction formation (CSAT) | — | ≥7/10 | ≥8/10 | ≥8.5/10 |
| Nombre de champions actifs | 0 | 18 | 25 | 27 |
| Tickets support / semaine | — | <20 | <10 | <5 |

---

## 7. Respect du Cadre & Bonus

> **Section évaluée : 15 points** (Professionnalisme livrable : 10 | Aller au-delà : 5)

### 7.1 Professionnalisme du Livrable (10 points)

- **Structure claire** : Table des matières, numérotation cohérente, navigation facilitée
- **Visuels professionnels** : Schémas d'architecture, diagrammes, tableaux formatés
- **Langage approprié** : Posture chef de projet présentant à un Copil
- **Sources citées** : Références aux frameworks, normes et méthodologies utilisées
- **Versioning** : Document versionné, historique des modifications

### 7.2 Aller au-delà des Attentes (5 points)

| Élément Bonus | Description |
|---------------|-------------|
| **Business Model Canvas complet** | Analyse BMC détaillée avec 5 segments clients, structure coûts/revenus projetés |
| **Matrice McKinsey 7S** | Diagnostic organisationnel avec scores de maturité actuels vs cibles |
| **Framework Now-Next-Later** | Roadmap produit structurée selon le framework de Janna Bastow (ProdPad) |
| **Scoring RICE** | Priorisation systématique de toutes les features avec méthode RICE |
| **12 Objectifs stratégiques avec KPI** | Tableau complet objectifs-KPI-actions avec baselines et cibles intermédiaires |
| **Intégrations SI réelles** | Code d'intégration Odoo, SharePoint, Power BI (pas uniquement théorique) |
| **Approche GreenIT documentée** | Référentiel GR491, principes d'éco-conception appliqués |
| **Pipeline CI/CD complet** | GitHub Actions avec lint, test, build, deploy automatisé |

---

## 8. Annexes

### Annexe A : Diagramme de Gantt Détaillé

> _À insérer : Gantt complet avec les 30+ tâches, durées, dépendances et chemin critique._

### Annexe B : Modèle de Données (Prisma Schema)

> _À insérer : Schéma Prisma complet avec les entités User, Pole, Project, ProjectAssignment, Timesheet, Milestone, Document, Risk, Report et leurs relations._

### Annexe C : Diagramme de Séquence - Intégration Odoo

> _À insérer : Séquence d'authentification Odoo → fetch projets → sync base locale → mise à jour dashboard._

### Annexe D : Architecture Réseau / Déploiement

> _À insérer : Diagramme d'infrastructure Vercel + Railway + Supabase avec flux réseau._

### Annexe E : Wireframes / User Flows

> _À insérer : Maquettes du dashboard exécutif, page projet, formulaire timesheet._

### Annexe F : Matrice RACI Complète

> _À insérer : RACI détaillé pour les 9 pôles et toutes les activités projet._

### Annexe G : Business Model Canvas

> _Référence : `docs/business-model-canvas.md`_

### Annexe H : Matrice McKinsey 7S

> _Référence : `docs/matrice-7s-mckinsey.md`_

---

## Section Individuelle : Analyse Dynamique Projet

> **Section évaluée : 8 points** (Défis : 2 | Forces/Faiblesses : 2 | Compétences : 2 | Axes amélioration : 2)
>
> _Note : Cette section est individuelle. Chaque membre rédige sa propre analyse dans son dossier individuel._

### Template - Analyse Individuelle (à remplir par chaque membre)

#### 1. Réflexion sur les Défis Rencontrés (2 points)

_[Décrire les principaux défis techniques, organisationnels ou humains rencontrés au cours du projet. Analyser les causes et les conséquences de ces difficultés.]_

Exemples de défis à documenter :

- Gestion de la charge de travail avec une équipe de 2 personnes
- Complexité des intégrations SI (API Odoo, Azure AD)
- Équilibre entre exigences académiques et qualité technique
- Coordination inter-pôles dans une organisation matricielle

#### 2. Identification des Forces et Faiblesses (2 points)

_[Auto-évaluation honnête de ses forces et faiblesses observées pendant le projet.]_

| Forces | Faiblesses |
|--------|-----------|
| _[Ex: Maîtrise technique TypeScript/React]_ | _[Ex: Estimation des durées de développement]_ |
| _[Ex: Capacité à prioriser sous pression]_ | _[Ex: Communication avec les stakeholders non techniques]_ |

#### 3. Analyse des Compétences Développées (2 points)

_[Identifier les compétences techniques et comportementales acquises ou renforcées.]_

| Compétence | Niveau Avant | Niveau Après | Contexte d'Apprentissage |
|------------|-------------|-------------|--------------------------|
| _[Ex: Architecture micro-services]_ | _Débutant_ | _Intermédiaire_ | _Conception architecture Three-Tier_ |
| _[Ex: Gestion de projet Agile]_ | _Intermédiaire_ | _Avancé_ | _Sprint planning, RACI, Copil_ |

#### 4. Axes d'Amélioration (2 points)

_[Propositions concrètes pour de futurs projets.]_

1. _[Ex: Commencer les POC d'intégration plus tôt dans le projet]_
2. _[Ex: Mettre en place des tests E2E dès la phase 2]_
3. _[Ex: Documenter les décisions architecturales au fil de l'eau (ADR)]_

---

_Fin du Dossier Technique - Tech4Value_
_Version 1.0 - Draft - Mars 2026_
