'use strict';
window.WILDROSE_SEED={schemaVersion:1,updatedAt:'2026-11-03T19:00:00.000Z',sheets:{
software:{title:'Software inventory',description:'A home for every product, workspace, and internal tool.',icon:'▦',columns:[['Software',190],['Category',150],['Purpose',330],['Status',145],['Owner',110],['Latest version',160],['Last reviewed',135]],rows:[
['Rose','AI assistant','Website chat, voice, and lead capture','Needs verification','Unassigned','Not recorded','2026-11-03'],
['Rose Workground','Workspace','Configure, preview, and publish Rose assistants','Development','Unassigned','Commit 448e7f6 + local edits','2026-11-03'],
['Rose Partner Portal','Agency tools','Agency branding, invitations, and client management','Pilot','Unassigned','Deployed build to verify','2026-11-03'],
['Reachr','Facebook posting','The tool we use for Facebook posting','Needs verification','Unassigned','Local manifest 2.2.132','2026-11-03'],
['Prospecting & outreach','Internal operations','Discovery, Messenger, WhatsApp, email, and replies','Needs verification','Unassigned','Not recorded','2026-11-03'],
['Outreach Command Center','Internal dashboard','Outreach overview, conversations, and blockers','Needs verification','Unassigned','Not recorded','2026-11-03'],
['Rose Page Publisher','Internal tool','Preview and deliberately publish Facebook Page posts','Needs verification','Unassigned','Not recorded','2026-11-03']
]},
links:{title:'Links & resources',description:'The right destination, without the tab hunt.',icon:'↗',columns:[['Resource',210],['Software',170],['URL',390],['Environment',130],['Status',150],['Notes',310]],rows:[
['Wildrose website','Wildrose','https://wildroseautomations.ca/','Public','Recorded','Address from site configuration; availability not checked'],
['Partner pilot','Rose Partner Portal','https://partners-pilot.wildroseautomations.ca/','Pilot','Recorded','Partner entry and console'],
['Client Workground','Rose Workground','https://workground-pilot.wildroseautomations.ca/','Pilot','Recorded','Pilot environment'],
['Source repository','Rose Workground','https://github.com/jack108510/rose-workground','Source','Recorded','Private repository; requires access'],
['Partner handoff','Rose Partner Portal','https://github.com/jack108510/rose-workground/blob/cloud/rose-google/ROSE_PARTNER_PILOT_HANDOFF.md','Documentation','Recorded','Dated October 25, 2026'],
['Master document','Wildrose','https://chatgpt.com/space/page_0b38590e46c481918e40433b5c76da58','Documentation','Recorded','Private document; requires access']
]},
versions:{title:'Versions & releases',description:'Track what’s on your machine and what’s actually deployed.',icon:'◷',columns:[['Software',200],['Local version / commit',235],['Environment',135],['Deployed version',190],['Status',160],['Recorded',120],['Notes',360]],rows:[
['Reachr extension','2.2.132','Local source','Not verified','Needs verification','2026-11-03','Manifest version; installed extension may differ'],
['Reachr dashboard','0bf0926 + local edits','Local source','Not verified','Needs verification','2026-11-03','Commit October 2; local edits are outside commit'],
['Rose Workground','448e7f6 + local edits','Local source','Not verified','Needs verification','2026-11-03','Commit October 30; package has no version field'],
['Rose production','Not recorded','Production','Not verified','Needs verification','2026-11-03','Record separately from the partner pilot'],
['Rose partner pilot','Not recorded','Pilot','Not verified','Needs verification','2026-11-03','A repository push is not a deployment']
]},
issues:{title:'Issues & bugs',description:'Give every loose end an owner, a next step, and a resolution.',icon:'◇',columns:[['Issue ID',115],['Software',180],['Issue / task',350],['Priority',95],['Status',160],['Owner',120],['Updated',120],['Next step / evidence',380]],rows:[
['ROSE-001','Rose Partner Portal','Verify full agency onboarding and offboarding','P1','Needs verification','Unassigned','2026-11-03','October 25 handoff follow-up; current state needs checking'],
['ROSE-002','Rose Partner Portal','Verify branded client invitation delivery','P1','Needs verification','Unassigned','2026-11-03','Record result against current pilot version'],
['ROSE-003','Rose Partner Portal','Complete branding review across pilot surfaces','P2','Needs verification','Unassigned','2026-11-03','Test widget displayed Pilot Rose in October 25 handoff'],
['ROSE-007','Rose','Verify spoken question recognition and audible response','P2','Needs verification','Unassigned','2026-11-03','Voice connected in prior test; full spoken flow not verified'],
['PUB-001','Rose Page Publisher','Record deliberate live publish and read-back','P2','Needs verification','Unassigned','2026-11-03','Existing documented tests use a mock API'],
['OPS-001','All systems','Record installed and deployed build IDs','P1','Open','Unassigned','2026-11-03','Compare running versions with local source records']
]},
updates:{title:'Updates & decisions',description:'A running history of what changed and why.',icon:'≡',columns:[['Date',125],['Software',185],['Type',130],['Update',400],['Issue / release',150],['Owner',120]],rows:[
['2026-11-03','Reachr','Decision','Reachr is the Facebook posting tool. Discovery and direct outreach are separate systems.','','Jack'],
['2026-11-03','All systems','Documentation','Created the master software register with versions, links, and dated issue tracking.','',''],
['2026-11-03','Software workbook','Release','Created the spreadsheet-style workbook. Edits save locally in each browser.','v1.0.0','']
]},
operations:{title:'Operations',description:'Who owns it, where to find the runbook, and what to check next.',icon:'⚙',columns:[['Software',200],['Owner',130],['Backup owner',130],['Runbook URL',350],['Last health check',155],['Backup / restore check',190],['Next review',135],['Notes',330]],rows:[
['Rose','Unassigned','Unassigned','','Not recorded','Not recorded','','Record production service owner and runbook'],
['Rose Partner Portal','Unassigned','Unassigned','https://github.com/jack108510/rose-workground/blob/cloud/rose-google/ROSE_PARTNER_PILOT_HANDOFF.md','Not recorded','Not recorded','','Keep pilot and production records separate'],
['Reachr','Unassigned','Unassigned','','Not recorded','Not recorded','','Verify installed extension and posting session'],
['Prospecting & outreach','Unassigned','Unassigned','','Not recorded','Not recorded','','Review workers and delivery evidence by channel'],
['Outreach Command Center','Unassigned','Unassigned','','Not recorded','Not recorded','','Record owner and runbook in your private copy'],
['Rose Page Publisher','Unassigned','Unassigned','','Not recorded','Not recorded','','Record live publish validation']
]}
}};
