import { useEffect } from "react";

export function TermsOfServicePage() {
  useEffect(() => {
    document.title = "Terms of Service | WinStreams";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "The terms that govern your use of WinStreams.");
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-sm text-slate-500 mb-4">Last Updated: December 2025</p>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>
            These Terms of Service ("Terms") govern your access to and use of the WinStreams website, platform, products, and services (collectively, the "Services"). "WinStreams," "we," "us," and "our" refer to WinStreams. "Client," "you," and "your" refer to the person or entity using the Services.
          </p>
          <p>
            By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. Services Overview</h2>
          <p>
            WinStreams provides AI receptionist and business automation services, including call handling, messaging, scheduling, and integrations with third-party tools (e.g., calendars, CRMs, communication providers). Features may change over time.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Eligibility & Account Responsibility</h2>
          <p>
            You must be at least 18 years old and have authority to bind your business (if applicable). You are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of account credentials</li>
            <li>All activity occurring under your account</li>
            <li>Providing accurate, current information</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Client Responsibilities (Critical)</h2>
          <p>
            You are responsible for how you deploy and configure WinStreams, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensuring your call flows, scripts, pricing, and business rules are accurate</li>
            <li>Monitoring outcomes and making configuration updates as needed</li>
            <li>Complying with all applicable laws, regulations, and industry rules</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">Recording, Consent, and Communications Compliance</h3>
          <p>
            If you enable call recording, SMS, or automated messaging, you are solely responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing required disclosures to callers and customers</li>
            <li>Obtaining all required consents (including where all-party consent applies)</li>
            <li>Complying with federal/state recording laws and consumer protection laws</li>
            <li>Complying with SMS requirements (including opt-in/opt-out and prohibited content)</li>
          </ul>
          <p>
            WinStreams does not provide legal advice. You should consult counsel for your specific use case.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Prohibited Uses</h2>
          <p>You may not use the Services to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any law or regulation</li>
            <li>Send spam or unsolicited messages</li>
            <li>Misrepresent your identity, business, or affiliation</li>
            <li>Collect sensitive personal information unlawfully (including passwords, financial account credentials, or government IDs unless legally required and properly secured)</li>
            <li>Harass, threaten, or harm others</li>
            <li>Transmit malware or attempt to gain unauthorized access to systems</li>
            <li>Interfere with or disrupt the Services</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. AI Limitations & No Guarantee of Outcomes</h2>
          <p>
            AI systems may generate incorrect outputs, misunderstand requests, or fail in unexpected ways. WinStreams does not guarantee:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any specific revenue, booking volume, conversion rate, or business result</li>
            <li>Uninterrupted or error-free operation</li>
          </ul>
          <p>
            You are responsible for reviewing and monitoring performance and for decisions made based on outputs.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Third-Party Services & Integrations</h2>
          <p>
            The Services may integrate with third-party platforms (e.g., Google Calendar, CRMs, communications providers). WinStreams is not responsible for third-party services, including downtime, data handling, or changes to their APIs, pricing, or policies.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Fees, Billing, and Payment</h2>
          <p>
            You agree to pay all fees associated with your plan and any applicable usage-based charges. Unless otherwise stated:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fees are non-refundable</li>
            <li>Late payments may result in suspension or termination</li>
            <li>Taxes may apply depending on your location</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. Intellectual Property</h2>
          <p>
            WinStreams retains all rights to the Services, software, designs, and content we provide. You retain rights to your business content (e.g., your scripts, business rules, and branding) that you submit, subject to the license below.
          </p>
          
          <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">License to Operate the Services</h3>
          <p>
            You grant WinStreams a limited license to host, use, process, and transmit your content solely to provide and improve the Services.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">9. Confidentiality</h2>
          <p>
            Each party may receive confidential information from the other. Both parties agree to protect confidential information using reasonable care and not disclose it except as needed to provide the Services or as required by law.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">10. Suspension & Termination</h2>
          <p>We may suspend or terminate your access if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You violate these Terms or the Acceptable Use Policy</li>
            <li>Your use creates security, legal, or operational risk</li>
            <li>Fees are unpaid</li>
          </ul>
          <p>
            You may stop using the Services at any time. Termination does not relieve you of payment obligations accrued before termination.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">11. Disclaimers</h2>
          <p className="uppercase">
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, WINSTREAMS DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">12. Limitation of Liability</h2>
          <p className="uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WINSTREAMS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL.
          </p>
          <p className="uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WINSTREAMS' TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE SERVICES WILL NOT EXCEED THE AMOUNT PAID BY YOU TO WINSTREAMS IN THE THREE (3) MONTHS BEFORE THE EVENT GIVING RISE TO THE CLAIM.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">13. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless WinStreams from claims, damages, liabilities, and expenses arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of the Services</li>
            <li>Your configuration or deployment of call flows, scripts, recordings, or messaging</li>
            <li>Your violation of laws or third-party rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">14. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Updates will be reflected by the "Last Updated" date above. Continued use of the Services after changes means you accept the updated Terms.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">15. Contact</h2>
          <p>Questions about these Terms:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: privacy@winstreams.com</li>
            <li>Mailing Address: [INSERT YOUR LEGAL BUSINESS ADDRESS]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
