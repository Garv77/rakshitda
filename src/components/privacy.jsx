import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

        <p className="mb-6 text-lg">
          At <strong>Neem Karoli Traders pvt ltd</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the personal information you share with us.
        </p>

        {/* Section 1 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Name, email address, phone number, and contact details</li>
            <li>Business or organization information (if applicable)</li>
            <li>Any inquiries or details shared via our contact forms or communication channels</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Provide and deliver our products and services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Improve our website, offerings, and customer experience</li>
            <li>Send updates or important notifications (only if you consent)</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Sharing of Information</h2>
          <p className="text-gray-700">
            We do not sell or rent your personal information to third parties. Your data may only be shared with trusted service providers who assist us in operating our business, and only as required.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p className="text-gray-700">
            We take appropriate measures to safeguard your personal information against unauthorized access, disclosure, alteration, or misuse.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Cookies</h2>
          <p className="text-gray-700">
            Our website may use cookies to improve user experience. You can choose to disable cookies through your browser settings.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p className="text-gray-700">
            You have the right to request access, correction, or deletion of your personal information at any time by contacting us.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Updates to This Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
          </p>
        </div>

        {/* Section 8 */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul className="mt-2 text-gray-700">
            <li>📞 +91-7465076529</li>
            <li>📞 +91-9412951628</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
