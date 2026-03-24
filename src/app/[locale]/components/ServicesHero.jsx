import Link from 'next/link';

export function ServicesHero({ locale = 'en' }) {
  return (
    <section
      className="gtc-section relative flex w-full min-h-[560px] items-center overflow-hidden bg-cover bg-center bg-no-repeat text-white sm:min-h-[680px] md:min-h-[780px]"
      style={{ backgroundImage: "url('/service-banner.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-gtc-primary/25 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-gtc-accent/12 blur-3xl" />
        <div className="absolute inset-0 bg-slate-900/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <div className="relative gtc-container mx-auto max-w-6xl text-center">
        <p className="gtc-eyebrow text-white/70">
          Our Services
        </p>
        <h1 className="mt-3 gtc-title text-white sm:mt-4">
          Marketing & DevOps Solutions for Fintech and Brokerage Businesses
        </h1>
        <p className="mt-4 gtc-body text-white/80 sm:mt-6">
          GTC MARKETS (CY) LTD provides strategic marketing solutions and advanced DevOps
          infrastructure designed to support brokerage platforms and fintech companies. Our solutions
          help financial businesses strengthen their digital presence, optimize technology
          infrastructure, and scale efficiently in global markets.
        </p>
        <div className="mt-6 sm:mt-8">
          <Link href={`/${locale}/#marketing`} className="gtc-primary-btn">
            Explore Our Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
