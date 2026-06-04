---
title: Tech4Value — Plateforme de Pilotage Stratégique
notionPageUrl: https://app.notion.com/p/Tech4Value-3740dfb8e1d98089ba73ca44ab95189e?source=copy_link
notionTokenEnv: NOTION_TOKEN
---

**Tech4Value — Plateforme de Pilotage Stratégique**

Présentation Notion-ready issue du dossier technique et des annexes.

**M2 CPIT 2025 · Jules Courtin & Léo Brival · Mars 2026**

---

## Thèse

### Message clé

Tech4Value doit passer d’un pilotage fragmenté à une plateforme unifiée pour reprendre le contrôle de ses 5 projets stratégiques.

### À retenir

- **185 collaborateurs**, **9 pôles**, **3 sites**.
- **78 ETP** mobilisés sur 5 projets critiques, soit **42% des effectifs**.
- **7 outils** coexistent sans source unique de vérité.
- La cible : **visibilité temps réel, reporting automatisé, arbitrages data-driven**.

:::callout 💡
Le projet n’est pas seulement applicatif : c’est une couche de consolidation et de gouvernance au-dessus du SI existant.
:::

### Notes / détails

Sources utilisées : `dossier-technique-draft.md`, `schema-directeur.md`, `synthese-figjam.md`, `business-model-canvas.md`, `matrice-7s-mckinsey.md`, `now-next-later-roadmap.md`, `architecture-technique.md`, `tableau-objectifs-kpi-actions.md`.

---

## Contexte entreprise

### Message clé

Tech4Value est une ETI numérique assez mature pour intégrer des solutions avancées, mais freinée par la fragmentation opérationnelle.

### À retenir

| Indicateur | Donnée clé |
|---|---:|
| Collaborateurs | 185 |
| Sites | Siège + Rennes + Lyon |
| Pôles | 9 |
| Maturité digitale | Niveau 3/5 |
| Objectif de maturité | Niveau 4/5 |

### Notes / détails

La trajectoire de transformation comprend déjà Odoo, Microsoft 365, SharePoint, Power BI et Azure AD. Le besoin principal est de consolider ces briques pour produire une vision de portefeuille utilisable par le PMO, la Direction et les chefs de projet.

---

## Portefeuille stratégique

### Message clé

Les 5 projets stratégiques créent une tension forte sur les ressources et les arbitrages.

### À retenir

| Projet | ETP | Priorité |
|---|---:|---|
| Mise en conformité RGPD | 13 | Critique |
| ERP Finance & Supply Chain | 19 | Critique |
| Data Lake & BI Groupe | 18 | Haute |
| Green IT — Cloud Durable | 11 | Moyenne |
| Portail RH Unifié | 17 | Haute |

### Notes / détails

Ces projets mobilisent principalement les pôles IT, Data, Sécurité, Finance, RH, RSE et PMO. Les interdépendances inter-pôles rendent le pilotage manuel insuffisant.

---

## Problème central

### Message clé

Le pilotage actuel produit des décisions lentes, des efforts de reporting inutiles et une allocation de ressources sous-optimale.

### À retenir

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

### Notes / détails

Outils concernés : Trello, Jira, Notion, Excel, Odoo, SharePoint, Power BI. L’absence de source unique de vérité génère de la double saisie, des conflits de données et une perte de temps estimée à plusieurs heures par chef de projet chaque semaine.

---

## Besoin et North Star Metric

### Message clé

Le besoin est de centraliser le pilotage stratégique dans une plateforme intégrée.

### À retenir

:::metric
label: North Star Metric
value: -30%
caption: temps de reporting PMO, de 30h à 21h/semaine
:::

- Centraliser projets, ressources, budgets, jalons, risques.
- Réduire les angles morts décisionnels.
- Automatiser les rapports Copil et Exécutif.
- Rendre les arbitrages visibles, traçables et rapides.

### Notes / détails

La question directrice de conception est : « Que doit savoir le Copil maintenant pour prendre la bonne décision ? »

---

## Objectifs stratégiques

### Message clé

Les objectifs sont mesurables, liés au diagnostic et suivis par horizon.

### À retenir

