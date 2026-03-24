import Link from 'next/link';

export function CareersHero({ locale = 'en' }) {
  return (
    <section
      className="gtc-section relative mt-10 flex w-full min-h-[560px] items-center overflow-hidden bg-cover bg-center bg-no-repeat py-10 text-white sm:mt-14 sm:min-h-[680px] sm:py-16 md:min-h-[780px] md:py-20"
      style={{ backgroundImage: "url('/career-banner.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gtc-primary/15 blur-3xl" />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_80%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="relative gtc-container mx-auto max-w-6xl text-center">
        <p className="gtc-eyebrow text-white/70">
          Careers
        </p>
        <h1 className="mt-3 gtc-title text-white sm:mt-4">
          Join the Team Behind the Technology
        </h1>
        <p className="mt-4 gtc-body text-white/85 sm:mt-6">
          Be part of GTC MARKETS (CY) LTD, a company supporting brokerage businesses through advanced
          technology infrastructure, DevOps expertise, and strategic operational solutions.
        </p>
        <div className="mt-8">
          <Link
            href={`/${locale}/new/careers#opportunities`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-emerald-400 px-5 py-2.5 text-xs font-semibold text-emerald-950 shadow-gtc transition-all duration-200 hover:bg-emerald-300 hover:shadow-gtc-lg focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:ring-offset-2 focus:ring-offset-gtc-dark sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Explore Careers
          </Link>
        </div>
      </div>
    </section>
  );
}
