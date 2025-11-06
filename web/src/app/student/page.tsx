import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StudentLogin from '../components/StudentLogin';

export const metadata: Metadata = {
  title: "Student Portal - Login",
    description: "Access your student portal to view courses, grades, assessments, and more at BRAINAE University.",
  openGraph: {
    title: "Student Portal - BRAINAE University",
    description: "Login to access your courses, grades, and academic resources",
  },
};

export default function StudentPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Student Portal</h1>
            <p className="text-lg sm:text-xl text-primary-100">
              Access your courses, grades, assessments, and academic resources
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <StudentLogin />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              What You Can Access
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'My Courses',
                  description: 'View all your enrolled courses, access course materials, and track your progress',
                },
                {
                  title: 'Grades & Transcripts',
                  description: 'Check your grades, view transcripts, and download official documents',
                },
                {
                  title: 'Assessments',
                  description: 'Take exams, submit assignments, view feedback, and track submission deadlines',
                },
                {
                  title: 'E-Library',
                  description: 'Access digital library resources, e-books, journals, and research materials',
                },
                {
                  title: 'Financial Information',
                  description: 'View tuition fees, payment history, and financial aid information',
                },
                {
                  title: 'Profile & Settings',
                  description: 'Update your personal information, preferences, and account settings',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-gray-600 mb-6">
              If you're having trouble accessing your account or need assistance, please contact our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-600 transition-colors inline-flex items-center justify-center"
              >
                Contact Support
              </a>
              <a
                href="/admissions"
                className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded hover:border-primary hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                New Student? Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