| Objectif | Baseline | Cible |
|---|---:|---:|
| Temps reporting PMO | 30h/sem | 21h/sem à S12 |
| Livraison à temps | 65% | 90% à S24 |
| Productivité allocation | 72% | 82% à S12 |
| Outils consolidés | 7 | 1 plateforme à S18 |
| Payback | — | < 3 mois |

### Notes / détails

Les objectifs sont alignés avec la méthode SMART et avec les OKR de la roadmap Now-Next-Later : Product-Market Fit du MVP, fondations techniques solides, gouvernance Agile et reporting automatisé.

---

## Proposition de valeur

### Message clé

Tech4Value remplace le pilotage fragmenté par une source unique de vérité adaptée à chaque segment utilisateur.

### À retenir

| Segment | Bénéfice principal |
|---|---|
| Direction | Vision portefeuille 360° et décisions plus rapides |
| Managers | Allocation ressources et collaboration inter-pôles |
| PMO / Chefs de projet | Reporting automatisé et planning intelligent |
| Équipes projet | Backlog clair, documentation centralisée |
| Utilisateurs finaux | Feedback intégré, roadmap transparente |

### Notes / détails

La proposition de valeur combine valeur rationnelle (gain de temps, consolidation, décision) et valeur d’adoption (reconnaissance, clarté, communauté, accompagnement).

---

## Solution cible

### Message clé

La solution est une plateforme web de pilotage stratégique connectée aux briques SI existantes.

### À retenir

- Dashboard exécutif temps réel.
- Planning Gantt et jalons.
- RACI et responsabilités.
- Suivi budgétaire et ressources.
- Reporting PDF/Excel automatisé.
- Intégrations Odoo, SharePoint, Power BI, Azure AD.

```txt
Odoo / SharePoint / Power BI / Azure AD
        ↓
Plateforme Tech4Value MVP
        ↓
Dashboard · Gantt · RACI · Budget · Reporting · Allocation
```

### Notes / détails

La solution conserve les briques existantes au lieu de les remplacer brutalement. Elle agit comme une couche d’orchestration, de consolidation et de restitution.

---

## Architecture fonctionnelle

### Message clé

L’architecture répond directement aux 5 constats du diagnostic.

### À retenir

```txt
Utilisateurs
  ↓ HTTPS
Frontend React + TypeScript
  ↓ API REST
Backend Node.js + Express
  ↓ Prisma
PostgreSQL / Supabase
  ↔ Odoo · SharePoint · Power BI · Azure AD
```

- Architecture **three-tier**.
- Découplage présentation / logique métier / données.
- API Gateway, RBAC, services d’intégration.
- Modèle de données centré sur projets, ressources, temps, risques.

### Notes / détails

Patterns retenus : MVC, Repository Pattern, Service Layer, Adapter Pattern. Objectifs : modularité, interopérabilité, scalabilité, maintenabilité et performance.

---

## Stack technique retenue

### Message clé

Le choix TypeScript full-stack optimise cohérence, rapidité et maintenabilité pour une micro-équipe.

### À retenir

| Couche | Choix |
|---|---|
| Frontend | React 18 + TypeScript + Tailwind + Zustand |
| Backend | Node.js 18 LTS + Express + TypeScript |
| ORM / DB | Prisma + PostgreSQL 15 |
| Déploiement | Vercel + Railway + Supabase |
| CI/CD | GitHub Actions |
| Reporting | Power BI export / CSV structuré |

### Notes / détails

Alternatives évaluées : Python/Django, Java/Spring, microservices avancés. Rejetées pour complexité ou surdimensionnement au regard d’une équipe de deux personnes et d’un MVP en 24 semaines.

---

## Intégrations SI critiques

### Message clé

Les intégrations sont priorisées selon leur impact sur le reporting et la gouvernance.

### À retenir

| Brique | Priorité | Rôle |
|---|---|---|
| Odoo v15 | P0 | budgets, temps, ressources |
| Power BI | P0 | dashboards et reporting exécutif |
| SharePoint | P0 | documents, livrables, versioning |
| Azure AD | P0 | SSO, MFA, RBAC |
| HubSpot | P2 | contexte commercial optionnel |

### Notes / détails

Stratégie d’intégration : API quand fiable, export CSV comme fallback. La synchronisation Odoo quotidienne est une cible S8, puis temps réel dans la roadmap long terme.

---

## Sécurité, conformité et qualité

### Message clé

