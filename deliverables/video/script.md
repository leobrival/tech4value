# Script Vidéo MVP — Tech4Value

**Format visé** : vidéo finale de 20 à 30 minutes, avec une cible de 25 minutes. Le rythme prévu est celui d'une présentation professionnelle : alternance entre Jules Courtin et Léo Brival, démonstration dans Odoo, captures d'écran, tableaux de synthèse et séquences de conclusion. Les visuels doivent prioritairement s'appuyer sur les interfaces Odoo disponibles, notamment l'écran Apps, Project, Timesheets, Planning, Documents, Dashboards, Approvals, Employees, Accounting et Settings.

---

## 1. Introduction et Structure de la Vidéo

**Intervenant : Jules**  
**Visuel Odoo : écran Apps Odoo en ouverture, zoom progressif sur Project, Dashboards, Timesheets et Documents**

Bonjour, nous sommes Jules Courtin et Léo Brival, et nous vous présentons Tech4Value, notre projet d'étude M2 CPIT 2025. L'objectif de cette vidéo est de vous montrer, en 20 à 30 minutes, comment notre MVP répond à un problème très concret : permettre à une entreprise de piloter plusieurs projets stratégiques avec une vision fiable, consolidée et actionnable. Nous avons construit cette présentation comme une démonstration progressive. D'abord, nous posons le contexte de l'entreprise et les objectifs du projet. Ensuite, nous expliquons la problématique métier, les irritants actuels et les axes que nous avons choisis. Puis nous passons au cœur de la vidéo : la démonstration du MVP, avec les écrans clés et les scénarios d'usage.

**Action Odoo :** afficher ou préparer l’interface suivante : écran Apps Odoo en ouverture, zoom progressif sur Project, Dashboards, Timesheets et Documents. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Léo**  
**Visuel Odoo : écran Apps conservé en arrière-plan, superposition du plan V-01 à V-11 en 8 étapes**

La structure suit directement les critères d'évaluation de la vidéo : structure claire, contexte et objectifs, qualité de la démonstration, qualité visuelle et technique, originalité, impact potentiel, fluidité, pertinence des informations, capacité à capter l'attention et capacité à convaincre. Jules portera principalement la vision projet, la problématique, la valeur métier et les bénéfices pour les utilisateurs finaux. Je prendrai en charge l'explication de la solution, les choix techniques, les intégrations SI et les éléments de démonstration applicative. Nous avons volontairement conçu la vidéo comme un récit : on part d'une organisation confrontée à des silos d'information, puis on montre comment le MVP transforme ces données dispersées en décisions de pilotage.

**Action Odoo :** afficher ou préparer l’interface suivante : écran Apps conservé en arrière-plan, superposition du plan V-01 à V-11 en 8 étapes. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : barre de progression de la vidéo par-dessus l'écran Apps, avec repères vers Project, Dashboards et Settings**

Le fil conducteur est simple : pourquoi Tech4Value a besoin d'un cockpit de pilotage, comment nous avons priorisé le périmètre MVP, ce que la solution montre concrètement, et pourquoi cette solution peut convaincre un COPIL, un PMO, une DSI et des chefs de projet. À la fin de la vidéo, vous devrez avoir une vision claire de trois éléments : le besoin auquel nous répondons, la preuve apportée par le MVP, et la trajectoire d'évolution possible après cette première version.

**Action Odoo :** afficher ou préparer l’interface suivante : barre de progression de la vidéo par-dessus l'écran Apps, avec repères vers Project, Dashboards et Settings. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

---

## 2. Contexte et Objectifs du Projet

**Intervenant : Jules**  
**Visuel Odoo : Apps Odoo puis zoom sur Employees, Project et Planning pour introduire l'entreprise, les équipes et le portefeuille**

