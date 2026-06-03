# Script Vidéo MVP — Tech4Value

**Format visé** : vidéo de 15 à 20 minutes, alternance entre Jules Courtin et Léo Brival, avec captures du MVP, schémas d'architecture et démonstration fonctionnelle.

---

## 1. Introduction et Structure de la Vidéo

**Intervenant : Jules**  
**Visuel : slide titre, logo Tech4Value, noms de l'équipe, plan en 8 séquences**

Bonjour, nous sommes Jules Courtin et Léo Brival, et nous vous présentons Tech4Value, notre projet d'étude M2 CPIT 2025. L'objectif de cette vidéo est simple : en 15 à 20 minutes, vous montrer comment notre MVP répond à un problème concret de pilotage stratégique dans une entreprise de taille intermédiaire. Nous allons d'abord poser le contexte de Tech4Value, puis expliquer la problématique métier, présenter les axes que nous avons retenus, démontrer les fonctionnalités du MVP, et enfin défendre l'impact potentiel de la solution.

**Intervenant : Léo**  
**Visuel : apparition du plan avec les critères vidéo V-01 à V-11 en filigrane**

La vidéo est structurée pour répondre directement aux critères d'évaluation : structure claire, contexte et objectifs, démonstration opérationnelle, qualité visuelle et technique, originalité, impact, fluidité, pertinence et capacité à convaincre. Jules portera principalement la vision projet, le besoin et la valeur métier ; je présenterai la solution technique, les intégrations et la démonstration applicative. L'idée n'est pas seulement de montrer une interface, mais de prouver que le MVP peut devenir un vrai outil d'aide à la décision pour Tech4Value.

---

## 2. Contexte et Objectifs du Projet

**Intervenant : Jules**  
**Visuel : carte d'identité Tech4Value, effectifs, sites, pôles, portefeuille de projets**

Tech4Value est une entreprise fictive mais réaliste de 185 collaborateurs, répartis entre un siège et deux antennes régionales. Elle fonctionne avec une organisation matricielle : des pôles métiers, des fonctions support, une DSI, un PMO, des équipes Data, Sécurité, Finance, RH et Green IT. Le point de départ du projet est la gestion de 5 projets stratégiques qui mobilisent 78 ETP, soit environ 42 % des effectifs. Ces projets couvrent des sujets critiques : conformité RGPD, déploiement ERP Finance et Supply Chain, plateforme Data Lake et BI Groupe, programme Green IT Cloud durable, et portail RH unifié.

Aujourd'hui, chaque projet possède ses propres outils, ses propres fichiers et son propre rythme de reporting. Odoo contient des données financières et RH, SharePoint centralise une partie des livrables, Power BI sert au reporting financier, Azure AD gère les identités, et Excel reste utilisé pour consolider beaucoup d'informations manuellement. Cette fragmentation crée un problème classique dans les organisations en croissance : les données existent, mais elles ne sont pas assez connectées pour soutenir une décision rapide.

**Intervenant : Léo**  
**Visuel : schéma des outils SI existants puis apparition d'une couche de pilotage centralisée**

Notre objectif est donc de concevoir une plateforme de pilotage stratégique qui centralise les informations utiles aux chefs de projet, au PMO et au COPIL. Le MVP ne remplace pas les outils existants ; il les connecte. Il consolide les informations de portefeuille, expose des indicateurs lisibles, facilite le suivi des risques, et prépare l'export vers Power BI. Le bénéfice attendu est une réduction de 30 % du temps de reporting, une meilleure fiabilité des données et une vision consolidée des décisions à prendre.

Le projet est aussi contraint par le cadre académique : nous devons démontrer une démarche complète de chef de projet IT, depuis le cadrage jusqu'à la gouvernance, en passant par l'architecture, les risques, le budget, la conduite du changement, l'accessibilité, le RGPD et le Green IT. Notre choix a donc été de produire un MVP réaliste, centré sur la valeur décisionnelle, plutôt qu'une application trop large et difficile à justifier. Cette orientation permet de relier chaque fonctionnalité à un objectif mesurable, à un enjeu utilisateur clair et à une preuve visible pendant la démonstration.

---

## 3. Problématique et Axes Choisis

**Intervenant : Jules**  
**Visuel : trois irritants clés — silos, reporting manuel, manque de vision COPIL**

