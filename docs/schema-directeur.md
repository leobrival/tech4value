# Schéma Directeur - Projet d'Études M2 CPIT 2025

**Tech4Value - Système de Pilotage Stratégique**

---

## Vue d'Ensemble Exécutive

Ce schéma directeur fournit une vision intégrée du projet d'études Tech4Value, alignant les objectifs pédagogiques, l'architecture SI existante, les critères d'évaluation et les jalons clés du projet.

### Piliers Stratégiques

| Pilier | Objectif | Horizon |
|--------|----------|---------|
| **Cadrage Fonctionnel** | Évaluer le besoin complexe et élaborer un diagnostic précis | Mois 1-2 |
| **Conception Technique** | Proposer une solution argumentée avec architecture SI | Mois 2-3 |
| **Planification & Organisation** | Structurer le projet avec méthodologie agile/hybride | Mois 3-4 |
| **Pilotage & Réalisation** | Développer le MVP et assurer la qualité des livrables | Mois 4-5 |
| **Présentation & Défense** | Convaincre par vidéo et dossier technique professionnel | Mois 5-6 |

---

## 1. Contexte Organisationnel

### 1.1 Profil de l'Entreprise Tech4Value

**Caractéristiques Clés :**
- **Effectifs** : 185 collaborateurs
- **Structure** : Organisation matricielle (pôles métiers + fonctions support)
- **Antennes** : Siège + Rennes + Lyon
- **Allocation Projets** : 78 ETP (~42% des effectifs) sur 5 projets stratégiques

### 1.2 Répartition par Pôles

| Pôle | Effectif | Rôle Stratégique |
|------|----------|------------------|
| IT & Infrastructure | 32 | Supervision SI, réseau, ERP, cloud, sécurité |
| Développement & Digital Factory | 38 | Applications internes/clients (web, mobile, API) |
| Data & BI | 18 | Gouvernance donnée, Data Lake, reporting |
| Sécurité & Conformité | 15 | RGPD, cybersécurité, audits, conformité |
| RH & Communication | 20 | Gestion RH, formations, communication corporate |
| Finance & Achats | 16 | Budgets, contrôle gestion, contractualisation |
| Direction & PMO | 10 | Gouvernance, priorisation, reporting exécutif |
| RSE & Green IT | 6 | Indicateurs environnementaux, gouvernance cloud |
| Support | 10 | Support administratif, juridique, gestion |

### 1.3 Projets Stratégiques en Cours

| Projet | Pôles Impliqués | ETP | Priorité |
|--------|-----------------|-----|----------|
| Mise en conformité RGPD | Sécurité, Data, PMO | 13 | Critique |
| ERP Finance & Supply Chain | IT, Finance, PMO | 19 | Critique |
| Plateforme Data Lake & BI | Data & BI, IT, PMO | 18 | Haute |
| Programme Green IT - Cloud | IT, RSE, Sécurité | 11 | Moyenne |
| Portail RH Unifié | RH, IT, PMO | 17 | Haute |

---

## 2. Architecture SI Existante

### 2.1 Cartographie des Systèmes

#### Couche ERP & Finance
- **Outil** : Odoo v15 Cloud
- **Modules** : RH, Comptabilité/Facturation, Projet, Achats
- **Intégration** : API REST, exports CSV/Excel
- **Données clés** : Budgets, affectations ressources, feuilles de temps, coûts collaborateurs
- **Limite** : Désynchronisation Excel/Odoo possible

#### Couche CRM & Commercial
- **Outil** : HubSpot
- **Usage** : Suivi cycles commerciaux, opportunités avant-vente
- **Données** : Origine projets, estimations budgétaires, contacts clients
- **Intégration** : API native, connecteurs no-code (Zapier, Make)
- **Limite** : Non utilisé par équipes techniques

#### Couche Collaborative
- **Outil** : Microsoft 365 + SharePoint Online + Teams
- **Usages** : Espaces de projets, stockage livrables, communication d'équipe
- **Sécurité** : Groupes Azure AD, rôles restreints
- **Intégration** : Liens directs SharePoint, synchronisation livrables

