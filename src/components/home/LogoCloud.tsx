import React from 'react';
import { ForkKnife, Scissors, Stethoscope, Wrench, House, Barbell, Car } from '@phosphor-icons/react';

export function LogoCloud() {
  const INDUSTRIES = [
    { icon: ForkKnife, count: "500+", name: "Restaurants", benefit: "Capturing reservations 24/7", bg: "bg-white" },
    { icon: Scissors, count: "300+", name: "Salons & Spas", benefit: "Never missing bookings", bg: "bg-white" },
    { icon: Stethoscope, count: "200+", name: "Medical", benefit: "Patient scheduling simplified", bg: "bg-white" },
    { icon: Wrench, count: "400+", name: "HVAC & Trades", benefit: "Emergency calls handled", bg: "bg-white" },
    { icon: House, count: "150+", name: "Real Estate", benefit: "Inquiries captured instantly", bg: "bg-white" },
    { icon: Barbell, count: "100+", name: "Fitness", benefit: "Class bookings automated", bg: "bg-white" },
    { icon: Car, count: "250+", name: "Auto Repair", benefit: "Service requests managed", bg: "bg-white" }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-navy-900">
            Trusted by 500+ Service Professionals
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {INDUSTRIES.map((industry, idx) => (
            <div key={idx} className={`${industry.bg} p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center`}>
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <industry.icon size={32} weight="duotone" className="text-navy-900" />
              </div>
              <div className="text-xl font-semibold text-navy-900 mb-1">{industry.count}</div>
              <div className="text-base font-bold text-navy-900 mb-2">{industry.name}</div>
              <div className="text-xs text-gray-500">{industry.benefit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}