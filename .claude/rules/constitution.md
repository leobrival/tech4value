# Constitution — Tech4Value

> Principes non-négociables pour le projet Tech4Value (Mastère CPIT 2025).
> Tout développement, toute décision architecturale et tout livrable DOIVENT respecter ces principes.

---

## Principes non-négociables

### P1 : Alignement sur la grille de notation

**Énoncé** : Toute décision technique DOIT être justifiable au regard de la grille de notation à 220 points. Les critères à forte valeur (10 pts chacun : D-01, D-03, D-11, D-12, D-22, D-23, V-02, V-03, V-06) ont priorité absolue sur les préférences personnelles ou l'élégance technique.

**Justification** : C'est un projet académique évalué sur des critères explicites. Un choix techniquement supérieur qui score mal est un mauvais choix. La grille de notation est l'arbitre final.

**Exemple de violation** : Choisir un framework récent sans documenter la justification (D-12 : qualité de la justification technique = 10 pts). Ou développer des fonctionnalités non alignées avec les objectifs du projet (V-02 : contexte et objectifs du projet = 10 pts).

### P2 : Documentation d'abord

**Énoncé** : Aucune fonctionnalité n'est terminée sans sa documentation correspondante. La documentation utilisateur (D-22 : 10 pts), les schémas techniques (D-20 : 5 pts) et la vision de gouvernance (D-23 : 10 pts) DOIVENT être rédigés en parallèle du code, pas après.

**Justification** : 25 points sur 220 (11 %) proviennent directement de la qualité documentaire. La documentation rédigée après coup est toujours incomplète. Le dossier technique est évalué indépendamment du MVP.

**Exemple de violation** : Construire l'intégralité du MVP puis bâcler la documentation la dernière semaine. Ou livrer du code sans diagrammes techniques (D-20) ni guides utilisateur (D-22).

### P3 : Cohérence des coûts

**Énoncé** : Tout choix d'infrastructure, d'outil ou de service DOIT inclure une analyse de coûts cohérente avec les contraintes de l'entreprise (D-01 : 10 pts). Les offres gratuites et les solutions open-source sont privilégiées. Tout service payant nécessite une justification ROI explicite.

**Justification** : La gestion des coûts vaut 10 points. Le contexte de l'entreprise fictive (185 collaborateurs, 5 projets stratégiques, 78 ETP) définit les contraintes budgétaires. Les choix doivent être réalistes pour une ETI.

**Exemple de violation** : Sélectionner un outil enterprise (ex. Jira, Confluence) sans comparer les coûts avec des alternatives gratuites. Ou ignorer les coûts opérationnels (hébergement, maintenance, licences) dans le dossier technique.

### P4 : Intégrité de l'architecture trois-tiers

**Énoncé** : L'application DOIT suivre une architecture trois-tiers stricte : frontend React, API Express, persistance Prisma + PostgreSQL. Aucun court-circuit entre les couches (pas d'accès direct à la BDD depuis le frontend, pas de logique métier dans la base de données).

**Justification** : La cohérence de la solution (D-11 : 10 pts) exige une architecture justifiée et consistante. Le pattern trois-tiers a été choisi pour son alignement avec les standards entreprise et la stack TypeScript de l'équipe.

**Exemple de violation** : Utiliser le SDK client Supabase pour contourner la couche API Express. Ou placer la logique de validation uniquement côté frontend sans contrôle serveur.

### P5 : Simulation réaliste plutôt que mocking vide

**Énoncé** : Les intégrations avec les systèmes externes (Odoo, SharePoint, Power BI, Azure AD) DOIVENT être simulées avec des structures de données réalistes et des contrats d'API, pas mockées avec des stubs vides. Chaque intégration DOIT avoir un contrat documenté et une stratégie de repli.

**Justification** : Le MVP doit démontrer des fonctionnalités opérationnelles (V-03 : 10 pts) et convaincre les utilisateurs finaux (V-06 : 10 pts). Les simulations réalistes montrent la compétence technique. Les mocks vides ne montrent rien.

**Exemple de violation** : Une intégration Odoo qui retourne `{ data: "mock" }` au lieu d'une réponse de portefeuille de projets réaliste avec les champs, types et cas limites appropriés.

### P6 : Traçabilité du planning

**Énoncé** : Chaque tâche DOIT être traçable vers un artefact de planification (diagramme de Gantt, décomposition de tâches, jalon). Les dépendances entre tâches DOIVENT être explicites. Le planning DOIT refléter l'exécution réelle, pas seulement les estimations initiales.

**Justification** : La section 2 (Planification détaillée) vaut 35 points sur 7 critères : cohérence (D-04), décomposition (D-05), clarté du calendrier (D-06), gestion des dépendances (D-07), gestion des risques (D-08), utilisation des outils (D-09), jalons clés (D-10). Tous exigent la traçabilité.

**Exemple de violation** : Un Gantt créé en fin de projet qui ne correspond pas à la chronologie réelle de développement. Ou des tâches sans dépendances explicites (D-07).

