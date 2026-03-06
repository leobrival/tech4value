# Planning de Déploiement - Vue Entreprise

**Tech4Value - Conception et Déploiement Opérationnel**

---

## Metadata

- **Version** : 1.0
- **Date** : 6 mars 2026
- **Organisation** : Tech4Value (185 collaborateurs, 3 sites)
- **Sponsor** : Direction Générale / DSI
- **Chef de projet** : Jules Courtin (PM)
- **Responsable technique** : Léo Brival (Tech Lead)

---

## 1. Contexte Opérationnel

### 1.1 Situation Actuelle

Tech4Value gère 5 projets stratégiques mobilisant 78 ETP (42 % des effectifs) répartis sur 3 sites (siège, Rennes, Lyon). Le pilotage repose actuellement sur des outils hétérogènes :

| Outil | Usage Actuel | Limite Identifiée |
| --- | --- | --- |
| Odoo v15 | ERP Finance, RH, Projets | Désynchronisation Excel/Odoo |
| HubSpot | CRM, suivi commercial | Non utilisé par les équipes techniques |
| Microsoft 365 | Collaboration, stockage livrables | Reporting manuel, silos documentaires |
| Power BI | Tableaux de bord financiers | Pas de vue consolidée multi-projets |
| Excel | Suivi ad hoc | Versions multiples, erreurs manuelles |

**Problème** : Le reporting PMO consomme 30h/semaine en consolidation manuelle. Aucune vue unifiée ne permet au COPIL de piloter les 5 projets simultanément.

### 1.2 Objectif de la Solution

Déployer une **plateforme de pilotage stratégique** centralisant :

- La consolidation automatique des données projets (Odoo, SharePoint, Power BI)
- Des tableaux de bord temps réel pour le COPIL
- Le suivi budgétaire et capacitaire par pôle
- Les alertes automatisées sur les écarts (coûts, délais, risques)

**North Star Metric** : Réduction de 30 % du temps de reporting (de 30h à 21h/semaine).

---

## 2. Phases de Déploiement Opérationnel

### Phase A — Cadrage et Diagnostic (Mois 1-2)

**Objectif** : Valider le besoin métier, cartographier le SI existant, obtenir le GO du COPIL.

| Activité | Responsable | Parties Prenantes | Durée | Livrable |
| --- | --- | --- | --- | --- |
| Audit du SI existant | Tech Lead | DSI, Pôle IT | 2 sem. | État des lieux SI |
| Entretiens métiers (besoins fonctionnels) | PM | Chefs de pôle, PMO | 2 sem. | Cahier des charges fonctionnel |
| Analyse des flux de données | Tech Lead | Data & BI, IT | 1 sem. | Cartographie des flux |
| Étude de faisabilité technique | Tech Lead | DSI | 1 sem. | Note de faisabilité |
| Validation COPIL (GO/NO-GO) | PM | Direction, DSI, Sponsors | 0.5 sem. | PV de comité |

**Gate** : Validation du COPIL requise avant passage en phase B.

**Budget estimé Phase A** : 15 000 € (principalement charges internes : 2 ETP × 2 mois).

---

### Phase B — Conception et Architecture (Mois 2-3)

**Objectif** : Concevoir la solution technique, définir l'architecture d'intégration, planifier les ressources.

| Activité | Responsable | Parties Prenantes | Durée | Livrable |
| --- | --- | --- | --- | --- |
| Architecture applicative (front/back/intégrations) | Tech Lead | DSI, Sécurité | 3 sem. | Dossier d'architecture technique |
| Conception des connecteurs (Odoo, SharePoint, Power BI) | Tech Lead | IT, Data & BI | 2 sem. | Spécifications d'intégration |
| Plan de sécurité et conformité RGPD | PM | Sécurité & Conformité | 2 sem. | DPIA, plan de conformité |
| Budget détaillé (CAPEX + OPEX, TCO 3 ans) | PM | Finance & Achats | 2 sem. | Budget prévisionnel |
| Planning de déploiement (Gantt) | PM | PMO, Direction | 1 sem. | Planning avec jalons |
| Analyse des risques projet | PM + Tech Lead | DSI, PMO | 1 sem. | Registre des risques |

**Gate** : Revue d'architecture + validation budgétaire par la DSI.

**Budget estimé Phase B** : 25 000 € (2 ETP × 2 mois + licences POC).

---

### Phase C — Développement et Intégration (Mois 3-5)

**Objectif** : Développer le MVP, intégrer les sources de données, tester.

| Activité | Responsable | Parties Prenantes | Durée | Livrable |
| --- | --- | --- | --- | --- |
| Développement backend (API, connecteurs, BDD) | Tech Lead | IT & Infrastructure | 6 sem. | API fonctionnelle |
| Développement frontend (dashboards, interfaces) | Tech Lead | PMO, Direction | 6 sem. | Interface utilisateur |
| Intégration Odoo (budgets, feuilles de temps) | Tech Lead | IT, Finance | 2 sem. | Connecteur Odoo opérationnel |
| Intégration SharePoint (documents, livrables) | Tech Lead | IT | 1 sem. | Connecteur SharePoint opérationnel |
| Intégration Power BI (KPI, reporting) | Tech Lead | Data & BI | 2 sem. | Connecteur Power BI opérationnel |
| Tests unitaires et d'intégration | Tech Lead | QA | 2 sem. | Rapport de tests (couverture ≥ 80 %) |
| Recette fonctionnelle (UAT) | PM | Utilisateurs clés (5-8 personnes) | 2 sem. | PV de recette |

