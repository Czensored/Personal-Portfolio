import { useEffect, useState } from "react";
import { pages, type PageKey } from "../config";
import { pageLabels } from "../lib/terminal";

type TerminalTabsProps = {
  activePage: PageKey;
  onSelect: (page: PageKey) => void;
};

export function TerminalTabs({ activePage, onSelect }: TerminalTabsProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const desktopTabClassName =
    "flex shrink-0 items-center self-stretch cursor-pointer border-0 px-4 py-2 whitespace-nowrap transition-colors duration-150 outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-terminal-blue focus-visible:outline-offset-[-1px]";
  const mobileTabClassName =
    "flex w-full items-center justify-between gap-3 border-0 px-3 py-3 text-left text-sm transition-colors duration-150 outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-terminal-blue focus-visible:outline-offset-[-1px]";

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activePage]);

  return (
    <header>
      <nav
        className="flex items-stretch overflow-x-auto overflow-y-hidden whitespace-nowrap bg-terminal-surface0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[640px]:hidden"
        aria-label="Portfolio pages"
      >
        {pages.map((page) => {
          const isActive = page === activePage;
          const tabClassName = isActive
            ? `${desktopTabClassName} bg-terminal-blue font-bold text-terminal-crust shadow-[inset_0_-1px_0_var(--color-terminal-crust)]`
            : `${desktopTabClassName} bg-terminal-surface0 text-terminal-text hover:bg-terminal-surface1/70 hover:text-terminal-rosewater`;

          return (
            <button key={page} type="button" className={tabClassName} onClick={() => onSelect(page)} aria-pressed={isActive}>
              {pageLabels[page]}
            </button>
          );
        })}
        <div className="flex-1 bg-terminal-surface0 max-[640px]:hidden" aria-hidden="true" />
      </nav>
      <div className="hidden border-b border-terminal-surface1/80 bg-terminal-surface0 max-[640px]:block">
        <div className="flex items-center justify-between gap-3 px-3 py-2.5 [padding-top:calc(0.65rem+env(safe-area-inset-top))]">
          <div className="min-w-0">
            <div className="text-[0.62rem] uppercase tracking-[0.22em] text-terminal-overlay0">
              Navigation
            </div>
            <div className="truncate font-bold text-terminal-text">{pageLabels[activePage]}</div>
          </div>
          <button
            type="button"
            className="flex min-h-10 min-w-10 items-center justify-center border border-terminal-surface1 bg-terminal-base px-3 text-terminal-text outline-none transition-colors duration-150 hover:bg-terminal-surface1/70 hover:text-terminal-rosewater focus-visible:outline focus-visible:outline-1 focus-visible:outline-terminal-blue focus-visible:outline-offset-[-1px]"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-terminal-nav"
            aria-label="Toggle navigation menu"
          >
            <span className="relative block h-4 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-200 ${isMobileMenuOpen ? "top-[7px] rotate-45" : "top-[2px]"}`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-4 bg-current transition-all duration-150 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-current transition-all duration-200 ${isMobileMenuOpen ? "top-[7px] -rotate-45" : "top-[12px]"}`}
              />
            </span>
          </button>
        </div>
        <div
          className={`grid transition-all duration-200 ease-out ${isMobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <nav
            id="mobile-terminal-nav"
            className={`min-h-0 overflow-hidden border-t border-terminal-surface1 bg-terminal-base divide-y divide-terminal-surface1/80 transition-all duration-200 ease-out ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-2 pointer-events-none"}`}
            aria-label="Mobile portfolio pages"
            aria-hidden={!isMobileMenuOpen}
          >
            {pages.map((page) => {
              const isActive = page === activePage;
              const tabClassName = isActive
                ? `${mobileTabClassName} bg-terminal-blue font-bold text-white`
                : `${mobileTabClassName} text-terminal-text hover:bg-terminal-surface1/70 hover:text-terminal-rosewater`;

              return (
                <button key={page} type="button" className={tabClassName} onClick={() => onSelect(page)} aria-pressed={isActive}>
                  <span>{pageLabels[page]}</span>
                  <span className="text-xs opacity-80" aria-hidden="true">
                    {isActive ? "▸" : "•"}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="h-px bg-terminal-surface1" aria-hidden="true" />
    </header>
  );
}
