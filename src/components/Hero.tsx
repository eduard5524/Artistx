import { SheetMusicMock } from "./SheetMusicMock";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 sm:px-8 sm:pt-36 lg:px-12 lg:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-rose/5 blur-[100px]" />
        {/* Subtle staff-line texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 39px, #c9a962 39px, #c9a962 40px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <div>
            <p className="animate-fade-up mb-4 font-body text-sm font-medium uppercase tracking-[0.25em] text-gold">
              Synchronized sheet music
            </p>
            <h1 className="animate-fade-up-delay-1 font-display text-5xl leading-[1.1] font-semibold text-parchment sm:text-6xl lg:text-7xl">
              The score moves
              <br />
              <span className="italic text-gold">with the music</span>
            </h1>
            <p className="animate-fade-up-delay-2 mt-6 max-w-lg font-body text-lg leading-relaxed text-parchment-dim">
              Artistx follows the partiture in real time as you listen — every measure highlighted,
              every note in sync. Learn faster, practice smarter, study deeper.
            </p>
            <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
              <a
                href="#early-access"
                className="inline-flex items-center rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-ink transition-all hover:bg-gold-bright hover:shadow-lg hover:shadow-gold/20"
              >
                Get Early Access
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-staff-bright/60 px-7 py-3.5 font-body text-sm font-medium text-parchment transition-all hover:border-gold/40 hover:text-gold"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Try Demo
              </a>
            </div>
          </div>

          {/* Mock UI */}
          <div id="demo" className="animate-fade-up-delay-2">
            <SheetMusicMock />
          </div>
        </div>
      </div>
    </section>
  );
}
