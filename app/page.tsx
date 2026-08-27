import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Tours } from '@/components/tours';
import { Excursions } from '@/components/excursions';
import { HowItWorks } from '@/components/how-it-works';
import { LeadBanner } from '@/components/lead-banner';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <>
      <Header />

      <main id="content">
        <Hero />
        <Tours />
        <Excursions />
        <HowItWorks />
        <LeadBanner />
        <Faq />
      </main>

      <Footer />
    </>
  );
}
