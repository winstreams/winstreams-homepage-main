import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
const PRICING = [{
  name: "Starter",
  price: "$299",
  description: "For solo operators & low call volume businesses.",
  features: ["AI answers & texts every caller", "100 included calls/mo", "Instant missed-call text follow-up", "Voicemail-to-text", "Lead capture & qualification"],
  cta: "Get Started"
}, {
  name: "Growth",
  price: "$499",
  description: "For teams ready to scale.",
  features: ["Everything in Starter", "500 included calls/mo", "Website chat widget", "Calendar syncing & appointment booking", "Priority support", "Custom AI call scripts"],
  cta: "Choose Growth"
}, {
  name: "Scale",
  price: "$999",
  description: "For multi-location or high call volume operations.",
  features: ["Unlimited calls", "Dedicated lead specialist", "Custom workflows", "CRM & integration support", "VIP priority routing"],
  cta: "Get Started"
}];
export function PricingPreview() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<null | 'starter' | 'growth' | 'scale'>(null);

  const handleCTAClick = () => {
    navigate('/book');
  };

  const getPlanId = (name: string): 'starter' | 'growth' | 'scale' => {
    return name.toLowerCase() as 'starter' | 'growth' | 'scale';
  };

  return (
    <section id="pricing" className="py-20 lg:py-24 px-4 md:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-navy text-center mb-4">
          Simple Pricing. Serious Results.
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12">
          Designed to work—and book jobs while you sleep (or take a break).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {PRICING.map((tier, idx) => {
            const planId = getPlanId(tier.name);
            const isSelected = selectedPlan === planId;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Card
                  onClick={() => setSelectedPlan(planId)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedPlan(planId);
                    }
                  }}
                  className={cn(
                    "p-8 h-full flex flex-col rounded-3xl transition-all duration-200 shadow-sm bg-white cursor-pointer",
                    "hover:shadow-lg hover:-translate-y-1",
                    isSelected ? "border border-fuchsia-400" : "border border-slate-200"
                  )}
                >
                  <h3 className="font-heading font-bold text-brand-navy mb-2 text-2xl">{tier.name}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{tier.description}</p>
                  <p className="text-3xl font-bold text-brand-navy mb-6">
                    {tier.price}
                    <span className="text-sm font-normal text-slate-600">/mo</span>
                  </p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-base text-slate-600">
                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCTAClick();
                      }}
                      className={cn(
                        "w-full font-semibold rounded-full transition-all duration-200",
                        isSelected
                          ? "bg-fuchsia-600 text-white border-fuchsia-600"
                          : "border-slate-300 text-slate-900 group-hover:bg-fuchsia-600 group-hover:border-fuchsia-600 group-hover:text-white"
                      )}
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="text-center space-y-4">
          <p className="text-sm text-slate-500">Easy Setup. Flexible Contracts. Go live within 2-4 days. Quick Predictable ROI.</p>
          <div className="inline-block bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 border border-pink-200 rounded-full px-8 py-4 shadow-sm">
            <p className="text-base font-medium text-brand-navy flex items-center justify-center gap-2">
              🚀 Most clients see their first booked appointment within <span className="text-brand-magenta font-bold">48 hours</span> of going live
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}