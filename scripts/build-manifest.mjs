import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const skinsRoot = path.join(root, "skins");
const required = ["meta.json", "theme.json", "extra.css", "art.png", "preview.png"];
const idPattern = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/;

const entries = await fs.readdir(skinsRoot, { withFileTypes: true });
const skins = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();

for (const id of skins) {
  if (!idPattern.test(id)) throw new Error(`Invalid skin id: ${id}`);
  await Promise.all(required.map((file) => fs.access(path.join(skinsRoot, id, file))));
  const meta = JSON.parse(await fs.readFile(path.join(skinsRoot, id, "meta.json"), "utf8"));
  if (typeof meta.version !== "string" || typeof meta.author !== "string") {
    throw new Error(`${id}/meta.json requires version and author`);
  }
}

await fs.writeFile(path.join(root, "manifest.json"), `${JSON.stringify(skins, null, 2)}\n`);
console.log(`Generated manifest.json with ${skins.length} skins.`);
