export function Cta() {
  return (
    <section id="early-access" className="relative px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-semibold text-parchment sm:text-5xl">
          Ready to read music{' '}
          <span className="italic text-gold">differently?</span>
        </h2>
        <p className="mt-4 font-body text-lg text-parchment-dim">
          Join the waitlist for early access. Be among the first musicians to experience
          synchronized score playback.
        </p>
        <form
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="you@example.com"
            className="flex-1 rounded-full border border-staff/60 bg-ink-light px-5 py-3.5 font-body text-sm text-parchment placeholder:text-parchment-dim/40 focus:border-gold/50 focus:outline-none"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-ink transition-all hover:bg-gold-bright hover:shadow-lg hover:shadow-gold/20"
          >
            Join Waitlist
          </button>
        </form>
        <p className="mt-4 font-body text-xs text-parchment-dim/50">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
