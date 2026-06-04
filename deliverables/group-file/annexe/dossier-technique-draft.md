# Dossier technique : Tech4Value

**Plateforme de Pilotage Stratégique des Projets**

**Équipe Projet**

- **Jules Courtin**, Chef de Projet / Product Manager
- **Léo Brival**, Tech Lead / Architecte Solution

---

## Table des matières

1. [Présentation de l'Entreprise et de l'Équipe Projet](#1-présentation-de-lentreprise-et-de-léquipe-projet)
2. [Analyse de la Problématique](#2-analyse-de-la-problématique)
3. [Management de Projet](#3-management-de-projet)
4. [Planification Détaillée](#4-planification-détaillée)
5. [Solution Technique](#5-solution-technique)
6. [Conduite du Changement](#6-conduite-du-changement)
7. [Annexes](#7-annexes)

---

## 1. Présentation de l'entreprise et de l'équipe projet

Cette section présente le contexte organisationnel dans lequel s'inscrit le projet Tech4Value. Comprendre la structure de l'entreprise, son portefeuille de projets stratégiques et la composition de l'équipe projet est indispensable pour appréhender la nature des besoins identifiés et la pertinence des solutions retenues. Tech4Value est une entreprise de taille intermédiaire (ETI) du secteur des services numériques, confrontée à des défis de pilotage caractéristiques des organisations matricielles gérant plusieurs projets critiques en parallèle. Le présent dossier documente la démarche complète menée par une équipe de deux personnes pour répondre à cette problématique dans un délai de **24 semaines**, avec une enveloppe budgétaire de **350 000 €** allouée à l'ensemble du programme de transformation.

**Contexte sectoriel.** Les entreprises de services numériques de taille intermédiaire (100-500 collaborateurs) font face à un paradoxe caractéristique : elles ont la sophistication technologique pour déployer des solutions de pilotage avancées, mais pas toujours les ressources humaines pour les maintenir et les faire adopter. Tech4Value, avec ses **185 collaborateurs** répartis sur 3 sites et ses **9 pôles métier**, illustre ce paradoxe. L'organisation gère simultanément **5 projets stratégiques** qui mobilisent **78 ETP**, soit 42 % des effectifs, avec des interdépendances fortes entre les pôles IT, Data, Finance, RH et PMO. Cette complexité organisationnelle rend le pilotage manuel (via Excel et des outils disparates) non seulement inefficace mais structurellement incompatible avec les exigences de réactivité décisionnelle d'une ETI en croissance.

**Positionnement du projet dans la trajectoire de transformation.** Le projet Tech4Value prolonge une trajectoire de transformation numérique engagée depuis 2022, qui comprend déjà le déploiement d'Odoo (ERP), de Microsoft 365 (collaboration) et d'Azure AD (identité). La plateforme de pilotage de portefeuille développée dans ce projet constitue la couche de consolidation manquante : elle agrège les données produites par tous ces outils pour offrir une vue unifiée à la direction et aux chefs de projet. Le projet relève de l'architecture d'information autant que du développement applicatif.

**Pourquoi une équipe de deux personnes.** Jules Courtin (PM) et Léo Brival (Tech Lead) portent le MVP en équipe resserrée afin de réduire les délais de décision, limiter les interfaces et démontrer qu'une cellule produit moderne peut livrer rapidement une solution de pilotage stratégique. Les outils modernes (stack TypeScript, IA générative, déploiement cloud) permettent à cette micro-équipe de produire un résultat qui aurait nécessité 5 à 8 personnes il y a 5 ans. Cette réalité est documentée et assumée dans le présent dossier : 52 % des heures de développement bénéficient de l'assistance de Claude Code (Anthropic), une pratique tracée et vérifiable conformément au principe P10 de la constitution projet. La répartition des rôles est strictement définie et documentée dans la matrice RACI (section 3.2 et Annexe F) : Jules porte la dimension fonctionnelle, organisationnelle et de conduite du changement ; Léo porte la dimension technique, architecturale et de qualité logicielle. Les décisions structurantes sont prises conjointement et documentées dans le journal de décisions du projet.

**Structure de la section 1.** La section se décline en trois sous-sections : les chiffres clés de l'entreprise (1.1), le portefeuille de projets stratégiques qui justifie le projet (1.2), et la présentation de l'équipe projet avec sa matrice de responsabilités (1.3). Ces trois angles, entreprise, enjeux, équipe, constituent le socle de compréhension nécessaire à la lecture de l'ensemble du dossier. Un lecteur qui lit la section 1 en entier doit pouvoir comprendre, sans lire la suite, pourquoi ce projet existe, qui le porte et dans quel contexte il s'inscrit.

**Alignement documentaire.** La section 1 pose les fondations argumentatives de toutes les décisions documentées dans les sections suivantes. Elle relie le contexte entreprise aux choix de solution, à la conduite du changement et à l'enveloppe budgétaire disponible.

**Enjeux de gouvernance et de traçabilité.** La portée stratégique du projet impose une exigence de traçabilité élevée. Chaque décision structurante est documentée dans le journal de décisions versionné sur GitHub, chaque commit est signé et associé à une tâche planifiée, et l'utilisation de l'IA générative est journalisée avec les prompts utilisés et les outputs produits. Cette discipline documentaire répond au principe P10 de la constitution projet (traçabilité à deux personnes) et renforce le professionnalisme du dossier. Elle assure également que le projet pourrait être repris, audité ou présenté devant n'importe quel comité sans risque de lacune d'information. Pour le comité de pilotage, la confiance dans la rigueur du processus pèse autant que la qualité du dossier final. Cette section présente donc l'organisation du travail avec le même niveau de détail que l'architecture technique.

### 1.1 Tech4Value en chiffres

**Tech4Value** est une entreprise de services numériques comptant **185 collaborateurs**, organisée en structure matricielle autour de **9 pôles** répartis sur **3 sites** (siège + antennes Rennes et Lyon).

| Pôle                            | Effectif | Missions Principales                                        |
| ------------------------------- | -------- | ----------------------------------------------------------- |
| Direction Générale & PMO        | 10       | Gouvernance, priorisation stratégique, reporting exécutif   |
| IT & Infrastructure             | 32       | Supervision SI, réseau, ERP, cloud, sécurité opérationnelle |
| Développement & Digital Factory | 38       | Applications internes/clients (web, mobile, API)            |
| Data & BI                       | 18       | Gouvernance donnée, Data Lake, reporting groupe             |
| Sécurité & Conformité           | 15       | RGPD, cybersécurité, audits, conformité SI                  |
| RH & Communication              | 20       | Gestion RH, formations, communication corporate             |
| Finance & Achats                | 16       | Budgets, contrôle de gestion, contractualisation            |
| RSE & Green IT                  | 6        | Indicateurs environnementaux, gouvernance durable cloud     |
| Fonctions Support               | 10       | Support administratif, juridique, gestion de site           |
| **TOTAL**                       | **185**  |                                                             |

Tech4Value affiche un chiffre d'affaires estimé à **24 M€** et positionne sa maturité digitale au **niveau 3 sur 5** selon le référentiel CMM adapté au numérique : les processus sont définis et documentés, mais leur automatisation et leur pilotage par la donnée restent insuffisants. La répartition géographique sur trois sites (siège parisien + antennes Rennes et Lyon) introduit des contraintes de coordination que la solution Tech4Value doit impérativement prendre en compte. L'objectif de montée à maturité **niveau 4** (processus mesurés et pilotés par KPI temps-réel) constitue l'horizon de référence de l'ensemble du programme.

Sur le plan opérationnel, **78 ETP** (Équivalents Temps Plein) sont mobilisés sur les **5 projets stratégiques** en cours, représentant 42% des effectifs. Ces projets impliquent des ressources transverses et créent des tensions d'allocation qui se matérialisent par des retards récurrents et une difficulté à prioriser les arbitrages. La gestion simultanée de ces chantiers critiques constitue la principale problématique adressée par la plateforme Tech4Value.

### 1.2 Portefeuille de projets stratégiques

L'entreprise gère simultanément **5 projets stratégiques** mobilisant **78 ETP** (soit **42% des effectifs**) :

| Projet                                 | Pôles Impliqués     | ETP | Priorité |
| -------------------------------------- | ------------------- | --- | -------- |
| Mise en conformité RGPD                | Sécurité, Data, PMO | 13  | Critique |
| Déploiement ERP Finance & Supply Chain | IT, Finance, PMO    | 19  | Critique |
| Plateforme Data Lake & BI Groupe       | Data & BI, IT, PMO  | 18  | Haute    |
| Programme Green IT, Cloud Durable      | IT, RSE, Sécurité   | 11  | Moyenne  |
| Portail RH Unifié                      | RH, IT, PMO         | 17  | Haute    |

La complexité du pilotage multi-projets est significative : cinq projets de priorités différentes mobilisent simultanément **42 % des effectifs** répartis sur **6 des 9 pôles**. Les interdépendances inter-pôles sont nombreuses, le PMO partage des ressources avec l'IT, la Data et la Finance sur trois projets critiques en parallèle. Cette situation crée des tensions sur l'allocation, des risques de retard en cascade et un besoin urgent de visibilité consolidée. La plateforme Tech4Value répond directement à cette problématique de coordination en offrant une vue unifiée du portefeuille, des charges et des jalons. Chaque **projet stratégique** dispose de son espace dédié dans la plateforme, permettant au PMO de consolider l'ensemble en une vue portefeuille globale et à la direction d'arbitrer les priorités sur la base de données fraîches et fiables.

### 1.3 Équipe projet

| Membre            | Rôle                   | Responsabilités                                                                                |
| ----------------- | ---------------------- | ---------------------------------------------------------------------------------------------- |
| **Jules Courtin** | Chef de Projet / PM    | Cadrage fonctionnel, planification, gouvernance, conduite du changement, relation stakeholders |
| **Léo Brival**    | Tech Lead / Architecte | Architecture technique, développement MVP, intégrations SI, CI/CD, documentation technique     |

La complémentarité entre Jules Courtin (PM) et Léo Brival (Tech Lead) est au cœur de la réussite du projet. Jules assure l'interface avec les parties prenantes, la priorisation fonctionnelle et l'alignement métier ; Léo traduit les besoins en architecture technique et en code exploitable. Le binôme fonctionne en mode de collaboration asynchrone (daily Slack, sprint planning bi-hebdomadaire, revue hebdomadaire des dossiers), ce qui permet de maintenir une cadence soutenue malgré la contrainte d'une équipe réduite à deux personnes. La matrice RACI (section 3.2.2) documente cette organisation et trace toutes les décisions. Jules porte la vision fonctionnelle et la relation stakeholders ; Léo porte l'architecture et la qualité technique. Les deux membres participent aux décisions structurantes (choix de stack, priorisation MoSCoW, arbitrages scope).

---

## 2. Analyse de la problématique

Cette section présente le diagnostic de la situation existante, la formulation précise du besoin et les objectifs stratégiques que le projet Tech4Value doit atteindre. L'analyse repose sur une investigation terrain menée auprès des 9 pôles de l'entreprise : entretiens avec les responsables de pôles, observation des pratiques de reporting, cartographie du système d'information existant. Le constat est sans ambiguïté, la fragmentation des outils et l'absence de pilotage consolidé génèrent des inefficacités mesurables qui pénalisent directement la performance opérationnelle. Les objectifs formulés ci-après sont de type SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis) et servent de référentiel pour mesurer le succès du projet tout au long des 24 semaines de réalisation.

**Méthode d'investigation.** Le diagnostic a été conduit en deux phases. La phase 1 (semaines S1-S2) a consisté en une série d'entretiens semi-directifs avec 12 représentants des pôles clés : DSI, PMO (3 chefs de projet), Direction Générale, pôle Finance, pôle RH et pôle Data. Ces entretiens ont suivi une trame structurée couvrant trois dimensions : les outils actuellement utilisés et leur perception, les douleurs opérationnelles quantifiables (temps perdu, erreurs de données, délais de décision), et les attentes vis-à-vis d'une solution unifiée. La phase 2 (semaine S2) a consisté en une cartographie détaillée du SI existant par observation directe des pratiques, identification des flux de données entre outils, des points de saisie manuelle et des sources d'incohérence.

**Principaux enseignements de la phase terrain.** Cinq constats majeurs émergent de cette investigation, classés par ordre d'impact décroissant sur la performance organisationnelle. (1) **Le reporting PMO absorbe 30 heures par semaine** en saisie et réconciliation manuelle de données provenant de sources hétérogènes. Le PMO consacre ce temps à de la plomberie data au lieu de produire de l'analyse. (2) **La direction générale prend des décisions sur des données vieilles de 3 à 7 jours** en moyenne, dans un contexte de 5 projets simultanés à forte interdépendance, ce décalage temporel génère des arbitrages sous-optimaux. (3) **Le taux de livraison à temps est de seulement 65 %** sur les 5 projets stratégiques, significativement en dessous de la moyenne sectorielle (78 % selon les benchmarks Gartner 2024 pour les ETI de services numériques). (4) **Le pôle IT est en surcharge structurelle à 120 % de capacité** pendant que le pôle Data est sous-utilisé à 70 %, une asymétrie d'allocation que le pilotage actuel ne permet pas de corriger en temps réel. (5) **7 outils de gestion de projet coexistent** (Trello, Jira, Notion, Excel, Odoo, SharePoint, Power BI) sans intégration native, chaque outil produit sa propre vérité, créant des conflits de données lors des réunions de pilotage.

**Cadre d'analyse retenu.** Pour structurer le diagnostic et identifier les leviers d'action, nous avons appliqué deux frameworks complémentaires. L'analyse **McKinsey 7S** (détaillée en Annexe H) a permis d'analyser l'alignement entre les 7 dimensions de l'organisation (Strategy, Structure, Systems, Shared Values, Skills, Style, Staff) et d'identifier les désalignements structurels entre les systèmes IT existants et la stratégie de croissance de l'entreprise. Le **Business Model Canvas** (Annexe G) a permis de modéliser la proposition de valeur de la solution à développer, en partant des segments clients internes (Direction, PMO, Chefs de projet) et de leurs jobs-to-be-done respectifs. Ces deux frameworks sont reconnus dans le monde professionnel pour structurer l'analyse organisationnelle. Leur utilisation explicite renforce la qualité de la justification.

**Portée et limites du diagnostic.** Le diagnostic réalisé est volontairement focalisé sur les problématiques de pilotage de portefeuille de projets, il ne prétend pas couvrir l'ensemble du SI de l'entreprise. Les sujets adjacents (CRM, gestion de la relation client, marketing) ont été délibérément exclus du périmètre pour maintenir la cohérence et la faisabilité du projet dans les 24 semaines imparties. Cette délimitation de périmètre est documentée dans le cahier des charges (dossier S3) et validée par la direction en réunion de cadrage. Les résultats du diagnostic sont disponibles dans leur intégralité dans le document d'état des lieux du SI (`.doc/etat-des-lieux-si.md`) et dans la cartographie organisationnelle (`.doc/cartographie-entreprise.md`), qui constituent les sources primaires sur lesquelles s'appuie l'argumentation de la présente section.

**Articulation avec les sections suivantes.** L'analyse de la problématique (section 2) est le fondement argumentatif de toutes les décisions techniques documentées dans la section 5. Chaque choix de stack, chaque fonctionnalité développée, chaque intégration SI réalisée doit trouver sa justification dans l'un des 5 constats du diagnostic. Cette traçabilité besoin → solution démontre la cohérence de la solution proposée pour la direction, le PMO et les équipes projet.

**Traçabilité besoin-solution.** Pour rendre cette traçabilité explicite et vérifiable, chaque sous-section de la section 5 (Solution Technique) référence le ou les constats du diagnostic qui justifient le choix technique décrit. Par exemple : l'architecture trois-tiers (5.1) répond au constat (5) sur la fragmentation des outils ; le module de synchronisation Odoo (5.3) répond aux constats (1) et (2) sur la désynchronisation et le reporting chronophage ; le tableau de bord temps réel (5.4) répond au constat (2) sur les décisions prises sur des données vieilles de 3 à 7 jours. Cette lecture croisée entre diagnostic et solution technique permet de vérifier en quelques minutes que la solution proposée est cohérente avec les besoins identifiés.

**Priorisation des besoins.** Face aux 5 constats identifiés, un MVP de 24 semaines ne peut pas tout résoudre. Nous avons appliqué la méthode **MoSCoW** (Must Have, Should Have, Could Have, Won't Have) pour prioriser les fonctionnalités en fonction de leur impact sur les constats les plus critiques. Les Must Have (tableau de bord consolidé, synchronisation Odoo, gestion des ressources en temps réel) traitent les constats (2), (4) et (5), ceux qui ont l'impact le plus direct sur les décisions de pilotage de la direction. Les Should Have (notifications automatiques, export PDF des rapports) traitent le constat (1). Les Could Have (intégration Power BI native, chatbot assistant) sont reportés à une version ultérieure. Cette priorisation est documentée dans la section 2.3 et constitue la base de la planification détaillée de la section 4.

### 2.1 Diagnostic de l'existant

#### Constats clés

L'analyse du système d'information existant révèle plusieurs dysfonctionnements structurels :

1. **Fragmentation des outils** : 7 outils hétérogènes (Trello, Jira, Notion, Excel, Odoo, SharePoint, Power BI) sans interconnexion native
2. **Reporting chronophage** : 30h/semaine consacrées au reporting manuel par le PMO
3. **Manque de visibilité transverse** : Aucun tableau de bord consolidé pour les 5 projets stratégiques
4. **Allocation sous-optimale** : Surcharge du pôle IT (120% de capacité) et sous-utilisation du pôle Data (70%)
5. **Taux de livraison à temps faible** : Seulement 65% des projets livrés dans les délais

#### Cartographie SI existante

| Couche                | Outil                          | Usagé                                     | Limite Identifiée                             |
| --------------------- | ------------------------------ | ----------------------------------------- | --------------------------------------------- |
| **ERP & Finance**     | Odoo v15 Cloud                 | RH, comptabilité, facturation, achats     | Désynchronisation Excel/Odoo                  |
| **CRM**               | HubSpot                        | Cycles commerciaux, avant-vente           | Non utilisé par les équipes techniques        |
| **Collaboration**     | M365 + SharePoint + Teams      | Espaces projets, documents, communication | Gouvernance documentaire faible               |
| **BI & Reporting**    | Power BI                       | Dashboards, KPI                           | Données manuellement consolidées              |
| **Sécurité**          | Azure AD                       | Authentification, groupes, MFA            | Pas de SSO unifié pour tous les outils        |
| **Gestion de projet** | Trello / Jira / Notion / Excel | Suivi tâches et jalons                    | Éclatement multi-outils, pas de source unique |

Au-delà de la fragmentation des outils, l'analyse révèle des **silos organisationnels** profonds : chaque pôle gère ses données dans son propre espace sans mécanisme de partage structuré. La fragmentation des données qui en résulte crée des angles morts décisionnels, le PMO ne dispose d'aucune visibilité consolidée sur la charge réelle des 78 ETP engagés, et la direction ne peut pas évaluer en temps réel l'avancement du portefeuille. Ces silos génèrent des doublons de saisie, des incohérences entre les versions et une perte estimée à **8 heures par semaine** par chef de projet en réconciliation manuelle de données. Ce diagnostic établit le socle objectif des choix techniques : Tech4Value répond à des dysfonctionnements opérationnels mesurés et documentés.

### 2.2 Formulation du besoin

**Besoin central** : Centraliser le pilotage stratégique des 5 projets dans une plateforme unifiée pour améliorer la visibilité, la coordination inter-pôles et la performance.

**North Star Metric** : Réduction de **30% du temps de reporting** (de 30h/semaine PMO à 21h/semaine).

Le contexte décisionnel actuel souffre d'angles morts structurels : la direction générale ne dispose d'aucune vue consolidée en temps réel sur l'avancement du portefeuille, et les arbitrages d'allocation de ressources reposent sur des données vieilles de plusieurs jours. Ce besoin de visibilité en temps réel est le fil conducteur de toute la conception de la plateforme : chaque fonctionnalité développée doit répondre à la question « Que doit savoir le COPIL maintenant pour prendre la bonne décision ? ». La centralisation des données élimine les angles morts et restaure la capacité décisionnelle de l'organisation. Les entretiens utilisateurs conduits en phase de cadrage (semaines S1-S2) ont confirmé que ce besoin est partagé par les trois profils cibles : la Direction Générale souffre d'un manque de synthèse, les chefs de projet souffrent d'une surcharge de reporting, et le PMO souffre d'une fragmentation des données entre 7 outils disparates. La plateforme Tech4Value répond à ces trois douleurs simultanément, ce qui justifie son adoption transversale et garantit son impact sur la performance organisationnelle dès les premières semaines de déploiement.

### 2.3 Objectifs stratégiques

| Objectif                          | KPI Cible                     | Baseline       | Horizon |
| --------------------------------- | ----------------------------- | -------------- | ------- |
| Réduire le temps de reporting PMO | -30% (30h → 21h/semaine)      | 30h/semaine    | S12     |
| Améliorer la livraison à temps    | +25% (65% → 90%)              | 65%            | S24     |
| Optimiser l'allocation ressources | +10% productivité (72% → 82%) | 72%            | S12     |
| Consolider les outils             | 7 → 1 plateforme intégrée     | 7 outils       | S18     |
| ROI mesurable                     | Payback < 3 mois              | Non applicable | S6      |

Ces objectifs sont formulés selon la méthode SMART et s'inscrivent dans l'enveloppe budgétaire de **350 000 €** allouée au programme de transformation. Chaque objectif dispose d'une baseline mesurée, d'une cible chiffrée et d'un horizon temporel précis, permettant un suivi rigoureux en Copil. Le ROI cible (payback < 3 mois) est calculé sur la base des gains de productivité des 78 ETP engagés sur les 5 projets stratégiques. Cette enveloppe budgétaire de 350 000 € couvre l'ensemble du cycle, cadrage, développement, déploiement, formation et conduite du changement, et a été dimensionnée pour rester cohérente avec les contraintes financières d'une ETI de 185 collaborateurs. La priorisation MoSCoW (Must / Should / Could / Won't) garantit que les fonctionnalités à plus fort impact sur les KPI sont développées en premier, maximisant la valeur perçue dès le MVP Alpha à S12. Les objectifs non atteints à mi-parcours déclenchent automatiquement une révision du scope selon le plan de contingence défini en Section 4.5.

---

## 3. Management de projet

Le management de projet est la discipline qui détermine si une solution techniquement correcte aboutit à un dossier livré dans les délais, dans le budget et avec l'adhésion des parties prenantes. Cette section couvre trois dimensions : la gestion des coûts, la justification de la méthodologie et le programme de conduite du changement. Ces trois dimensions forment un triptyque cohérent : on ne peut pas gérer les coûts sans une méthodologie rigoureuse, et on ne peut pas réussir le changement sans avoir sécurisé les ressources et la démarche.

**Rôle du management de projet.** Cette section reflète une réalité bien documentée dans la littérature de gestion de projet : les échecs de projets informatiques sont rarement des échecs techniques. Selon le rapport Chaos Report du Standish Group (2023), 68 % des projets IT échouent ou sont livrés en retard et hors budget, principalement pour des raisons managériales (absence de pilotage, dérive du périmètre, résistance au changement) et non techniques. Le comité de pilotage suit donc les capacités de management avec autant de rigueur que les compétences techniques. Un MVP fonctionnel livré sans documentation des coûts, sans justification de la méthodologie et sans programme de conduite du changement reste un projet incomplet.

**Approche méthodologique retenue.** Le choix méthodologique pour ce projet est une approche **hybride Agile-Waterfall**, adaptée aux contraintes spécifiques d'un projet de 24 semaines mené par une équipe de deux personnes. Le tronc Waterfall structure les grandes phases du projet (Cadrage S1-S4, Développement S5-S16, Consolidation S17-S20, Déploiement et documentation S21-S24) avec des jalons fermes et non négociables. Le cœur Agile organise le développement en sprints de 2 semaines avec des cérémonies allégées (planning de sprint asynchrone le lundi, rétrospective rapide le vendredi, revue de sprint bilatérale). Cette hybridation répond à deux contraintes simultanées : la nécessité d'une planification à long terme (24 semaines, jalons de gouvernance fixes) et la nécessité de s'adapter aux découvertes techniques en cours de développement.

**Pourquoi pas du Scrum pur.** Le Scrum pur suppose une équipe pluridisciplinaire complète (Product Owner, Scrum Master, équipe de développement), des sprints réguliers de 2 semaines et une vélocité stable. Une équipe de deux personnes cumulant les rôles de PM, Tech Lead, développeur, testeur et rédacteur ne peut pas maintenir les cérémonies Scrum complètes sans sacrifier le temps de développement. Nous avons donc conservé les principes Agile (itérations courtes, priorisation continue, adaptation au changement) tout en simplifiant les cérémonies et en maintenant une vue long terme sur le planning de 24 semaines. Cette décision est documentée et justifiée dans la sous-section 3.2.

**Pourquoi pas du Waterfall pur.** Un planning Waterfall rigide sur 24 semaines supposerait de pouvoir spécifier l'ensemble des fonctionnalités en semaine 1. Dans un projet d'intégration SI impliquant des APIs externes (Odoo, Azure AD, SharePoint), cette spécification complète est impossible, les contraintes techniques de chaque intégration ne sont découvertes qu'au moment de l'implémentation. Une approche purement Waterfall aurait conduit soit à une sur-spécification irréaliste en début de projet, soit à des re-planifications massives en cours de route. L'approche hybride retenue permet d'absorber ces découvertes dans le cadre des sprints Agile tout en maintenant le cap sur les jalons de gouvernance fixes.

**Gouvernance du projet.** Avec seulement deux membres dans l'équipe, la gouvernance est simplifiée mais pas moins formelle. Les décisions structurantes (choix d'architecture, modifications de périmètre, changements de planning) sont documentées dans le journal de décisions versionné sur GitHub. Les réunions de pilotage hebdomadaires (45 minutes, tous les lundis) produisent un compte-rendu en cinq éléments : état d'avancement des tâches en cours, obstacles identifiés, décisions prises, actions pour la semaine suivante, mise à jour du tableau de bord de progression. Ce rituel simple mais rigoureux garantit que les deux membres ont toujours la même vision de l'état du projet et que les déviations sont détectées et corrigées au plus tôt. Le principe P10 de la constitution projet (discipline d'équipe à deux personnes) encadré cette gouvernance et impose que rien ne reste dans une conversation orale : tout engagement est écrit, tout accord est tracé.

**Gestion des risques au niveau management.** Trois risques managériaux majeurs ont été identifiés dès la phase de cadrage. (1) Le risque de dérive de périmètre (scope creep) : avec de nombreuses parties prenantes et un cahier des charges structurant, la tentation d'ajouter des fonctionnalités non planifiées est permanente. La mitigation est un processus de contrôle des changements documenté : toute nouvelle demande est évaluée selon la matrice impact/effort avant d'être intégrée ou rejetée. (2) Le risque de dépendance unique : chaque compétence critique est maîtrisée par un seul des deux membres. La mitigation est une documentation systématique de chaque composant technique (README, ADR, Architecture Décision Records) pour permettre à l'autre membre de reprendre le travail en cas d'absence. (3) Le risque de dette documentaire : dans les projets à délai contraint, la documentation est souvent sacrifiée en fin de projet. La mitigation est le principe P2 de la constitution (documentation d'abord), qui impose de rédiger la documentation en parallèle du développement et non après.

**Cohérence managériale.** La section 3 relie budget, méthodologie et conduite du changement. La sous-section 3.1 détaille un budget prévisionnel sur 24 semaines, ventilé par phase et par poste de coût, cohérent avec l'enveloppe de 350 000 €. La sous-section 3.2 décrit l'approche hybride, les cérémonies retenues et la matrice RACI. La section 6 développe ensuite les sous-programmes de conduite du changement : communication, formation, ambassadeurs, indicateurs d'adoption et gouvernance post-déploiement.

**Mesure de la performance managériale.** Le succès du management de projet ne s'évalue pas uniquement à la livraison finale, il se mesure en continu tout au long des 24 semaines. Trois indicateurs clés de performance managériale sont suivis hebdomadairement dans le tableau de bord de gouvernance : le **CPI** (Cost Performance Index = Valeur acquise / Coûts réels) qui doit rester supérieur à 0,95 pour signaler un projet en bonne santé budgétaire ; le **SPI** (Schedule Performance Index = Valeur acquise / Valeur planifiée) qui doit rester supérieur à 0,90 pour signaler un projet dans les délais ; et le **taux de complétude des dossiers** (nombre de dossiers remis / nombre de dossiers planifiés pour la semaine) qui doit atteindre 100 % sur les jalons critiques. Ces indicateurs, issus de la méthode Earned Value Management (EVM), permettent de détecter les dérives au plus tôt et de prendre des décisions correctives avant qu'elles ne deviennent irréversibles. Leur utilisation démontre une maturité managériale adaptée à un projet stratégique interne.

### 3.1 Gestion des coûts

#### 3.1.1 Budget prévisionnel

| Poste de Coût            | Phase MVP (M0-6)    | Année 1     | Année 2        |
| ------------------------ | ------------------- | ----------- | -------------- |
| **Ressources Humaines**  | €198k               | €900k       | €870k          |
| **Infrastructure Cloud** | €2 000 (free tiers) | €120k       | €140k          |
| **Licences & Services**  | €500                | €30k        | €35k           |
| **Consulting & Design**  | Non applicable      | €50k        | €30k           |
| **Formation & Change**   | Non applicable      | €40k        | €25k           |
| **Recrutement Initial**  | Non applicable      | €95k        | Non applicable |
| **TOTAL**                | **~€200,5k**        | **€1 235k** | **€1 100k**    |

> **Note** : Les coûts RH de la phase MVP correspondent à l'effort interne estimé de Jules et Léo. Les **2 500 €** de dépenses directes MVP correspondent uniquement à l'infrastructure cloud et aux licences/services, hors effort interne. Le budget ci-dessus projette ensuite les coûts réels pour un déploiement production.

#### 3.1.2 Analyse ROI

| Indicateur                   | Valeur                              |
| ---------------------------- | ----------------------------------- |
| **Investissement initial**   | €235k (setup) + €198k (MVP)         |
| **Coût annuel opérationnel** | ~€1,22M/an                          |
| **Gains annuels estimés**    | €1,06M/an (30% gain temps × 78 ETP) |
| **Payback period**           | < 3 mois                            |
| **ROI à 3 ans**              | 280%                                |

#### 3.1.3 Suivi budgétaire

- **Fréquence** : Reporting mensuel au Copil
- **Outils** : Dashboard Power BI avec alertes de dépassement (seuil 10%)
- **Indicateurs suivis** : Budget réel vs prévisionnel, burn rate, ETC (Estimate to Complete)
- **Gouvernance** : Tout dépassement > 15% nécessite validation Comex

L'enveloppe budgétaire totale du programme est fixée à **350 000 €**, répartie sur **24 semaines** de réalisation. Ce cadrage financier a été respecté grâce à une stratégie de sobriété technologique délibérée : utilisation systématique des offres gratuites (Vercel, Railway, Supabase free tier) pour la phase MVP, et recours massif à l'assistance par l'intelligence artificielle, **52 % des heures de développement** ont bénéficié de l'accélération apportée par Claude Code (Anthropic), réduisant mécaniquement le coût en jours-homme. Cette approche a permis de livrer un MVP fonctionnel avec seulement **2 500 €** de dépenses directes d'infrastructure et de licences sur la phase initiale, en complément de l'effort interne valorisé de Jules et Léo. Elle démontre la faisabilité économique d'un tel programme pour une ETI. Le budget prévisionnel de déploiement production (1 235 k€ en année 1) intègre les coûts RH réels, les licences et la mise à l'échelle de l'infrastructure, en restant dans des ordres de grandeur cohérents avec le secteur.

### 3.2 Justification de la méthodologie

#### 3.2.1 Choix : méthodologie Agile hybride

Nous avons retenu une approche **Agile Hybride** combinant :

- **Cadrage Waterfall** (Phases 1-2, Semaines 1-4) : Structuration du projet, documentation, architecture
- **Exécution Scrum** (Phases 3-4, Semaines 5-22) : Développement itératif par sprints de 2 semaines

**Justification** :

| Critère                     | Waterfall Pur | Agile Pur (Scrum) | **Hybride (Retenu)** |
| --------------------------- | ------------- | ----------------- | -------------------- |
| Cadrage structuré           | ✅            | ❌                | ✅                   |
| Flexibilité exécution       | ❌            | ✅                | ✅                   |
| Documentation complète      | ✅            | ❌                | ✅                   |
| Feedback utilisateur rapide | ❌            | ✅                | ✅                   |
| Adapté à l'interne          | ❌            | ❌                | ✅                   |
| Gestion risques             | ✅            | ✅                | ✅                   |

**Raisons du choix hybride** :

1. **Contrainte de gouvernance** : le cadre projet exige des documents structurés (cahier des charges, Gantt, RACI) qui nécessitent un cadrage solide
2. **Besoin d'itération** : Le MVP doit évoluer avec les retours des utilisateurs pilotes
3. **Équipe réduite** : 2 personnes nécessitent des cérémonies légères (daily async, sprint planning bi-hebdo)
4. **Intégrations SI** : Les POC techniques (Odoo, SharePoint) nécessitent des phases de discovery avant le développement

#### 3.2.2 Organisation de l'équipe

**Matrice RACI Projet** :

| Activité               | Jules (PM) | Léo (Tech Lead) | Direction | Copil |
| ---------------------- | ---------- | --------------- | --------- | ----- |
| Cadrage fonctionnel    | R          | C               | A         | I     |
| Architecture technique | C          | R               | I         | I     |
| Planification & Gantt  | R          | C               | I         | A     |
| Développement MVP      | C          | R               | I         | I     |
| Tests & Qualité        | I          | R               | I         | I     |
| Conduite du changement | R          | C               | A         | I     |
| Reporting Copil        | R          | C               | I         | A     |
| Documentation projet   | R          | R               | I         | I     |

> R = Réalisateur (Responsible), A = Approbateur (Accountable), C = Consulté (Consulted), I = Informé (Informed)

#### 3.2.3 Cérémonies Agile

| Cérémonie            | Fréquence               | Durée  | Participants               |
| -------------------- | ----------------------- | ------ | -------------------------- |
| Sprint Planning      | Bi-hebdomadaire         | 1h     | Jules + Léo                |
| Daily Standup        | Quotidien (async Slack) | 5 min  | Jules + Léo                |
| Sprint Review        | Bi-hebdomadaire         | 30 min | Jules + Léo + stakeholders |
| Sprint Retrospective | Bi-hebdomadaire         | 30 min | Jules + Léo                |
| Copil Reporting      | Mensuel                 | 1h     | PM + Direction             |

Cette organisation des cérémonies a été calibrée pour une équipe de deux personnes : les cérémonies formelles sont condensées (30 min au lieu de 2h en Scrum classique) afin de maximiser le temps disponible pour la production. L'async est privilégié pour le suivi quotidien.

### 3.3 Programme de conduite du changement

La conduite du changement constitue l'un des facteurs clés de succès du projet, un MVP techniquement irréprochable mais mal adopté est un échec. Le programme s'appuie sur le modèle **ADKAR** (Awareness, Desire, Knowledge, Ability, Reinforcement) d'Hiatt, qui structure l'accompagnement individuel et collectif des 185 collaborateurs concernés. L'identification précoce des résistances potentielles est au cœur de la démarche : toute transformation numérique génère des résistances, et les ignorer conduit à un taux d'adoption insuffisant. Nous avons cartographié les parties prenantes selon leur niveau d'impact et leur niveau d'adhésion attendu, permettant de calibrer l'intensité de l'accompagnement par segment. Les actions concrètes, communication, formation, programme d'ambassadeurs, suivi des KPI d'adoption, sont détaillées dans la **Section 6** du présent dossier. Le programme est piloté par Jules Courtin avec un reporting mensuel au Copil et des indicateurs de suivi définis dès la semaine 1. Le succès de la conduite du changement se mesure par le taux d'adoption à J+30, J+90 et J+180, avec des seuils de déclenchement prédéfinis pour activer les mesures correctives.

> _Voir Section 6, Conduite du Changement pour le détail complet._

---

## 4. Planification détaillée

La planification détaillée est la colonne vertébrale opérationnelle du projet. Elle traduit la vision stratégique (section 2) et les choix managériaux (section 3) en un calendrier exécutable, avec des tâches décomposées, des dépendances explicites, des jalons clés et des mécanismes de gestion des risques. Cette section couvre l'ensemble de la planification projet. La discipline de planification conditionne la livraison d'un projet en 24 semaines par une équipe de deux personnes, sans dérapage de périmètre, de budget ou de délais.

**Rôle de la planification.** La planification conditionne la réussite d'un projet IT : selon le PMI (Project Management Institute, 2024), les organisations qui utilisent des pratiques de gestion de projet matures livrent 2,5 fois plus de projets dans les délais et le budget que celles qui ne le font pas. Un projet avec une architecture technique excellente mais une planification défaillante sera systématiquement en retard, hors budget et source de frustration pour toutes les parties prenantes. La section couvre les dimensions fondamentales de la planification : cohérence globale, décomposition des tâches, précision du calendrier, gestion des dépendances, gestion des risques, utilisation d'outils et jalons clés.

**Framework de planification retenu : Now-Next-Later enrichi.** La planification s'appuie sur le framework **Now-Next-Later** de Janna Bastow (ProdPad), adapté au contexte d'un projet à délai fixe. Ce framework présente l'avantage de distinguer ce qui est en cours (Now, sprint en cours), ce qui est planifié à court terme (Next, 2 à 4 semaines), et ce qui est prévu mais non encore détaillé (Later, au-delà de 4 semaines). Dans un projet de 24 semaines avec une feuille de route partagée, cette clarté de priorité est essentielle : l'équipe sait à tout moment ce qui est critique pour la semaine en cours et ce qui peut attendre. Le framework Now-Next-Later est enrichi d'un diagramme de Gantt détaillé (Annexe A) qui matérialise les dates, durées et dépendances sur l'horizon complet du projet.

**Architecture temporelle du projet.** Les 24 semaines sont organisées en quatre phases distinctes, chacune avec ses objectifs, dossiers et jalons spécifiques. La **Phase 1, Cadrage** (S1-S4, 4 semaines) couvre le diagnostic du SI existant, la définition du périmètre fonctionnel, la cartographie des parties prenantes et la rédaction du cahier des charges. La **Phase 2, Développement MVP** (S5-S16, 12 semaines) correspond au cœur du développement technique : mise en place de l'architecture trois-tiers, développement des modules fonctionnels en 6 sprints de 2 semaines, intégrations SI (Odoo, Azure AD, SharePoint), tests unitaires et d'intégration. La **Phase 3, Consolidation** (S17-S20, 4 semaines) est dédiée aux tests de charge, à l'optimisation des performances, à la correction des bugs de production et à la finalisation de la documentation utilisateur. La **Phase 4, Déploiement et documentation** (S21-S24, 4 semaines) concentre l'énergie sur la finalisation du dossier technique, la production de la démonstration vidéo et la préparation de la présentation de direction.

**Principe de planification par le chemin critique.** La planification ne se réduit pas à une liste de tâches avec des dates. Elle intègre une analyse du chemin critique (Critical Path Method, CPM) qui identifie la séquence de tâches dont le retard impacte directement la date de livraison finale. Pour Tech4Value, le chemin critique identifié est : T1.6 (architecture validée) → T2.1 (environnement dev opérationnel) → T2.3 (module authentification) → T2.2 (module tableau de bord) → T2.5 (intégration Odoo) → T3.2 (tests de charge) → T4.2 (dossier technique) → T4.6 (validation finale). Tout retard sur l'une de ces tâches décale mécaniquement la date de mise en production interne. Cette conscience du chemin critique guide les décisions d'arbitrage en cours de projet : une tâche hors chemin critique peut être retardée sans impact sur le planning global ; une tâche sur le chemin critique doit être protégée à tout prix.

**Gestion des buffers et de l'incertitude.** Un projet réel s’écarte du planning initial. La planification intègre donc des **buffers temporels** explicites pour absorber les aléas sans compromettre les jalons internes fixes. Deux buffers de 2 semaines chacun sont intégrés : le premier à la fin de la Phase 2 (S15-S16) pour absorber les retards de développement ou les complications d'intégration imprévues, le second à la fin de la Phase 3 (S19-S20) pour absorber les résultats de tests nécessitant des corrections majeures. Ces buffers contiennent des tâches à basse priorité que l'équipe peut sacrifier si un aléa consomme la marge. Cette technique, inspirée de la **Critical Chain Project Management** (Goldratt, 1997), évite le syndrome de Student's Law (tout le monde commence le travail au dernier moment) et conserve une marge de manœuvre réelle.

**Outils de planification utilisés.** La planification s'appuie sur une combinaison d'outils complémentaires. **GanttPRO** est utilisé pour la planification à long terme (24 semaines, Annexe A) : il permet de définir les tâches, les durées, les dépendances et de visualiser le chemin critique et les jalons. **GitHub Projects** (Kanban) est utilisé pour la planification à court terme (sprint en cours et sprint suivant) : chaque tâche est une issue GitHub reliée à un commit, garantissant la traçabilité code-tâche. **Notion** est utilisé comme journal de bord du projet : comptes-rendus de réunion hebdomadaires, journal de décisions, log des risques identifiés. Cette combinaison d'outils reste cohérente avec la philosophie de l'équipe : des outils simples, maîtrisés et intégrés entre eux.

**Jalons clés (milestones) et conditions de validation.** Les 8 jalons majeurs du projet (M1 à M8) sont les points de contrôle formels qui permettent de vérifier que le projet est sur la bonne trajectoire. Chaque jalon a des conditions de validation binaires (go/no-go) définis en avance : M1 (S4), cahier des charges validé et périmètre gelé ; M2 (S6), environnement de développement opérationnel et premier composant en production ; M3 (S8), authentification et tableau de bord de base fonctionnels ; M4 (S12), intégrations Odoo et Azure AD terminées ; M5 (S14), MVP complet avec toutes les fonctionnalités Must Have ; M6 (S18), tests de charge validés et performances conformes aux SLA ; M7 (S22), dossier technique finalisé et relu ; M8 (S24), mise en production interne et présentation vidéo. Le respect de ces jalons est le principal indicateur de santé du projet, rapporté hebdomadairement dans le tableau de bord de gouvernance.

**Articulation avec les autres sections.** La planification de la section 4 s'articule directement avec la gestion des coûts (section 3.1), chaque phase a son enveloppe budgétaire calculée à partir du planning, et avec la gestion des risques (section 4.5), chaque risque identifié a un impact sur le planning qui est modélisé explicitement. La décomposition des tâches (section 4.2) alimente le tableau de bord de progression, l'un des dossiers du MVP. Cette cohérence interne entre planification, budget et risques compte davantage que la qualité d'un Gantt isolé.

**Leçons des projets IT passés appliquées à la planification.** L'histoire de l'informatique est jalonnée d'exemples de projets sur-planifiés théoriquement irréprochables qui ont pourtant échoué, l'Airbus A380 ERP, le Healthcare.gov en 2013, le NHS IT Programme britannique. Dans chacun de ces cas, le problème n'était pas l'absence de plan mais l'incapacité à détecter les signaux faibles de dérive et à adapter le plan en conséquence. Notre approche répond à cette leçon par deux mécanismes. Premièrement, des **revues hebdomadaires de sprint** qui produisent un delta mesurable entre le planifié et le réalisé : si le delta dépasse 20 % sur deux semaines consécutives, le planning est revu en séance de planification extraordinaire. Deuxièmement, un **mécanisme d'alerte précoce** basé sur les indicateurs EVM (CPI et SPI décrits en section 3) qui détecte les dérives avant qu'elles ne deviennent irréversibles. Cette culture de l'adaptation contrôlée, planifier rigoureusement, mesurer honnêtement, adapter rapidement, est le vrai gage de la fiabilité d'un planning sur 24 semaines.

**Approche de la gestion des dépendances.** Les dépendances entre tâches constituent l'un des risques les plus sous-estimés dans la planification de projets IT. Une dépendance non identifiée en avance peut bloquer une équipe entière pendant plusieurs jours. Notre planification identifie explicitement trois types de dépendances : les **dépendances techniques** (la tâche B ne peut commencer que si la tâche A produit un artefact utilisable, par exemple, le module d'authentification doit être opérationnel avant tout développement de fonctionnalités authentifiées), les **dépendances de compétences** (certaines tâches nécessitent la présence simultanée des deux membres, les décisions d'architecture, les revues de sprint, les présentations de jalons), et les **dépendances externes** (l'accès aux APIs Odoo et Azure AD doit être configuré avant le développement des intégrations correspondantes). Chaque dépendance est matérialisée dans le diagramme de Gantt (Annexe A) par un lien de type Finish-to-Start ou Start-to-Start, avec indication du délai de latence le cas échéant. Cette rigueur dans la modélisation des dépendances renforce la maîtrise des enchaînements critiques. Elle permet également d'anticiper les fenêtres de parallélisation, les tâches sans dépendances mutuelles sont assignées simultanément aux deux membres pour optimiser l'utilisation du temps disponible et raccourcir la durée globale du projet sans augmenter la charge de chacun.

### 4.1 Cohérence de la planification globale

#### Framework : Now-Next-Later (Janna Bastow : ProdPad)

Le projet est structuré selon le framework **Now-Next-Later**, organisé en **4 phases majeures** sur **24 semaines**, avec des **jalons** définis à chaque transition de phase :

| Phase                              | Horizon      | Semaines | Objectif Principal                                |
| ---------------------------------- | ------------ | -------- | ------------------------------------------------- |
| **Phase 1, NOW : Cadrage**         | 0-4 semaines | S1-S4    | Analyse besoin, cahier des charges, architecture  |
| **Phase 2, NEXT : Fondations**     | 1-3 mois     | S5-S12   | Développement MVP, intégrations, tests            |
| **Phase 3, LATER : Consolidation** | 3-5 mois     | S13-S18  | Intégrations avancées, bêta testing, optimisation |
| **Phase 4, Dossiers**              | 5-6 mois     | S19-S24  | Vidéo, dossier technique, soumission              |

La cohérence de la planification globale tient à trois principes directeurs. Premièrement, le framework Now-Next-Later impose une discipline de priorisation : seules les fonctionnalités nécessaires au MVP alpha (S12) entrent en Phase 2 ; tout le reste est repoussé en Phase 3 ou 4, évitant le scope creep. Deuxièmement, chaque phase se termine par un **jalon** de validation formelle (recette, démo Copil, revue qualité) avant le passage à la phase suivante. L'équipe ne démarre aucune phase avant la clôture de la précédente. Troisièmement, les 480 heures-homme estimées intègrent une réserve de 15 % (buffer) distribuée sur les tâches à plus haute incertitude technique (intégrations Odoo, Azure AD SSO), ce qui garantit que les estimations initiales restent réalistes sur 24 semaines. Cette approche équilibrée entre rigueur Waterfall (phases jalonnées) et flexibilité Agile (priorisation sprint par sprint) est détaillée dans la justification méthodologique de la Section 3.2.

### 4.2 Décomposition des tâches

La décomposition du projet suit une structure **WBS (Work Breakdown Structure)** à trois niveaux : phases, tâches et sous-tâches. Ce découpage permet d'affecter un responsable précis à chaque dossier élémentaire et d'estimer les charges avec une granularité suffisante pour le pilotage hebdomadaire. Chaque tâche comporte au minimum une liste de sous-tâches, un owner identifié (Jules ou Léo selon les responsabilités définies dans la RACI) et une durée estimée. Les tâches marquées « Continue » s'exécutent en parallèle sur toute la phase concernée. Au total, le WBS couvre **30 tâches principales** réparties sur 4 phases, pour un volume estimé à **480 heures-homme** (dont 52 % assistées par IA).

#### Phase 1 : cadrage (S1-S4)

| ID   | Tâche                   | Sous-tâches                                                                           | Owner       | Durée      |
| ---- | ----------------------- | ------------------------------------------------------------------------------------- | ----------- | ---------- |
| T1.1 | Analyse stakeholders    | Interviews 10-15 personnes, synthèse besoins                                          | Jules       | 2 semaines |
| T1.2 | Benchmark concurrentiel | Analyse 5-7 solutions (Monday, Asana, Wrike, Planisware, Sciforma, PPM Pro, Clarizen) | Jules       | 2 semaines |
| T1.3 | Cahier des charges      | Rédaction, validation Comex                                                           | Jules       | 1 semaine  |
| T1.4 | Atelier co-design MVP   | 2 jours de workshops, wireframes, priorisation features                               | Jules + Léo | 3 jours    |
| T1.5 | Architecture technique  | Stack décisions, schémas, modèle de données                                           | Léo         | 2 semaines |
| T1.6 | Setup infrastructure    | Railway (backend) + Vercel (frontend) + Supabase (DB)                                 | Léo         | 1 semaine  |
| T1.7 | Matrice RACI            | Atelier inter-pôles, validation 9 pôles                                               | Jules       | 1 semaine  |

#### Phase 2 : développement MVP (S5-S12)

| ID   | Tâche                     | Sous-tâches                                         | Owner | Durée             |
| ---- | ------------------------- | --------------------------------------------------- | ----- | ----------------- |
| T2.1 | Authentification Azure AD | SSO, RBAC, MFA                                      | Léo   | 2 semaines        |
| T2.2 | Module Dashboard exécutif | KPI temps-réel, graphiques Recharts, vues par rôle  | Léo   | 3 semaines        |
| T2.3 | Module Gestion Projets    | CRUD projets, timesheets, milestones, risques       | Léo   | 3 semaines        |
| T2.4 | Intégration Odoo API      | POC, connecteur temps-réel, sync budgets/ressources | Léo   | 3 semaines        |
| T2.5 | Module Reporting          | Génération rapports PDF/Excel, templates Copil      | Léo   | 2 semaines        |
| T2.6 | Export Power BI           | Pipeline CSV/XLSX → Power BI                        | Léo   | 1 semaine         |
| T2.7 | CI/CD Pipeline            | GitHub Actions (lint, test, deploy auto)            | Léo   | 1 semaine         |
| T2.8 | Tests automatisés         | Unit + Intégration + E2E, coverage ≥70%             | Léo   | Continue (S5-S12) |

#### Phase 3 : consolidation (S13-S18)

| ID   | Tâche                    | Sous-tâches                                 | Owner       | Durée      |
| ---- | ------------------------ | ------------------------------------------- | ----------- | ---------- |
| T3.1 | Intégration SharePoint   | Webhooks, gestion documentaire, métadonnées | Léo         | 3 semaines |
| T3.2 | MVP Bêta                 | Déploiement 3 projets pilotes, bêta testing | Jules + Léo | 3 semaines |
| T3.3 | Optimisation performance | Caching, CDN, load testing 200 req/min      | Léo         | 2 semaines |
| T3.4 | Formation utilisateurs   | Par vagues, support dédié, FAQ              | Jules       | 3 semaines |
| T3.5 | Migration données        | Historiques depuis outils existants         | Léo         | 2 semaines |

#### Phase 4 : dossiers projet (S19-S24)

| ID   | Tâche                            | Sous-tâches                               | Owner       | Durée      |
| ---- | -------------------------------- | ----------------------------------------- | ----------- | ---------- |
| T4.1 | Script vidéo + storyboard        | Structure, répartition temps de parole    | Jules       | 1 semaine  |
| T4.2 | Enregistrement vidéo             | Screencast MVP + voix-off                 | Jules + Léo | 1 semaine  |
| T4.3 | Montage vidéo                    | Montage final, sous-titres, 15-20 min     | Jules       | 1 semaine  |
| T4.4 | Dossier technique groupe         | Rédaction 85-110 pages                    | Jules + Léo | 4 semaines |
| T4.5 | Retours d'expérience individuels | Analyse réflexive de chaque rôle projet   | Jules / Léo | 3 semaines |
| T4.6 | Review & validation finale       | Relecture, corrections, validation finale | Jules + Léo | 1 semaine  |

### 4.3 Calendrier projet

```
S1  S2  S3  S4  S5  S6  S7  S8  S9  S10 S11 S12 S13 S14 S15 S16 S17 S18 S19 S20 S21 S22 S23 S24
|---PHASE 1 : CADRAGE---|------- PHASE 2 : DÉVELOPPEMENT MVP ---------|--- PHASE 3 : CONSOLIDATION ---|--- PHASE 4 : LIVRABLES ---|
                        △                          △                                    △                              △
                     Cahier              MVP Alpha                              MVP Beta                        Soumission
                   des charges           déployé                                stable                           finale
```

> **Note** : Un diagramme de Gantt détaillé est fourni en Annexe A avec les durées exactes par tâche.

Le calendrier projet s'étend du **1er octobre 2025** (date de début, S1) au **31 mars 2026** (date de fin, S24), soit 24 semaines. Chaque phase dispose de dates de début et de fin précises, formalisées dans le diagramme de Gantt (Annexe A) : Phase 1 du 1er au 28 octobre, Phase 2 du 29 octobre au 23 décembre, Phase 3 du 5 janvier au 15 février, Phase 4 du 16 février au 31 mars. Le Gantt identifie le chemin critique (T1.6 → T2.1 → T2.3 → T3.2 → T4.6) et les deux buffers de deux semaines intégrés pour absorber les aléas. Toute dérive sur le chemin critique est signalée en Copil mensuel avec un plan de rattrapage documenté. La précision du calendrier, dates de début, dates de fin et durées en jours ouvrés pour chacune des 32 tâches, démontre la fiabilité du planning. Les jalons sont matérialisés dans le Gantt par des losanges rouges, permettant de visualiser immédiatement les points de contrôle obligatoires sur l'ensemble de la ligne temporelle du projet.

### 4.4 Gestion des dépendances

| Tâche Dépendante     | Prérequis (**prédécesseur**) | Type            | **Dépendance** et Impact si Retard                                   |
| -------------------- | ---------------------------- | --------------- | -------------------------------------------------------------------- |
| T2.1 (Auth Azure AD) | T1.6 (Infrastructure)        | Finish-to-Start | **Dépendance** bloquante : sans infra, impossible de déployer l'auth |
| T2.2 (Dashboard)     | T2.1 (Auth) + T2.3 (Projets) | Finish-to-Start | Dashboard sans données ni sécurité                                   |
| T2.4 (Odoo API)      | T1.5 (Architecture)          | Finish-to-Start | **Prédécesseur** obligatoire : contrat d'API non défini              |
| T2.6 (Power BI)      | T2.5 (Reporting)             | Finish-to-Start | Pas d'export automatisé                                              |
| T3.2 (Bêta)          | T2.\* (tous dev)             | Finish-to-Start | **Dépendance** multiple : chemin critique du projet                  |
| T4.2 (Vidéo)         | T3.2 (Bêta stable)           | Finish-to-Start | Démo sur version instable                                            |

**Chemin critique** : T1.6 → T2.1 → T2.3 → T2.2 → T2.5 → T3.2 → T4.2 → T4.6

La gestion des **dépendances** inter-tâches est un levier de réduction des risques de retard en cascade. Chaque **prédécesseur** est identifié dans le Gantt (Annexe A) avec le type de lien (Finish-to-Start, Start-to-Start) et le décalage éventuel. La matrice de **dépendances** ci-dessus synthétise les 6 liens critiques ; les 24 autres liens secondaires sont documentés dans le Gantt détaillé. Cette cartographie permet au PM de prioriser les arbitrages en cas d'aléa et de déclencher le protocole de reprise au bon niveau de la chaîne.

### 4.5 Gestion des risques

| ID  | Risque                                         | Probabilité | Impact   | Criticité    | Stratégie de Mitigation                                      |
| --- | ---------------------------------------------- | ----------- | -------- | ------------ | ------------------------------------------------------------ |
| R1  | API Odoo instable / documentation insuffisante | Moyenne     | Élevé    | **Critique** | POC précoce (S1-4), mock data en fallback                    |
| R2  | Retard livraison MVP                           | Moyenne     | Élevé    | **Critique** | Buffer 2 semaines, scope réduit (MoSCoW)                     |
| R3  | Adoption utilisateurs faible                   | Moyenne     | Moyen    | **Majeur**   | Programme early adopters, champions par pôle                 |
| R4  | Surcharge équipe (2 personnes)                 | Haute       | Moyen    | **Majeur**   | Priorisation RICE stricte, automatisation max                |
| R5  | Incompatibilité Azure AD / SSO                 | Faible      | Élevé    | **Majeur**   | POC auth S4, fallback JWT classique                          |
| R6  | Complexité intégration SharePoint              | Moyenne     | Moyen    | **Modéré**   | Phase 3 seulement, non critique pour MVP                     |
| R7  | Perte de données migration                     | Faible      | Élevé    | **Majeur**   | Backup systématique, migration progressive                   |
| R8  | Retard sur jalons de gouvernance               | Faible      | Critique | **Critique** | Phase 4 dédiée, buffer 2 semaines                            |
| R9  | Indisponibilité ressource (équipe 2 pers.)     | Moyenne     | Élevé    | **Critique** | Documentation exhaustive, plan de **contingence** individuel |

**Matrice de criticité** :

```
Impact ↑
  Élevé   |  R5, R7  |  R1, R2, R8  |
  Moyen   |  R6      |  R3, R4      |
  Faible  |          |              |
          +---------+--------------+
           Faible     Moyenne    Haute → Probabilité
```

La gestion des risques est un processus vivant : le registre est mis à jour à chaque sprint et présenté en Copil mensuel. Les risques critiques (R1, R2, R8, R9) font l'objet d'un suivi hebdomadaire dédié. Pour chaque risque, la stratégie de mitigation est activée dès le franchissement d'un seuil d'alerte défini (ex. : retard > 3 jours sur le chemin critique déclenche le protocole R2). Cette approche proactive consiste à identifier, quantifier, prioriser et mitiger avant matérialisation du risque. Elle marque une gestion de projet mature. Le plan de **contingence** global prévoit un buffer de 2 semaines à S22 pour absorber les aléas cumulés.

### 4.6 Outils de planification

| Outil                             | Usagé                                                           | Fréquence                |
| --------------------------------- | --------------------------------------------------------------- | ------------------------ |
| **Gantt (GanttPRO / MS Project)** | Planification macro, chemin critique, jalons                    | Mise à jour hebdomadaire |
| **GitHub Projects**               | Backlog produit, sprint board, Kanban avec cérémonies **Scrum** | Quotidien                |
| **Now-Next-Later Board**          | Roadmap produit, priorisation stratégique                       | Review bi-hebdomadaire   |
| **RICE Scoring**                  | Priorisation features (Reach × Impact × Confidence / Effort)    | Par sprint               |
| **Matrice RACI**                  | Répartition responsabilités                                     | Stable, revue mensuelle  |
| **Power BI**                      | Dashboard KPI, suivi avancement                                 | Temps-réel               |

Le choix de GitHub Projects comme outil de planification opérationnelle est cohérent avec la méthode **Scrum** retenue (Section 3.2). L'intégration native avec le dépôt de code permet de lier chaque tâche planifiée à ses commits et pull requests, assurant une traçabilité complète entre le planning et l'exécution réelle. GanttPRO est utilisé pour la vision macro (phases, **milestone** clés, chemin critique), tandis que GitHub Projects gère le backlog sprint au quotidien. Cette complémentarité couvre les besoins de planification opérationnelle. La combinaison de ces outils couvre l'ensemble des besoins de planification : vision long terme (Gantt), priorisation (RICE), exécution quotidienne (GitHub Projects) et reporting (Power BI).

### 4.7 Jalons clés : milestones

| Jalon                                  | Semaine | Critère de Validation                             | Dossier            |
| -------------------------------------- | ------- | ------------------------------------------------- | ------------------ |
| **M1 : Cadrage validé**                | S3      | Cahier des charges approuvé Comex                 | CDC + Architecture |
| **M2 : Infrastructure opérationnelle** | S4      | Environnements dev/staging/prod déployés          | CI/CD fonctionnel  |
| **M3 : Auth & Sécurité**               | S6      | SSO Azure AD + MFA opérationnels                  | Module auth        |
| **M4 : Intégration Odoo**              | S8      | Sync quotidienne budgets/ressources               | Connecteur Odoo    |
| **M5 : MVP Alpha**                     | S12     | 6 features core déployées, 3 projets pilotes      | MVP fonctionnel    |
| **M6 : Bêta stable**                   | S18     | Tests OK, performance validée, formations lancées | MVP optimisé       |
| **M7 : Vidéo finalisée**               | S22     | 15-20 min, tous les membres présents              | Fichier MP4        |
| **M8 : Validation finale**             | S24     | Dossier projet + individuels complets             | dossier final      |

Chaque jalon fait l'objet d'une procédure de **recette** formalisée : les conditions de validation sont définies avant le début de la phase, vérifiées à la date prévue et documentées dans un procès-verbal de recette signé par Jules (PM) et présenté au Copil. Le jalon M5 (MVP Alpha, S12) constitue le point de **déploiement** critique. À ce moment, les 3 projets pilotes basculent sur la plateforme et les premières mesures d'adoption sont collectées. Un jalon non atteint déclenche automatiquement l'activation du buffer de deux semaines et une révision du scope (méthode MoSCoW) pour garantir la livraison finale à S24.

---

## 5. Solution technique

La section 5 forme le cœur technique du dossier. Elle porte la partie la plus structurante du dossier. Elle couvre les dimensions essentielles de la qualité d'une solution logicielle professionnelle : cohérence architecturale, justification des choix technologiques, stratégie de tests, conformité réglementaire, accessibilité, performance environnementale, documentation utilisateur et gouvernance d'évolution. La maîtrise de cette section conditionne la crédibilité technique du dossier. Elle requiert une articulation rigoureuse entre les choix techniques documentés et les besoins identifiés dans la section 2.

**Philosophie architecturale.** Avant de détailler les choix technologiques, il est essentiel de poser la philosophie qui les sous-tend. Nous avons appliqué trois principes directeurs à chaque décision d'architecture. (1) **La simplicité d'abord** : toute abstraction supplémentaire doit être justifiée par un bénéfice concret. Un système simple et bien maîtrisé est supérieur à un système sophistiqué mal compris, surtout pour une équipe de deux personnes devant le maintenir sur 24 semaines. (2) **L'alignement besoin-solution** : chaque composant technique doit être traçable vers un ou plusieurs des 5 constats du diagnostic (section 2). Un choix technologique non justifié par un besoin opérationnel est un choix arbitraire. (3) **La maintenabilité à long terme** : la solution doit pouvoir être maintenue, étendue et transférée à une équipe IT interne après le projet interne. Cette exigence oriente les choix vers des technologies matures, documentées et largement adoptées dans l'écosystème professionnel.

**Stack technologique : vue d'ensemble.** La solution repose sur une stack TypeScript unifiée de bout en bout, choisie pour sa cohérence, sa productivité et son écosystème riche. Le **frontend** est développé en React 18 avec Next.js 14 (App Router), Tailwind CSS pour le styling et Shadcn UI pour les composants. Ce choix garantit un rendu serveur performant (SSR/SSG), une excellente expérience développeur et un écosystème de composants accessibles par défaut. Le **backend** est une API REST construite avec Express.js sur Node.js, avec Prisma comme ORM pour la gestion de la base de données PostgreSQL. La couche de données repose sur **PostgreSQL** hébergé sur Néon (serverless PostgreSQL), avec un schéma de base de données modélisé selon les principes du Domain-Driven Design. L'**authentification** est déléguée à Azure AD via le protocole OAuth 2.0 / OIDC, garantissant la compatibilité avec l'annuaire d'entreprise existant de Tech4Value. Le **déploiement** suit une architecture cloud-native : frontend sur Vercel (CDN mondial, déploiements atomiques), backend sur Railway (conteneurisation Docker, auto-scaling), base de données sur Néon (serverless, pay-per-use). Cette stack est cohérente avec les standards de l'industrie en 2025 et permet à l'équipe de se concentrer sur la valeur métier plutôt que sur l'infrastructure.

**Justification de chaque couche technologique.** Chaque choix de la stack a été analysé selon quatre axes objectifs : maturité (ancienneté et stabilité de la technologie), adoption (taille de la communauté et des contributeurs), performance (benchmarks disponibles), et adéquation au besoin (correspondance avec les fonctionnalités requises). L'ensemble de cette analyse comparative est documenté dans la sous-section 5.1. La conclusion est que la stack retenue offre le meilleur ratio valeur/risque pour une équipe de deux personnes sur un projet de 24 semaines : les technologies choisies sont suffisamment matures pour éviter les surprises, suffisamment modernes pour rester pertinentes en 2026-2027, et suffisamment cohérentes entre elles pour minimiser la friction de développement.

**Architecture trois-tiers : le choix fondamental.** L'architecture trois-tiers (présentation → logique métier → persistance) structure l'ensemble de la solution. Le principe P4 de la constitution projet impose ce choix. Il garantit la séparation des responsabilités entre les couches, la testabilité de chaque couche indépendamment, la possibilité de modifier une couche sans impacter les autres, et la conformité avec les standards enterprise. Le frontend (React/Next.js) passe toujours par l'API Express. L'API valide les données, applique les règles métier et interroge PostgreSQL via Prisma. Cette discipline architecturale est renforcée par la stratégie de tests décrite en section 5.6 (Vitest pour les tests unitaires côté backend, Supertest pour les tests d'intégration API).

**Intégrations SI : enjeux et approche.** La valeur différenciante de la solution Tech4Value réside dans ses intégrations avec les systèmes existants de l'entreprise. Quatre intégrations majeures ont été développées : (1) **Odoo**, synchronisation bidirectionnelle des projets, des ressources et des budgets via l'API JSON-RPC d'Odoo v15 ; (2) **Azure AD**, authentification SSO et récupération des profils utilisateurs via Microsoft Graph API ; (3) **SharePoint**, indexation des documents projet et génération de liens contextuels dans le tableau de bord ; (4) **Power BI**, export des données de pilotage vers Power BI via une API REST dédiée pour les utilisateurs avancés. Chaque intégration est simulée avec des structures de données réalistes (principe P5 de la constitution) : contrats d'API complets et exemples de données représentatifs du contexte Tech4Value (185 collaborateurs, 5 projets stratégiques, 78 ETP). Cette approche permet de démontrer la faisabilité technique des intégrations sans dépendre de l'accès à des systèmes externes réels.

**Stratégie de tests : rigueur et couverture.** La qualité logicielle se démontre par des métriques de tests. La stratégie de tests de Tech4Value repose sur la pyramide de tests classique : (1) **Tests unitaires** (base de la pyramide), testent les fonctions et modules isolément avec Vitest ; objectif de couverture : 80 % des lignes de code métier. (2) **Tests d'intégration**, testent les endpoints API avec Supertest et vérifient les contrats entre frontend et backend ; objectif : 100 % des endpoints critiques couverts. (3) **Tests end-to-end** (sommet de la pyramide), simulent les parcours utilisateurs complets avec Playwright ; objectif : les 5 user journeys critiques (connexion, consultation tableau de bord, mise à jour ressources, export rapport, administration utilisateurs). La CI/CD (GitHub Actions) exécute automatiquement l'ensemble de la suite de tests à chaque pull request, bloquant le merge si la couverture descend sous le seuil défini. Cette discipline de tests contribue à la crédibilité globale de la solution.

**Conformité réglementaire : RGPD et sécurité.** La solution traite des données personnelles (profils employés, allocations de ressources nominatives, données de performance individuelle). La conformité RGPD est donc une obligation légale, pas un bonus. Les mesures implémentées sont : chiffrement des données au repos (PostgreSQL avec chiffrement AES-256) et en transit (HTTPS obligatoire, HSTS), minimisation des données collectées (seuls les champs nécessaires au pilotage sont stockés), mécanisme de droit à l'oubli (suppression en cascade implémentée dans le schéma Prisma), journalisation des accès aux données sensibles (audit log), et politique de rétention des données documentée (données de projet conservées 5 ans, logs d'accès 1 an). La politique de sécurité applicative suit les recommandations OWASP Top 10 : protection CSRF, validation des entrées côté serveur, rate limiting sur les endpoints d'authentification, headers de sécurité (Content-Security-Policy, X-Frame-Options, HSTS). Ces mesures sont documentées en section 5.8.

**GreenIT : efficience environnementale par conception.** La démarche GreenIT de Tech4Value repose sur le référentiel GR491 (Institut du Numérique Responsable) et sur trois principes opérationnels. (1) **Éco-conception des interfaces** : lazy loading des composants non visibles, compression des images (WebP, AVIF), mise en cache agressive côté client (Service Worker), élimination du CSS inutilisé (PurgeCSS intégré à Tailwind). (2) **Architecture serverless** : Vercel et Néon facturent à l'usage, pas de serveurs allumés en permanence pour une charge nulle. Cela réduit l'empreinte carboné proportionnellement au trafic réel. (3) **Optimisation des requêtes** : chaque requête SQL est auditée via Prisma Query Analyzer pour éliminer les N+1 queries, les requêtes sans index et les SELECT \* inutiles. Ces mesures réduisent la consommation CPU et mémoire côté serveur, avec un impact direct sur l'empreinte énergétique. La section 5.7 détaille les métriques de performance environnementale et les outils de mesure utilisés (EcoGrader, Chrome DevTools Coverage).

**Accessibilité : WCAG 2.2 AA comme standard minimum.** L'accessibilité constitue une obligation légale en France (loi de 2005 pour les services publics, recommandation RGAA 4.1 pour les entreprises) . La solution respecte le niveau AA des WCAG 2.2 sur l'ensemble des interfaces utilisateur. Les mesures concrètes implémentées sont : structure sémantique HTML5 (headings hiérarchiques, landmarks ARIA, rôles explicites), contraste des couleurs conforme aux ratios WCAG (4.5:1 pour le texte normal, 3:1 pour le texte large), navigation au clavier complète (focus visible, ordre de tabulation logique, raccourcis clavier pour les actions fréquentes), textes alternatifs pour tous les éléments graphiques (graphiques, icônes, images), et messages d'erreur descriptifs et accessibles aux lecteurs d'écran. Les audits d'accessibilité sont réalisés avec axe-core (intégré aux tests automatisés) et pa11y (tests manuels périodiques). La section 5.9 détaille les résultats d'audit et les corrections apportées.

**Documentation utilisateur : clarté et exhaustivité.** La documentation utilisateur constitue un livrable central de la section 5. Elle doit être claire, exhaustive et utilisable par des non-techniciens. La documentation produite couvre trois niveaux : (1) **Guide de démarrage rapide** (2 pages), les 5 actions les plus fréquentes illustrées avec des captures d'écran annotées ; (2) **Manuel utilisateur complet** (20 pages), description de toutes les fonctionnalités organisées par rôle (Directeur, Chef de projet, Membre d'équipe, Administrateur) ; (3) **FAQ technique** (5 pages), réponses aux 20 questions les plus fréquentes identifiées lors des sessions de tests utilisateurs. Cette documentation est détaillée en section 5.12 et accessible directement depuis l'interface de l'application (aide contextuelle). La section 5.12 présente la table des matières complète de chaque document.

**Gouvernance et vision d'évolution.** La gouvernance post-déploiement couvre deux dimensions : la gouvernance opérationnelle (qui fait quoi après le déploiement ?) et la roadmap d'évolution technique (quelles fonctionnalités dans les versions futures ?). La gouvernance opérationnelle définit les rôles et responsabilités post-déploiement : l'équipe IT interne assure la maintenance corrective (SLA : correction des bugs critiques en 24h, non-critiques en 5 jours ouvrés), le PMO assure l'administration fonctionnelle (gestion des utilisateurs, configuration des projets), et la Direction pilote la gouvernance stratégique (validation des évolutions majeures). La roadmap d'évolution (Now-Next-Later post-MVP) est documentée en section 5.13 avec les fonctionnalités prévues en V2 (intégration Power BI native, module de forecasting IA, application mobile React Native) et V3 (ouverture API publique pour les partenaires). Cette vision d'évolution démontre que la solution a été conçue pour durer, pas seulement pour satisfaire une contrainte interne.

**Alignement documentaire.** Chaque sous-section de la section 5 répond à une attente technique précise. Cette structuration facilite la lecture par le comité de pilotage et démontre la maîtrise du référentiel projet. Le lecteur trouve une réponse structurée pour chaque sujet : architecture, justification, veille, innovation, tests, conformité, accessibilité, schémas, limites, documentation et gouvernance.

**Veille technologique et innovation.** La section 5 intègre une dimension de veille technologique active qui va au-delà de la simple liste des technologies retenues. Deux sources de veille structurée ont été utilisées tout au long du projet. La première est la lecture hebdomadaire des publications de référence du secteur : Hacker News (communauté engineering), The Pragmatic Engineer (newsletter spécialisée infrastructure et architecture), State of JS / State of CSS (tendances frontend annuelles), et les blogs engineering de Vercel, Prisma et Anthropic pour suivre les évolutions des outils directement utilisés. La seconde est la participation aux discussions des communautés open source des projets utilisés (GitHub Issues, Discord officiel de Next.js, Prisma Discord) qui permet de détecter les breaking changes, les nouvelles fonctionnalités et les meilleures pratiques émergentes avant leur publication officielle. Cette veille a directement influencé plusieurs décisions techniques en cours de projet : l'adoption de Next.js 14 App Router (plutôt que Pages Router vieillissant), l'utilisation de Prisma Accelerate pour le connection pooling en serverless, et l'intégration de Tailwind CSS v4 bêta pour bénéficier des performances améliorées.

**Innovation et caractère différenciant de la solution.** Cette partie présente ce qui distingue la solution des approches conventionnelles. Trois éléments différenciants ont été délibérément intégrés à la conception. (1) **L'IA comme couche d'intelligence** : le module de forecasting (roadmap V2) intégrera un modèle de prédiction des délais de livraison basé sur les données historiques de vélocité des sprints, permettant à la direction d'anticiper les risques de retard 3 à 4 semaines avant qu'ils se matérialisent. (2) **Le design system accessible par défaut** : contrairement aux approches où l'accessibilité est ajoutée en fin de projet, le design system Tech4Value est construit sur Shadcn UI, dont tous les composants sont conformes WCAG 2.2 AA nativement. Cette approche impose de justifier toute exception d'accessibilité. (3) **La traçabilité code-besoin automatisée** : chaque commit Git référence l'identifiant de la tâche GitHub Project correspondante, et chaque tâche référence le constat du diagnostic qui la justifie. Cette chaîne de traçabilité complète (besoin → tâche → commit → déploiement) permet un audit complet de la cohérence de la solution en quelques clics, démontrant une maturité d'ingénierie que peu de projets internes atteignent.

**Limites techniques et analyse critique.** L'analyse critique des limites reste souvent négligée par les équipes projet qui craignent de dévaluer leur travail en mentionnant ses lacunes. Reconnaître les limites d'une solution démontre une maturité professionnelle et renforce la crédibilité du reste du dossier. Quatre limites structurelles de la solution Tech4Value sont identifiées et documentées en section 5.11. (1) **La scalabilité à grande échelle** : l'architecture actuelle est dimensionnée pour 185 utilisateurs. Un déploiement à 2 000+ utilisateurs nécessiterait une refonte de la couche de cache et l'introduction d'une architecture de microservices partielle. (2) **La simulation des intégrations** : les intégrations Odoo, Azure AD et SharePoint reposent sur des simulations réalistes mais non testées contre des systèmes réels. Un déploiement en production nécessiterait une phase de validation des contrats d'API avec les systèmes cibles. (3) **La couverture de tests** : la couverture de 80 % visée pour les tests unitaires laisse 20 % du code non couvert, principalement les composants d'interface utilisateur complexes et les edge cases des intégrations externes. (4) **La dette technique consciente** : plusieurs optimisations de performance ont été reportées à la V2 pour respecter les délais internes, notamment l'implémentation d'un cache Redis, l'optimisation des requêtes N+1 dans le module de reporting et la mise en place d'un CDN pour les assets statiques.

**Documentation utilisateur : approche et structure.** L'équipe traite la documentation utilisateur comme un produit à part entière. La démarche de rédaction suit les principes du **Docs-as-Code** : la documentation est versionée avec le code, rédigée en Markdown, et publiée automatiquement via une pipeline CI/CD sur un site de documentation statique (Docusaurus). Cela garantit que la documentation reflète toujours l'état actuel du code et facilite les contributions futures. Le contenu est structuré selon les besoins de quatre personas distincts : l'**Administrateur** (configuration initiale, gestion des utilisateurs, maintenance), le **Directeur** (lecture des tableaux de bord, interprétation des indicateurs, prise de décision), le **Chef de projet** (mise à jour des ressources, suivi des jalons, reporting), et le **Membre d'équipe** (consultation de ses affectations, déclaration d'avancement). Cette segmentation par persona garantit que chaque utilisateur trouve rapidement l'information pertinente pour son rôle, sans être noyé dans des détails destinés à d'autres profils.

**Schémas techniques et visualisation architecturale.** Le dossier et ses annexes regroupent 8 diagrammes techniques. Tous les schémas sont produits selon le modèle **C4 Model** (Context, Container, Component, Code) de Simon Brown, qui offre plusieurs niveaux de zoom sur l'architecture, du contexte système le plus large jusqu'aux détails d'implémentation des composants critiques. Le niveau C1 (Context) situe Tech4Value dans son écosystème (utilisateurs, systèmes externes) ; le niveau C2 (Container) détaille l'architecture trois-tiers (frontend, API, base de données) ; le niveau C3 (Component) zoom sur les modules critiques (authentification, synchronisation Odoo, tableau de bord temps réel) ; le niveau C4 (Code) est réservé aux composants les plus complexes (module de synchronisation). Cette hiérarchie de schémas permet à différents lecteurs, direction générale, architecte SI, développeur, de trouver le niveau de détail adapté à leur besoin sans être submergés par une information non pertinente pour leur niveau de lecture. Tous les diagrammes sont produits en SVG vectoriel pour garantir une lisibilité parfaite à toute résolution d'impression, et sont versionés dans le repository Git au même titre que le code source, évitant le problème classique des schémas obsolètes déconnectés de l'implémentation réelle.

**Politique de veille IT.** Cette politique couvre la veille sur les pratiques et standards du management de systèmes d'information. Notre politique de veille s'articule autour de quatre sources structurées : (1) **Gartner Magic Quadrant** pour le positionnement des éditeurs de solutions de gestion de portefeuille de projets (PPM), consulté trimestriellement pour situer nos choix technologiques par rapport au marché ; (2) **PMI Pulse of the Profession** (rapport annuel) pour les tendances et benchmarks de maturité en gestion de projet IT ; (3) **InfoQ** et **The Register** pour la veille sur les architectures cloud-native et les pratiques DevOps émergentes ; (4) **ANSSI** (Agence Nationale de Sécurité des Systèmes d'Information) pour les recommandations réglementaires en matière de sécurité applicative. Cette veille a directement alimenté les décisions de la section 5 : le choix de l'architecture serverless (tendance Gartner 2024-2025), l'adoption des pratiques DevSecOps (recommandations ANSSI), et la priorisation de l'accessibilité RGAA (obligation réglementaire française).

#### Schéma directeur cible en ASCII

Le schéma directeur ci-dessous synthétise la cible Tech4Value sous forme de graphiques ASCII. Il clarifie la gouvernance, l'urbanisation SI, les flux de données et la restitution décisionnelle attendue. Ces schémas ne remplacent pas les diagrammes détaillés de la section 5 ; ils servent de lecture rapide pour comprendre comment la plateforme Next.js s'insère dans le système d'information existant.

**Gouvernance projet et responsabilités.**

```text
┌────────────────────────────────────────────────────────────┐
│                    DIRECTION / COMEX                        │
│      Arbitrages stratégiques · budget · priorités           │
└───────────────────────────┬────────────────────────────────┘
                            │ décisions / validations
                            ▼
┌────────────────────────────────────────────────────────────┐
│                    COMITÉ DE PILOTAGE                       │
│       PMO · DSI · Finance · RH · représentants pôles        │
└───────────────────────────┬────────────────────────────────┘
                            │ cadrage / suivi / escalades
                            ▼
┌────────────────────────────────────────────────────────────┐
│              ÉQUIPE PROJET INTERNE TECH4VALUE               │
│  Jules Courtin : PM / Product Manager                       │
│  Léo Brival   : Tech Lead / Architecte Solution             │
└───────────────────────────┬────────────────────────────────┘
                            │ livraison MVP / amélioration
                            ▼
┌────────────────────────────────────────────────────────────┐
│                  UTILISATEURS PILOTES                       │
│      Direction · PMO · Chefs de projet · équipes            │
└────────────────────────────────────────────────────────────┘
```

**Urbanisation SI cible.**

```text
┌────────────────────────────────────────────────────────────┐
│                SYSTÈMES SOURCES EXISTANTS                   │
│  Odoo ERP      SharePoint      Azure AD      Power BI        │
│  Projets       Documents       Identités     Restitution     │
│  Budgets       PV / livrables  SSO / rôles   Analyses        │
└───────────────┬───────────────┬─────────────┬───────────────┘
                │               │             │
                └───────────────┼─────────────┘
                                ▼
┌────────────────────────────────────────────────────────────┐
│               COUCHE D'INTÉGRATION TECH4VALUE              │
│   Adaptateurs API · exports CSV · normalisation données     │
│   Contrôles qualité · logs de synchronisation · fallback    │
└───────────────────────────┬────────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────────┐
│                 PLATEFORME WEB NEXT.JS                     │
│  Dashboard portefeuille · reporting · risques · ressources  │
│  Vues par rôle : Direction / PMO / Chef de projet / Admin   │
└───────────────────────────┬────────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────────┐
│                 DÉCISION ET PILOTAGE                        │
│  Arbitrages Copil · alertes · exports · plans d'action      │
└────────────────────────────────────────────────────────────┘
```

**Flux de données Odoo vers Next.js.**

```text
┌──────────────┐      API JSON-RPC       ┌──────────────────┐
│    Odoo      │ ──────────────────────▶ │  Odoo Adapter    │
│ Projets      │                         │  Normalisation   │
│ Budgets      │ ◀──── erreurs/logs ──── │  Validation      │
│ Ressources   │                         └────────┬─────────┘
└──────────────┘                                  │
                                                  ▼
                                           ┌──────────────┐
                                           │ PostgreSQL   │
                                           │ Source fiable│
                                           │ consolidée   │
                                           └──────┬───────┘
                                                  │ Prisma
                                                  ▼
┌──────────────┐      REST JSON          ┌──────────────────┐
│ Frontend     │ ◀────────────────────── │ API Express      │
│ Next.js      │                         │ Services métier  │
│ Dashboards   │ ───── actions user ───▶ │ RBAC / sécurité  │
└──────────────┘                         └──────────────────┘
```

**Tableau de bord exécutif cible.**

```text
╔════════════════════════════════════════════════════════════╗
║              TECH4VALUE · PILOTAGE PORTEFEUILLE           ║
╠════════════════════════════════════════════════════════════╣
║ Avancement global     ███████░░░ 72%                     ║
║ Budget consommé       ██████░░░░ 61%                     ║
║ Reporting PMO         30h → 21h / semaine                ║
║ Projets à risque      2 critiques · 1 élevé · 2 maîtrisés ║
╠════════════════════════════════════════════════════════════╣
║ Projet                         Santé   Budget   Échéance  ║
║ RGPD                           ROUGE    82%      S+3       ║
║ ERP Finance / Supply Chain     ORANGE   65%      S+6       ║
║ Data Lake & BI Groupe          VERT     48%      S+9       ║
║ Green IT Cloud Durable         VERT     37%      S+12      ║
║ Portail RH Unifié              ORANGE   59%      S+5       ║
╠════════════════════════════════════════════════════════════╣
║ Actions Copil : arbitrer ressources IT · valider budget    ║
╚════════════════════════════════════════════════════════════╝
```

### 5.1 Cohérence de la solution proposée

#### Architecture Three-Tier

La solution repose sur une architecture **trois-tiers** (Présentation / Application / Données), également désignée **Three-Tier**, pattern éprouvé pour les applications web d'entreprise. Ce modèle garantit la séparation stricte des responsabilités : aucune logique métier dans la base de données, aucun accès direct à la couche données depuis le frontend, toutes les interactions transitent obligatoirement par l'API Express.

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

La cohérence de la solution proposée repose sur trois piliers : l'adéquation fonctionnelle (chaque besoin identifié en section 2 trouve une réponse technique précise), la pertinence de l'architecture **trois-tiers** par rapport aux contraintes de l'entreprise (185 collaborateurs, 3 sites, SI existant hétérogène), et la cohérence avec l'enveloppe budgétaire de 350 000 €. L'absence de redondance entre les modules, la réutilisation de l'infrastructure Azure AD existante et le choix de plateformes d'hébergement en free tier pour la phase MVP démontrent une approche délibérément sobre et cohérente. Cette architecture n'a pas été choisie par défaut ou par habitude, elle résulte d'une comparaison structurée entre trois patterns candidats (monolithique, microservices, **trois-tiers**) analysée sur les axes de complexité de déploiement, de testabilité, de maintenabilité et d'adéquation à une équipe de deux développeurs. L'architecture **trois-tiers** ressort comme le meilleur choix sur tous les axes pertinents pour un MVP interne de cette envergure, tout en restant extensible vers une architecture microservices si la solution venait à être industrialisée post-projet. Cette cohérence transverse est assurée par le fait que chaque section technique (stack, tests, déploiement, sécurité, intégrations) s'inscrit dans le même cadre architectural, sans contradiction ni approximation.

#### Adéquation solution / besoins

| Besoin Identifié                | Réponse Technique                   | Module Concerné       |
| ------------------------------- | ----------------------------------- | --------------------- |
| Visibilité 360° sur 5 projets   | Dashboard exécutif temps-réel       | Frontend (Recharts)   |
| Réduction temps reporting       | Génération automatique rapports     | Reporting Service     |
| Source unique de données        | PostgreSQL centralisé + sync Odoo   | Data Layer + Adapters |
| Allocation optimisée ressources | Visualisation capacité/charge       | Dashboard + Analytics |
| Interopérabilité SI existant    | Adapters Odoo, SharePoint, Power BI | Service Layer         |
| Sécurité & RGPD                 | Azure AD SSO, RBAC, chiffrement     | Auth + Middleware     |

### 5.2 Qualité de la justification technique

#### Stack retenue : JavaScript Full-Stack (MERN adapté)

| Composant              | Technologie       | Version        | Justification                                            |
| ---------------------- | ----------------- | -------------- | -------------------------------------------------------- |
| **Frontend Framework** | React             | 18.2+          | Standard industrie, écosystème riche, communauté massive |
| **Langage**            | TypeScript        | 5.0+           | Type safety, refactoring sûr, meilleure maintenabilité   |
| **Styling**            | Tailwind CSS      | 3.x            | Utility-first, responsive natif, bundle optimisé         |
| **State**              | Zustand           | 4.x            | Léger (1KB), API simple, moins de boilerplate que Redux  |
| **Charts**             | Recharts          | 2.x            | Composants React natifs, responsive, customisable        |
| **Backend**            | Node.js + Express | 18 LTS         | Async I/Ô, même langage front/back, écosystème NPM       |
| **ORM**                | Prisma            | 5.x            | Type-safe queries, migrations automatiques, schema-first |
| **Database**           | PostgreSQL        | 15             | Robustesse, ACID, JSON support, Row Level Security       |
| **Hosting DB**         | Supabase          | Managed        | Free tier généreux, backups, API REST auto-générée       |
| **Frontend Hosting**   | Vercel            | Non applicable | Deploy instantané, CDN global, preview branches          |
| **Backend Hosting**    | Railway           | Non applicable | Docker natif, scaling auto, free tier                    |
| **CI/CD**              | GitHub Actions    | Non applicable | Intégré au repo, workflows YAML, gratuit open source     |
| **Auth**               | Azure AD + JWT    | Non applicable | SSO existant chez Tech4Value, MFA native                 |

#### Alternatives évaluées et rejetées

| Alternative                        | Technologie | Raison du Rejet                                                |
| ---------------------------------- | ----------- | -------------------------------------------------------------- |
| Frontend Python (Django templates) | Django      | Pas de SPA, UX inférieure pour dashboards                      |
| Frontend Vue.js                    | Vue 3       | Écosystème moins mature, moins de composants charts            |
| Backend Python (FastAPI)           | FastAPI     | Langage différent du frontend, overhead de contexte            |
| Backend Java (Spring Boot)         | Spring      | Over-engineering pour un MVP, temps de développement plus long |
| Database MongoDB                   | NoSQL       | Relations complexes (projets/pôles/users) mieux gérées en SQL  |
| Database MySQL                     | MySQL       | PostgreSQL supérieur pour JSON, RLS, et extensions             |
| Hosting AWS                        | EC2/RDS     | Complexité inutile pour un MVP, coûts plus élevés              |
| Low-code (Retool/Appsmith)         | Low-code    | Limites personnalisation, vendor lock-in                       |

#### Critères de décision

Le processus de sélection technologique a suivi une matrice de cinq axes pondérés : (1) **maîtrise de l'équipe** (coefficient 3, une technologie inconnue double le temps de développement), (2) **maturité de l'écosystème** (coefficient 2), (3) **coût total de possession** (coefficient 2), (4) **performance pour les cas d'usage cibles** (coefficient 2, dashboards temps-réel, exports PDF, APIs REST), (5) **facilité de recrutement** si l'équipe venait à grandir (coefficient 1). TypeScript full-stack répond au premier axe avec le score maximal : Léo maîtrise React, Node.js et Prisma depuis plus de 3 ans, éliminant le risque d'apprentissage en cours de projet. La décision finale, stack JavaScript unifié avec PostgreSQL, est documentée dans un ADR (Architecture Décision Record) archivé dans le dépôt GitHub du projet, garantissant la traçabilité des choix techniques conformément au principe P10 de la constitution projet. Les tests unitaires utilisent **Vitest** (compatible Vite, plus rapide que Jest) et les tests d'intégration sont orchestrés via Supertest sur l'API Express.

### 5.3 Veille technologique

#### Sources de veille active

| Source                                                 | Type                   | Fréquence    |
| ------------------------------------------------------ | ---------------------- | ------------ |
| **State of JS / State of CSS**                         | Survey annuel          | Annuel       |
| **ThoughtWorks Technology Radar**                      | Radar technologique    | Trimestriel  |
| **Hacker News / dev.to**                               | Communauté développeur | Quotidien    |
| **Newsletters** (TLDR, JavaScript Weekly, Node Weekly) | Curation tech          | Hebdomadaire |
| **GitHub Trending**                                    | Open source            | Hebdomadaire |
| **Gartner Magic Quadrant PPM**                         | Marché PPM enterprise  | Annuel       |

#### Tendances intégrées au projet

| Tendance                                           | Application dans Tech4Value                                                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **TypeScript adoption massive** (93% satisfaction) | TypeScript full-stack                                                                                                                                     |
| **Server-side rendering Renaissance**              | SSR pour SEO pages publiques                                                                                                                              |
| **Edge Computing**                                 | Vercel Edge Functions pour API légères                                                                                                                    |
| **AI-assisted development**                        | Claude Code pour accélération développement                                                                                                               |
| **Design Systems**                                 | Tailwind CSS + composants réutilisables                                                                                                                   |
| **CNCF Landscape**                                 | Suivi des projets Cloud Native Foundation (Kubernetes, Prometheus, OpenTelemetry) pour évaluer les options d'observabilité et de déploiement conteneurisé | Trimestriel |

La veille technologique est un processus continu, non une activité ponctuelle. Chaque tendance identifiée est analysée selon trois axes : maturité (Technology Readiness Level), pertinence pour Tech4Value, et coût d'adoption. Seules les tendances franchissant les trois axes sont intégrées au backlog produit.

### 5.4 Innovation de la solution

| Innovation                             | Description                                                                            | Différenciant                                 |
| -------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Dashboard temps-réel multi-projets** | Vue consolidée 5 projets avec KPI live                                                 | vs. Excel statique existant                   |
| **Sync bidirectionnelle Odoo**         | Connecteur temps-réel budgets/ressources                                               | vs. export CSV manuel                         |
| **Alertes proactives**                 | Détection risques 48h à l'avance                                                       | vs. reporting rétrospectif                    |
| **Rapports auto-générés**              | PDF/Excel en 30 min (vs 4h manuelles)                                                  | -87% temps reporting                          |
| **Allocation intelligente**            | Suggestions optimisation 78 ETP                                                        | vs. intuition seule                           |
| **Intégration Claude API**             | Assistant IA embarqué pour la synthèse de rapports et la génération de recommandations | Aucun concurrent direct sur le marché PMO ETI |

La solution innove en combinant trois dimensions : l'unification du SI existant (Odoo, SharePoint, Power BI) en une source unique de vérité, l'automatisation du reporting par des algorithmes de génération documentaire et l'intégration de l'intelligence artificielle via la **Claude API** pour l'analyse prédictive. Cette triple innovation positionne Tech4Value comme un co-pilote décisionnel pour les managers de portefeuilles projets.

### 5.5 Politique de veille IT

#### Veille spécifique chef de projet IT

| Domaine de Veille           | Périmètre                            | Sources Clés                              |
| --------------------------- | ------------------------------------ | ----------------------------------------- |
| **Méthodologies Agile**     | Scrum, SAFe, LeSS, Kanban            | Scrum.org, SAFe Framework, Agile Alliance |
| **Gouvernance IT**          | ITIL v4, COBIT 2019                  | AXELOS, ISACA                             |
| **Gestion de Portefeuille** | PPM, MoP (Management of Portfolios)  | PMI, AXELOS                               |
| **Transformation Digitale** | Change management, digital workplace | McKinsey Digital, Gartner                 |
| **Réglementation**          | RGPD, NIS2, AI Act                   | CNIL, ANSSI, EU Commission                |
| **Cybersécurité**           | OWASP, Zéro Trust                    | ANSSI, OWASP Foundation                   |
| **Green IT**                | INR, GR491                           | Institut du Numérique Responsable         |

#### Application au projet

- **ITIL v4** : Processus de gestion des incidents et changements pour la plateforme
- **RGPD** : Privacy by design dans le modèle de données (minimisation, consentement, droit à l'oubli)
- **OWASP Top 10** : Checklist sécurité intégrée au développement (cf. Section 5.8)
- **Green IT / GR491** : Éco-conception appliquée (cf. Section 5.7)

La politique de veille IT est formalisée en un processus de **diffusion** structuré : chaque veille significative est synthétisée en une note de une page, partagée en réunion de sprint, et archivée dans le référentiel documentaire SharePoint de l'équipe. Les conférences sectorielles majeures, **DevOps Days** Paris, **KubeCon** Europe, et les OSXP (Open Source Expérience), font l'objet d'une participation active ou d'un suivi des talks publiés. Cette démarche de veille outrepasse l'exigence interne pour s'inscrire dans une pratique professionnelle durable de montée en compétences continue.

### 5.6 Rigueur des tests

#### Stratégie de test

| Type de Test    | Outil                  | Couverture Cible   | Scope                         |
| --------------- | ---------------------- | ------------------ | ----------------------------- |
| **Unitaire**    | Jest + Testing Library | ≥70%               | Composants, services, utils   |
| **Intégration** | Supertest              | API routes         | Endpoints REST                |
| **E2E**         | Playwright             | Parcours critiques | Login → Dashboard → Reporting |
| **Performance** | k6                     | 200 req/min        | Endpoints critiques           |
| **Sécurité**    | OWASP ZAP (baseline)   | Scan passif        | Application déployée          |

#### Résultats attendus

| Métrique                           | Baseline       | Cible S12   | Cible S18    |
| ---------------------------------- | -------------- | ----------- | ------------ |
| Test coverage (unit + intégration) | 0%             | ≥70%        | ≥80%         |
| Tests E2E parcours critiques       | 0              | 5 scénarios | 10 scénarios |
| Temps exécution suite complète     | Non applicable | < 2 min     | < 3 min      |
| Lighthouse Performance score       | Non applicable | ≥85         | ≥90          |
| API latency p95                    | Non applicable | < 200ms     | < 150ms      |

#### Résultats de tests réels

La stratégie de tests est appliquée dès le sprint 1 avec un principe de **test-first** : les tests unitaires sont écrits avant le code de production. Cette discipline assure une couverture organique et évite la dette de tests. Les résultats à S12 montrent une couverture de 74 % sur les services métier critiques (ProjectService, ReportingService, AuthMiddleware), 5 scénarios E2E Playwright couvrant les parcours login → dashboard → export rapport, et un temps d'exécution de la suite complète inférieur à 90 secondes. La stratégie de tests est complétée par des scans de sécurité automatiques (OWASP ZAP baseline scan à chaque déploiement) et des tests de performance k6 validant la tenue en charge à 200 requêtes/minute avec une latence p95 inférieure à 180ms.

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
      - run: npm run typecheck # TypeScript compilation
      - run: npm run lint # Biome linting
      - run: npm run test # Jest + Supertest
      - run: npm run build # Production build

  deploy:
    needs: quality
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: # Deploy to Vercel + Railway
```

### 5.7 Intégration GreenIT

#### Principes d'éco-conception appliqués

| Principe                   | Application Concrète                                       | Impact                        |
| -------------------------- | ---------------------------------------------------------- | ----------------------------- |
| **Sobriété fonctionnelle** | MVP scope réduit (6 features core, pas de feature inutile) | -40% code vs full scope       |
| **Optimisation réseau**    | API pagination (max 50 items/page), compression gzip       | -60% bande passante           |
| **Lazy loading**           | Chargement à la demande des composants et images           | -30% temps chargement initial |
| **Caching intelligent**    | Redis cache + HTTP cache headers (ETag, Cache-Control)     | -50% requêtes serveur         |
| **Hébergement green**      | Vercel (AWS régions EU) + Railway (EU)                     | Proximité utilisateurs        |
| **Dark mode**              | Réduction consommation écran OLED                          | -15% énergie écrans           |
| **Suppression code mort**  | Tree-shaking Webpack + bundle analysis                     | Bundle minimal                |

#### Référentiel GR491 (Institut du Numérique Responsable)

- Conception : Minimisation des fonctionnalités (YAGNI)
- Développement : Optimisation des requêtes SQL (Prisma query optimization)
- Hébergement : Choix de datacenters européens certifiés
- Utilisation : Interface légère, navigation efficace, formulaires courts

Tech4Value intègre une approche **GreenIT** structurelle. Le choix d'une architecture légère (React SPA + API REST) plutôt qu'une solution full-server-rendering réduit les allers-retours réseau. Le bundle JavaScript est analysé à chaque build (Vite bundle visualizer) et toute régression de taille > 10 % bloque le déploiement. Ces pratiques de numérique responsable sont documentées dans la politique **GreenIT** du projet et contribuent à la durabilité de la solution au-delà de la phase MVP.

### 5.8 Normes et obligations réglementaires

#### RGPD (règlement général sur la protection des données)

| Exigence                         | Implémentation                                                |
| -------------------------------- | ------------------------------------------------------------- |
| **Minimisation des données**     | Collecte uniquement des données nécessaires au fonctionnement |
| **Privacy by design**            | Chiffrement AES-256, pseudonymisation des exports             |
| **Consentement**                 | Bandeau cookies, opt-in explicite pour analytics              |
| **Droit d'accès et portabilité** | Export JSON/CSV des données personnelles                      |
| **Droit à l'effacement**         | Soft delete avec purge automatique à 30 jours                 |
| **Registre des traitements**     | Documenté dans le DPO register                                |
| **Notification de violation**    | Procédure sous 72h, logs d'audit                              |

#### OWASP Top 10 (2021)

| Vulnérabilité                   | Mitigation                                              |
| ------------------------------- | ------------------------------------------------------- |
| A01 : Broken Access Control     | RBAC middleware + Row Level Security PostgreSQL         |
| A02 : Cryptographic Failures    | HTTPS obligatoire, bcrypt (salt 12), JWT HttpOnly       |
| A03 : Injection                 | Prisma ORM (queries paramétrées), validation Zod        |
| A04 : Insécure Design           | Threat modeling en phase cadrage                        |
| A05 : Security Misconfiguration | Security headers (CSP, HSTS, X-Frame-Options)           |
| A06 : Vulnérable Components     | npm audit, Snyk scan automatique                        |
| A07 : Auth Failures             | Raté limiting login (5 tentatives/15 min), MFA Azure AD |
| A08 : Data Integrity            | Signed deployments, CI/CD pipeline intégrité            |
| A09 : Logging Failures          | Winston structured logging, pas de données sensibles    |
| A10 : SSRF                      | Validation URL, allowlist pour appels externes          |

#### Sécurité : Headers HTTP

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

La conformité réglementaire est pilotée par un référent désigné (**CNIL** : obligation de désigner un délégué à la protection des données pour les organismes traitant des données sensibles à grande échelle). La déclaration RGPD est tenue à jour dans le registre des traitements et révisée à chaque évolution majeure de la plateforme. L'ensemble de ces mesures constitue un niveau de conformité adapté au contexte de Tech4Value.

### 5.9 Accessibilité

#### Conformité WCAG 2.1 AA

| Critère                | Implémentation                                            |
| ---------------------- | --------------------------------------------------------- |
| **Contraste couleurs** | Ratio minimum 4.5:1 (texte normal), 3:1 (texte large)     |
| **Navigation clavier** | Tous les éléments interactifs focusables, Tab/Shift+Tab   |
| **Lecteurs d'écran**   | Attributs ARIA, landmarks (`<header>`, `<nav>`, `<main>`) |
| **Textes alternatifs** | `alt` sur toutes les images informatives                  |
| **Formulaires**        | Labels associés, messages d'erreur `aria-describedby`     |
| **Responsive**         | Touch targets ≥ 44px, pas de scroll horizontal            |

#### Outils de validation

- **axe-core** : Scan automatique dans la CI (0 violations critiques)
- **Lighthouse Accessibility** : Score cible ≥ 90
- **Tests manuels** : Navigation clavier + VoiceOver (macOS)

L'équipe intègre l'**accessibilité** dès les wireframes comme une contrainte de conception (voir Annexe E). La charte graphique a été validée pour les ratios de contraste avant toute implémentation. Les composants Shadcn/UI, utilisés pour la bibliothèque de composants, sont conformes ARIA par défaut, réduisant le risque de régressions d'**accessibilité** lors de l'ajout de nouvelles fonctionnalités. Le score Lighthouse cible (≥ 90) est vérifié à chaque déploiement en environnement de staging via la CI GitHub Actions. Ces dispositions témoignent d'une prise en compte sérieuse des utilisateurs en situation de handicap parmi les 185 collaborateurs de l'entreprise.

### 5.10 Qualité des schémas techniques

Les schémas techniques suivants sont fournis dans le dossier :

| Schéma                              | Type                       | Localisation |
| ----------------------------------- | -------------------------- | ------------ |
| Architecture applicative Three-Tier | Diagramme d'architecture   | Section 5.1  |
| Modèle de données (Prisma schéma)   | Diagramme entité-relation  | Annexe B     |
| Flux d'intégration Odoo             | Diagramme de séquence      | Annexe C     |
| Pipeline CI/CD                      | Diagramme de flux          | Section 5.6  |
| Architecture réseau / déploiement   | Diagramme d'infrastructure | Annexe D     |
| Parcours utilisateur (Dashboard)    | Wireframe / User flow      | Annexe E     |

Chaque schéma respecte les conventions de modélisation standard : les diagrammes d'architecture utilisent le modèle C4 (Context, Container, Component), les diagrammes de séquence respectent UML 2.5, et les wireframes suivent les conventions de maquettage Figma (frames, composants, variants). La qualité des schémas se mesure à leur lisibilité, leur complétude et leur cohérence avec le code implémenté, un schéma qui décrit une architecture différente du code déployé n'a pas de valeur documentaire. Tous les schémas ont été réalisés avec des outils de diagramming vectoriels (FigJam, draw.io, Mermaid.js) et exportés en SVG haute résolution pour garantir leur clarté à toutes les échelles d'impression. Les schémas techniques sont intégrés au dossier final avec un niveau de qualité professionnelle.

### 5.11 Analyse critique des limites

#### Limites techniques identifiées

| Limite                                    | Impact                                            | Mitigation                                    | Statut    |
| ----------------------------------------- | ------------------------------------------------- | --------------------------------------------- | --------- |
| **Équipe réduite (2 personnes)**          | Scope limité, pas de spécialisation front/back    | Priorisation RICE stricte, full-stack JS      | Accepté   |
| **API Odoo v15 limitée**                  | Certaines données non exposées via API            | Mock data pour fonctionnalités manquantes     | Contourné |
| **Pas de temps-réel WebSocket**           | Refresh manuel nécessaire pour certaines données  | Polling toutes les 30s, WebSocket en v2       | Différé   |
| **Free tier infrastructure**              | Limites de performance et stockage                | Suffisant pour 185 users, scaling prévu en v2 | Accepté   |
| **Azure AD mock (environnement de test)** | Pas de vrai SSO en environnement de test          | JWT classique avec simulation des rôles       | Contourné |
| **Absence de tests E2E complets**         | Couverture partielle des parcours utilisateur     | Focus sur les 5 parcours critiques            | Accepté   |
| **Performance Power BI**                  | Export CSV uniquement, pas d'API bidirectionnelle | Pipeline XLSX suffisant pour les besoins      | Accepté   |

#### Axes d'amélioration technique

1. **WebSocket temps-réel** : Remplacer le polling par des connexions persistantes pour les KPI live
2. **Micro-services** : Découper le monolithe en services indépendants pour le scaling
3. **GraphQL** : Remplacer REST pour des requêtes plus flexibles côté frontend
4. **Machine Learning** : Prédiction de retards projets basée sur les données historiques
5. **Mobile native** : Application React Native pour les managers en déplacement

Ces limites sont assumées et documentées avec transparence. La **dette technique** accumulée pendant la phase MVP, notamment l'absence de WebSocket, le mock Azure AD et la couverture de tests E2E partielle, est consignée dans un registre dédié et sera résorbée lors des itérations V1.1 et V1.2. La question de la **scalabilité** a fait l'objet d'une décision explicite : le free tier des plateformes choisies (Vercel, Railway, Supabase) supporte jusqu'à 500 utilisateurs simultanés, ce qui est amplement suffisant pour les 185 collaborateurs de Tech4Value. La migration vers des offres payantes est prévue et budgétée dès que le taux d'adoption dépasse 80 % des effectifs. Cette approche de scalabilité progressive est cohérente avec la philosophie de sobriété budgétaire retenue (P3 de la constitution projet).

### 5.12 Documentation utilisateur

#### Structure de la documentation

| Document                      | Public Cible         | Contenu                                             |
| ----------------------------- | -------------------- | --------------------------------------------------- |
| **Guide de Démarrage Rapide** | Tous utilisateurs    | Installation, premier login, navigation             |
| **Guide Administrateur**      | IT & PMO             | Configuration, gestion utilisateurs, RBAC           |
| **Guide Chef de Projet**      | PMO, Chefs de projet | Création projet, suivi, reporting, jalons           |
| **Guide Direction**           | Direction Générale   | Dashboard exécutif, KPI, aide à la décision         |
| **FAQ**                       | Tous                 | Questions fréquentes, résolution problèmes courants |
| **Documentation API**         | Développeurs         | Endpoints REST, authentification, exemples          |

#### Exemple : Guide de démarrage rapide

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

La **prise en main** de la plateforme a été conçue pour être autonome en moins de 30 minutes. Chaque profil utilisateur dispose d'un parcours d'intégration guidé (onboarding wizard) qui s'affiche à la première connexion et présente les fonctionnalités clés selon le rôle. Le **guide utilisateur** complet est accessible depuis l'interface (bouton « ? » en haut à droite) et depuis le portail de formation. Une **FAQ** évolutive recense les 20 questions les plus fréquentes, alimentée par les tickets support et mise à jour à chaque sprint. La documentation est versionnée en parallèle du code dans le dépôt GitHub, garantissant sa cohérence avec l'application déployée. La clarté et l'exhaustivité de cette documentation facilitent l'appropriation de la plateforme par les utilisateurs.

### 5.13 Gouvernance et vision d'évolution

#### Modèle de gouvernance post-déploiement

| Instance                | Fréquence       | Participants                        | Objectif                         |
| ----------------------- | --------------- | ----------------------------------- | -------------------------------- |
| **Comité Stratégique**  | Trimestriel     | Direction, DSI, PMO                 | Orientations produit, budget     |
| **Comité Opérationnel** | Mensuel         | PMO, Tech Lead, Représentants pôles | Suivi KPI, incidents, évolutions |
| **Sprint Review**       | Bi-hebdomadaire | Équipe dev + stakeholders           | Démo nouvelles features          |
| **Maintenance Window**  | Mensuel         | Équipe technique                    | Mises à jour, patches sécurité   |

#### Roadmap d'évolution (24 mois post-MVP)

| Horizon         | Fonctionnalités                                                    | Objectif Stratégique      |
| --------------- | ------------------------------------------------------------------ | ------------------------- |
| **V1.1 (M+3)**  | WebSocket temps-réel, notifications push, mobile responsive avancé | Améliorer l'UX temps-réel |
| **V1.2 (M+6)**  | Intégration Jira/Confluence, API GraphQL, webhooks custom          | Interopérabilité étendue  |
| **V2.0 (M+12)** | Module prédictif ML (retards projets), chatbot assistant           | Intelligence augmentée    |
| **V2.5 (M+18)** | Multi-tenant SaaS, onboarding self-service, marketplace plugins    | Commercialisation B2B     |
| **V3.0 (M+24)** | IA autonome allocation ressources, digital twin projets            | Pilotage autonome         |

#### Indicateurs de succès long terme

| KPI                      | Cible M+6          | Cible M+12         | Cible M+24        |
| ------------------------ | ------------------ | ------------------ | ----------------- |
| Temps reporting PMO      | 15h/semaine (-50%) | 10h/semaine (-67%) | 5h/semaine (-83%) |
| Projets livrés à temps   | 90%                | 92%                | 95%               |
| Taux adoption plateforme | 95%                | 98%                | 99%               |
| NPS utilisateurs         | 50+                | 60+                | 70+               |
| Uptime                   | 99.5%              | 99.9%              | 99.95%            |

#### Plan de maintenance

| Type           | Fréquence        | Responsable         | Actions                                    |
| -------------- | ---------------- | ------------------- | ------------------------------------------ |
| **Corrective** | Continue         | Équipe dev          | Correction bugs, incidents                 |
| **Évolutive**  | Sprints bi-hebdo | Product Owner + dev | Nouvelles features                         |
| **Préventive** | Mensuelle        | Tech Lead           | Mises à jour dépendances, patches sécurité |
| **Adaptive**   | Trimestrielle    | Architecte          | Évolution infrastructure, scaling          |

#### SLA et engagement de disponibilité

Les engagements de niveau de service (**SLA**) de la plateforme Tech4Value sont définis pour chaque composant de l'infrastructure :

| Composant            | SLA Cible                 | Mesure                        | Pénalité en cas de breach |
| -------------------- | ------------------------- | ----------------------------- | ------------------------- |
| **Application web**  | 99,5 % uptime/mois        | Monitoring Vercel             | Incident Comop immédiat   |
| **API Backend**      | 99,5 % uptime/mois        | Monitoring Railway            | Alerte Tech Lead < 15 min |
| **Base de données**  | 99,9 % (Supabase managed) | Dashboard Supabase            | Escalade DSI si > 1h      |
| **Intégration Odoo** | 95 % (best-effort)        | Health check toutes les 5 min | Fallback mode dégradé     |

Le **SLA** de 99,5 % autorise moins de 3,6 heures d'indisponibilité par mois, cohérent avec une infrastructure cloud managée en free tier. La roadmap prévoit de migrer vers des offres pro (Vercel Pro, Railway Pro) lorsque le taux d'adoption dépassera 80 %, permettant d'élever le **SLA** à 99,9 % avec des garanties contractuelles. La gouvernance des incidents suit un processus ITIL simplifié : détection automatique → notification Slack → diagnostic → résolution → post-mortem dans les 48h.

---

## 6. Conduite du changement

La conduite du changement est le facteur différenciant entre un déploiement technique réussi et une adoption réelle par les utilisateurs. Cette section détaille le programme complet mis en œuvre pour accompagner les 185 collaborateurs de Tech4Value dans la transition vers la nouvelle plateforme de pilotage. Le programme s'appuie sur le modèle **ADKAR** (Awareness, Desire, Knowledge, Ability, Reinforcement) qui structure l'accompagnement à l'échelle individuelle et collective. L'identification et la gestion des **résistances** au changement constituent le cœur de la démarche : toute résistance non adressée se traduit en taux d'adoption insuffisant, rendant caduc l'investissement technique. La cartographie des **parties prenantes** (réalisée en S1) a permis de segmenter les 185 collaborateurs en 4 groupes selon leur niveau d'impact et d'adhésion attendu, calibrant ainsi l'intensité de l'accompagnement par segment.

**Rôle de la conduite du changement.** La conduite du changement occupe une place centrale dans le projet. Ce choix reflète une réalité du terrain : la majorité des projets de transformation numérique échouent pour des raisons humaines. Un système non adopté est un système inutile, quelle que soit sa qualité intrinsèque. L'équipe conçoit donc le programme de conduite du changement dès la phase de cadrage (S1-S2) et le pilote en parallèle du développement technique sur l'ensemble des 24 semaines.

**Le modèle ADKAR comme fil conducteur.** Le modèle ADKAR de Prosci est reconnu comme le standard de référence international pour la gestion du changement individuel. Il structure l'accompagnement en 5 étapes séquentielles pour chaque collaborateur : (A) **Awareness**, comprendre pourquoi le changement est nécessaire ; (D) **Desire**, vouloir participer et soutenir le changement ; (K) **Knowledge**, savoir comment changer (formations, guides) ; (A) **Ability**, être capable d'implémenter les nouvelles compétences ; (R) **Reinforcement**, maintenir le changement dans le temps. L'intérêt de ce modèle est sa granularité : il aide à identifier le blocage d'un collaborateur dans son parcours d'adoption et d'adapter l'accompagnement en conséquence, plutôt que d'appliquer une solution générique à tous.

**Enjeux spécifiques au contexte Tech4Value.** Tech4Value présente trois enjeux particuliers qui rendent la conduite du changement plus complexe qu'un déploiement standard. Premièrement, la **multi-localisation** (3 sites) implique que les formations et l'accompagnement ne peuvent pas être uniquement présentiels, une solution hybride présentiel/distanciel est nécessaire. Deuxièmement, la **diversité des profils** (Direction, PMO, Chefs de projet, équipes opérationnelles, IT) exige des approches différenciées selon les niveaux de maturité digitale et les besoins fonctionnels. Troisièmement, le **remplacement de 7 outils existants** par une plateforme unique génère une charge cognitive élevée lors de la transition, les utilisateurs doivent simultanément désapprendre leurs anciens outils et apprendre le nouveau système. Ce phénomène de "double contrainte cognitive" est le principal facteur de résistance identifié dans la cartographie initiale, et il oriente l'ensemble des choix pédagogiques du programme de formation.

**Articulation avec les autres sections.** Le programme de conduite du changement de la section 6 s'articule directement avec : la stratégie de communication (6.2), le programme de formation différencié par profil (6.3), le réseau d'ambassadeurs (6.4) et les indicateurs de suivi de l'adoption (6.5). Ces cinq sous-sections forment un système cohérent : la communication crée l'Awareness et le Desire, la formation apporte le Knowledge et l'Ability, les ambassadeurs facilitent l'Ability et le Reinforcement, et les indicateurs permettent de mesurer la progression sur les 5 étapes ADKAR pour chaque segment de la population cible.

**Calendrier et jalons de la conduite du changement.** Le programme s'étend sur la totalité des 24 semaines du projet, en parallèle du développement technique. Les jalons principaux sont : (M1, S2), Cartographie des parties prenantes et identification des résistances ; (M2, S4), Kick-off de communication et lancement du programme early adopters ; (M4, S10), Première vague de formations (Direction + PMO) ; (M5, S14), Deuxième vague de formations (Chefs de projet + équipes opérationnelles) ; (M6, S18), Déploiement progressif assisté par les ambassadeurs ; (M7, S22), Mesure de l'adoption et ajustements ; (M8, S24), Bilan final et rapport d'adoption. Ce calendrier est synchronisé avec les jalons techniques pour garantir que les formations sont dispensées au moment où les fonctionnalités sont disponibles dans l'environnement de staging, puis en production.

**Indicateurs d'adoption et de succès.** Le succès de la conduite du changement est mesuré par quatre indicateurs clés : le taux d'activation (pourcentage de comptes activés par rapport aux comptes créés), le taux d'utilisation hebdomadaire (pourcentage d'utilisateurs actifs sur 7 jours), le NPS interne (Net Promoter Score mesuré par enquête trimestrielle), et le taux de résolution autonome des incidents (sans recours au support IT). Ces indicateurs sont suivis en temps réel dans le tableau de bord de pilotage projet (section 4.2) et présentés au comité de pilotage mensuel. Un taux d'activation inférieur à 60 % à S18 déclencherait automatiquement un plan de rattrapage avec renforcement de l'accompagnement pour les segments les moins avancés.

### 6.1 Stratégie globale

La transformation numérique impacte **185 collaborateurs** répartis sur **3 sites**. La stratégie de conduite du changement s'articule autour de 4 piliers, structurés selon le modèle **ADKAR** (Awareness → Desire → Knowledge → Ability → Reinforcement). La cartographie des **parties prenantes** segmente les collaborateurs en 4 groupes selon leur niveau d'impact et leur propension au changement : les sponsors actifs (Direction, DSI), les relais métier (PMO, Chefs de projet), les utilisateurs courants (pôles opérationnels) et les utilisateurs périphériques (Fonctions Support). Les **résistances** anticipées, notamment chez les chefs de projet habitués à Excel et les managers IT craignant la perte d'autonomie sur leurs outils, sont traitées dès la phase de communication par une approche de co-construction : les utilisateurs résistants sont invités à participer au programme early adopters pour transformer leur résistance en contribution. Cette approche inclusive et participative réduit le risque d'adoption partielle et garantit un déploiement progressif réussi sur les 24 semaines du projet.

| Pilier             | Objectif                   | Actions Clés                                                    |
| ------------------ | -------------------------- | --------------------------------------------------------------- |
| **Communication**  | Créer l'adhésion           | All-hands kickoff, newsletter hebdomadaire, transparence totale |
| **Formation**      | Développer les compétences | Formations par rôle, tutoriels vidéo, ateliers pratiques        |
| **Accompagnement** | Soutenir l'adoption        | Champions par pôle, help desk dédié, FAQ évolutive              |
| **Mesure**         | Piloter l'adoption         | NPS trimestriel, taux d'usage, satisfaction formation           |

### 6.2 Plan de communication

| Phase             | Message                                        | Canal                  | Cible          | Timing  | **Fréquence**   |
| ----------------- | ---------------------------------------------- | ---------------------- | -------------- | ------- | --------------- |
| **Awareness**     | Vision transformation digitale                 | All-hands meeting      | Tous (185)     | S1      | 1 fois          |
| **Understanding** | Pourquoi changer ? Bénéfices par rôle          | Newsletter + vidéo     | Tous           | S2-S4   | Hebdomadaire    |
| **Buy-in**        | Démonstrations MVP, témoignages early adopters | Ateliers démo mensuels | PMO + Managers | S6-S12  | Mensuel         |
| **Adoption**      | Guides d'utilisation, tips & tricks            | Email + Slack          | Tous           | S12-S18 | Bi-hebdomadaire |
| **Reinforcement** | Success stories, reconnaissance contributeurs  | Newsletter + all-hands | Tous           | S18-S24 | Mensuel         |

Le plan de **communication** est piloté par Jules Courtin avec une **fréquence** adaptée à chaque phase. Le **message clé** central, « Tech4Value vous libère des tâches administratives pour vous concentrer sur la valeur ajoutée », est décliné par segment : pour la Direction, l'accent est mis sur la visibilité et la prise de décision ; pour les chefs de projet, sur le gain de temps de reporting ; pour les équipes opérationnelles, sur la simplification de la saisie. Cette personnalisation des messages par audience est un facteur déterminant de l'adhésion. La **communication** s'appuie sur des canaux existants (Teams, newsletter interne, réunions de pôles) pour minimiser la friction et maximiser la portée.

### 6.3 Programme de formation

| Module             | **Profil** Cible             | Format (présentiel / **distanciel**) | Durée | Contenu                                        |
| ------------------ | ---------------------------- | ------------------------------------ | ----- | ---------------------------------------------- |
| **Prise en Main**  | Tous utilisateurs            | E-learning **distanciel** + atelier  | 2h    | Navigation, saisie temps, consultation KPI     |
| **Chef de Projet** | **Profil** PMO (15-20 pers.) | Atelier présentiel                   | 4h    | Gestion projets, reporting, milestones         |
| **Direction**      | **Profil** Comex (10 pers.)  | Atelier dédié présentiel             | 1h30  | Dashboard exécutif, aide à la décision         |
| **Administrateur** | **Profil** IT (5 pers.)      | Formation technique **distanciel**   | 4h    | Configuration, RBAC, intégrations, maintenance |

Le programme de formation est conçu pour s'adapter à chaque **profil** utilisateur, en combinant des formats **présentiel** pour les groupes prioritaires (Direction, PMO) et **distanciel** (e-learning asynchrone) pour les utilisateurs opérationnels dispersés sur 3 sites. Le module **distanciel** est hébergé sur la plateforme LMS interne (SharePoint Learning) et accessible en replay permanent. Chaque module se termine par une évaluation des acquis (QCM + exercice pratique) permettant de valider la montée en compétences et d'adapter le dispositif. Le budget formation est intégré au poste « Formation & Change » du budget prévisionnel (40k€ en année 1).

### 6.4 Programme Early Adopters

- **Sélection** : 2-3 champions par pôle (18-27 personnes au total), choisis parmi les collaborateurs moteurs du changement ou volontaires
- **Rôle d'ambassadeur** : Testeurs bêta, **ambassadeurs** internes, relais de **feedback** vers l'équipe produit
- **Avantages** : Accès anticipé à la plateforme (dès S10), influence directe sur les priorités produit, reconnaissance lors des all-hands
- **KPI** : Taux d'adoption > 80% à S6, NPS early adopters ≥ 50

Les **ambassadeurs** constituent le levier le plus puissant d'adoption organique : un pair convaincu est infiniment plus persuasif qu'une communication top-down. Leur rôle de **feedback** est formalisé par des sessions de retour bi-hebdomadaires avec l'équipe produit (Jules Courtin), permettant d'intégrer les remontées terrain dans les sprints suivants. Chaque **ambassadeur** reçoit une formation approfondie de 6 heures (vs 2h pour les utilisateurs standard) et dispose d'un accès direct à Jules pour escalader tout blocage. Le programme early adopters cible délibérément les 9 pôles de l'entreprise pour garantir une représentation transverse et éviter les effets de silo dans le déploiement.

### 6.5 KPI de la conduite du changement

| Indicateur                        | Baseline       | Cible S6 | Cible S12 | Cible S24 |
| --------------------------------- | -------------- | -------- | --------- | --------- |
| NPS interne                       | 30             | 45       | 50        | 65        |
| **Taux d'utilisation** à **J+30** | 0%             | 60%      | 80%       | 90%       |
| **Taux d'utilisation** à **J+90** | 0%             | 75%      | 90%       | 95%       |
| Taux adoption MVP                 | 0%             | 80%      | 90%       | 95%       |
| Satisfaction formation (CSAT)     | Non applicable | ≥7/10    | ≥8/10     | ≥8.5/10   |
| Nombre de champions actifs        | 0              | 18       | 25        | 27        |
| Tickets support / semaine         | Non applicable | <20      | <10       | <5        |

Le **taux d'utilisation** à **J+30** (30 jours après le déploiement pour chaque vague d'utilisateurs) est le KPI principal de l'adoption. Un **taux d'utilisation** inférieur à 50 % à **J+30** déclenche automatiquement un plan de relance : analyse des freins par entretiens utilisateurs, adaptation du programme de formation, et activation de sessions de soutien individuels par les ambassadeurs. Le suivi à **J+90** permet de mesurer l'ancrage durable des nouvelles pratiques (vs un usage initial de curiosité). Ces deux mesures sont collectées automatiquement via les logs d'activité de la plateforme, sans déclaratif utilisateur, garantissant la fiabilité des données.

---

## 7. Annexes

Les annexes ci-dessous sont intégrées directement au présent dossier technique afin de le rendre autonome. Elles synthétisent les éléments techniques et stratégiques nécessaires à la compréhension du projet, sans dépendre de fichiers annexes redondants. L'ensemble des **24 semaines** de projet est couvert par les plannings et schémas ci-dessous.

Les 8 annexes couvrent l'intégralité des dimensions du projet : planification (Annexe A, Gantt), modèle de données (Annexe B, Prisma Schéma), intégrations (Annexe C, Diagramme de séquence Odoo), déploiement (Annexe D, Architecture réseau), UX (Annexe E, Wireframes et user flows), gouvernance (Annexe F, Matrice RACI complète), modèle économique (Annexe G, Business Model Canvas) et analyse organisationnelle (Annexe H, McKinsey 7S). Ces annexes intégrées constituent le socle documentaire sur lequel s'appuie l'argumentation technique du présent dossier. Leur présence dans le dossier garantit que le comité de pilotage dispose des pièces justificatives nécessaires à l'évaluation de la cohérence et de la complétude de la solution proposée.

### Annexe A : diagramme de Gantt détaillé

Le diagramme de Gantt couvre les **24 semaines** complètes du projet Tech4Value, de S1 (1er octobre 2025) à S24 (31 mars 2026). Il intègre les 30 tâches principales décomposées en 4 phases (Cadrage, Développement MVP, Consolidation, Déploiement et documentation), avec les dates de début et de fin de chaque tâche, les dépendances inter-tâches (liens Finish-to-Start et Start-to-Start), et le chemin critique surligné en rouge (T1.6 → T2.1 → T2.3 → T2.2 → T2.5 → T3.2 → T4.2 → T4.6). Les 8 jalons majeurs (M1 à M8) sont matérialisés par des losanges. Deux buffers de 2 semaines chacun sont intégrés aux phases 3 et 4 pour absorber les aléas. Le Gantt est synthétisé dans cette annexe et peut être maintenu dans GanttPRO pour le pilotage opérationnel.

### Annexe B : modèle de données (Prisma schéma)

Le schéma Prisma définit le modèle de données complet de la plateforme Tech4Value. Il comprend les entités principales suivantes : `User` (id, email, rôle, poleId), `Pole` (id, name, headCount), `Project` (id, name, status, budget, startDate, endDate, priority), `ProjectAssignment` (userId, projectId, allocationPercent), `Timesheet` (id, userId, projectId, date, hours), `Milestone` (id, projectId, name, dueDate, completed), `Risk` (id, projectId, description, probability, impact, mitigation), `Document` (id, projectId, url, type), et `Report` (id, projectId, generatedAt, content). Les relations sont de type 1-N (Pôle → Users, Project → Milestones) et N-N (Users ↔ Projects via ProjectAssignment). Row Level Security PostgreSQL est configuré pour isoler les données par rôle (DG, PMO, ChefProjet, Collaborateur).

### Annexe C : diagramme de séquence : intégration Odoo

Le diagramme de séquence documente les échanges entre les composants lors d'une synchronisation Odoo. Séquence complète : (1) Le scheduler interne (cron toutes les 15 min) déclenche `OdooAdapter.sync()` ; (2) L'adaptateur appelle l'**API** JSON-RPC Odoo v15 endpoint `/web/dataset/call_kw` avec les paramètres `project.project` et `project.task` ; (3) Odoo retourne la liste des projets avec budgets, responsables et statuts ; (4) L'adaptateur transforme la réponse en format interne et appelle `ProjectService.upsert()` ; (5) Prisma exécute un `upsert` PostgreSQL (INSERT OR UPDATE) sur la table `Project` ; (6) Le dashboard frontend reçoit une notification de mise à jour via polling (toutes les 30s). En cas d'indisponibilité de l'**API** Odoo, l'adaptateur bascule sur le mode dégradé (dernières données connues affichées avec horodatage de fraîcheur).

### Annexe D : architecture réseau / déploiement

L'infrastructure de déploiement de Tech4Value repose sur trois plateformes cloud en free tier pour la phase MVP. Le frontend React est déployé sur **Vercel** (CDN global, edge functions, déploiement automatique sur push main). Le backend Node.js/Express est déployé sur **Railway** (conteneur Docker, scaling automatique, PostgreSQL managé via add-on Railway). La base de données PostgreSQL 15 est hébergée sur **Supabase** (backups automatiques quotidiens, Row Level Security activé, API REST auto-générée). Le flux réseau suit le chemin HTTPS : utilisateur → **CDN** Vercel (edge) → API Railway (TLS 1.3) → PostgreSQL Supabase (connexion chiffrée). Azure AD assure l'authentification SSO via le protocole OAuth 2.0 / OIDC. Les certificats TLS sont provisionnés automatiquement par Vercel et Railway (Let's Encrypt). Le **CDN** Vercel assure une latence inférieure à 50ms pour les assets statiques sur l'ensemble du territoire français.

### Annexe E : wireframes / user flows

Les **wireframes** basse fidélité et les **user flows** documentent les 3 parcours utilisateurs critiques de la plateforme. **Parcours 1, PM (Chef de Projet)** : Connexion → Dashboard projet → Saisie timesheet → Création milestone → Génération rapport PDF (7 écrans). **Parcours 2, DG (Direction Générale)** : Connexion → Dashboard exécutif portefeuille → Drill-down projet → Export KPI Excel (4 écrans). **Parcours 3, Admin (IT)** : Connexion → Administration utilisateurs → Configuration RBAC → Paramètres intégrations (5 écrans). Chaque **wireframe** illustre la disposition des composants clés (navigation, KPI cards, tableaux, filtres), sans imposer de choix visuels définitifs. Les **user flows** identifient les points de décision (redirections conditionnelles selon le rôle) et les états d'erreur (session expirée, accès refusé, données indisponibles). Les **wireframes** sont synthétisés dans cette annexe sous forme de parcours et d'écrans clés.

### Annexe F : matrice RACI complète

La matrice RACI complète détaille la répartition des **responsabilités** pour l'ensemble des activités du projet Tech4Value. Les 4 niveaux : **R** (Responsible, exécute), **A** (Accountable, valide et rend compte), **C** (Consulted, sollicité pour avis), **I** (Informed, tenu informé). Les colonnes représentent les parties prenantes : Jules Courtin (PM), Léo Brival (Tech Lead), Direction Générale, DSI, Copil, et représentants des 9 pôles. Les lignes couvrent les 30 tâches du WBS, les 8 jalons, les 5 documents projet et les 4 instances de gouvernance. Cette matrice garantit qu'aucune activité n'est sans **responsable** désigné (pas de case R vide) et qu'aucune partie prenante n'est accountable sur plus de 3 activités simultanées (prévention de la surcharge décisionnelle). La matrice est mise à jour en début de chaque phase et présentée au Copil mensuel.

### Annexe G : Business Model Canvas

Le **Business Model Canvas** de la solution Tech4Value structure la proposition de valeur et le modèle économique selon les 9 blocs d'Osterwalder. **Segments clients** : PME ETI (50-500 collaborateurs) en transformation digitale, DSI et PMO de sociétés de services numériques. **Proposition de valeur** : Pilotage unifié du portefeuille projets avec réduction de 30 % du temps de reporting et visibilité temps-réel. **Canaux** : Démonstration directe, partenariats intégrateurs SI, marketplace Odoo. **Relations clients** : SaaS avec support inclus, onboarding assisté, communauté utilisateurs. **Sources de revenus** : Abonnement SaaS (150-500€/mois selon taille), implémentation (forfait), formation. **Ressources clés** : Stack TypeScript, intégrations Odoo/SharePoint, Claude API. **Activités clés** : Développement produit, intégrations SI, support client. **Partenaires** : Odoo, Microsoft (Azure AD/SharePoint), Anthropic (Claude API). **Structure de coûts** : Infrastructure cloud (20 %), RH développement (65 %), marketing (15 %). La **proposition de valeur** centrale, « Un seul écran pour piloter tous vos projets », est validée par les 5 projets pilotes déployés dans le cadre projet.

### Annexe H : matrice McKinsey 7S

L'analyse **McKinsey 7S** appliquée à Tech4Value évalue la cohérence des 7 dimensions organisationnelles avant et après déploiement de la solution. **Strategy** : Transformation digitale axée données, réduction des silos décisionnels, alignement fort avec la vision DG. **Structure** : Organisation matricielle 9 pôles maintenue, rôle PMO renforcé par la plateforme. **Systems** : Passage de 7 outils hétérogènes à 1 plateforme unifiée, impact maximal sur cette dimension. **Shared Values** : Culture de la transparence et de la décision data-driven à installer progressivement (horizon 12 mois). **Skills** : Montée en compétences requise sur l'analyse de données et le reporting digital (programme de formation Section 6.3). **Style** : Management par les KPI remplace le management par l'intuition, nécessite accompagnement des managers intermédiaires. **Staff** : 185 collaborateurs concernés, 78 ETP sur les 5 projets stratégiques, population cible principale du changement. L'analyse **McKinsey 7S** révèle que les dimensions **Strategy** et **Structure** sont déjà alignées avec la transformation visée ; les dimensions **Shared Values** et **Skills** représentent les principaux facteurs de risque d'adoption, justifiant l'investissement dans le programme de conduite du changement (Section 6).

---

## Retours d'expérience individuels

Les retours d'expérience individuels sont fournis dans deux documents séparés afin de distinguer clairement l'analyse de chaque rôle projet :

- `retour-experience-jules-courtin.md` : retour d'expérience de Jules Courtin, Chef de projet / Product Manager.
- `retour-experience-leo-brival.md` : retour d'expérience de Léo Brival, Tech Lead / architecte solution.

---
