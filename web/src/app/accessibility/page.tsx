import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, { faUsers, faCog, faLaptopCode } from '../components/Icon';

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "BRAINAE University's commitment to digital accessibility. Learn about our accessibility features, accommodations, and how we ensure an inclusive learning environment for all students.",
  openGraph: {
    title: "Accessibility Statement - BRAINAE University",
    description: "Our commitment to providing an inclusive learning environment for all",
  },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Accessibility</h1>
          <p className="text-xl text-primary-100">
            Committed to providing an accessible online learning environment
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
                  <p className="mb-4">
                    BRAINAE University is committed to ensuring that our online learning platform and educational services are accessible to all students, including those with disabilities. As an online-only university, we recognize the importance of digital accessibility in providing equal educational opportunities.
                  </p>
                  <p>
                    We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and applicable accessibility laws to ensure our platform is usable by everyone.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Features</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <Icon icon={faLaptopCode} className="text-primary mb-3" size="2x" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Keyboard Navigation</h3>
                      <p className="text-gray-600">
                        Our platform is fully navigable using only a keyboard. All interactive elements can be accessed and activated without a mouse.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <Icon icon={faUsers} className="text-primary mb-3" size="2x" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Screen Reader Support</h3>
                      <p className="text-gray-600">
                        Content is structured with proper headings, labels, and alternative text to work seamlessly with screen readers and assistive technologies.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <Icon icon={faCog} className="text-primary mb-3" size="2x" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Text Alternatives</h3>
                      <p className="text-gray-600">
                        Images, videos, and multimedia content include descriptive alternative text and captions for users who cannot see or hear the content.
                      </p>
                    </div>
                    <div className="border border-gray-200 p-6 rounded-lg">
                      <Icon icon={faCog} className="text-primary mb-3" size="2x" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Adjustments</h3>
                      <p className="text-gray-600">
                        Users can adjust text size, contrast, and color schemes to meet their individual visual needs through browser settings and platform preferences.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessible Course Materials</h2>
                  <p className="mb-4">
                    We work to ensure that all course materials are accessible:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Documents are provided in accessible formats (PDFs with proper tagging, Word documents with headings)</li>
                    <li>Videos include closed captions and transcripts</li>
                    <li>Audio content is accompanied by transcripts</li>
                    <li>Interactive content is keyboard accessible</li>
                    <li>Color is not used as the sole means of conveying information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Assistive Technologies</h2>
                  <p className="mb-4">
                    Our platform is designed to work with a variety of assistive technologies, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                    <li>Screen magnification software</li>
                    <li>Voice recognition software</li>
                    <li>Alternative input devices</li>
                    <li>Browser accessibility extensions and plugins</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Accommodations</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Requesting Accommodations</h3>
                  <p className="mb-4">
                    Students with disabilities who need accommodations should contact our Office of Student Accessibility Services. We provide reasonable accommodations to ensure equal access to educational programs and services.
                  </p>
                  <p className="mb-4">
                    Accommodations may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Extended time for assignments and examinations</li>
                    <li>Alternative format course materials</li>
                    <li>Assistive technology support</li>
                    <li>Note-taking assistance</li>
                    <li>Sign language interpreters for virtual meetings</li>
                    <li>Other reasonable accommodations based on individual needs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Accessibility Issues</h2>
                  <p className="mb-4">
                    If you encounter any accessibility barriers on our platform or have suggestions for improvement, please contact us. We are committed to addressing accessibility issues promptly.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <p className="mb-2"><strong>Office of Student Accessibility Services</strong></p>
                    <p className="mb-2">Email: <a href="mailto:accessibility@brainae.edu" className="text-primary hover:underline">accessibility@brainae.edu</a></p>
                    <p className="mb-2">Phone: <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a></p>
                    <p>Available: Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ongoing Improvements</h2>
                  <p className="mb-4">
                    We continuously work to improve the accessibility of our platform through:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Regular accessibility audits and testing</li>
                    <li>Training for faculty and staff on accessible content creation</li>
                    <li>Student feedback and accessibility testing</li>
                    <li>Staying current with accessibility standards and best practices</li>
                    <li>Updating platform features to enhance accessibility</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Content</h2>
                  <p className="mb-4">
                    Some course materials may include content from third-party sources. While we strive to ensure all materials are accessible, we may not have direct control over third-party content. If you encounter accessibility issues with third-party content, please contact your instructor or the Office of Student Accessibility Services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessibility Statement Updates</h2>
                  <p className="mb-4">
                    We regularly review and update our accessibility practices. This statement will be updated to reflect improvements and changes to our accessibility efforts.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                  <p className="mb-4">
                    For questions, concerns, or to request accessibility accommodations:
                  </p>
                  <div className="bg-primary text-white p-6 rounded-lg">
                    <p className="mb-2"><strong>BRAINAE University</strong></p>
                    <p className="mb-2">Office of Student Accessibility Services</p>
                    <p className="mb-2">Email: <a href="mailto:accessibility@brainae.edu" className="text-white underline hover:text-gray-200">accessibility@brainae.edu</a></p>
                    <p className="mb-2">Phone: <a href="tel:+15551234567" className="text-white underline hover:text-gray-200">+1 (555) 123-4567</a></p>
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

