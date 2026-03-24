export function BrokerageSupportHero() {
  return (
    <section
      className="gtc-section relative w-full overflow-x-clip bg-gtc-dark bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/homepage-2.jpg')" }}
    >
      {/* <div className="absolute inset-0">
        <div className="absolute -left-40 top-[-140px] h-[380px] w-[380px] rounded-full bg-gtc-primary/20 blur-3xl" />
        <div className="absolute left-[35%] top-[55%] h-[320px] w-[320px] rounded-full bg-gtc-accent/10 blur-3xl" />
        <div className="absolute -right-48 top-[-120px] h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-gtc-dark via-gtc-dark/70 to-transparent" />
      </div> */}

      <div className="relative gtc-container grid min-h-[460px] items-center gap-8 py-10 sm:gap-10 sm:py-16 md:min-h-[520px] md:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-xl">
          <p className="gtc-eyebrow text-white/60">
            Technology + Marketing
          </p>
          <h1 className="mt-2 gtc-title text-white sm:mt-3">
            Need Technology and Marketing Support for Your Brokerage?
          </h1>
          <p className="gtc-body mt-3 text-white/70 sm:mt-4">
            GTC MARKETS (CY) LTD supports brokerage companies with technology infrastructure and
            marketing services designed to improve operations and market presence.
          </p>

          <div className="mt-7">
            <button type="button" className="gtc-primary-btn focus:ring-offset-gtc-dark">
              Contact Our Team
            </button>
          </div>
        </div>

        {/* <div className="relative hidden md:block">
          <div className="absolute right-8 top-2 h-24 w-10 rounded-sm border border-white/25 bg-white/5" />
          <div className="absolute right-28 top-10 h-20 w-9 rounded-sm bg-white/30" />
          <div className="absolute right-44 top-16 h-28 w-10 rounded-sm bg-white/15" />
          <div className="absolute right-60 top-6 h-16 w-9 rounded-sm bg-white/10" />

          <svg
            className="absolute -left-10 top-10 h-44 w-72 text-white/20"
            viewBox="0 0 360 220"
            fill="none"
            aria-hidden="true"
          >
            {Array.from({ length: 150 }).map((_, i) => {
              const x = (i * 19) % 360;
              const y = (i * 13) % 220;
              const r = (i % 5) === 0 ? 1.6 : 1.1;
              const o = (i % 7) === 0 ? 0.5 : 0.25;
              return <circle key={i} cx={x} cy={y} r={r} fill={`rgba(255,255,255,${o})`} />;
            })}
          </svg>
        </div> */}
      </div>
    </section>
  );
}

