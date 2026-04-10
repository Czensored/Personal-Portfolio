import type { EducationEntry } from "../config";
import { SplitLayout } from "../components/SplitLayout";
import { TerminalList } from "../components/TerminalList";
import { TERMINAL_RULE } from "../lib/terminal";

type EducationViewProps = {
  education: EducationEntry[];
  onSelect: (index: number) => void;
  selectedIndex: number;
};

export function EducationView({
  education,
  onSelect,
  selectedIndex,
}: EducationViewProps) {
  const currentEntry = education[selectedIndex];
  const meta = currentEntry
    ? [currentEntry.location, currentEntry.period].filter(Boolean).join(" · ")
    : "";

  return (
    <SplitLayout
      left={
        <TerminalList
          activeTone="mauve"
          items={education}
          selectedIndex={selectedIndex}
          onSelect={onSelect}
          getKey={(entry) => `${entry.school}-${entry.period}`}
          getLabel={(entry) => entry.school}
        />
      }
      right={
        currentEntry ? (
          <div>
            <h2 className="m-0 text-base font-bold text-terminal-mauve">
              {currentEntry.school}
            </h2>
            <div className="my-0 mr-0 mb-3 mt-[0.15rem] text-terminal-surface1">
              {TERMINAL_RULE}
            </div>

            {meta ? (
              <p className="mb-3 mt-0 whitespace-pre-wrap pl-[2ch] text-terminal-subtext0 [overflow-wrap:anywhere] max-[640px]:pl-0">
                {meta}
              </p>
            ) : null}

            <ul className="m-0 flex list-none flex-col gap-[0.85rem] p-0">
              {currentEntry.degrees.map((degree) => (
                <li
                  key={degree}
                  className="grid grid-cols-[2ch_minmax(0,1fr)] items-start text-terminal-text max-[480px]:grid-cols-[1.5ch_minmax(0,1fr)]"
                >
                  <span aria-hidden="true">•</span>
                  <span className="leading-[1.35]">{degree}</span>
                </li>
              ))}
            </ul>

            {currentEntry.honors.length > 0 ? (
              <>
                <p className="mb-3 mt-5 pl-[2ch] text-terminal-subtext0 max-[640px]:pl-0">Honors &amp; Awards</p>
                <ul className="m-0 flex list-none flex-col gap-[0.85rem] p-0">
                  {currentEntry.honors.map((honor) => (
                    <li
                      key={honor}
                      className="grid grid-cols-[2ch_minmax(0,1fr)] items-start text-terminal-text max-[480px]:grid-cols-[1.5ch_minmax(0,1fr)]"
                    >
                      <span aria-hidden="true">•</span>
                      <span className="leading-[1.35]">{honor}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        ) : (
          <div className="whitespace-pre-wrap text-terminal-overlay0">
            No education entries found.
          </div>
        )
      }
    />
  );
}
