import Link from "next/link";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import type { Item, PageItem, MenuItem } from "nextra/normalize-pages";

interface CustomNavbarProps {
  flatDirectories: Item[];
  items: (PageItem | MenuItem)[];
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
export function CustomNavbar({ flatDirectories, items }: CustomNavbarProps) {
  const config = useConfig();
  const { pathname } = useRouter();

  const leftTabs = items.filter(
    (item: any) => item.name === "guides" || item.name === "api-reference" || item.name === "data-wallet-api"
  );
  const accountItem = items.find((item: any) => item.name === "drpc-account") as any;

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

        {leftTabs.map((item: any) => (
          <Link
            key={item.route ?? item.name}
            href={item.route ?? "#"}
            className={
              "custom-navbar__link" +
              (pathname.startsWith(item.route ?? "\0") ? " custom-navbar__link--active" : "")
            }
          >
            {item.title ?? item.name}
          </Link>
        ))}
      </div>

      <div className="custom-navbar__right">
        {accountItem ? (
          <a
            href={accountItem.href ?? accountItem.route}
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
      </div>
    </div>
  );
}
