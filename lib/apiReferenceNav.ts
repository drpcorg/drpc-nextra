// Data is generated into public/api-reference-nav/ by
// scripts/generate-api-reference-nav.js and fetched at runtime, NOT statically
// imported — a static `import` would bundle it into every page's server-render
// module (ApiReferenceSidebar is rendered from _app.tsx on every api-reference
// page), which next build re-evaluates per page during static generation.
// It is split per network so a page only downloads the network it shows.

export const API_REFERENCE_BASE = "/api-reference";

export interface NetworkNavItem {
  slug: string;
  title: string;
}
export interface MethodNavItem {
  name: string;
  title: string;
  route: string;
}
export interface SectionNavItem {
  name: string;
  title: string;
  route: string;
  methods: MethodNavItem[];
}

type RawSection = { name: string; title: string; methods: (string | [string, string])[] };

export function networkRoute(slug: string): string {
  return `${API_REFERENCE_BASE}/${slug}`;
}

function toSection(slug: string, raw: RawSection): SectionNavItem {
  const route = `${networkRoute(slug)}/${raw.name}`;
  return {
    name: raw.name,
    title: raw.title,
    route,
    methods: raw.methods.map((m) => {
      const [name, title] = typeof m === "string" ? [m, m] : m;
      return { name, title, route: `${route}/${name}` };
    }),
  };
}

const cache = new Map<string, Promise<unknown>>();

function fetchJson<T>(url: string): Promise<T> {
  let request = cache.get(url);
  if (!request) {
    request = fetch(url).then((res) => {
      if (!res.ok) throw new Error(`${url}: ${res.status}`);
      return res.json();
    });
    // Don't keep failures cached, so the next navigation retries.
    request.catch(() => cache.delete(url));
    cache.set(url, request);
  }
  return request as Promise<T>;
}

export function loadNetworks(basePath: string): Promise<NetworkNavItem[]> {
  return fetchJson<NetworkNavItem[]>(`${basePath}/api-reference-nav/networks.json`);
}

export function loadSections(basePath: string, slug: string): Promise<SectionNavItem[]> {
  return fetchJson<RawSection[]>(`${basePath}/api-reference-nav/${slug}.json`).then((raw) =>
    raw.map((s) => toSection(slug, s))
  );
}
