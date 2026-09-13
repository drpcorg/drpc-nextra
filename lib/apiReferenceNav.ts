import navData from "./api-reference-nav.generated.json";

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

const networks = navData as NetworkNavItem[];

export function getAllNetworks() {
  return networks.map((n) => ({ slug: n.slug, title: n.title }));
}

export function getNetworkBySlug(slug: string): NetworkNavItem | null {
  return networks.find((n) => n.slug === slug) ?? null;
}