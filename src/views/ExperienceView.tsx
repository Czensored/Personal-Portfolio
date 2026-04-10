import type { Experience } from "../config";
import { SplitLayout } from "../components/SplitLayout";
import { TerminalList } from "../components/TerminalList";
import { TERMINAL_RULE } from "../lib/terminal";

type ExperienceViewProps = {
  experiences: Experience[];
  onSelect: (index: number) => void;
  selectedIndex: number;
};

export function ExperienceView({
  experiences,
  onSelect,
  selectedIndex,
}: ExperienceViewProps) {
  const currentExperience = experiences[selectedIndex];
  const meta = currentExperience
    ? [currentExperience.location, currentExperience.period]
        .filter(Boolean)
        .join(" · ")
    : "";

  return (
    <SplitLayout
      left={
        <TerminalList
          activeTone="peach"
          items={experiences}
          selectedIndex={selectedIndex}
          onSelect={onSelect}
          getKey={(experience) => `${experience.company}-${experience.period}`}
          getLabel={(experience) => experience.company}
        />
      }
      right={
        currentExperience ? (
          <div>
            <h2 className="m-0 text-base font-bold text-terminal-peach">
              {currentExperience.role
                ? `${currentExperience.role} @ ${currentExperience.companyDisplay}`
                : currentExperience.companyDisplay}
            </h2>
            <div className="my-0 mr-0 mb-3 mt-[0.15rem] text-terminal-surface1">
              {TERMINAL_RULE}
            </div>

            {meta ? (
              <p className="mb-3 mt-0 whitespace-pre-wrap text-terminal-subtext0 [overflow-wrap:anywhere] [padding-left:2ch] max-[640px]:[padding-left:0]">
                {meta}
              </p>
            ) : null}

            <ul className="m-0 flex list-none flex-col gap-[0.85rem] p-0">
              {currentExperience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="grid items-start text-terminal-text grid-cols-[2ch_minmax(0,1fr)] max-[480px]:grid-cols-[1.5ch_minmax(0,1fr)]"
                >
                  <span className="block" aria-hidden="true">
                    •
                  </span>
                  <span className="leading-[1.35]">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="whitespace-pre-wrap text-terminal-overlay0">
            No experience entries found.
          </div>
        )
      }
    />
  );
}
