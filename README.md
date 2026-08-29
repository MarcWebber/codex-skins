# Codex Skins

Static skin catalog for [Codex Skin Switcher](https://github.com/MarcWebber/codex-skin-switcher).

Each directory under `skins/` is one skin. `manifest.json` is generated from those directory names and contains no duplicated paths or file lists.

```text
skins/<id>/
├── meta.json
├── theme.json
├── extra.css
├── art.png
├── preview.png
└── optional fixed-name artwork
```

`theme.json` owns the skin label, description, order, and CSS variables. `meta.json` only adds the market version and author.

## Add or update a skin

1. Add or edit one directory under `skins/`.
2. Run `npm run build`.
3. Run `npm test`.
4. Commit the skin and generated `manifest.json` together.

The catalog is intentionally static. It has no server, database, accounts, analytics, or background updater.

## Artwork notice

The repository may contain demonstration artwork based on third-party characters. Source code licensing does not grant redistribution rights to third-party character designs or artwork. Replace demonstration artwork with assets you own or are licensed to distribute before broader publication.
