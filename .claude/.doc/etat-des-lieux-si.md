# État des Lieux des Briques SI - Tech4Value
**Projet d'Étude M2 - 2025**

---

## Présentation de l'Entreprise

**Tech4Value** est une entreprise comptant environ **185 collaborateurs**, répartis entre le siège et deux antennes régionales (Rennes et Lyon).

Elle fonctionne selon une **organisation matricielle** combinant pôles métiers (orientés production) et fonctions support (pilotage, RH, finance, etc.).

---

## 1. Répartition Globale des Effectifs

| Pôle / Département | Missions Principales | Effectif |
|-------------------|---------------------|----------|
| **Direction générale et PMO** | Gouvernance, priorisation stratégique, reporting exécutif | 10 |
| **Pôle IT & Infrastructure** | Supervision SI, réseau, ERP, cloud, sécurité opérationnelle | 32 |
| **Pôle Data & BI** | Gouvernance de la donnée, développement Data Lake, reporting groupe | 18 |
| **Pôle Développement & Digital Factory** | Développement d'applications internes et clients (web, mobile, API) | 38 |
| **Pôle Sécurité & Conformité** | RGPD, cybersécurité, gestion des audits et conformité SI | 15 |
| **Pôle RH & Communication interne** | Gestion RH, formations, carrière, communication corporate | 20 |
| **Pôle Finance & Achats** | Gestion budgétaire, contrôle de gestion, contractualisation fournisseurs | 16 |
| **Pôle RSE & Green IT** | Suivi des indicateurs environnementaux, gouvernance durable du cloud | 6 |
| **Fonctions support** | Support administratif, juridique, gestion de site | 10 |
| **TOTAL** | | **185 collaborateurs** |

---

## 2. Répartition des Effectifs par Projet Stratégique

| Projet | Pôles Impliqués | Effectif Dédié (ETP) | Détails |
|--------|----------------|---------------------|---------|
| **Projet 1 - Mise en conformité RGPD** | Sécurité & Conformité (8), Data & BI (3), PMO (2) | 13 ETP | Équipe pluridisciplinaire orientée conformité et traitement de la donnée |
| **Projet 2 - Déploiement ERP Finance & Supply Chain** | IT & Infra (10), Finance & Achats (6), PMO (3) | 19 ETP | Projet critique piloté directement par la direction financière |
| **Projet 3 - Plateforme Data Lake et BI Groupe** | Data & BI (10), IT (6), PMO (2) | 18 ETP | Projet transverse au service de la gouvernance des données |
| **Projet 4 - Programme Green IT - Cloud durable** | IT & Infra (4), RSE & Green IT (4), Sécurité & Conformité (3) | 11 ETP | Équipe à dominante technique et environnementale |
| **Projet 5 - Portail RH unifié** | RH & Communication (10), IT (5), PMO (2) | 17 ETP | Pilotage RH, accompagnement au changement et interconnexion SIRH |
| **TOTAL** | | **78 ETP** | Environ **42% des effectifs** de Tech4Value |

> **Note** : Le reste des équipes (≈ 107 collaborateurs) assure les opérations courantes et la maintenance des services internes ou clients.

---

## 3. Gouvernance Projet

### Structure de Gouvernance

- **Comité Exécutif** : Direction générale, DSI, DRH, Directeur financier, PMO
- **Comité de Pilotage (Copil)** : Un représentant par pôle concerné, reporting mensuel consolidé
- **Chefs de projet** : Rôle confié à un trinôme d'alternants, chargés de la coordination inter-pôles

---

## 4. Cartographie des Outils SI

> Ce document fournit une **cartographie opérationnelle** des principaux outils en place chez Tech4Value, pour aider à concevoir une solution de pilotage stratégique réaliste et interopérable.

---

### 4.1 ERP - Odoo (v15 Cloud)

#### Fonction Principale
ERP utilisé pour centraliser les fonctions RH, financières et administratives.

#### Modules Activés
- **RH** : gestion des contrats, congés, feuilles de temps, affectations
- **Comptabilité & Facturation** : budget projet, commande client, marge
- **Projet** : utilisé par certaines BU pour le suivi macro des jalons
- **Achats** : lien avec les ressources externes (prestataires, licences, matériel)

#### Données Clés Disponibles
- Identifiants de projets internes
- Budgets prévisionnels et réels
- Affectations ressources / temps passés
- Données RH (collaborateur, coût/jour, disponibilité)

#### Intégration Possible
- API REST documentée (externe)
- Exports CSV ou Excel réguliers (feuilles de temps, lignes budgétaires)
- Connecteurs tiers via Make, Zapier ou Power BI

#### Points d'Attention
- Certaines équipes saisissent les temps dans Odoo, d'autres dans Excel → désynchronisation possible
- Nomenclature projet à respecter (ex : `PJT-001_INT_DEV`)

---