#### Couche BI & Pilotage
- **Outil** : Power BI
- **Tableaux** : Temps vendu vs consommé, occupation, marges projet, charge prévisionnelle
- **Sources** : Odoo, SharePoint, Excel, Google Sheets, ERP/CRM via Power Query
- **Attendu** : Alimentation via CSV standardisé ou connecteur

#### Couche Sécurité & Authentification
- **Outil** : Azure Active Directory (Azure AD)
- **Politique** : SSO activé, MFA obligatoire
- **Gestion** : Rôles par groupes AD
- **Couverture** : SharePoint, Teams, Odoo

#### Couche Gestion Projet (Fragmentée)
- **Trello** : Kanban projet (petites équipes)
- **Jira** : Suivi Agile (équipes Dev)
- **Notion** : Documentation et bases de données
- **Excel** : Gantt, budgets, feuilles de temps
- **Défi** : Normaliser les usages ou proposer outil transverse

### 2.2 Matrice d'Intégration Recommandée

| Brique SI | Priorité | Mode d'Interaction |
|-----------|----------|-------------------|
| Odoo | ✅ Critique | API ou CSV exportés |
| SharePoint | ✅ Critique | Liens intégrés / versioning |
| Power BI | ✅ Critique | Fichier source / connecteur |
| HubSpot | ⚠️ Optionnel | API ou Make |
| Azure AD | 🛡️ À prendre en compte | Simulation rôles SSO |
| Outils fragmentés | 🔄 Décision stratégique | Reprise ou migration |

---

## 3. Objectifs Pédagogiques & Compétences

### 3.1 Six Compétences à Développer

| # | Compétence | Réussite = | Preuve |
|---|-----------|-----------|-------|
| **1** | Évaluation des besoins | Diagnostic fonctionnel précis | Cahier des charges aligné client |
| **2** | Formulation de solutions | Solution argumentée avec justifications techniques | Architecture détaillée + choix justifiés |
| **3** | Planification & organisation | Gestion autonome avec méthodologie agile/hybride | Planning, RACI, Gantt complets |
| **4** | Pilotage de réalisation | MVP fonctionnel avec documentation complète | Code, docs, tests, déploiement |
| **5** | Présentation & défense | Convaincre publics variés (experts, clients, users) | Vidéo professionnelle + dossier technique |
| **6** | Critique & amélioration | Auto-évaluation honnête avec axes concrets | Analyse critique individuelle |

### 3.2 Postures Professionnelles Attendues

- Prise d'initiative et autonomie
- Travail en équipe avec rôles clairs
- Gestion relation client
- Production de livrables à forte valeur ajoutée
- Démarche d'amélioration continue
- Qualité, performance, réutilisabilité, documentation

---

## 4. Gouvernance Projet

### 4.1 Structure de Gouvernance Recommandée

```
┌─────────────────────────────────────┐
│  Comité Exécutif                    │
│  (Direction, DSI, DRH, DAF, PMO)    │
│  Fréquence : Mensuelle              │
└──────────────┬──────────────────────┘
               │
┌──────────────┴──────────────────────┐
│  Comité de Pilotage (Copil)         │
│  (1 rep. par pôle + Chef Projet)    │
│  Fréquence : Bi-hebdomadaire        │
└──────────────┬──────────────────────┘
               │
┌──────────────┴──────────────────────┐
│  Équipe Projet (2-4 étudiants)      │
│  Rôles : Dev, Infra, PM, Data       │
│  Synchronisation : Quotidienne      │
└─────────────────────────────────────┘
```

### 4.2 Rôles Clés

| Rôle | Responsabilités | Interlocuteur |
|------|-----------------|--------------|
| **Chef de Projet** | Coordination inter-pôles, reporting copil | Comité Exécutif |
| **Product Owner** | Spécifications, priorisation, recettage | Métier Tech4Value |
| **Tech Lead** | Architecture SI, choix technologiques | IT & Infra |
| **Développeurs** | Réalisation MVP, qualité code | Équipe projet |
| **Scrum Master** | Processus, levée blocages, communic. | Équipe + Copil |

