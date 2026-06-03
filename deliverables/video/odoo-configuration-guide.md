# Configuration complète Odoo — Démo Tech4Value

Objectif : préparer une instance Odoo pour filmer la vidéo MVP Tech4Value avec un parcours cohérent : **Apps → Settings → Project → Timesheets/Planning → Documents → Dashboards → Approvals → Conclusion**.

> Je ne peux pas modifier directement une instance Odoo sans URL, accès administrateur et confirmation. Ce document décrit donc la configuration complète à appliquer. Si tu me fournis l'accès à l'instance, je pourrai suivre cette checklist opérationnelle.

---

## 1. Modules à installer / activer

Depuis l'écran **Apps**, vérifier ou installer :

- Project
- Dashboards
- Timesheets
- Planning
- Documents
- Approvals
- Employees
- Accounting
- Discuss
- Calendar
- To-do
- Knowledge
- Settings

Modules bonus si disponibles :

- AI
- Spreadsheet / Documents Spreadsheet
- Sign

---

## 2. Paramétrage Settings

Interface : **Settings → Users & Companies → Users / Groups**

### Groupes à créer ou simuler

| Groupe | Usage vidéo | Accès conseillé |
| --- | --- | --- |
| Direction | Vue COPIL, décisions, KPI globaux | Dashboards, Project lecture, Approvals validation |
| PMO | Pilotage portefeuille, consolidation, risques | Project admin, Dashboards, Documents, Planning |
| Chef de projet | Suivi opérationnel | Project user, Timesheets, Documents |
| DSI | Gouvernance SI, sécurité, intégrations | Settings lecture, Project, Dashboards |

### Utilisateurs de démo

| Nom | Rôle | Email fictif |
| --- | --- | --- |
| Jules Courtin | PM / PMO | jules.courtin@tech4value.demo |
| Léo Brival | Tech Lead / DSI | leo.brival@tech4value.demo |
| Camille Direction | Direction | camille.direction@tech4value.demo |
| Sarah Projet | Chef de projet | sarah.projet@tech4value.demo |

À filmer : utilisateurs, groupes, droits d'accès.

---

## 3. Employees

Interface : **Employees**

Créer ou simuler les pôles Tech4Value :

| Pôle | Effectif |
| --- | ---: |
| Direction générale et PMO | 10 |
| IT & Infrastructure | 32 |
| Data & BI | 18 |
| Développement & Digital Factory | 38 |
| Sécurité & Conformité | 15 |
| RH & Communication interne | 20 |
| Finance & Achats | 16 |
| RSE & Green IT | 6 |
| Fonctions support | 10 |

Total à afficher dans la vidéo : **185 collaborateurs**.

---

## 4. Project — portefeuille stratégique

Interface : **Project**

Créer 5 projets :

| Projet | Responsable | ETP | Statut | Budget fictif |
| --- | --- | ---: | --- | ---: |
| Mise en conformité RGPD | Jules Courtin | 13 | À surveiller | 45 000 € |
| Déploiement ERP Finance & Supply Chain | Sarah Projet | 19 | Critique | 110 000 € |
| Plateforme Data Lake et BI Groupe | Léo Brival | 18 | En retard | 85 000 € |
| Programme Green IT - Cloud durable | Léo Brival | 11 | OK | 40 000 € |
| Portail RH unifié | Jules Courtin | 17 | Risque adoption | 70 000 € |

Total cible : **78 ETP** et **350 000 €**.

### Étapes Kanban recommandées

- Cadrage
- Conception
- Développement
- Tests / Recette
- Déploiement
- Suivi COPIL

### Tags à créer

- Critique
- À surveiller
- OK
- Budget
- Planning
- Adoption
- RGPD
- Green IT

---

## 5. Tâches risques dans Project

Créer des tâches de type risque :

