# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

Tech4Value is a document validation system for an IT Project Management Master's study project (M2 CPIT 2025). It uses Claude AI to automatically validate the conformance of pedagogical and technical documentation against predefined criteria.

## Project Structure

```
tech4value/
├── .doc/                          - Documentation files to validate
│   ├── README.md                  - Documentation index
│   ├── cadre-pedagogique.md       - Pedagogical framework (French)
│   ├── grilles-notation.md        - Evaluation grids (French)
│   ├── etat-des-lieux-si.md       - IT systems status (French)
│   ├── Cadre Pédagogique - Projet Etude - CPIT - 2025.pdf
│   ├── Cahier des charges - Projet Etude - M2 - CPIT - 2025.docx
│   └── [other PDF/DOCX source files]
├── scripts/                       - Validator implementation
│   ├── validate-docs.js           - Main validator (Node.js, v2.0)
│   ├── check-docs.sh              - Bash wrapper for validation
│   ├── package.json               - NPM configuration
│   └── README.md                  - Scripts documentation
├── project.json                   - Project metadata (NotebookLM, GitHub links)
└── README.md                      - Project overview
```

## Language Conventions

### Code, Comments, and Logs (English Only)

All code implementation must be in English:
- Variable names and function names in English
- Code comments and inline documentation in English
- Console logs and error messages in English
- Type definitions and JSDoc documentation in English

**Example:**
```javascript
// Resolve current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Relative path to .doc folder
const DOC_FOLDER = join(__dirname, '..', '.doc');
```

### User-Facing Output (French)

Responses to users and user-facing communications must be in French.

## Core Technology Stack

- **Runtime:** Node.js >= 18.0.0 (ES modules)
- **Claude Integration:** Claude CLI (global installation required)
- **Build/Task Management:** npm scripts (no build tool)

## Document Validator Architecture

### Validation Flow

The validator (`scripts/validate-docs.js`) follows this process:

1. **Initialization**
   - Verify Claude CLI is installed (`verifyClaude()`)
   - Resolve relative path to `.doc/` folder using ES module globals
   - Parse command-line flags (`--verbose`, `--strict`)

2. **Document Discovery**
   - Scan `.doc/` folder for markdown, text, PDF, and DOCX files
   - Filter by extension: `.md`, `.txt`, `.pdf`, `.docx`

3. **Conformance Validation**
   - Load document content (text files directly, binary files report as "manual verification required")
   - Match against `CONFORMANCE_CRITERIA` object:
     - `cadre-pedagogique.md` - 6 required sections
     - `grilles-notation.md` - 7 required sections
     - `etat-des-lieux-si.md` - 6 required sections
   - Build validation prompt with `buildValidationPrompt()`
   - Execute Claude via stdin using temporary file (avoids shell escaping issues)

4. **Error Handling & Execution**
   - `executeClaude()` function:
     - Writes prompt to temporary file in system tmp directory
     - Executes `claude < tempfile` via child_process
     - 50MB buffer (supports long responses)
     - 60-second timeout (configurable via `CLAUDE_TIMEOUT`)
     - Automatic cleanup of temporary files
   - Enhanced error messages for: timeout, signal interruption, missing Claude CLI

5. **Result Aggregation**
   - Collect results with status: `verified`, `error`, `unchecked`
   - Display summary with counts: verified/errors/skipped
   - Exit code logic: `--strict` mode exits with code 1 on errors

### Key Design Decisions

- **Relative Paths:** Uses `fileURLToPath(import.meta.url)` and `dirname()` to resolve paths relative to script location, ensuring portability across machines and CI/CD environments.

- **Temporary Files:** Prompt text written to temporary file and passed via stdin (`claude < file`) to avoid shell escaping issues with special characters, backticks, dollar signs.

- **Timeout Management:** 60-second default timeout with enhanced error messages for timeout scenarios. Configurable via `CLAUDE_TIMEOUT` constant.

- **Buffer Configuration:** 50MB maxBuffer to handle potentially long Claude responses. Increase if responses are truncated.

