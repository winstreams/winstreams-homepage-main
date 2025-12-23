import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ForkKnife, Scissors, Stethoscope, Wrench, House, Barbell, Car } from '@phosphor-icons/react';
const TESTIMONIALS = [{
  quote: "We were losing 3-4 reservations every night to voicemail. WinStreams recovered $12,000 in bookings in the first month. Our phone actually works FOR us now, not against us.",
  name: "Sarah M.",
  role: "Restaurant Owner",
  img: "https://i.pravatar.cc/80?img=1"
}, {
  quote: "Before WinStreams, evening calls went to voicemail and clients booked elsewhere. Now we capture every inquiry instantly—even when we're with customers. We recovered $7,800 in just 30 days.",
  name: "Mike T.",
  role: "Salon Owner",
  img: "https://i.pravatar.cc/80?img=2",
  featured: true
}, {
  quote: "Emergency calls after 5pm used to go to voicemail, and by morning they'd hired someone else. Now WinStreams patches urgent calls straight through. I have my evenings back AND we don't lose revenue.",
  name: "Lisa C.",
  role: "HVAC Business",
  img: "https://i.pravatar.cc/80?img=3"
}];
const INDUSTRIES = [{
  icon: ForkKnife,
  name: "Restaurants"
}, {
  icon: Scissors,
  name: "Salons & Spas"
}, {
  icon: Stethoscope,
  name: "Medical Offices"
}, {
  icon: Wrench,
  name: "Trades & Contractors"
}, {
  icon: House,
  name: "Real Estate"
}, {
  icon: Barbell,
  name: "Fitness Studios"
}, {
  icon: Car,
  name: "Auto Services"
}];
const STATS = [{
  value: "40%",
  label: "More Booked Jobs",
  subtext: "in the first 30 days",
  bg: "bg-blue-50"
}, {
  value: "70%",
  label: "Missed Calls Converted",
  subtext: "into conversations",
  bg: "bg-pink-50"
}, {
  value: "$12K+",
  label: "Monthly Revenue",
  subtext: "recovered for avg client",
  bg: "bg-emerald-50"
}, {
  value: "24/7",
  label: "Lead Coverage",
  subtext: "even when you're off",
  bg: "bg-purple-50"
}];
export function SocialProof() {
  return <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - Matching reference image */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Real Operators. Real Results.
          </h2>
          <p className="text-lg text-slate-600">
            See what business owners are saying about WinStreams.
          </p>
        </motion.div>

        {/* Part A: Testimonials - Styled like reference image */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((testimonial, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: idx * 0.1
        }} className="h-full">
              <div className={`flex flex-col h-full p-6 md:p-8 transition-all duration-300 ${testimonial.featured ? 'rounded-3xl bg-gradient-to-br from-white to-pink-50/30 border-2 border-brand-magenta shadow-md shadow-brand-magenta/10' : 'rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-brand-magenta/30'}`}>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" strokeWidth={1.5} />)}
                </div>
                <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover shadow-sm border-2 border-slate-100" />
                  <div>
                    <p className="font-semibold text-sm text-brand-navy">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* Part B: Industries Strip - Updated heading and styling */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="bg-white rounded-xl shadow-sm p-8 mb-16 border border-border">
          <p className="text-center text-2xl font-bold text-brand-navy mb-4">
            We Serve the Following Industries
          </p>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">If capturing more calls means more business, WinStreams turns every call into a booked opportunity.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {INDUSTRIES.map((industry, idx) => <div key={idx} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 bg-blue-50 rounded-full flex items-center justify-center">
                  <industry.icon size={28} weight="duotone" className="text-brand-navy" />
                </div>
                <p className="text-base font-semibold text-brand-navy">{industry.name}</p>
              </div>)}
          </div>
        </motion.div>

        {/* Part C: Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, idx) => <motion.div key={idx} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: idx * 0.1
        }}>
              <div className={`flex flex-col items-center ${stat.bg} p-6 md:p-8 text-center rounded-2xl`}>
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-2">{stat.value}</p>
                <p className="font-semibold text-brand-navy mb-1">{stat.label}</p>
                <p className="text-sm text-slate-600">{stat.subtext}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}