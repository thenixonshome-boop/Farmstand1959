# AGENTS.md — Farmstand 1959 website UI kit

## What this is
A static website UI kit for "Farmstand 1959." No build step, no backend, no
package.json. React 18 + Babel Standalone are loaded from CDN (`unpkg`) at
runtime; JSX files are compiled in-browser by `ds-loader.js`. The design-system
component bundle ships pre-compiled as `_ds_bundle.js` at the repo root.

## How it runs
- Served as static files by nginx (see `docker-compose.base44.yml`).
- Web root = repo root (`/app` inside the container, bind-mounted read-only).
- Entry point: `ui_kits/website/index.html`, served at `/` via an nginx
  `location = /` rewrite. All other paths (styles.css, ds-loader.js,
  _ds_bundle.js, assets/, tokens/, ui_kits/*.jsx) are served straight from
  the repo root.
- The repo directory has 700/root permissions, so nginx runs as `user root`
  (overridden via `nginx.main.conf`) to read the bind-mounted source.

## Editing
- Edits to JSX/CSS/JS files are picked up immediately — nginx reads from disk
  on each request, no rebuild or restart needed. Just reload the preview.
- Screens live in `ui_kits/website/*.jsx` and register on `window.FSKit`.
- Design tokens live in `tokens/*.css`, imported by `styles.css`.

## Secrets
None required. The optional Notion vendor-application integration
(`ui_kits/website/NOTION.md`) is not wired — `vendor-store.js` falls back to
localStorage when `ENDPOINT` is null. Wiring it would need a serverless
function + a `NOTION_TOKEN` secret, but the site works fully without it.

## Verify
```
docker compose -f docker-compose.base44.yml up -d
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/   # 200
```
