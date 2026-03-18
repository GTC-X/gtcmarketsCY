export function NewPageHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#070c18] via-[#08122a] to-[#070c18] px-6 py-16 text-white shadow-[0_20px_70px_rgba(2,6,23,0.45)] sm:px-10 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute left-[35%] top-[55%] h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
      </div>

      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
            GTC MARKETS (CY) LTD
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Maximize Your Brokerage Growth with Advanced Technology Solutions
          </h1>
          <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
            GTC MARKETS (CY) LTD provides advanced technology infrastructure, DevOps expertise, and
            strategic marketing support designed specifically for modern brokerage businesses and fintech
            platforms. Our solutions help financial companies scale efficiently, improve operational
            performance, and strengthen their market presence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#ffcc00] px-7 py-3 text-sm font-semibold text-[#0b1020] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:bg-[#ffd633] focus:outline-none focus:ring-2 focus:ring-[#ffcc00]/60 focus:ring-offset-2 focus:ring-offset-[#070c18]"
            >
              Explore Our Solutions
            </button>
            <span className="text-xs text-white/60">
              Marketing, DevOps, and infrastructure support for brokerages
            </span>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute right-10 top-2 h-28 w-12 rounded-sm border border-white/25 bg-white/5" />
          <div className="absolute right-32 top-14 h-24 w-11 rounded-sm bg-white/30" />
          <div className="absolute right-54 top-24 h-36 w-12 rounded-sm bg-white/15" />
          <div className="absolute right-72 top-10 h-20 w-11 rounded-sm bg-white/10" />

          <svg className="absolute -left-10 top-14 h-48 w-80" viewBox="0 0 400 240" fill="none" aria-hidden="true">
            {Array.from({ length: 220 }).map((_, i) => {
              const x = (i * 17) % 400;
              const y = (i * 11) % 240;
              const r = i % 5 === 0 ? 1.6 : 1.1;
              const o = i % 7 === 0 ? 0.55 : 0.25;
              return <circle key={i} cx={x} cy={y} r={r} fill={`rgba(255,255,255,${o})`} />;
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}

