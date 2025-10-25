# Tech4Value Document Validator

Document conformance tool using Claude AI.

## Quick Start

```bash
npm install
npm run validate
```

## Documentation

- **[../README.md](../README.md)** - General documentation

## Usage

```bash
# Standard validation
npm run validate

# Detailed output
npm run validate:verbose

# Strict mode (CI/CD)
npm run check-conformance
```

Or with bash:
```bash
./check-docs.sh [--verbose|--strict]
```

## Validation Criteria

- **cadre-pedagogique.md** - Objectives, Organization, Deliverables, Steps
- **grilles-notation.md** - Grids, Criteria, Planning, Technical solution
- **etat-des-lieux-si.md** - Presentation, Staff, Governance, Tools

## Architecture

```
scripts/
├── validate-docs.js      - Main validator (v2.0)
├── check-docs.sh         - Bash wrapper
├── package.json          - NPM configuration
└── README.md             - This file
```

## Improvements v2.0

- Relative path (works everywhere)
- Claude CLI verification
- Robust error handling
- Temporary files (no shell escaping issues)
- 50MB buffer (vs 10MB)
- Configurable timeout
- Detailed error messages
- Full JSDoc documentation

## Quick Test

```bash
# 1. Verify Claude
which claude && claude --help

# 2. Install dependencies
npm install

# 3. Run validation
npm run validate:verbose
```

## Results

```
OK file.md           - All criteria met
ERROR file.md        - Issue detected
SKIP file.md         - No criteria defined
```

---

**Version:** 2.0 | **Status:** Production Ready | **Date:** Oct 2025