---

## 5. Livrables & Jalons

### 5.1 Chronologie du Projet

```
Mois 0     │ Mois 1-2        │ Mois 3      │ Mois 4-5        │ Mois 6
───────────┼─────────────────┼─────────────┼─────────────────┼─────────
KICK-OFF   │ CADRAGE TECH    │ RÉALISATION │ TESTS & AJUST.  │ VIDÉO
           │ PLANIFICATION   │ MVP         │ DOCS FINALES    │ DOSSIER
           │                 │             │                 │ DÉFENSE
```

### 5.2 Livrables Principaux

#### **Livrable 1 : Vidéo & Démonstration MVP (64 points)**

**Timeline** : Kick-off + 6 mois

**Contenu** :
- Présentation entreprise + équipe projet (2 min)
- Problématique et solution proposée (3 min)
- Organisation et méthodologies (3 min)
- Démonstration technique (7 min)
- Conclusion et impact (2 min)

**Critères d'évaluation** :
- Structure et fluidité (5 pts)
- Contexte et objectifs (10 pts)
- Qualité démo MVP (10 pts)
- Qualité visuelle/technique (5 pts)
- Originalité (2 pts)
- Impact potentiel (10 pts)
- Aller plus loin (2 pts)
- Pertinence infos (5 pts)
- Capacité captiver (5 pts)
- Capacité convaincre (5 pts)

**Format** : MP4 YouTube (mode Non Répertoriée) ou ZIP avec vidéo
**Participation** : Tous les membres doivent parler (nom affiché)

---

#### **Livrable 2 : Dossier Technique Final (156 points)**

**Timeline** : Kick-off + 6 mois

**Sections** :

**A. Management de Projet (25 pts)**
- Gestion des coûts cohérente (10 pts)
- Justification méthodologie (5 pts)
- Conduite du changement (10 pts)

**B. Planification Détaillée (35 pts)**
- Cohérence planning (5 pts)
- Décomposition tâches (5 pts)
- Calendrier clair (5 pts)
- Gestion dépendances (5 pts)
- Gestion risques (5 pts)
- Outils de planification (5 pts)
- Jalons et milestones (5 pts)

**C. Solution Technique (73 pts)**
- Cohérence solution (10 pts)
- Justification technique (10 pts)
- Veille technologique (2 pts)
- Innovation (2 pts)
- Politique veille CPIT (5 pts)
- Rigueur tests (5 pts)
- GreenIT (2 pts)
- Normes/conformité (5 pts)
- Accessibilité (2 pts)
- Schémas techniques (5 pts)
- Analyse critique limites (5 pts)
- Documentation utilisateur (10 pts)
- Gouvernance & vision évolution (10 pts)

**D. Analyse Dynamique Projet - Individuel (8 pts)**
- Réflexion défis rencontrés (2 pts)
- Forces et faiblesses (2 pts)
- Compétences développées (2 pts)
- Axes d'amélioration (2 pts)

**E. Respect du Cadre & Bonus (15 pts)**
- Professionnalisme livrable (10 pts)
- Aller au-delà demandes (5 pts)

**Format** : PDF groupe + PDF individuel par étudiant
**Nomenclature** : `PE-2526_CODEPROMO_nometudiant1_nometudiant2.pdf`

---

### 5.3 Jalons Clés du Projet

| Jalon | Date Cible | Livrables | Points Critiques |
|-------|-----------|-----------|------------------|
| **Kick-off** | Semaine 1 | Constitution équipe, présentation sujet | Complémentarité expertises |
| **Sprint 1 : Cadrage** | Semaine 2-4 | Cahier des charges, analyse besoins | Aligner client |
| **Sprint 2 : Architecture** | Semaine 5-8 | Design technique, planification détaillée | Valider approche |
| **Sprint 3 : MVP v1** | Semaine 9-14 | Prototype fonctionnel, tests | MVP opérationnel |
| **Sprint 4 : Finalisation** | Semaine 15-22 | Optimisation, docs, tests qualité | Qualité assurée |
| **Livrable Vidéo & Docs** | Semaine 22-24 | Enregistrement vidéo, finalisation dossier | Professionnalisme |
| **Défense & Soutenance** | Semaine 24 | Présentation orale, Q&A | Conviction |

