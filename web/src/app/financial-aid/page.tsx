import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, {
  faDollarSign,
  faGraduationCap,
  faFileAlt,
  faCheckCircle,
  faArrowRight,
  faCalendar,
} from '../components/Icon';

export const metadata: Metadata = {
  title: "Financial Aid & Scholarships",
  description: "Explore financial aid options and scholarships at BRAINAE University. Learn about available grants, scholarships, payment plans, and how to apply for financial assistance.",
  openGraph: {
    title: "Financial Aid & Scholarships at BRAINAE University",
    description: "Explore financial aid options and scholarships to make your education affordable",
  },
};

export default function FinancialAidPage() {
  const scholarships = [
    {
      name: 'Academic Excellence Scholarship',
      amount: 'Up to $10,000/year',
      description: 'Awarded to students with outstanding academic achievements',
      requirements: ['GPA 3.8+', 'SAT 1400+ or ACT 30+', 'Leadership experience'],
    },
    {
      name: 'Need-Based Grant',
      amount: 'Up to $8,000/year',
      description: 'Financial assistance based on demonstrated financial need',
      requirements: ['FAFSA submission', 'Financial need verification', 'Maintain 2.5 GPA'],
    },
    {
      name: 'Merit Scholarship',
      amount: 'Up to $6,000/year',
      description: 'Recognition for exceptional talent and achievement',
      requirements: ['GPA 3.5+', 'Community service', 'Letters of recommendation'],
    },
  ];

  const aidTypes = [
    {
      icon: faGraduationCap,
      title: 'Scholarships',
      description: 'Merit-based awards that don\'t require repayment',
    },
    {
      icon: faDollarSign,
      title: 'Grants',
      description: 'Need-based financial aid that doesn\'t require repayment',
    },
    {
      icon: faFileAlt,
      title: 'Loans',
      description: 'Federal and private loan options with flexible repayment',
    },
    {
      icon: faCheckCircle,
      title: 'Work-Study',
      description: 'Part-time employment opportunities on campus',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Financial Aid & Scholarships</h1>
          <p className="text-xl text-primary-100">
            Making education accessible and affordable
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Financial Aid</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aidTypes.map((type, index) => (
                <div key={index} className="border border-gray-200 p-8 text-center hover:border-primary transition-colors">
                  <Icon icon={type.icon} className="text-primary mb-4 mx-auto" size="2x" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Available Scholarships</h2>
            <div className="space-y-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{scholarship.name}</h3>
                      <div className="text-primary font-semibold mb-2">{scholarship.amount}</div>
                      <p className="text-gray-600">{scholarship.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {scholarship.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                          <Icon icon={faCheckCircle} className="text-primary mr-2 mt-1" size="sm" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Apply</h2>
            <div className="bg-white border border-gray-200 p-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Complete FAFSA</h3>
                    <p className="text-gray-600">
                      Submit the Free Application for Federal Student Aid (FAFSA) using our school code: 123456
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Submit Scholarship Applications</h3>
                    <p className="text-gray-600">
                      Apply for specific scholarships through our online portal
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Submit Required Documents</h3>
                    <p className="text-gray-600">
                      Upload tax forms, income statements, and other required documentation
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Review Award Letter</h3>
                    <p className="text-gray-600">
                      Receive and review your financial aid award package
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Important Deadlines</h2>
            <div className="bg-white border border-gray-200 p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200">
                  <div className="flex items-center">
                    <Icon icon={faCalendar} className="text-primary mr-3" size="lg" />
                    <div>
                      <h3 className="font-semibold text-gray-900">FAFSA Deadline</h3>
                      <p className="text-sm text-gray-600">Federal deadline</p>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900">June 30</div>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200">
                  <div className="flex items-center">
                    <Icon icon={faCalendar} className="text-primary mr-3" size="lg" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Scholarship Application</h3>
                      <p className="text-sm text-gray-600">Priority deadline</p>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900">March 1</div>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200">
                  <div className="flex items-center">
                    <Icon icon={faCalendar} className="text-primary mr-3" size="lg" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Award Notification</h3>
                      <p className="text-sm text-gray-600">Fall semester</p>
                    </div>
                  </div>
                  <div className="font-semibold text-gray-900">April 15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-primary text-white p-12">
              <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                Our financial aid office is here to assist you with the application process.
              </p>
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Contact Financial Aid Office
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