La problématique centrale peut se résumer ainsi : comment permettre à Tech4Value de piloter ses 5 projets stratégiques avec une vision consolidée, fiable et actionnable, alors que les données sont réparties dans plusieurs outils ? Les silos documentaires et applicatifs ralentissent le reporting, créent des écarts de version et rendent la décision plus dépendante de fichiers Excel que d'indicateurs partagés. Pour un COPIL, cela signifie moins de visibilité sur les arbitrages budgétaires, les risques et la disponibilité des ressources.

Nous avons retenu trois axes de réponse. Premier axe : consolider le pilotage, avec un dashboard multi-projets qui donne une vue claire des coûts, délais, risques et jalons. Deuxième axe : fiabiliser les données, en connectant les briques SI existantes plutôt qu'en créant un système isolé. Troisième axe : rendre la décision plus rapide, en affichant les alertes, les écarts et les priorités au bon niveau de lecture.

**Intervenant : Léo**  
**Visuel : matrice « problème → fonctionnalité MVP → bénéfice »**

Le périmètre du MVP est volontairement maîtrisé. Nous avons choisi les fonctionnalités qui prouvent le plus rapidement la pertinence de la solution : authentification, tableau de bord, portefeuille de projets, suivi des risques, connecteurs simulés Odoo et SharePoint, export structuré vers Power BI, et indicateurs d'impact. Les fonctionnalités moins prioritaires, comme les workflows d'approbation complexes ou l'automatisation complète de tous les imports, sont placées dans la roadmap post-MVP. Ce choix garantit un équilibre entre ambition, faisabilité et qualité de démonstration, sans diluer le message central de pilotage stratégique.

---

## 4. Démonstration du MVP

**Intervenant : Léo**  
**Visuel : écran de connexion, simulation Azure AD, rôles utilisateur**

Passons maintenant à la démonstration du MVP. Nous commençons par l'accès à la plateforme. L'utilisateur se connecte via une simulation Azure AD afin de représenter un environnement professionnel avec authentification centralisée et gestion des rôles. Dans cette démonstration, nous utilisons trois profils : direction, PMO et chef de projet. Cette logique de rôle permet d'adapter les informations affichées : la direction voit les indicateurs consolidés, le PMO suit le portefeuille, et le chef de projet accède au détail opérationnel.

**Visuel : dashboard exécutif avec KPI principaux**

Une fois connecté, l'utilisateur arrive sur le dashboard. On retrouve ici les 5 projets stratégiques de Tech4Value, avec des KPI synthétiques : budget consommé, avancement, charge ETP, niveau de risque, prochains jalons et statut global. L'objectif est que le COPIL puisse comprendre en moins d'une minute quels projets sont sous contrôle et lesquels nécessitent un arbitrage. Par exemple, si le projet ERP Finance présente un dépassement budgétaire et un risque planning élevé, il remonte automatiquement dans les alertes prioritaires.

**Intervenant : Jules**  
**Visuel : zoom sur une carte projet puis détail projet**

Du point de vue métier, cette vue répond au besoin principal : arrêter de chercher l'information dans plusieurs fichiers. En cliquant sur un projet, on accède à une fiche détaillée avec le budget prévisionnel, le budget réel, les jalons, les risques ouverts, les responsables et les documents associés. Le chef de projet peut consulter les informations nécessaires à son suivi quotidien, tandis que le PMO peut comparer les projets entre eux. Cette double lecture est essentielle : la solution ne s'adresse pas seulement à un profil, elle crée un langage commun entre les équipes.

**Intervenant : Léo**  
**Visuel : connecteur Odoo simulé, import budget et ressources**

Le premier connecteur présenté est Odoo. Dans notre MVP, nous simulons l'import des budgets, des affectations ressources et des temps passés. Le but est de montrer comment les données opérationnelles peuvent alimenter automatiquement le pilotage. Au lieu de ressaisir des chiffres dans un reporting manuel, l'application récupère les informations utiles, les normalise, puis les expose dans le dashboard. Cette approche réduit les risques d'erreur et prépare une intégration réelle avec l'API Odoo.

**Visuel : espace documents et intégration SharePoint**

Le deuxième connecteur concerne SharePoint. Les projets stratégiques produisent beaucoup de documents : cahiers des charges, comptes rendus de COPIL, PV de recette, budgets, supports de formation. Le MVP permet de rattacher ces documents à chaque projet, avec une logique de métadonnées et de versioning. Dans une version cible, SharePoint reste le référentiel documentaire ; la plateforme Tech4Value devient la porte d'entrée de pilotage qui relie chaque document au bon projet, au bon jalon et au bon niveau de décision.

