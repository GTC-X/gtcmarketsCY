import { ServicesHero } from '../components/ServicesHero';
import { ServicesCtaSection } from '../components/ServicesCtaSection';
import { Reveal } from '../components/Reveal';
import { MarketingSolutions } from '@/components/MarketingSolutions';
import { DevopsFintechSolutions } from '@/components/DevopsFintechSolutions';

export default async function NewServicesPage({ params }) {
  const { locale } = await params;

  return (
    <article className="" id="marketing">
      <Reveal>
        <ServicesHero locale={locale} />
      </Reveal>
      <Reveal>
        <MarketingSolutions />
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
