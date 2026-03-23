import Link from 'next/link';

export function CtaContactSection({ locale = 'en' }) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-gtc-dark">
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-[-140px] h-[380px] w-[380px] rounded-full bg-gtc-primary/20 blur-3xl" />
        <div className="absolute left-[35%] top-[55%] h-[320px] w-[320px] rounded-full bg-gtc-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-gtc-dark via-gtc-dark/95 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl">
            Need Technology and Marketing Support for Your Brokerage?
          </h2>
          <p className="mt-3 text-xs leading-6 text-white/75 sm:mt-4 sm:text-sm sm:leading-7 md:text-base">
            GTC MARKETS (CY) LTD supports brokerage companies with technology infrastructure and
            marketing services designed to improve operations and market presence.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link href={`/${locale}/new/contact`} className="gtc-accent-btn">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
