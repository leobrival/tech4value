# Script vidéo Tech4Value

**Format visé** : vidéo finale de 20 à 30 minutes, cible 25 minutes.
**Principe** : un texte par slide de `presentation-notion-tech4value.md`, dans le même ordre, avec des séquences de démonstration ajoutées aux moments utiles.
**Intervenants** : Jules Courtin et Léo Brival.
**Règle de tournage** : afficher la slide indiquée, lire ou adapter le texte associé, puis basculer sur les captures de démonstration lorsque la section le précise.

---

## Slide 1 : Thèse

**Intervenant : Jules**

Tech4Value doit reprendre le contrôle de ses 5 projets stratégiques avec une plateforme de pilotage unifiée. Aujourd'hui, l'entreprise dispose déjà de plusieurs briques utiles, mais elles ne produisent pas encore une vision consolidée du portefeuille. Le projet consiste donc à ajouter une couche de pilotage au-dessus du SI existant pour réduire le reporting manuel, fiabiliser les données et accélérer les arbitrages.

---

## Slide 2 : Contexte entreprise

**Intervenant : Jules**

Tech4Value est une ETI numérique de 185 collaborateurs, répartie sur 9 pôles et 3 sites. L'entreprise possède une maturité digitale intermédiaire : les processus sont présents, les outils existent, mais le pilotage reste fragmenté. L'enjeu est de passer d'une organisation qui consolide encore beaucoup manuellement à une organisation capable de piloter ses projets avec des indicateurs fiables et partagés.

---

## Slide 3 : Portefeuille stratégique

**Intervenant : Jules**

Le portefeuille étudié comprend 5 projets stratégiques. Ils mobilisent 78 ETP, soit 42 % des effectifs. Deux projets sont critiques : la conformité RGPD et le déploiement ERP Finance et Supply Chain. Trois autres projets structurent la transformation : Data Lake et BI Groupe, Green IT Cloud Durable et Portail RH Unifié. Cette concentration de projets crée une forte tension sur les ressources et rend les arbitrages plus complexes.

---

## Slide 4 : Problème central

**Intervenant : Jules**

Le problème central est la fragmentation du pilotage. Le PMO consacre environ 30 heures par semaine au reporting manuel. Les décisions reposent souvent sur des données vieilles de 3 à 7 jours. Le taux de livraison à temps est de 65 %, tandis que certains pôles sont en surcharge et d'autres sous-utilisés. Les 7 outils existants créent des doublons, des écarts de version et des discussions de Copil trop centrées sur la recherche de données plutôt que sur la décision.

---

## Slide 5 : Besoin et North Star Metric

**Intervenant : Jules**

Le besoin est de centraliser le pilotage stratégique dans une plateforme intégrée. La North Star Metric retenue est la réduction de 30 % du temps de reporting PMO, de 30 heures à 21 heures par semaine. Cette métrique est volontairement opérationnelle : si la plateforme ne réduit pas concrètement le temps de reporting, elle ne remplit pas son rôle. Elle oblige donc le MVP à produire rapidement une valeur mesurable.

---

## Slide 6 : Objectifs stratégiques

**Intervenant : Jules**

Les objectifs sont formulés de façon mesurable. Tech4Value vise une baisse du reporting PMO, une amélioration de la livraison à temps de 65 % à 90 %, une meilleure allocation des ressources, la consolidation progressive des 7 outils et un payback inférieur à 3 mois. Ces objectifs servent de fil conducteur pour la solution, la roadmap, les indicateurs de succès et la conduite du changement.

---

## Slide 7 : Proposition de valeur

**Intervenant : Jules**

La proposition de valeur est simple : un seul écran pour piloter tous les projets stratégiques. Pour la direction, cela signifie une vision portefeuille claire. Pour le PMO, moins de consolidation manuelle. Pour les chefs de projet, une lecture plus directe des jalons, des risques et des ressources. Pour les équipes, une meilleure visibilité sur les priorités et les arbitrages.

---

## Slide 8 : Solution cible

**Intervenant : Léo**