Tech4Value est une entreprise fictive mais réaliste de 185 collaborateurs. Elle est organisée autour d'un siège et de deux antennes régionales, avec une structure matricielle qui combine des pôles métiers, des fonctions support, une DSI, un PMO, une équipe Data et BI, une équipe Sécurité et Conformité, une fonction Finance et Achats, un pôle RH et Communication, ainsi qu'une cellule RSE et Green IT. Cette organisation reflète une entreprise de taille intermédiaire qui a déjà une certaine maturité numérique, mais qui rencontre encore des difficultés de consolidation lorsqu'il s'agit de piloter plusieurs initiatives stratégiques en parallèle.

**Action Odoo :** afficher ou préparer l’interface suivante : Apps Odoo puis zoom sur Employees, Project et Planning pour introduire l'entreprise, les équipes et le portefeuille. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Le point de départ du projet est le portefeuille de 5 projets stratégiques actuellement suivis par Tech4Value, avec une enveloppe budgétaire de démonstration de 350 000 €. Ces projets mobilisent 78 ETP, soit environ 42 % des effectifs. Ils concernent des sujets critiques pour l'entreprise : la mise en conformité RGPD, le déploiement d'un ERP Finance et Supply Chain, la création d'une plateforme Data Lake et BI Groupe, le programme Green IT Cloud durable, et le portail RH unifié. Chacun de ces projets a ses propres enjeux, ses propres jalons, ses risques, ses équipes et ses données de suivi. Pour la direction, le sujet n'est donc pas seulement de savoir si chaque projet avance ; le sujet est de comparer, arbitrer, prioriser et détecter les signaux faibles à l'échelle du portefeuille.

**Action Odoo :** afficher ou préparer l’interface suivante : Apps Odoo puis zoom sur Employees, Project et Planning pour introduire l'entreprise, les équipes et le portefeuille. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Léo**  
**Visuel Odoo : zoom sur Project, Timesheets, Documents, Accounting, Dashboards et Settings comme briques SI à paramétrer**

Le système d'information de Tech4Value contient déjà plusieurs briques importantes. Odoo est utilisé pour certaines données RH, financières et projet. SharePoint centralise une partie des documents et livrables. Power BI est utilisé pour le reporting financier et l'analyse. Azure AD sert à gérer les identités et les accès. À côté de ces outils structurants, Excel reste utilisé pour des consolidations ponctuelles, des tableaux de suivi, des arbitrages budgétaires ou des points de situation. Le problème n'est donc pas l'absence d'outils. Le problème est l'absence d'une couche de pilotage transversale, capable de connecter les informations utiles, de les rendre lisibles et de les transformer en support de décision.

**Action Odoo :** afficher ou préparer l’interface suivante : zoom sur Project, Timesheets, Documents, Accounting, Dashboards et Settings comme briques SI à paramétrer. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Notre objectif est de concevoir une plateforme de pilotage stratégique qui ne remplace pas les outils existants, mais qui les connecte. Le MVP doit permettre de visualiser le portefeuille de projets, d'afficher les indicateurs clés, de suivre les risques, de relier les documents importants, de préparer des exports vers Power BI et de rendre les arbitrages plus rapides. Le bénéfice attendu est une réduction de 30 % du temps de reporting, mais aussi une meilleure fiabilité de l'information, une meilleure traçabilité des décisions et une capacité accrue à piloter les ressources critiques.

**Action Odoo :** afficher ou préparer l’interface suivante : zoom sur Project, Timesheets, Documents, Accounting, Dashboards et Settings comme briques SI à paramétrer. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : interface Dashboards ou Project avec overlay des quatre objectifs SMART**

Nous avons donc formulé quatre objectifs principaux. Premier objectif : centraliser la vision du portefeuille stratégique. Deuxième objectif : réduire le temps de consolidation manuelle. Troisième objectif : sécuriser la décision en donnant accès aux bons indicateurs au bon moment. Quatrième objectif : construire une solution cohérente avec les exigences académiques du projet, en intégrant la gestion des coûts, la planification, les risques, la conduite du changement, le RGPD, l'accessibilité, le Green IT et la gouvernance post-MVP. Cette combinaison entre besoin métier, démonstration technique et démarche de chef de projet IT structure toute la suite de la vidéo.

