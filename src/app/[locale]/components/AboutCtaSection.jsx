import Link from 'next/link';

export function AboutCtaSection({ locale = 'en' }) {
  return (
    <section
      className="gtc-section relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-10 text-white sm:py-16 md:py-20"
      style={{ backgroundImage: "url('/about-footer.jpg')" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-slate-900/55" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.12),transparent)]" aria-hidden="true" />
      <div className="relative gtc-container mx-auto max-w-3xl text-center">
        <h2 className="gtc-heading text-white">
          Ready to Grow Your Fintech Business?
        </h2>
        <p className="mt-4 gtc-body text-white/90 sm:mt-5">
          Discover how GTC MARKETS (CY) LTD can support your technology infrastructure, marketing
          expansion, and operational growth. Our team is ready to help you build scalable solutions
          designed for the future of financial technology.
        </p>
        <div className="mt-8">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-gtc-primary shadow-gtc transition-all duration-200 hover:bg-white/95 hover:shadow-gtc-lg focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-gtc-primary sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
