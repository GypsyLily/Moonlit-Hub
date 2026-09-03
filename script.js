const products = [
  {
    name: "Moonlit Ledger",
    status: "Active Development",
    statusClass: "active",
    purpose: "Trading account, risk, journal, session, and trading-operations software, formerly developed under the name Guardrail.",
    features: ["Prop-account management", "Risk / guardrail tools", "Rules", "Journal + live notes", "Sessions + reviews", "Account overview", "Supported multi-account telemetry"],
    availability: "In development",
    version: null,
    downloadUrl: null
  },
  {
    name: "Moonlit Indicators",
    status: "Active Development / Reorganization",
    statusClass: "active",
    purpose: "A product family for market-structure and level-based trading tools, with stable product-facing research kept distinct from broader experimentation.",
    features: ["VWAP Map 1s", "VWAP Map 1m", "Automated Levels", "Manual Levels", "Product-facing research"],
    availability: "In development",
    version: null,
    downloadUrl: null
  },
  {
    name: "Moonlit Replay",
    status: "Paused / Backburnered",
    statusClass: "paused",
    purpose: "An independent research and training product for historical replay, Blind Read, synthetic chart / market generation, and deliberate-practice workflows.",
    features: ["Historical replay", "Blind Read", "Synthetic markets", "Deliberate practice"],
    availability: "Development paused",
    version: null,
    downloadUrl: null
  },
  {
    name: "Moonlit Atlas",
    status: "Internal Documentation",
    statusClass: "internal",
    purpose: "The internal organizational and documentation map for a deliberately federated Moonlit ecosystem. Atlas is not a downloadable trading application.",
    features: ["Internal organization", "Federated product map", "Private documentation"],
    availability: "Not publicly distributed",
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