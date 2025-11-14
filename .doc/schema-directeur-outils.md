# Schéma Directeur des Outils – Tech4Value (M2 CPIT 2025)

## Vue d'ensemble

Ce document propose une architecture d'intégration des outils SI de Tech4Value autour d'une plateforme de pilotage stratégique centralisée.

---

## 1. Architecture générale des briques SI

### 1.1 Niveaux de composants

```
┌─────────────────────────────────────────────────────────────┐
│                    PILOTAGE STRATÉGIQUE                     │
│        (Plateforme MVP + Power BI + Reporting)              │
└────────────┬────────────────────────────────────────────────┘
             │
     ┌───────┴───────┬──────────────┬──────────────┐
     │               │              │              │
┌────▼─────┐  ┌─────▼────┐  ┌─────▼────┐  ┌─────▼────┐
│   ERP    │  │   CRM    │  │ COLLAB.  │  │ SÉCURITÉ │
│  Odoo    │  │ HubSpot  │  │SharePoint│  │ Azure AD │
└────┬─────┘  └─────┬────┘  │  Teams   │  └─────┬────┘
     │              │       └────┬─────┘        │
     └──────────────┼────────────┘──────────────┘
                    │
         ┌──────────▼──────────┐
         │ Outils fragmentés   │
         │ (Trello, Jira,      │
         │  Notion, Excel)     │
         └─────────────────────┘
```

---

## 2. Matrice d'intégration recommandée

### 2.1 Tableau synthétique

| Composant | Fonction | Statut | Mode d'intégration | Priorité |
|-----------|----------|--------|-------------------|----------|
| **ERP Odoo** | Données RH, budgets, affectations, contrats | ✅ Oui | API REST / CSV | **P1** |
| **CRM HubSpot** | Contexte commercial, estimations initiales | ⚠️ Optionnel | API HubSpot / Make | P2 |
| **SharePoint** | Livrables, archivage, traçabilité | ✅ Oui | Liens intégrés | **P1** |
| **Power BI** | Reporting stratégique et KPI | ✅ Oui | Fichier source + connecteur | **P1** |
| **Azure AD** | Authentification, gestion des rôles | ✅ Critique | SSO (simulation) | **P0** |
| **Trello/Jira/Notion** | Gestion projet fragmentée | ❌ Reprise | Normalisation ou migration | P3 |

---

## 3. Flux de données par domaine

### 3.1 Domaine Ressources Humaines & Budgets

```
┌──────────┐
│  Odoo    │
│  Module  │
│   RH     │
└────┬─────┘
     │ ✓ Identifiants collaborateurs
     │ ✓ Coûts/jour, disponibilité
     │ ✓ Affectations ressources
     │ ✓ Feuilles de temps
     │
     ├──────────────────┬──────────────────┐
     │                  │                  │
  ┌──▼───┐          ┌───▼──┐         ┌────▼─────┐
  │ MVP  │          │Power │         │SharePoint│
  │Pilot.│          │ BI   │         │(Archivage)
  └──┬───┘          └───┬──┘         └────┬─────┘
     │ Dashboards       │ Reporting       │ Métadonnées
     │ planification    │ taux occup.     │ affectations
     │                  │ marges          │
```

### 3.2 Domaine Projets & Jalons

```
┌───────────┐     ┌──────────┐      ┌─────────────┐
│  HubSpot  │     │  Odoo    │      │ SharePoint  │
│  Module   │     │ Module   │      │   Projet    │
│  CRM      │     │ Projet   │      │             │
└─────┬─────┘     └────┬─────┘      └──────┬──────┘
      │ Contexte       │ Suivi macro       │ Livrables
      │ commercial    │ jalons            │ PV réunion
      │ devis         │ budgets           │ plannings
      │               │                   │
      └───────────────┼───────────────────┘
                      │
                  ┌───▼──┐
                  │Power │
                  │ BI   │
                  └──┬───┘
                     │ KPI portefeuille
                     │ santé projets
                     │ plan de charge
```

### 3.3 Domaine Sécurité & Authentification

