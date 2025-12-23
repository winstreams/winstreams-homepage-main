import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const topicOptions = [
  { value: "sales", label: "Sales / Demo Request", helper: "Tell us briefly about your business and call volume." },
  { value: "support", label: "Support for Existing Account", helper: "Please include the email on your account and what's not working." },
  { value: "partnership", label: "Partnership Inquiry", helper: "Tell us what you do and how you'd like to partner." },
  { value: "other", label: "Other Question", helper: "Tell us what you're looking to learn." },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | WinStreams";
    
    return () => {
      document.title = "WinStreams";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    if (!data.name?.trim()) {
      setError("Name is required.");
      return;
    }
    if (!data.topic?.trim()) {
      setError("Please select a topic.");
      return;
    }
    if (!data.businessName?.trim()) {
      setError("Business name is required.");
      return;
    }
    if (!data.email?.trim()) {
      setError("Email is required.");
      return;
    }
    if (!data.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!data.message?.trim()) {
      setError("Message is required.");
      return;
    }

    setLoading(true);

    try {
      console.log("Submitting contact form:", data);
      
      // TODO: Replace with actual API call when backend is ready
      await new Promise(res => setTimeout(res, 500));

      setSubmitted(true);
      setSelectedTopic("");
      (e.target as HTMLFormElement).reset();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const currentHelper = topicOptions.find(t => t.value === selectedTopic)?.helper;

  const inputClassName = "w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* SECTION 1: HERO */}
        <section className="py-16 md:py-24 lg:py-32 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-brand-navy mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and we'll route you to the right team.
            </p>
          </div>
        </section>

        {/* SECTION 2: CONTACT FORM + TRUST BLOCK */}
        <section className="py-12 md:py-24 bg-muted">
          <div className="max-w-5xl mx-auto px-6">
            {/* Mobile Trust Chip - Only visible on mobile */}
            <div className="lg:hidden flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 text-sm text-slate-600 rounded-full bg-slate-50 px-4 py-2">
                ⚡ Replies in under 1 business day.
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Form Column - 2/3 width on desktop */}
              <div className="lg:col-span-2">
                {submitted && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4"
                  >
                    <p className="text-base font-medium text-green-900">
                      Thanks! We'll be in touch within 24 hours.
                    </p>
                  </div>
                )}

                {error && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4"
                  >
                    <p className="text-base font-medium text-red-900">{error}</p>
                  </div>
                )}

                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  action="/thank-you"
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-background rounded-2xl p-6 md:p-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-brand-navy mb-2">
                      How can we help? <span className="text-primary">*</span>
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      required
                      value={selectedTopic}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className={`${inputClassName} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] bg-[length:1rem] pr-10`}
                    >
                      <option value="">Select a topic</option>
                      {topicOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-brand-navy mb-2">
                      Business Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Your business name"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-2">
                      Phone <span className="text-muted-foreground">(Optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      autoComplete="off"
                      placeholder="Your message..."
                      className={`${inputClassName} resize-y`}
                    />
                    {currentHelper && (
                      <p className="text-sm text-slate-500 mt-2">{currentHelper}</p>
                    )}
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center rounded-full bg-brand-magenta px-8 py-4 text-lg font-semibold text-white shadow-lg hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-transform w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {loading ? "Sending..." : "Send Request"}
                    </button>
                    <p className="text-sm text-slate-500 mt-3">
                      We respect your inbox. No spam, ever.
                    </p>
                  </div>
                </form>
              </div>

              {/* Trust Block Column - 1/3 width on desktop */}
              <aside className="lg:col-span-1">
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8 max-w-sm mx-auto lg:mx-0 lg:sticky lg:top-24">
                  <h3 className="text-xl md:text-2xl font-semibold text-brand-navy mb-6">
                    Why WinStreams?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                      <span className="flex-shrink-0 text-lg">🚀</span>
                      <span><strong>Fast response:</strong> We reply in under 1 business day.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                      <span className="flex-shrink-0 text-lg">📞</span>
                      <span><strong>Sales:</strong> Request a demo to see the AI receptionist in action.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700 leading-relaxed">
                      <span className="flex-shrink-0 text-lg">🛟</span>
                      <span><strong>Support:</strong> Priority help for active customers.</span>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT HAPPENS NEXT */}
        <section className="py-12 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy mb-6">
              What Happens Next
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We respond within one business day and usually much faster. You'll get a clear answer to your question and guidance on next steps, so you know exactly what to expect before we ever hop on a call.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