La solution cible est une plateforme web de pilotage stratégique connectée aux briques existantes : Odoo, SharePoint, Power BI et Azure AD. Elle ne remplace pas brutalement les outils déjà en place. Elle les orchestre. La plateforme centralise les projets, les ressources, les budgets, les jalons et les risques, puis restitue ces informations dans des vues adaptées à la Direction, au PMO, aux chefs de projet et aux administrateurs.

### Démo additionnelle après slide 8 : premier aperçu MVP

**Interfaces à afficher : plateforme Tech4Value, dashboard exécutif**

Dans cette première démonstration, on affiche le dashboard exécutif. On y retrouve les 5 projets stratégiques, leur avancement, leur budget, leur charge ETP, leur niveau de risque et leurs jalons proches. L'objectif est de montrer immédiatement la promesse du MVP : passer d'une consolidation manuelle à une lecture portefeuille exploitable en quelques secondes.

---

## Slide 9 : Architecture fonctionnelle

**Intervenant : Léo**

L'architecture fonctionnelle suit un modèle trois-tiers. La couche présentation est portée par Next.js, React et TypeScript. La couche applicative repose sur Node.js, Express et des services métier. La couche données s'appuie sur PostgreSQL hébergé sur Néon. Les intégrations avec Odoo, SharePoint, Power BI et Azure AD permettent de relier la plateforme au SI existant. Cette séparation rend la solution plus testable, plus maintenable et plus facile à faire évoluer.

---

## Slide 10 : Stack technique retenue

**Intervenant : Léo**

La stack retenue est TypeScript de bout en bout. Côté frontend : Next.js 14, React 18, Tailwind et Zustand. Côté backend : Node.js, Express, Prisma et PostgreSQL. Le déploiement repose sur Vercel pour le frontend, Railway pour l'API et Néon pour la base de données. Cette stack est adaptée à une équipe interne réduite, car elle limite les changements de langage, accélère le développement et reste cohérente avec les standards web actuels.

---

## Slide 11 : Intégrations SI critiques

**Intervenant : Léo**

Les intégrations sont le cœur de la valeur. Odoo est prioritaire pour les projets, les budgets, les ressources et les temps passés. SharePoint porte les documents projet. Power BI reste l'outil de restitution avancée, alimenté par API REST dédiée quand le connecteur est fiable, avec export CSV ou XLSX comme fallback. Azure AD structure l'identité, le SSO, la MFA et le RBAC.

### Démo additionnelle après slide 11 : interfaces Odoo en ligne

**Interfaces à afficher : Odoo Apps, Project, Timesheets, Planning, Documents, Dashboards, Approvals**

Nous ouvrons Odoo pour montrer la source opérationnelle des données. Sur l'écran Apps, nous mettons en avant Project, Timesheets, Planning, Documents, Dashboards et Approvals. Ces modules représentent les informations que le PMO manipule déjà, mais qui restent difficiles à consolider manuellement.

Dans Project, nous affichons les 5 projets stratégiques : RGPD, ERP Finance et Supply Chain, Data Lake et BI Groupe, Green IT Cloud Durable et Portail RH Unifié. Nous ouvrons ensuite un projet, par exemple ERP Finance, pour montrer les tâches, les jalons, les responsables, le statut et les points de risque.

Dans Timesheets et Planning, nous montrons la charge réelle et l'allocation des ressources. C'est ici que l'on relie concrètement les 78 ETP aux données projet : temps passé, capacité disponible, surcharge IT ou sous-utilisation Data.

Dans Documents, nous montrons les pièces projet : cahier des charges, compte rendu de Copil, registre des risques, support de formation ou document de recette. Le point clé est la traçabilité : un arbitrage doit pouvoir être relié à un document, à une version et à un projet.

Dans Dashboards, nous montrons la valeur de synthèse côté Odoo : projets actifs, budget consommé, avancement, risques et indicateurs de charge. Puis nous revenons à Tech4Value pour montrer la différence : Odoo reste le système source, Tech4Value consolide et présente les indicateurs dans une lecture Copil plus directe.

