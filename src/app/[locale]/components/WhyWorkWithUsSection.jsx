const cards = [
  {
    title: 'Work on Financial Technology',
    description:
      'Contribute to the development of technology solutions supporting brokerage platforms and financial services infrastructure.',
  },
  {
    title: 'Strong Team Collaboration',
    description:
      'Be part of a team that values clear communication, collaboration, and strong teamwork across departments.',
  },
  {
    title: 'Professional Growth',
    description:
      'Expand your expertise through practical experience, new technologies, and ongoing professional development.',
  },
  {
    title: 'Work in a Global Industry',
    description:
      'Gain experience working within the international brokerage and financial technology sector.',
  },
];

export function WhyWorkWithUsSection() {
  return (
    <section className="gtc-section-pad">
      <div className="gtc-container">
        <div className="mb-12 max-w-2xl">
          <p className="gtc-eyebrow text-emerald-600">
            Why Work With Us
          </p>
          <h2 className="mt-2 gtc-title">
            Why Work with GTC MARKETS (CY) LTD?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article key={card.title} className="gtc-card hover:border-emerald-200">
              <span className="mb-4 inline-block h-1 w-12 rounded-full bg-emerald-500" />
              <h3 className="gtc-card-title">{card.title}</h3>
              <p className="gtc-card-desc flex-1">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