---

## 6. Approche Méthodologique

### 6.1 Méthodologie Recommandée : Agile Hybride

**Phase 1 : Cadrage (4 semaines)**
- Méthodologie : Waterfall
- Livrables : Spécifications complètes, planning détaillé
- Fréquence réunions : Quotidienne (standup)

**Phase 2-4 : Réalisation (18 semaines)**
- Méthodologie : Scrum (sprints de 2 semaines)
- Itérations : MVP v1 → v2 → v3 → Final
- Cérémonies : Daily standup, review, retrospective
- Artefacts : Backlog produit, backlog sprint, burndown

**Phase 5 : Clôture (2 semaines)**
- Méthodologie : Documentation exhaustive
- Livrables : Vidéo, dossier technique, guides
- Test de conformité : Grilles de notation

### 6.2 Outil de Pilotage Recommandé

**À Intégrer dans le Système Tech4Value** :

```
Odoo/ERP
├── Budget projet
├── Affectations ressources
├── Feuilles de temps
└── Marge suivi

Jira (ou normalisé)
├── Backlog produit
├── Backlog sprint
├── Tâches développeurs
└── Suivi Agile

SharePoint
├── Dossiers par sprint
├── Spécifications
├── PV réunions
└── Livrables versionnés

Power BI
├── Dashboard TJ consommé
├── Productivité équipe
├── Avancement % vs planification
└── Risques actifs
```

---

## 7. Critères de Succès & KPI

### 7.1 Critères de Succès Projet

| Critère | Cible | Mesure |
|---------|-------|--------|
| **Satisfaction Client** | 8/10 | Enquête post-projet |
| **Couverture Besoins** | 100% | Validation cahier des charges |
| **Qualité MVP** | 0 bug critique | Retours clients |
| **Respect Planification** | ±10% | Comparaison planning vs réalité |
| **Respect Budget** | ±15% | Suivi Odoo |
| **Documentation** | 100% complet | Checklist livrables |
| **Score Notation** | >150/220 | Grilles évaluation |

### 7.2 KPI de Suivi Hebdomadaires

- **Velocity** (points Agile complétés/semaine)
- **Burndown** (tâches restantes vs prévision)
- **TJ consommés vs budgétés**
- **Taux avancement fonctionnalités**
- **Nombre issues/bugs ouverts**
- **Taux de couverture tests**

---

## 8. Risques Stratégiques

### 8.1 Matrice des Risques

| Risque | Probabilité | Impact | Mitigation |
|--------|------------|--------|-----------|
| **Confusion sur besoins client** | Haute | Critique | Cadrage strict semaine 1-4, validation itérative |
| **Désalignement équipe** | Moyenne | Haute | RACI clair, dailies quotidiennes |
| **Intégration Odoo complexe** | Moyenne | Haute | POC API semaine 4, ETP IT dédiée |
| **Retard MVP** | Moyenne | Moyenne | Priorisation MoSCoW, scope flexible |
| **Qualité code insuffisante** | Basse | Haute | Tests automatisés, code review obligatoire |
| **Disponibilité stakeholders** | Haute | Moyenne | Planifier réunions décisionnelles tôt |

### 8.2 Plan de Mitigation

**Cadrage Risques** : Sprint 0 (jour 1-5)
**Révision** : Chaque sprint (review client)
**Escalade** : Comité exécutif si impact > "Moyenne"

---

## 9. Architecture Solution Recommandée

### 9.1 Stack Technique Attendu

