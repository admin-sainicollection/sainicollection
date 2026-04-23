import React from 'react';
import { ArrowLeft } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="w-full min-h-screen bg-white text-slate-900 font-sans">
      {/* Header */}
      <header className="w-full bg-slate-50 border-b border-slate-200 py-8">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <a href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-6">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </a>
          <h1 className="text-4xl sm:text-5xl font-bold">Terms & Conditions</h1>
          <p className="text-slate-600 mt-3">Last Updated: April 23, 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="w-full py-16 lg:py-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">1. Agreement to Terms</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">2. Use License</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on Saini Collection's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 text-lg">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">3. Disclaimer</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The materials on Saini Collection's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">4. Limitations</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In no event shall Saini Collection or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">5. Accuracy of Materials</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The materials appearing on the website could include technical, typographical, or photographic errors. Saini Collection does not warrant that any of the materials on the website are accurate, complete, or current. We may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">6. Links</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Saini Collection has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">7. Modifications</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Saini Collection may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">8. Governing Law</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">9. Service Description</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Saini Collection provides website design, development, and digital solutions. Services are provided on a project basis as agreed upon in writing. Project timelines, deliverables, and pricing are subject to the terms of the individual project agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">10. Payment Terms</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Payment terms for services will be outlined in the project agreement. Invoices are typically due within 30 days of issuance. Late payment may result in suspension of services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">11. Contact Information</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsAndConditions;
