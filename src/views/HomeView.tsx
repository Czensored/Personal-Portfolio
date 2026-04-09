type HomeViewProps = {
  asciiArt: string;
  intro: string;
  title: string;
};

export function HomeView({ asciiArt, intro, title }: HomeViewProps) {
  return (
    <section className="flex min-h-full flex-col items-center justify-center px-6 py-8 text-center max-[640px]:justify-start max-[640px]:px-3 max-[640px]:py-5 max-[480px]:px-[0.6rem]">
      <pre className="block max-w-full font-bold leading-[0.95] text-terminal-mauve text-[clamp(0.38rem,0.95vw,1rem)] max-[640px]:text-[0.32rem] max-[480px]:text-[0.24rem] max-[360px]:text-[0.19rem]">
        {asciiArt}
      </pre>
      <h1 className="mt-5 text-[clamp(1rem,1.6vw,1.4rem)] font-bold text-terminal-blue">{title}</h1>
      <pre className="mt-4 max-w-[74ch] whitespace-pre-wrap text-terminal-subtext0 wrap-anywhere max-[640px]:w-full max-[640px]:text-left">{intro}</pre>
    </section>
  );
}
