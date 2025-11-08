import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, {
  faBook,
  faSearch,
  faDatabase,
  faLaptopCode,
  faGraduationCap,
  faArrowRight,
} from '../components/Icon';

export const metadata = {
  title: 'E-Library | Brainae University',
  description: 'Access Brainae University\'s extensive online library resources, research databases, e-books, journals, and academic materials for students and faculty.',
};

export default function LibraryPage() {
  const libraryFeatures = [
    {
      icon: faBook,
      title: 'E-Books Collection',
      description: 'Access thousands of digital books across all academic disciplines',
    },
    {
      icon: faDatabase,
      title: 'Research Databases',
      description: 'Comprehensive databases for academic research and scholarly articles',
    },
    {
      icon: faSearch,
      title: 'Advanced Search',
      description: 'Powerful search tools to find exactly what you need quickly',
    },
    {
      icon: faGraduationCap,
      title: 'Academic Journals',
      description: 'Access to peer-reviewed journals and academic publications',
    },
  ];

  const resourceCategories = [
    {
      title: 'Business & Economics',
      resources: ['Business journals', 'Economic databases', 'Case studies', 'Market research'],
    },
    {
      title: 'Health Sciences',
      resources: ['Medical journals', 'Health databases', 'Clinical studies', 'Research papers'],
    },
    {
      title: 'Science & Technology',
      resources: ['Scientific journals', 'Technical databases', 'Research papers', 'Conference proceedings'],
    },
    {
      title: 'Social Sciences',
      resources: ['Social science journals', 'Psychology databases', 'Sociology resources', 'Research studies'],
    },
    {
      title: 'Education',
      resources: ['Education journals', 'Teaching resources', 'Curriculum materials', 'Research publications'],
    },
    {
      title: 'Bible Studies',
      resources: ['Theological journals', 'Biblical studies resources', 'Religious texts', 'Academic publications'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">E-Library</h1>
          <p className="text-xl text-primary-100">
            Access our extensive digital library resources and research materials
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Brainae University E-Library</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our online library provides students and faculty with 24/7 access to a vast collection of digital resources,
              including e-books, academic journals, research databases, and multimedia content. As an online-only university,
              we ensure all learning materials are accessible from anywhere in the world.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>Library Access:</strong> All enrolled students and faculty members have full access to our e-library resources
                through the student portal. Use your university credentials to log in and explore our collection.
              </p>
              <a
                href="/student"
                className="inline-flex items-center text-primary hover:text-primary-600 font-semibold"
              >
                Access Library via Student Portal
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Library Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {libraryFeatures.map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors">
                  <Icon icon={feature.icon} className="text-primary mb-4" size="2x" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Resources by School</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => (
                <div key={index} className="border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.resources.map((resource, rIndex) => (
                      <li key={rIndex} className="flex items-start text-gray-600 text-sm">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{resource}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access Information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Access the Library</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Students</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">1.</span>
                    <span>Log in to your Student Portal using your university credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">2.</span>
                    <span>Navigate to the "Library" or "Resources" section</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">3.</span>
                    <span>Browse collections by subject, search for specific materials, or access databases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">4.</span>
                    <span>Download e-books, access journal articles, and use research tools</span>
                  </li>
                </ol>
                <div className="mt-6">
                  <a
                    href="/student"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded hover:bg-primary-600 transition-colors"
                  >
                    Go to Student Portal
                    <Icon icon={faArrowRight} className="ml-2" />
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For Faculty</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">1.</span>
                    <span>Access the library through the Faculty Portal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">2.</span>
                    <span>Request specific resources or materials for your courses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">3.</span>
                    <span>Access advanced research databases and academic journals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-3">4.</span>
                    <span>Use library resources for course development and research</span>
                  </li>
                </ol>
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    Contact Library Services
                    <Icon icon={faArrowRight} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Library Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Assistance</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get help with research queries, database navigation, and finding relevant academic sources.
                </p>
                <a href="/contact" className="text-primary hover:text-primary-600 text-sm font-semibold">
                  Request Assistance →
                </a>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Resource Requests</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Request specific books, articles, or resources that are not currently available in our collection.
                </p>
                <a href="/contact" className="text-primary hover:text-primary-600 text-sm font-semibold">
                  Submit Request →
                </a>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Citation Help</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get assistance with proper citation formats and academic writing standards.
                </p>
                <a href="/contact" className="text-primary hover:text-primary-600 text-sm font-semibold">
                  Learn More →
                </a>
              </div>
              <div className="border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Support</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Need help accessing library resources or experiencing technical issues? We're here to help.
                </p>
                <a href="/contact" className="text-primary hover:text-primary-600 text-sm font-semibold">
                  Get Support →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Hours & Contact */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Library Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Virtual Library Hours</h3>
                <div className="space-y-2 text-primary-100">
                  <p><strong>Monday - Friday:</strong> 24/7 Access</p>
                  <p><strong>Saturday - Sunday:</strong> 24/7 Access</p>
                  <p className="mt-4 text-sm">
                    As an online library, our resources are available 24/7. Research assistance is available during business hours.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Library Services</h3>
                <div className="space-y-3 text-primary-100">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:library@brainae.edu" className="underline hover:text-white">
                      library@brainae.edu
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+15551234567" className="underline hover:text-white">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p className="mt-4">
                    <a
                      href="/contact"
                      className="inline-block bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition-colors font-semibold"
                    >
                      Contact Us
                    </a>
                  </p>
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