```
┌─────────────────────────────────────────────────────┐
│         Frontend (Web/Mobile)                       │
│  React.js / Vue.js / Flutter (selon expertise)     │
└─────────────┬───────────────────────────────────────┘
              │
┌─────────────┴───────────────────────────────────────┐
│         Backend & API Gateway                       │
│  Node.js / Python / Java (selon expertise)         │
│  REST API / GraphQL pour intégration Odoo/Power BI │
└─────────────┬───────────────────────────────────────┘
              │
┌─────────────┴───────────────────────────────────────┐
│         Couche Intégration SI                       │
│  Connecteurs Odoo / HubSpot / SharePoint / Power BI │
│  Webhooks / Exports CSV / Power Query              │
└─────────────┬───────────────────────────────────────┘
              │
┌─────────────┴───────────────────────────────────────┐
│         Données & Persistance                       │
│  PostgreSQL / MongoDB (selon type données)         │
│  Data Lake optionnel (selon projet Data)           │
└─────────────┬───────────────────────────────────────┘
              │
┌─────────────┴───────────────────────────────────────┐
│         Sécurité & Conformité                       │
│  SSO Azure AD / JWT / HTTPS                        │
│  RGPD / Chiffrement données sensibles              │
└─────────────────────────────────────────────────────┘
```

### 9.2 Critères d'Intégration Prioritaires

1. **Odoo ERP** → CSV exports + API pour budgets/ressources
2. **Power BI** → Dashboard alimentation depuis MVP
3. **SharePoint** → Versioning livrables projet
4. **Azure AD** → Simulation rôles SSO
5. **HubSpot** (optionnel) → Import données commerciales

---

## 10. Communication & Gouvernance

### 10.1 Plan de Communication

| Audience | Fréquence | Format | Contenu |
|----------|-----------|--------|---------|
| **Comité Exécutif** | Mensuelle | Slide deck + Q&A | KPI, risques, décisions |
| **Comité Pilotage** | Bi-hebdo | Réunion 30min | Status MVP, blocages, planning |
| **Équipe Projet** | Quotidienne | Standup 15min | Tâches jour, blocages |
| **Stakeholders Tech** | Hebdo | Review sprint | Démo features, feedback |
| **Utilisateurs Finaux** | Tri-hebdo | Test user/UAT | Qualité, feedback UX |

### 10.2 Artefacts de Communication

- **Dashboard Power BI** : TJ, avancement, risques (Comité Exec)
- **Planning Gantt** : Détail tâches par sprint (Copil)
- **Backlog prioritisé** : User stories ordonnées (Équipe)
- **Retro sprint** : Améliorations continues (Équipe)
- **Vidéo de démo** : Progression visible (Stakeholders)

---

## 11. Points Chauds & Recommandations

### 11.1 Décisions Stratégiques Clés

| Décision | Options | Recommandation |
|----------|---------|-----------------|
| **Outil gestion projet** | Jira vs Notion vs Trello | Normaliser sur Jira (dev) + Notion (docs) |
| **Langue code/docs** | FR vs EN | English (standard industrie) |
| **Intégration Odoo** | API vs CSV | API (temps réel) + CSV (backup) |
| **Déploiement** | On-prem vs Cloud | Cloud (scalabilité, sécu Azure AD) |
| **Tests** | Manuel vs Auto | Tests auto obligatoires (CI/CD) |
| **Documentation** | En cours vs Post-réalisation | Agile docs (au fur et à mesure) |

### 11.2 Quick Wins Semaine 1

- ✅ Équipe constituée avec rôles clairs
- ✅ Access SharePoint/Odoo/Jira paramétré
- ✅ Kick-off avec client Tech4Value
- ✅ Cahier des charges drafted
- ✅ Planning macro Gantt créé
- ✅ Backlog produit initial priorisé

### 11.3 Pièges à Éviter

❌ Démarrer dev sans spécifications finalisées
❌ Laisser la communication au dernier moment
❌ Ignorer la qualité code "pour aller vite"
❌ Négliger la documentation dès le départ
❌ Dépendre trop d'une seule personne
❌ Changer les outils de pilotage en cours de route
❌ Sous-estimer l'effort de "glue" (intégration)

---

## 12. Tableau de Bord Exécutif

### Métriques Clés de Suivi (Mise à jour hebdomadaire)

