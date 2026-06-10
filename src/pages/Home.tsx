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
      <CompanyIntro />
      <Contact />
      <Footer />
    </>
  );
}
