---
title: "Tech4Value : Plateforme de Pilotage Stratégique"
notionPageUrl: https://app.notion.com/p/Tech4Value-3740dfb8e1d98089ba73ca44ab95189e?source=copy_link
notionTokenEnv: NOTION_TOKEN
---

## Thèse

Tech4Value doit reprendre le contrôle de ses 5 projets stratégiques avec une plateforme de pilotage unifiée.

- **185 collaborateurs**, **9 pôles**, **3 sites**.
- **78 ETP** mobilisés sur 5 projets critiques, soit **42% des effectifs**.
- **7 outils** coexistent sans source unique de vérité.
- La cible : **visibilité temps réel, reporting automatisé, arbitrages data-driven**.

:::callout 💡
Le projet ajoute une couche de consolidation et de gouvernance au-dessus du SI existant.
:::

Sources utilisées : `dossier-technique-draft.md`, `architecture-technique.md`, `business-model-canvas.md`, `matrice-7s-mckinsey.md`, `now-next-later-roadmap.md`.

---

## Contexte entreprise

Tech4Value est une ETI numérique assez mature pour intégrer des solutions avancées, mais freinée par la fragmentation opérationnelle.

| Indicateur           |            Donnée clé |
| -------------------- | --------------------: |
| Collaborateurs       |                   185 |
| Sites                | Siège + Rennes + Lyon |
| Pôles                |                     9 |
| Maturité digitale    |            Niveau 3/5 |
| Objectif de maturité |            Niveau 4/5 |

La trajectoire de transformation comprend déjà Odoo, Microsoft 365, SharePoint, Power BI et Azure AD. Le besoin principal est de consolider ces briques pour produire une vision de portefeuille utilisable par le PMO, la Direction et les chefs de projet.

---

## Portefeuille stratégique

Les 5 projets stratégiques créent une tension forte sur les ressources et les arbitrages.

| Projet | ETP | Priorité |
| --- | --- | --- |
| Mise en conformité RGPD | 13 | Critique |
| ERP Finance & Supply Chain | 19 | Critique |
| Data Lake & BI Groupe | 18 | Haute |
| Green IT Cloud Durable | 11 | Moyenne |
| Portail RH Unifié | 17 | Haute |

Ces projets mobilisent principalement les pôles IT, Data, Sécurité, Finance, RH, RSE et PMO. Les interdépendances inter-pôles rendent le pilotage manuel insuffisant.

---

## Problème central

Le pilotage actuel produit des décisions lentes, des efforts de reporting inutiles et une allocation de ressources sous-optimale.

- **30h/semaine** de reporting manuel PMO.
- Données de décision âgées de **3 à 7 jours**.
- Livraison à temps : **65%** seulement.
- IT en surcharge : **120%** de capacité.
- Data sous-utilisée : **70%** de capacité.

```txt
7 outils dispersés
  → données incohérentes
  → reporting manuel
  → décisions retardées
  → arbitrages sous-optimaux
```

Outils concernés : Trello, Jira, Notion, Excel, Odoo, SharePoint, Power BI. L’absence de source unique de vérité génère de la double saisie, des conflits de données et une perte de temps estimée à plusieurs heures par chef de projet chaque semaine.

---

## Besoin et North Star Metric

Tech4Value doit centraliser le pilotage stratégique dans une plateforme intégrée.

:::metric
label: North Star Metric
value: -30%
caption: temps de reporting PMO, de 30h à 21h/semaine
:::

- Centraliser projets, ressources, budgets, jalons, risques.
- Réduire les angles morts décisionnels.
- Automatiser les rapports Copil et Exécutif.
- Rendre les arbitrages visibles, traçables et rapides.

La question directrice de conception est : « Que doit savoir le Copil maintenant pour prendre la bonne décision ? »

---

## Objectifs stratégiques

Les objectifs sont mesurables, liés au diagnostic et suivis par horizon.

| Objectif                |       Baseline |              Cible |
| ----------------------- | -------------: | -----------------: |
| Temps reporting PMO     |        30h/sem |      21h/sem à S12 |
| Livraison à temps       |            65% |          90% à S24 |
| Productivité allocation |            72% |          82% à S12 |
| Outils consolidés       |              7 | 1 plateforme à S18 |
| Payback                 | Non applicable |           < 3 mois |

