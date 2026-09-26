import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Servicios } from "./components/Servicios";
import { Proceso } from "./components/Proceso";
import { Testimonios } from "./components/Testimonios";
import { FaqSection } from "./components/FaqSection";
import { BlogSection } from "./components/BlogSection";
import { CtaSection } from "./components/CtaSection";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { WhatsAppBubble } from "./components/WhatsAppBubble";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <WhyUs />
        <Servicios onSelectService={(serviceName) => setSelectedService(serviceName)} />
        <Proceso />
        <Testimonios />
        <FaqSection />
        <BlogSection />
        <CtaSection />
        <Contacto initialService={selectedService} />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
};

export default Index;
