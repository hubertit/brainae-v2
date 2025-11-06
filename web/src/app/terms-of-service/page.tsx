import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "BRAINAE University's Terms of Service. Understand your rights and responsibilities as a student using our online educational platform.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-primary-100">
            Please read these terms carefully before using our services
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">
                    By accessing and using BRAINAE University's online learning platform, website, and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our services.
                  </p>
                  <p>
                    These terms apply to all users, including students, faculty, staff, and visitors to our online platform. As an online-only university, all interactions and services occur through our digital platform.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                  <p className="mb-4">
                    BRAINAE University provides online educational services, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Online degree programs, certificates, and courses</li>
                    <li>Access to learning management systems and course materials</li>
                    <li>Academic support services and student resources</li>
                    <li>Digital library and research resources</li>
                    <li>Student portal and administrative services</li>
                    <li>Virtual academic advising and career services</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Enrollment and Academic Policies</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Admission and Enrollment</h3>
                  <p className="mb-4">
                    Admission to BRAINAE University is subject to meeting our academic requirements and completing the application process. Enrollment in courses is subject to availability and prerequisite requirements.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Academic Integrity</h3>
                  <p className="mb-4">
                    All students must maintain the highest standards of academic integrity. Prohibited conduct includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Plagiarism and unauthorized collaboration</li>
                    <li>Cheating on examinations or assignments</li>
                    <li>Fabrication or falsification of academic work</li>
                    <li>Unauthorized use of materials during assessments</li>
                    <li>Impersonation or misrepresentation</li>
                  </ul>
                  <p>
                    Violations of academic integrity may result in course failure, suspension, or expulsion.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3 Course Completion and Grades</h3>
                  <p className="mb-4">
                    Students must complete all course requirements as specified in the course syllabus. Grades are assigned based on performance and are final unless an error is identified through the official grade appeal process.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Accounts and Responsibilities</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Account Creation</h3>
                  <p className="mb-4">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 User Conduct</h3>
                  <p className="mb-4">You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Use the platform for any illegal or unauthorized purpose</li>
                    <li>Interfere with or disrupt the platform's operation or security</li>
                    <li>Attempt to gain unauthorized access to any part of the platform</li>
                    <li>Share your account credentials with others</li>
                    <li>Harass, threaten, or harm other users or university personnel</li>
                    <li>Post or transmit any content that is offensive, defamatory, or violates others' rights</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 University Content</h3>
                  <p className="mb-4">
                    All course materials, lectures, assignments, and other content provided through our platform are the property of BRAINAE University or its licensors and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without authorization.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Student Work</h3>
                  <p className="mb-4">
                    Students retain ownership of their original work submitted for courses. However, by submitting work, you grant the university a license to use, reproduce, and display your work for educational and administrative purposes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment and Refund Policy</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Tuition and Fees</h3>
                  <p className="mb-4">
                    Tuition and fees are due according to the payment schedule provided at enrollment. Failure to pay may result in course access restrictions, late fees, or enrollment cancellation.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Refunds</h3>
                  <p className="mb-4">
                    Refund policies are outlined in the Student Handbook and enrollment agreement. Refund eligibility depends on the timing of withdrawal and course completion status. Please contact the Office of Student Accounts for specific refund information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Technology Requirements</h2>
                  <p className="mb-4">
                    As an online-only university, students are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Maintaining reliable internet connectivity</li>
                    <li>Having access to a computer or device meeting minimum system requirements</li>
                    <li>Installing required software and applications</li>
                    <li>Ensuring their technology is compatible with our learning management system</li>
                    <li>Backing up their work and data</li>
                  </ul>
                  <p>
                    The university is not responsible for technical issues arising from students' equipment or internet connectivity.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
                  <p className="mb-4">
                    Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
                  <p className="mb-4">
                    To the maximum extent permitted by law, BRAINAE University shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, profits, or business opportunities, arising from your use of our services.
                  </p>
                  <p>
                    Our total liability for any claims related to our services shall not exceed the amount you paid for the specific course or service giving rise to the claim.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimers</h2>
                  <p className="mb-4">
                    Our services are provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>The platform will be uninterrupted, secure, or error-free</li>
                    <li>Defects will be corrected</li>
                    <li>The platform is free of viruses or other harmful components</li>
                    <li>Course content will meet your specific needs or expectations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                  <p className="mb-4">
                    We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, for any reason including violation of these Terms of Service, academic misconduct, or failure to meet financial obligations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                  <p className="mb-4">
                    We may modify these Terms of Service at any time. Material changes will be communicated through email or platform notifications. Your continued use of our services after changes become effective constitutes acceptance of the modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
                  <p className="mb-4">
                    These Terms of Service are governed by the laws of the jurisdiction in which BRAINAE University operates. Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration or in the appropriate courts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                  <p className="mb-4">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="mb-2"><strong>BRAINAE University</strong></p>
                    <p className="mb-2">Email: <a href="mailto:legal@brainae.edu" className="text-primary hover:underline">legal@brainae.edu</a></p>
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

