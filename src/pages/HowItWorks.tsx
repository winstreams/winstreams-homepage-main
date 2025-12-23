import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FinalCTA } from '@/components/home/FinalCTA';
import ComparisonHero from '@/components/how-it-works/ComparisonHero';
import { ProcessStepsGrid } from '@/components/how-it-works/ProcessStepsGrid';
import { OnboardingTimeline } from '@/components/how-it-works/OnboardingTimeline';
import { ImplementationFAQ } from '@/components/how-it-works/ImplementationFAQ';

export function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <ComparisonHero />
        <ProcessStepsGrid />
        <OnboardingTimeline />
        <ImplementationFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
