'use strict';

// Public destinations only. Credentials and customer-specific links stay in the encrypted workbook.
const ROSE_RESOURCE_LINKS = [
  ['Workground DEMO — Dialed in v1.0.0', 'Rose Workground', 'https://workground-pilot.wildroseautomations.ca/demo/version.json', 'Approved version', 'Approved', 'Approved by Jack on 2026-11-16. Official Workground marketing demo baseline. GitHub snapshot: jack108510/rose-workground, branch workground-demo-dialed-v1.0.0, commit a9ab2aa8821f5fcc15fdbd9d4ae08e5974ab3099. Includes orb colour fix and final simplified copy.'],
  ['Customer Workground', 'Rose Workground', 'https://workground.wildroseautomations.ca/workground/', 'Production', 'Live', 'Customer Builder, preview, workflows, and publishing. Sign-in required. Page loaded on 2026-11-14.'],
  ['Partner pilot entry', 'Rose Partner Portal', 'https://partners-pilot.wildroseautomations.ca/', 'Pilot', 'Live', 'Access-code signup for the isolated partner pilot. Page loaded on 2026-11-14.'],
  ['Partner management console', 'Rose Partner Portal', 'https://partners-pilot.wildroseautomations.ca/partner/', 'Pilot', 'Live', 'Agency branding, invitations, and client management. Sign-in required. Page loaded on 2026-11-14.'],
  ['Partner personal Workground', 'Rose Partner Portal', 'https://partners-pilot.wildroseautomations.ca/my-workground/', 'Pilot', 'Live', 'Partner-owned assistant Workground. Sign-in required. Page loaded on 2026-11-14.'],
  ['Pilot client Workground', 'Rose Workground', 'https://workground-pilot.wildroseautomations.ca/workground/', 'Pilot', 'Live', 'Isolated client Workground for partner delivery. Sign-in required. Page loaded on 2026-11-14.'],
  ['Interactive Workground demo', 'Rose Workground', 'https://workground-pilot.wildroseautomations.ca/demo/', 'Demo', 'Live', 'Workground DEMO — Dialed in v1.0.0, approved by Jack on 2026-11-16. Actual Workground UI and Builder planner; sample drafts, workflows, publishing and visitor chat. External actions simulated; voice disabled. Approved version details are recorded in the separate version resource.'],
  ['Northline Electrical Rose demo', 'Rose', 'https://jack108510.github.io/rose-agent-configurator/electrical-demo/', 'Demo', 'Live', 'Fictional customer site with Rose chat and voice on a synthetic pilot profile. Lead handoff and bookings are blocked. Page loaded on 2026-11-14.'],
  ['Rose partner video · 30 seconds', 'Rose Partner Portal', 'https://jack108510.github.io/rose-dashboard-preview/rose-ads-20261025/out/rose-partner-demo-whatsapp.mp4', 'Demo', 'Live', 'Staged public outreach video; selected as the first partner WhatsApp asset. File loaded on 2026-11-14.'],
  ['Pilot client website fixture', 'Rose Workground', 'https://client-test.emptyslot.ca/', 'Pilot', 'Live', 'Synthetic installed-widget test page, not a customer deployment. Page loaded on 2026-11-14.'],
];

function addMissingRoseResourceLinks(workbook) {
  const rows = workbook.sheets.links.rows;
  const normalize = value => {
    try { return new URL(value).href; } catch { return String(value || '').trim(); }
  };
  const existing = new Set(rows.map(row => normalize(row[2])));
  let added = 0;
  for (const row of ROSE_RESOURCE_LINKS) {
    const url = normalize(row[2]);
    if (existing.has(url)) continue;
    rows.push([...row]);
    existing.add(url);
    added++;
  }
  return added;
}

if (typeof window !== 'undefined') window.addMissingRoseResourceLinks = addMissingRoseResourceLinks;
if (typeof module !== 'undefined') module.exports = { ROSE_RESOURCE_LINKS, addMissingRoseResourceLinks };
