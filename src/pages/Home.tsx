import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import CompanyIntro from '../components/CompanyIntro';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      {/* Smooth transition: white → dark */}
      <div className="h-16 bg-gradient-to-b from-white to-primary pointer-events-none" />
      <CompanyIntro />
      {/* Smooth transition: dark → light gray */}
      <div className="h-16 bg-gradient-to-b from-primary to-surface-alt pointer-events-none" />
      <Contact />
      <Footer />
    </>
  );
}
