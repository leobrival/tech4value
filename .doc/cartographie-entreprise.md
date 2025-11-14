# Cartographie de l'entreprise Tech4Value

> Représentation visuelle de l'organisation matricielle de Tech4Value avec ses 185 collaborateurs, 9 pôles métiers, 5 projets stratégiques et son écosystème SI.

## Vue d'ensemble

Ce schéma présente :
- **Gouvernance** : Structure de décision (Comex, Copil, Chefs de projet)
- **Pôles métiers et support** : 9 départements avec effectifs et missions
- **Projets stratégiques** : 5 projets mobilisant 78 ETP (42% des effectifs)
- **Briques SI** : Écosystème d'outils (ERP, CRM, BI, collaboration)
- **Sites géographiques** : Siège + 2 antennes régionales

---

## Schéma Mermaid

```mermaid
graph TB
    subgraph "TECH4VALUE - 185 Collaborateurs"
        direction TB

        subgraph "GOUVERNANCE"
            COMEX[Comité Exécutif<br/>Direction générale, DSI, DRH,<br/>Directeur financier, PMO]
            COPIL[Comité de Pilotage<br/>Reporting mensuel consolidé]
            CDP[Chefs de projet<br/>Trinôme d'alternants]

            COMEX --> COPIL
            COPIL --> CDP
        end

        subgraph "PÔLES MÉTIERS & SUPPORT - Organisation Matricielle"
            DG[Direction générale et PMO<br/>10 collaborateurs<br/>Gouvernance, priorisation stratégique]

            IT[Pôle IT & Infrastructure<br/>32 collaborateurs<br/>Supervision SI, réseau, ERP, cloud]

            DATA[Pôle Data & BI<br/>18 collaborateurs<br/>Gouvernance données, Data Lake]

            DEV[Pôle Développement & Digital Factory<br/>38 collaborateurs<br/>Applications web, mobile, API]

            SEC[Pôle Sécurité & Conformité<br/>15 collaborateurs<br/>RGPD, cybersécurité, audits]

            RH[Pôle RH & Communication interne<br/>20 collaborateurs<br/>Gestion RH, formations, carrière]

            FIN[Pôle Finance & Achats<br/>16 collaborateurs<br/>Budget, contrôle de gestion]

            RSE[Pôle RSE & Green IT<br/>6 collaborateurs<br/>Indicateurs environnementaux]

            SUP[Fonctions support<br/>10 collaborateurs<br/>Administratif, juridique, gestion site]
        end

        subgraph "PROJETS STRATÉGIQUES - 78 ETP (42%)"
            P1[Projet 1: RGPD<br/>13 ETP<br/>Sécurité & Conformité 8<br/>Data & BI 3, PMO 2]

            P2[Projet 2: ERP Finance<br/>19 ETP<br/>IT & Infra 10<br/>Finance & Achats 6, PMO 3]

            P3[Projet 3: Data Lake<br/>18 ETP<br/>Data & BI 10<br/>IT 6, PMO 2]

            P4[Projet 4: Green IT<br/>11 ETP<br/>IT & Infra 4, RSE & Green IT 4<br/>Sécurité & Conformité 3]

            P5[Projet 5: Portail RH<br/>17 ETP<br/>RH & Communication 10<br/>IT 5, PMO 2]
        end

        subgraph "BRIQUES SI"
            direction LR

            subgraph "ERP & CRM"
                ODOO[ERP Odoo v15 Cloud<br/>RH, Compta, Projets, Achats]
                HUBSPOT[CRM HubSpot<br/>Cycles commerciaux]
            end

            subgraph "COLLABORATION"
                M365[Microsoft 365<br/>SharePoint Online<br/>Teams]
            end

            subgraph "BI & SÉCURITÉ"
                PBI[Power BI<br/>Reporting stratégique]
                AAD[Azure Active Directory<br/>SSO, MFA, Rôles]
            end

            subgraph "OUTILS FRAGMENTÉS"
                TOOLS[Trello, Jira, Notion, Excel<br/>À structurer ou remplacer]
            end
        end

        subgraph "SITES"
            SIEGE[Siège social]
            RENNES[Antenne Rennes]
            LYON[Antenne Lyon]
        end
    end

    %% Relations Gouvernance
    DG --> COMEX

    %% Relations Pôles vers Projets
    SEC -.-> P1
    DATA -.-> P1
    DG -.-> P1

    IT -.-> P2
    FIN -.-> P2
    DG -.-> P2

    DATA -.-> P3
    IT -.-> P3
    DG -.-> P3

    IT -.-> P4
    RSE -.-> P4
    SEC -.-> P4

    RH -.-> P5
    IT -.-> P5
    DG -.-> P5

    %% Relations SI
    ODOO -.API/CSV.-> PBI
    HUBSPOT -.API.-> PBI
    M365 -.Liens.-> PBI
    AAD -.SSO.-> ODOO
    AAD -.SSO.-> M365

    %% Style
    classDef governance fill:#e1f5ff,stroke:#01579b,stroke-width:3px
    classDef poles fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef projects fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef si fill:#e8f5e9,stroke:#1b5e20,stroke-width:2px
    classDef sites fill:#fce4ec,stroke:#880e4f,stroke-width:2px

    class COMEX,COPIL,CDP governance
    class DG,IT,DATA,DEV,SEC,RH,FIN,RSE,SUP poles
    class P1,P2,P3,P4,P5 projects
    class ODOO,HUBSPOT,M365,PBI,AAD,TOOLS si
    class SIEGE,RENNES,LYON sites
```

