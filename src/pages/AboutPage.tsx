import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Check } from "lucide-react";

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Section 1: Hero - The Problem */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-[#0A1B5F] mb-8">
                You shouldn't have to choose between running your business and answering your phone.
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-4">
                Every local operator knows the feeling. You're finishing a job, meeting with a client, or finally sitting down to eat—and your phone rings. You let it go to voicemail. That was probably a new job.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-4">
                By the end of the week, you've lost track of how many calls you missed. By the end of the month, you're looking at real money left on the table.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-600">
                The problem isn't that you're ignoring your business. It's that you can't be in two places at once.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Our Approach */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A1B5F] mb-6">
                We built this to handle the phone. Nothing more. Nothing less.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-4">
                WinStreams handles your phone when you can't. It answers calls, books appointments, and covers the basics—without you hiring staff or managing another system.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-6">
                Here's what makes it work:
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D10C8B] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#0A1B5F]">Built for operators, not tech teams:</strong>{" "}
                    <span className="text-slate-600">Every feature exists because someone in the field actually needed it.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D10C8B] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#0A1B5F]">Live in minutes, not weeks:</strong>{" "}
                    <span className="text-slate-600">No coding, no dashboards, no training videos.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D10C8B] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#0A1B5F]">Handles calls without replacing you:</strong>{" "}
                    <span className="text-slate-600">We take care of routine intake so you can focus on the work only you can do.</span>
                  </div>
                </li>
              </ul>

              <div className="border-l-4 border-[#D10C8B] pl-6 my-12">
                <p className="text-lg font-semibold text-[#0A1B5F] mb-2">Our Mission:</p>
                <p className="text-lg italic text-[#0A1B5F]">
                  To help local business owners reclaim their time, stop losing revenue to missed calls, and run a business that doesn't require them to be on-call 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The People */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A1B5F] mb-6">
                The People
              </h2>
              
              <h3 className="text-xl md:text-2xl font-semibold text-[#0A1B5F] mb-4">
                Dean Laster, Founder
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 mb-8">
                Dean spent years working with local service businesses and saw them losing work simply because they couldn't answer the phone while on a job. WinStreams started as the solution to that problem—giving operators their time back without forcing them to manage complicated software.
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-[#0A1B5F] mb-4">
                The Support Team
              </h3>
              <ul className="space-y-6">
                <li>
                  <strong className="text-[#0A1B5F]">Sarah – Client Success:</strong>{" "}
                  <span className="text-slate-600">Sarah gets you up and running and ensures WinStreams fits your specific workflow.</span>
                </li>
                <li>
                  <strong className="text-[#0A1B5F]">Mike – Operations:</strong>{" "}
                  <span className="text-slate-600">Mike keeps calls routing correctly so every customer gets through, even when you're slammed.</span>
                </li>
                <li>
                  <strong className="text-[#0A1B5F]">Rachel – Support:</strong>{" "}
                  <span className="text-slate-600">Rachel troubleshoots issues and helps you customize exactly how the system handles your calls.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: What Changes For You */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-prose mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#0A1B5F] mb-6">
                When you use WinStreams, here's what actually changes:
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D10C8B] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#0A1B5F]">Fewer missed calls, fewer lost jobs:</strong>{" "}
                    <span className="text-slate-600">Every call gets answered, even when you're busy.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D10C8B] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#0A1B5F]">More booked appointments:</strong>{" "}
                    <span className="text-slate-600">Customers book with whoever picks up first. Now, that's you.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D10C8B] shrink-0 mt-1" />
                  <div>
                    <strong className="text-[#0A1B5F]">Your phone stops controlling your day:</strong>{" "}
                    <span className="text-slate-600">You gain the peace of mind knowing your business is handled, even when you aren't available.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
