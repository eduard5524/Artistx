export function SheetMusicMock() {
  const staffLines = [0, 1, 2, 3, 4];

  return (
    <div className="relative mx-auto w-full max-w-2xl animate-float">
      {/* Glow backdrop */}
      <div className="absolute -inset-8 rounded-3xl bg-gold/5 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-staff/60 bg-ink-light shadow-2xl shadow-black/50">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-staff/40 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-accent-rose/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-gold-dim/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-staff-bright/60" />
          </div>
          <span className="ml-2 font-body text-xs tracking-wide text-parchment-dim/70">
            Chopin — Nocturne in E-flat, Op. 9 No. 2
          </span>
        </div>

        {/* Score area */}
        <div className="relative px-6 py-8 sm:px-10 sm:py-10">
          {/* Playhead highlight bar */}
          <div
            className="playhead pointer-events-none absolute top-6 bottom-6 z-10 w-px bg-gold"
            style={{ left: "58%" }}
          >
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-bright" />
            <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gold-bright" />
          </div>

          {/* Highlight zone behind playhead */}
          <div
            className="pointer-events-none absolute top-4 bottom-4 rounded-sm bg-gold/8"
            style={{ left: "52%", width: "14%" }}
          />

          {/* Treble clef + time signature */}
          <div className="mb-6 flex items-end gap-4">
            <svg viewBox="0 0 24 48" className="h-12 w-6 text-parchment-dim" fill="currentColor">
              <path d="M14 2c-2 0-4 1.5-4 4v6c-1.5-.5-3-.5-4.5 0-3 1-5 4-4 7.5 1 3.5 4.5 5.5 8 4.5 2-.5 3.5-2 4-4v18c0 2-1.5 3.5-3.5 3.5S7 39 7 37s1.5-3.5 3.5-3.5c1 0 2 .3 2.5 1V22c-3.5 1-7-.5-8.5-4-1.5-4 1-8 5-9.5 1.5-.5 3-.5 4.5 0V6c0-2.5 2-4.5 4.5-4.5S18 3.5 18 6v2c-1-.5-2.5-.5-4 0z" />
            </svg>
            <div className="flex flex-col font-display text-lg leading-none text-parchment-dim">
              <span>3</span>
              <span>4</span>
            </div>
          </div>

          {/* Staff systems */}
          {[0, 1].map((system) => (
            <div key={system} className={`relative ${system === 0 ? "mb-10" : ""}`}>
              <svg
                viewBox="0 0 400 60"
                className="w-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Staff lines */}
                {staffLines.map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={12 + i * 10}
                    x2="400"
                    y2={12 + i * 10}
                    stroke="var(--color-staff)"
                    strokeWidth="0.8"
                  />
                ))}

                {/* Bar lines */}
                <line x1="0" y1="12" x2="0" y2="52" stroke="var(--color-staff-bright)" strokeWidth="1.2" />
                <line x1="130" y1="12" x2="130" y2="52" stroke="var(--color-staff)" strokeWidth="0.8" />
                <line x1="260" y1="12" x2="260" y2="52" stroke="var(--color-staff)" strokeWidth="0.8" />
                <line x1="390" y1="12" x2="390" y2="52" stroke="var(--color-staff-bright)" strokeWidth="1.2" />

                {/* Notes — system 0 */}
                {system === 0 && (
                  <>
                    <Note x={40} y={32} active={false} />
                    <Note x={70} y={22} active={false} />
                    <Note x={100} y={42} active={false} />
                    <Note x={150} y={32} active={false} />
                    <Note x={180} y={22} active={false} />
                    <Note x={210} y={32} active />
                    <Note x={240} y={42} active />
                    <Note x={280} y={22} active />
                    <Note x={310} y={32} active={false} />
                    <Note x={350} y={22} active={false} />
                  </>
                )}

                {/* Notes — system 1 */}
                {system === 1 && (
                  <>
                    <Note x={40} y={42} active={false} />
                    <Note x={80} y={32} active={false} />
                    <Note x={120} y={22} active={false} />
                    <Note x={160} y={32} active={false} />
                    <Note x={200} y={42} active={false} />
                    <Note x={240} y={32} active={false} />
                    <Note x={280} y={22} active={false} />
                    <Note x={320} y={32} active={false} />
                    <Note x={360} y={42} active={false} />
                  </>
                )}
              </svg>
            </div>
          ))}

          {/* Playback controls */}
          <div className="mt-6 flex items-center gap-4 border-t border-staff/30 pt-5">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold transition-colors hover:bg-gold/30"
              aria-label="Play"
            >
              <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="flex-1">
              <div className="relative h-1 overflow-hidden rounded-full bg-staff/50">
                <div className="absolute inset-y-0 left-0 w-[58%] rounded-full bg-gradient-to-r from-gold-dim to-gold" />
              </div>
              <div className="mt-1.5 flex justify-between font-body text-[10px] text-parchment-dim/60">
                <span>1:24</span>
                <span>4:32</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Note({ x, y, active }: { x: number; y: number; active?: boolean }) {
  return (
    <g className={active ? "note-active" : ""}>
      <ellipse
        cx={x}
        cy={y}
        rx="5"
        ry="4"
        fill={active ? "var(--color-gold-bright)" : "var(--color-parchment-dim)"}
      />
      <rect
        x={x + 4}
        y={y - 28}
        width="1.5"
        height="28"
        fill={active ? "var(--color-gold-bright)" : "var(--color-parchment-dim)"}
      />
    </g>
  );
}
