import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, {
  faCheckCircle,
  faFileAlt,
  faCalendar,
  faDollarSign,
  faGraduationCap,
  faArrowRight,
} from '../components/Icon';

export default function AdmissionsPage() {
  const requirements = [
    'Completed application form',
    'Official high school transcripts',
    'Standardized test scores (SAT/ACT)',
    'Letters of recommendation (2)',
    'Personal statement or essay',
    'Application fee',
  ];

  const deadlines = [
    { term: 'Fall Semester', date: 'March 1', type: 'Early Decision' },
    { term: 'Fall Semester', date: 'June 1', type: 'Regular Decision' },
    { term: 'Spring Semester', date: 'November 1', type: 'Regular Decision' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-primary-100">
            Start your journey at Brainae University
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Submit Application', description: 'Complete online application form' },
                { step: '2', title: 'Submit Documents', description: 'Upload required documents' },
                { step: '3', title: 'Review Process', description: 'Admissions committee reviews' },
                { step: '4', title: 'Decision', description: 'Receive admission decision' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Admission Requirements</h2>
            <div className="bg-white border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon icon={faFileAlt} className="text-primary mr-2" />
                    Required Documents
                  </h3>
                  <ul className="space-y-3">
                    {requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <Icon icon={faCheckCircle} className="text-primary mr-2 mt-1" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Icon icon={faGraduationCap} className="text-primary mr-2" />
                    Academic Requirements
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon icon={faCheckCircle} className="text-primary mr-2 mt-1" />
                      <span className="text-gray-700">Minimum GPA: 3.0 (on 4.0 scale)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon icon={faCheckCircle} className="text-primary mr-2 mt-1" />
                      <span className="text-gray-700">SAT: 1200+ or ACT: 25+</span>
                    </li>
                    <li className="flex items-start">
                      <Icon icon={faCheckCircle} className="text-primary mr-2 mt-1" />
                      <span className="text-gray-700">English proficiency (for international students)</span>
                    </li>
                    <li className="flex items-start">
                      <Icon icon={faCheckCircle} className="text-primary mr-2 mt-1" />
                      <span className="text-gray-700">Completed prerequisite courses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Application Deadlines</h2>
            <div className="bg-white border border-gray-200 p-8">
              <div className="space-y-4">
                {deadlines.map((deadline, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 hover:border-primary transition-colors">
                    <div className="flex items-center">
                      <Icon icon={faCalendar} className="text-primary mr-3" size="lg" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{deadline.term}</h3>
                        <p className="text-sm text-gray-600">{deadline.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{deadline.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tuition & Fees</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 p-8 hover:border-primary transition-colors">
                <div className="flex items-center mb-4">
                  <Icon icon={faDollarSign} className="text-primary mr-2" size="lg" />
                  <h3 className="text-xl font-semibold text-gray-900">Undergraduate</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuition (per semester)</span>
                    <span className="font-semibold">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fees</span>
                    <span className="font-semibold">$1,500</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-primary">$16,500</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 p-8 hover:border-primary transition-colors">
                <div className="flex items-center mb-4">
                  <Icon icon={faGraduationCap} className="text-primary mr-2" size="lg" />
                  <h3 className="text-xl font-semibold text-gray-900">Graduate</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuition (per semester)</span>
                    <span className="font-semibold">$18,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fees</span>
                    <span className="font-semibold">$1,500</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-bold text-primary">$19,500</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="/financial-aid"
                className="text-primary hover:text-primary-600 inline-flex items-center"
              >
                Learn about Financial Aid
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-primary text-white p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                Start your application today and take the first step towards your future.
              </p>
              <a
                href="/student"
                className="bg-white text-primary px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Start Application
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

