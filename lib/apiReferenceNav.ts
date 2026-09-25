// Data is served as a static asset from public/ and fetched at runtime,
// NOT statically imported — a static `import` would bundle this file into
// every page's server-render module (ApiReferenceSidebar, which reads this,
// is rendered from _app.tsx on every api-reference page), which next build
// re-evaluates per page during static generation.

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
export interface NetworkNavItem {
  slug: string;
  title: string;
  route: string;
  sections: SectionNavItem[];
}

let cached: NetworkNavItem[] | null = null;
let inFlight: Promise<NetworkNavItem[]> | null = null;

export function loadNetworks(basePath: string): Promise<NetworkNavItem[]> {
  if (cached) return Promise.resolve(cached);
  if (inFlight) return inFlight;
  inFlight = fetch(`${basePath}/api-reference-nav.generated.json`)
    .then((res) => res.json())
    .then((data: NetworkNavItem[]) => {
      cached = data;
      return data;
    });
  return inFlight;
}