**Action Odoo :** afficher ou préparer l’interface suivante : interface Dashboards ou Project avec overlay des quatre objectifs SMART. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

---

## 3. Problématique et Axes Choisis

**Intervenant : Jules**  
**Visuel Odoo : écran Apps annoté montrant la dispersion des modules Project, Timesheets, Documents, Accounting et Dashboards**

La problématique centrale peut se résumer ainsi : comment permettre à Tech4Value de piloter ses 5 projets stratégiques avec une vision consolidée, fiable et actionnable, alors que les données sont réparties dans plusieurs outils et que le reporting dépend encore fortement d'assemblages manuels ? Cette problématique est classique dans les organisations qui ont grandi par empilement d'outils. Chaque outil répond à un besoin local, mais aucun ne donne une vision globale du portefeuille. Odoo contient une partie des données de budget et de ressources, SharePoint contient les documents, Power BI produit des tableaux de bord, Azure AD gère les utilisateurs, et Excel sert encore de zone tampon entre les systèmes.

**Action Odoo :** afficher ou préparer l’interface suivante : écran Apps annoté montrant la dispersion des modules Project, Timesheets, Documents, Accounting et Dashboards. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Cette fragmentation crée plusieurs irritants et renforce les silos entre les équipes, les documents et les données de pilotage. Le premier est le temps passé à consolider les informations avant chaque comité. Les équipes doivent récupérer des données, vérifier les versions, recouper les chiffres et préparer des supports. Le deuxième est la perte de confiance dans l'information. Si deux fichiers ne donnent pas le même chiffre, la discussion se déplace du fond vers la fiabilité de la donnée. Le troisième est le manque de visibilité sur les risques transverses. Un retard sur un projet, une surcharge d'équipe ou un arbitrage budgétaire peut avoir un impact sur tout le portefeuille, mais cet impact n'est pas toujours visible à temps.

**Action Odoo :** afficher ou préparer l’interface suivante : écran Apps annoté montrant la dispersion des modules Project, Timesheets, Documents, Accounting et Dashboards. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Léo**  
**Visuel Odoo : tableau de correspondance module Odoo → problème résolu → bénéfice COPIL**

Pour répondre à cette problématique, nous avons retenu trois axes. Le premier axe est la consolidation du pilotage. Le MVP doit donner une vision synthétique des projets, avec des KPI comparables, des statuts homogènes et des alertes lisibles. Le deuxième axe est l'interopérabilité avec le SI existant. Nous ne voulons pas créer un outil isolé qui obligerait les équipes à ressaisir toutes les informations ; nous voulons montrer une logique de connexion avec Odoo, SharePoint, Power BI et Azure AD. Le troisième axe est l'aide à la décision. La solution doit rendre les arbitrages plus simples : quels projets nécessitent une action ? Quels risques sont critiques ? Où faut-il affecter les ressources ? Quels jalons approchent ?

**Action Odoo :** afficher ou préparer l’interface suivante : tableau de correspondance module Odoo → problème résolu → bénéfice COPIL. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Le périmètre du MVP est volontairement maîtrisé. Nous avons choisi les fonctionnalités qui démontrent le plus rapidement la valeur : authentification par rôle, dashboard multi-projets, fiches projet, suivi des risques, rattachement documentaire, simulation de connecteurs Odoo et SharePoint, export structuré vers Power BI, et indicateurs d'impact. À l'inverse, nous avons exclu du MVP certains éléments trop lourds pour une première version : workflow complet d'approbation, synchronisation temps réel de tous les systèmes, moteur de règles avancé et personnalisation complète par pôle. Ces éléments sont placés dans la roadmap post-MVP.

