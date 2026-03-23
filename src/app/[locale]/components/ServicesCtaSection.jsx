import Link from 'next/link';

export function ServicesCtaSection({ locale = 'en' }) {
  return (
    <section className="gtc-section gtc-container rounded-2xl py-10 sm:rounded-3xl sm:py-16 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="gtc-heading">
          Looking to Strengthen Your Brokerage Technology?
        </h2>
        <p className="mt-4 gtc-body">
          GTC MARKETS (CY) LTD provides DevOps infrastructure and marketing support designed to help
          brokerage businesses operate efficiently and grow in competitive markets.
        </p>
        <div className="mt-8">
          <Link href={`/${locale}/new/contact`} className="gtc-primary-btn">
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
