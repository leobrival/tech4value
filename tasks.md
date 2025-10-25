# Tasks - Projet Tech4Value M2 CPIT 2025

**Durée totale** : 24 semaines (6 mois)
**Charge totale** : 700 heures
**Répartition** : 52% IA (367h) | 48% Humain (333h)

---

## Phase 1 : Cadrage & Analyse (Semaines 1-3)

**Durée** : 3 semaines | **Charge** : 80h

### Task 1.1 - Constitution de l'équipe
- **Description** : Former l'équipe (2-4 membres), définir les rôles et responsabilités
- **Charge** : 8h
- **Qui** : 👤 HUMAIN
- **Parallélisation** : ❌ Non (prérequis)
- **Dépendances** : Aucune
- **Livrables** :
  - Liste des membres avec rôles
  - Matrice RACI préliminaire

### Task 1.2 - Analyse du besoin client
- **Description** : Approfondir la compréhension du contexte Tech4Value
  - Identifier les pain points actuels (outils fragmentés)
  - Définir les objectifs métiers prioritaires
  - Cartographier les 185 collaborateurs et leurs usages
  - Analyser les 5 projets stratégiques en cours
- **Charge** : 32h
- **Qui** : 👤 HUMAIN
- **Parallélisation** : ✅ Oui (avec Task 1.3)
- **Dépendances** : Task 1.1
- **Livrables** :
  - Document d'analyse des besoins (10-15 pages)
  - Cartographie des parties prenantes
  - Liste priorisée des pain points

### Task 1.3 - Benchmark & Veille technologique
- **Description** : Étudier les solutions existantes sur le marché
  - PMO tools (Monday.com, Asana, Jira Portfolio, Wrike, MS Project)
  - Solutions d'intégration (API, connecteurs, middleware)
  - Standards du marché (PMI, PRINCE2, SAFe, Scrum)
  - Études de cas similaires
- **Charge** : 28h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Parallélisation** : ✅ Oui (avec Task 1.2)
- **Dépendances** : Task 1.1
- **Livrables** :
  - Rapport de benchmark (15-20 pages)
  - Tableau comparatif des solutions
  - Recommandations argumentées

### Task 1.4 - Définition du périmètre MVP
- **Description** : Arbitrer le scope du projet
  - Fonctionnalités essentielles (must-have)
  - Fonctionnalités souhaitables (nice-to-have)
  - Fonctionnalités futures (backlog)
  - Critères d'acceptation du MVP
- **Charge** : 12h
- **Qui** : 👤 HUMAIN
- **Parallélisation** : ❌ Non
- **Dépendances** : Task 1.2, Task 1.3
- **Livrables** :
  - Document de scope MVP (5-8 pages)
  - User stories prioritisées
  - Product backlog initial

---

## Phase 2 : Conception de la Solution (Semaines 4-7)

**Durée** : 4 semaines | **Charge** : 120h

### Task 2.1 - Architecture technique
- **Description** : Concevoir l'architecture globale du système
- **Charge** : 40h
- **Qui** : 🤖 IA (50%) + 👤 HUMAIN (50%)
- **Parallélisation** : ✅ Oui (se divise en 3 sous-tâches)
- **Dépendances** : Task 1.4

#### Task 2.1a - Backend Architecture
- **Description** :
  - Choix du stack technique (Node.js/Python/Java)
  - Design de l'API REST
  - Modèle de données (base de données)
  - Stratégie de scalabilité
- **Charge** : 16h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Diagramme d'architecture backend
  - Schéma de base de données (ERD)
  - Documentation API (Swagger/OpenAPI)

#### Task 2.1b - Frontend Architecture
- **Description** :
  - Choix du framework (React/Vue.js/Angular)
  - Design system et composants
  - State management
  - Responsive design strategy
- **Charge** : 12h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Diagramme d'architecture frontend
  - Liste des composants UI
  - Arborescence de navigation

#### Task 2.1c - Schémas d'intégration
- **Description** :
  - Intégration Odoo (API REST)
  - Intégration HubSpot (API native)
  - Intégration SharePoint (Microsoft Graph API)
  - Export Power BI (CSV structuré)
  - Simulation Azure AD (SSO)
