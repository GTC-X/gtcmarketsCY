import { ServicesCtaSection } from '../components/ServicesCtaSection';
import { Reveal } from '../components/Reveal';
import { MarketingSolutions } from '@/components/MarketingSolutions';
import { DevopsFintechSolutions } from '@/components/DevopsFintechSolutions';
import { CommonHeroSection } from '@/components/CommonHeroSection';

export default async function NewServicesPage({ params }) {
  const { locale } = await params;

  return (
    <article className="" id="marketing">
      <Reveal>
        <CommonHeroSection
          backgroundImage="/service-banner.jpg"
          eyebrow="Our Services"
          title="Marketing & DevOps Solutions for Fintech and Brokerage Businesses"
          description="GTC MARKETS (CY) LTD provides strategic marketing solutions and advanced DevOps infrastructure designed to support brokerage platforms and fintech companies. Our solutions help financial businesses strengthen their digital presence, optimize technology infrastructure, and scale efficiently in global markets."
          ctaLabel="Explore Our Solutions"
          minHeightClass="min-h-[480px] sm:min-h-[560px] md:min-h-[640px]"

        />
      </Reveal>
      <Reveal>
        <MarketingSolutions  servicePage={true}/>
      </Reveal>
      <Reveal>
        <DevopsFintechSolutions />
      </Reveal>
      <Reveal>
        <ServicesCtaSection locale={locale} />
      </Reveal>
    </article>
  );
}
