import { OurExpertiseSection } from '../components/OurExpertiseSection';
import { AboutCtaSection } from '../components/AboutCtaSection';
import { Reveal } from '../components/Reveal';
import { CommonHeroSection } from '@/components/CommonHeroSection';


export async function generateMetadata() {
  return {
    title: 'About Us - GTC MARKETS (CY) LTD',
    description:
      'GTC MARKETS (CY) LTD is a Cyprus-based company that provides advanced technology and development solutions for brokerage businesses worldwide.',
  };
}
export default async function NewAboutPage({ params }) {
  const { locale } = await params;

  return (
    <article >
      <Reveal>
        <CommonHeroSection
          backgroundImage="/about-new.jpg"
          eyebrow="About us"
          title={
            <>
              GTC MARKETS (CY) LTD is a <span className="whitespace-nowrap">Cyprus-based</span> Company
            </>
          }
          description="Provides advanced technology and development solutions for brokerage businesses worldwide. As part of the global GTC network, with a presence across key financial hubs in Asia, Europe, and the Middle East, GTC MARKETS (CY) LTD leverages shared expertise, advanced technology, and global resources to support the needs of the brokerage and trading industry."
          ctaLabel="Get Started"
          ctaHref={`/contact`}
          minHeightClass="min-h-[300px] sm:min-h-[400px] md:min-h-[430px]"
          innerMaxWidthClass="max-w-3xl text-left"
        />
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
