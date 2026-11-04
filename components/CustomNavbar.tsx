import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import type { Item } from "nextra/normalize-pages";
import rootMeta from "../pages/_meta.json";
import { FOLDER_TABS, sectionOf } from "../lib/sectionPageMap";

interface CustomNavbarProps {
  flatDirectories: Item[];
}

function renderMaybeFn(value: unknown, props: Record<string, unknown> = {}) {
  return typeof value === "function" ? (value as (p: unknown) => unknown)(props) : value;
}

/**
 * Replaces nextra-theme-docs's default Navbar entirely (wired via
 * theme.config.tsx -> navbar.component). The built-in Navbar always renders
 * logo, then every `type: "page"` item, then search/project-icon as ONE
 * contiguous group — there's no supported way to split that group into a
 * "left" and "right" cluster via config or CSS alone (Tailwind's own
 * margin-auto utility on the logo absorbs all free space before any
 * justify-content override gets a chance to act, which is why the earlier
 * CSS-only attempt only partially worked). Rendering our own layout removes
 * that constraint entirely.
 */
export function CustomNavbar({ flatDirectories }: CustomNavbarProps) {
  const config = useConfig();
  const { pathname, asPath } = useRouter();
  const [menuOpen, setMenuOpen] = useMobileMenu(asPath);

  // Tabs come straight from pages/_meta.json rather than `items`: each page gets
  // a page map trimmed to its own section (lib/sectionPageMap.ts), so `items`
  // only ever holds the current tab.
  const meta = rootMeta as Record<string, any>;
  const leftTabs = ["guides", ...FOLDER_TABS]
    .filter((name) => meta[name])
    .map((name) => ({ name, title: meta[name].title, href: meta[name].href ?? `/${name}` }));
  const activeTab = sectionOf(pathname) ?? "guides";
  const accountItem = meta["drpc-account"];

  const searchComponent = (config as any).search?.component;

  return (
    <div className="custom-navbar">
      <div className="custom-navbar__left">
        {config.logoLink ? (
          <a
            href={typeof config.logoLink === "string" ? config.logoLink : "/"}
            className="custom-navbar__logo"
          >
            {renderMaybeFn(config.logo) as any}
          </a>
        ) : (
          <span className="custom-navbar__logo">{renderMaybeFn(config.logo) as any}</span>
        )}

        <nav className="custom-navbar__tabs">
          {leftTabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.href}
              className={"custom-navbar__link" + (tab.name === activeTab ? " custom-navbar__link--active" : "")}
            >
              {tab.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="custom-navbar__right">
        {accountItem ? (
          <a
            href={accountItem.href}
            target={accountItem.newWindow ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="custom-navbar__link"
          >
            {accountItem.title ?? "My Account"}
          </a>
        ) : null}

        {searchComponent
          ? (renderMaybeFn(searchComponent, {
              directories: flatDirectories,
              className: "custom-navbar__search",
            }) as any)
          : null}

        {(config as any).project?.link ? (
          <a
            href={(config as any).project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-navbar__icon"
          >
            {(renderMaybeFn((config as any).project.icon) as any) ?? "GitHub"}
          </a>
        ) : null}

        <button
          type="button"
          className="custom-navbar__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </div>
  );
}

/**
 * Mobile menu state. Nextra keeps its own menu state internal (useMenu isn't
 * exported) and only toggles it from its default Navbar, which we replace — so
 * the burger here flips a `mobile-menu-open` class on <body> instead, and CSS
 * slides in whichever sidebar the page has (Nextra's, or ApiReferenceSidebar).
 */
function useMobileMenu(asPath: string): [boolean, (open: boolean) => void] {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [asPath]);
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
  }, [open]);
  return [open, setOpen];
}
