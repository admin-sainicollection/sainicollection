import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="w-full bg-slate-50 border-b border-slate-200 py-8">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <a href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </a>
          <h1 className="text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-slate-600 mt-3">Last Updated: April 23, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="w-full py-16 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">1. Introduction</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Saini Collection ("Company", "we", "us", or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">2. Information Collection</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with our team. This may include your name, email address, phone number, company information, and project details.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-3 text-slate-600 text-lg">
              <li>Responding to your inquiries and providing customer support</li>
              <li>Sending project updates and service-related notifications</li>
              <li>Improving our website and services</li>
              <li>Marketing and promotional purposes with your consent</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">4. Data Security</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We take data security seriously and use industry-standard security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">5. Third-Party Services</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external websites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">6. Your Rights</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. If you have any questions or wish to exercise these rights, please contact us at <a href="mailto:connect@sainicollection.com" className="text-blue-600 hover:text-blue-700">connect@sainicollection.com</a>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">7. Changes to This Policy</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">8. Contact Us</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <p className="font-semibold text-slate-900">Saini Collection</p>
              <p className="text-slate-600">Email: <a href="mailto:connect@sainicollection.com" className="text-blue-600 hover:text-blue-700">connect@sainicollection.com</a></p>
              <p className="text-slate-600">Phone: +91 78383 07318</p>
              <p className="text-slate-600">Location: Gurgaon, India</p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-white py-12 mt-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <p className="text-slate-400">© 2024 SAINI COLLECTION. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