Les objectifs sont alignés avec la méthode SMART et avec les OKR de la roadmap Now-Next-Later : Product-Market Fit du MVP, fondations techniques solides, gouvernance Agile et reporting automatisé.

---

## Proposition de valeur

Tech4Value remplace le pilotage fragmenté par une source unique de vérité adaptée à chaque segment utilisateur.

| Segment               | Bénéfice principal                                 |
| --------------------- | -------------------------------------------------- |
| Direction             | Vision portefeuille 360° et décisions plus rapides |
| Managers              | Allocation ressources et collaboration inter-pôles |
| PMO / Chefs de projet | Reporting automatisé et planning intelligent       |
| Équipes projet        | Backlog clair, documentation centralisée           |
| Utilisateurs finaux   | Feedback intégré, roadmap transparente             |

La proposition de valeur combine valeur rationnelle (gain de temps, consolidation, décision) et valeur d’adoption (reconnaissance, clarté, communauté, accompagnement).

---

## Solution cible

La solution connecte une plateforme web de pilotage stratégique aux briques SI existantes.

- Dashboard exécutif temps réel.
- Planning Gantt et jalons.
- RACI et responsabilités.
- Suivi budgétaire et ressources.
- Reporting PDF/Excel automatisé.
- Intégrations Odoo, SharePoint, Power BI, Azure AD.
- Données de démo alignées : 5 projets, 78 ETP, 350 k€ de budgets Odoo.

```txt
Odoo / SharePoint / Power BI / Azure AD
        ↓
Plateforme Tech4Value MVP
        ↓
Dashboard · Gantt · RACI · Budget · Reporting · Allocation
```

La solution conserve les briques existantes au lieu de les remplacer brutalement. Elle agit comme une couche d’orchestration, de consolidation et de restitution.

---

## Architecture fonctionnelle

L’architecture répond directement aux 5 constats du diagnostic.

```txt
Utilisateurs
  ↓ HTTPS
Frontend Next.js + React + TypeScript
  ↓ API REST
Backend Node.js + Express
  ↓ Prisma
PostgreSQL / Néon
  ↔ Odoo · SharePoint · Power BI · Azure AD
```

- Architecture **three-tier**.
- Découplage présentation / logique métier / données.
- API Gateway, RBAC, services d’intégration.
- Modèle de données centré sur projets, ressources, temps, risques.

Patterns retenus : MVC, Repository Pattern, Service Layer, Adapter Pattern. Objectifs : modularité, interopérabilité, scalabilité, maintenabilité et performance.

---

## Stack technique retenue

Le choix TypeScript full-stack optimise cohérence, rapidité et maintenabilité pour une micro-équipe.

| Couche      | Choix                                                 |
| ----------- | ----------------------------------------------------- |
| Frontend    | Next.js 14 + React 18 + TypeScript + Tailwind + Zustand |
| Backend     | Node.js 18 LTS + Express + TypeScript                 |
| ORM / DB    | Prisma + PostgreSQL 15                                |
| Déploiement | Vercel + Railway + Néon                               |
| CI/CD       | GitHub Actions                                        |
| Reporting   | API REST dédiée + export CSV/XLSX fallback            |

Alternatives évaluées : Python/Django, Java/Spring, microservices avancés. Rejetées pour complexité ou surdimensionnement au regard d’une équipe de deux personnes et d’un MVP en 24 semaines.

---

## Intégrations SI critiques

Les intégrations sont priorisées selon leur impact sur le reporting et la gouvernance.

| Brique     | Priorité | Rôle                             |
| ---------- | -------- | -------------------------------- |
| Odoo v15   | P0       | budgets, temps, ressources       |
| Power BI   | P0       | dashboards et reporting exécutif |
| SharePoint | P0       | documents, dossiers, versioning  |
| Azure AD   | P0       | SSO, MFA, RBAC                   |
| HubSpot    | P2       | contexte commercial optionnel    |

Stratégie d’intégration : API REST dédiée quand fiable, export CSV/XLSX comme fallback. La synchronisation Odoo quotidienne est une cible S8, puis temps réel dans la roadmap long terme.