| Projet | Risque | Criticité | Responsable | Mitigation |
| --- | --- | --- | --- | --- |
| ERP Finance | Dépassement budgétaire | Critique | Jules | Arbitrage COPIL |
| Data Lake | Retard jalon architecture | Élevée | Léo | Buffer planning |
| Portail RH | Adoption utilisateur faible | Moyenne | Jules | Early adopters + formation |
| RGPD | Non-conformité traitement | Élevée | Jules | Revue DPO / CNIL |
| Green IT | Mesure impact incomplète | Moyenne | Léo | Indicateurs sobriété |

À filmer : fiche projet, tâches, tags, responsable, activité planifiée.

---

## 6. Timesheets + Planning

Interfaces : **Timesheets** et **Planning**

Créer quelques lignes de temps fictives :

| Collaborateur | Projet | Temps | Commentaire |
| --- | --- | ---: | --- |
| Léo Brival | Data Lake | 14 h | Architecture technique |
| Jules Courtin | ERP Finance | 8 h | Préparation COPIL |
| Sarah Projet | Portail RH | 12 h | Ateliers utilisateurs |
| Camille Direction | ERP Finance | 2 h | Arbitrage budget |

Dans Planning, montrer :

- surcharge sur ERP Finance ;
- disponibilité partielle sur Green IT ;
- allocation transverse PMO.

---

## 7. Documents

Interface : **Documents**

Créer des dossiers :

- 01_Cadrage
- 02_COPIL
- 03_Budget
- 04_Risques
- 05_Recette
- 06_Formation

Documents à ajouter ou simuler :

- Cahier des charges Tech4Value
- PV COPIL #1
- Budget prévisionnel 350 000 €
- Registre des risques
- Guide utilisateur MVP
- Support de formation PMO

À filmer : rattachement documents → projet, tags, version ou activité.

---

## 8. Dashboards — cockpit COPIL

Interface : **Dashboards**

Créer une vue « COPIL Tech4Value » avec ces KPI :

| KPI | Valeur de démo |
| --- | ---: |
| Projets stratégiques | 5 |
| ETP mobilisés | 78 |
| Budget total | 350 000 € |
| Reporting actuel | 30 h / semaine |
| Reporting cible | 21 h / semaine |
| Gain attendu | -30 % |
| Risques critiques | 3 |
| Projets en alerte | 2 |

Graphiques recommandés :

- budget par projet ;
- avancement par projet ;
- risques par criticité ;
- charge ETP par pôle ;
- reporting avant/après.

---

## 9. Approvals — arbitrages COPIL

Interface : **Approvals**

Demandes à créer :

| Demande | Projet | Statut |
| --- | --- | --- |
| Arbitrage budget ERP Finance | ERP Finance | En attente |
| Validation jalon Data Lake | Data Lake | En attente |
| Plan adoption Portail RH | Portail RH | Approuvé |
| Changement périmètre MVP | Global | En attente |

À filmer : création / consultation / validation d'une demande.

---

## 10. Parcours final à filmer

1. Apps : montrer l'écosystème.
2. Settings : montrer rôles et gouvernance.
3. Employees : illustrer les 185 collaborateurs.
4. Project : afficher les 5 projets.
5. Timesheets / Planning : montrer charge et ressources.
6. Documents : relier les livrables aux projets.
7. Dashboards : présenter le cockpit COPIL.
8. Approvals : simuler l'arbitrage.
9. Apps : retour final, zoom Project + Dashboards.

---

## 11. Checklist avant enregistrement

- [ ] Les modules nécessaires sont visibles sur Apps.
- [ ] Les 5 projets existent dans Project.
- [ ] Les statuts et tags sont lisibles.
- [ ] Les utilisateurs / groupes sont préparés.
- [ ] Les temps passés existent dans Timesheets.
- [ ] Le planning montre au moins une surcharge.
- [ ] Les documents sont classés et nommés clairement.
- [ ] Le dashboard COPIL affiche les KPI clés.
- [ ] Les demandes Approvals existent.
- [ ] Les écrans sont nettoyés : pas de données personnelles réelles.