```
┌──────────┐
│ Azure AD │
│  (SSO)   │
└────┬─────┘
     │ Groupes de sécurité
     │ Rôles (PMO, Dev, etc.)
     │ MFA obligatoire
     │
     ├────────┬────────┬────────┬─────────┐
     │        │        │        │         │
  ┌──▼─┐  ┌──▼─┐  ┌───▼──┐  ┌──▼─┐   ┌──▼──┐
  │Odoo│  │SP  │  │Teams │  │BI  │   │ MVP │
  └────┘  └────┘  └──────┘  └────┘   └─────┘
  (SSO)   (SSO)   (SSO)     (SSO)    (Rôles
                                      simul.)
```

---

## 4. Détail des intégrations par composant

### 4.1 ERP Odoo (Priorité P1)

**Données critiques exportées:**
- Identifiants projets (ex: `PJT-001_INT_DEV`)
- Budgets prévisionnels et réels
- Affectations ressources et temps passés
- Données RH collaborateurs (coût/jour, disponibilité)

**Modes d'intégration:**
```
Odoo ──[API REST]──> MVP Pilotage ──[CSV]──> Power BI
     └─[CSV Export]─────────────────────────┘
```

**Points d'attention:**
- Désynchronisation saisie Odoo ↔ Excel → Instaurer Excel comme source unique pour feuilles de temps
- Nomenclature projet stricte obligatoire
- Export automatisé recommandé (scheduler)

---

### 4.2 CRM HubSpot (Priorité P2 - Optionnel)

**Données utiles:**
- Origine commerciale (client, canal, secteur)
- Estimations initiales (budget, délai, équipe)
- Contacts client + historique relation

**Modes d'intégration:**
```
HubSpot ──[API]──> MVP Pilotage
       └─[Make/Zapier]──> Odoo (synchronisation légère)
```

**Points d'attention:**
- Données sensibles (devis, CA) → filtrage recommandé
- Peu utilisé par équipes techniques → prévoir interface pédagogique
- Optionnel pour MVP, utile pour vision commerciale

---

### 4.3 SharePoint Online (Priorité P1)

**Stockage et archivage:**
- Livrables clients
- PV de réunion
- Plannings détaillés
- Comptes-rendus projet

**Modes d'intégration:**
```
MVP Pilotage ──[Liens intégrés]──> SharePoint
            └─[Métadonnées]────────────────>

Traçabilité: Versioning + Audit trail
```

**Points d'attention:**
- Chaque projet = espace SharePoint dédié
- Gestion des accès via Azure AD groups
- Conservation versions automatique

---

### 4.4 Power BI (Priorité P1)

**Tableaux de bord existants:**
- Temps vendu vs consommé
- Taux d'occupation collaborateurs
- Marges projets (client, type)
- Plan de charge prévisionnel vs réel

**Modes d'intégration:**
```
Sources multiples:
├─ Odoo ──[exports .xlsx]──┐
├─ SharePoint ─────────────┼──> Power BI
├─ Google Sheets ──────────┤    (Modèle
├─ Excel structurés ───────┘     de
└─ [MVP Pilotage] ────[CSV]┐     données)
                           │
                          Models
                           │
                      Dashboards
                           │
                    Rapports exécutifs
```

**Format de sortie du MVP:**
- CSV standardisé (colonnes pré-définies)
- Ou base Excel structurée
- Bonus: modèle dashboard Power BI fictif

---

### 4.5 Azure Active Directory (Priorité P0)

**Authentification & Autorisation:**
```
Azure AD (SSO)
    ├─ Groupes: PMO_Global, Projets_Barcelone, DAF, etc.
    ├─ MFA obligatoire (tous utilisateurs)
    └─ Rôles restreints (Lecteur, Éditeur, Admin)
             │
         ┌───┴────┬──────┬────────┐
         │        │      │        │
      Odoo     Teams  SharePoint Power BI
      (SSO)    (SSO)   (SSO)      (SSO)

         │  [MVP]
         └──> Simulation rôles SSO
```

**Points d'attention:**
- Authentification de base pour MVP
- Rôles simples: Viewer, PM, Admin
- Prévoir extension future vers vrai SSO

---

### 4.6 Outils fragmentés (Priorité P3 - À décider)

**Situation actuelle:**

