import { CareersHero } from '../components/CareersHero';
import { WhyWorkWithUsSection } from '../components/WhyWorkWithUsSection';
import { CurrentOpportunitiesSection } from '../components/CurrentOpportunitiesSection';
import { Reveal } from '../components/Reveal';

export default async function NewCareersPage({ params }) {
  const { locale } = await params;

  return (
    <article className="">
      <Reveal>
        <CareersHero locale={locale} />
      </Reveal>
      <Reveal>
        <WhyWorkWithUsSection />
      </Reveal>
      <Reveal>
        <CurrentOpportunitiesSection />
      </Reveal>
    </article>
  );
}
