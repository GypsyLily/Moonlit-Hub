# Moonlit Hub

Curated public presentation, project status, platform-access, and approved-download site for Moonlit. The site is static HTML/CSS/JavaScript: no backend, build step, account system, or external runtime dependencies. edit

Private application source, internal Atlas documents, recovery archives, secrets, account data, and unapproved binaries do not belong here. Hub is not an automatic mirror of another repository.

## Editing from GitHub

Open a file, choose Edit, make the change, and commit it to `main` after review.

| File | What to edit |
| --- | --- |
| `script.js` | Product names, development status, access, indicator components, approved platform publications, and public-download approval fields. |
| `index.html` | Home/current-focus text, Current Direction, append-only public changelog, roadmap, platform-link no-JavaScript fallback, and approved screenshots. |
| `styles.css` | Original site styling. |
| `catalog.css` | Component-card layout, access/download presentation, and responsive refinements. |

When a product changes, check the card, home focus, Current Direction, roadmap, and download text together. Preserve historical changelog entries; add a dated correction instead of silently modernizing old terminology. A catalog-entry date is not necessarily a product launch date.

Development, access, validation, actual use, and public distribution are different claims. Do not infer validation from compilation or source preservation, or infer an exact live source from a title. Unknown stays unknown. Internal products such as Atlas have `publicDownloads: false` and no platform publications, so release and distribution fields are omitted.

## Existing public platform publications

Currents has two owner-confirmed public baselines on TradingView, published under their original **Gypsy VWAP Map v0.30** names: the 1M NonPremium version and the Premium-required 1-second version. The 1m/1s distinction describes calculation streams; the published descriptions specify that the 1s version requires seconds-data access while the 1m version does not. The listing URLs are the supporting sources and remain the access destinations.

These are existing public publications, not newly released Currents research. Their version belongs to each entry in the Indicators product's `publications` array; do not use it as the version for the entire family or replace it with a newer research version. Public availability remains valid while newer research source-to-chart reconciliation continues.

Each publication stores `name`, the original `publishedTitle`, `version`, `platform`, `requirements`, `url`, and explicit `approved: true`. The renderer accepts only approved HTTPS TradingView script listings without credentials, query strings, or fragments. Use **Open on TradingView**, not an installer/download label. Maintain the two plain links in the `index.html` no-JavaScript fallback alongside the data entries.

Linking a public listing does not authorize copying Pine source, publishing private repositories, or approving a standalone package. Platform approval is separate from `downloadApproved`.

## Approved package downloads only

Leave the product's package `version` and `downloadUrl` as `null` and `downloadApproved` as `false` until the owner explicitly approves a particular end-user artifact for public distribution. An existing TradingView publication, private beta, or locally working prototype is not automatically an approved package download.

After approval:

1. Review the artifact for private source/history, credentials, account data, and distribution permissions. Upload only the intended end-user package to a public GitHub Release in this repository, not the repository file list.
2. Copy the asset's exact HTTPS URL into `downloadUrl`, enter the actual approved `version`, and set `downloadApproved: true` for that product.
3. Verify the link downloads the intended asset. The renderer requires all three fields and accepts only release-asset URLs under `GypsyLily/Moonlit-Hub`.

Prefer product-specific, versioned release-asset links in this multi-product repository. GitHub's `releases/latest/download/<asset>` route is repository-wide, not product-specific; use it only when every designated latest release carries all intended approved assets under consistent names. Do not add a fake link before an asset exists. Updating a version field and changelog still requires a truthful catalog review even when a stable asset URL is used.

## Preview and publish

Open `index.html` directly, or serve the folder locally with `python -m http.server 8000`. Check narrow and wide layouts, the component descriptions, TradingView links, and unavailable-package states. JavaScript syntax can be checked with `node --check script.js` when Node is available. Verify that platform links still work without JavaScript and that unapproved entries do not acquire download buttons.

GitHub Pages uses **Settings → Pages → Deploy from a branch → main → /(root)**. Keep `.nojekyll` and relative asset paths. No custom domain is required.

Site: https://gypsylily.github.io/Moonlit-Hub/

A Hub content update does not authorize product releases, private-repository changes, deployment changes elsewhere, or public disclosure of working boards or internal evaluation artifacts.
