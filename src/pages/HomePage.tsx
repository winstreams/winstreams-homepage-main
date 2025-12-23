import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { SocialProof } from "@/components/home/SocialProof";
import { PricingPreview } from "@/components/home/PricingPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main role="main">
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: What WinStreams Handles */}
        <FeatureShowcase />
        {/* Section 3: Testimonials + Section 4: Metrics (same bg) */}
        <SocialProof />
        {/* Section 5: Pricing Preview */}
        <PricingPreview />
        {/* Section 6: FAQ (Common Questions) */}
        <FAQSection />
        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}