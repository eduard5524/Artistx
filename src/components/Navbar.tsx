export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-staff/40 bg-ink/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 ring-1 ring-gold/30 transition group-hover:bg-gold/20">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 14V4l3 2v6l6-2V6l3 2v8l-3-2V8l-6 2v4l-3-2z" fill="#d4a853" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-wide text-parchment">
            Artistx
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-parchment-dim/80 md:flex">
          <a href="#features" className="transition hover:text-gold">
            Features
          </a>
          <a href="#demo" className="transition hover:text-gold">
            Demo
          </a>
        </div>

        <a
          href="#early-access"
          className="rounded-full bg-gold/15 px-4 py-2 text-sm font-medium text-gold ring-1 ring-gold/40 transition hover:bg-gold/25 hover:ring-gold/60"
        >
          Get early access
        </a>
      </nav>
    </header>
  )
}
