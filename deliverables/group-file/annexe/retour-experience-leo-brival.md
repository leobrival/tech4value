# Retour d'expérience : Léo Brival

**Rôle** : Tech Lead / architecte solution  
**Projet** : Tech4Value

---

## Retour d'expérience : analyse dynamique projet

> Cette section constitue le retour d'expérience du dossier technique. Elle invite chaque membre de l'équipe à prendre du recul sur son expérience vécue du projet : les obstacles surmontés, les apprentissages réalisés, les forces mobilisées et les axes d'amélioration identifiés pour de futurs projets. L'analyse privilégie l'authenticité et la profondeur plutôt que la conformité à un format imposé. Les analyses ci-dessous sont rédigées par Jules Courtin, Chef de Projet / Product Manager, et Léo Brival, Tech Lead du projet.

**Rôle de cette section.** Sur un projet de 24 semaines mené en binôme, le retour d'expérience individuel clarifie les responsabilités, les apprentissages et les points d'amélioration propres à chaque rôle. Cette partie complète l'analyse collective du MVP, du dossier projet et de la démonstration vidéo.

**Ce que les parties prenantes attendent.** Cette analyse ne cherche pas une auto-promotion déguisée ni une liste de compétences génériques. Elle montre la capacité à reconnaître ses erreurs, à analyser ce qui n'a pas fonctionné sans minimiser, à articuler ce qui a été appris et à formuler des recommandations concrètes pour l'avenir.

**Contexte du projet Tech4Value.** Ce projet a été conduit dans des conditions resserrées : équipe de 2 personnes, 52 % des heures assistées par IA, délai de 24 semaines non négociable et référentiel projet partagé. Ces contraintes ont créé des situations utiles pour le retour d'expérience. Chaque membre de l'équipe a vécu une expérience distincte selon son rôle (PM vs Tech Lead), ses expertises préalables et ses défis spécifiques.

**Posture réflexive attendue.** Le retour d'expérience ne doit pas reproduire le contenu du dossier projet à la première personne. Il apporte une perspective supplémentaire : moments de doute, décisions prises sous incertitude, ajustements de posture et apprentissages inattendus. La crédibilité de l'analyse repose sur sa capacité à nommer les difficultés réelles avec précision.

**Méthode de rédaction recommandée.** La démarche consiste à : (1) identifier 2 à 3 expériences concrètes du projet qui illustrent le sujet, (2) les analyser avec recul plutôt que de les décrire factuellement, (3) en tirer une leçon ou une recommandation transférable à d'autres contextes. Cette structure en trois temps, expérience, analyse, généralisation, est celle qui produit les analyses les plus convaincantes. Elle démontre une maturité réflexive qui distingue un praticien capable d'apprendre de ses expériences d'un exécutant qui les subit.

### Trame de retour d'expérience

_Cette trame structure le retour d'expérience de chaque membre de l'équipe. Elle couvre quatre dimensions : défis rencontrés, forces et faiblesses, compétences développées, et axes d'amélioration. Chaque dimension est illustrée avec des exemples concrets issus du projet Tech4Value._

**Réflexion sur les défis rencontrés** : Décrire 2 à 3 défis significatifs rencontrés durant le projet. Pour chaque défi, préciser : la nature du problème, son impact sur le projet, et la solution ou adaptation mise en œuvre. L'authenticité est valorisée, un défi réel bien analysé vaut plus qu'un défi générique bien formulé. Exemple de défi pertinent : gestion d'une dépendance technique bloquante, arbitrage scope vs qualité sous contrainte de temps, coordination asynchrone sur une équipe distribuée.

**Identification forces et faiblesses** : Réaliser une auto-évaluation honnête sous forme de tableau ou de liste structurée. Les forces doivent être étayées par des exemples concrets du projet (pas des qualités génériques). Les faiblesses doivent être reconnues sans minimisation, accompagnées d'une conscience de leur impact et d'une perspective d'amélioration.

