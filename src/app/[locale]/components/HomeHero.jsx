import Link from 'next/link';

export function HomeHero({ locale = 'en' }) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gtc-dark via-[#0e2744] to-gtc-dark px-4 py-10 text-white shadow-gtc-lg sm:rounded-3xl sm:px-8 sm:py-16 md:px-10 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-gtc-primary/25 blur-3xl" />
        <div className="absolute left-[40%] top-[50%] h-80 w-80 rounded-full bg-gtc-accent/10 blur-3xl" />
        <div className="absolute -right-24 top-8 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_30%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(14,76,146,0.15)_100%)]" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.22em]">
            GTC MARKETS (CY) LTD
          </p>
          <h1 className="mt-3 text-2xl font-semibold leading-snug tracking-tight sm:mt-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Maximize Your Brokerage Growth with Advanced Technology Solutions
          </h1>
          <p className="mt-4 text-xs leading-6 text-white/80 sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
            GTC MARKETS (CY) LTD provides advanced technology infrastructure, DevOps expertise, and
            strategic marketing support designed specifically for modern brokerage businesses and fintech
            platforms. Our solutions help financial companies scale efficiently, improve operational
            performance, and strengthen their market presence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={`/${locale}/new/services`} className="gtc-accent-btn">
              Explore Our Solutions
            </Link>
            <span className="text-xs text-white/60">Technology · Marketing · DevOps</span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute right-10 top-2 h-28 w-12 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm" />
          <div className="absolute right-32 top-14 h-24 w-11 rounded-lg bg-white/25 backdrop-blur-sm" />
          <div className="absolute right-52 top-24 h-36 w-12 rounded-lg bg-white/15 backdrop-blur-sm" />
          <svg className="absolute -left-10 top-14 h-48 w-80 opacity-90" viewBox="0 0 400 240" fill="none" aria-hidden="true">
            {Array.from({ length: 220 }).map((_, i) => {
              const x = (i * 17) % 400;
              const y = (i * 11) % 240;
              const r = i % 5 === 0 ? 1.6 : 1.1;
              const o = i % 7 === 0 ? 0.5 : 0.22;
              return <circle key={i} cx={x} cy={y} r={r} fill={`rgba(255,255,255,${o})`} />;
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
