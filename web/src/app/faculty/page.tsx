import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, {
  faUser,
  faEnvelope,
  faGraduationCap,
  faSearch,
} from '../components/Icon';

export default function FacultyPage() {
  const departments = [
    'All Departments',
    'Computer Science',
    'Business Administration',
    'Engineering',
    'Liberal Arts',
    'Sciences',
  ];

  const faculty = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Professor of Computer Science',
      department: 'Computer Science',
      email: 'sarah.johnson@brainae.edu',
      research: 'Artificial Intelligence, Machine Learning',
      education: 'Ph.D. in Computer Science, MIT',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Associate Professor of Business',
      department: 'Business Administration',
      email: 'michael.chen@brainae.edu',
      research: 'Strategic Management, Entrepreneurship',
      education: 'Ph.D. in Business Administration, Harvard',
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Professor of Engineering',
      department: 'Engineering',
      email: 'emily.rodriguez@brainae.edu',
      research: 'Sustainable Engineering, Renewable Energy',
      education: 'Ph.D. in Engineering, Stanford',
    },
    {
      name: 'Dr. James Wilson',
      title: 'Associate Professor of Literature',
      department: 'Liberal Arts',
      email: 'james.wilson@brainae.edu',
      research: 'Modern Literature, Cultural Studies',
      education: 'Ph.D. in English Literature, Oxford',
    },
    {
      name: 'Dr. Lisa Anderson',
      title: 'Professor of Biology',
      department: 'Sciences',
      email: 'lisa.anderson@brainae.edu',
      research: 'Molecular Biology, Genetics',
      education: 'Ph.D. in Biology, UC Berkeley',
    },
    {
      name: 'Dr. Robert Taylor',
      title: 'Associate Professor of Computer Science',
      department: 'Computer Science',
      email: 'robert.taylor@brainae.edu',
      research: 'Cybersecurity, Network Systems',
      education: 'Ph.D. in Computer Science, Carnegie Mellon',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Faculty Directory</h1>
          <p className="text-xl text-primary-100">
            Meet our distinguished faculty members
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search faculty by name or research area..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none">
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((member, index) => (
                <div key={index} className="border border-gray-200 p-8 hover:border-primary transition-colors">
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon icon={faUser} className="text-gray-400" size="2x" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-1">{member.title}</p>
                    <p className="text-sm text-gray-600">{member.department}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Icon icon={faGraduationCap} className="mr-2 text-gray-400" />
                      <span className="font-medium">Education</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{member.education}</p>
                  </div>
                  <div>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Icon icon={faSearch} className="mr-2 text-gray-400" />
                      <span className="font-medium">Research</span>
                    </div>
                    <p className="text-sm text-gray-700 ml-6">{member.research}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center text-sm text-primary hover:text-primary-600"
                >
                  <Icon icon={faEnvelope} className="mr-2" />
                  {member.email}
                </a>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Faculty</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented educators and researchers to join our community.
            </p>
            <a
              href="/contact"
              className="bg-primary text-white px-8 py-3 rounded hover:bg-primary-600 transition-colors inline-block"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

