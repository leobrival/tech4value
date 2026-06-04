# Script Vidéo MVP : Tech4Value

**Format visé** : vidéo finale de 20 à 30 minutes, avec une cible de 25 minutes. Le déroulé est aligné sur la présentation Notion `deliverables/group-file/presentation-notion-tech4value.md`. Les slides 1 à 24 constituent le fil principal ; les annexes A à D servent de support de secours pendant les questions ou pour enrichir certains plans de coupe.

**Principe de réalisation** : alterner prise de parole de Jules Courtin et Léo Brival, slides Notion en plein écran, zooms sur les tableaux ou schémas clés, puis captures MVP/Odoo pour illustrer la démonstration. Chaque section ci-dessous indique les slides à afficher.

---

## 1. introduction et structure de la vidéo

**Intervenant : Jules**
**Slides à afficher : page titre puis Slide 1 : Thèse**

Bonjour, nous sommes Jules Courtin et Léo Brival, et nous vous présentons Tech4Value, notre projet d'étude M2 CPIT 2025. Cette vidéo suit la présentation Notion préparée pour expliquer le projet avec un déroulé progressif et convaincant. Notre objectif est simple : montrer comment Tech4Value peut passer d'un pilotage fragmenté de ses projets stratégiques à une plateforme unifiée, capable de consolider les données, de réduire le reporting manuel et d'accélérer les décisions.

Nous construisons la vidéo comme un récit. Nous partons d'abord du contexte de l'entreprise : 185 collaborateurs, 9 pôles, 3 sites et 5 projets stratégiques mobilisant 78 ETP. Ensuite, nous présentons le problème central : les données sont dispersées dans plusieurs outils et le PMO consacre encore trop de temps à consolider manuellement les informations. Puis nous montrons la solution cible, son architecture, ses choix techniques, sa roadmap et son impact attendu.

**Intervenant : Léo**
**Slides à afficher : Slide 1, puis aperçu rapide des Slides 2 à 8**

La structure de la vidéo suit également la grille d'évaluation. Nous couvrirons le contexte, les objectifs, la qualité de la démonstration, la qualité technique, l'originalité, l'impact potentiel et la capacité à convaincre. Jules portera principalement la vision projet, les enjeux métier, la conduite du changement et les bénéfices pour les utilisateurs. Je porterai davantage la solution technique, les intégrations SI, l'architecture, la sécurité et la démonstration fonctionnelle.

Le fil conducteur : pourquoi ce projet existe, ce que nous avons choisi de construire, comment le MVP fonctionne, et pourquoi cette trajectoire reste crédible pour une ETI numérique. À la fin de la vidéo, vous devez retenir trois messages : le besoin est réel, le MVP apporte une preuve de valeur, et la suite du projet est gouvernable grâce à une roadmap, des jalons, des risques identifiés et des indicateurs mesurables.

---

## 2. contexte et objectifs du projet

**Intervenant : Jules**
**Slides à afficher : Slide 2 : Contexte entreprise**

Tech4Value est une entreprise de services numériques de taille intermédiaire. Elle compte 185 collaborateurs répartis sur un siège et deux antennes régionales, Rennes et Lyon. Elle fonctionne avec une organisation matricielle composée de 9 pôles : Direction et PMO, IT et Infrastructure, Développement, Data et BI, Sécurité et Conformité, RH et Communication, Finance et Achats, RSE et Green IT, et enfin Fonctions support.

Tech4Value dispose déjà d'un socle numérique : Odoo pour certaines données RH, financières et projet, Microsoft 365 et SharePoint pour la collaboration documentaire, Power BI pour la restitution décisionnelle, et Azure AD pour l'identité et les accès. La difficulté vient de l'absence d'une couche de consolidation capable de transformer ces briques en pilotage stratégique.

**Intervenant : Jules**
**Slides à afficher : Slide 3 : Portefeuille stratégique**