Données Odoo visibles en démo : projets stratégiques, tâches d’activité, feuilles de temps, documents COPIL et demandes d’approbation.

---

## Sécurité, conformité et qualité

La solution intègre les exigences professionnelles attendues : RGPD, OWASP, accessibilité, tests et monitoring.

- Authentification JWT puis Azure AD SSO + MFA.
- RBAC par rôle : Admin, PM, User.
- Protection OWASP Top 10 : validation Zod, Prisma, Helmet, CORS, rate limiting.
- RGPD : minimisation, traçabilité, droits utilisateurs.
- WCAG 2.1 AA : contrastes, navigation clavier, composants accessibles.
- Tests : unitaires, intégration, E2E, charge.

Cibles qualité : coverage ≥70% à S12 puis ≥80% à S18, API p95 <200ms, uptime ≥99,5%, Lighthouse ≥90.

---

## Management de projet

La méthode Agile Hybride combine cadrage structuré et exécution itérative.

```txt
S1-S4    Cadrage Waterfall
S5-S16   Développement Agile / sprints 2 semaines
S17-S20  Consolidation, tests, optimisation
S21-S24  Déploiement progressif, adoption, stabilisation
```

- Cérémonies allégées adaptées à 2 personnes.
- Daily asynchrone, sprint planning, review, rétro.
- Décisions tracées dans un journal versionné.
- RACI clair : Jules PM / Léo Tech Lead.

Le Scrum pur est trop lourd pour une équipe de deux personnes ; le Waterfall pur est trop rigide pour des intégrations SI. L’hybride répond aux contraintes internes et techniques.

---

## Roadmap Now-Next-Later

La roadmap garde le cap sur 24 semaines tout en permettant l’apprentissage continu.

| Horizon | Semaines | Focus                                     |
| ------- | -------: | ----------------------------------------- |
| NOW     |    S1-S4 | besoin, benchmark, périmètre MVP          |
| NEXT    |   S5-S12 | architecture, intégrations, MVP alpha     |
| LATER   |  S13-S24 | bêta, tests utilisateurs, adoption, V2 |

- WIP limité à 3 items NOW.
- Promotion NEXT → NOW par checklist.
- Priorisation RICE.

Top priorités RICE : définition périmètre MVP, planning/RACI, gestion des risques, analyse besoin, authentification Azure AD, maquettes UX/UI, benchmark techno.

---

## Jalons majeurs

Le projet est piloté par 8 jalons vérifiables.

| Jalon | Semaine | Validation |
| --- | ---: | --- |
| M1 Cadrage validé | S3 | cahier des charges approuvé |
| M2 Infrastructure opérationnelle | S4 | environnements dev/staging/prod |
| M3 Auth & Sécurité | S6 | SSO Azure AD + MFA |
| M4 Intégration Odoo | S8 | sync budgets/ressources |
| M5 MVP Alpha | S12 | 6 features core, 3 projets pilotes |
| M6 Bêta stable | S18 | tests OK, performance validée |
| M7 Déploiement progressif | S22 | pilotes accompagnés, support actif |
| M8 Bilan adoption | S24 | KPI d’usage, risques résiduels, backlog V2 |

Les dépendances critiques concernent surtout l’architecture backend/frontend, le POC Odoo, le pipeline Power BI, la formation utilisateurs et la disponibilité d’une bêta stable pour les pilotes.

---

## Budget et ROI

Le modèle économique se justifie par les gains de productivité et la valeur de pilotage.

:::metric
label: Valeur économique annuelle estimée
value: 1,06 M€
caption: gains temps + productivité + réduction fragmentation
:::

| Poste           |         Montant |
| --------------- | --------------: |
| Setup initial   |          235 k€ |
| MVP 24 semaines |          198 k€ |
| Opex année 1    | ~1,22 à 1,25 M€ |
| Payback         |        < 3 mois |
| ROI 3 ans       |           ~280% |

Les coûts annuels sont dominés par la masse salariale (~73%). Le projet interne MVP utilise des free tiers et une assistance IA documentée, mais les projections présentent aussi un déploiement réaliste en production.

---

## Business model potentiel

Au-delà du cas interne, la plateforme peut devenir une offre SaaS pour PME/ETI similaires.

