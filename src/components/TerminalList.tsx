type TerminalListProps<T> = {
  activeTone?: "blue" | "mauve" | "peach";
  getKey: (item: T, index: number) => string;
  getLabel: (item: T) => string;
  items: T[];
  onSelect: (index: number) => void;
  selectedIndex: number;
};

export function TerminalList<T,>({
  activeTone = "blue",
  getKey,
  getLabel,
  items,
  onSelect,
  selectedIndex,
}: TerminalListProps<T>) {
  const baseButtonClassName =
    "group w-full cursor-pointer border-0 bg-transparent px-0 py-[0.12rem] text-left outline-none transition-colors duration-150 focus-visible:outline focus-visible:outline-1 focus-visible:outline-terminal-blue focus-visible:outline-offset-[-1px] max-[640px]:min-h-11 max-[640px]:border-b max-[640px]:border-terminal-surface1/60 max-[640px]:px-1 max-[640px]:py-2";

  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        const isActive = index === selectedIndex;
        const buttonClassName = isActive
          ? `${baseButtonClassName}`
          : `${baseButtonClassName} max-[640px]:hover:bg-terminal-surface0/35`;
        let textClassName =
          "whitespace-pre-wrap text-terminal-overlay1 group-hover:text-terminal-subtext0 max-[640px]:leading-6";

        if (isActive && activeTone === "peach") {
          textClassName = "whitespace-pre-wrap font-bold text-terminal-peach max-[640px]:leading-6";
        } else if (isActive && activeTone === "mauve") {
          textClassName = "whitespace-pre-wrap font-bold text-terminal-mauve max-[640px]:leading-6";
        } else if (isActive) {
          textClassName = "whitespace-pre-wrap font-bold text-terminal-blue max-[640px]:leading-6";
        }

        return (
          <button
            key={getKey(item, index)}
            type="button"
            className={buttonClassName}
            onClick={() => onSelect(index)}
            aria-pressed={isActive}
          >
            <span className={`${textClassName} max-[640px]:hidden`}>
              {isActive ? "  ▸ " : "    "}
              {getLabel(item)}
            </span>
            <span className={`hidden ${textClassName} max-[640px]:grid max-[640px]:grid-cols-[1rem_minmax(0,1fr)] max-[640px]:items-start max-[640px]:gap-2 max-[640px]:whitespace-normal`}>
              <span className="pt-[0.05rem] text-center opacity-80" aria-hidden="true">
                {isActive ? "▸" : "•"}
              </span>
              <span className="min-w-0">{getLabel(item)}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
