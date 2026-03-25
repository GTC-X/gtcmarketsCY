import { BrokerageSupportHero } from '@/components/BrokerageSupportHero';
import { DevopsFintechSolutions } from '@/components/DevopsFintechSolutions';
import { MarketingSolutions } from '@/components/MarketingSolutions';
import { CommonHeroSection } from '@/components/CommonHeroSection';

export async function generateMetadata() {
  return {
    title: 'Maximize Your Brokerage Growth with Advanced Technology Solutions',
    description:
      'GTC MARKETS (CY) LTD supports brokerage companies with technology infrastructure and marketing services designed to improve operations and market presence.',
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;

  return (
    <article>
      <CommonHeroSection
        backgroundImage="/homepage-1.jpg"
        title="Maximize Your Brokerage Growth with Advanced Technology Solutions"
        description="GTC MARKETS (CY) LTD provides advanced technology infrastructure, DevOps expertise, and strategic marketing support designed specifically for modern brokerage businesses and fintech platforms. Our solutions help financial companies scale efficiently, improve operational performance, and strengthen their market presence."
        ctaLabel="Explore Our Solutions"
        ctaHref={`/${locale}/services`}
        minHeightClass="min-h-[75vh]"
        overlayClassName="bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70"
        contentMaxWidthClass="max-w-4xl"
        extraImg={true}
      />
      <MarketingSolutions />
      <BrokerageSupportHero />
      <DevopsFintechSolutions />
    </article>
  );
}
