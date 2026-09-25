import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/sections/Marquee";
import ServicesSection from "@/components/sections/ServicesSection";
import BookingSection from "@/components/sections/BookingSection";
import CarsSection from "@/components/sections/CarsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <ServicesSection />
      <BookingSection />
      <CarsSection />
      <ReviewsSection />
      <ContactSection />
      <CallToAction />
    </>
  );
}