**Gate** : Recette fonctionnelle validée par les utilisateurs clés.

**Budget estimé Phase C** : 45 000 € (2 ETP × 3 mois + infrastructure cloud + licences).

---

### Phase D — Pilote et Conduite du Changement (Mois 5-6)

**Objectif** : Déployer en pilote, former les utilisateurs, mesurer les premiers résultats.

| Activité | Responsable | Parties Prenantes | Durée | Livrable |
| --- | --- | --- | --- | --- |
| Déploiement pilote (1 projet, 1 pôle) | Tech Lead | PMO, Pôle pilote | 2 sem. | Environnement pilote opérationnel |
| Formation des utilisateurs clés (champions) | PM | 8-10 champions identifiés | 1 sem. | Supports de formation |
| Rédaction documentation utilisateur | PM + Tech Lead | — | 2 sem. | Guide utilisateur complet |
| Collecte des retours terrain | PM | Utilisateurs pilotes | 2 sem. | Rapport de feedback |
| Corrections et ajustements post-pilote | Tech Lead | IT | 1 sem. | Version corrigée |
| Communication interne (plan de changement) | PM | RH & Communication | 1 sem. | Plan de communication |

**Gate** : Validation du pilote + décision de généralisation par le COPIL.

**Budget estimé Phase D** : 20 000 € (2 ETP × 1.5 mois + formation).

---

### Phase E — Généralisation et Gouvernance (Post-projet)

**Objectif** : Étendre à tous les projets et pôles, installer la gouvernance pérenne.

| Activité | Responsable | Parties Prenantes | Durée | Livrable |
| --- | --- | --- | --- | --- |
| Déploiement progressif (5 projets, tous les pôles) | Tech Lead | DSI, tous les pôles | 4 sem. | Plateforme en production |
| Formation élargie (e-learning + ateliers) | PM | RH, tous les collaborateurs | 3 sem. | Programme de formation |
| Transfert de compétences à l'équipe IT interne | Tech Lead | IT & Infrastructure | 2 sem. | Documentation technique |
| Mise en place du comité de gouvernance | PM | Direction, DSI, PMO | 1 sem. | Charte de gouvernance |
| Définition des SLA et plan de maintenance | Tech Lead | IT, DSI | 1 sem. | Contrat de service (SLA) |
| Mesure des indicateurs post-déploiement | PM | PMO, Direction | Continu | Tableau de bord ROI |

**Budget estimé Phase E** : 35 000 € (support, formation, maintenance 1ère année).

---

## 3. Budget Prévisionnel Consolidé

### Synthèse par Phase

| Phase | Durée | CAPEX | OPEX (annuel) | Total Phase |
| --- | --- | ---: | ---: | ---: |
| Phase A — Cadrage | 2 mois | 15 000 € | — | 15 000 € |
| Phase B — Conception | 2 mois | 25 000 € | — | 25 000 € |
| Phase C — Développement | 3 mois | 40 000 € | 5 000 € | 45 000 € |
| Phase D — Pilote | 1.5 mois | 15 000 € | 5 000 € | 20 000 € |
| Phase E — Généralisation | Post-projet | 20 000 € | 15 000 € | 35 000 € |
| **Total** | **~9 mois** | **115 000 €** | **25 000 €/an** | **140 000 €** |

### TCO sur 3 Ans

| Poste | Année 1 | Année 2 | Année 3 | Total 3 ans |
| --- | ---: | ---: | ---: | ---: |
| Développement initial (CAPEX) | 115 000 € | — | — | 115 000 € |
| Infrastructure cloud (OPEX) | 12 000 € | 12 000 € | 12 000 € | 36 000 € |
| Licences logicielles (OPEX) | 8 000 € | 8 000 € | 8 000 € | 24 000 € |
| Maintenance et support (OPEX) | 5 000 € | 15 000 € | 15 000 € | 35 000 € |
| Formation continue (OPEX) | 10 000 € | 5 000 € | 5 000 € | 20 000 € |
| **Total** | **150 000 €** | **40 000 €** | **40 000 €** | **230 000 €** |

### ROI Estimé

- **Gain annuel** : Réduction de 9h/semaine × 52 semaines × coût horaire PMO (80 €) = **37 440 €/an**
- **Gains indirects** : Réduction des erreurs de reporting, accélération de la prise de décision (estimé 15 000 €/an)
- **Gain total annuel** : ~52 000 €/an
- **Payback period** : ~2.5 ans (investissement initial de 140 000 € / gain annuel de 52 000 €)

---

## 4. Gouvernance Opérationnelle

### Instances de Pilotage