### P7 : Conformité réglementaire dès la conception

**Énoncé** : Le RGPD, les exigences CNIL et la protection des données DOIVENT être pris en compte dès le départ (D-18 : 5 pts). Le traitement des données personnelles DOIT être documenté. Les en-têtes de sécurité, la validation des entrées et le contrôle d'accès sont obligatoires pour toute fonctionnalité exposée aux utilisateurs.

**Justification** : La conformité réglementaire est explicitement notée. Intégrer la conformité après coup coûte 10 fois plus cher. Le contexte entreprise (185 employés, données RH, données financières) rend cela critique.

**Exemple de violation** : Stocker des données utilisateur sans politique de confidentialité. Ou exposer des endpoints API sans authentification dans un système gérant les données de performance des employés.

### P8 : GreenIT et accessibilité ne sont pas optionnels

**Énoncé** : Les considérations GreenIT (D-17 : 2 pts) et l'accessibilité (D-19 : 2 pts) DOIVENT être documentées et implémentées, même a minima. L'optimisation des images, le lazy loading, le HTML sémantique et la navigation clavier sont des prérequis de base.

**Justification** : Ce sont des « points faciles » (4 pts au total) qui demandent un effort minimal mais démontrent une conscience professionnelle. Les ignorer signale un manque de maturité aux évaluateurs.

**Exemple de violation** : Un tableau de bord avec des images non compressées de 5 Mo et sans texte alternatif. Ou des éléments interactifs inaccessibles au clavier.

### P9 : La conduite du changement est un livrable

**Énoncé** : Le programme de conduite du changement (D-03 : 10 pts) DOIT être un plan concret et actionnable — pas un cadre théorique. Il DOIT inclure : analyse des parties prenantes, plan de communication, stratégie de formation et indicateurs d'adoption.

**Justification** : La conduite du changement vaut 10 points — autant que la démonstration du MVP elle-même. Elle doit convaincre les évaluateurs que la solution pourrait réellement être adoptée dans l'entreprise fictive.

**Exemple de violation** : Un seul paragraphe disant « Nous formerons les utilisateurs. » Ou une section conduite du changement qui ressemble à un article Wikipédia sur la théorie du changement.

### P10 : Discipline d'équipe à deux personnes

**Énoncé** : Avec seulement 2 membres (PM + Tech Lead), chaque décision DOIT être documentée avec sa justification. Pas d'accords oraux uniquement. Les commits Git, les fichiers de spécification et les comptes-rendus de réunion sont la seule source de vérité. Le travail assisté par IA (52 % des heures) DOIT être traçable et vérifiable.

**Justification** : L'équipe est trop petite pour une mémoire institutionnelle. Si une personne est indisponible, l'autre doit pouvoir continuer à partir de la documentation seule. L'utilisation de l'IA à 52 % exige une traçabilité explicite pour l'intégrité académique.

**Exemple de violation** : Une décision architecturale critique prise lors d'une conversation orale sans trace écrite. Ou du code généré par IA commité sans revue ni documentation de l'approche/prompt utilisé.

---

## Checklist de validation

Avant tout livrable majeur ou jalon, vérifier :

- [ ] **P1** : Chaque choix technique est-il justifiable au regard de la grille de notation ?
- [ ] **P2** : La documentation est-elle rédigée en parallèle de la fonctionnalité (pas après) ?
- [ ] **P3** : Les coûts sont-ils documentés et cohérents avec les contraintes de l'entreprise ?
- [ ] **P4** : L'implémentation respecte-t-elle l'architecture trois-tiers ?
- [ ] **P5** : Les intégrations sont-elles simulées avec des données et contrats réalistes ?
- [ ] **P6** : Chaque tâche est-elle traçable dans le planning (Gantt, jalons, dépendances) ?
- [ ] **P7** : Le RGPD, les en-têtes de sécurité et le contrôle d'accès sont-ils en place ?
- [ ] **P8** : Les minimums GreenIT et accessibilité sont-ils atteints et documentés ?
- [ ] **P9** : Le plan de conduite du changement est-il concret et actionnable ?
- [ ] **P10** : Toutes les décisions sont-elles documentées ? L'usage de l'IA est-il traçable ?

---

## Processus d'amendement

1. Documenter le changement proposé avec sa justification
2. Montrer l'impact sur l'alignement avec les critères de notation (P1)
3. Les deux membres de l'équipe (Jules + Léo) doivent être d'accord
4. Mettre à jour ce fichier avec la date du changement et la justification
5. Notifier dans le journal de décisions du projet

---

## Sources

- `rating-grids.md` — Grille de notation à 220 points (Vidéo & MVP + Dossier technique)
- `grille-notation-video-2025.pdf` — Grille officielle de notation vidéo (CPIT 2025)
- `grille-notation-dossier-technique-2025.pdf` — Grille officielle de notation du dossier technique (CPIT 2025)
- CLAUDE.md — Instructions et architecture du projet
- README.md — Vue d'ensemble et contraintes du projet
