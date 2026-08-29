# Codex Skins development rules

- Never commit or push directly to `main` or `master`; use a short-lived `codex/<change>` branch.
- Keep the catalog static and dependency-free. Do not add a server, database, account system, telemetry, background updater, path map, or file list.
- A skin ID is its directory name. Runtime paths and asset names follow the fixed Codex Skin Switcher contract.
- `theme.json` owns label and description. `meta.json` only owns market version and author.
- After changing a skin, run `npm run build` and `npm test`, then confirm `git diff --check`.
- Artwork-only changes do not need a new test, but the full regression commands still run.