Le portefeuille étudié comprend 5 projets stratégiques. Le premier est la mise en conformité RGPD, avec 13 ETP et une priorité critique. Le deuxième est le déploiement ERP Finance et Supply Chain, avec 19 ETP et une priorité critique. Le troisième est la plateforme Data Lake et BI Groupe, avec 18 ETP et une priorité haute. Le quatrième est le programme Green IT Cloud Durable, avec 11 ETP. Le cinquième est le Portail RH Unifié, avec 17 ETP et une priorité haute.

Ces 5 projets mobilisent 78 ETP, soit environ 42 % des effectifs. Ce chiffre suffit à expliquer l'enjeu : lorsqu'un arbitrage est mal informé, lorsqu'un retard est détecté trop tard ou lorsqu'une ressource critique est mal allouée, l'impact ne concerne pas un seul projet. Il peut toucher plusieurs pôles, plusieurs jalons et plusieurs budgets en même temps.

**Intervenant : Léo**
**Slides à afficher : Slide 4 : Problème central**

La situation actuelle révèle plusieurs irritants. Le PMO consacre environ 30 heures par semaine au reporting manuel. Les décisions sont souvent prises sur des données qui ont entre 3 et 7 jours. Le taux de livraison à temps est seulement de 65 %. Le pôle IT est en surcharge, autour de 120 % de capacité, tandis que le pôle Data est sous-utilisé autour de 70 %. Enfin, 7 outils coexistent : Trello, Jira, Notion, Excel, Odoo, SharePoint et Power BI.

Chaque outil porte une partie de la vérité, mais aucun ne donne une vision consolidée du portefeuille. La discussion en comité risque donc de porter sur la fiabilité des chiffres plutôt que sur les décisions à prendre. Tech4Value corrige cette faille.

**Intervenant : Jules**
**Slides à afficher : Slide 5 : Besoin et North Star Metric, puis Slide 6 : Objectifs stratégiques**

Le besoin central est de centraliser le pilotage stratégique dans une plateforme intégrée. Notre North Star Metric est la réduction de 30 % du temps de reporting PMO, avec une cible de 30 heures à 21 heures par semaine. Cette métrique est volontairement opérationnelle : elle mesure un gain concret pour l'organisation et oblige la solution à produire une valeur visible rapidement.

Les autres objectifs sont également mesurables : améliorer la livraison à temps de 65 % à 90 %, optimiser l'allocation des ressources de 72 % à 82 %, consolider progressivement 7 outils vers une plateforme intégrée, et viser un payback inférieur à 3 mois. Ces objectifs structurent la conception du MVP, la planification, la roadmap et les indicateurs de succès.

---

## 3. problématique et axes choisis

**Intervenant : Jules**
**Slides à afficher : Slide 4 : Problème central, puis Slide 7 : Proposition de valeur**

La problématique centrale peut se formuler ainsi : comment permettre à Tech4Value de piloter ses 5 projets stratégiques avec une vision fiable, consolidée et actionnable, alors que les informations sont dispersées dans plusieurs outils et que le reporting dépend encore largement de consolidations manuelles ?

Nous avons retenu une proposition de valeur adaptée aux différents profils. Pour la Direction, la plateforme apporte une vision portefeuille à 360 degrés et des décisions plus rapides. Pour les managers opérationnels, elle apporte une meilleure allocation des ressources et une meilleure coordination inter-pôles. Pour le PMO et les chefs de projet, elle réduit le reporting manuel et facilite la préparation des comités. Pour les équipes projet, elle clarifie les jalons, les documents, les risques et les priorités.

**Intervenant : Léo**
**Slides à afficher : Slide 8 : Solution cible**

Pour répondre à ce besoin, nous avons choisi trois axes. Le premier est la consolidation du pilotage : un dashboard exécutif, des fiches projet, un suivi des jalons, des risques et des budgets. Le deuxième est l'interopérabilité : la plateforme doit respecter le SI existant et se connecter à Odoo, SharePoint, Power BI et Azure AD. Le troisième est l'aide à la décision : le système doit rendre visibles les signaux faibles, les écarts et les arbitrages nécessaires.

