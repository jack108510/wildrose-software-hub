'use strict';
window.CredentialImport=(()=>{
const keys=['apiKeys','logins'];
function validate(payload,schema){if(payload?.kind!=='wildrose-credentials-import')throw Error('Invalid credential import.');for(const k of keys){const rows=payload.sheets?.[k]?.rows;if(!Array.isArray(rows)||rows.length>1000||!rows.every(r=>Array.isArray(r)&&r.length===schema.sheets[k].columns.length&&r.every(c=>typeof c==='string'&&c.length<=20000)))throw Error('Invalid credential import.');}return keys.map(k=>payload.sheets[k].rows.length);}
function apply(book,payload,schema){validate(payload,schema);let added=0,skipped=0;for(const k of keys){const identity=r=>JSON.stringify(k==='apiKeys'?[r[0],r[1],r[3]]:[r[0],r[1],r[2]]);const known=new Set(book.sheets[k].rows.map(identity));for(const row of payload.sheets[k].rows){const id=identity(row);if(known.has(id)){skipped++;continue;}book.sheets[k].rows.push([...row]);known.add(id);added++;}}return {added,skipped};}
return {validate,apply};
})();
