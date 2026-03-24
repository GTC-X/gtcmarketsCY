import Link from 'next/link';

export function CenteredHeroMock({ locale = 'en' }) {
  return (
    <section
      className="gtc-section relative min-h-[75vh] bg-cover bg-center bg-no-repeat py-14 sm:min-h-[82vh] sm:py-20"
      style={{ backgroundImage: "url('/homepage-1.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />

      <div className="relative gtc-container flex min-h-[65vh] items-center justify-center sm:min-h-[72vh]">
        <div className="mx-auto max-w-4xl text-center text-white">
          <h1 className="gtc-title text-white">
            Maximize Your Brokerage Growth with Advanced Technology Solutions
          </h1>
          <p className="gtc-subtitle mx-auto max-w-3xl text-white/90">
            GTC MARKETS (CY) LTD provides advanced technology infrastructure, DevOps expertise, and
            strategic marketing support designed specifically for modern brokerage businesses and fintech
            platforms. Our solutions help financial companies scale efficiently, improve operational
            performance, and strengthen their market presence.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
            <Link href={`/${locale}/new/services`} className="gtc-primary-btn">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

