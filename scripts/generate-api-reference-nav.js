const fs = require("fs");
const path = require("path");

const API_REF_DIR = path.join(__dirname, "..", "pages", "api-reference");
const OUT_PATH = path.join(__dirname, "..", "lib", "api-reference-nav.generated.json");

function readMeta(dir) {
  const metaPath = path.join(dir, "_meta.json");
  if (!fs.existsSync(metaPath)) return {};
  return JSON.parse(fs.readFileSync(metaPath, "utf-8"));
}

function titleFor(meta, key, fallback) {
  const entry = meta[key];
  if (typeof entry === "string") return entry;
  if (entry && typeof entry === "object" && entry.title) return entry.title;
  return fallback;
}

/** Drops a trailing " API" from a network's display title (e.g. "Ethereum API" -> "Ethereum").
 * Used only for the network dropdown/selector — leaves _meta.json itself untouched, so
 * Nextra's own page titles/breadcrumbs still show the full "X API" form. */
function stripApiSuffix(title) {
  return title.replace(/\s+API$/i, "");
}

function isMdxFile(name) {
  return name.endsWith(".mdx") || name.endsWith(".md");
}

function buildMethods(sectionDir, sectionRoute) {
  const meta = readMeta(sectionDir);
  return fs
    .readdirSync(sectionDir, { withFileTypes: true })
    .filter((e) => e.isFile() && isMdxFile(e.name) && e.name !== "index.mdx")
    .map((e) => {
      const name = e.name.replace(/\.mdx?$/, "");
      return { name, title: titleFor(meta, name, name), route: `${sectionRoute}/${name}` };
    });
}

function buildSections(networkDir, networkRoute) {
  return fs
    .readdirSync(networkDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => {
      const sectionRoute = `${networkRoute}/${e.name}`;
      const sectionDir = path.join(networkDir, e.name);
      const parentMeta = readMeta(networkDir);
      return {
        name: e.name,
        title: titleFor(parentMeta, e.name, e.name),
        route: sectionRoute,
        methods: buildMethods(sectionDir, sectionRoute),
      };
    });
}

function main() {
  const rootMeta = readMeta(API_REF_DIR);
  const networks = fs
    .readdirSync(API_REF_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => {
      const route = `/api-reference/${e.name}`;
      return {
        slug: e.name,
        title: stripApiSuffix(titleFor(rootMeta, e.name, e.name)),
        route,
        sections: buildSections(path.join(API_REF_DIR, e.name), route),
      };
    });

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(networks, null, 2));
  console.log(`✔ Wrote ${networks.length} network(s) -> ${path.relative(process.cwd(), OUT_PATH)}`);
}

main();