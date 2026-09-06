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
    purpose: "A family of market-relationship tools with distinct jobs. Current work identifies the exact implementations in use, evaluates research changes, and keeps experimental, validated, and publicly approved builds separate.",
    componentGroups: [
      {
        title: "Current indicator workstreams",
        items: [
          { name: "Currents", status: "Active development / source reconciliation", purpose: "Describes relationships around VWAP through an on-chart reference field." },
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
    note: "Earlier VWAP Map work remains part of the family’s history. Exact source-to-chart reconciliation is still underway: an unconfirmed source match does not mean an indicator is unused. Constellation, Geometry, and Echoes are future or parked directions, not released components.",
    access: "Development and research use; public distribution not approved",
    publicDownloads: true,
    unavailableText: "No approved public indicator download yet.",
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
        ${publicDownload}
      </dl>
    </article>`;
}

function downloadRow(product) {
  const download = approvedDownload(product);
  return `
    <article class="download-row">
      <div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.access)}</p></div>
      <div><div class="download-label">Public build</div><div class="download-value">${download ? escapeHtml(product.version) : escapeHtml(product.unavailableText)}</div></div>
      ${download
        ? `<a class="button primary" href="${escapeHtml(download)}">Download ${escapeHtml(product.name)}</a>`
        : `<span class="download-unavailable">No public download</span>`}
    </article>`;
}

const productGrid = document.getElementById("product-grid");
const downloadList = document.getElementById("download-list");
if (productGrid) productGrid.innerHTML = products.map(productCard).join("");
if (downloadList) downloadList.innerHTML = products.filter(product => product.publicDownloads).map(downloadRow).join("");