Nous cadrons le MVP. Il démontre la valeur avec un périmètre clair : dashboard exécutif, planning Gantt, RACI, suivi budgétaire, reporting automatisé et allocation des ressources par pôle. Les fonctionnalités plus ambitieuses, comme les prédictions avancées, les alertes intelligentes ou le mode SaaS multi-tenant, sont placées dans la roadmap post-MVP.

**Intervenant : Jules**
**Slides à afficher : Annexe B : Fonctionnalités MVP core**

Ce périmètre protège la preuve de valeur. Le MVP se concentre sur cette preuve. Ici, la preuve attendue est simple : en une seule vue, le COPIL doit comprendre quels projets vont bien, quels projets nécessitent une décision, quels risques sont critiques, et quelles ressources sont sous tension. Cette discipline permet de défendre le projet devant un jury comme devant un comité de direction.

---

## 4. démonstration du MVP

**Intervenant : Léo**
**Slides à afficher : Slide 9 : Architecture fonctionnelle**

Passons maintenant à la démonstration du MVP et à sa logique de fonctionnement. La plateforme suit une architecture en trois couches. La première couche est le frontend React et TypeScript, qui porte les écrans de dashboard, de projets, de reporting et de consultation. La deuxième couche est le backend Node.js et Express, qui gère l'API, les règles métier, l'authentification, les rôles et les connecteurs. La troisième couche est la base PostgreSQL, qui centralise les projets, les utilisateurs, les temps, les jalons, les documents, les risques et les rapports.

Dans la démonstration, l'utilisateur commence par une connexion simulant Azure AD. Selon son rôle, Direction, PMO ou chef de projet, il accède à une vue adaptée. L'objectif est de montrer que le même socle de données peut produire plusieurs lectures : une lecture stratégique pour la Direction, une lecture portefeuille pour le PMO, et une lecture opérationnelle pour les chefs de projet.

**Intervenant : Jules**
**Slides à afficher : Slide 8 : Solution cible, puis capture MVP/Odoo Dashboard**

Le premier écran clé est le dashboard exécutif. On y retrouve les 5 projets stratégiques, avec des indicateurs comparables : avancement, budget prévu, budget consommé, charge ETP, niveau de risque, jalons proches et santé globale. Cette vue répond au besoin prioritaire : arrêter de préparer un comité en assemblant manuellement plusieurs fichiers.

Prenons un cas d'usage. Le COPIL ouvre la plateforme et voit immédiatement que l'ERP Finance est en tension budgétaire, que le Data Lake a un jalon critique proche, que Green IT reste sous contrôle et que le Portail RH présente un risque d'adoption. En quelques secondes, la discussion peut se concentrer sur les décisions : faut-il réallouer des ressources ? faut-il renforcer le plan de conduite du changement ? faut-il arbitrer un budget ?

**Intervenant : Léo**
**Slides à afficher : Slide 10 : Stack technique retenue**

Techniquement, nous avons retenu une stack TypeScript full-stack : React 18, TypeScript, Tailwind et Zustand côté frontend ; Node.js, Express, TypeScript, Prisma et PostgreSQL côté backend ; GitHub Actions pour la CI/CD ; Vercel, Railway et Supabase pour le déploiement. Cette stack convient à une équipe réduite : elle utilise le même langage sur toute la chaîne, réduit les frictions et maintient une base de code lisible.

Les alternatives comme Java Spring, Python Django ou une architecture microservices complète ont été étudiées, mais elles auraient ajouté de la complexité pour un MVP académique de 24 semaines. Notre choix privilégie la cohérence, la rapidité de développement, la maintenabilité et la capacité à déployer rapidement une preuve de valeur.

**Intervenant : Léo**
**Slides à afficher : Slide 11 : Intégrations SI critiques, puis captures Odoo / SharePoint / Power BI**

Les intégrations sont le cœur de la démonstration. Odoo est prioritaire pour les budgets, les temps passés et les ressources. SharePoint sert de référentiel documentaire : cahiers des charges, comptes rendus de COPIL, documents de recette, supports de formation. Power BI reste l'outil de restitution avancée, mais la plateforme prépare des exports propres pour l'alimenter. Azure AD structure l'authentification, le SSO, la MFA et le RBAC.