:::offer
title: Plateforme Tech4Value SaaS + Services
price: 500-5 000 €/mois selon taille et modules
outcome: pilotage portefeuille, reporting automatisé, intégrations SI
:::

- SaaS par utilisateur ou par projet.
- Services : implémentation, formation, coaching Agile, BI.
- Add-ons : analytics avancés, intégrations, white-label, support premium.
- Potentiel Y3 : **800 k€ à 1,5 M€**.

Le break-even externe est estimé fin année 2 / début année 3. Le positionnement repose sur l’intégration avec Odoo/Microsoft et la spécialisation pilotage de portefeuille ETI.

---

## Diagnostic 7S McKinsey

Le principal écart organisationnel est côté systèmes et culture de collaboration.

| Dimension     | Actuel | Cible M24 | Priorité |
| ------------- | -----: | --------: | -------- |
| Strategy      |    3/5 |     4,5/5 | P0       |
| Structure     |  2,5/5 |       4/5 | P0       |
| Systems       |    2/5 |     4,5/5 | P0       |
| Shared Values |    2/5 |       4/5 | P1       |
| Style         |  2,5/5 |       4/5 | P1       |
| Staff         |    3/5 |       4/5 | P1       |
| Skills        |  2,5/5 |       4/5 | P1       |

Les dimensions dures (Strategy, Structure, Systems) créent les conditions de transformation ; les dimensions douces (Shared Values, Style, Staff, Skills) sécurisent l’adoption et la durabilité.

---

## Conduite du changement

L’adoption est traitée comme un dossier à part entière, pas comme une conséquence du déploiement.

- Modèle **ADKAR** : Awareness, Desire, Knowledge, Ability, Reinforcement.
- Programme **early adopters** : 2-3 champions par pôle.
- Newsletter hebdomadaire et ateliers mensuels.
- Formation par rôle : Direction, PMO, chefs de projet, équipes.
- KPI : adoption MVP, NPS interne, CSAT formation, usage actif.

Cibles : NPS interne 30 → 65 à M24, adoption MVP 80% à M6 puis 95% à M18, satisfaction formation ≥8/10.

---

## Risques et mitigations

Les risques critiques sont identifiés tôt et reliés à des plans de mitigation.

| Risque                    | Niveau   | Mitigation                          |
| ------------------------- | -------- | ----------------------------------- |
| Besoin client confus      | Critique | cadrage S1-S4, validation itérative |
| Intégration Odoo complexe | Élevé    | POC API, fallback CSV               |
| Scope creep               | Élevé    | MoSCoW, contrôle des changements    |
| Adoption faible           | Élevé    | early adopters, formation, support  |
| Dépendance à 2 personnes  | Moyen    | documentation, RACI, ADR            |
| Qualité insuffisante      | Élevé    | CI/CD, tests, code review           |

Les risques sont revus à chaque sprint. L’escalade se fait au Copil si l’impact dépasse le niveau moyen.

---

## Différenciation et innovation

La différenciation vient de l’intégration SI, de la gouvernance projet et de l’usage contrôlé de l’IA.

- Spécialisation ETI avec SI Odoo/Microsoft.
- Plateforme portefeuille + gouvernance, pas simple task manager.
- Automatisation reporting et alertes proactives.
- Assistance IA documentée pour accélérer la production.
- Roadmap future : analytics prédictifs, recommandations, simulations.

:::callout ⚠️
L’innovation ne doit pas masquer le cœur de valeur : fiabiliser les données et accélérer les décisions.
:::

La gamification sert de levier d’engagement éthique avec reconnaissance, progression et impact visible. Elle évite le système de points superficiel.

---

## Documentation projet et conformité

Le projet est aligné avec les attendus internes.

| Dossier              | Points | Preuve attendue                       |
| -------------------- | -----: | ------------------------------------- |
| Vidéo MVP            |     64 | démo, impact, conviction              |
| Management projet    |     25 | coûts, méthode, change                |
| Planification        |     35 | Gantt, RACI, risques, jalons          |
| Solution technique   |     73 | architecture, tests, docs, conformité |
| Analyse individuelle |      8 | défis, compétences, axes progrès      |
| Cadre & bonus        |     15 | professionnalisme, aller plus loin    |