| Outil | Utilisateurs | Usage | Limite |
|-------|--------------|-------|--------|
| Trello | Petites équipes | Kanban proj | Pas vision portefeuille |
| Jira | Équipes Dev | Agile, backlog | Non généralisé, siloté |
| Notion | Transverse | Documentation | Pas d'instance centralisée |
| Excel | Tous | Gantt, budgets | Non collaboratif |

**Scénarios de consolidation:**

**Scénario A – Généraliser Jira**
```
Jira = Single source of truth
├─ Suivi Agile des sprints
├─ Intégration via API vers MVP
└─ Remplace Trello + Notion partiels
```

**Scénario B – Adopter Notion**
```
Notion = Hub documentaire
├─ Bases de données centralisées
├─ Synchronisation vers MVP
└─ Documentation + kanban léger
```

**Scénario C – Proposer un outil transverse**
```
MVP Pilotage = Plateforme consolidée
├─ Ingère Jira (via API)
├─ Remplace Trello/Excel en gestion projet
└─ S'intègre à SharePoint pour livrables
```

**Recommandation:** Scénario C (MVP consolidé) offre meilleure interopérabilité

---

## 5. Architecture technique du MVP Pilotage

### 5.1 Composants principaux

```
┌─────────────────────────────────────────────────────────┐
│           PLATEFORME DE PILOTAGE MVP                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐  │
│  │  Gestion     │  │  Planification│  │  Reporting  │  │
│  │  Projets     │  │  Ressources   │  │  Temps réel │  │
│  └──────────────┘  └──────────────┘  └─────────────┘  │
│         │                  │                │          │
│  ┌──────▼────────────────────▼────────────┬▼─────────┐ │
│  │         DATA MODEL (Normalisé)          │         │ │
│  │  • Projets                              │Logging  │ │
│  │  • Ressources                           │Audit    │ │
│  │  • Allocations                          │         │ │
│  │  • Jalons / KPI                         │         │ │
│  └─────────────┬───────────────────────────┴─────────┘ │
│                │                                       │
│         ┌──────▼──────┐                                │
│         │   API REST  │                                │
│         └──────┬──────┘                                │
│                │                                       │
│         ┌──────▼──────┐                                │
│         │  Auth (AD)  │                                │
│         └─────────────┘                                │
└─────────────────────────────────────────────────────────┘
```

### 5.2 Flux de données entrant/sortant

```
SOURCES (Entrantes):
├─ Odoo API ────────┐
├─ HubSpot API ─────┤
├─ SharePoint API ──┼──> MVP Pilotage ──[CSV]──> Power BI
├─ Excel Import ────┤
└─ Manual Input ────┘

CONSOMMATEURS (Sortantes):
├─ Dashboard Web (MVP)
├─ Power BI (données structurées)
├─ SharePoint (métadonnées)
└─ Rapports exportés (PDF, Excel)
```

---

## 6. Plan de mise en œuvre

### Phase 1 – Fondations (Semaines 1-2)