**Action Odoo :** afficher ou préparer l’interface suivante : tableau de correspondance module Odoo → problème résolu → bénéfice COPIL. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : liste de périmètre MVP avec Project, Timesheets, Documents, Dashboards et Approvals en Must Have**

Ce choix est important pour la pertinence du projet. Un MVP n'est pas une version incomplète par manque d'ambition ; c'est une version concentrée sur la preuve de valeur. Nous avons donc priorisé ce qui permet de convaincre rapidement les utilisateurs finaux : voir, comprendre, décider. Cette discipline de périmètre garantit un équilibre entre ambition, faisabilité et qualité de démonstration. Elle permet aussi de défendre le projet devant un jury comme devant un comité de direction : nous savons ce que nous faisons maintenant, pourquoi nous le faisons, et ce que nous remettons à plus tard.

**Action Odoo :** afficher ou préparer l’interface suivante : liste de périmètre MVP avec Project, Timesheets, Documents, Dashboards et Approvals en Must Have. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

---

## 4. Démonstration du MVP

**Intervenant : Léo**  
**Visuel Odoo : écran Settings / Users & Companies pour présenter les rôles Direction, PMO et Chef de projet**

Passons maintenant à la démonstration du MVP. La première étape est l'accès à la plateforme. L'utilisateur arrive sur un écran de connexion qui simule une authentification via Azure AD. Dans un contexte réel, cette intégration permettrait de s'appuyer sur les comptes existants de l'entreprise, sur les groupes d'utilisateurs et sur une logique de sécurité centralisée. Pour le MVP, nous simulons trois profils : direction, PMO et chef de projet. Chaque profil accède à une vue adaptée. La direction a besoin d'une synthèse stratégique, le PMO d'une vue de portefeuille, et le chef de projet d'informations plus opérationnelles.

**Action Odoo :** afficher ou préparer l’interface suivante : écran Settings / Users & Companies pour présenter les rôles Direction, PMO et Chef de projet. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.


**Visuel Odoo : module Dashboards configuré avec KPI portefeuille, budget, avancement, charge et risques**

Une fois connecté, l'utilisateur arrive sur le dashboard exécutif. On retrouve les 5 projets stratégiques de Tech4Value, avec des indicateurs synthétiques : budget consommé, avancement, charge ETP, niveau de risque, statut planning, prochains jalons et santé globale du projet. L'objectif est que le COPIL puisse comprendre en moins d'une minute quels projets sont sous contrôle et lesquels nécessitent un arbitrage. Par exemple, si le projet ERP Finance présente un dépassement budgétaire et un risque planning élevé, il remonte automatiquement dans les alertes prioritaires. À l'inverse, un projet stable reste visible, mais ne monopolise pas l'attention.

**Action Odoo :** afficher ou préparer l’interface suivante : module Dashboards configuré avec KPI portefeuille, budget, avancement, charge et risques. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : module Project, vue Kanban puis fiche projet détaillée avec jalons, responsables et statut**

Du point de vue métier, cette vue répond au besoin principal : arrêter de chercher l'information dans plusieurs fichiers avant de prendre une décision. En cliquant sur un projet, on accède à une fiche détaillée avec le budget prévisionnel, le budget réel, les jalons, les risques ouverts, les responsables, les documents associés et les derniers points d'attention. Cette fiche projet sert de point de vérité opérationnel. Le chef de projet peut l'utiliser pour suivre son périmètre, le PMO pour préparer un comité, et la direction pour comprendre rapidement les écarts.

**Action Odoo :** afficher ou préparer l’interface suivante : module Project, vue Kanban puis fiche projet détaillée avec jalons, responsables et statut. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Ce qui est important ici, c'est la double lecture. La solution donne une vue globale du portefeuille, mais permet aussi de descendre dans le détail d'un projet. Dans beaucoup d'outils, on a soit une vue très synthétique mais peu exploitable, soit une vue très détaillée mais difficile à comparer. Notre MVP cherche à combiner les deux : une synthèse pour décider vite, et un détail suffisant pour justifier la décision.

