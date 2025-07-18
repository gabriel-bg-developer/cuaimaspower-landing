import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Página principal del landing page
// Estructura principal con todas las secciones para mujeres emprendedoras
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navegación fija */}
      <Navigation />
      
      {/* Hero Section - Sección principal con mensaje de empoderamiento */}
      <section id="home">
        <Hero />
      </section>
      
      {/* Sección de Servicios */}
      <section id="services">
        <Services />
      </section>
      
      {/* Sección de Precios */}
      <section id="pricing">
        <Pricing />
      </section>
      
      {/* Sección de Testimonios */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      {/* Sección de Contacto */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}