1. **Modèle de données**
   - Schéma UML: Projets, Ressources, Allocations, Jalons
   - Dictionnaire des données
   - Nomenclatures (projet, activité, type d'affectation)

2. **Authentification & Autorisations**
   - Intégration Azure AD (SSO ou simulation)
   - Rôles de base (Viewer, PM, Admin)

3. **Connecteurs Odoo & SharePoint**
   - Documentation API
   - Scripts d'extraction (CSV ou API)
   - Tests de synchronisation

### Phase 2 – MVP Pilotage (Semaines 3-4)

1. **Interface web (prototype)**
   - Vue portefeuille projets
   - Tableau allocation ressources
   - Calendrier jalons
   - Statut santé projets

2. **Intégrations prioritaires**
   - Synchronisation Odoo → MVP (nightly)
   - Export MVP → Power BI (CSV structuré)
   - Liens vers SharePoint

3. **Reporting de base**
   - Dashboard temps vendu/consommé
   - Occupation collaborateurs
   - Marges projets

### Phase 3 – Consolidation (Semaines 5+)

1. **Décision outils fragmentés**
   - Argumenter choix (Jira, Notion, ou MVP)
   - Planifier migration
   - Former utilisateurs

2. **Intégrations optionnelles**
   - HubSpot si besoin contexte commercial
   - Connecteurs Make/Zapier additionnels

3. **Documentation & Formation**
   - Guide utilisateur
   - Processus opérationnels
   - Maintenance des intégrations

---

## 7. Considérations clés

### 7.1 Sécurité & Conformité

- **SSO obligatoire** pour tous outils intégrés
- **MFA** pour accès sensibles (budgets, données RH)
- **Traçabilité audit** des modifications critiques
- **Filtrage HubSpot** (masquer CA et devis)
- **Conformité RGPD** → respect gouvernance donnée

### 7.2 Interopérabilité

```
Règles d'intégration:
✓ Clés primaires cohérentes (ex: ID projet)
✓ Formats de données normalisés (dates ISO, devises)
✓ Gestion des doublons automatisée
✓ Synchronisation par lots (nightly) recommandée
✗ Éviter synchronisation temps réel (complexité)
✗ Pas de dépendance sur un seul outil
```

### 7.3 Gouvernance des données

- **Propriétaire**: Équipe Data & BI (pour Power BI)
- **Propriétaire**: Pôle IT (pour infrastructure MVP)
- **Propriétaire**: PMO (pour nomenclatures projets)
- **Cadence d'export**: Quotidienne (Odoo) / Hebdomadaire (HubSpot)

### 7.4 Scalabilité future

- Architecture REST pour MVP (ajout connecteurs facile)
- Modèle de données extensible (colonnes custom)
- Prévoir cache/indexation si volume important
- Conteneurisation recommandée (Docker)

---

## 8. Matrice des outils par pôle

### Utilisateurs par pôle et outils associés

| Pôle | Odoo | HubSpot | SharePoint | Power BI | MVP |
|------|------|---------|------------|----------|-----|
| Direction générale & PMO | ✓ | ✓ | ✓ | ✓✓ | ✓✓ |
| IT & Infrastructure | ✓ | - | ✓ | ✓ | ✓ |
| Data & BI | ✓ | - | ✓ | ✓✓ | ✓ |
| Développement & Digital | - | ✓ | ✓ | ✓ | ✓ |
| Sécurité & Conformité | - | - | ✓ | ✓ | ✓ |
| RH & Communication | ✓ | ✓ | ✓ | ✓ | ✓ |
| Finance & Achats | ✓ | ✓ | ✓ | ✓✓ | ✓ |
| RSE & Green IT | - | - | ✓ | ✓ | - |

---

## 9. Points de décision critiques

| Question | Réponse recommandée | Impact |
|----------|-------------------|--------|
| MVP = nouvelle plateforme ou optimisation existante ? | Nouvelle (consolidatrice) | Architecture complète |
| Synchronisation Odoo temps réel ou batch ? | Batch (nightly) | Faible complexité, acceptable |
| Décision Jira/Notion/autre pour projet fragmenté ? | À argumenter dans mémoire | Roadmap phase 3 |
| Intégrer HubSpot dès MVP ou ajouter phase 2 ? | Phase 2 (optionnel) | Simplifie MVP initial |
| Format Power BI = CSV structuré ou connecteur live ? | CSV (robustesse) + connecteur bonus | Flexibilité maximale |

---

## 10. Livrables attendus

1. **Document d'architecture** (ce schéma directeur)
2. **Schéma UML** de la data du MVP
3. **Scripts d'intégration** Odoo/SharePoint (prototype)
4. **Interface web** du MVP Pilotage (maquette fonctionnelle)
5. **Modèle Power BI** avec données d'exemple
6. **Guide de migration** pour outils fragmentés
7. **Documentation technique** des API et connecteurs
8. **Plan de déploiement** opérationnel (timeline, rôles, ressources)

---

## Annexe – Références documentaires

- **Cahier des charges:** Cahier des charges - Projet Etude - M2 - CPIT - 2025.docx
- **Cadre pédagogique:** Cadre Pédagogique - Projet Etude - CPIT - 2025.pdf
- **État des lieux SI:** Ce document
- **Ressources externes:**
  - Odoo API docs: https://www.odoo.com/documentation/master/
  - HubSpot API docs: https://developers.hubspot.com/
  - Microsoft Graph: https://docs.microsoft.com/en-us/graph/
  - Azure AD: https://docs.microsoft.com/en-us/azure/active-directory/

---

*Schéma directeur validé pour le projet Tech4Value – M2 CPIT 2025*
