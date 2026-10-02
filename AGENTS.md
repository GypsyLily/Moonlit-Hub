# Moonlit Hub operating instructions

## Purpose and authority
- Hub is the public presentation, platform-access and approved-download surface.
- Products own implementation, private technical records and releases.
- Follow the current authorized task and higher-priority platform/security rules.
- This file and every committed file must be suitable for public disclosure.

## Route the task
- Use README.md for catalog, publication, package-download and preview guidance.
- script.js owns product status, access, publications and download-approval fields.
- index.html owns public presentation, direction, roadmap, historical changelog
  and the no-JavaScript fallback links.
- styles.css and catalog.css own styling and responsive catalog presentation.
- Read only relevant sources. Private repositories are not required for these rules.

## Public-content boundary
- Include only material intentionally approved for public sharing.
- Do not add private source, internal Atlas records, account data, credentials,
  local filesystem inventories, working boards or recovery artifacts.
- Approval of one artifact does not approve adjacent material or new publications.
- Keep development, access, validation, actual use and public distribution distinct.
- Preserve historical changelog entries; add dated corrections where warranted.
- Unknown stays unknown; a catalog date is not automatically a product launch date.
- Existing approved TradingView publications keep their original source identity
  and version. Do not replace them with newer private research by inference.
- Platform approval and downloadApproved are independent. A platform listing does
  not authorize publishing Pine source or offering a standalone package.
- Maintain approved HTTPS platform links and matching no-JavaScript fallbacks.
- Leave package version/downloadUrl null and downloadApproved false until the owner
  approves the exact artifact. Review the artifact before an authorized upload.
- Approved packages belong in public GitHub Releases, not the source file list.
- Prefer product-specific versioned assets; verify the intended file and destination.

## Working state and publication
- Verify actual root, branch, HEAD and dirty state before edits; preserve existing work.
- Work in a designated development checkout; do not repurpose preservation clones.
- README.md describes Pages publishing from main at the repository root.
- Treat changes reaching that publishing branch as publication-capable actions.
- Instruction approval alone does not authorize merge to the publishing branch,
  a release, Pages changes or disclosure of private material.
- GitHub backup permission covers only the expressly approved public-safe files/refs.
- Review the exact public diff before authorized publication.
- Preserve the established product design during small repairs and instruction work.

## Validation
- The site is static, with no backend, package build or automated test suite defined.
- Instruction-only changes need scope, link and public-disclosure review.
- For JavaScript changes, use node --check script.js when Node is available.
- For site changes, open index.html or preview with python -m http.server 8000;
  check narrow/wide layouts, controls, platform links and unavailable-package states.
- Check that platform links work without JavaScript and unapproved entries gain no
  download buttons. Preserve .nojekyll and relative asset paths.
- Local preview or syntax success does not prove Pages deployment.

## Completion
- Report changed files, actual checks/results and remaining uncertainties.
- State separately whether anything was committed, pushed, published or released.
