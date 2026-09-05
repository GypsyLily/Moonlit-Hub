const products = [
  {
    name: "Moonlit Ledger",
    status: "Invite-only Multi-User Beta",
    statusClass: "active",
    purpose: "Trading account, risk, journal, session, and trading-operations software, formerly developed under the name Guardrail. The current public state is a live invite-only multi-user beta.",
    features: ["Prop-account management", "Risk / guardrail tools", "Rules", "Journal + live notes", "Sessions + reviews", "Account overview", "Multi-user tenancy", "Supported telemetry where available"],
    availability: "Invite-only multi-user beta",
    version: null,
    downloadUrl: null
  },
  {
    name: "Moonlit Indicators",
    status: "Active Development / Reorganization",
    statusClass: "active",
    purpose: "A market-structure and level-based indicator family being reorganized around distinct components with explicit jobs, while keeping stable product-facing work separate from broader experimentation.",
    features: ["Currents", "Trace", "Ebb", "Levels", "VWAP Map", "Constellation interface concept", "Geometry planned"],
    availability: "In active development",
    version: null,
    downloadUrl: null
  },
  {
    name: "Moonlit Replay",
    status: "Paused / Preserved",
    statusClass: "paused",
    purpose: "An independent research and training product for historical replay, Blind Read, synthetic chart / market generation, and deliberate-practice workflows. Its preserved baseline remains intact while expansion is deferred.",
    features: ["Historical replay", "Blind Read", "Synthetic markets", "Deliberate practice", "Preserved baseline"],
    availability: "Preserved; development paused",
    version: null,
    downloadUrl: null
  },
  {
    name: "Moonlit Atlas",
    status: "Internal / Specification Reconciliation",
    statusClass: "internal",
    purpose: "The internal project-memory and lineage system for the Moonlit ecosystem, tracking how products, decisions, branches, and changes relate over time. Implementation waits on reconciliation of the current vocabulary and architecture.",
    features: ["Project memory", "History + rationale", "Branch lineage", "What led here?", "Internal documentation"],
    availability: "Internal; implementation not started",
    version: null,
    downloadUrl: null
  }
];

function productCard(product) {
  const versionText = product.version || "No public version published";
  const downloadText = product.downloadUrl ? "Approved build available" : "No public build available yet";
  return `
    <article class="product-card">
      <div class="card-top">
        <h3>${product.name}</h3>
        <span class="status-pill ${product.statusClass}">${product.status}</span>
      </div>
      <p class="purpose">${product.purpose}</p>
      <div class="feature-list" aria-label="${product.name} scope">
        ${product.features.map(feature => `<span>${feature}</span>`).join("")}
      </div>
      <div class="product-meta">
        <div class="meta-row"><span>Availability</span><strong>${product.availability}</strong></div>
        <div class="meta-row"><span>Latest approved</span><strong>${versionText}</strong></div>
        <div class="meta-row"><span>Download</span><strong>${downloadText}</strong></div>
      </div>
    </article>`;
}

function downloadRow(product) {
  const versionText = product.version || "—";
  const availabilityText = product.downloadUrl ? "Approved public build" : "No public build available yet";
  const action = product.downloadUrl
    ? `<a class="button primary" href="${product.downloadUrl}" rel="noopener">Download</a>`
    : `<span class="button disabled" aria-disabled="true">Not available</span>`;

  return `
    <article class="download-row">
      <div><h3>${product.name}</h3><p>${availabilityText}</p></div>
      <div><div class="download-label">Version</div><div class="download-value">${versionText}</div></div>
      <div><div class="download-label">Distribution</div><div class="download-value">GitHub Releases</div></div>
      ${action}
    </article>`;
}

document.getElementById("product-grid").innerHTML = products.map(productCard).join("");
document.getElementById("download-list").innerHTML = products
  .filter(product => product.name !== "Moonlit Atlas")
  .map(downloadRow)
  .join("");