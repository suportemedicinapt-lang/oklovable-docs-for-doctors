import Header from "@/components/template/Header";
import HeroSection from "@/components/template/HeroSection";
import AboutSection from "@/components/template/AboutSection";
import ServicesSection from "@/components/template/ServicesSection";
import CredentialsSection from "@/components/template/CredentialsSection";
import TestimonialsSection from "@/components/template/TestimonialsSection";
import ContactSection from "@/components/template/ContactSection";
import Footer from "@/components/template/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CredentialsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
