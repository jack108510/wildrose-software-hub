'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { upgradeWorkbook } = require('../workbook-upgrade.js');
const { addMissingRoseResourceLinks, ROSE_RESOURCE_LINKS } = require('../rose-resources.js');

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(require.resolve('../schema.js'), 'utf8'), context);
const schema = JSON.parse(JSON.stringify(context.window.WILDROSE_SCHEMA));

test('adds a blank private Clients sheet to an existing encrypted workbook', () => {
  const old = JSON.parse(JSON.stringify(schema));
  delete old.sheets.clients;
  const privateLogin = ['Client service', 'https://example.com', 'person@example.com', 'existing password', '', '', '', 'private note'];
  old.sheets.logins.rows.push(privateLogin);
  const upgraded = upgradeWorkbook(old, schema, addMissingRoseResourceLinks);
  assert.deepEqual(upgraded.sheets.clients.rows, []);
  assert.deepEqual(upgraded.sheets.logins.rows[0], privateLogin);
  assert.equal(upgraded.sheets.links.rows.length, ROSE_RESOURCE_LINKS.length);
});

test('rejects malformed existing rows before changing private data', () => {
  const malformed = JSON.parse(JSON.stringify(schema));
  malformed.sheets.logins.rows.push(['too short']);
  assert.throws(() => upgradeWorkbook(malformed, schema, addMissingRoseResourceLinks), /Invalid workbook/);
  assert.equal(malformed.sheets.links.rows.length, 0);
});
