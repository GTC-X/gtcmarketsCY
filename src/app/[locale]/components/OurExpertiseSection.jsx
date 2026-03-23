const cards = [
  {
    title: 'Marketing Solutions',
    description:
      'Strategic marketing services designed to help financial companies strengthen their brand, expand market reach, and attract new clients through data-driven campaigns.',
  },
  {
    title: 'DevOps Infrastructure',
    description:
      'Scalable DevOps environments designed to support financial platforms, improve system reliability, and ensure efficient operational performance.',
  },
  {
    title: 'Fintech Development',
    description:
      'Technology solutions built for fintech ecosystems, including system integrations, automation frameworks, and platform optimization.',
  },
  {
    title: 'Business Growth Support',
    description:
      'Operational and strategic support designed to help brokerage and fintech companies scale their business and enter new markets.',
  },
];

export function OurExpertiseSection() {
  return (
    <section className="gtc-section-pad">
      <div className="gtc-container">
        <div className="mb-12 max-w-2xl">
          <p className="gtc-eyebrow">Our Expertise</p>
          <h2 className="mt-2 gtc-title">
            Supporting Fintech Growth with Technology and Strategy
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article key={card.title} className="gtc-card">
              <span className="mb-4 inline-block h-1 w-12 rounded-full bg-gtc-primary" />
              <h3 className="gtc-card-title">{card.title}</h3>
              <p className="gtc-card-desc flex-1">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