- **Lazy Verification:** Claude CLI checked at startup (`verifyClaude()`) to fail fast with clear instructions.

## NPM Scripts

### Common Commands

```bash
# Install dependencies (required before running)
npm install

# Validate all documents (standard output)
npm run validate

# Validate with detailed output (shows Claude responses in verbose mode)
npm run validate:verbose

# Validate in strict mode (exits with code 1 on errors, for CI/CD)
npm run check-conformance

# Direct node execution (no npm alias)
node scripts/validate-docs.js [--verbose|--strict]

# Bash wrapper (auto-installs dependencies if needed)
./scripts/check-docs.sh [--verbose|--strict]
```

### What Each Command Does

- `validate` - Scans `.doc/` folder, validates conformance, returns summary (OK/ERROR/SKIP per file)
- `validate:verbose` - Same as above but prints full Claude response for each validated file
- `check-conformance` - Same as `validate` but exits with error code if any validation fails

## Adding New Document Validation Rules

To add conformance criteria for new documents:

1. Edit `scripts/validate-docs.js`, locate `CONFORMANCE_CRITERIA` object
2. Add entry with filename as key:

```javascript
'new-document.md': {
  name: 'Document Display Name',
  required: [
    'Section 1',
    'Section 2',
    'Section 3'
  ]
}
```

3. The validator automatically picks up the new criteria on next run
4. Update `scripts/README.md` to document the new validation rule

## Code Style & Standards

- **Module System:** ES modules (`import`/`export`), no CommonJS
- **Variable Naming:** English, descriptive names (e.g., `DOC_FOLDER`, `CLAUDE_TIMEOUT`)
- **JSDoc:** All functions must have JSDoc comments with `@param`, `@returns`, `@throws`
- **Error Messages:** Provide clear, actionable guidance (e.g., installation instructions for missing Claude CLI)
- **No External Dependencies:** Relies only on Node.js built-ins and fs-extra (already in package.json). No frameworks or additional libraries.

## CI/CD Integration

The validator is designed for CI/CD pipelines:

```bash
# In CI configuration, use strict mode
npm run check-conformance

# Exit code 0 = all validations passed
# Exit code 1 = at least one validation failed
```

## Debugging

### Common Issues

**Claude CLI not found:**
- Error: "Error: Claude CLI is not installed"
- Fix: `npm install -g @anthropic-ai/claude-cli`
- Verify: `which claude` should return path

**Timeout errors:**
- Error: "Timeout: Claude took longer than 60000ms"
- Fix: Increase `CLAUDE_TIMEOUT` constant in `validate-docs.js`
- Reason: Long documents or slow network

**Buffer truncation:**
- Symptom: Claude response incomplete
- Fix: Increase `maxBuffer` in `executeClaude()` function
- Current: 50MB, can increase to 100MB+ if needed

**Temporary file permission errors:**
- Rare, usually indicates system temp directory issues
- Check: `ls -la /tmp` has write permissions
- Verify: `echo test > /tmp/test.txt` succeeds

### Verbose Debugging

```bash
# See all files found and full Claude responses
npm run validate:verbose

# Check which claude is being used
which claude
claude --version

# Test Claude directly
echo "Test prompt" | claude
```

## Documentation Files

- `.doc/README.md` - Index of all documentation with getting started guide
- `scripts/README.md` - Validator tool documentation
- `project.json` - Links to external resources (NotebookLM, GitHub, etc.)

## External Resources

- **GitHub:** https://github.com/leobrival/tech4value
- **NotebookLM:** https://notebooklm.google.com/notebook/986cf3dc-a9b1-49f7-a118-6bb3856373ef

## Version History

- **v2.0** (Current)
  - Relative path resolution for portability
  - Temporary file handling for robust prompt execution
  - Enhanced error messages and timeout handling
  - Full JSDoc documentation
  - 50MB buffer support

- **v1.0** (Initial)
  - Hardcoded paths (not portable)
  - Direct command-line prompt execution (escaping issues)
  - Basic error handling
