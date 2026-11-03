# Wildrose software workbook

A buildless spreadsheet-style software register for GitHub Pages. Version 1.0.0.

Open `index.html` through any static server. No dependencies, keys, analytics, or external assets are required.

## Features

Six editable sheets: software, links, versions, issues, updates, operations. Search, status filters, column sorting, keyboard navigation, multi-cell TSV paste, undo/redo, JSON import/export, and filtered CSV exports.

## Data and access

The published starter data in `seed.js` is visible to anyone who can access the site. It intentionally excludes private infrastructure and security findings from the original document. Links to private systems do not grant access. Edits save in localStorage in the current browser, not to GitHub or other devices. Export JSON backups regularly. This is a browser-local workbook, not a shared database or Google Sheets integration.

## Publishing

GitHub Pages deploys the repository root from the main branch. Local development: `python3 -m http.server 8824`.