Dans la version MVP, certaines intégrations peuvent être simulées ou alimentées par des données structurées. Nous devons prouver le flux cible : les données opérationnelles entrent dans la plateforme, elles sont normalisées, puis restituées sous forme de KPI, de rapports ou d'exports.

**Intervenant : Jules**
**Slides à afficher : Slide 12 : Sécurité, conformité et qualité**

La démonstration ne se limite pas aux écrans. Nous montrons aussi que la solution est pensée comme un projet professionnel. L'authentification est structurée autour de JWT puis d'Azure AD. Les rôles sont gérés par RBAC. Les risques OWASP sont couverts par des choix comme Prisma, Zod, Helmet, CORS et le rate limiting. Le RGPD est pris en compte avec la minimisation, la traçabilité et la gestion des accès. L'accessibilité vise WCAG 2.1 AA, avec navigation clavier, contrastes et composants lisibles.

La qualité logicielle est également intégrée : tests unitaires, tests d'intégration, tests end-to-end, tests de charge, monitoring, Sentry et suivi des performances. Nous évitons une démonstration jolie mais fragile. Le MVP doit être compréhensible, testable et industrialisable.

---

## 5. qualité visuelle et technique

**Intervenant : Léo**
**Slides à afficher : Slide 9, Slide 10, Slide 12, puis exemples de captures annotées**

La qualité visuelle et technique de la vidéo repose sur trois principes. Le premier est la lisibilité. Chaque slide doit soutenir une seule idée : le contexte, le problème, la solution, l'architecture, la roadmap ou l'impact. Lorsqu'un tableau apparaît, nous devons zoomer sur les chiffres clés. Lorsqu'un schéma apparaît, nous devons le commenter de haut en bas pour éviter de perdre l'audience.

Le deuxième principe est la cohérence. La présentation Notion utilise des titres courts, un message clé, trois à cinq points à retenir et des notes de détail. Ce format rend la vidéo plus fluide et évite les slides surchargées. Pendant le montage, nous garderons ce rythme : une idée, un visuel, une preuve.

**Intervenant : Jules**
**Slides à afficher : Slide 13 : Management de projet, Slide 14 : Roadmap, Slide 15 : Jalons**

Le troisième principe est le rythme narratif. La vidéo ne doit pas être une lecture du dossier technique. Elle doit raconter une progression : contexte, problème, solution, preuve, impact, décision attendue. Les slides 13 à 15 soutiennent cette progression. Elles montrent que nous avons conçu une solution technique et structuré le projet avec une méthode Agile Hybride, une roadmap Now-Next-Later et 8 jalons vérifiables.

Cette partie contribue à la qualité globale de la vidéo, car elle montre le professionnalisme de la démarche. Le spectateur comprend que le MVP s'inscrit dans un planning, une gouvernance, une gestion des risques et une trajectoire académique cohérente.

---

## 6. originalité et dépassement des attentes

**Intervenant : Léo**
**Slides à afficher : Slide 21 : Différenciation et innovation**

L'originalité du projet tient d'abord à son positionnement. Tech4Value ajoute une couche de pilotage stratégique connectée au SI existant. La plateforme orchestre Odoo, SharePoint, Power BI et Azure AD pour produire une vision consolidée et utile à la décision.

Le deuxième élément de différenciation est l'usage contrôlé de l'IA. La roadmap prévoit la possibilité d'utiliser Claude API pour générer des synthèses de risques, préparer des comptes rendus de COPIL ou proposer des points d'arbitrage. Cette IA n'a pas vocation à décider à la place du comité ; elle aide à préparer la décision en résumant les écarts et en mettant en avant les signaux faibles.

**Intervenant : Jules**
**Slides à afficher : Slide 17 : Business model potentiel, Slide 18 : Diagnostic 7S McKinsey**

Le projet va aussi au-delà du MVP en proposant un modèle économique potentiel et un diagnostic organisationnel. Le Business Model Canvas montre qu'une telle plateforme pourrait devenir une offre SaaS pour des PME ou ETI confrontées aux mêmes problèmes de pilotage. Le diagnostic 7S McKinsey montre que la transformation ne se limite pas à la technologie : elle touche la stratégie, la structure, les systèmes, les valeurs partagées, le style de management, le personnel et les compétences.

