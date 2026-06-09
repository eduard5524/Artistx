const footerLinks = {
  Product: ["Features", "Pricing", "Roadmap"],
  Company: ["About", "Blog", "Careers"],
  Legal: ["Privacy", "Terms", "Contact"],
};

export function Footer() {
  return (
    <footer className="border-t border-staff/30 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-2xl font-semibold text-parchment">
              Artist<span className="text-gold">x</span>
            </a>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-parchment-dim">
              Sheet music that moves with the music. Follow the score in real time as you listen.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 font-body text-xs font-semibold uppercase tracking-wider text-parchment-dim">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-parchment-dim transition-colors hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-staff/20 pt-8 sm:flex-row">
          <p className="font-body text-xs text-parchment-dim/60">
            &copy; {new Date().getFullYear()} Artistx. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-body text-xs text-parchment-dim/60 transition-colors hover:text-gold"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
