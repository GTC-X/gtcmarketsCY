import Link from 'next/link';

export function ServicesHero({ locale = 'en' }) {
  return (
    <div className=" mt-10 md:mt-14 gtc-container">
    <section className="p-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-gtc-dark via-[#0e2744] to-gtc-dark py-10 text-white shadow-gtc-lg sm:rounded-3xl sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-gtc-primary/25 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-gtc-accent/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,255,255,0.06),transparent)]" />
      </div>

      <div className="relative mx-auto text-center max-w-6xl">
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
    </div>
  );
}
