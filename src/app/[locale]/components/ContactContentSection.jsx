import Link from 'next/link';

export function ContactContentSection({ locale = 'en' }) {
  return (
    <div className="max-w-xl">
      <p className="gtc-eyebrow">Contact</p>
      <h1 className="mt-3 gtc-title sm:mt-4">
        Get in Touch with Our Team
      </h1>
      <p className="mt-4 gtc-body sm:mt-6">
        Whether you are exploring technology solutions, partnership opportunities, or marketing
        support for your brokerage business, our team is ready to assist. Get in touch with GTC
        MARKETS (CY) LTD to learn how our DevOps expertise, fintech infrastructure, and strategic
        marketing support can help strengthen your brokerage operations.
      </p>
      <div className="mt-8">
        <a href="mailto:info@gtcmarkets.cy" className="gtc-primary-btn">
          Contact Our Team
        </a>
      </div>
    </div>
  );
}