La solution intègre les exigences professionnelles attendues : RGPD, OWASP, accessibilité, tests et monitoring.

### À retenir

- Authentification JWT puis Azure AD SSO + MFA.
- RBAC par rôle : Admin, PM, User.
- Protection OWASP Top 10 : validation Zod, Prisma, Helmet, CORS, rate limiting.
- RGPD : minimisation, traçabilité, droits utilisateurs.
- WCAG 2.1 AA : contrastes, navigation clavier, composants accessibles.
- Tests : unitaires, intégration, E2E, charge.

### Notes / détails

Cibles qualité : coverage ≥70% à S12 puis ≥80% à S18, API p95 <200ms, uptime ≥99,5%, Lighthouse ≥90.

---

## Management de projet

### Message clé

La méthode Agile Hybride combine cadrage structuré et exécution itérative.

### À retenir

```txt
S1-S4    Cadrage Waterfall
S5-S16   Développement Agile / sprints 2 semaines
S17-S20  Consolidation, tests, optimisation
S21-S24  Vidéo, dossier technique, soutenance
```

- Cérémonies allégées adaptées à 2 personnes.
- Daily asynchrone, sprint planning, review, rétro.
- Décisions tracées dans un journal versionné.
- RACI clair : Jules PM / Léo Tech Lead.

### Notes / détails

Le Scrum pur est trop lourd pour une équipe de deux personnes ; le Waterfall pur est trop rigide pour des intégrations SI. L’hybride répond aux contraintes académiques et techniques.

---

## Roadmap Now-Next-Later

### Message clé

La roadmap garde le cap sur 24 semaines tout en permettant l’apprentissage continu.

### À retenir

| Horizon | Semaines | Focus |
|---|---:|---|
| NOW | S1-S4 | besoin, benchmark, périmètre MVP |
| NEXT | S5-S12 | architecture, intégrations, MVP alpha |
| LATER | S13-S24 | bêta, tests utilisateurs, livrables académiques |

- WIP limité à 3 items NOW.
- Promotion NEXT → NOW par checklist.
- Priorisation RICE.

### Notes / détails

Top priorités RICE : définition périmètre MVP, planning/RACI, gestion des risques, analyse besoin, authentification Azure AD, maquettes UX/UI, benchmark techno.

---

## Jalons majeurs

### Message clé

Le projet est piloté par 8 jalons vérifiables.

### À retenir

| Jalon | Semaine | Validation |
|---|---:|---|
| M1 Cadrage validé | S3/S4 | cahier des charges, RACI |
| M2 Conception complète | S7 | maquettes, API, design system |
| M3 MVP Alpha | S12 | 6 features core, coverage ≥70% |
| M4 MVP Beta | S16 | NPS 50+, adoption 80% |
| M5 Intégrations OK | S18 | Odoo, SharePoint, Power BI |
| M6 Vidéo finalisée | S22 | 15-20 min |
| M7 Dossiers finalisés | S23 | groupe + individuels |
| M8 Soumission | S24 | rendu complet |

### Notes / détails

Les dépendances critiques concernent surtout l’architecture backend/frontend, le POC Odoo, le pipeline Power BI, la formation utilisateurs et la disponibilité d’un MVP Beta pour la vidéo.

---

## Budget et ROI

### Message clé

Le modèle économique se justifie par les gains de productivité et la valeur de pilotage.

### À retenir

:::metric
label: Valeur économique annuelle estimée
value: 1,06 M€
caption: gains temps + productivité + réduction fragmentation
:::

| Poste | Montant |
|---|---:|
| Setup initial | 235 k€ |
| MVP 24 semaines | 198 k€ |
| Opex année 1 | ~1,22 à 1,25 M€ |
| Payback | < 3 mois |
| ROI 3 ans | ~280% |

### Notes / détails

Les coûts annuels sont dominés par la masse salariale (~73%). Le projet académique MVP utilise des free tiers et une assistance IA documentée, mais les projections présentent aussi un déploiement réaliste en production.

---

## Business model potentiel

### Message clé

Au-delà du cas interne, la plateforme peut devenir une offre SaaS pour PME/ETI similaires.

### À retenir

:::offer
title: Plateforme Tech4Value SaaS + Services
price: 500-5 000 €/mois selon taille et modules
outcome: pilotage portefeuille, reporting automatisé, intégrations SI
:::

