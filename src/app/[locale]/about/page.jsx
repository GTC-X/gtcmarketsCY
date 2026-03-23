import { AboutHero } from '../components/AboutHero';
import { OurExpertiseSection } from '../components/OurExpertiseSection';
import { AboutCtaSection } from '../components/AboutCtaSection';
import { Reveal } from '../components/Reveal';

export default async function NewAboutPage({ params }) {
  const { locale } = await params;

  return (
    <article >
      <Reveal>
        <AboutHero locale={locale} />
      </Reveal>
      <Reveal>
        <OurExpertiseSection />
      </Reveal>
      <Reveal>
        <AboutCtaSection locale={locale} />
      </Reveal>
    </article>
  );
}