```
╔════════════════════════════════════════════════════════════╗
║              TABLEAU DE BORD PROJET WEEK XX                ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  📊 AVANCEMENT GLOBAL                  ██████░░░░ 60%     ║
║                                                            ║
║  💰 BUDGET CONSOMMÉ                    ███████░░░ 70%     ║
║     TJ Budget : 250j | Consommé : 175j | Reste : 75j      ║
║                                                            ║
║  🎯 VELOCITY (pts Agile/sprint)                           ║
║     Sprint 1 : 24pts | Sprint 2 : 28pts | Moyenne : 26pts ║
║                                                            ║
║  🚨 RISQUES ACTIFS                                        ║
║     [1] Intégration Odoo - ROUGE (semaine 5-7)            ║
║     [2] Dispo stakeholder - ORANGE (semaine 3)            ║
║     [3] Qualité tests - VERT                              ║
║                                                            ║
║  📝 LIVRABLES PROCHAINS (30j)                             ║
║     ✅ MVP v1 complète (vidéo démo) - J+14               ║
║     ⏳ Dossier technique draft - J+21                     ║
║     ⏳ Tests QA finaux - J+28                             ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## 13. Alignement avec Grilles d'Évaluation

### 13.1 Mapping Livrables ↔ Points

**Pour gagner les 220 points**, couvrir :

| Section Grille | Points | Comment l'Atteindre |
|----------------|--------|-------------------|
| Vidéo MVP (structure, démo, impact) | 64 | Scénario professionnel, démo fluide, tous parlent |
| Management projet (coûts, méthodologie, changement) | 25 | Budget détaillé, RACI, plan changement cohérent |
| Planification (Gantt, risques, jalons) | 35 | Décomposition fine, dépendances, milestones |
| Solution technique (justifications, tests, docs, gouvernance) | 73 | Architecture documentée, justifications, user docs complètes |
| Analyse individuelle (réflexion critique) | 8 | Honnêteté sur défis et apprentissages |
| Respect cadre & bonus (professionnalisme) | 15 | Présentation soignée, aller plus loin |

### 13.2 Checklist de Conformité

```
LIVRABLE VIDÉO (64 pts)
☐ Vidéo 15-20 min avec toutes phases
☐ Tous les membres parlent avec nom affiché
☐ Démo MVP fluide et sans accrocs
☐ Contexte client présenté clairement
☐ Solution justifiée et convaincante
☐ Fichier MP4 ou lien YouTube non répertorié
☐ Nomenclature respectée

LIVRABLE DOSSIER (156 pts)
☐ Cahier des charges complet
☐ Budget détaillé + justifications
☐ Planning Gantt avec jalons clairs
☐ Matrice RACI complète
☐ Plan de conduite du changement
☐ Architecture technique avec diagrammes
☐ Justification tous les choix techniques
☐ Documentation utilisateur exhaustive
☐ Plan de tests et résultats
☐ Analyse critique limites techniques
☐ Gouvernance et roadmap évolution
☐ Analyse individuelle (défis, apprentissages, axes amélioration)
☐ Présentation professionnelle (mise en page, figures, synthèse)
☐ Nomenclature respectée (PDF groupe + individuels)

ANALYSE INDIVIDUELLE
☐ Réflexion sur défis rencontrés
☐ Auto-évaluation honnête (forces/faiblesses)
☐ Compétences développées explicites
☐ Axes d'amélioration concrets pour futurs projets
```

---

## 14. Conclusion

Ce schéma directeur offre une vision complète et équilibrée du projet Tech4Value combinant :

✅ **Rigueur pédagogique** : 6 compétences clairement définies
✅ **Réalisme business** : Architecture SI existante intégrée
✅ **Méthodologie agile** : Itérations, feedback client, amélioration continue
✅ **Gouverance structurée** : Comités, rôles, calendrier précis
✅ **Évaluation transparente** : Grilles de notation alignées aux livrables
✅ **Gestion des risques** : Mitigation proactive, escalade claire

**Clé du succès** : Cadrage fort semaines 1-4, itérations rapides semaines 5-20, finition et communication semaines 21-24.

---

**Document Version** : 1.0
**Date** : 14 novembre 2024
**Statut** : Schéma directeur approuvé
**Prochaine révision** : Fin Sprint 1 (semaine 4)