- SaaS par utilisateur ou par projet.
- Services : implémentation, formation, coaching Agile, BI.
- Add-ons : analytics avancés, intégrations, white-label, support premium.
- Potentiel Y3 : **800 k€ à 1,5 M€**.

### Notes / détails

Le break-even externe est estimé fin année 2 / début année 3. Le positionnement repose sur l’intégration avec Odoo/Microsoft et la spécialisation pilotage de portefeuille ETI.

---

## Diagnostic 7S McKinsey

### Message clé

Le principal écart organisationnel est côté systèmes et culture de collaboration.

### À retenir

| Dimension | Actuel | Cible M24 | Priorité |
|---|---:|---:|---|
| Strategy | 3/5 | 4,5/5 | P0 |
| Structure | 2,5/5 | 4/5 | P0 |
| Systems | 2/5 | 4,5/5 | P0 |
| Shared Values | 2/5 | 4/5 | P1 |
| Style | 2,5/5 | 4/5 | P1 |
| Staff | 3/5 | 4/5 | P1 |
| Skills | 2,5/5 | 4/5 | P1 |

### Notes / détails

Les dimensions dures (Strategy, Structure, Systems) créent les conditions de transformation ; les dimensions douces (Shared Values, Style, Staff, Skills) sécurisent l’adoption et la durabilité.

---

## Conduite du changement

### Message clé

L’adoption est traitée comme un livrable à part entière, pas comme une conséquence du déploiement.

### À retenir

- Modèle **ADKAR** : Awareness, Desire, Knowledge, Ability, Reinforcement.
- Programme **early adopters** : 2-3 champions par pôle.
- Newsletter hebdomadaire et ateliers mensuels.
- Formation par rôle : Direction, PMO, chefs de projet, équipes.
- KPI : adoption MVP, NPS interne, CSAT formation, usage actif.

### Notes / détails

Cibles : NPS interne 30 → 65 à M24, adoption MVP 80% à M6 puis 95% à M18, satisfaction formation ≥8/10.

---

## Risques et mitigations

### Message clé

Les risques critiques sont identifiés tôt et reliés à des plans de mitigation.

### À retenir

| Risque | Niveau | Mitigation |
|---|---|---|
| Besoin client confus | Critique | cadrage S1-S4, validation itérative |
| Intégration Odoo complexe | Élevé | POC API, fallback CSV |
| Scope creep | Élevé | MoSCoW, contrôle des changements |
| Adoption faible | Élevé | early adopters, formation, support |
| Dépendance à 2 personnes | Moyen | documentation, RACI, ADR |
| Qualité insuffisante | Élevé | CI/CD, tests, code review |

### Notes / détails

Les risques sont revus à chaque sprint. L’escalade se fait au Copil si l’impact dépasse le niveau moyen.

---

## Différenciation et innovation

### Message clé

La différenciation vient de l’intégration SI, de la gouvernance projet et de l’usage contrôlé de l’IA.

### À retenir

- Spécialisation ETI avec SI Odoo/Microsoft.
- Plateforme portefeuille + gouvernance, pas simple task manager.
- Automatisation reporting et alertes proactives.
- Assistance IA documentée pour accélérer la production.
- Roadmap future : analytics prédictifs, recommandations, simulations.

:::callout ⚠️
L’innovation ne doit pas masquer le cœur de valeur : fiabiliser les données et accélérer les décisions.
:::

### Notes / détails

La gamification est envisagée comme levier d’engagement éthique : reconnaissance, progression, impact visible — pas comme un système de points superficiel.

---

## Livrables académiques et conformité

### Message clé

Le projet est aligné sur les 220 points de la grille d’évaluation.

### À retenir

| Livrable | Points | Preuve attendue |
|---|---:|---|
| Vidéo MVP | 64 | démo, impact, conviction |
| Management projet | 25 | coûts, méthode, change |
| Planification | 35 | Gantt, RACI, risques, jalons |
| Solution technique | 73 | architecture, tests, docs, conformité |
| Analyse individuelle | 8 | défis, compétences, axes progrès |
| Cadre & bonus | 15 | professionnalisme, aller plus loin |

### Notes / détails

Le dossier technique groupe vise 85-110 pages ; les dossiers individuels 25-35 pages par étudiant. Tous les membres doivent apparaître dans la vidéo avec prise de parole.