**Action Odoo :** afficher ou préparer l’interface suivante : module Project, vue Kanban puis fiche projet détaillée avec jalons, responsables et statut. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Léo**  
**Visuel Odoo : modules Timesheets, Planning et Accounting pour illustrer budget, temps passés et ressources**

Le premier connecteur présenté est Odoo. Dans notre MVP, nous simulons l'import des budgets, des affectations ressources et des temps passés. Le but est de montrer comment les données opérationnelles peuvent alimenter automatiquement le pilotage. Au lieu de ressaisir des chiffres dans un reporting manuel, l'application récupère les informations utiles, les normalise, puis les expose dans le dashboard. Dans une version cible, ce connecteur s'appuierait sur l'API Odoo pour récupérer les données de projet, les charges et les budgets à une fréquence définie.

**Action Odoo :** afficher ou préparer l’interface suivante : modules Timesheets, Planning et Accounting pour illustrer budget, temps passés et ressources. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.


**Visuel Odoo : module Documents pour rattacher cahier des charges, PV COPIL, budgets et livrables au projet**

Le deuxième connecteur concerne SharePoint. Les projets stratégiques produisent beaucoup de documents : cahiers des charges, comptes rendus de COPIL, PV de recette, budgets, supports de formation, documents de conduite du changement, annexes techniques et éléments de conformité. Dans notre MVP, chaque projet peut afficher les documents associés et les relier à des jalons ou à des décisions. SharePoint reste le référentiel documentaire ; Tech4Value devient la couche de pilotage qui contextualise ces documents.

**Action Odoo :** afficher ou préparer l’interface suivante : module Documents pour rattacher cahier des charges, PV COPIL, budgets et livrables au projet. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.


**Intervenant : Jules**  
**Visuel Odoo : Project avec tâches de type Risque, tags criticité, responsable et activité planifiée**

La gestion des risques est un autre élément central de la démonstration. Le MVP affiche un registre des risques par projet, avec probabilité, impact, criticité, responsable, statut et plan de mitigation. Pour un COPIL, cette information est décisive. Un projet peut être dans le budget aujourd'hui, mais exposé à un risque critique demain. À l'inverse, un projet peut sembler en difficulté, mais disposer déjà d'un plan de contingence solide. La plateforme rend ces nuances visibles.

**Action Odoo :** afficher ou préparer l’interface suivante : Project avec tâches de type Risque, tags criticité, responsable et activité planifiée. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Prenons un exemple. Si l'intégration Odoo est jugée instable, le risque peut être qualifié de critique, avec un plan de mitigation basé sur un POC précoce et un fallback en données mockées. Si l'adoption utilisateur est faible, le plan peut inclure des early adopters, des formations ciblées et une mesure d'usage à J+30. Le MVP ne se contente donc pas de lister des risques ; il relie chaque risque à une action. Cette logique est essentielle pour montrer une maturité de gestion de projet.

**Action Odoo :** afficher ou préparer l’interface suivante : Project avec tâches de type Risque, tags criticité, responsable et activité planifiée. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Léo**  
**Visuel Odoo : Dashboards puis export/tableur pour préparer les données à reprendre dans Power BI**

Enfin, nous montrons l'export vers Power BI. L'objectif n'est pas de remplacer Power BI, mais de préparer des données propres, structurées et consolidées pour l'analyse. Le MVP génère un export exploitable avec les projets, KPI, risques, jalons et informations de suivi. Cette fonctionnalité répond à une contrainte réaliste : beaucoup d'organisations disposent déjà de tableaux de bord Power BI, mais manquent d'un flux fiable pour les alimenter. Notre solution joue donc le rôle de couche de consolidation entre les outils métiers et les outils décisionnels.

**Action Odoo :** afficher ou préparer l’interface suivante : Dashboards puis export/tableur pour préparer les données à reprendre dans Power BI. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : parcours COPIL complet — Dashboards → Project → Documents → Approvals → décision**

