# Wildrose encrypted software workbook

Spreadsheet-style software register and browser-local credential vault for GitHub Pages. Version 1.2.0. No dependencies, analytics, or third-party scripts.

## Features

Nine sheets: software, links, versions, issues, updates, operations, API keys, logins, and clients. The Clients sheet holds business and contact details, project status, source links, private notes, and references to entries in the credential sheets. Search, status filters, sorting, keyboard navigation, multi-cell paste, undo/redo, encrypted JSON backups, and CSV export for nonprivate sheets are supported.

## Encryption and storage

The starter workbook and browser saves use AES-256-GCM with a fresh random 96-bit IV for every encryption. The password derives a nonextractable encryption key using PBKDF2-SHA256 with 600,000 iterations and a random 128-bit salt. Encryption authenticates a fixed application context. The password is not in source or browser storage. Web Crypto requires HTTPS or localhost.

The workbook requires its password after each reload and locks after five minutes without interaction. Secret fields are masked by default; the selected field can be revealed for 15 seconds or copied. Clients, API keys, and logins cannot be exported as plaintext CSV. JSON backups are encrypted using the same vault key, and can be imported on another device using this workbook and its password. There is no password reset or recovery service.

Edits save only in localStorage on the current browser and origin. They do not sync to GitHub or other devices. Download encrypted backups regularly. Existing v1 browser data is migrated after successful unlock and removed only after the encrypted copy is saved successfully. Older plaintext v1 backup files can be imported; keep or delete those old files deliberately because they remain plaintext.

The public Rose resource list in `rose-resources.js` is added to the Links sheet when a workbook is unlocked. Existing rows with the same URL are preserved, and the list adds no credentials. Browser-only edits to other sheets remain untouched.

Existing encrypted workbooks get an empty Clients sheet after unlock. Client records, private notes, and credentials are never seeded into public source files. Use a consistent client name in Clients and in the API keys or Logins sheets; the Clients sheet's credential-reference column can point to those entries without repeating secret values.

## Security boundaries

This is client-side encryption, not server-side authentication, a shared database, or a replacement for a managed organizational password manager. The public repository contains the application, schemas, and encrypted starter. Anyone can download that ciphertext and attempt offline password guessing. A person who can change the served JavaScript or access an unlocked browser/device could access decrypted values. GitHub account access and device security remain essential. The password was supplied privately by the owner and is not committed.

The previous public v1 starter contained general software information; that older material remains in repository history. No actual API keys or account passwords were collected or published as part of this change. New credential sheets start empty.

## Publishing and development

GitHub Pages deploys the repository root from main. Run `python3 -m http.server 8824` locally. The password-encrypted starter is `seed.encrypted.json`; schemas in `schema.js` contain column definitions only. Do not commit decrypted backups, credentials, or passwords. Do not replace encryption with a client-side password comparison.

## Credential import bundles

Encrypted imports may contain `kind: wildrose-credentials-import` and only the API key and login sheets. Import appends records after confirmation while preserving other sheets and existing matching records. Repeated imports skip matching entries. Only use trusted bundles. Real credential bundles must remain outside this public repository.
