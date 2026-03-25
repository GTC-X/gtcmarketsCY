import { ContactContentSection } from '../components/ContactContentSection';
import { ContactFormSection } from '../components/ContactFormSection';
import { Reveal } from '../components/Reveal';

export async function generateMetadata() {
  return {
    title: 'Contact Us - GTC MARKETS (CY) LTD',
    description:
      'Get in touch with GTC MARKETS (CY) LTD to discuss your technology needs and explore how our solutions can support your brokerage business.',
  };
}
export default async function NewContactPage({ params }) {
  const { locale } = await params;

  return (
    <article>
      <section className="gtc-container grid gap-10 py-10 md:py-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal>
          <ContactContentSection locale={locale} />
        </Reveal>
        <Reveal>
          <ContactFormSection />
        </Reveal>
      </section>
    </article>
  );
}
