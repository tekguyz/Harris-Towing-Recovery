import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustSection from '@/components/TrustSection';
import ContactForm from '@/components/ContactForm';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <ContactForm />
      <ContactCTA />
      <Footer />
    </main>
  );
}
