'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { ROSE_RESOURCE_LINKS, addMissingRoseResourceLinks } = require('../rose-resources.js');

test('adds public Rose links once and preserves existing workbook data', () => {
  const existing = ['Existing customer link', 'Rose', 'https://workground.wildroseautomations.ca/workground/', 'Production', 'Reviewed', 'Keep this note'];
  const workbook = { sheets: {
    links: { rows: [existing] },
    apiKeys: { rows: [['Service', 'Private key', 'secret-value']] },
    logins: { rows: [['Service', 'https://example.com', 'private-user']] },
  } };
  assert.equal(addMissingRoseResourceLinks(workbook), ROSE_RESOURCE_LINKS.length - 1);
  assert.deepEqual(workbook.sheets.links.rows[0], existing);
  assert.equal(addMissingRoseResourceLinks(workbook), 0);
  assert.equal(workbook.sheets.links.rows.length, ROSE_RESOURCE_LINKS.length);
  assert.deepEqual(workbook.sheets.apiKeys.rows, [['Service', 'Private key', 'secret-value']]);
  assert.deepEqual(workbook.sheets.logins.rows, [['Service', 'https://example.com', 'private-user']]);
});