### 4.2 CRM - HubSpot

#### Fonction Principale
Suivi des cycles commerciaux et des opportunités (avant-vente).

#### Données Utiles pour les Chefs de Projet
- **Origine commerciale** des projets (client, canal, secteur)
- **Estimations initiales** de budget, délai, équipe
- **Contacts client** + historique de relation

#### Intégration Possible
- API native HubSpot
- Connecteurs no-code (Zapier, Make)
- Export Excel régulier

#### Points d'Attention
- Données sensibles (devis, CA) → filtrage recommandé
- Non utilisé par les équipes techniques : besoin d'interface pédagogique

---

### 4.3 Suite Collaborative - Microsoft 365 + SharePoint Online

#### Fonction Principale
Plateforme collaborative interne pour le travail d'équipe et l'archivage projet.

#### Usages Actuels
- Chaque projet dispose d'un **espace SharePoint dédié**
- Stockage des livrables clients, PV de réunion, plannings, comptes-rendus
- **Teams** est utilisé pour la communication d'équipe (chat, visio, canaux dédiés)
- Intégration aux Groupes M365 (calendrier, OneDrive, etc.)

#### Sécurité
- Gestion des accès par **groupes de sécurité Azure AD**
- Rôles restreints : lecteur / éditeur / admin

#### Intégration Attendue
- Lien direct vers SharePoint depuis la plateforme projet
- Synchronisation de livrables (drag & drop, ou lien vers bibliothèque)
- Conservation des versions + traçabilité

---

### 4.4 BI & Pilotage - Power BI

#### Fonction Principale
Solution utilisée pour le reporting stratégique et opérationnel.

#### Tableaux de Bord Existants
- Suivi du temps vendu vs temps consommé
- Taux d'occupation par collaborateur
- Marges projet (par client, par typologie)
- Suivi du plan de charge prévisionnel vs réel

#### Sources d'Alimentation
- Odoo (exports .xlsx automatisés)
- SharePoint / Excel (rapports manuels)
- Google Sheets (plannings externes)
- ERP / CRM via passerelle (Power Query)

#### Intégration Attendue
- Le MVP proposé doit pouvoir **alimenter ou être intégré dans Power BI**
- Format de sortie recommandé : **CSV standardisé** ou **base Excel structurée**
- **Bonus** : proposer un modèle de dashboard dans Power BI (même fictif)

---

### 4.5 Sécurité & Authentification - Azure Active Directory (Azure AD)

#### Fonction Principale
Authentification unique et gestion des identités pour tous les outils d'entreprise.

#### Politique en Place
- **SSO activé** (connexion via compte pro) sur SharePoint, Teams, Odoo
- **MFA obligatoire** pour tous les utilisateurs
- Rôles gérés par groupes AD (ex. : `PMO_Global`, `Projets_Barcelone`, `DAF`)

#### Intégration Attendue
- Si outil externe proposé → vérifier compatibilité SSO (même en version simulateur)
- Prévoir des rôles utilisateurs simples dans le MVP (Viewer, PM, Admin)

---

### 4.6 Outils de Gestion Projet Déjà en Usage (Fragmentés)

| Outil | Utilisateurs | Usage Actuel | Limites |
|-------|--------------|--------------|---------|
| **Trello** | Petites équipes | Kanban projet, suivi individuel | Pas de vision portefeuille, pas d'export |
| **Jira** | Équipes Dev | Suivi Agile, backlog, sprints | Non généralisé, non intégré au reste |
| **Notion** | Équipes transverses | Documentation, bases de données | Pas d'instance centralisée |
| **Excel** | Tous | Gantt, budgets, feuilles de temps | Non collaboratif, siloté |

#### Recommandation
Le nouveau système doit **structurer ou remplacer** ces usages.

Les étudiants peuvent décider :
- de **normaliser les usages existants** (ex. : généraliser Jira ou Notion)
- ou de **proposer un outil transverse consolidé**

---

## 5. Synthèse - Recommandations d'Intégration

| Brique SI | Intégration Recommandée ? | Mode d'Interaction Attendu |
|-----------|---------------------------|----------------------------|
| **ERP Odoo** | ✅ Oui | API ou CSV exportés |
| **CRM HubSpot** | ⚠️ Optionnel | API ou connecteur Make |
| **SharePoint** | ✅ Oui | Liens intégrés / versioning |
| **Power BI** | ✅ Oui | Fichier source / connecteur |
| **Azure AD** | 🛡️ À prendre en compte | Simulation de rôles SSO |
| **Trello, Jira...** | 🔄 Reprise ou migration | Choix à argumenter |

---

## Conclusion

Cette cartographie opérationnelle permet de :
- Comprendre l'écosystème technique existant
- Identifier les points d'intégration prioritaires
- Concevoir une solution de pilotage projet réaliste et interopérable
- Justifier les choix techniques et d'architecture
