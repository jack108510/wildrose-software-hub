const {test}=require('node:test');
const assert=require('node:assert/strict');
const {webcrypto}=require('node:crypto');
const {readFileSync}=require('node:fs');
const vm=require('node:vm');
const sandbox={window:{},crypto:webcrypto,TextEncoder,TextDecoder,Uint8Array,btoa,atob};
vm.runInNewContext(readFileSync(require('node:path').join(__dirname,'../crypto.js'),'utf8'),sandbox);
const vault=sandbox.window.WorkbookCrypto;
const salt=Buffer.alloc(16,9).toString('base64');
test('round trip, random IVs, and no plaintext credential in encrypted payload',async()=>{
 const key=await vault.derive('Synthetic unit test password',salt);
 assert.equal(key.extractable,false);
 const data={credential:'FAKE-UNIT-TEST-SECRET',rows:[['service','account']]};
 const first=await vault.encrypt(data,key,salt),second=await vault.encrypt(data,key,salt);
 assert.notEqual(first.iv,second.iv);assert.notEqual(first.data,second.data);
 assert.equal(JSON.stringify(first).includes(data.credential),false);
 assert.equal(JSON.stringify(await vault.decrypt(first,key)),JSON.stringify(data));
});
test('wrong passwords and ciphertext tampering fail authentication',async()=>{
 const key=await vault.derive('Synthetic correct password',salt),wrong=await vault.derive('Synthetic wrong password',salt);
 const envelope=await vault.encrypt({secret:'FAKE'},key,salt);
 await assert.rejects(()=>vault.decrypt(envelope,wrong));
 const bytes=Buffer.from(envelope.data,'base64');bytes[0]^=1;
 await assert.rejects(()=>vault.decrypt({...envelope,data:bytes.toString('base64')},key));
 await assert.rejects(()=>vault.decrypt({...envelope,iterations:1},key));
});