**Intervenant : Jules**  
**Visuel : registre des risques, matrice probabilité/impact**

La gestion des risques est un autre élément central. Le MVP affiche un registre des risques par projet, avec probabilité, impact, criticité, responsable et plan de mitigation. Pour le COPIL, cette information est décisive : un projet peut être dans le budget aujourd'hui mais exposé à un risque critique demain. La plateforme rend ces signaux visibles. Elle permet aussi d'associer un plan d'action, par exemple activer un buffer planning, réduire le périmètre par MoSCoW, ou lancer une revue d'architecture.

**Intervenant : Léo**  
**Visuel : export Power BI et fichier structuré**

Enfin, nous montrons l'export vers Power BI. L'idée n'est pas de remplacer Power BI, mais de préparer des données propres, structurées et consolidées pour l'analyse. Le MVP génère un export exploitable avec les projets, KPI, risques et jalons. Cette fonctionnalité répond à une contrainte réaliste : beaucoup d'organisations ont déjà des tableaux de bord Power BI, mais manquent d'un flux fiable pour les alimenter. Notre solution joue donc le rôle de couche de consolidation entre les outils métiers et les outils décisionnels.

**Intervenant : Jules**  
**Visuel : retour au dashboard avec scénario d'arbitrage COPIL**

Pour conclure la démonstration, prenons un cas d'usage COPIL. La direction voit que le projet Data Lake a un retard sur un jalon critique, que le projet ERP dépasse son budget, et que le projet Green IT reste sous contrôle. En une seule vue, elle peut prioriser la discussion : arbitrage sur les ressources ERP, décision sur le planning Data Lake, validation du maintien du projet Green IT. C'est exactement ce que nous voulons prouver : le MVP transforme des données dispersées en décisions pilotables.

---

## 5. Qualité Visuelle et Technique

**Intervenant : Léo**  
**Visuel : alternance captures MVP, schéma d'architecture, zooms guidés et annotations**

La qualité visuelle et technique de la vidéo repose sur trois principes. Le premier est la lisibilité : chaque capture doit montrer une seule idée à la fois, avec un zoom sur la zone utile et une annotation courte. Le deuxième est la cohérence : les couleurs du dashboard, les pictogrammes de statut et les schémas d'architecture doivent rester homogènes pendant toute la vidéo. Le troisième est l'adéquation entre discours et visuel : quand nous parlons d'un risque, le registre des risques est à l'écran ; quand nous parlons d'intégration, le schéma SI apparaît ; quand nous parlons d'impact, les KPI sont visibles.

**Intervenant : Jules**  
**Visuel : storyboard simplifié et transitions prévues**

Pour maintenir l'attention, la vidéo alterne entre séquences de parole, démonstration écran, schémas et synthèses. Les transitions sont courtes et servent le raisonnement : contexte, problème, solution, preuve, impact. Nous éviterons les slides trop chargées et les longs passages statiques. L'objectif est que l'évaluateur comprenne immédiatement où nous en sommes et pourquoi chaque écran est montré. Cette discipline visuelle soutient la fluidité de la présentation autant que la compréhension technique du MVP. Les plans de coupe, les titres courts et les transitions sonores discrètes serviront uniquement à renforcer l'attention, jamais à masquer le contenu.

---

## 6. Originalité et Dépassement des Attentes

**Intervenant : Léo**  
**Visuel : slide « au-delà du MVP » avec IA, CI/CD, Green IT, accessibilité, RGPD**

L'originalité de la solution tient d'abord à son positionnement : Tech4Value n'est pas un outil de gestion de tâches de plus, mais une couche de pilotage stratégique connectée au SI existant. Nous avons aussi prévu des éléments qui dépassent le minimum attendu. Le premier est l'intégration potentielle de Claude API pour aider à générer des synthèses de risques, des comptes rendus de COPIL ou des recommandations d'arbitrage à partir des données consolidées. Cette IA n'est pas là pour remplacer la décision humaine ; elle accélère la préparation de la décision.

**Intervenant : Jules**  
**Visuel : pipeline CI/CD puis indicateurs qualité**

