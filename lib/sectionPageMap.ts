import type { PageMapItem } from "nextra";
import rootMeta from "../pages/_meta.json";

// Guides live at the site root, next to the folder-backed tabs (api-reference,
// data-api). Nextra 2 treats root-level pages as part of *every* section — the
// root's docs prefix is "" — so without this they leak into the Data API
// sidebar, prev/next links and the mobile menu. Each page is therefore handed
// a page map trimmed to its own section (via the `__nextra_pageMap` prop that
// Nextra's page component accepts as an override).

type MetaEntry = string | { type?: string; href?: string; title?: string };

/** Tabs backed by a folder: `type: "page"` without an `href`. */
export const FOLDER_TABS: string[] = Object.entries(rootMeta as Record<string, MetaEntry>)
  .filter(([, v]) => typeof v === "object" && v.type === "page" && !v.href)
  .map(([name]) => name);

/** Every root `type: "page"` entry: the navbar tabs plus external links like My Account. */
const NAVBAR_ENTRIES = new Set(
  Object.entries(rootMeta as Record<string, MetaEntry>)
    .filter(([, v]) => typeof v === "object" && v.type === "page")
    .map(([name]) => name)
);

/** The folder tab the route belongs to, or null for the root-level Guides pages. */
export function sectionOf(route: string): string | null {
  const path = route.split(/[#?]/)[0];
  return FOLDER_TABS.find((tab) => path === `/${tab}` || path.startsWith(`/${tab}/`)) ?? null;
}

function pickMeta(item: PageMapItem, keep: (key: string) => boolean): PageMapItem {
  if (item.kind !== "Meta") return item;
  return { ...item, data: Object.fromEntries(Object.entries(item.data).filter(([key]) => keep(key))) };
}

function trim(pageMap: PageMapItem[], section: string | null): PageMapItem[] {
  if (section) {
    return pageMap
      .filter((item) => item.kind === "Meta" || item.name === section)
      .map((item) => pickMeta(item, (key) => key === section));
  }
  return pageMap
    .filter((item) => item.kind === "Meta" || !FOLDER_TABS.includes(item.name))
    .map((item) => pickMeta(item, (key) => !NAVBAR_ENTRIES.has(key)));
}

const cache = new WeakMap<PageMapItem[], Map<string | null, PageMapItem[]>>();

/** Nextra's full page map, trimmed to the section `route` belongs to. */
export function sectionPageMap(route: string): PageMapItem[] | undefined {
  const internal = (globalThis as any)[Symbol.for("__nextra_internal__")];
  const full: PageMapItem[] | undefined = internal?.context?.[route]?.pageOpts?.pageMap;
  if (!full) return undefined;

  let bySection = cache.get(full);
  if (!bySection) cache.set(full, (bySection = new Map()));
  const section = sectionOf(route);
  if (!bySection.has(section)) bySection.set(section, trim(full, section));
  return bySection.get(section);
}
