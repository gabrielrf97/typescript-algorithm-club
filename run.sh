#!/bin/bash

# Simple script to run TypeScript files with Bun
# Usage: ./run.sh <path-to-file>

if [ -z "$1" ]; then
    echo "Usage: ./run.sh <path-to-file>"
    echo "Example: ./run.sh Search/binary-search.ts"
    exit 1
fi

bun run "$1"