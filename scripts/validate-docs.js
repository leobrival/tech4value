#!/usr/bin/env node

/**
 * Tech4Value Document Validator
 * Validates document conformance using Claude AI
 *
 * @author Leo Brival
 * @version 2.0
 * @license MIT
 */

import { readFileSync, readdirSync, writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { tmpdir } from 'os';

// Resolve current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Relative path to .doc folder
const DOC_FOLDER = join(__dirname, '..', '.doc');
const ACCEPTED_EXTENSIONS = ['.md', '.txt', '.pdf', '.docx'];

// Claude execution timeout in milliseconds
const CLAUDE_TIMEOUT = 60000;

// Conformance criteria for each document
const CONFORMANCE_CRITERIA = {
  'cadre-pedagogique.md': {
    name: 'Pedagogical Framework',
    required: [
      'Project Objectives',
      'Pedagogical Objectives',
      'Team Organization',
      'Deliverables - Project Steps',
      'Project Evaluations',
      'Chronological Steps'
    ]
  },
  'grilles-notation.md': {
    name: 'Evaluation Grid',
    required: [
      'Video & MVP Grid',
      'Technical Folder Grid',
      'Evaluation Criteria',
      'Project Management',
      'Detailed Planning',
      'Technical Solution',
      'Dynamic Project Analysis'
    ]
  },
  'etat-des-lieux-si.md': {
    name: 'IT Systems Status',
    required: [
      'Company Presentation',
      'Global Staff Distribution',
      'Staff Distribution by Project',
      'Project Governance',
      'Tools Cartography',
      'Summary'
    ]
  }
};

/**
 * Verifies that Claude CLI is installed
 * Exits with error if not found
 * @throws {Error} If Claude CLI is not installed
 */
function verifyClaude() {
  try {
    execSync('which claude', { stdio: 'ignore', timeout: 5000 });
  } catch {
    console.error('\nError: Claude CLI is not installed\n');
    console.error('Install with: npm install -g @anthropic-ai/claude-cli\n');
    process.exit(1);
  }
}

/**
 * Builds validation prompt for Claude
 * @param {string} filename - Document filename
 * @param {string} content - Document content
 * @param {Object} criteria - Conformance criteria
 * @param {string} criteria.name - Document name
 * @param {Array<string>} criteria.required - Required sections
 * @returns {string} Formatted prompt for Claude
 */
function buildValidationPrompt(filename, content, criteria) {
  return `Validate this document by checking required sections.

DOCUMENT: ${filename}
NAME: ${criteria.name}

REQUIRED SECTIONS:
${criteria.required.map((s, i) => `${i + 1}. ${s}`).join('\n')}

CONTENT (first 3000 characters):
---
${content.substring(0, 3000)}...
---

VALIDATION:
1. All required sections are present
2. Content is structured and clear
3. Identify gaps or inconsistencies
4. Status: COMPLIANT | PARTIALLY COMPLIANT | NON-COMPLIANT

Reply concisely.`;
}

/**
 * Executes Claude with robust error handling
 * Uses temporary file to avoid shell escaping issues
 * @param {string} prompt - Validation prompt
 * @returns {string} Claude's response
 * @throws {Error} If execution fails
 */
function executeClaude(prompt) {
  const tempFile = join(tmpdir(), `prompt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}.txt`);

  try {
    // Write prompt to temporary file
    writeFileSync(tempFile, prompt, 'utf-8');

    // Execute Claude via stdin
    const command = `claude < "${tempFile}"`;

    const response = execSync(command, {
      encoding: 'utf-8',
      maxBuffer: 50 * 1024 * 1024, // 50MB buffer
      timeout: CLAUDE_TIMEOUT,
      stdio: ['pipe', 'pipe', 'pipe']
    });

    return response;
  } catch (error) {
    // Enhanced error messages
    if (error.code === 'ETIMEDOUT') {
      throw new Error(`Timeout: Claude took longer than ${CLAUDE_TIMEOUT}ms`);
    } else if (error.killed) {
      throw new Error(`Claude was interrupted (signal: ${error.signal})`);
    } else if (error.status === 127) {
      throw new Error('Claude CLI not found. Install: npm install -g @anthropic-ai/claude-cli');
    }
    throw error;
  } finally {
    // Clean up temporary file
    try {
      unlinkSync(tempFile);
    } catch {
      // Ignore cleanup errors
    }
  }
}

// Get command line flags
const isVerbose = process.argv.includes('--verbose');
const isStrict = process.argv.includes('--strict');

// Verify Claude is installed before proceeding
verifyClaude();

console.log('Document Validation - Tech4Value');
console.log('='.repeat(50));
console.log(`Folder: ${DOC_FOLDER}\n`);

const results = [];

// Read all files from .doc folder
const files = readdirSync(DOC_FOLDER).filter(file => {
  const extension = file.substring(file.lastIndexOf('.'));
  return ACCEPTED_EXTENSIONS.includes(extension);
});

if (isVerbose) {
  console.log(`Found ${files.length} file(s):\n`);
  files.forEach(f => console.log(`  * ${f}`));
  console.log('\n');
}

for (const file of files) {
  const filePath = join(DOC_FOLDER, file);
  const fileExtension = file.substring(file.lastIndexOf('.'));

  try {
    let content = '';

    // Read file content
    if (fileExtension === '.md' || fileExtension === '.txt') {
      content = readFileSync(filePath, 'utf-8');
    } else if (fileExtension === '.pdf' || fileExtension === '.docx') {
      content = `[Binary file: ${file}]\nManual verification required.`;
    }

    // Check if file has conformance criteria
    const criteria = CONFORMANCE_CRITERIA[file];

    if (criteria) {
      // Build validation prompt
      const validationPrompt = buildValidationPrompt(file, content, criteria);

      if (isVerbose) {
        console.log(`\nValidating ${file}...`);
      }

      try {
        // Execute Claude with robust handling
        if (isVerbose) {
          console.log(`Claude call (timeout: ${CLAUDE_TIMEOUT}ms)...\n`);
        }

        const response = executeClaude(validationPrompt);

        results.push({
          file,
          status: 'verified',
          feedback: response
        });

      } catch (error) {
        if (isVerbose) {
          console.error(`Error: ${error.message}`);
        }
        results.push({
          file,
          status: 'error',
          error: error.message
        });
      }
    } else {
      // File has no defined criteria
      results.push({
        file,
        status: 'unchecked',
        reason: 'No criteria defined'
      });
    }
  } catch (error) {
    console.error(`Error reading ${file}: ${error.message}`);
    results.push({
      file,
      status: 'error',
      error: error.message
    });
  }
}

// Display results
console.log('\n' + '='.repeat(50));
console.log('VALIDATION RESULTS');
console.log('='.repeat(50) + '\n');

let verifiedCount = 0;
let errorCount = 0;
let uncheckedCount = 0;

results.forEach(result => {
  if (result.status === 'verified') {
    console.log(`OK ${result.file}`);
    verifiedCount++;
    if (isVerbose) {
      console.log(`\n${result.feedback}\n`);
    }
  } else if (result.status === 'error') {
    console.log(`ERROR ${result.file}`);
    errorCount++;
  } else if (result.status === 'unchecked') {
    console.log(`SKIP ${result.file}`);
    uncheckedCount++;
  }
});

console.log('\n' + '='.repeat(50));
console.log(`Results: ${verifiedCount} verified, ${errorCount} errors, ${uncheckedCount} skipped`);
console.log('='.repeat(50));

// Exit with error code if strict mode
if (errorCount > 0 && isStrict) {
  process.exit(1);
}
