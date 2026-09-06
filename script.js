// Curated public content only. See README.md before changing access or releases.
const products = [
  {
    id: "ledger",
    name: "Moonlit Ledger",
    status: "Invite-only Web Beta / Hardening",
    statusClass: "active",
    purpose: "Trading account, risk, journal, session, and trading-operations software, formerly developed under the name Guardrail. The multi-user web beta remains invite-only.",
    features: ["Prop-account management", "Risk / guardrail tools", "Rules", "Journal + live notes", "Sessions + reviews", "Account overview", "Multi-user workspaces"],
    access: "Invite-only web beta",
    publicDownloads: true,
    unavailableText: "No public downloadable package; beta access is by invitation.",
    version: null,
    downloadUrl: null,
    downloadApproved: false
  },
  {
    id: "prop-reference",
    name: "Prop Firm Stream Reference",
    status: "Working Prototype / Data and Feed Validation",
    statusClass: "experimental",
    purpose: "A standalone, stream-friendly reference for prop-firm account rules, firm-wide policies, and separately maintained promotions. Built for quick lookup, not firm recommendations.",
    features: ["Firm → Accounts or Firm Rules", "Program / size / variant lookup", "Separate promotions", "Source freshness review"],
    access: "Windows prototype; no approved public release listed",
    publicDownloads: true,
    unavailableText: "No approved public release listed.",
    version: null,
    downloadUrl: null,
    downloadApproved: false
  },
  {
    id: "indicators",
    name: "Moonlit Indicators",
    status: "Active Development / Source Reconciliation",
    statusClass: "active",
    purpose: "A family of market-relationship tools with distinct jobs. Currents has public 1-minute and 1-second baselines on TradingView. Newer development identifies the exact research implementations in use and evaluates changes separately from those publications.",
    componentGroups: [
      {
        title: "Current indicator workstreams",
        items: [
          { name: "Currents", status: "Public baselines / active research", purpose: "Describes relationships around VWAP through an on-chart reference field. The public 1m and 1s baselines are published as Gypsy VWAP Map v0.30; newer Currents research remains separate." },
          { name: "Flow", status: "Development candidate / source reconciliation", purpose: "Presents VWAP-relative relationships in a separate pane. No public release or validation claim is made." },
          { name: "Traces", status: "Research / controlled evaluation", purpose: "Research into remembered chart geometry and the lifecycle of established relationships. Previously referred to as Trace; the naming update is not a separate product launch." },
          { name: "Ebb", status: "Experimental", purpose: "Explores a slower, standalone relationship field and descriptions of expansion, contraction, and settling. Current-use status remains unconfirmed." }
        ]
      },
      {
        title: "Supporting components",
        items: [
          { name: "Focus", status: "Working prototype / evaluation", purpose: "A deliberately simple on-chart panel for session intentions and trading-discipline reminders. Its static form is being evaluated before adding more behavior." },
          { name: "Levels", status: "Preserved supporting component", purpose: "Deterministic reference levels with preserved automatic and manual scripts. A current accepted Moonlit-branded build is not yet confirmed." }
        ]
      }
    ],
    note: "The public Currents baselines retain their original Gypsy VWAP Map v0.30 publication names. They are available now, independently of newer research and its source-to-chart reconciliation. Constellation, Geometry, and Echoes remain future or parked directions, not released components.",
    access: "Public Currents 1m / 1s baselines on TradingView; newer research remains separate",
    publications: [
      {
        name: "Currents baseline — 1 minute",
        publishedTitle: "Gypsy VWAP Map v0.30 1M NonPremium TV version",
        version: "v0.30",
        platform: "TradingView",
        requirements: "1-minute calculation stream; no seconds-data access required. Published as the NonPremium version.",
        url: "https://www.tradingview.com/script/8YodMcwh-Gypsy-VWAP-Map-v0-30-1M-NonPremium-TV-version/",
        approved: true
      },
      {
        name: "Currents baseline — 1 second",
        publishedTitle: "Gypsy VWAP Map v0.30 Premium TradingView Req.",
        version: "v0.30",
        platform: "TradingView",
        requirements: "1-second calculation stream; TradingView seconds-data access required. Published as the Premium-required version.",
        url: "https://www.tradingview.com/script/Wl9x7fWz-Gypsy-VWAP-Map-v0-30-Premium-TradingView-Req/",
        approved: true
      }
    ],
    publicDownloads: true,
    unavailableText: "No standalone package; use the public TradingView baselines above.",
    version: null,
    downloadUrl: null,
    downloadApproved: false
  },
  {
    id: "replay",
    name: "Moonlit Replay",
    status: "Paused / Preserved",
    statusClass: "paused",
    purpose: "An independent research and training product for historical replay, Blind Read, synthetic chart / market generation, and deliberate-practice workflows. Its preserved baseline remains intact while expansion is deferred.",
    features: ["Historical replay", "Blind Read", "Synthetic markets", "Deliberate practice", "Preserved baseline"],
    access: "Preserved project; no public distribution",
    publicDownloads: true,
    unavailableText: "No public build available yet; development remains paused.",
    version: null,
    downloadUrl: null,
    downloadApproved: false
  },
  {
    id: "atlas",
    name: "Moonlit Atlas",
    status: "Internal / Specification Reconciliation",
    statusClass: "internal",
    purpose: "The internal project-memory and lineage system for the Moonlit ecosystem, tracking how products, decisions, branches, and changes relate over time. Implementation waits on acceptance of the reconciled vocabulary and architecture.",
    features: ["Project memory", "History + rationale", "Branch lineage", "What led here?"],
    access: "Internal; not publicly distributed. Implementation has not started.",
    publicDownloads: false
  }
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

// Fail closed: a URL alone must not turn a development artifact into a download.
function approvedDownload(product) {
  if (!product.publicDownloads || product.downloadApproved !== true ||
      typeof product.version !== "string" || !product.version.trim() ||
      typeof product.downloadUrl !== "string") return null;
  try {
    const url = new URL(product.downloadUrl);
    const assetPath = /^\/GypsyLily\/Moonlit-Hub\/releases\/(?:download\/[^/]+\/[^/]+|latest\/download\/[^/]+)$/;
    if (url.protocol !== "https:" || url.host !== "github.com" ||
        url.username || url.password || url.search || url.hash ||
        !assetPath.test(url.pathname)) return null;
    return url.href;
  } catch {
    return null;
  }
}

// Platform publications are links to approved listings, not binary-download approval.
function approvedPublication(publication) {
  if (!publication || publication.approved !== true || publication.platform !== "TradingView" ||
      typeof publication.version !== "string" || !publication.version.trim() ||
      typeof publication.url !== "string") return null;
  try {
    const url = new URL(publication.url);
    const scriptPath = /^\/script\/[A-Za-z0-9]{8}(?:-[A-Za-z0-9-]+)?\/$/;
    if (url.protocol !== "https:" || url.host !== "www.tradingview.com" ||
        url.username || url.password || url.search || url.hash ||
        !scriptPath.test(url.pathname)) return null;
    return url.href;
  } catch {
    return null;
  }
}

function publicPublications(product) {
  return Array.isArray(product.publications)
    ? product.publications.filter(publication => approvedPublication(publication)) : [];
}

function componentGroups(groups) {
  return groups.map(group => `
    <div class="component-group">
      <p class="component-group-title">${escapeHtml(group.title)}</p>
      <div class="component-grid">
        ${group.items.map(component => `
          <section class="component-card">
            <h4>${escapeHtml(component.name)}</h4>
            <p class="component-status">${escapeHtml(component.status)}</p>
            <p>${escapeHtml(component.purpose)}</p>
          </section>`).join("")}
      </div>
    </div>`).join("");
}

function productCard(product) {
  const download = approvedDownload(product);
  const publications = publicPublications(product);
  const platformAccess = publications.length ? `
    <div class="meta-row"><dt>Public baselines</dt><dd class="publication-links">${publications.map(publication =>
      `<a class="button secondary" href="${escapeHtml(approvedPublication(publication))}">${escapeHtml(publication.name)} · ${escapeHtml(publication.version)} — TradingView</a>`
    ).join("")}</dd></div>` : "";
  const publicDownload = product.publicDownloads ? `
    <div class="meta-row"><dt>Public download</dt><dd>${download
      ? `<a href="${escapeHtml(download)}">Download ${escapeHtml(product.name)} — ${escapeHtml(product.version)}</a>`
      : escapeHtml(product.unavailableText)}</dd></div>` : "";
  return `
    <article class="product-card${product.componentGroups ? " product-family" : ""}" id="product-${escapeHtml(product.id)}">
      <div class="card-top">
        <h3>${escapeHtml(product.name)}</h3>
        <span class="status-pill ${escapeHtml(product.statusClass)}">${escapeHtml(product.status)}</span>
      </div>
      <p class="purpose">${escapeHtml(product.purpose)}</p>
      ${product.features ? `<div class="feature-list" aria-label="${escapeHtml(product.name)} scope">${product.features.map(feature => `<span>${escapeHtml(feature)}</span>`).join("")}</div>` : ""}
      ${product.componentGroups ? componentGroups(product.componentGroups) : ""}
      ${product.note ? `<p class="product-note">${escapeHtml(product.note)}</p>` : ""}
      <dl class="product-meta">
        <div class="meta-row"><dt>Access</dt><dd>${escapeHtml(product.access)}</dd></div>
        ${platformAccess}
        ${publicDownload}
      </dl>
    </article>`;
}

function publicationRow(publication) {
  const url = approvedPublication(publication);
  if (!url) return "";
  return `
    <article class="download-row">
      <div><h3>${escapeHtml(publication.name)}</h3><p>Published as: ${escapeHtml(publication.publishedTitle)}</p></div>
      <div><div class="download-label">Public baseline · ${escapeHtml(publication.version)}</div><div class="download-value">${escapeHtml(publication.requirements)}</div></div>
      <a class="button primary" href="${escapeHtml(url)}" aria-label="Open ${escapeHtml(publication.name)} on TradingView">Open on TradingView</a>
    </article>`;
}

function downloadRow(product) {
  const download = approvedDownload(product);
  return `
    <article class="download-row">
      <div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.access)}</p></div>
      <div><div class="download-label">Downloadable package</div><div class="download-value">${download ? escapeHtml(product.version) : escapeHtml(product.unavailableText)}</div></div>
      ${download
        ? `<a class="button primary" href="${escapeHtml(download)}">Download ${escapeHtml(product.name)}</a>`
        : `<span class="download-unavailable">No package available</span>`}
    </article>`;
}

const productGrid = document.getElementById("product-grid");
const downloadList = document.getElementById("download-list");
const publicationList = document.getElementById("publication-list");
if (productGrid) productGrid.innerHTML = products.map(productCard).join("");
if (downloadList) downloadList.innerHTML = products.filter(product => product.publicDownloads).map(downloadRow).join("");
if (publicationList) publicationList.innerHTML = products.flatMap(publicPublications).map(publicationRow).join("");
