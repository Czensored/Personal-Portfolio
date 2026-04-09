type HomeViewProps = {
  asciiArt: string;
  intro: string;
  title: string;
};

export function HomeView({ asciiArt, intro, title }: HomeViewProps) {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-6 py-8 text-center max-[640px]:justify-start max-[640px]:px-3 max-[640px]:py-5 max-[480px]:px-[0.6rem]">
      <pre className="max-w-full overflow-x-auto font-bold text-terminal-mauve text-[clamp(0.38rem,0.95vw,1rem)] max-[640px]:w-full max-[640px]:text-[clamp(0.29rem,1.4vw,0.52rem)]">
        {asciiArt}
      </pre>
      <h1 className="mt-5 text-[clamp(1rem,1.6vw,1.4rem)] font-bold text-terminal-blue">{title}</h1>
      <pre className="mt-4 max-w-[74ch] whitespace-pre-wrap text-terminal-subtext0 wrap-anywhere max-[640px]:w-full max-[640px]:text-left">{intro}</pre>
    </section>
  );
}
