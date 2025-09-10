import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ServicesPreview from "@/components/services-preview";
import VideoSection from "@/components/video-section";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";
import WelcomeSection from "@/components/welcome-section";
import ServicesSection from "@/components/services-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      {/* <FeaturesSection /> */}
      <VideoSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
