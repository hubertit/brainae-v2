import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BRAINAE University's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our online educational platform.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-primary-100">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="mb-4">
                    BRAINAE University ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our online learning platform and use our services.
                  </p>
                  <p>
                    As an online-only university, we understand the importance of data privacy and security in digital education. This policy applies to all information collected through our website, learning management system, and related services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                  <p className="mb-4">We may collect the following types of personal information:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Name, email address, phone number, and mailing address</li>
                    <li>Date of birth and government-issued identification numbers</li>
                    <li>Academic records, transcripts, and educational history</li>
                    <li>Payment information and billing details</li>
                    <li>Student ID numbers and enrollment information</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Technical Information</h3>
                  <p className="mb-4">When you access our online platform, we automatically collect:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Learning activity and course progress data</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">We use the collected information for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>To provide, maintain, and improve our online educational services</li>
                    <li>To process applications, enrollments, and course registrations</li>
                    <li>To deliver course content and manage your learning experience</li>
                    <li>To communicate with you about your academic progress, courses, and university updates</li>
                    <li>To process payments and manage financial transactions</li>
                    <li>To maintain academic records and issue certificates and degrees</li>
                    <li>To comply with legal obligations and accreditation requirements</li>
                    <li>To analyze usage patterns and improve our platform functionality</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="mb-4">We do not sell your personal information. We may share your information only in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Service Providers:</strong> With third-party vendors who assist in operating our platform, processing payments, or providing support services</li>
                    <li><strong>Accreditation Bodies:</strong> With accrediting organizations as required for institutional accreditation</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Academic Institutions:</strong> For transcript requests and verification purposes</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure authentication and access controls</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure backup and disaster recovery procedures</li>
                  </ul>
                  <p>
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                  <p className="mb-4">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li><strong>Access:</strong> Request access to your personal information we hold</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal and academic record retention requirements</li>
                    <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications (academic communications will continue)</li>
                    <li><strong>Account Settings:</strong> Update your preferences through your student portal account</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">
                    Our online platform uses cookies and similar tracking technologies to enhance your experience, analyze usage, and support platform functionality. You can control cookie preferences through your browser settings, though this may affect platform functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
                  <p className="mb-4">
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Academic records are retained in accordance with accreditation and legal requirements, which may extend beyond your enrollment period.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
                  <p className="mb-4">
                    As an online university serving students worldwide, your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                  <p className="mb-4">
                    Our services are intended for individuals who are at least 18 years of age or the age of majority in their jurisdiction. We do not knowingly collect personal information from children under 18. If we become aware that we have collected information from a child under 18, we will take steps to delete such information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                  <p className="mb-4">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2"><strong>BRAINAE University</strong></p>
                    <p className="mb-2">Email: <a href="mailto:privacy@brainae.edu" className="text-primary hover:underline">privacy@brainae.edu</a></p>
                    <p className="mb-2">Phone: <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a></p>
                    <p>Address: 123 University Avenue, City, Country 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

