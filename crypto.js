'use strict';
// Standard Web Crypto primitives. No password or unencrypted records are embedded here.
window.WorkbookCrypto=(()=>{
const iterations=600000,encoder=new TextEncoder(),decoder=new TextDecoder();
const b64=b=>{let s='';for(const v of new Uint8Array(b))s+=String.fromCharCode(v);return btoa(s);};
const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
function valid(e){return e&&e.format==='wildrose-encrypted-workbook'&&e.version===1&&e.cipher==='AES-256-GCM'&&e.kdf==='PBKDF2-SHA256'&&e.iterations===iterations&&typeof e.salt==='string'&&typeof e.iv==='string'&&typeof e.data==='string'&&e.data.length<=30000000&&bytes(e.salt).length===16&&bytes(e.iv).length===12;}
async function derive(password,salt){const base=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveKey']);return crypto.subtle.deriveKey({name:'PBKDF2',hash:'SHA-256',salt:bytes(salt),iterations},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);}
async function decrypt(envelope,key){if(!valid(envelope))throw Error('Invalid encrypted workbook');const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(envelope.iv),additionalData:encoder.encode('wildrose-workbook-v2')},key,bytes(envelope.data));return JSON.parse(decoder.decode(plain));}
async function encrypt(book,key,salt){const iv=crypto.getRandomValues(new Uint8Array(12));const data=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:encoder.encode('wildrose-workbook-v2')},key,encoder.encode(JSON.stringify(book)));return {format:'wildrose-encrypted-workbook',version:1,cipher:'AES-256-GCM',kdf:'PBKDF2-SHA256',iterations,salt,iv:b64(iv),data:b64(data)};}
return {derive,decrypt,encrypt,valid};
})();