---

## Légende des couleurs

- **Bleu clair** : Gouvernance (Comex, Copil, Chefs de projet)
- **Violet** : Pôles métiers et fonctions support
- **Orange** : Projets stratégiques en cours
- **Vert** : Briques SI et outils techniques
- **Rose** : Implantations géographiques

## Relations

- **Flèches pleines** (→) : Hiérarchie et reporting
- **Flèches pointillées** (-.→) : Contributions et intégrations

---

## Détail des effectifs par pôle

| Pôle | Effectif | Missions principales |
|------|----------|---------------------|
| Direction générale et PMO | 10 | Gouvernance, priorisation stratégique, reporting exécutif |
| Pôle IT & Infrastructure | 32 | Supervision SI, réseau, ERP, cloud, sécurité opérationnelle |
| Pôle Data & BI | 18 | Gouvernance de la donnée, développement Data Lake, reporting groupe |
| Pôle Développement & Digital Factory | 38 | Développement d'applications internes et clients (web, mobile, API) |
| Pôle Sécurité & Conformité | 15 | RGPD, cybersécurité, gestion des audits et conformité SI |
| Pôle RH & Communication interne | 20 | Gestion RH, formations, carrière, communication corporate |
| Pôle Finance & Achats | 16 | Gestion budgétaire, contrôle de gestion, contractualisation fournisseurs |
| Pôle RSE & Green IT | 6 | Suivi des indicateurs environnementaux, gouvernance durable du cloud |
| Fonctions support | 10 | Support administratif, juridique, gestion de site |
| **Total** | **185** | **collaborateurs** |

## Répartition des projets stratégiques

| Projet | Pôles impliqués | ETP dédiés | Détails |
|--------|----------------|------------|---------|
| Projet 1 - RGPD | Sécurité & Conformité (8), Data & BI (3), PMO (2) | 13 | Équipe pluridisciplinaire orientée conformité |
| Projet 2 - ERP Finance | IT & Infra (10), Finance & Achats (6), PMO (3) | 19 | Projet critique piloté par la direction financière |
| Projet 3 - Data Lake & BI | Data & BI (10), IT (6), PMO (2) | 18 | Projet transverse de gouvernance des données |
| Projet 4 - Green IT | IT & Infra (4), RSE & Green IT (4), Sécurité (3) | 11 | Équipe technique et environnementale |
| Projet 5 - Portail RH | RH & Communication (10), IT (5), PMO (2) | 17 | Pilotage RH et interconnexion SIRH |
| **Total** | - | **78 ETP** | **42% des effectifs** |

## Écosystème SI

### Outils principaux
- **ERP Odoo v15 Cloud** : RH, Comptabilité, Projets, Achats
- **CRM HubSpot** : Gestion des cycles commerciaux et opportunités
- **Microsoft 365 + SharePoint** : Collaboration et gestion documentaire
- **Power BI** : Reporting stratégique et tableaux de bord
- **Azure Active Directory** : Authentification SSO, MFA, gestion des rôles

### Outils fragmentés à structurer
- Trello (Kanban projet)
- Jira (Suivi Agile)
- Notion (Documentation)
- Excel (Gantt, budgets)

---

## Source

Document source : `cdc-annexe-2025.pdf` - État des lieux des briques SI Tech4Value

Projet d'étude M2 CPIT 2025