Dans Approvals, nous montrons un arbitrage : validation d'un budget ERP, approbation d'un jalon Data Lake ou demande de changement sur le Portail RH. Cette dernière interface montre le passage de l'information à la décision.

---

## Slide 12 : Sécurité, conformité et qualité

**Intervenant : Léo**

La solution est pensée comme une application professionnelle. L'authentification est structurée autour d'Azure AD, les rôles sont gérés par RBAC, les entrées sont validées côté serveur et les risques OWASP sont pris en compte. Le RGPD est traité par la minimisation, la traçabilité et la gestion des droits. La qualité repose sur des tests unitaires, d'intégration, end-to-end, des tests de charge, du monitoring et une cible Lighthouse élevée.

---

## Slide 13 : Management de projet

**Intervenant : Jules**

La méthode retenue est Agile Hybride. Le cadrage initial reprend la rigueur du Waterfall : besoin, périmètre, planning, budget, risques. L'exécution utilise ensuite des sprints courts pour absorber les découvertes techniques, notamment sur Odoo, Azure AD et SharePoint. Cette méthode est adaptée à une équipe de deux personnes : elle garde une vision long terme tout en permettant d'ajuster le MVP.

---

## Slide 14 : Roadmap Now-Next-Later

**Intervenant : Jules**

La roadmap Now-Next-Later permet de protéger le MVP contre le scope creep. Le Now couvre le cadrage et les fondations. Le Next couvre l'architecture, les intégrations et le MVP Alpha. Le Later couvre la consolidation, les tests utilisateurs, les retours d'expérience et les évolutions post-MVP. Cette approche évite de promettre trop tôt des fonctionnalités non critiques.

---

## Slide 15 : Jalons majeurs

**Intervenant : Jules**

Le projet est piloté par 8 jalons vérifiables. Les premiers jalons sécurisent le cadrage, l'infrastructure et l'authentification. Les jalons intermédiaires valident l'intégration Odoo, le MVP Alpha puis la bêta stable. Les derniers jalons couvrent la vidéo, le dossier projet et les retours d'expérience. Cette logique permet au Copil de suivre l'avancement avec des critères de validation concrets.

---

## Slide 16 : Budget et ROI

**Intervenant : Jules**

Le budget distingue l'effort interne du MVP et les dépenses directes d'infrastructure. Jules et Léo sont valorisés dans les coûts RH du MVP. Les dépenses directes d'infrastructure et de licences restent limitées grâce aux free tiers. La valeur économique annuelle estimée atteint 1,06 million d'euros, principalement grâce au temps gagné, à la réduction de la fragmentation et à une meilleure allocation des ressources.

---

## Slide 17 : Business model potentiel

**Intervenant : Jules**

Même si le projet est d'abord interne, la logique peut devenir une offre SaaS pour des PME ou ETI qui rencontrent les mêmes problèmes : outils fragmentés, reporting manuel et manque de vision portefeuille. Le modèle potentiel combine abonnement SaaS, implémentation, formation et support. Cette projection n'est pas le cœur du MVP, mais elle montre que la solution a une valeur réutilisable.

---

## Slide 18 : Diagnostic 7S McKinsey

**Intervenant : Jules**

Le diagnostic 7S montre que la transformation ne se limite pas à la technologie. La stratégie et la structure sont déjà assez alignées : Tech4Value veut mieux piloter ses projets et dispose d'un PMO. Les points les plus sensibles sont les systèmes, les compétences et les valeurs partagées. Il faut donc accompagner l'adoption, former les utilisateurs et installer une culture de décision par la donnée.

---

## Slide 19 : Conduite du changement

**Intervenant : Jules**

La conduite du changement est traitée comme un volet central du projet. Le modèle ADKAR structure l'accompagnement : comprendre le changement, vouloir y participer, savoir l'utiliser, être capable de l'appliquer, puis l'ancrer dans la durée. Le programme repose sur des early adopters, des ambassadeurs par pôle, des formations par rôle et des indicateurs d'adoption à J+30 et J+90.

