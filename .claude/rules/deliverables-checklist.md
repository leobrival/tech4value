---
name: deliverables-checklist
description: Checklist bloquante des livrables avant rédaction du dossier et du script
scope: project
priority: critical
tags: [livrables, checklist, prerequis, bloquant]
---

# Checklist des Livrables

## Règle Bloquante

**CRITICAL** : Avant de rédiger le dossier technique final (`livrables/dossier-groupe/draft.md`) ou le script vidéo (`livrables/video/script.md`), Claude DOIT vérifier que tous les livrables annexes listés ci-dessous existent et sont non vides.

**Si un livrable est manquant ou vide** → STOP. Ne pas commencer la rédaction. Lister les éléments manquants et demander à l'utilisateur de les produire d'abord.

## Vérification Obligatoire

Avant toute rédaction du dossier ou du script, exécuter cette vérification :

```bash
# Script de vérification (à exécuter mentalement ou via Bash)
# Chaque fichier doit exister ET contenir du contenu (> 10 lignes)

# Documents de cadrage (.doc/)
.doc/cadre-pedagogique.md        # Cadre pédagogique officiel
.doc/etat-des-lieux-si.md        # État des lieux du SI existant
.doc/business-model-canvas.md    # Business Model Canvas
.doc/cartographie-entreprise.md  # Cartographie organisationnelle
.doc/schema-directeur-outils.md  # Schéma directeur des outils

# Documents stratégiques (docs/)
docs/schema-directeur.md                    # Schéma directeur IT
docs/business-model-canvas.md               # BMC détaillé
docs/architecture/architecture-technique.md # Architecture technique
docs/matrice-7s-mckinsey.md                 # Analyse 7S McKinsey
docs/now-next-later-roadmap.md              # Roadmap Now/Next/Later
docs/tableau-objectifs-kpi-actions.md       # Objectifs, KPI, actions

# Livrables annexes (livrables/dossier-groupe/annexe/)
livrables/dossier-groupe/matrice-raci-preliminaire.md  # Matrice RACI
```

## Statut des Livrables

### Livrables de Cadrage (Prérequis — .doc/)

| # | Livrable | Fichier | Critères Dossier Couverts |
| --- | --- | --- | --- |
| C-01 | Cadre pédagogique | `.doc/cadre-pedagogique.md` | Référence transverse |
| C-02 | État des lieux SI | `.doc/etat-des-lieux-si.md` | D-11, D-12 (justification technique) |
| C-03 | Business Model Canvas | `.doc/business-model-canvas.md` | D-01 (gestion coûts), D-23 (gouvernance) |
| C-04 | Cartographie entreprise | `.doc/cartographie-entreprise.md` | D-03 (conduite changement), D-11 (cohérence) |
| C-05 | Schéma directeur outils | `.doc/schema-directeur-outils.md` | D-11, D-12, D-14 (innovation) |

### Livrables Stratégiques (Prérequis — docs/)

| # | Livrable | Fichier | Critères Dossier Couverts |
| --- | --- | --- | --- |
| S-01 | Schéma directeur IT | `docs/schema-directeur.md` | D-11, D-23 (gouvernance, évolution) |
| S-02 | BMC détaillé | `docs/business-model-canvas.md` | D-01 (coûts), D-23 (vision) |
| S-03 | Architecture technique | `docs/architecture/architecture-technique.md` | D-11, D-12, D-20 (schémas) |
| S-04 | Matrice 7S McKinsey | `docs/matrice-7s-mckinsey.md` | D-03 (conduite changement) |
| S-05 | Roadmap Now/Next/Later | `docs/now-next-later-roadmap.md` | D-04, D-10 (planification, jalons) |
| S-06 | Objectifs / KPI / Actions | `docs/tableau-objectifs-kpi-actions.md` | D-01 (coûts), D-23 (gouvernance) |

### Livrables Annexes (Prérequis — livrables/)

| # | Livrable | Fichier | Critères Dossier Couverts |
| --- | --- | --- | --- |
| A-01 | Matrice RACI | `livrables/dossier-groupe/matrice-raci-preliminaire.md` | D-02 (méthodologie), D-05 (tâches) |

### Livrables Manquants à Produire

| # | Livrable | Fichier attendu | Critères Dossier Couverts | Priorité |
| --- | --- | --- | --- | --- |
| M-01 | Budget prévisionnel détaillé | `docs/budget-previsionnel.md` | D-01 (10 pts, P0) | **P0** |
| M-02 | Plan de conduite du changement | `docs/conduite-changement.md` | D-03 (10 pts, P0) | **P0** |
| M-03 | Planning détaillé (Gantt) | `docs/planning-gantt.md` | D-04..D-10 (35 pts, P1) | **P0** |
| M-04 | Registre des risques | `docs/registre-risques.md` | D-08 (5 pts, P1) | **P1** |
| M-05 | Stratégie de tests | `docs/strategie-tests.md` | D-16 (5 pts, P1) | **P1** |
| M-06 | Documentation utilisateur | `livrables/dossier-groupe/annexe/documentation-utilisateur.md` | D-22 (10 pts, P0) | **P0** |
| M-07 | Politique de veille technologique | `docs/veille-technologique.md` | D-13, D-15 (7 pts, P1/P2) | **P1** |
| M-08 | Analyse GreenIT | `docs/analyse-green-it.md` | D-17 (2 pts, P2) | **P2** |
| M-09 | Analyse accessibilité | `docs/analyse-accessibilite.md` | D-19 (2 pts, P2) | **P2** |
| M-10 | Conformité réglementaire (RGPD, etc.) | `docs/conformite-reglementaire.md` | D-18 (5 pts, P1) | **P1** |

## Workflow de Vérification

### Avant Rédaction du Dossier

1. Lire cette checklist
2. Vérifier l'existence de chaque fichier C-01..C-05, S-01..S-06, A-01
3. Vérifier que chaque fichier est non vide (> 10 lignes de contenu)
4. Lister les fichiers M-01..M-10 manquants
5. **Si des livrables P0 manquent** → BLOQUER et lister ce qui doit être produit avant
6. **Si seuls des P1/P2 manquent** → AVERTIR mais autoriser la rédaction avec mention des lacunes

### Avant Rédaction du Script Vidéo

1. Vérifier que le dossier technique (`livrables/dossier-groupe/draft.md`) existe et est non vide
2. Vérifier que les livrables visuels sont prêts (architecture technique, schémas, captures MVP)
3. **Si le dossier n'existe pas** → BLOQUER, le dossier doit être rédigé avant le script

### Ordre de Production Recommandé

```text
1. Livrables manquants P0 (M-01, M-02, M-03, M-06)
2. Livrables manquants P1 (M-04, M-05, M-07, M-10)
3. Livrables manquants P2 (M-08, M-09)
4. Dossier technique final (draft.md)
5. Script vidéo (script.md)
```

## Sources

- `cadre-pedagogique.md` — Plan du document technique final (section VI.3)
- `rating-grids.md` — Critères de notation et priorisation Pareto
- `constitution.md` — Principes non négociables du projet
