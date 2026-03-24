import Link from 'next/link';

export function AboutHero({ locale = 'en' }) {
  return (
    <section
      className="gtc-section relative flex w-full min-h-[480px] items-center overflow-hidden bg-cover bg-center bg-no-repeat text-white sm:min-h-[560px] md:min-h-[640px]"
      style={{ backgroundImage: "url('/about-banner.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gtc-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gtc-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_30%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="relative gtc-container mx-auto max-w-6xl text-center">
        <p className="gtc-eyebrow text-white/70">
          About us
        </p>
        <h1 className="mt-3 gtc-title text-white sm:mt-4">
          GTC MARKETS (CY) LTD is a Cyprus-based company that provides advanced technology and
          development solutions for brokerage businesses worldwide.
        </h1>
        <p className="mt-4 gtc-body text-white/85 sm:mt-6">
          As part of the global GTC network, with a presence across key financial hubs in Asia,
          Europe, and the Middle East, GTC MARKETS (CY) LTD leverages shared expertise, advanced
          technology, and global resources to support the needs of the brokerage and trading industry.
        </p>
        <div className="mt-6 sm:mt-8">
          <Link href={`/${locale}/contact`} className="gtc-primary-btn">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