- **Charge** : 12h
- **Qui** : 🤖 IA (40%) + 👤 HUMAIN (60%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Diagrammes de flux d'intégration
  - Spécifications des connecteurs
  - Matrice de mapping des données

### Task 2.2 - Planification détaillée (Gantt, RACI)
- **Description** : Créer les documents de pilotage du projet
  - Diagramme de Gantt complet (toutes les phases)
  - Matrice RACI (rôles et responsabilités)
  - Identification des dépendances entre tâches
  - Définition des jalons (milestones)
  - Chemin critique du projet
- **Charge** : 24h
- **Qui** : 🤖 IA (50%) + 👤 HUMAIN (50%)
- **Parallélisation** : ✅ Oui (avec 2.1, 2.3, 2.4)
- **Dépendances** : Task 1.4
- **Livrables** :
  - Diagramme de Gantt (MS Project/GanttProject)
  - Matrice RACI
  - Planning de charge par ressource
  - Liste des jalons avec critères d'acceptation

### Task 2.3 - Budget & Gestion des coûts
- **Description** : Établir le budget prévisionnel complet
  - Coûts infrastructure (cloud, hébergement, licences)
  - Coûts RH (temps/homme, coût journalier)
  - Coûts externes (prestataires, formations, consulting)
  - Budget de contingence (10-15%)
  - Calcul ROI (Return on Investment)
  - Analyse coût-bénéfice
- **Charge** : 20h
- **Qui** : 👤 HUMAIN (80%) + 🤖 IA (20%)
- **Parallélisation** : ✅ Oui (avec 2.1, 2.2, 2.4)
- **Dépendances** : Task 1.4
- **Livrables** :
  - Budget prévisionnel détaillé (Excel)
  - Analyse ROI
  - Tableau de suivi budgétaire

### Task 2.4 - Gestion des risques
- **Description** : Identifier et évaluer les risques projet
  - Identification des risques (SWOT, brainstorming)
  - Matrice risques (probabilité × impact)
  - Stratégies de mitigation pour chaque risque
  - Plan de contingence
  - Risques techniques, organisationnels, financiers
- **Charge** : 16h
- **Qui** : 🤖 IA (50%) + 👤 HUMAIN (50%)
- **Parallélisation** : ✅ Oui (avec 2.1, 2.2, 2.3)
- **Dépendances** : Task 1.4
- **Livrables** :
  - Registre des risques
  - Matrice de criticité
  - Plans de mitigation et de contingence

### Task 2.5 - Maquettes & UX Design
- **Description** : Créer les maquettes de l'interface utilisateur
  - User flows et parcours utilisateur
  - Wireframes basse fidélité (structure)
  - Mockups haute fidélité (design)
  - Prototypes interactifs (Figma/Adobe XD)
  - Tests utilisateurs sur prototypes
- **Charge** : 20h
- **Qui** : 🤖 IA (40%) + 👤 HUMAIN (60%)
- **Parallélisation** : ⚠️ Partielle (peut démarrer dès que 2.1b est avancé)
- **Dépendances** : Task 2.1b (partielle)
- **Livrables** :
  - Wireframes complets
  - Mockups haute fidélité
  - Prototype interactif (lien Figma)
  - Design system (couleurs, typographie, composants)

---

## Phase 3 : Développement MVP (Semaines 8-16)

**Durée** : 9 semaines | **Charge** : 250h

### Task 3.1 - Setup environnement développement
- **Description** : Préparer l'infrastructure de développement
  - Création repository Git (GitHub/GitLab)
  - Configuration CI/CD pipeline
  - Setup environnements (dev, staging, production)
  - Configuration Azure AD (simulation SSO)
  - Setup base de données
  - Configuration des outils de monitoring
- **Charge** : 16h
- **Qui** : 🤖 IA (70%) + 👤 HUMAIN (30%)
- **Parallélisation** : ❌ Non (prérequis pour développement)
- **Dépendances** : Task 2.1
- **Livrables** :
  - Repository configuré avec branches (main, dev, feature/*)
  - Pipeline CI/CD fonctionnel
  - Documentation d'installation
  - Environnements accessibles

### Task 3.2 - Développement fonctionnalités core
- **Description** : Implémenter les fonctionnalités MVP
- **Charge** : 180h
- **Qui** : 🤖 IA (80%) + 👤 HUMAIN (20%)
- **Parallélisation** : ✅✅✅ FORTEMENT (6 sous-tâches indépendantes)
- **Dépendances** : Task 3.1

#### Task 3.2a - Dashboard de pilotage
- **Description** :
  - Vue d'ensemble multi-projets (portfolio)
  - KPIs et métriques clés (budget, délais, ressources)
  - Graphiques et visualisations (charts.js / recharts)
  - Alertes et notifications
  - Filtres et recherche
- **Charge** : 32h
- **Qui** : 🤖 IA (85%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Composants dashboard fonctionnels
  - Tests unitaires (>80% coverage)
  - Documentation composants

#### Task 3.2b - Intégration API Odoo
- **Description** :
  - Authentification API Odoo
  - Import données projets (budget, planning)
  - Import temps passés (timesheets)
  - Import ressources et affectations
  - Synchronisation bidirectionnelle
  - Gestion des erreurs et retry logic
- **Charge** : 30h
- **Qui** : 🤖 IA (75%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Module d'intégration Odoo
  - Tests d'intégration
  - Documentation API mapping

#### Task 3.2c - Intégration SharePoint
- **Description** :
  - Authentification Microsoft Graph API
  - Accès aux bibliothèques de documents
  - Affichage des livrables projet
  - Upload/download de fichiers
  - Gestion des versions
  - Gestion des permissions
- **Charge** : 28h
- **Qui** : 🤖 IA (75%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Module d'intégration SharePoint
  - Tests d'intégration
  - Documentation API mapping

#### Task 3.2d - Export Power BI
- **Description** :
  - Génération CSV structuré (format Power BI)
  - Mapping des données vers modèle BI
  - Export automatisé (schedule)
  - Validation des données exportées
  - Création template dashboard Power BI (bonus)
- **Charge** : 24h
- **Qui** : 🤖 IA (70%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Module d'export Power BI
  - Fichiers CSV exemples
  - Template dashboard Power BI (.pbix)
  - Documentation format de données

#### Task 3.2e - Gestion multi-projets
- **Description** :
  - CRUD projets (Create, Read, Update, Delete)
  - Vue portefeuille (liste, kanban, calendrier)
  - Filtrage et tri (statut, priorité, date)
  - Recherche full-text
  - Gestion des jalons et livrables
  - Timeline projet (Gantt visuel)
- **Charge** : 36h
- **Qui** : 🤖 IA (80%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Module de gestion projets
  - Interface utilisateur complète
  - Tests E2E
  - Documentation utilisateur

#### Task 3.2f - Système de reporting automatisé
- **Description** :
  - Génération automatique de rapports (PDF/Excel)
  - Rapports d'avancement projet
  - Rapports budgétaires
  - Rapports de charge ressources
  - Envoi automatique par email
  - Templates personnalisables
- **Charge** : 30h
- **Qui** : 🤖 IA (75%)
- **Parallélisation** : ✅ Oui
- **Livrables** :
  - Module de reporting
  - Templates de rapports
  - Scheduler automatique
  - Documentation configuration

### Task 3.3 - Tests & QA
- **Description** : Validation complète de la solution
  - Tests unitaires (Jest/Pytest) - >80% coverage
  - Tests d'intégration (API endpoints)
  - Tests E2E (Cypress/Playwright)
  - Tests de charge (performance)
  - Tests utilisateurs (UAT - User Acceptance Testing)
  - Correction des bugs identifiés
- **Charge** : 40h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Parallélisation** : ⚠️ Partielle (tests progressifs pendant développement)
- **Dépendances** : Task 3.2
- **Livrables** :
  - Suite de tests complète
  - Rapport de couverture de tests
  - Rapport de tests de charge
  - Liste de bugs résolus

### Task 3.4 - Documentation technique
- **Description** : Rédiger la documentation développeur
  - Documentation API (Swagger/OpenAPI)
  - Guide d'installation et de déploiement
  - Architecture Decision Records (ADR)
  - Schémas techniques (diagrammes de séquence, composants)
  - README complet
  - Guide de contribution (si open source)
- **Charge** : 14h
- **Qui** : 🤖 IA (80%)
- **Parallélisation** : ✅ Oui (documentation incrémentale pendant développement)
- **Dépendances** : Task 3.2 (partielle)
- **Livrables** :
  - Documentation API complète
  - Guide d'installation
  - ADR (Architecture Decision Records)
  - Schémas techniques à jour

---

## Phase 4 : Aspects Transverses (Semaines 8-18)

**Durée** : 11 semaines (en parallèle de Phase 3) | **Charge** : 90h

### Task 4.1 - Conformité & Sécurité
- **Description** : Assurer conformité RGPD, sécurité, accessibilité
- **Charge** : 32h
- **Qui** : 🤖 IA (50%) + 👤 HUMAIN (50%)
- **Parallélisation** : ✅ Oui (avec 4.2, 4.3)
- **Dépendances** : Task 3.1

#### Task 4.1a - RGPD
- **Description** :
  - Cartographie des données personnelles
  - Registre des traitements
  - Politique de confidentialité
  - Consentement utilisateur
  - Droits des personnes (accès, rectification, suppression)
  - Durée de conservation des données
- **Charge** : 12h
- **Qui** : 👤 HUMAIN (70%) + 🤖 IA (30%)
- **Livrables** :
  - Registre RGPD
  - Politique de confidentialité
  - Formulaires de consentement

#### Task 4.1b - Sécurité
- **Description** :
  - Audit de vulnérabilités (OWASP Top 10)
  - Sécurisation API (authentication, authorization)
  - Chiffrement des données sensibles
  - Protection contre injections SQL, XSS, CSRF
  - Logs de sécurité
  - Plan de réponse aux incidents
- **Charge** : 12h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Livrables** :
  - Rapport d'audit de sécurité
  - Correctifs implémentés
  - Documentation sécurité

#### Task 4.1c - Accessibilité
- **Description** :
  - Conformité WCAG 2.1 (niveau AA minimum)
  - Navigation clavier
  - Lecteurs d'écran (ARIA labels)
  - Contraste des couleurs
  - Textes alternatifs (images)
  - Tests avec outils automatisés (axe, Lighthouse)
- **Charge** : 8h
- **Qui** : 🤖 IA (70%) + 👤 HUMAIN (30%)
- **Livrables** :
  - Rapport d'accessibilité
  - Correctifs implémentés
  - Déclaration d'accessibilité

### Task 4.2 - Green IT
- **Description** : Intégrer les bonnes pratiques environnementales
  - Optimisation code (performance, mémoire)
  - Réduction des requêtes réseau
  - Compression des assets (images, CSS, JS)
  - Choix infrastructure éco-responsable (cloud green)
  - Métriques carbone (empreinte environnementale)
  - Éco-conception (principes du Green IT)
- **Charge** : 20h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Parallélisation** : ✅ Oui (avec 4.1, 4.3)
- **Dépendances** : Task 3.1
- **Livrables** :
  - Rapport Green IT
  - Métriques d'empreinte carbone
  - Documentation des optimisations
  - Label/certification (si applicable)

### Task 4.3 - Conduite du changement
- **Description** : Préparer l'adoption utilisateur
  - Analyse des impacts organisationnels
  - Identification des parties prenantes
  - Analyse de la résistance au changement
  - Plan de communication (stakeholders)
  - Stratégie de formation (utilisateurs finaux)
  - Support post-déploiement
  - Indicateurs d'adoption (KPIs)
- **Charge** : 38h
- **Qui** : 👤 HUMAIN (80%) + 🤖 IA (20%)
- **Parallélisation** : ✅ Oui (avec 4.1, 4.2)
- **Dépendances** : Task 2.5
- **Livrables** :
  - Plan de conduite du changement (10-15 pages)
  - Plan de communication
  - Programme de formation
  - Support utilisateur (FAQ, tutoriels)

---

## Phase 5 : Livrables Finaux (Semaines 19-24)

**Durée** : 6 semaines | **Charge** : 150h

### Task 5.1 - Préparation de la vidéo MVP
- **Description** : Créer la vidéo de démonstration (15-20 min)
- **Charge** : 50h
- **Qui** : Mix 🤖 IA + 👤 HUMAIN
- **Parallélisation** : ⚠️ Partielle (séquentiel pour certaines parties)
- **Dépendances** : Task 3.2, Task 3.3

#### Task 5.1a - Écriture du script
- **Description** :
  - Structure de la vidéo (intro, contexte, solution, démo, conclusion)
  - Messages clés à transmettre
  - Répartition de la prise de parole (chaque membre doit parler)
  - Timing de chaque section
  - Transitions entre les parties
- **Charge** : 12h
- **Qui** : 🤖 IA (40%) + 👤 HUMAIN (60%)
- **Livrables** :
  - Script complet (5-7 pages)
  - Storyboard visuel
  - Répartition des rôles

#### Task 5.1b - Préparation des démos
- **Description** :
  - Scénarios de démonstration
  - Préparation de données de test réalistes
  - Répétitions des démos (screencast)
  - Identification des features à montrer
  - Préparation des slides de support
- **Charge** : 10h
- **Qui** : 👤 HUMAIN (90%)
- **Livrables** :
  - Données de test prêtes
  - Slides de support
  - Scénarios de démo documentés

#### Task 5.1c - Enregistrement
- **Description** :
  - Setup technique (micro, éclairage, cadrage)
  - Enregistrement des prises de parole (chaque membre + nom affiché)
  - Enregistrement des screencasts (démo produit)
  - Captures B-roll (images d'illustration)
  - Répétitions et retakes si nécessaire
- **Charge** : 16h
- **Qui** : 👤 HUMAIN (100%)
- **Livrables** :
  - Fichiers vidéo bruts
  - Fichiers audio propres
  - Screencasts de démo

#### Task 5.1d - Montage vidéo
- **Description** :
  - Assemblage des séquences
  - Transitions fluides
  - Ajout de sous-titres
  - Ajout de musique de fond
  - Color grading et correction audio
  - Ajout d'animations et d'effets visuels
  - Export final (format MP4, qualité HD)
- **Charge** : 10h
- **Qui** : 🤖 IA (30%) + 👤 HUMAIN (70%)
- **Livrables** :
  - Vidéo finale montée (.mp4)
  - Version avec sous-titres
  - Fichiers sources (projet montage)

#### Task 5.1e - Review & corrections
- **Description** :
  - Visionnage critique (toute l'équipe)
  - Validation par rapport aux critères de notation
  - Corrections si nécessaire
  - Test sur plusieurs devices (qualité, lisibilité)
  - Validation finale avant soumission
- **Charge** : 2h
- **Qui** : 👤 HUMAIN (100%)
- **Livrables** :
  - Vidéo finale validée
  - Upload YouTube (mode non répertorié) OU fichier .mp4

### Task 5.2 - Rédaction du dossier technique GROUPE
- **Description** : Compiler le dossier collectif (structure imposée)
- **Charge** : 70h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Parallélisation** : ✅✅✅ FORTEMENT (7 sections indépendantes)
- **Dépendances** : Toutes les phases précédentes

#### Task 5.2a - Présentation entreprise et équipe
- **Description** :
  - Présentation de Tech4Value (185 collaborateurs, organisation matricielle)
  - Contexte et enjeux métiers
  - Présentation de l'équipe projet (profils, rôles, photos)
  - Matrice RACI de l'équipe
- **Charge** : 8h
- **Qui** : 🤖 IA (50%) + 👤 HUMAIN (50%)
- **Pages** : 5-10 pages
- **Parallélisation** : ✅ Oui
- **Livrables** : Section 1 du dossier (PDF)

#### Task 5.2b - Analyse problématique et solution
- **Description** :
  - État des lieux SI (outils fragmentés)
  - Problématiques identifiées (pain points)
  - Analyse des besoins (5 projets stratégiques, 185 utilisateurs)
  - Solution proposée (MVP, fonctionnalités clés)
  - Valeur ajoutée et différenciation
- **Charge** : 12h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Pages** : 10-15 pages
- **Parallélisation** : ✅ Oui
- **Livrables** : Section 2 du dossier (PDF)

#### Task 5.2c - Gestion des coûts (M2)
- **Description** :
  - Budget détaillé (infrastructure, RH, externe)
  - Ventilation des coûts par poste
  - Comparaison budget prévisionnel vs réel
  - Analyse ROI (retour sur investissement)
  - Justification des arbitrages budgétaires
  - Tableaux financiers
- **Charge** : 10h
- **Qui** : 👤 HUMAIN (70%) + 🤖 IA (30%)
- **Pages** : 10 pages
- **Parallélisation** : ✅ Oui
- **Points** : 10/220
- **Livrables** : Section 3 du dossier (PDF)

#### Task 5.2d - Organisation équipe, planification, méthodologies
- **Description** :
  - Méthodologie de gestion projet (Agile/Scrum/Hybride)
  - Justification de la méthodologie choisie
  - Diagramme de Gantt complet
  - Matrice RACI finale
  - Planning détaillé avec jalons
  - Gestion des dépendances
  - Charge par ressource
  - Gestion des risques (matrice, mitigation)
  - Suivi qualité (critères, indicateurs)
- **Charge** : 14h
- **Qui** : 🤖 IA (50%) + 👤 HUMAIN (50%)
- **Pages** : 15-20 pages
- **Parallélisation** : ✅ Oui
- **Points** : 40/220 (Section 1 Management: 15 pts + Section 2 Planification: 35 pts)
- **Livrables** : Section 4 du dossier (PDF)

#### Task 5.2e - Présentation solution technique
- **Description** :
  - Architecture technique complète (schémas)
  - Choix technologiques et justifications
  - Diagrammes (UML, séquence, déploiement)
  - Intégrations SI (Odoo, SharePoint, Power BI, Azure AD)
  - Tests réalisés et résultats (exhaustivité)
  - Politique de veille technologique
  - Innovation de la solution
  - Limites techniques identifiées
  - Gouvernance et vision d'évolution (roadmap)
  - Schémas techniques de qualité
- **Charge** : 18h
- **Qui** : 🤖 IA (70%) + 👤 HUMAIN (30%)
- **Pages** : 25-30 pages
- **Parallélisation** : ✅ Oui
- **Points** : 73/220 (Section 3 Solution Technique)
- **Livrables** : Section 5 du dossier (PDF)

#### Task 5.2f - Conduite du changement
- **Description** :
  - Analyse des impacts organisationnels
  - Identification des parties prenantes
  - Cartographie de la résistance au changement
  - Plan de communication détaillé
  - Stratégie de formation (cibles, contenus, calendrier)
  - Support post-déploiement (FAQ, hotline, documentation)
  - Indicateurs d'adoption (KPIs de changement)
  - Programme de conduite du changement complet
- **Charge** : 10h
- **Qui** : 👤 HUMAIN (70%) + 🤖 IA (30%)
- **Pages** : 10-15 pages
- **Parallélisation** : ✅ Oui
- **Points** : 10/220 (Section 1 Management)
- **Livrables** : Section 6 du dossier (PDF)

#### Task 5.2g - Intégration aspects transverses
- **Description** :
  - GreenIT : optimisations, métriques carbone, éco-conception
  - RGPD : conformité, registre, droits des personnes
  - Accessibilité : WCAG 2.1, tests, déclaration
  - Normes et obligations réglementaires
  - Sécurité : audit, correctifs, plan de réponse aux incidents
- **Charge** : 8h
- **Qui** : 🤖 IA (60%) + 👤 HUMAIN (40%)
- **Pages** : 8-12 pages (réparties dans les sections pertinentes)
- **Parallélisation** : ✅ Oui
- **Points** : 11/220 (GreenIT: 2pts, RGPD: 5pts, Accessibilité: 2pts, Innovation: 2pts)
- **Livrables** : Sections transverses intégrées au dossier

### Task 5.3 - Rédaction des dossiers INDIVIDUELS
- **Description** : Chaque membre rédige sa partie individuelle
- **Charge** : 20h (par membre)
- **Qui** : 👤 HUMAIN (90%) + 🤖 IA (10% pour structure uniquement)
- **Parallélisation** : ✅✅✅ OUI (chaque membre travaille en parallèle)
- **Dépendances** : Task 5.2
- **Points** : 8/220 (Section 4 Analyse Dynamique Projet)

#### Contenu de chaque dossier individuel
- **Perspectives d'évolution** (3-5 pages)
  - Réflexion sur l'avenir de l'infrastructure
  - Roadmap de maintenance et évolution
  - Proposition de features futures

- **Analyse critique des limites techniques** (5-7 pages)
  - Limites rencontrées durant le projet
  - Compromis techniques effectués
  - Améliorations possibles

- **Annexes : Documentation utilisateur** (10-15 pages)
  - Guide utilisateur complet
  - Tutoriels pas-à-pas
  - FAQ
  - Troubleshooting

- **Analyse personnelle** (5-7 pages)
  - Réflexion sur les défis rencontrés (2 pts)
  - Identification des forces et faiblesses personnelles (2 pts)
  - Compétences développées durant le projet (2 pts)
  - Axes d'améliorations personnels pour futurs projets (2 pts)

**Livrables** : 1 PDF par membre (nomenclature: PE-2526_codepromo_NomPrenomEtudiant.pdf)

### Task 5.4 - Finalisation & Relecture
- **Description** : Contrôle qualité final avant soumission
  - Relecture orthographe et grammaire (Antidote, Grammarly)
  - Vérification cohérence entre vidéo et dossiers
  - Validation mise en page et professionnalisme
  - Respect des nomenclatures (PE-2526_codepromo_...)
  - Vérification exhaustive des critères de notation (220 points)
  - Validation des formats (PDF, MP4/YouTube)
  - Test d'ouverture des fichiers (compatibilité)
  - Vérification des liens (YouTube, annexes)
- **Charge** : 10h
- **Qui** : 🤖 IA (40%) + 👤 HUMAIN (60%)
- **Parallélisation** : ❌ Non (final, séquentiel)
- **Dépendances** : Task 5.1, Task 5.2, Task 5.3
- **Points** : 15/220 (Section 5 Respect du Cadre & Bonus)
- **Livrables** :
  - Tous les documents finalisés
  - Checklist de validation complétée

---

## Phase 6 : Soumission (Semaine 24)

**Durée** : 1 semaine | **Charge** : 10h

### Task 6.1 - Packaging des livrables
- **Description** : Créer les archives ZIP conformes aux exigences
  - **ZIP 1 - Vidéo** :
    - Option A : Fichier vidéo .mp4
    - Option B : Fichier .txt avec lien YouTube (mode non répertorié)
    - Nomenclature ZIP : `PE_2526_codepromo_nometudiant1_nometudiant2.zip`
    - Nomenclature vidéo : `PE-2526_codepromo_NomPrenomEtudiant.mp4`
  - **ZIP 2 - Dossier technique** :
    - Dossier groupe (PDF)
    - Dossiers individuels (1 PDF par membre)
    - Nomenclature ZIP : `PE_2526_codepromo_nometudiant1_nometudiant2.zip`
    - Nomenclature groupe : `PE-2526_codepromo_nometudiant1_nometudiant2.pdf`
    - Nomenclature individuel : `PE-2526_codepromo_NomPrenomEtudiant.pdf`
- **Charge** : 2h
- **Qui** : 🤖 IA (80%) + 👤 HUMAIN (20%)
- **Parallélisation** : ❌ Non
- **Dépendances** : Task 5.4
- **Livrables** :
  - 2 fichiers ZIP conformes
  - Vérification intégrité des archives

### Task 6.2 - Soumission officielle
- **Description** : Upload des livrables sur la plateforme de l'école
  - Connexion à la plateforme de soumission
  - Upload ZIP vidéo
  - Upload ZIP dossier technique
  - Vérification de la réception (confirmation)
  - Archivage local des livrables (backup)
  - Capture d'écran de confirmation de soumission
- **Charge** : 1h
- **Qui** : 👤 HUMAIN (100%)
- **Parallélisation** : ❌ Non
- **Dépendances** : Task 6.1
- **Livrables** :
  - Confirmation de soumission
  - Backup des livrables

### Task 6.3 - Célébration & Retrospective
- **Description** : Clôture du projet et apprentissages
  - Célébration de l'équipe (fin du projet !)
  - Rétrospective projet (what went well, what to improve)
  - Archivage complet du projet (code, docs, communications)
  - Préparation pour la soutenance orale (si applicable)
- **Charge** : 7h
- **Qui** : 👤 HUMAIN (100%)
- **Parallélisation** : ❌ Non
- **Dépendances** : Task 6.2
- **Livrables** :
  - Document de rétrospective
  - Archive complète du projet

---

## 📊 Récapitulatif des Charges

| Phase | Durée | Charge | IA | Humain |
|-------|-------|--------|-----|--------|
| Phase 1 : Cadrage | 3 sem | 80h | 20h (25%) | 60h (75%) |
| Phase 2 : Conception | 4 sem | 120h | 60h (50%) | 60h (50%) |
| Phase 3 : Développement | 9 sem | 250h | 180h (72%) | 70h (28%) |
| Phase 4 : Transverses | 11 sem* | 90h | 45h (50%) | 45h (50%) |
| Phase 5 : Livrables | 6 sem | 150h | 60h (40%) | 90h (60%) |
| Phase 6 : Soumission | 1 sem | 10h | 2h (20%) | 8h (80%) |
| **TOTAL** | **24 sem** | **700h** | **367h (52%)** | **333h (48%)** |

*En parallèle de Phase 3

---

## 🚀 Tâches à Forte Parallélisation (Gains de Temps Majeurs)

### Phase 2 - Conception
- ✅ **4 tâches en parallèle** : 2.1 (Architecture) + 2.2 (Planification) + 2.3 (Budget) + 2.4 (Risques)
- ✅ **3 sous-tâches de 2.1 en parallèle** : 2.1a (Backend) + 2.1b (Frontend) + 2.1c (Intégrations)

### Phase 3 - Développement
- ✅✅✅ **6 fonctionnalités en parallèle** : 3.2a à 3.2f (répartir dans l'équipe selon compétences)

### Phase 4 - Transverses
- ✅ **3 tâches en parallèle** : 4.1 (Conformité) + 4.2 (Green IT) + 4.3 (Conduite changement)

### Phase 5 - Livrables
- ✅✅✅ **7 sections du dossier groupe en parallèle** : 5.2a à 5.2g (répartir dans l'équipe)
- ✅✅✅ **N dossiers individuels en parallèle** (N = nombre de membres)

---

## 🎯 Répartition des Points (220 points)

### Vidéo & MVP (64 points)
- Structure de la vidéo : 5 pts
- Contexte et objectifs : 10 pts
- Qualité démo MVP : 10 pts
- Qualité visuelle/technique : 5 pts
- Originalité : 2 pts
- Impact potentiel : 10 pts
- Dépassement des attentes : 2 pts
- Fluidité : 5 pts
- Pertinence : 5 pts
- Capacité à capter l'attention : 5 pts
- Capacité à convaincre : 5 pts

### Dossier Technique (156 points)
- **Section 1 - Management** (25 pts) : Coûts (10) + Méthodologie (5) + Changement (10)
- **Section 2 - Planification** (35 pts) : Cohérence (5) + Tâches (5) + Calendrier (5) + Dépendances (5) + Risques (5) + Outils (5) + Jalons (5)
- **Section 3 - Solution Technique** (73 pts) : Cohérence (10) + Justification (10) + Veille (2+5) + Innovation (2) + Tests (5) + GreenIT (2) + RGPD (5) + Accessibilité (2) + Schémas (5) + Limites (5) + Doc utilisateur (10) + Gouvernance (10)
- **Section 4 - Analyse Individuelle** (8 pts) : Défis (2) + Forces/Faiblesses (2) + Compétences (2) + Axes amélioration (2)
- **Section 5 - Respect Cadre & Bonus** (15 pts) : Professionnalisme (10) + Dépassement (5)

---

## ✅ Checklist de Validation Finale

### Vidéo
- [ ] Durée : 15-20 minutes
- [ ] Format : .MP4 (HD) OU lien YouTube (non répertorié)
- [ ] Tous les membres parlent avec affichage du nom
- [ ] Structure claire : intro → contexte → solution → démo → conclusion
- [ ] Démonstration fonctionnelle du MVP
- [ ] Qualité audio/vidéo professionnelle
- [ ] Nomenclature correcte : `PE-2526_codepromo_NomPrenomEtudiant.mp4`

### Dossier Groupe
- [ ] Format : PDF
- [ ] Sections complètes : Présentation (5-10p) + Problématique (10-15p) + Coûts (10p) + Planification (15-20p) + Solution (25-30p) + Changement (10-15p)
- [ ] Diagramme de Gantt inclus
- [ ] Matrice RACI incluse
- [ ] Budget détaillé inclus
- [ ] Schémas techniques de qualité
- [ ] Aspects transverses intégrés (GreenIT, RGPD, Accessibilité)
- [ ] Mise en page professionnelle
- [ ] Nomenclature correcte : `PE-2526_codepromo_nometudiant1_nometudiant2.pdf`

### Dossiers Individuels
- [ ] Format : PDF (1 par membre)
- [ ] Perspectives d'évolution (3-5p)
- [ ] Analyse critique limites (5-7p)
- [ ] Documentation utilisateur (10-15p)
- [ ] Analyse personnelle (5-7p) : défis, forces/faiblesses, compétences, axes amélioration
- [ ] Nomenclature correcte : `PE-2526_codepromo_NomPrenomEtudiant.pdf`

### Packaging
- [ ] ZIP 1 : Vidéo (.mp4 OU .txt avec lien YouTube)
- [ ] ZIP 2 : Dossier groupe + dossiers individuels (PDFs)
- [ ] Nomenclature ZIP correcte : `PE_2526_codepromo_nometudiant1_nometudiant2.zip`
- [ ] Test d'intégrité des archives
- [ ] Backup local effectué

---

## 🔥 Recommandations Stratégiques

### Pour Maximiser les Points
1. **Vidéo** : Répétez, soignez le son, montrez un MVP fonctionnel et impactant
2. **Planification** : Gantt détaillé avec dépendances + RACI complet = 35 pts faciles
3. **Solution Technique** : Justifiez TOUS vos choix, incluez schémas de qualité = 73 pts
4. **Bonus** : Dépassez les attentes (features supplémentaires, template Power BI) = +7 pts

### Pour Optimiser le Temps
1. **Parallélisez massivement** en Phase 2, 3 et 5
2. **Répartissez les tâches** selon les compétences de chacun
3. **Commencez la vidéo tôt** (script dès semaine 16)
4. **Documentation incrémentale** pendant le développement

### Pour Minimiser les Risques
1. **Définissez un MVP minimaliste** (scope réduit mais fonctionnel)
2. **Utilisez des mocks** si intégrations complexes (Odoo, SharePoint)
3. **Prévoyez buffer de temps** (2 semaines avant deadline)
4. **Réunions hebdomadaires** pour synchronisation équipe

---

## 📅 Jalons Critiques (Milestones)

| Date | Jalon | Validation |
|------|-------|------------|
| Sem 3 | M1 : Cadrage validé | Scope MVP défini, équipe alignée |
| Sem 7 | M2 : Conception complète | Architecture validée, Gantt/RACI finalisés |
| Sem 12 | M3 : MVP fonctionnel (alpha) | 4/6 fonctionnalités opérationnelles |
| Sem 16 | M4 : MVP complet (beta) | Toutes fonctionnalités + tests OK |
| Sem 18 | M5 : Aspects transverses OK | RGPD, Green IT, Accessibilité validés |
| Sem 22 | M6 : Vidéo finalisée | Vidéo montée, validée, uploadée |
| Sem 23 | M7 : Dossiers finalisés | Groupe + individuels relus et validés |
| Sem 24 | M8 : Soumission | Livrables soumis avant deadline |

---

## 🛠️ Outils Recommandés par Phase

### Phase 1-2 (Cadrage & Conception)
- **Collaboration** : Notion, Miro, FigJam
- **Planification** : Microsoft Project, GanttProject, Monday.com
- **Design** : Figma, Adobe XD, Sketch

### Phase 3 (Développement)
- **Backend** : Node.js (Express), Python (FastAPI/Django), Java (Spring Boot)
- **Frontend** : React + TypeScript, Vue.js 3, Next.js
- **Base de données** : PostgreSQL, MongoDB, Supabase
- **CI/CD** : GitHub Actions, GitLab CI, Vercel
- **Testing** : Jest, Pytest, Cypress, Playwright

### Phase 4 (Transverses)
- **RGPD** : CNIL templates, OneTrust
- **Sécurité** : OWASP ZAP, Snyk, SonarQube
- **Accessibilité** : axe DevTools, Lighthouse, WAVE
- **Green IT** : Beacon, EcoIndex, GreenIT-Analysis

### Phase 5 (Livrables)
- **Vidéo** : OBS Studio (capture), DaVinci Resolve (montage), Adobe Premiere
- **Rédaction** : Google Docs, Notion, LaTeX/Overleaf
- **Diagrammes** : Draw.io, Lucidchart, Excalidraw, PlantUML

---

## 📞 Support & Questions

Pour toute question sur les tâches :
- Référez-vous aux documents source dans `.doc/`
- Consultez les grilles de notation pour prioriser les efforts
- Alignez-vous régulièrement en équipe (daily/weekly sync)

**Bonne chance pour votre projet Tech4Value ! 🚀**
