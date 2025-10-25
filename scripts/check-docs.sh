#!/bin/bash

# Tech4Value Document Validator Wrapper
# Validates document conformance using Claude AI

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
DOC_DIR="$PROJECT_DIR/.doc"

echo "Document Validation - Tech4Value"
echo "Folder: $DOC_DIR"
echo ""

# Verify .doc folder exists
if [ ! -d "$DOC_DIR" ]; then
  echo "Error: $DOC_DIR does not exist"
  exit 1
fi

cd "$PROJECT_DIR"

# Install dependencies if missing
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
  echo ""
fi

echo "Running validation..."
echo ""

# Execute validator based on arguments
if [ "$1" == "--verbose" ]; then
  node "$SCRIPT_DIR/validate-docs.js" --verbose
elif [ "$1" == "--strict" ]; then
  node "$SCRIPT_DIR/validate-docs.js" --strict
else
  node "$SCRIPT_DIR/validate-docs.js"
fi

echo ""
echo "Complete"