Ce double niveau, produit et organisation, renforce la crédibilité du projet. Nous présentons une solution de pilotage, sa valeur, ses conditions d'adoption et sa trajectoire d'évolution.

---

## 7. impact potentiel du MVP

**Intervenant : Jules**
**Slides à afficher : Slide 16 : Budget et ROI, puis Slide 23 : Impact attendu**

L'impact potentiel du MVP se mesure d'abord par le gain opérationnel. La cible principale est de réduire le reporting PMO de 30 %, de 30 heures à 21 heures par semaine. Ce gain signifie moins de temps passé à recopier, vérifier et consolider les chiffres, et plus de temps consacré à l'analyse et aux décisions.

La valeur économique annuelle estimée est de 1,06 million d'euros, en combinant les gains de temps, la réduction de la fragmentation et l'amélioration de la productivité. Le projet prévoit un setup initial autour de 235 000 euros, un MVP 24 semaines autour de 198 000 euros, et un payback inférieur à 3 mois dans le scénario de valeur interne. Ces chiffres donnent un ordre de grandeur et justifient l'investissement.

**Intervenant : Léo**
**Slides à afficher : Slide 19 : Conduite du changement, Slide 20 : Risques et mitigations**

L'impact dépend aussi de l'adoption. Nous intégrons la conduite du changement dès le départ. Nous utilisons le modèle ADKAR : Awareness, Desire, Knowledge, Ability, Reinforcement. Nous prévoyons un programme d'early adopters avec deux à trois champions par pôle, des formations par rôle, une newsletter hebdomadaire, des ateliers mensuels et des KPI d'usage.

Les risques sont également traités de manière explicite : confusion sur le besoin, intégration Odoo complexe, scope creep, adoption faible, dépendance à une équipe réduite, qualité insuffisante. Chaque risque est associé à une mitigation : cadrage, POC API, fallback CSV, MoSCoW, documentation, CI/CD, tests et support.

**Intervenant : Jules**
**Slides à afficher : Slide 23 : Impact attendu**

Pour les utilisateurs finaux, l'impact se voit dans les usages quotidiens. La Direction gagne une vision consolidée. Le PMO gagne du temps et une meilleure préparation des comités. Les chefs de projet gagnent une fiche projet plus claire. Les équipes projet gagnent une meilleure visibilité sur les jalons, les documents et les priorités. Et l'organisation gagne une meilleure traçabilité des décisions.

Le MVP résout un problème immédiat et ouvre une trajectoire vers un cockpit de gouvernance plus complet.

---

## 8. conclusion convaincante

**Intervenant : Léo**
**Slides à afficher : Slide 22 : Livrables académiques et conformité**

Pour conclure, Tech4Value répond à un besoin clair : donner aux décideurs une vision fiable, consolidée et actionnable des projets stratégiques. Le projet est aligné avec les attendus académiques : vidéo MVP, management de projet, planification, solution technique, analyse individuelle, professionnalisme du livrable et capacité à aller au-delà des demandes. La présentation Notion et le dossier technique permettent de relier chaque choix à une preuve : contexte, diagnostic, architecture, roadmap, risques, conduite du changement et impact.

**Intervenant : Jules**
**Slides à afficher : Slide 24 : Ask / décision attendue**

La décision attendue est de valider le cadrage MVP et de concentrer l'exécution sur les intégrations prioritaires : Odoo, Power BI, SharePoint et Azure AD. Notre recommandation est de lancer le MVP cadré, avec le reporting PMO automatisé comme premier cas d'usage démontrable. Ce lancement prouve vite la valeur, mesure l'adoption et prépare la suite.

La force du projet tient dans cette combinaison : un besoin métier réaliste, une réponse technique cohérente, une démonstration lisible, une gouvernance de projet structurée et une trajectoire d'amélioration crédible. En résumé : mieux voir, mieux arbitrer, mieux piloter. Merci pour votre attention.
