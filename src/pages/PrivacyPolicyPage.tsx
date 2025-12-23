import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | WinStreams";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "How WinStreams collects, uses, shares, and protects information.");
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p className="text-sm text-slate-500 mb-4">Last Updated: December 2025</p>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
            <p>
              WinStreams ("WinStreams," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our services, or interact with our AI receptionist and automation systems (the "Services").
            </p>
            
            <p>
              By accessing or using WinStreams, you agree to the terms of this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">a. Information You Provide Directly</h3>
            <p>You (and/or your business) may provide information such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, business name, email address, phone number, and contact details</li>
              <li>Business details submitted through onboarding questionnaires</li>
              <li>Call-handling preferences, scripts, service areas, pricing guidance, and business rules</li>
              <li>Calendar availability, booking rules, and scheduling preferences</li>
              <li>Information provided to configure, train, or operate the Services</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">b. Information Collected Automatically (Website)</h3>
            <p>When you visit our website, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, device information, and operating system</li>
              <li>Usage data (pages visited, time on page, referring URLs)</li>
              <li>Cookies and similar tracking technologies (see Section 9)</li>
            </ul>
            <p>This information is used for analytics, security, and service improvement.</p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">c. Call, Voice, and Message Data (AI Receptionist)</h3>
            <p>As part of providing the Services, WinStreams may process:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Voice inputs and real-time transcriptions to generate automated responses</li>
              <li>Call metadata (time, duration, caller number, routing outcomes)</li>
              <li>Message content exchanged with callers/customers (SMS or chat)</li>
              <li>Appointment and booking details</li>
            </ul>
            <p className="mt-4">
              <strong>Call Recordings:</strong> WinStreams processes and stores call recordings only when explicitly enabled by the client and configured in the Services. See Section 8 for recording compliance responsibilities.
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">d. Payment Information (If Applicable)</h3>
            <p>
              If you pay for Services, payment processing is handled by third-party processors. We do not store full payment card details on our servers.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, maintain, and improve the Services</li>
              <li>Configure AI workflows based on your business rules and preferences</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send service-related communications (e.g., onboarding, account notices, support messages)</li>
              <li>Monitor for security, prevent fraud/abuse, and enforce policies</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Data Practices</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>WinStreams does NOT sell personal information for monetary consideration.</li>
              <li>WinStreams does NOT share personal information with third parties for their independent marketing purposes.</li>
              <li>WinStreams may disclose information to service providers (vendors) who process data on our behalf under confidentiality and security obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">3. How We Share Information</h2>
            <p>We may share information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers strictly to operate the Services (e.g., hosting, AI processing, communications, scheduling integrations)</li>
              <li>With your consent or at your direction (e.g., connecting your CRM/calendar)</li>
              <li>To comply with applicable law, legal process, or lawful requests</li>
              <li>To protect the rights, safety, and security of WinStreams, our users, and the public</li>
            </ul>
            
            <p className="mt-4">
              <strong>SMS / Mobile Opt-In Protection (Important):</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All categories above exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">4. Roles: Client Data vs. Caller/Customer Data</h2>
            <p>WinStreams may process information in different roles:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Client Account Data:</strong> Information about you/your business used to operate your account.</li>
              <li><strong>Caller/Customer Data:</strong> Information collected from your callers/customers on your behalf to provide the Services (e.g., qualification, scheduling, confirmations). In these cases, the client generally controls what information is collected and how it is used within the configured workflow.</li>
            </ul>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">5. Data Retention</h2>
            <p>
              We retain personal information according to the schedule below unless a longer period is required by law or requested by the client:
            </p>
            
            <p className="mt-4"><strong>Service Data</strong> (configuration, preferences, scripts, rules):</p>
            <ul className="list-disc pl-6">
              <li>Retained for the duration of the service contract + 30 days after termination</li>
            </ul>

            <p className="mt-4"><strong>Call Metadata</strong> (timestamps, durations, participants, routing outcomes):</p>
            <ul className="list-disc pl-6">
              <li>Retained for 90 days by default</li>
              <li>Extended retention may be available by client request</li>
            </ul>

            <p className="mt-4"><strong>Call Recordings</strong> (if enabled):</p>
            <ul className="list-disc pl-6">
              <li>Retained according to client configuration</li>
              <li>Default retention: 30 days unless client specifies otherwise</li>
              <li>Client is responsible for ensuring recording retention complies with applicable laws</li>
            </ul>

            <p className="mt-4"><strong>Caller/Customer Data</strong> (booking/scheduling + conversation details):</p>
            <ul className="list-disc pl-6">
              <li>Retained only as long as needed for service delivery</li>
              <li>Default retention: 180 days after the last interaction, unless configured otherwise</li>
            </ul>

            <p className="mt-4">
              <strong>Deletion Requests:</strong> Clients may request deletion of data by contacting privacy@winstreams.com, subject to legal retention requirements and operational constraints.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">6. Data Security</h2>
            <p>
              We use reasonable technical and organizational safeguards designed to protect personal information, including secure hosting environments and access controls. No method of transmission or storage is completely secure, but we take data protection seriously.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">7. Your Privacy Rights (United States)</h2>
            <p>You may request to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access personal information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of personal information (where applicable)</li>
              <li>Opt out of certain communications</li>
            </ul>
            <p className="mt-4">
              To submit a request, contact privacy@winstreams.com. We may require identity verification and will respond within 30 days (or as required by law).
            </p>

            <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">California Residents (CCPA/CPRA)</h3>
            <p>If you are a California resident, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Know what personal information is collected</li>
              <li>Know whether personal information is sold or disclosed</li>
              <li>Request deletion of personal information</li>
              <li>Opt out of the sale/sharing of personal information (if applicable)</li>
              <li>Limit use and disclosure of sensitive personal information (if applicable)</li>
              <li>Non-discrimination for exercising your rights</li>
            </ul>
            <p className="mt-4">Submit requests to: privacy@winstreams.com</p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">8. Call Recording & Compliance (Client Responsibility)</h2>
            <p>
              WinStreams processes call recordings only when explicitly enabled by the client. The client is solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obtaining all required consents from callers</li>
              <li>Providing call recording disclosures/notifications</li>
              <li>Complying with all applicable state and federal recording laws, including two-party/all-party consent laws where applicable</li>
            </ul>
            <p className="mt-4">
              WinStreams does not record, store, or retain calls unless recording is enabled by the client within the Services.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">9. Cookies & Tracking Technologies</h2>
            <p>WinStreams may use cookies and similar technologies for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential functions (security, session management)</li>
              <li>Analytics (understanding site performance and usage)</li>
              <li>Marketing (where implemented, such as audience building or retargeting)</li>
            </ul>
            <p className="mt-4">
              You can manage cookie preferences through your browser settings. Some cookies are essential and may not be disabled without impacting site functionality.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">10. Third-Party Services & Subprocessors</h2>
            <p>
              WinStreams may integrate with third-party platforms (e.g., calendars, CRMs, messaging providers, payment processors). We are not responsible for the privacy practices of third parties.
            </p>
            <p className="mt-4">We use categories of subprocessors such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cloud hosting and infrastructure</li>
              <li>AI processing and communications providers</li>
              <li>Calendar and CRM integrations</li>
              <li>Payment processing (if applicable)</li>
              <li>Analytics tools (if applicable)</li>
            </ul>
            <p className="mt-4">
              A current list of subprocessors is available upon request by contacting privacy@winstreams.com.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">11. Healthcare Data (BAA / HIPAA)</h2>
            <p>
              If a client uses WinStreams to process Protected Health Information (PHI) as defined by HIPAA, WinStreams can provide a Business Associate Agreement (BAA) where appropriate. Healthcare clients should contact privacy@winstreams.com before using WinStreams for PHI-related workflows.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">12. Incident & Breach Notification</h2>
            <p>
              In the event of a confirmed or reasonably suspected security incident affecting personal information, WinStreams will notify clients and affected parties as required by applicable law. Clients will be notified promptly upon discovery of an incident that impacts their data or their callers/customers' data.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">13. Children's Privacy</h2>
            <p>
              WinStreams is not intended for individuals under 18. We do not knowingly collect personal information from children. If we learn we have collected such information, we will delete it promptly.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be reflected by the "Last Updated" date above. Continued use of the Services after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-xl font-semibold text-slate-900 mt-10 mb-4">15. Contact Us for Privacy Matters</h2>
            <p>For privacy requests or questions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: privacy@winstreams.com</li>
              <li>Mailing Address: [INSERT YOUR LEGAL BUSINESS ADDRESS]</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
