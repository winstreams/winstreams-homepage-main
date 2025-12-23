import { useEffect } from "react";

export function AcceptableUsePage() {
  useEffect(() => {
    document.title = "Acceptable Use Policy | WinStreams";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Rules and restrictions for using WinStreams.");
    }
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-sm text-slate-500 mb-4">Last Updated: December 2025</p>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Acceptable Use Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>
            This Acceptable Use Policy ("AUP") explains rules for using WinStreams. It is incorporated into the WinStreams Terms of Service. If you violate this AUP, we may suspend or terminate your access.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. No Illegal, Harmful, or Abusive Use</h2>
          <p>You may not use WinStreams to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any law or regulation</li>
            <li>Harass, threaten, defame, or abuse others</li>
            <li>Promote violence or illegal activity</li>
            <li>Exploit or harm minors</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. No Spam or Unwanted Communications</h2>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Send unsolicited messages or robocalls</li>
            <li>Use purchased lists without proper consent</li>
            <li>Mislead recipients about who you are or why you are contacting them</li>
            <li>Fail to honor opt-out requests</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Recording & Consent Compliance</h2>
          <p>If you enable call recording, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide required disclosures</li>
            <li>Obtain all required consents</li>
            <li>Comply with all federal/state recording laws and consumer protection rules</li>
          </ul>
          <p>
            WinStreams may disable recording features if we believe your use creates legal risk.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">4. Sensitive Data Restrictions</h2>
          <p>
            Unless explicitly required for your lawful business purpose and properly secured, you may not use WinStreams to collect or process:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Government IDs, passport numbers, or SSNs</li>
            <li>Full payment card data</li>
            <li>Login credentials (passwords)</li>
            <li>Highly sensitive health data without appropriate agreements and safeguards (e.g., HIPAA/BAA where applicable)</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">5. Security & Platform Integrity</h2>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Probe, scan, or test vulnerabilities</li>
            <li>Bypass authentication or access controls</li>
            <li>Introduce malware or harmful code</li>
            <li>Interfere with or disrupt the Services</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">6. Misrepresentation</h2>
          <p>
            You may not impersonate another person or business, or misrepresent affiliation with WinStreams or any third party.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">7. Enforcement</h2>
          <p>We may investigate suspected violations and take action including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Feature restrictions (e.g., disabling messaging/recording)</li>
            <li>Suspension or termination</li>
            <li>Reporting to appropriate authorities when required</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">8. Reporting Abuse</h2>
          <p>Report abuse or suspected violations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: privacy@winstreams.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
