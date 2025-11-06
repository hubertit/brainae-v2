import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, {
  faBook,
  faGraduationCap,
  faCertificate,
  faArrowRight,
  faUsers,
  faClock,
  faBriefcase,
  faHeartbeat,
  faLaptopCode,
  faUsersCog,
  faBookOpen,
  faChalkboardTeacher,
} from '../components/Icon';

export default function ProgramsPage() {
  const schools = [
    {
      icon: faBriefcase,
      name: 'Business and Economics',
      description: 'The School of Business and Economics focuses intensively on preparing candidates to direct highly specialized business operations and economic analysis.',
      programs: ['Business Administration', 'Economics', 'Finance', 'Marketing', 'Management'],
    },
    {
      icon: faHeartbeat,
      name: 'Health Science',
      description: 'The School of Medicine and Health helps working professionals make the connection between their real-world experience and academic achievement in healthcare.',
      programs: ['Public Health', 'Health Administration', 'Nursing', 'Health Sciences'],
    },
    {
      icon: faLaptopCode,
      name: 'Science and Technology',
      description: 'The School of Sciences and Technology is best suited for leading development professionals who seek administrative and technical expertise.',
      programs: ['Computer Science', 'Information Technology', 'Data Science', 'Engineering'],
    },
    {
      icon: faUsersCog,
      name: 'Social Science',
      description: 'The School of Social Sciences and Education prepares students for administrative and teaching positions in educational and social service settings.',
      programs: ['Social Work', 'Psychology', 'Sociology', 'Political Science'],
    },
    {
      icon: faBookOpen,
      name: 'Bible Studies',
      description: 'In the School of Bible Studies you learn where you come from, why you are here and where you are heading. Deep theological education for ministry and service.',
      programs: ['Theology', 'Biblical Studies', 'Ministry', 'Religious Education'],
    },
    {
      icon: faChalkboardTeacher,
      name: 'Education',
      description: 'The mission of this school is to promote student achievement and preparation for global competitiveness by fostering educational excellence.',
      programs: ['Educational Leadership', 'Curriculum Development', 'Teaching Methods', 'Educational Technology'],
    },
  ];

  const professionalStudies = {
    icon: faCertificate,
    name: 'BRAINAE Institute of Professional Studies',
    description: 'BRAINAE Institute of Professional Studies competency focuses exclusively on in-demand digital technology skills. Choose to gain a competitive advantage and excel in your career.',
    features: [
      'Professional certificates in digital technology',
      'In-demand skills training',
      'Career-focused curriculum',
      'Flexible online learning',
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Academic Programs</h1>
          <p className="text-xl text-primary-100">
            Search a program by school
          </p>
        </div>
      </section>

      {/* Schools */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Schools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {schools.map((school, index) => (
                <div key={index} className="border border-gray-200 p-8 hover:border-primary transition-colors">
                  <Icon icon={school.icon} className="text-primary mb-4" size="2x" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{school.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{school.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Programs:</h4>
                  <ul className="space-y-1">
                    {school.programs.map((program, pIndex) => (
                      <li key={pIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{program}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={`/programs/${school.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary hover:text-primary-600 text-sm font-semibold"
                >
                  View Programs
                  <Icon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Studies */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <Icon icon={professionalStudies.icon} className="text-primary mr-4" size="3x" />
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{professionalStudies.name}</h2>
                  <p className="text-gray-600">{professionalStudies.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {professionalStudies.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Icon icon={faCertificate} className="text-primary mr-2 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="/programs/professional-studies"
                  className="inline-flex items-center bg-primary text-white px-6 py-3 rounded hover:bg-primary-600 transition-colors"
                >
                  Explore Professional Studies
                  <Icon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Learn with BRAINAE University</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon icon={faGraduationCap} className="text-primary mb-4 mx-auto" size="2x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Degrees</h3>
                <p className="text-gray-600 text-sm">
                  We offer Academic Degrees in various programs across all our schools.
                </p>
              </div>
              <div className="text-center">
                <Icon icon={faCertificate} className="text-primary mb-4 mx-auto" size="2x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn New Skills</h3>
                <p className="text-gray-600 text-sm">
                  Face the future with confidence by learning new in-demand skills online.
                </p>
              </div>
              <div className="text-center">
                <Icon icon={faUsers} className="text-primary mb-4 mx-auto" size="2x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Development</h3>
                <p className="text-gray-600 text-sm">
                  Gain a competitive advantage and achieve exponential growth in your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-primary-100 mb-8">
              Effective learning starts with assessment. Learning a new skill is hard, BRAINAE University makes it simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/application"
                className="bg-white text-primary px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Apply Now
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
