import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorks";
import { PricingPage } from "./pages/PricingPage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { BookPage } from "./pages/BookPage";
import { ContactPage } from "./pages/ContactPage";
import { CallFlowAuditPage } from "./pages/CallFlowAuditPage";
import { AIMessagingOptimizationPage } from "./pages/AIMessagingOptimizationPage";
import ReviewBoosterPage from "./pages/ReviewBoosterPage";
import WebConversionAuditPage from "./pages/WebConversionAuditPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { AcceptableUsePage } from "./pages/AcceptableUsePage";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/call-flow-audit" element={<CallFlowAuditPage />} />
          <Route path="/services/ai-messaging-optimization" element={<AIMessagingOptimizationPage />} />
          <Route path="/services/review-booster" element={<ReviewBoosterPage />} />
          <Route path="/services/web-conversion-audit" element={<WebConversionAuditPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/acceptable-use" element={<AcceptableUsePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
