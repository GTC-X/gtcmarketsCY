import { WhyWorkWithUsSection } from '../components/WhyWorkWithUsSection';
import { CurrentOpportunitiesSection } from '../components/CurrentOpportunitiesSection';
import { Reveal } from '../components/Reveal';
import { CommonHeroSection } from '@/components/CommonHeroSection';

export async function generateMetadata() {
  return {
    title: 'Careers - GTC MARKETS (CY) LTD',
    description:
      'Join the Team Behind the Technology at GTC MARKETS (CY) LTD, a company supporting brokerage businesses through advanced technology infrastructure, DevOps expertise, and strategic operational solutions.',
  };
}
export default async function NewCareersPage({ params }) {
  const { locale } = await params;

  return (
    <article className="">
      <Reveal>
        <CommonHeroSection
          backgroundImage="/career-new.jpg"
          eyebrow="Careers"
          title="Join the Team Behind the Technology"
          description="Be part of GTC MARKETS (CY) LTD, a company supporting brokerage businesses through advanced technology infrastructure, DevOps expertise, and strategic operational solutions."
          minHeightClass="min-h-[480px] sm:min-h-[400px] md:min-h-[430px]"
          innerMaxWidthClass="max-w-3xl text-left"
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