Pour conclure la démonstration, prenons un cas d'usage COPIL. La direction voit que le projet Data Lake a un retard sur un jalon critique, que le projet ERP dépasse son budget, que le projet Green IT reste sous contrôle, et que le portail RH présente un risque d'adoption. En une seule vue, elle peut prioriser la discussion : arbitrage sur les ressources ERP, décision sur le planning Data Lake, validation du maintien du projet Green IT, et lancement d'un plan de conduite du changement renforcé sur le portail RH. C'est exactement ce que nous voulons prouver : le MVP transforme des données dispersées en décisions pilotables.

**Action Odoo :** afficher ou préparer l’interface suivante : parcours COPIL complet — Dashboards → Project → Documents → Approvals → décision. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

---

## 5. Qualité Visuelle et Technique

**Intervenant : Léo**  
**Visuel Odoo : captures annotées des écrans Apps, Dashboards, Project, Timesheets, Documents et Settings**

La qualité visuelle et technique de la vidéo repose sur trois principes. Le premier est la lisibilité. Chaque capture doit montrer une seule idée à la fois, avec un zoom sur la zone utile, un titre court et une annotation explicite. Lorsque nous parlons du dashboard, l'écran doit mettre en évidence les KPI. Lorsque nous parlons d'un risque, le registre des risques doit être visible. Lorsque nous parlons d'intégration, le schéma SI doit apparaître. Cette synchronisation entre le discours et le visuel évite de perdre l'attention et renforce la compréhension.

**Action Odoo :** afficher ou préparer l’interface suivante : captures annotées des écrans Apps, Dashboards, Project, Timesheets, Documents et Settings. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Le deuxième principe est la cohérence graphique. Nous utiliserons une identité visuelle sobre : fond sombre, accents bleu et cyan pour la technologie, vert pour les gains et la progression, orange ou rouge pour les alertes. Les pictogrammes, les cartes KPI, les tableaux et les transitions doivent donner l'impression d'appartenir au même système. Cette cohérence est importante, car elle contribue à la crédibilité du MVP : un outil de pilotage stratégique doit inspirer confiance dès les premiers écrans.

**Action Odoo :** afficher ou préparer l’interface suivante : captures annotées des écrans Apps, Dashboards, Project, Timesheets, Documents et Settings. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : storyboard écran par écran avec zooms, surlignages et ordre de clics à filmer**

Le troisième principe est le rythme. Pour capter l'attention sur une vidéo cible de 25 minutes, il faut éviter les longs tunnels de parole. Nous alternerons donc plusieurs formats : prise de parole face caméra, captures écran, schémas animés, zooms sur indicateurs, tableaux avant/après et synthèses visuelles. Les transitions auront toujours une fonction narrative : contexte, problème, solution, preuve, impact. Nous ne voulons pas d'effets gratuits ; chaque animation doit aider à comprendre. Les plans de coupe, les titres courts et les transitions sonores discrètes serviront uniquement à renforcer l'attention, jamais à masquer le contenu.

**Action Odoo :** afficher ou préparer l’interface suivante : storyboard écran par écran avec zooms, surlignages et ordre de clics à filmer. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

---

## 6. Originalité et Dépassement des Attentes

**Intervenant : Léo**  
**Visuel Odoo : Apps AI, Settings, Approvals et Documents pour illustrer IA, gouvernance, conformité et automatisation**

L'originalité de la solution tient d'abord à son positionnement. Tech4Value n'est pas un outil de gestion de tâches de plus, ni un simple tableau de bord statique. C'est une couche de pilotage stratégique connectée au SI existant. Elle respecte les outils déjà en place tout en ajoutant une vision transverse. Cette approche est plus réaliste qu'un remplacement complet, car les organisations ne changent pas leurs systèmes du jour au lendemain. Elles ont besoin de couches d'orchestration capables de créer de la valeur sans casser les usages existants.

