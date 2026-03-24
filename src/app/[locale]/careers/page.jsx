import { WhyWorkWithUsSection } from '../components/WhyWorkWithUsSection';
import { CurrentOpportunitiesSection } from '../components/CurrentOpportunitiesSection';
import { Reveal } from '../components/Reveal';
import { CommonHeroSection } from '@/components/CommonHeroSection';

export default async function NewCareersPage({ params }) {
  const { locale } = await params;

  return (
    <article className="">
      <Reveal>
        <CommonHeroSection
          backgroundImage="/career-banner.jpg"
          eyebrow="Careers"
          title="Join the Team Behind the Technology"
          description="Be part of GTC MARKETS (CY) LTD, a company supporting brokerage businesses through advanced technology infrastructure, DevOps expertise, and strategic operational solutions."
          ctaLabel="Explore Careers"
          minHeightClass="min-h-[480px] sm:min-h-[560px] md:min-h-[640px]"
        />
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