Le dossier technique est complété par deux retours d’expérience séparés, un pour Jules et un pour Léo, afin de distinguer les enseignements opérationnels de chaque rôle.

---

## Impact attendu

Le MVP apporte un impact direct sur le temps, la qualité de décision et la coordination.

| Impact               |                  Cible |
| -------------------- | ---------------------: |
| Temps reporting      | -30% à S12, -50% à M24 |
| Décision stratégique |             2h → 30min |
| Livraison à temps    |              65% → 90% |
| Occupation globale   |              72% → 82% |
| Outils consolidés    |                  7 → 1 |
| Adoption             |              95% à M18 |

La valeur combine gain économique, meilleure traçabilité, réduction des silos, amélioration de la qualité documentaire et meilleure préparation à l’audit comme à la présentation de direction.

---

## Ask / décision attendue

La prochaine décision est de valider le cadrage MVP et de concentrer l’exécution sur les intégrations P0.

- Valider les **6 fonctionnalités core** du MVP.
- Prioriser Odoo, Power BI, SharePoint, Azure AD.
- Confirmer la méthode Agile Hybride et les seuils de décision.
- Sécuriser la conduite du changement dès S1.
- Lancer les pilotes avec mesure d’usage à J+30 et J+90.

:::callout ✅
Décision recommandée : lancer le MVP cadré, avec reporting PMO automatisé comme premier cas d’usage démontrable.
:::

Pour une présentation de direction, cette slide sert de conclusion : elle transforme l’analyse en décision claire et rappelle pourquoi le MVP est réaliste, mesurable et aligné avec les attendus internes.

---

## Annexe A : répartition des pôles

La compréhension des pôles permet d’expliquer la complexité d’allocation.

| Pôle                  | Effectif | Missions principales               |
| --------------------- | -------: | ---------------------------------- |
| Direction & PMO       |       10 | gouvernance, reporting exécutif    |
| IT & Infrastructure   |       32 | réseau, ERP, cloud, sécurité       |
| Développement         |       38 | web, mobile, API                   |
| Data & BI             |       18 | data lake, reporting groupe        |
| Sécurité & Conformité |       15 | RGPD, audits, cybersécurité        |
| RH & Communication    |       20 | formation, carrière, communication |
| Finance & Achats      |       16 | budget, contrôle de gestion        |
| RSE & Green IT        |        6 | cloud durable, indicateurs RSE     |
| Support               |       10 | juridique, administratif, sites    |

---

## Annexe B : fonctionnalités MVP core

Le MVP doit rester centré sur les fonctionnalités qui réduisent le reporting et améliorent les arbitrages.

1. Dashboard exécutif.
2. Planning Gantt.
3. Matrice RACI.
4. Suivi budget vs réel.
5. Reporting PDF/Excel automatisé.
6. Allocation ressources par pôle.

Les fonctionnalités secondaires incluent le suivi Agile avancé, la gamification, l’application mobile et les analytics prédictifs. Elles sont reportées après validation du MVP alpha.

---

## Annexe C : Roadmap 24 mois

La vision long terme dépasse le MVP interne sans le surcharger.

| Phase          | Horizon | Contenu                                            |
| -------------- | ------- | -------------------------------------------------- |
| MVP            | M0-M6   | dashboard, Odoo, Gantt, Azure AD, support          |
| Normalisation  | M6-M12  | Agile complet, Power BI, risques, mobile read-only |
| Valeur ajoutée | M12-M18 | ML, portfolio optimization, forecasting            |
| Monétisation   | M18-M24 | SaaS multi-tenant, marketplace, white-label        |

---

## Annexe D : sources consolidées

Cette présentation consolide les documents d’annexe sans supprimer les détails utiles.

- `dossier-technique-draft.md` : dossier technique principal.
- `architecture-technique.md` : stack, architecture, sécurité, CI/CD.
- `business-model-canvas.md` : segments, proposition de valeur, coûts, revenus, SWOT.
- `matrice-7s-mckinsey.md` : diagnostic organisationnel et plan d’action.
- `now-next-later-roadmap.md` : roadmap, OKR, RICE, jalons.