**Action Odoo :** afficher ou préparer l’interface suivante : Apps AI, Settings, Approvals et Documents pour illustrer IA, gouvernance, conformité et automatisation. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Nous avons aussi prévu des éléments qui dépassent le minimum attendu. Le premier est l'intégration potentielle de Claude API pour aider à générer des synthèses de risques, des comptes rendus de COPIL ou des recommandations d'arbitrage à partir des données consolidées. Cette IA n'est pas là pour remplacer la décision humaine ; elle accélère la préparation de la décision. Par exemple, avant un comité, elle pourrait résumer les écarts majeurs, identifier les risques récurrents et proposer les points à traiter en priorité.

**Action Odoo :** afficher ou préparer l’interface suivante : Apps AI, Settings, Approvals et Documents pour illustrer IA, gouvernance, conformité et automatisation. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : Settings et Apps pour montrer le paramétrage, puis overlay qualité : RGPD, accessibilité, Green IT**

Le deuxième élément de dépassement concerne la qualité d'industrialisation : CI/CD, tests automatisés, documentation utilisateur, gouvernance post-MVP et suivi des décisions. Même dans un cadre académique, nous avons raisonné comme une équipe projet professionnelle. Le troisième élément concerne la responsabilité numérique : Green IT, sobriété des écrans, limitation des traitements inutiles, accessibilité WCAG et prise en compte du RGPD. Ces choix montrent que la solution n'est pas seulement fonctionnelle ; elle est pensée pour être maintenable, acceptable et responsable.

**Action Odoo :** afficher ou préparer l’interface suivante : Settings et Apps pour montrer le paramétrage, puis overlay qualité : RGPD, accessibilité, Green IT. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Enfin, nous avons prévu une logique de roadmap Now-Next-Later afin de distinguer ce qui est démontré maintenant, ce qui sera industrialisé ensuite, et ce qui pourra devenir un avantage différenciant à plus long terme. Cette transparence évite de surpromettre. Elle montre une capacité à prioriser, arbitrer et construire une trajectoire produit crédible, défendable devant un jury comme devant un comité de direction exigeant et opérationnel.

**Action Odoo :** afficher ou préparer l’interface suivante : Settings et Apps pour montrer le paramétrage, puis overlay qualité : RGPD, accessibilité, Green IT. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

---

## 7. Impact Potentiel du MVP

**Intervenant : Jules**  
**Visuel Odoo : Dashboards avant/après avec reporting 30h → 21h et bénéfices Direction, PMO, Chef de projet**

L'impact potentiel du MVP se mesure d'abord par le gain opérationnel. Aujourd'hui, le reporting manuel représente environ 30 heures par semaine. En automatisant une partie de la consolidation et en centralisant les KPI, Tech4Value peut viser une réduction de 30 %, soit un passage d'environ 30 heures à 21 heures par semaine. Ce gain ne concerne pas seulement le temps. Il améliore aussi la fiabilité des informations présentées au COPIL. Moins de ressaisie signifie moins d'erreurs, moins de débats sur la source des chiffres et plus de temps consacré aux décisions.

**Action Odoo :** afficher ou préparer l’interface suivante : Dashboards avant/après avec reporting 30h → 21h et bénéfices Direction, PMO, Chef de projet. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

Pour les utilisateurs finaux, la valeur est différente selon le profil. La direction obtient une vision synthétique et comparable des projets. Le PMO gagne un outil de consolidation, de priorisation et de préparation des comités. Les chefs de projet disposent d'un espace plus clair pour suivre leurs jalons, documents et risques. La DSI bénéficie d'une architecture qui respecte les outils en place au lieu de les contourner. Cette approche favorise l'adoption, car elle réduit la rupture d'usage : Odoo, SharePoint, Azure AD et Power BI restent dans l'écosystème.

**Action Odoo :** afficher ou préparer l’interface suivante : Dashboards avant/après avec reporting 30h → 21h et bénéfices Direction, PMO, Chef de projet. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Léo**  
**Visuel Odoo : Dashboards + Project roadmap pour montrer ROI, adoption et trajectoire post-MVP**

