'use strict';

function upgradeWorkbook(value, schema, addPublicLinks = () => 0) {
  if (!value || value.schemaVersion !== 1 || !value.sheets) throw Error('Invalid workbook');
  const copy = data => JSON.parse(JSON.stringify(data));
  const optionalPrivateSheets = ['apiKeys', 'logins', 'clients'];
  for (const key of Object.keys(schema.sheets)) {
    if (!value.sheets[key] && optionalPrivateSheets.includes(key)) value.sheets[key] = copy(schema.sheets[key]);
    const sheet = value.sheets[key], base = schema.sheets[key];
    if (!sheet || !Array.isArray(sheet.rows) || sheet.rows.length > 10000 ||
        !Array.isArray(sheet.columns) || sheet.columns.length !== base.columns.length ||
        !sheet.rows.every(row => Array.isArray(row) && row.length === base.columns.length &&
          row.every(cell => typeof cell === 'string' && cell.length <= 20000))) {
      throw Error('Invalid workbook');
    }
  }
  for (const key of Object.keys(schema.sheets)) {
    value.sheets[key] = { ...copy(schema.sheets[key]), rows: value.sheets[key].rows };
  }
  addPublicLinks(value);
  return value;
}

if (typeof window !== 'undefined') window.upgradeWorkbook = upgradeWorkbook;
if (typeof module !== 'undefined') module.exports = { upgradeWorkbook };
