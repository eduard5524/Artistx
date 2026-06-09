const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M8 7v10M16 5v14M4 9v6M20 6v12" strokeLinecap="round" />
      </svg>
    ),
    title: "Real-time score following",
    description:
      "The partiture scrolls and highlights in perfect sync with the audio — every note, every measure, exactly where you are in the piece.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18V5l12-2v13" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "Listen while you read",
    description:
      "Hear the performance and see the notation simultaneously. Connect what you hear to what's written on the page.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 7h8M8 11h6" strokeLinecap="round" />
      </svg>
    ),
    title: "Built for musicians",
    description:
      "Whether you're learning a new piece, polishing your technique, or studying a score — Artistx keeps you oriented in the music.",
  },
];

const useCases = [
  { label: "Learning new repertoire", detail: "Follow along bar by bar as you absorb a piece." },
  { label: "Practice sessions", detail: "Stay on track without losing your place in the score." },
  { label: "Score study", detail: "Analyze harmony, phrasing, and structure while listening." },
];

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Why Artistx
          </p>
          <h2 className="font-display text-4xl font-semibold text-parchment sm:text-5xl">
            Music you can see and feel
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-parchment-dim">
            A new way to experience sheet music — where the score comes alive with the performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-staff/40 bg-ink-light/60 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-ink-muted/80"
            >
              <div className="mb-5 inline-flex rounded-xl bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold/15">
                {feature.icon}
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold text-parchment">
                {feature.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-parchment-dim">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Use cases strip */}
        <div className="mt-20 rounded-2xl border border-staff/30 bg-gradient-to-br from-ink-muted/80 to-ink-light/40 p-8 sm:p-12">
          <h3 className="mb-8 font-display text-2xl font-semibold text-parchment sm:text-3xl">
            For every moment at the piano, the stand, or the desk
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {useCases.map((item) => (
              <div key={item.label} className="border-l-2 border-gold/40 pl-5">
                <p className="font-body text-sm font-medium text-parchment">{item.label}</p>
                <p className="mt-1 font-body text-sm text-parchment-dim">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
