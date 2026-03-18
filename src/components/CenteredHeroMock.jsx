import Link from 'next/link';

export function CenteredHeroMock({ locale = 'en' }) {
  return (
    <section className="gtc-section pt-10 sm:pt-16">
      <div className="gtc-container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="gtc-title">
            Maximize Your Brokerage Growth with Advanced Technology Solutions
          </h1>
          <p className="gtc-subtitle mx-auto max-w-3xl">
            GTC MARKETS (CY) LTD provides advanced technology infrastructure, DevOps expertise, and
            strategic marketing support designed specifically for modern brokerage businesses and fintech
            platforms. Our solutions help financial companies scale efficiently, improve operational
            performance, and strengthen their market presence.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
            <Link href={`/${locale}/new/services`} className="gtc-primary-btn">
              Explore Our Solutions
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-gtc-border bg-gradient-to-b from-slate-900 to-gtc-dark shadow-gtc-lg">
            <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gtc-primary/25 blur-3xl" />
              <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gtc-accent/10 blur-3xl" />
            </div>

            {/* “Laptop” top bar */}
            <div className="relative flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <div className="ms-3 h-2 w-40 rounded-full bg-white/10" />
            </div>

            {/* Screen area */}
            <div className="relative aspect-[16/7] w-full">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />

              {/* Fake chart blocks */}
              <div className="absolute inset-x-8 bottom-10 top-10 grid grid-cols-12 gap-3">
                <div className="col-span-4 rounded-xl bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
                <div className="col-span-8 rounded-xl bg-white/4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                  <div className="h-full w-full p-4">
                    <div className="h-2 w-32 rounded-full bg-white/10" />
                    <div className="mt-4 grid h-[calc(100%-1.5rem)] grid-cols-12 items-end gap-2">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-md bg-gradient-to-t from-gtc-primary/40 to-gtc-primary/10"
                          style={{ height: `${18 + ((i * 13) % 70)}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

