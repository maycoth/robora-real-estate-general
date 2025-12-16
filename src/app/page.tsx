import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import TrustedByCarousel from "@/components/sections/trusted-by-carousel";
import CalculatorSection from "@/components/sections/calculator-section";
import AccountTypesSection from "@/components/sections/account-types-section";
import DashboardSection from "@/components/sections/dashboard-section";
import SafetySecuritySection from "@/components/sections/safety-security-section";
import HowItWorksSteps from "@/components/sections/how-it-works-steps";
import PricingCTASection from "@/components/sections/pricing-cta-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationHeader />
      <HeroSection />
      <TrustedByCarousel />
      <CalculatorSection />
      <AccountTypesSection />
      <DashboardSection />
      <SafetySecuritySection />
      <HowItWorksSteps />
      <PricingCTASection />
      <Footer />
    </main>
  );
}