Le deuxième élément de dépassement concerne la qualité d'industrialisation : CI/CD, tests automatisés, documentation utilisateur, et gouvernance post-MVP. Même dans un cadre académique, nous avons raisonné comme une équipe projet professionnelle. Le troisième élément concerne la responsabilité numérique : Green IT, sobriété des écrans, limitation des traitements inutiles, accessibilité WCAG et prise en compte du RGPD. Ces choix montrent que la solution n'est pas seulement fonctionnelle ; elle est pensée pour être maintenable, acceptable et responsable. Nous avons également prévu une logique de roadmap Now-Next-Later afin de distinguer ce qui est démontré maintenant, ce qui sera industrialisé ensuite, et ce qui pourra devenir un avantage différenciant à plus long terme. Cette transparence évite de surpromettre : elle montre une capacité à prioriser, arbitrer et construire une trajectoire produit crédible, défendable devant un jury et devant un comité de direction exigeant et opérationnel.

---

## 7. Impact Potentiel du MVP

**Intervenant : Jules**  
**Visuel : tableau avant/après, reporting 30h vers 21h, bénéfices par profil**

L'impact potentiel du MVP se mesure d'abord par le gain opérationnel. Aujourd'hui, le reporting manuel représente environ 30 heures par semaine. En automatisant une partie de la consolidation et en centralisant les KPI, Tech4Value peut viser une réduction de 30 %, soit un passage d'environ 30 heures à 21 heures par semaine. Ce gain ne concerne pas seulement le temps ; il améliore aussi la fiabilité des informations présentées au COPIL. Moins de ressaisie signifie moins d'erreurs, moins de débats sur la source des chiffres et plus de temps consacré aux décisions.

**Intervenant : Léo**  
**Visuel : bénéfices utilisateurs finaux — Direction, PMO, chefs de projet, DSI**

Pour les utilisateurs finaux, la valeur est différente selon le profil. La direction obtient une vision synthétique et comparable des projets. Le PMO gagne un outil de consolidation et de priorisation. Les chefs de projet disposent d'un espace plus clair pour suivre leurs jalons, documents et risques. La DSI bénéficie d'une architecture qui respecte les outils en place au lieu de les contourner. Cette approche favorise l'adoption, car elle réduit la rupture d'usage : Odoo, SharePoint, Azure AD et Power BI restent dans l'écosystème.

**Intervenant : Jules**  
**Visuel : ROI qualitatif et quantitatif, roadmap post-MVP**

Le ROI attendu repose donc sur trois niveaux : productivité du reporting, qualité de décision et réduction des risques projet. À court terme, le MVP prouve que la consolidation est possible. À moyen terme, la roadmap prévoit des connecteurs plus complets, des alertes avancées, des rapports automatisés et des synthèses assistées par IA. À long terme, la plateforme peut devenir un véritable cockpit de gouvernance de portefeuille. C'est ce potentiel qui rend la solution convaincante : elle résout un problème immédiat tout en ouvrant une trajectoire d'évolution crédible, compatible avec les contraintes de Tech4Value et avec les attentes concrètes du terrain, notamment en matière de simplicité, de confiance et d'adoption.

---

## 8. Conclusion Convaincante

**Intervenant : Léo**  
**Visuel : récapitulatif en trois preuves — besoin réel, MVP démontré, impact mesurable**

Pour conclure, Tech4Value répond à un besoin clair : donner aux décideurs une vision fiable, consolidée et actionnable des projets stratégiques. Le MVP présenté démontre les fonctionnalités essentielles : connexion par rôle, dashboard multi-projets, suivi des KPI, gestion des risques, rattachement documentaire, simulation Odoo et SharePoint, export Power BI et trajectoire d'évolution. La pertinence de la solution vient de son ancrage dans le SI existant et de sa capacité à transformer le reporting en outil de pilotage.

**Intervenant : Jules**  
**Visuel : écran final avec prochaine étape, noms, remerciement**

Notre prochaine étape serait de tester le MVP avec un panel d'utilisateurs pilotes, de mesurer l'adoption à J+30, puis d'enrichir les connecteurs et les alertes selon les retours terrain. Nous pensons que cette solution peut convaincre parce qu'elle parle à la fois aux utilisateurs finaux, au PMO, à la DSI et à la direction. Elle ne promet pas une transformation magique ; elle propose une amélioration concrète, mesurable et gouvernable. En résumé, notre proposition est pertinente parce qu'elle part d'un problème réel, convaincante parce qu'elle s'appuie sur une démonstration opérationnelle, et durable parce qu'elle prévoit une prochaine étape claire : tester, mesurer, améliorer. La vidéo se termine donc sur cette promesse : mieux voir, mieux arbitrer, mieux piloter. Merci pour votre attention.
