import Header from '../components/Header';
import Footer from '../components/Footer';
import CertificateVerificationForm from '../components/CertificateVerificationForm';
import Icon, { faCertificate, faFileAlt, faCheckCircle, faEnvelope } from '../components/Icon';

export const metadata = {
  title: 'Verify Certificate | BRAINAE University',
  description: 'Verify the authenticity of certificates, degrees, transcripts, and admission letters issued by BRAINAE University. Enter your document ID to validate.',
};

export default function VerifyCertificatePage() {
  const documentTypes = [
    {
      icon: faCertificate,
      type: 'degree',
      title: 'Degree',
      description: 'Check Degree Status',
    },
    {
      icon: faFileAlt,
      type: 'transcript',
      title: 'Transcript',
      description: 'Verify Transcript',
    },
    {
      icon: faCheckCircle,
      type: 'towhom',
      title: 'Authorization',
      description: 'Certify Authorization',
    },
    {
      icon: faEnvelope,
      type: 'admissionletter',
      title: 'Admission Letter',
      description: 'Validate Admission Letter',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Certificate Verification</h1>
          <p className="text-xl text-primary-100">
            Verify the authenticity of documents issued by BRAINAE University
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-gray-600 mb-12">
              Please select the document type, enter the document ID, and validate to verify the document.
            </p>

            {/* Document Type Selection */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {documentTypes.map((docType) => (
                <div
                  key={docType.type}
                  className="border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors cursor-pointer text-center"
                >
                  <Icon icon={docType.icon} className="text-primary mb-3 mx-auto" size="2x" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{docType.title}</h3>
                  <p className="text-sm text-gray-600">{docType.description}</p>
                </div>
              ))}
            </div>

            {/* Verification Form */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Document Validation</h2>
              <CertificateVerificationForm />
            </div>

            {/* Information Section */}
            <div className="mt-12 bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Verify Your Document</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-3">1.</span>
                  <p>Select the type of document you want to verify (Degree, Transcript, Authorization, or Admission Letter).</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-3">2.</span>
                  <p>Enter your document ID or registration number in the field provided.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-3">3.</span>
                  <p>Click the "Validate" button to verify the authenticity of your document.</p>
                </div>
                <div className="flex items-start">
                  <span className="text-primary font-bold mr-3">4.</span>
                  <p>If the document is valid, you will see the verification details including student name, program, and issue date.</p>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-8 bg-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-primary-100 mb-6">
                If you're having trouble verifying your document or have questions about the verification process, please contact us.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

