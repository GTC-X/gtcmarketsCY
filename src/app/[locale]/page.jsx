import { BrokerageSupportHero } from '@/components/BrokerageSupportHero';
import { DevopsFintechSolutions } from '@/components/DevopsFintechSolutions';
import { MarketingSolutions } from '@/components/MarketingSolutions';
import { CenteredHeroMock } from '@/components/CenteredHeroMock';

export default function HomePage() {
  return (
    <article>
      <CenteredHeroMock />
      <MarketingSolutions />
      <BrokerageSupportHero />
      <DevopsFintechSolutions />
    </article>
  );
}