| Instance | Fréquence | Participants | Objectif |
| --- | --- | --- | --- |
| **COPIL** | Mensuel | Direction, DSI, Sponsors | Décisions stratégiques, GO/NO-GO |
| **Comité Projet** | Bi-hebdomadaire | PM, Tech Lead, Référents métier | Suivi opérationnel, arbitrages |
| **Comité Technique** | Hebdomadaire | Tech Lead, DSI, Architecte | Revues techniques, intégrations |
| **Stand-up Équipe** | Quotidien | Équipe projet | Synchronisation, blocages |

### Matrice RACI Simplifiée

| Activité | Direction | DSI | PM | Tech Lead | Pôles Métier |
| --- | --- | --- | --- | --- | --- |
| Validation stratégique | **A** | C | R | I | C |
| Architecture technique | I | **A** | C | R | I |
| Développement | I | C | C | **R** | I |
| Recette fonctionnelle | I | C | **A** | C | R |
| Conduite du changement | C | C | **R** | C | **A** |
| Formation | I | C | **R** | C | A |

**Légende** : R = Réalise, A = Approuve, C = Consulté, I = Informé

---

## 5. Plan de Conduite du Changement

### Stratégie d'Adoption

| Phase | Public | Action | Canal |
| --- | --- | --- | --- |
| **Sensibilisation** (M1-M2) | Direction + PMO | Présentation du projet, bénéfices attendus | COPIL, email Direction |
| **Formation Champions** (M5) | 8-10 référents métier | Ateliers pratiques, prise en main | Sessions présentielles |
| **Pilote** (M5-M6) | 1 pôle (PMO + 1 projet) | Usage réel, feedback terrain | Accompagnement individuel |
| **Généralisation** (Post-projet) | Tous les collaborateurs | Formation e-learning, ateliers | Teams, SharePoint, présentiel |
| **Ancrage** (N+6 mois) | Organisation | Suivi des usages, ajustements | KPI adoption, enquêtes |

### Indicateurs d'Adoption

| Indicateur | Cible M+3 | Cible M+6 | Cible M+12 |
| --- | --- | --- | --- |
| Taux de connexion hebdomadaire | 60 % | 80 % | 90 % |
| Réduction du temps de reporting | -15 % | -25 % | -30 % |
| Satisfaction utilisateur (NPS) | ≥ 30 | ≥ 50 | ≥ 60 |
| Taux de dashboards consultés/semaine | 3/5 projets | 5/5 projets | 5/5 projets |

---

## 6. Indicateurs de Suivi Opérationnel

### KPI Projet

| KPI | Formule | Cible | Fréquence |
| --- | --- | --- | --- |
| Avancement réel vs planifié | Tâches terminées / Tâches planifiées | ≥ 90 % | Hebdomadaire |
| Écart budgétaire | (Budget consommé / Budget prévu) × 100 | ≤ 110 % | Mensuel |
| Nombre de risques ouverts critiques | Comptage registre des risques | ≤ 2 | Hebdomadaire |
| Couverture de tests | Lignes testées / Lignes totales | ≥ 80 % | À chaque sprint |
| Satisfaction utilisateurs pilotes | Score enquête NPS | ≥ 30 | Fin de pilote |

### KPI Métier (Post-Déploiement)

| KPI | Avant | Cible | Mesure |
| --- | --- | --- | --- |
| Temps de reporting PMO | 30h/semaine | 21h/semaine (-30 %) | Feuille de temps |
| Délai de production d'un rapport COPIL | 3 jours | < 1 jour | Timestamp outil |
| Nombre d'erreurs dans les rapports | ~5/mois | < 1/mois | Incidents déclarés |
| Visibilité multi-projets | Aucune vue consolidée | Temps réel, 5/5 projets | Dashboard |

---

## 7. Risques Opérationnels

| Risque | Probabilité | Impact | Mitigation | Responsable |
| --- | --- | --- | --- | --- |
| Résistance au changement des équipes | Élevée | Fort | Champions métier, formation progressive, communication | PM |
| Indisponibilité des API Odoo/SharePoint | Moyenne | Fort | POC d'intégration en phase B, plan de fallback | Tech Lead |
| Dépassement budgétaire | Moyenne | Modéré | Suivi mensuel, alertes à 80 % du budget | PM |
| Qualité des données sources insuffisante | Élevée | Fort | Audit données en phase A, nettoyage avant intégration | Tech Lead |
| Surcharge des équipes IT internes | Moyenne | Modéré | Planification concertée avec DSI, priorités claires | DSI |
| Non-conformité RGPD | Faible | Critique | DPIA en phase B, validation DPO | PM + Sécurité |

---

## Sources

- `schema-directeur.md` — Schéma directeur IT Tech4Value
- `etat-des-lieux-si.md` — État des lieux du Système d'Information
- `business-model-canvas.md` — Business Model Canvas Tech4Value
- `architecture-technique.md` — Architecture technique de la solution
- `cadre-pedagogique.md` — Cadre pédagogique officiel M2 CPIT 2025
- `rating-grids.md` — Grilles de notation et critères d'évaluation