**Analyse des compétences développées** : Identifier les compétences nouvelles ou renforcées au cours du projet, techniques (nouvelles technologies, architectures, outils) et transversales (gestion de projet, communication, autonomie). Chaque compétence doit être reliée à une expérience concrète du projet.

**Axes d'amélioration** : Proposer 2 à 3 axes d'amélioration concrets et actionnables pour de futurs projets similaires. Ces propositions doivent découler de l'analyse des défis et faiblesses identifiés, elles démontrent la capacité à tirer des leçons et à progresser.

### Léo Brival : Tech Lead / architecte solution

#### 1. Réflexion sur les défis rencontrés

Le défi le plus structurant de ce projet a été la gestion de la dualité entre contraintes métier et standards industriels. En tant que Tech Lead sur une équipe de deux personnes, j'ai dû simultanément produire un MVP fonctionnel et maintenir un niveau de qualité technique défendable devant un comité de direction. Cette tension s'est manifestée lors de la phase de développement des intégrations SI : l'API Odoo v15 présente des lacunes de documentation significatives sur les endpoints de gestion des ressources humaines, ce qui m'a imposé plusieurs jours de rétro-ingénierie par débogage des échanges JSON-RPC. L'équipe a subi un retard de deux semaines sur le sprint d'intégration, absorbé par le buffer prévu en phase 3.

Le second défi majeur a été l'organisation du travail assisté par IA à grande échelle. Sur ce projet, 52 % des heures de développement ont bénéficié de l'assistance de Claude Code (Anthropic). Loin d'être une facilité, cette proportion représente un défi de supervision permanent : chaque suggestion de code doit être relue, comprise et validée avant commit, sous peine d'introduire des failles de sécurité ou des incohérences architecturales. J'ai développé une discipline de revue systématique, aucun bloc de code généré par IA n'est commité sans avoir été exécuté, testé et compris en profondeur. Cette pratique, plus lente que l'acceptation aveugle, a produit une base de code cohérente et maintenable.

Enfin, la coordination inter-pôles chez Tech4Value a mis en lumière un défi de conception souvent sous-estimé : modéliser des processus organisationnels complexes (allocation matricielle, portefeuille multi-projets, reporting consolidé) dans un schéma de données relationnel performant. La première version du modèle Prisma présentait une structure trop plate qui aurait généré des requêtes N+1 catastrophiques à l'échelle. La refonte du schéma (introduction des tables d'association `ProjectAssignment` et `PoleCapacity`) a été une décision architecturale difficile à S8, au moment où la pression de livraison était maximale.

#### 2. Identification des forces et faiblesses

| Forces identifiées                                                                                                                     | Faiblesses identifiées                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Maîtrise du stack TypeScript full-stack (React, Node.js, Prisma, PostgreSQL), accélération significative sur la phase de développement | Sous-estimation systématique des charges d'intégration : les connecteurs Odoo et SharePoint ont chacun pris 1,5× le temps estimé                      |
| Capacité à concevoir une architecture évolutive dès le départ (séparation des couches, adaptateurs SI, RBAC modulaire)                 | Tendance à l'over-engineering sur certaines abstractions (interface `Adapter` généralisée trop tôt, refactorisée à S14)                               |
| Aptitude à produire une documentation technique claire et structurée en parallèle du développement                                     | Difficulté à déléguer les décisions techniques à Jules sur les arbitrages fonctionnels, monopolisation involontaire de la prise de décision technique |
| Utilisation efficace de l'IA comme accélérateur (pas comme substitut), discipline de relecture maintenue sur l'ensemble du projet      | Communication insuffisante sur les blocages techniques lors des phases d'investigation, Jules a parfois manqué de visibilité sur les aléas en cours   |
| Rigueur sur les tests et la qualité : couverture maintenue à ≥70 % tout au long des sprints                                            | Estimation optimiste des délais en début de projet, les marges de sécurité auraient dû être doublées sur les phases d'intégration                     |

