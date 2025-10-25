# Cahier des Charges - Tech4Value
## Solution de Pilotage Stratégique des Projets

**Projet d'Étude M2 CPIT 2025**

**Version** : 1.0
**Date** : [À compléter]
**Équipe** : [Noms des membres]
**Code Promo** : [À compléter]

---

## Table des Matières

1. [Présentation du Projet](#1-présentation-du-projet)
2. [Contexte et Enjeux](#2-contexte-et-enjeux)
3. [Objectifs du Projet](#3-objectifs-du-projet)
4. [Périmètre](#4-périmètre)
5. [Parties Prenantes](#5-parties-prenantes)
6. [Exigences Fonctionnelles](#6-exigences-fonctionnelles)
7. [Exigences Non-Fonctionnelles](#7-exigences-non-fonctionnelles)
8. [Contraintes](#8-contraintes)
9. [Architecture Technique](#9-architecture-technique)
10. [Planification](#10-planification)
11. [Budget](#11-budget)
12. [Gestion des Risques](#12-gestion-des-risques)
13. [Critères d'Acceptation](#13-critères-dacceptation)
14. [Annexes](#14-annexes)

---

## 1. Présentation du Projet

### 1.1 Contexte

**Tech4Value** est une entreprise de **185 collaborateurs** répartis entre le siège et deux antennes régionales (Rennes et Lyon). Elle fonctionne selon une **organisation matricielle** combinant pôles métiers et fonctions support.

L'entreprise gère actuellement **5 projets stratégiques** mobilisant 42% des effectifs (78 ETP). La gestion de ces projets souffre d'une **fragmentation des outils** :
- Données projets dispersées (Odoo, Excel, Trello, Jira, Notion)
- Manque de vision consolidée du portefeuille projets
- Difficulté à piloter les ressources et les budgets de manière transverse
- Reporting manuel chronophage et source d'erreurs

### 1.2 Problématique

**Comment centraliser et automatiser le pilotage des projets stratégiques de Tech4Value pour améliorer la prise de décision et optimiser l'allocation des ressources ?**

### 1.3 Solution Proposée

Développement d'un **MVP de solution de pilotage stratégique** intégrant l'écosystème SI existant (Odoo, HubSpot, SharePoint, Power BI, Azure AD) et offrant :
- Une vue consolidée du portefeuille projets (185 utilisateurs, 5 projets stratégiques)
- Des tableaux de bord temps réel avec KPIs clés
- Une automatisation des reportings
- Une intégration native avec les outils métiers existants

---

## 2. Contexte et Enjeux

### 2.1 Contexte Métier

#### Organisation de Tech4Value

| Pôle / Département | Effectif |
|-------------------|----------|
| Direction générale et PMO | 10 |
| Pôle IT & Infrastructure | 32 |
| Pôle Data & BI | 18 |
| Pôle Développement & Digital Factory | 38 |
| Pôle Sécurité & Conformité | 15 |
| Pôle RH & Communication interne | 20 |
| Pôle Finance & Achats | 16 |
| Pôle RSE & Green IT | 6 |
| Fonctions support | 10 |
| **TOTAL** | **185** |

#### Projets Stratégiques

| Projet | ETP Dédiés | Pôles Impliqués |
|--------|-----------|-----------------|
| Mise en conformité RGPD | 13 | Sécurité, Data, PMO |
| Déploiement ERP Finance & Supply Chain | 19 | IT, Finance, PMO |
| Plateforme Data Lake et BI Groupe | 18 | Data, IT, PMO |
| Programme Green IT - Cloud durable | 11 | IT, RSE, Sécurité |
| Portail RH unifié | 17 | RH, IT, PMO |
| **TOTAL** | **78 ETP** | **(42% des effectifs)** |

### 2.2 Écosystème SI Existant

#### Cartographie des Outils

| Outil | Usage Actuel | Intégration Prioritaire |
|-------|--------------|-------------------------|
| **Odoo (ERP v15)** | RH, Comptabilité, Budget projet, Temps passés | ✅ **Oui** (API REST) |
| **HubSpot (CRM)** | Cycles commerciaux, Opportunités | ⚠️ Optionnel (API native) |
| **SharePoint Online** | Espaces projet, Livrables, Documentation | ✅ **Oui** (Microsoft Graph API) |
| **Power BI** | Reporting stratégique et opérationnel | ✅ **Oui** (Export CSV structuré) |
| **Azure AD** | Authentification unique (SSO), Gestion identités | 🛡️ À simuler (Gestion des rôles) |
| **Trello / Jira / Notion** | Gestion projet fragmentée | 🔄 À normaliser ou remplacer |

### 2.3 Enjeux

#### Enjeux Métiers
- **Visibilité** : Avoir une vue consolidée du portefeuille projets en temps réel
- **Performance** : Suivre les KPIs clés (budget, délais, ressources, risques)
- **Efficacité** : Automatiser les reportings pour libérer du temps aux chefs de projet
- **Décision** : Faciliter les arbitrages lors des Comités de Pilotage

#### Enjeux Techniques
- **Interopérabilité** : Intégrer des systèmes hétérogènes (Odoo, SharePoint, Power BI)
- **Scalabilité** : Supporter 185 utilisateurs et potentiellement plus de projets
- **Sécurité** : Protéger les données sensibles (budgets, RH, RGPD)
- **Accessibilité** : Conformité WCAG 2.1 (niveau AA minimum)

#### Enjeux Organisationnels
- **Adoption** : Faciliter l'adhésion des 185 collaborateurs (conduite du changement)
- **Formation** : Minimiser la courbe d'apprentissage (UX intuitive)
- **Gouvernance** : Définir les rôles et permissions (PMO, Chefs de projet, Direction)

---

## 3. Objectifs du Projet

### 3.1 Objectifs Stratégiques

1. **Centraliser la gestion du portefeuille projets** de Tech4Value
2. **Automatiser les reportings** pour gagner 30% de temps sur les tâches administratives
3. **Améliorer la prise de décision** grâce à des données consolidées et fiables
4. **Optimiser l'allocation des ressources** (78 ETP dédiés aux projets stratégiques)

### 3.2 Objectifs Opérationnels

1. **Développer un MVP fonctionnel** en 6 mois (24 semaines)
2. **Intégrer 3 systèmes prioritaires** : Odoo, SharePoint, Power BI
3. **Supporter 5 projets stratégiques** et 185 utilisateurs (simulation)
4. **Obtenir 220/220 points** dans l'évaluation du projet d'étude

### 3.3 Indicateurs de Succès (KPIs)

| Indicateur | Objectif | Mesure |
|-----------|----------|--------|
| Fonctionnalités MVP livrées | 100% des features must-have | 6/6 fonctionnalités |
| Couverture de tests | ≥80% | Tests unitaires + E2E |
| Performance (temps de chargement) | <2 secondes | Dashboard principal |
| Conformité WCAG 2.1 | Niveau AA | Audit automatisé (Lighthouse) |
| Adoption simulée | ≥80% des utilisateurs cibles | Tests utilisateurs (UAT) |
| Note finale | ≥18/20 | Évaluation projet d'étude |

---

## 4. Périmètre

### 4.1 Périmètre Fonctionnel

#### 4.1.1 Fonctionnalités INCLUSES (Must-Have - MVP)

✅ **Dashboard de pilotage multi-projets**
- Vue d'ensemble du portefeuille (5 projets stratégiques)
- KPIs clés : budget réel vs prévisionnel, avancement, ressources allouées
- Graphiques interactifs (charts.js ou recharts)
- Filtres par projet, pôle, statut, période

✅ **Intégration API Odoo**
- Import automatique des données projets (budget, planning)
- Import des temps passés (timesheets)
- Import des ressources et affectations (RH)
- Synchronisation quotidienne (automatisée)

✅ **Intégration SharePoint**
- Accès aux espaces projet via Microsoft Graph API
- Affichage des livrables et documents clés
- Upload/download de fichiers
- Gestion des versions (historique)

✅ **Export Power BI**
- Génération de fichiers CSV structurés
- Format compatible avec modèle Power BI
- Export automatisé (scheduler)
- Template dashboard Power BI fourni (.pbix)

✅ **Gestion multi-projets**
- CRUD projets (Create, Read, Update, Delete)
- Vues : liste, kanban, timeline (Gantt visuel)
- Gestion des jalons et livrables
- Recherche et filtrage avancés

✅ **Système de reporting automatisé**
- Génération de rapports PDF/Excel
- Rapports d'avancement projet (hebdomadaires)
- Rapports budgétaires (mensuels)
- Envoi automatique par email (simulation)

#### 4.1.2 Fonctionnalités EXCLUES (Hors Périmètre - MVP)

❌ **Intégration HubSpot CRM** (optionnelle, backlog)
❌ **Gestion avancée des risques** (matrice de base uniquement)
❌ **Module de facturation** (Odoo déjà utilisé pour cela)
❌ **Gestion des ressources avancée** (capacity planning, forecast)
❌ **Application mobile native** (responsive web uniquement)
❌ **Workflow d'approbation** (validation budgets, livrables)
❌ **Notifications push en temps réel** (email uniquement)
❌ **Intégration Jira/Trello** (normalisation future)

#### 4.1.3 Fonctionnalités FUTURES (Backlog - Post-MVP)

🔮 **Phase 2** (après MVP)
- Module de gestion des risques avancé (quantification, simulation Monte Carlo)
- Intégration HubSpot pour origine commerciale des projets
- Workflow d'approbation (validation budgets par DAF, livrables par PMO)
- Notifications push temps réel (WebSockets)

🔮 **Phase 3** (vision long-terme)
- Application mobile native (iOS/Android)
- IA prédictive (prédiction de retards, dépassements budgétaires)
- Intégration Jira/Trello (import automatique des tâches)
- Module de capacity planning (prévision charge ressources)

### 4.2 Périmètre Technique

#### 4.2.1 Architecture

**Type** : Application web full-stack (SPA - Single Page Application)

**Backend**
- Langage : Node.js 18+ (TypeScript) OU Python 3.11+ (FastAPI)
- API : REST (JSON)
- Base de données : PostgreSQL 15+ OU MongoDB 6+
- ORM : Prisma (Node.js) OU SQLAlchemy (Python)

**Frontend**
- Framework : React 18+ (TypeScript) OU Vue.js 3+
- UI Library : Tailwind CSS + shadcn/ui OU Material-UI
- State Management : Zustand OU Pinia
- Charts : Chart.js OU Recharts

**Infrastructure**
- Hébergement : Vercel (frontend) + Railway/Render (backend) OU tout-en-un (Azure/AWS)
- Base de données : Supabase (PostgreSQL géré) OU MongoDB Atlas
- CI/CD : GitHub Actions OU GitLab CI
- Monitoring : Sentry (erreurs) + Vercel Analytics (perf)

#### 4.2.2 Intégrations

| Système | API Utilisée | Données Synchronisées | Fréquence |
|---------|-------------|----------------------|-----------|
| Odoo v15 | REST API | Projets, Budgets, Temps passés, Ressources | Quotidienne (nuit) |
| SharePoint | Microsoft Graph API | Espaces projet, Documents, Livrables | À la demande (user) |
| Power BI | Export CSV | Toutes données agrégées | Hebdomadaire |
| Azure AD | Simulation SSO | Utilisateurs, Rôles, Groupes | N/A (mock auth) |

#### 4.2.3 Sécurité & Conformité

✅ **Sécurité**
- Authentification JWT (simulation Azure AD SSO)
- Autorisation basée sur les rôles (RBAC)
- Chiffrement HTTPS (TLS 1.3)
- Protection contre OWASP Top 10 (XSS, CSRF, injection SQL)
- Audit de sécurité avec OWASP ZAP OU Snyk

✅ **RGPD**
- Cartographie des données personnelles
- Registre des traitements (modèle CNIL)
- Consentement explicite (opt-in)
- Droits des personnes (accès, rectification, suppression)
- Durée de conservation définie (12 mois rolling)

✅ **Accessibilité**
- Conformité WCAG 2.1 niveau AA
- Navigation clavier complète
- Support lecteurs d'écran (ARIA labels)
- Contraste des couleurs (ratio 4.5:1 minimum)
- Tests automatisés (axe DevTools, Lighthouse)

✅ **Green IT**
- Optimisation du code (performance, mémoire)
- Compression des assets (images WebP, CSS/JS minifiés)
- Lazy loading et code splitting
- Métriques carbone (Website Carbon Calculator)

### 4.3 Périmètre Géographique

- **Déploiement** : Cloud (accessible mondialement)
- **Utilisateurs cibles** : Tech4Value (siège + Rennes + Lyon)
- **Langue** : Interface en français (internationalisation future)

### 4.4 Périmètre Temporel

- **Durée** : 24 semaines (6 mois)
- **Date de début** : [À compléter - Kick-off]
- **Date de fin** : [À compléter - Kick-off + 6 mois]
- **Jalons** : Voir section 10 (Planification)

---

## 5. Parties Prenantes

### 5.1 Équipe Projet

| Rôle | Nom | Responsabilités | Disponibilité |
|------|-----|-----------------|---------------|
| **Project Manager** | [À compléter] | Coordination, planning, risques, communication | 20% FTE |
| **Tech Lead** | [À compléter] | Architecture, choix techniques, code review | 30% FTE |
| **Business Analyst** | [À compléter] | Requirements, user stories, tests utilisateurs | 15% FTE |
| **Backend Developer** | [À compléter] | API, intégrations, base de données | 40% FTE |
| **Frontend Developer** | [À compléter] | Interface utilisateur, UX, responsive design | 40% FTE |
| **UX Designer** | [À compléter] | Maquettes, prototypes, design system | 20% FTE |
| **DevOps Engineer** | [À compléter] | Infra, CI/CD, monitoring | 15% FTE |

### 5.2 Sponsors et Décideurs

| Partie Prenante | Rôle | Intérêt | Influence |
|----------------|------|---------|-----------|
| **Direction Tech4Value** | Client final | Validation de la solution | Élevée |
| **PMO Tech4Value** | Utilisateur clé | Adoption et feedback | Élevée |
| **Comité de Pilotage** | Décideurs | Suivi stratégique | Élevée |
| **Encadrant pédagogique** | Évaluateur | Notation du projet | Critique |

### 5.3 Utilisateurs Finaux

| Type d'Utilisateur | Nombre | Besoins | Niveau Technique |
|-------------------|--------|---------|------------------|
| **PMO Global** | 10 | Vision portefeuille, arbitrages, reporting exécutif | Avancé |
| **Chefs de Projet** | 25 | Suivi détaillé de leur(s) projet(s), reporting, ressources | Intermédiaire |
| **Direction (COMEX)** | 5 | Dashboards exécutifs, KPIs consolidés | Basique |
| **Responsables de Pôle** | 8 | Charge de leur équipe, affectations, budget pôle | Intermédiaire |
| **Collaborateurs** | 137 | Consultation de leurs affectations, temps passés | Basique |
| **TOTAL** | **185** | | |

---

## 6. Exigences Fonctionnelles

### 6.1 Module Dashboard de Pilotage

#### US-001 : Vue d'ensemble du portefeuille
**En tant que** PMO Global
**Je veux** voir tous les projets stratégiques sur un seul écran
**Afin de** avoir une vision consolidée du portefeuille

**Critères d'acceptation :**
- [ ] Affichage des 5 projets stratégiques avec statut (En cours, En retard, Terminé)
- [ ] Indicateurs visuels (couleurs : vert/orange/rouge)
- [ ] Nombre total de ressources allouées (ETP)
- [ ] Budget global consommé vs prévisionnel
- [ ] Filtrage par statut, pôle, période

#### US-002 : KPIs en temps réel
**En tant que** Chef de Projet
**Je veux** consulter les KPIs de mon projet en temps réel
**Afin de** détecter rapidement les écarts

**Critères d'acceptation :**
- [ ] Budget : réel vs prévisionnel (graphique + pourcentage d'écart)
- [ ] Planning : avancement réel vs prévu (diagramme de Gantt visuel)
- [ ] Ressources : charge réelle vs planifiée (graphique en barres)
- [ ] Risques : nombre de risques ouverts par niveau (high/medium/low)
- [ ] Actualisation automatique (toutes les 5 minutes)

#### US-003 : Graphiques interactifs
**En tant que** Responsable de Pôle
**Je veux** visualiser la charge de mon équipe sous forme de graphiques
**Afin de** optimiser les affectations

**Critères d'acceptation :**
- [ ] Graphique de charge par collaborateur (barres empilées)
- [ ] Graphique d'évolution du budget dans le temps (courbe)
- [ ] Graphique de répartition des ressources par projet (camembert)
- [ ] Possibilité d'exporter les graphiques (PNG)
- [ ] Drill-down (clic sur un élément pour voir le détail)

### 6.2 Module Intégration Odoo

#### US-004 : Import des données projets
**En tant que** Système
**Je veux** importer automatiquement les projets depuis Odoo
**Afin de** synchroniser les données de référence

**Critères d'acceptation :**
- [ ] Connexion à l'API REST Odoo avec authentification
- [ ] Import des champs : ID projet, Nom, Budget prévisionnel, Date début/fin
- [ ] Gestion des erreurs (timeout, API indisponible)
- [ ] Logs de synchronisation (succès/échecs)
- [ ] Planification quotidienne (cron 2h du matin)

#### US-005 : Import des temps passés
**En tant que** PMO
**Je veux** consulter les temps passés réels par projet
**Afin de** comparer avec le budget

**Critères d'acceptation :**
- [ ] Import des timesheets Odoo (collaborateur, projet, heures, date)
- [ ] Calcul automatique du coût réel (heures × taux journalier)
- [ ] Agrégation par projet, par semaine, par mois
- [ ] Comparaison avec budget prévisionnel (écart en %)
- [ ] Alerte si écart >10%

### 6.3 Module Intégration SharePoint

#### US-006 : Accès aux espaces projet
**En tant que** Chef de Projet
**Je veux** accéder aux documents de mon projet SharePoint depuis l'application
**Afin de** avoir tout centralisé

**Critères d'acceptation :**
- [ ] Authentification Microsoft Graph API (simulation SSO)
- [ ] Affichage de la liste des documents du projet (nom, date, auteur)
- [ ] Possibilité de télécharger un document
- [ ] Possibilité d'uploader un nouveau document
- [ ] Gestion des versions (historique)

### 6.4 Module Export Power BI

#### US-007 : Génération CSV structuré
**En tant que** Système
**Je veux** exporter toutes les données dans un format compatible Power BI
**Afin de** alimenter les tableaux de bord BI existants

**Critères d'acceptation :**
- [ ] Export CSV avec schéma défini (colonnes : Projet, Budget, Avancement, etc.)
- [ ] Encodage UTF-8 sans BOM
- [ ] Séparateur point-virgule (;) pour compatibilité Excel FR
- [ ] Planification hebdomadaire (tous les lundis 8h)
- [ ] Stockage dans un bucket accessible par Power BI

### 6.5 Module Gestion Multi-Projets

#### US-008 : CRUD Projets
**En tant que** PMO
**Je veux** créer, modifier, supprimer des projets
**Afin de** maintenir le portefeuille à jour

**Critères d'acceptation :**
- [ ] Formulaire de création projet (nom, description, budget, dates, pôle)
- [ ] Édition des informations projet
- [ ] Suppression avec confirmation (soft delete)
- [ ] Validation des champs (dates cohérentes, budget positif)
- [ ] Historique des modifications (audit trail)

#### US-009 : Vue Timeline (Gantt)
**En tant que** Chef de Projet
**Je veux** voir la timeline de tous les projets
**Afin de** identifier les chevauchements de ressources

**Critères d'acceptation :**
- [ ] Affichage type Gantt (barres horizontales par projet)
- [ ] Jalons visibles (milestones)
- [ ] Dépendances entre projets (flèches)
- [ ] Zoom temporel (mois/trimestre/année)
- [ ] Export PNG ou PDF

### 6.6 Module Reporting Automatisé

#### US-010 : Génération rapport d'avancement
**En tant que** Chef de Projet
**Je veux** générer un rapport d'avancement automatiquement
**Afin de** gagner du temps sur le reporting

**Critères d'acceptation :**
- [ ] Template rapport : Page de garde, Synthèse, KPIs, Risques, Planning
- [ ] Génération PDF avec logo et mise en page professionnelle
- [ ] Possibilité de personnaliser le contenu (sections optionnelles)
- [ ] Envoi automatique par email aux parties prenantes
- [ ] Archivage des rapports générés (historique)

---

## 7. Exigences Non-Fonctionnelles

### 7.1 Performance

| Critère | Objectif | Mesure |
|---------|----------|--------|
| Temps de chargement initial | <2 secondes | Lighthouse Performance Score ≥90 |
| Temps de réponse API | <500ms (95e percentile) | Monitoring APM |
| Nombre d'utilisateurs simultanés | ≥50 | Tests de charge (K6/JMeter) |
| Taille du bundle JS | <500 KB (gzippé) | Webpack Bundle Analyzer |

### 7.2 Disponibilité & Fiabilité

| Critère | Objectif |
|---------|----------|
| Disponibilité (Uptime) | ≥99% (SLA) |
| Taux d'erreur | <1% des requêtes |
| MTTR (Mean Time To Repair) | <4 heures |
| Backup base de données | Quotidien (rétention 7 jours) |

### 7.3 Sécurité

| Critère | Exigence |
|---------|----------|
| Authentification | JWT avec expiration (1h) + refresh token |
| Autorisation | RBAC (3 rôles : Admin, PM, User) |
| Chiffrement | HTTPS (TLS 1.3), données sensibles chiffrées au repos |
| Audit de sécurité | OWASP Top 10, scan automatisé (Snyk) |
| Gestion des secrets | Variables d'environnement (pas de secrets dans le code) |

### 7.4 Utilisabilité (UX)

| Critère | Exigence |
|---------|----------|
| Courbe d'apprentissage | <30 minutes pour un nouvel utilisateur |
| Responsive design | Desktop (≥1280px), Tablet (≥768px), Mobile (≥375px) |
| Accessibilité | WCAG 2.1 niveau AA (score Lighthouse ≥90) |
| Langues | Français (interface complète) |
| Support navigateurs | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |

### 7.5 Maintenabilité

| Critère | Exigence |
|---------|----------|
| Couverture de tests | ≥80% (unitaires + intégration + E2E) |
| Documentation code | JSDoc/TSDoc pour toutes les fonctions publiques |
| Linting | ESLint (Airbnb style guide) + Prettier |
| Complexité cyclomatique | ≤10 par fonction |
| Dette technique | Score SonarQube ≥B |

### 7.6 Scalabilité

| Critère | Objectif |
|---------|----------|
| Nombre de projets | Jusqu'à 50 projets (×10 vs MVP) |
| Nombre d'utilisateurs | Jusqu'à 500 utilisateurs (×3 vs Tech4Value) |
| Volume de données | 100 000 entrées de timesheets par an |
| Croissance | Architecture permettant la mise à l'échelle horizontale |

### 7.7 Conformité

| Norme | Niveau |
|-------|--------|
| RGPD | Conformité complète (registre, consentement, droits) |
| WCAG 2.1 | Niveau AA minimum |
| ISO 27001 (principes) | Bonnes pratiques de sécurité |
| Green IT | Optimisations (score EcoIndex ≥B) |

---

## 8. Contraintes

### 8.1 Contraintes Temporelles

- **Délai impératif** : 24 semaines (6 mois) - non négociable
- **Deadline de soumission** : [Date du kick-off + 6 mois]
- **Jalons intermédiaires** : 8 milestones à respecter (voir section 10)

### 8.2 Contraintes Budgétaires

- **Budget total** : ~525 000 € (incluant HR estimé)
- **Budget infrastructure réel** : ~2000 € (cloud, licences)
- **Utilisation de free tiers prioritaire** (Vercel, Supabase, etc.)

### 8.3 Contraintes Techniques

- **Stack imposé** : Technologies open-source (pas de vendor lock-in)
- **APIs existantes** : Odoo REST API, Microsoft Graph API (SharePoint)
- **Compatibilité** : Doit fonctionner avec Odoo v15, SharePoint Online, Power BI
- **Hébergement** : Cloud uniquement (pas d'on-premise)

### 8.4 Contraintes Organisationnelles

- **Équipe** : 2-4 membres (taille fixe)
- **Disponibilité** : Projet mené en parallèle des cours (temps partiel)
- **Encadrement** : Autonomie requise, support pédagogique limité

### 8.5 Contraintes Réglementaires

- **RGPD** : Obligation de conformité (données personnelles)
- **Accessibilité** : Conformité WCAG 2.1 AA (obligation légale en France)
- **Licences logicielles** : Respect des licences open-source (MIT, Apache, GPL)

### 8.6 Contraintes de Qualité

- **Couverture de tests** : Minimum 80%
- **Performance** : Lighthouse score ≥90
- **Sécurité** : Aucune vulnérabilité critique (OWASP)
- **Documentation** : Complète et à jour

---

## 9. Architecture Technique

### 9.1 Vue d'Ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                    USERS (185 utilisateurs)                 │
│              PMO, Chefs de Projet, Direction, etc.          │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                  FRONTEND (React/Vue.js)                    │
│  - Dashboard multi-projets                                  │
│  - Visualisations interactives (charts)                     │
│  - Gestion projets (CRUD, Timeline)                         │
│  - Responsive design (Desktop/Tablet/Mobile)                │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS (REST API)
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                BACKEND (Node.js/Python)                     │
│  - API REST (Express/FastAPI)                               │
│  - Business Logic                                           │
│  - Authentication & Authorization (JWT)                     │
│  - Intégrations (Odoo, SharePoint, Power BI)                │
└─────────────┬──────────────────────────────┬────────────────┘
              │                              │
              ▼                              ▼
┌───────────────────────┐      ┌───────────────────────────┐
│  DATABASE             │      │  EXTERNAL SYSTEMS         │
│  (PostgreSQL/MongoDB) │      │  - Odoo (REST API)        │
│  - Projets            │      │  - SharePoint (Graph API) │
│  - Utilisateurs       │      │  - Power BI (CSV Export)  │
│  - Timesheets         │      │  - Azure AD (Mock SSO)    │
│  - Documents          │      └───────────────────────────┘
└───────────────────────┘
```

### 9.2 Technologies Envisagées

#### Option 1 : Stack JavaScript (MERN)
- **Frontend** : React 18 + TypeScript + Tailwind CSS
- **Backend** : Node.js 18 + Express + TypeScript
- **Database** : PostgreSQL 15 (via Prisma ORM)
- **Hosting** : Vercel (frontend) + Railway (backend)

#### Option 2 : Stack Python
- **Frontend** : Vue.js 3 + TypeScript + Tailwind CSS
- **Backend** : Python 3.11 + FastAPI + SQLAlchemy
- **Database** : PostgreSQL 15
- **Hosting** : Netlify (frontend) + Render (backend)

**→ Décision à prendre en Phase 2 (Task 2.1a)**

### 9.3 Schéma de Base de Données (Préliminaire)

```sql
-- Tables principales
projects (id, name, description, budget_planned, budget_actual, start_date, end_date, status, pole_id)
users (id, email, name, role, pole_id, cost_per_day)
timesheets (id, user_id, project_id, date, hours, description)
milestones (id, project_id, name, due_date, status)
documents (id, project_id, name, sharepoint_url, uploaded_at)
risks (id, project_id, description, probability, impact, status)
reports (id, project_id, type, generated_at, file_url)

-- Tables de référence
poles (id, name, manager_id)
roles (id, name, permissions)
```

### 9.4 Intégrations

#### Odoo API
```
GET /api/project.project (liste des projets)
GET /api/account.analytic.line (timesheets)
GET /api/hr.employee (ressources)
```

#### SharePoint API (Microsoft Graph)
```
GET /sites/{site-id}/drives (espaces de stockage)
GET /drives/{drive-id}/items (documents)
POST /drives/{drive-id}/items (upload)
```

#### Power BI Export
```
Génération CSV structuré :
projects.csv, timesheets.csv, budgets.csv
Format : UTF-8, séparateur ;, entêtes
```

### 9.5 Sécurité

- **Authentification** : JWT (JSON Web Tokens)
- **Autorisation** : RBAC avec 3 rôles :
  - **Admin** : PMO Global (tous les droits)
  - **PM** : Chef de Projet (droits sur ses projets)
  - **User** : Collaborateur (lecture seule)
- **Chiffrement** : HTTPS (TLS 1.3), mots de passe hashés (bcrypt)
- **Validation** : Inputs sanitisés (protection XSS, injection SQL)

---

## 10. Planification

### 10.1 Phases du Projet

| Phase | Durée | Dates | Jalons |
|-------|-------|-------|--------|
| Phase 1 : Cadrage & Analyse | 3 sem | Sem 1-3 | M1 : Cadrage validé |
| Phase 2 : Conception | 4 sem | Sem 4-7 | M2 : Conception complète |
| Phase 3 : Développement MVP | 9 sem | Sem 8-16 | M3 : MVP alpha (Sem 12)<br>M4 : MVP beta (Sem 16) |
| Phase 4 : Aspects Transverses | 11 sem | Sem 8-18 | M5 : Transverses OK (Sem 18) |
| Phase 5 : Livrables Finaux | 6 sem | Sem 19-24 | M6 : Vidéo (Sem 22)<br>M7 : Dossiers (Sem 23) |
| Phase 6 : Soumission | 1 sem | Sem 24 | M8 : Soumission |

### 10.2 Jalons Critiques (Milestones)

| ID | Date | Jalon | Critères d'Acceptation |
|----|------|-------|------------------------|
| M1 | Sem 3 | Cadrage validé | Scope MVP défini, équipe alignée, RACI préliminaire |
| M2 | Sem 7 | Conception complète | Architecture validée, Gantt/RACI finalisés, maquettes approuvées |
| M3 | Sem 12 | MVP alpha | 4/6 fonctionnalités opérationnelles, tests unitaires OK |
| M4 | Sem 16 | MVP beta | Toutes fonctionnalités + tests E2E + documentation technique |
| M5 | Sem 18 | Transverses OK | RGPD, Green IT, Accessibilité validés, audits terminés |
| M6 | Sem 22 | Vidéo finalisée | Vidéo 15-20min montée, validée, uploadée (YouTube ou MP4) |
| M7 | Sem 23 | Dossiers finalisés | Dossier groupe + individuels relus, validés, nomenclature OK |
| M8 | Sem 24 | Soumission | Livrables soumis avant deadline, confirmation reçue |

### 10.3 Planification Détaillée

**→ Voir fichier `templates/gantt-template.csv` pour le diagramme de Gantt complet**

---

## 11. Budget

### 11.1 Récapitulatif Budgétaire

| Catégorie | Montant (€) | % |
|-----------|-------------|---|
| Infrastructure | 1 875 | 0,4% |
| Licences logicielles | 432 | 0,1% |
| Ressources Humaines | 466 500 | 88,9% |
| Services externes | 6 300 | 1,2% |
| Formation | 1 700 | 0,3% |
| Marketing | 100 | 0,02% |
| Contingence (10%) | 47 900 | 9,1% |
| **TOTAL** | **524 807** | **100%** |

### 11.2 Calcul ROI (Return on Investment)

| Indicateur | Montant (€) |
|-----------|-------------|
| Investissement initial | 524 807 |
| Bénéfices Année 1 | 150 000 |
| Bénéfices Année 2 | 200 000 |
| Bénéfices Année 3 | 250 000 |
| **Total bénéfices (3 ans)** | **600 000** |
| **ROI net** | **75 193** |
| **ROI %** | **14,3%** |

### 11.3 Budget Détaillé

**→ Voir fichier `templates/budget-template.csv` pour le budget complet**

---

## 12. Gestion des Risques

### 12.1 Top 5 Risques Critiques

| Risque | Prob | Impact | Score | Mitigation |
|--------|------|--------|-------|------------|
| Sous-estimation du temps de développement | 4 | 5 | 20 | Buffer 20% + réduction scope si nécessaire |
| Complexité intégration Odoo/SharePoint | 4 | 4 | 16 | Mocks + intégration progressive |
| Retard sur vidéo (répétitions) | 4 | 4 | 16 | Démarrer script en Sem 16 |
| Failles de sécurité (OWASP) | 3 | 5 | 15 | Audit automatisé + code review |
| Feature creep (expansion du scope) | 4 | 4 | 16 | Scope freeze après M1 |

### 12.2 Registre des Risques

**→ Voir fichier `templates/risk-register-template.csv` pour les 25 risques identifiés**

---

## 13. Critères d'Acceptation

### 13.1 Critères Techniques (MVP)

- [ ] **Fonctionnalités** : 6/6 features must-have implémentées et fonctionnelles
- [ ] **Tests** : Couverture ≥80% (unitaires + intégration + E2E)
- [ ] **Performance** : Lighthouse score ≥90 (Performance, A11y, Best Practices)
- [ ] **Sécurité** : Aucune vulnérabilité critique (scan OWASP)
- [ ] **Intégrations** : Odoo, SharePoint, Power BI opérationnelles (ou mockées)
- [ ] **Documentation** : API documentée (Swagger), README complet, guide d'installation

### 13.2 Critères Pédagogiques (Livrables)

#### Vidéo (64 points)
- [ ] Durée : 15-20 minutes
- [ ] Format : MP4 (HD) OU YouTube (non répertorié)
- [ ] Tous les membres parlent (avec affichage du nom)
- [ ] Structure : intro → contexte → solution → démo → conclusion
- [ ] Démo fonctionnelle et impactante
- [ ] Qualité audio/vidéo professionnelle
- [ ] Nomenclature correcte : `PE-2526_codepromo_NomPrenomEtudiant.mp4`

#### Dossier Technique Groupe (156 points)
- [ ] Format : PDF
- [ ] Sections complètes (85-110 pages) :
  - [ ] Présentation entreprise + équipe (5-10p)
  - [ ] Analyse problématique + solution (10-15p)
  - [ ] Gestion des coûts (10p) → 10 points
  - [ ] Planification détaillée (15-20p) → 40 points
  - [ ] Solution technique (25-30p) → 73 points
  - [ ] Conduite du changement (10-15p) → 10 points
- [ ] Diagramme de Gantt + Matrice RACI inclus
- [ ] Budget détaillé + ROI
- [ ] Schémas techniques de qualité
- [ ] Aspects transverses intégrés (GreenIT, RGPD, A11y) → 11 points
- [ ] Mise en page professionnelle → 15 points
- [ ] Nomenclature : `PE-2526_codepromo_nometudiant1_nometudiant2.pdf`

#### Dossiers Individuels (8 points chacun)
- [ ] Format : PDF (1 par membre)
- [ ] Perspectives d'évolution (3-5p)
- [ ] Analyse critique limites (5-7p)
- [ ] Documentation utilisateur (10-15p)
- [ ] Analyse personnelle (5-7p) :
  - [ ] Défis rencontrés (2 pts)
  - [ ] Forces/faiblesses (2 pts)
  - [ ] Compétences développées (2 pts)
  - [ ] Axes d'amélioration (2 pts)
- [ ] Nomenclature : `PE-2526_codepromo_NomPrenomEtudiant.pdf`

### 13.3 Critères de Succès Globaux

- [ ] **Note finale** : ≥18/20 (≥198/220 points)
- [ ] **Feedback utilisateurs** : ≥4/5 (tests UAT)
- [ ] **Code déployé** : Application accessible en ligne (URL publique)
- [ ] **Livrables soumis** : Dans les délais (avant deadline)

---

## 14. Annexes

### Annexe A : Glossaire

| Terme | Définition |
|-------|------------|
| **MVP** | Minimum Viable Product - Produit minimal viable |
| **PMO** | Project Management Office - Bureau de gestion de projets |
| **ETP** | Équivalent Temps Plein (Full-Time Equivalent) |
| **KPI** | Key Performance Indicator - Indicateur clé de performance |
| **RACI** | Responsible, Accountable, Consulted, Informed |
| **SSO** | Single Sign-On - Authentification unique |
| **WCAG** | Web Content Accessibility Guidelines |
| **RGPD** | Règlement Général sur la Protection des Données (GDPR) |
| **ROI** | Return on Investment - Retour sur investissement |

### Annexe B : Références

- [Cadre pédagogique du projet](.doc/cadre-pedagogique.md)
- [Grilles de notation](.doc/grilles-notation.md)
- [État des lieux SI Tech4Value](.doc/etat-des-lieux-si.md)
- [Liste complète des tâches](tasks.md)

### Annexe C : Templates et Outils

- [Template Gantt](templates/gantt-template.csv)
- [Template RACI](templates/raci-template.csv)
- [Template Budget](templates/budget-template.csv)
- [Template Registre des Risques](templates/risk-register-template.csv)

### Annexe D : Contacts

| Rôle | Contact | Email |
|------|---------|-------|
| Project Manager | [À compléter] | [email] |
| Tech Lead | [À compléter] | [email] |
| Encadrant pédagogique | [À compléter] | [email] |

---

## Signatures

| Rôle | Nom | Signature | Date |
|------|-----|-----------|------|
| **Chef de projet** | [Nom] | | [Date] |
| **Sponsor (Client)** | Tech4Value | | [Date] |
| **Encadrant pédagogique** | [Nom] | | [Date] |

---

**Document rédigé le** : [Date]
**Prochaine révision** : [Date + 1 semaine]
**Version** : 1.0
**Statut** : Draft / En cours de validation / Validé
