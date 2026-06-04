# Annexe : architecture technique Tech4Value

## Objectif

Cette annexe synthétise l'architecture technique du MVP Tech4Value. Elle précise le rôle de chaque couche, les choix technologiques, les intégrations SI et les garanties de qualité attendues pour un déploiement interne.

## Vue d'ensemble

Tech4Value repose sur une architecture web trois-tiers :

```text
Utilisateurs
Direction · PMO · Chefs de projet · Admin
        │ HTTPS
        ▼
Frontend Next.js
Dashboard · Projets · Reporting · Administration
        │ REST API
        ▼
Backend Node.js / Express
Services métier · RBAC · intégrations SI
        │ Prisma
        ▼
PostgreSQL
Données projets · ressources · jalons · risques
        │
        ▼
Systèmes existants
Odoo · SharePoint · Power BI · Azure AD
```

## Stack retenue

| Couche | Technologie | Rôle |
|---|---|---|
| Frontend | Next.js, React, TypeScript | Interface web et dashboards |
| UI | Tailwind CSS, Shadcn/UI | Composants accessibles et cohérents |
| Backend | Node.js, Express, TypeScript | API métier et orchestration |
| ORM | Prisma | Accès typé à la base de données |
| Base | PostgreSQL | Source consolidée du MVP |
| Authentification | Azure AD / OAuth 2.0 | SSO et gestion des identités |
| Déploiement | Vercel, Railway, Néon | Hébergement cloud MVP |
| Qualité | Vitest, Supertest, Playwright | Tests unitaires, API et E2E |

## Rôle de Next.js

Next.js constitue la couche visible de la plateforme. Il permet de fournir des vues adaptées aux rôles : direction, PMO, chefs de projet et administrateurs. Son rôle n'est pas de remplacer Odoo, mais de présenter une vision consolidée des données projet.

Fonctions principales :

- dashboard portefeuille ;
- suivi avancement, budget, risques et ressources ;
- consultation par rôle ;
- exports et reporting ;
- interface d'administration.

## Rôle d'Odoo

Odoo reste le système source pour une partie des données opérationnelles : projets, budgets, ressources, temps passés et informations administratives. La plateforme Tech4Value récupère ces données, les normalise, puis les restitue sous forme de pilotage stratégique.

```text
Odoo ERP
Projets · budgets · ressources
        │ API JSON-RPC
        ▼
Adaptateur Odoo
Contrôle · normalisation · fallback
        │
        ▼
PostgreSQL
Données consolidées
        │
        ▼
Next.js
Dashboards et décisions
```

## Modèle de données principal

| Entité | Description |
|---|---|
| User | Utilisateur, rôle, pôle de rattachement |
| Pole | Pôle métier, effectif, capacité |
| Project | Projet, priorité, budget, statut, dates |
| ProjectAssignment | Affectation utilisateur-projet |
| Timesheet | Temps déclaré par projet |
| Milestone | Jalons et échéances |
| Risk | Risques, criticité, mitigation |
| Document | Documents liés aux projets |
| Report | Rapports générés |

## Intégrations SI

| Système | Usage | Mode d'intégration |
|---|---|---|
| Odoo | Projets, budgets, ressources | API JSON-RPC, synchronisation planifiée |
| Azure AD | Identité, rôles, SSO | OAuth 2.0 / OIDC |
| SharePoint | Documents projet | Microsoft Graph API |
| Power BI | Restitution avancée | Export CSV ou API selon maturité |

## Sécurité

Mesures prévues :

- authentification SSO ;
- rôles et droits d'accès par profil ;
- chiffrement HTTPS ;
- validation serveur des entrées ;
- journalisation des accès sensibles ;
- séparation des données par rôle ;
- sauvegardes régulières de la base.

## Tests et qualité

| Type de test | Outil | Objectif |
|---|---|---|
| Unitaires | Vitest | Services et fonctions métier |
| API | Supertest | Endpoints critiques |
| E2E | Playwright | Parcours utilisateurs clés |
| Performance | k6 | Charge API et latence |
| Sécurité | OWASP ZAP | Détection des failles courantes |

Objectifs qualité :

- couverture métier cible : 70-80 % ;
- aucun bug critique en recette ;
- latence API p95 inférieure à 200 ms ;
- score Lighthouse cible supérieur à 90 ;
- parcours critiques testés de bout en bout.

## Déploiement

Le MVP utilise une architecture cloud légère :

```text
Vercel
Frontend Next.js
   │
Railway
API Express
   │
PostgreSQL managé
Données consolidées
```

Ce choix limite les coûts d'infrastructure, simplifie les déploiements et permet de produire rapidement un environnement de démonstration stable.

## Limites identifiées

- Les intégrations réelles devront être validées sur les environnements SI définitifs.
- La synchronisation temps réel peut être remplacée par du batch si les API sont instables.
- Un passage à grande échelle nécessiterait un cache dédié et une supervision renforcée.
- La couverture de tests doit être maintenue après chaque évolution fonctionnelle.

## Synthèse

L'architecture retenue privilégie la simplicité, la maintenabilité et l'intégration avec l'existant. Next.js apporte l'expérience utilisateur et la restitution décisionnelle ; Odoo conserve son rôle de système métier source ; PostgreSQL consolide les données ; l'API Express orchestre les règles métier et les intégrations.