Le ROI attendu repose donc sur trois niveaux. Le premier est la productivité du reporting. Le deuxième est la qualité de décision. Le troisième est la réduction des risques projet par une meilleure visibilité. À court terme, le MVP prouve que la consolidation est possible. À moyen terme, la roadmap prévoit des connecteurs plus complets, des alertes avancées, des rapports automatisés et des synthèses assistées par IA. À long terme, la plateforme peut devenir un véritable cockpit de gouvernance de portefeuille.

**Action Odoo :** afficher ou préparer l’interface suivante : Dashboards + Project roadmap pour montrer ROI, adoption et trajectoire post-MVP. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

L'impact se mesure aussi en maturité organisationnelle. Quand les équipes partagent les mêmes indicateurs, elles peuvent discuter des décisions plutôt que de la validité des chiffres. Quand les documents sont reliés aux jalons, la traçabilité s'améliore. Quand les risques sont visibles, les plans de mitigation sont déclenchés plus tôt. C'est ce potentiel qui rend la solution convaincante : elle résout un problème immédiat tout en ouvrant une trajectoire d'évolution crédible, compatible avec les contraintes de Tech4Value et avec les attentes concrètes du terrain.

**Action Odoo :** afficher ou préparer l’interface suivante : Dashboards + Project roadmap pour montrer ROI, adoption et trajectoire post-MVP. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

---

## 8. Conclusion Convaincante

**Intervenant : Léo**  
**Visuel Odoo : triptyque final Apps → Dashboards → Project, avec preuves besoin, MVP et impact**

Pour conclure, Tech4Value répond à un besoin clair : donner aux décideurs une vision fiable, consolidée et actionnable des projets stratégiques. Le MVP présenté démontre les fonctionnalités essentielles : connexion par rôle, dashboard multi-projets, suivi des KPI, fiches projet, gestion des risques, rattachement documentaire, simulation Odoo et SharePoint, export Power BI et trajectoire d'évolution. La pertinence de la solution vient de son ancrage dans le SI existant et de sa capacité à transformer le reporting en outil de pilotage.

**Action Odoo :** afficher ou préparer l’interface suivante : triptyque final Apps → Dashboards → Project, avec preuves besoin, MVP et impact. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

**Intervenant : Jules**  
**Visuel Odoo : retour écran Apps, zoom final sur Project et Dashboards, noms de l'équipe et remerciement**

Notre prochaine étape serait de tester le MVP avec un panel d'utilisateurs pilotes, de mesurer l'adoption à J+30, puis d'enrichir les connecteurs et les alertes selon les retours terrain. Nous pensons que cette solution peut convaincre parce qu'elle parle à la fois aux utilisateurs finaux, au PMO, à la DSI et à la direction. Elle ne promet pas une transformation magique ; elle propose une amélioration concrète, mesurable et gouvernable.

**Action Odoo :** afficher ou préparer l’interface suivante : retour écran Apps, zoom final sur Project et Dashboards, noms de l'équipe et remerciement. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.

La force du projet tient dans cette combinaison : un besoin métier réaliste, une réponse technique cohérente, une démonstration lisible, et une trajectoire d'amélioration crédible. En résumé, notre proposition est pertinente parce qu'elle part d'un problème réel, convaincante parce qu'elle s'appuie sur une démonstration opérationnelle, et durable parce qu'elle prévoit une prochaine étape claire : tester, mesurer, améliorer. La vidéo se termine donc sur cette promesse : mieux voir, mieux arbitrer, mieux piloter. Merci pour votre attention.

**Action Odoo :** afficher ou préparer l’interface suivante : retour écran Apps, zoom final sur Project et Dashboards, noms de l'équipe et remerciement. Pendant ce paragraphe, garder cette interface à l’écran et utiliser un zoom ou un surlignage sur la zone évoquée.
