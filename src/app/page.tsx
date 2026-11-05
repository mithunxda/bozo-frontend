import HeroSection from "@/components/home/HeroSection";
import ValueProps from "@/components/home/ValueProps";
import ServicesGrid from "@/components/home/ServicesGrid";
import ServiceCalculator from "@/components/home/ServiceCalculator";
import BeforeAfterShowcase from "@/components/home/BeforeAfterShowcase";
import GoogleReviews from "@/components/home/GoogleReviews";
import FaqSection from "@/components/home/FaqSection";
import LocationSection from "@/components/home/LocationSection";
import EmergencyBanner from "@/components/home/EmergencyBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProps />
      <ServicesGrid />
      <ServiceCalculator />
      <BeforeAfterShowcase />
      <GoogleReviews />
      <FaqSection />
      <LocationSection />
      <EmergencyBanner />
    </>
  );
}