#### 3. Analyse des compétences développées

| Compétence                                                           | Niveau Avant  | Niveau Après  | Contexte d'Apprentissage                                                                         |
| -------------------------------------------------------------------- | ------------- | ------------- | ------------------------------------------------------------------------------------------------ |
| Architecture d'application d'entreprise (Three-Tier, adaptateurs SI) | Intermédiaire | Avancé        | Conception et implémentation du modèle d'adaptateurs pour Odoo, SharePoint et Power BI           |
| Intégration d'API tierces complexes (JSON-RPC, OAuth 2.0, REST)      | Intermédiaire | Avancé        | Rétro-ingénierie API Odoo v15, implémentation OAuth Azure AD, connecteur SharePoint Webhooks     |
| DevOps et CI/CD (GitHub Actions, Docker, déploiement cloud)          | Débutant      | Intermédiaire | Mise en place du pipeline complet lint → typecheck → test → build → deploy sur Vercel et Railway |
| Gestion de projet Agile hybride (Scrum adapté, cérémonies légères)   | Débutant      | Intermédiaire | 12 sprints de 2 semaines avec sprint planning, review et retrospective formalisés                |
| Collaboration humain-IA dans un contexte professionnel               | Débutant      | Avancé        | 24 semaines d'utilisation intensive de Claude Code avec discipline de supervision systématique   |
| Sécurité applicative (OWASP Top 10, RGPD by design)                  | Intermédiaire | Avancé        | Implémentation RBAC, Row Level Security PostgreSQL, headers de sécurité, audit OWASP ZAP         |

La compétence la plus inattendue développée au cours de ce projet est la **gestion de la collaboration humain-IA à grande échelle**. Ce projet a servi de laboratoire pour explorer les frontières entre délégation efficace à l'IA et maintien de la maîtrise architecturale. La règle que j'ai progressivement formulée : l'IA accélère l'exécution, l'humain maintient la cohérence. Toute décision architecturale, choix d'une abstraction, refactorisation d'un module, stratégie d'intégration, reste exclusivement humaine ; l'IA ne produit que des suggestions que j'évalue sur la base de ma compréhension du système global.

#### 4. Axes d'amélioration

**Pour de futurs projets similaires, quatre axes d'amélioration sont identifiés :**

1. **Anticiper les POC d'intégration dès la phase 1.** Les connecteurs Odoo et SharePoint auraient dû faire l'objet de prototypes jetables dès S2-S3 (en parallèle du cadrage) plutôt qu'en début de phase 2. Cette anticipation aurait révélé les limitations de l'API Odoo 4 semaines plus tôt, permettant un plan B (mock data structuré) planifié plutôt que réactif.

2. **Formaliser les Architecture Décision Records (ADR) dès le premier sprint.** Les décisions architecturales structurantes (choix PostgreSQL vs MongoDB, rejet du low-code, adoption de Zustand vs Redux) ont été prises oralement ou dans des commentaires de commit. Un ADR par décision majeure, archivé dans le dépôt (`/docs/adr/`), aurait amélioré la traçabilité et simplifié la rédaction du dossier technique.

3. **Mettre en place les tests E2E dès la phase 2, pas la phase 3.** L'absence de tests Playwright pendant les 8 premières semaines de développement a créé une dette de test difficile à résoudre en phase de consolidation. Le principe « test-first » appliqué aux tests unitaires aurait dû s'étendre aux parcours critiques dès les premiers sprints.

4. **Structurer un protocole de communication plus explicite avec le co-équipier PM.** Jules et moi avons fonctionné en confiance implicite, ce qui a globalement bien fonctionné. Mais sur plusieurs incidents techniques (blocage API Odoo, refonte du schéma Prisma), Jules a appris les aléas avec retard. Un rapport d'avancement hebdomadaire structuré (format fixe, envoyé chaque vendredi) aurait maintenu une visibilité partagée permanente sans multiplier les réunions.
