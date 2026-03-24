import Link from 'next/link';

const solutions = [
  {
    eyebrow: 'Search Visibility & SEO',
    title: 'Improve discoverability',
    description:
      'Improving organic visibility across search engines through structured SEO strategies designed for financial services and brokerage platforms.',
  },
  {
    eyebrow: 'Marketing Strategy & Planning',
    title: 'Plan for sustained growth',
    description:
      'Developing tailored marketing strategies that align with business objectives and support long-term growth in competitive financial markets.',
  },
  {
    eyebrow: 'Financial Content & Copywriting',
    title: 'Communicate with clarity',
    description:
      'Creating clear, engaging content tailored to financial audiences, helping brokerage brands communicate effectively across digital channels.',
  },
  {
    eyebrow: 'Performance Advertising',
    title: 'Reach high-intent clients',
    description:
      'Managing targeted digital advertising campaigns designed to reach relevant audiences and drive measurable acquisition results.',
  },
  {
    eyebrow: 'Client Acquisition Funnels',
    title: 'Guide prospects to convert',
    description:
      'Designing structured inbound marketing journeys that attract potential clients and guide them through the conversion process.',
  },
  {
    eyebrow: 'Marketing Analytics & Reporting',
    title: 'Optimize with data',
    description:
      'Providing clear performance insights and reporting that support data-driven marketing decisions and continuous optimization.',
  },
];

export function MarketingSolutions({ servicePage = false }) {
  return (
    <section className={`gtc-section bg-gtc-surface  ${servicePage ? 'py-8 sm:py-16' : 'pb-8'}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        aria-hidden="true"
      >
        <div className="absolute inset-0 -rotate-6 bg-[repeating-linear-gradient(110deg,rgba(14,76,146,0.04)_0px,rgba(14,76,146,0.04)_1px,transparent_1px,transparent_26px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side_at_50%_20%,rgba(14,76,146,0.08),transparent_55%)]" />
      </div>

      <div className="relative gtc-container">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <h2 className="gtc-title">
            Strategic Marketing Solutions for Brokerage Growth
          </h2>
          <p className="gtc-subtitle mx-auto max-w-2xl">
            Marketing services designed to help brokerage businesses strengthen their brand,
            attract qualified clients, and expand in competitive financial markets.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item, index) => {
            const featured = index === 4;

            return (
              <article
                key={item.eyebrow}
                className={[
                  'gtc-card group relative min-h-[160px] hover:shadow-gtc-lg sm:min-h-[180px]',
                  featured
                    ? 'border-gtc-primary/30 bg-white bg-gradient-to-br from-blue-50/80 to-white'
                    : 'border-gtc-border/80 bg-white hover:border-gtc-primary/20',
                ].join(' ')}
              >
                <div className="md:mb-4 flex items-start justify-between gap-4">
                  <span className="h-1 w-10 rounded-full bg-gtc-primary transition-all duration-300 ease-out group-hover:w-20" />
                  {featured ? (
                    <span className="rounded-full border border-gtc-primary/30 bg-white px-3 py-1 text-[11px] font-medium text-gtc-primary shadow-sm">
                      New Offering
                    </span>
                  ) : (
                    <span className="text-slate-300 transition-colors duration-300 group-hover:text-gtc-primary">
                      ✦
                    </span>
                  )}
                </div>

                <p className="gtc-eyebrow text-slate-600">
                  {item.eyebrow}
                </p>
                <h3 className="mt-1.5 gtc-card-title">
                  {item.title}
                </h3>
                <p className="gtc-card-desc max-w-sm">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:mt-12">
          <Link href="/services" className="gtc-primary-btn">
            Explore Marketing Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
