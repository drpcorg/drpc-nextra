import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  API_REFERENCE_BASE,
  loadNetworks,
  loadSections,
  networkRoute,
  type NetworkNavItem,
  type SectionNavItem,
} from "../lib/apiReferenceNav";

export function ApiReferenceSidebar() {
  const router = useRouter();
  const { asPath, basePath } = router;
  const networkSlug = asPath.split(/[#?]/)[0].replace(/^\/api-reference\/?/, "").split("/").filter(Boolean)[0];

  const [allNetworks, setAllNetworks] = useState<NetworkNavItem[]>([]);
  useEffect(() => {
    let cancelled = false;
    loadNetworks(basePath)
      .then((networks) => {
        if (!cancelled) setAllNetworks(networks);
      })
      .catch(console.error);
    return () => {
      cancelled = true;
    };
  }, [basePath]);

  const currentNetwork = networkSlug ? allNetworks.find((n) => n.slug === networkSlug) ?? null : null;
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [query, setQuery] = useState("");

  const closeSelector = () => {
    setSelectorOpen(false);
    setQuery("");
  };

  const filteredNetworks = allNetworks.filter((n) => n.title.toLowerCase().includes(query.toLowerCase()));

  const networkList = (
    <>
      <input
        autoFocus={Boolean(currentNetwork)}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search networks..."
        className="api-ref-sidebar__search"
      />
      {filteredNetworks.map((n) => (
        <Link
          key={n.slug}
          href={networkRoute(n.slug)}
          className="api-ref-sidebar__panel-item"
          onClick={closeSelector}
        >
          {n.title}
        </Link>
      ))}
      {allNetworks.length > 0 && filteredNetworks.length === 0 ? (
        <div className="api-ref-sidebar__empty">No matches</div>
      ) : null}
    </>
  );

  return (
    <div className="api-ref-sidebar">
      <Link href={API_REFERENCE_BASE} className="api-ref-sidebar__back">← All Documentation</Link>

      {currentNetwork ? (
        <>
          <div className="api-ref-sidebar__selector">
            <button className="api-ref-sidebar__trigger" onClick={() => setSelectorOpen((v) => !v)}>
              <span>{currentNetwork.title}</span>
              <svg
                className={"api-ref-sidebar__trigger-chevron" + (selectorOpen ? " api-ref-sidebar__trigger-chevron--open" : "")}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {selectorOpen ? <div className="api-ref-sidebar__panel">{networkList}</div> : null}
          </div>

          {!selectorOpen ? <MethodAccordion slug={currentNetwork.slug} /> : null}
        </>
      ) : (
        // No network picked yet (the API Reference landing page): list them all
        // right away instead of hiding them behind the dropdown.
        <div className="api-ref-sidebar__networks">
          <div className="api-ref-sidebar__networks-heading">Networks</div>
          {networkList}
        </div>
      )}
    </div>
  );
}

function MethodAccordion({ slug }: { slug: string }) {
  const { asPath, basePath } = useRouter();
  const [sections, setSections] = useState<SectionNavItem[]>([]);
  useEffect(() => {
    let cancelled = false;
    setSections([]);
    loadSections(basePath, slug)
      .then((data) => {
        if (!cancelled) setSections(data);
      })
      .catch(console.error);
    return () => {
      cancelled = true;
    };
  }, [basePath, slug]);

  return (
    <nav className="api-ref-accordion">
      {sections.map((s) => <SectionGroup key={s.name} section={s} currentPath={asPath} />)}
    </nav>
  );
}

function SectionGroup({ section, currentPath }: { section: SectionNavItem; currentPath: string }) {
  const containsCurrent = section.methods.some((m) => currentPath.startsWith(m.route)) || currentPath.startsWith(section.route);
  const [open, setOpen] = useState(containsCurrent);
  const isActive = currentPath === section.route;

  return (
    <div className="api-ref-accordion__group">
      <Link
        href={section.route}
        className={"api-ref-accordion__toggle" + (isActive ? " api-ref-accordion__toggle--active" : "")}
        onClick={() => setOpen(true)}
      >
        <span>{section.title}</span>
        <span
          className="api-ref-accordion__chevron-btn"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen((v) => !v);
          }}
        >
          <svg
            className={"api-ref-accordion__chevron" + (open ? " api-ref-accordion__chevron--open" : "")}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
      {open ? (
        <div className="api-ref-accordion__items">
          {section.methods.map((m) => (
            <Link key={m.name} href={m.route} className={"api-ref-accordion__link" + (currentPath === m.route ? " api-ref-accordion__link--active" : "")}>
              {m.title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}