---

## Slide 20 : Risques et mitigations

**Intervenant : Jules**

Les risques critiques sont identifiés dès le cadrage. Les principaux risques sont la confusion sur le besoin, la complexité de l'intégration Odoo, le scope creep, l'adoption faible, la dépendance à une équipe réduite et la qualité insuffisante. Chaque risque dispose d'une mitigation : cadrage strict, POC API, fallback CSV, priorisation MoSCoW, documentation, tests et support utilisateur.

---

## Slide 21 : Différenciation et innovation

**Intervenant : Léo**

La différenciation vient de trois éléments : l'intégration avec le SI existant, la gouvernance projet et l'usage contrôlé de l'IA. La solution ne se limite pas à un tableau de bord. Elle relie les données opérationnelles, les documents, les responsabilités et les arbitrages. L'intégration Claude API est documentée comme un différenciant pour la synthèse de risques, la préparation de comptes rendus et les recommandations d'arbitrage.

---

## Slide 22 : Documentation projet et conformité

**Intervenant : Léo**

Le projet est documenté de manière professionnelle : dossier technique, annexes sobres, retours d'expérience séparés, script vidéo, présentation Notion et PDFs générés. La documentation ne sert pas seulement à expliquer le projet ; elle garantit sa reprise, son audit et son amélioration. Chaque choix important est relié à une preuve : besoin, architecture, planning, risque, test ou conduite du changement.

---

## Slide 23 : Impact attendu

**Intervenant : Jules**

L'impact attendu est direct : moins de temps passé à consolider, des décisions plus rapides, une meilleure livraison à temps, une allocation plus fiable et une adoption mesurable. Le MVP doit démontrer que Tech4Value peut passer d'un pilotage fragmenté à un pilotage consolidé. La valeur n'est pas seulement économique ; elle est aussi organisationnelle, documentaire et managériale.

---

## Slide 24 : Ask / décision attendue

**Intervenant : Jules**

La décision attendue est de valider le cadrage MVP et de concentrer l'exécution sur les intégrations prioritaires : Odoo, Power BI, SharePoint et Azure AD. La recommandation est de lancer un MVP cadré, avec le reporting PMO automatisé comme premier cas d'usage démontrable. Cela permet de prouver vite la valeur, de mesurer l'adoption et de préparer les évolutions.

---

## Annexe A : répartition des pôles

**Intervenant : Jules, si besoin en support**

Cette annexe sert de support si l'on doit expliquer la complexité organisationnelle. Elle montre les 9 pôles, leurs effectifs et leurs missions. Elle justifie pourquoi le pilotage des ressources est difficile : les projets stratégiques mobilisent plusieurs pôles à la fois, avec des contraintes différentes.

---

## Annexe B : fonctionnalités MVP core

**Intervenant : Léo, si besoin en support**

Cette annexe résume les fonctionnalités du MVP : dashboard exécutif, planning Gantt, RACI, suivi budget, reporting automatisé et allocation des ressources. Elle permet de rappeler que le MVP est volontairement limité aux fonctions qui réduisent le reporting et améliorent les arbitrages.

---

## Annexe C : Roadmap 24 mois

**Intervenant : Jules, si besoin en support**

Cette annexe présente la vision long terme : MVP, normalisation, valeur ajoutée puis monétisation potentielle. Elle permet de montrer que le projet est conçu pour durer, sans surcharger la première version.

---

## Annexe D : sources consolidées

**Intervenant : Léo, si besoin en support**

Cette annexe liste les documents sources : dossier technique, architecture, Business Model Canvas, matrice 7S et roadmap. Elle sert de preuve de cohérence documentaire et montre que la présentation n'est pas isolée du reste du dossier.

---

## Conclusion courte

**Intervenant : Jules**

La force du projet tient dans cette combinaison : un besoin métier réaliste, une réponse technique cohérente, une démonstration lisible, une gouvernance structurée et une trajectoire d'amélioration crédible. En résumé : mieux voir, mieux arbitrer, mieux piloter. Merci pour votre attention.