---

## Impact attendu

### Message clé

Le MVP apporte un impact direct sur le temps, la qualité de décision et la coordination.

### À retenir

| Impact | Cible |
|---|---:|
| Temps reporting | -30% à S12, -50% à M24 |
| Décision stratégique | 2h → 30min |
| Livraison à temps | 65% → 90% |
| Occupation globale | 72% → 82% |
| Outils consolidés | 7 → 1 |
| Adoption | 95% à M18 |

### Notes / détails

La valeur n’est pas seulement économique : meilleure traçabilité, réduction des silos, amélioration de la qualité documentaire, meilleure préparation à l’audit et à la soutenance.

---

## Ask / décision attendue

### Message clé

La prochaine décision est de valider le cadrage MVP et de concentrer l’exécution sur les intégrations P0.

### À retenir

- Valider les **6 fonctionnalités core** du MVP.
- Prioriser Odoo, Power BI, SharePoint, Azure AD.
- Confirmer la méthode Agile Hybride et les jalons S3/S12/S24.
- Sécuriser la conduite du changement dès S1.
- Préparer une démo vidéo centrée sur la valeur métier.

:::callout ✅
Décision recommandée : lancer le MVP cadré, avec reporting PMO automatisé comme premier cas d’usage démontrable.
:::

### Notes / détails

Pour une soutenance, cette slide sert de conclusion : elle transforme l’analyse en décision claire et rappelle pourquoi le MVP est réaliste, mesurable et aligné avec la grille d’évaluation.

---

## Annexe A — Répartition des pôles

### Message clé

La compréhension des pôles permet d’expliquer la complexité d’allocation.

| Pôle | Effectif | Missions principales |
|---|---:|---|
| Direction & PMO | 10 | gouvernance, reporting exécutif |
| IT & Infrastructure | 32 | réseau, ERP, cloud, sécurité |
| Développement | 38 | web, mobile, API |
| Data & BI | 18 | data lake, reporting groupe |
| Sécurité & Conformité | 15 | RGPD, audits, cybersécurité |
| RH & Communication | 20 | formation, carrière, communication |
| Finance & Achats | 16 | budget, contrôle de gestion |
| RSE & Green IT | 6 | cloud durable, indicateurs RSE |
| Support | 10 | juridique, administratif, sites |

---

## Annexe B — Fonctionnalités MVP core

### Message clé

Le MVP doit rester centré sur les fonctionnalités qui réduisent le reporting et améliorent les arbitrages.

1. Dashboard exécutif.
2. Planning Gantt.
3. Matrice RACI.
4. Suivi budget vs réel.
5. Reporting PDF/Excel automatisé.
6. Allocation ressources par pôle.

### Notes / détails

Les fonctionnalités secondaires — suivi Agile avancé, gamification, mobile app, analytics prédictifs — sont reportées après validation du MVP alpha.

---

## Annexe C — Roadmap 24 mois

### Message clé

La vision long terme dépasse le MVP académique sans le surcharger.

| Phase | Horizon | Contenu |
|---|---|---|
| MVP | M0-M6 | dashboard, Odoo, Gantt, Azure AD, support |
| Normalisation | M6-M12 | Agile complet, Power BI, risques, mobile read-only |
| Valeur ajoutée | M12-M18 | ML, portfolio optimization, forecasting |
| Monétisation | M18-M24 | SaaS multi-tenant, marketplace, white-label |

---

## Annexe D — Sources consolidées

### Message clé

Cette présentation consolide les documents d’annexe sans supprimer les détails importants.

- `dossier-technique-draft.md` : dossier principal et grille d’évaluation.
- `architecture/architecture-technique.md` : stack, architecture, sécurité, CI/CD.
- `business-model-canvas.md` : segments, proposition de valeur, coûts, revenus, SWOT.
- `matrice-7s-mckinsey.md` : diagnostic organisationnel et plan d’action.
- `now-next-later-roadmap.md` : roadmap, OKR, RICE, jalons.
- `schema-directeur.md` : cadrage global, gouvernance, livrables.
- `synthese-figjam.md` : synthèse exécutive BMC + 7S.
- `tableau-objectifs-kpi-actions.md` : objectifs, KPI, actions, dépendances.
