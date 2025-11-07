import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, {
  faFlask,
  faBook,
  faUsers,
  faAward,
  faArrowRight,
  faCalendar,
} from '../components/Icon';

export const metadata: Metadata = {
  title: "Research & Publications",
  description: "Discover research initiatives, publications, and academic contributions from Brainae University faculty and students. Explore our research areas and recent publications.",
  openGraph: {
    title: "Research & Publications at Brainae University",
    description: "Discover our research initiatives and academic contributions",
  },
};

export default function ResearchPage() {
  const researchAreas = [
    {
      title: 'Artificial Intelligence',
      description: 'Advancing machine learning, neural networks, and AI applications.',
      projects: 12,
    },
    {
      title: 'Sustainable Energy',
      description: 'Developing renewable energy solutions and environmental technologies.',
      projects: 8,
    },
    {
      title: 'Biomedical Sciences',
      description: 'Research in healthcare, pharmaceuticals, and medical technology.',
      projects: 15,
    },
    {
      title: 'Social Sciences',
      description: 'Studies in psychology, sociology, and human behavior.',
      projects: 10,
    },
    {
      title: 'Business Innovation',
      description: 'Entrepreneurship, management, and economic research.',
      projects: 9,
    },
    {
      title: 'Digital Humanities',
      description: 'Intersection of technology and humanities research.',
      projects: 7,
    },
  ];

  const publications = [
    {
      title: 'Machine Learning Applications in Healthcare',
      authors: 'Dr. Sarah Johnson, Dr. Robert Taylor',
      journal: 'Journal of Medical AI',
      year: '2024',
    },
    {
      title: 'Sustainable Energy Solutions for Urban Environments',
      authors: 'Dr. Emily Rodriguez',
      journal: 'Environmental Science Review',
      year: '2024',
    },
    {
      title: 'Entrepreneurship in the Digital Age',
      authors: 'Dr. Michael Chen',
      journal: 'Business Innovation Quarterly',
      year: '2023',
    },
    {
      title: 'Cultural Studies in Modern Literature',
      authors: 'Dr. James Wilson',
      journal: 'Literary Analysis Journal',
      year: '2023',
    },
  ];

  const centers = [
    {
      name: 'Center for AI Research',
      director: 'Dr. Sarah Johnson',
      focus: 'Artificial Intelligence and Machine Learning',
    },
    {
      name: 'Sustainable Technology Institute',
      director: 'Dr. Emily Rodriguez',
      focus: 'Renewable Energy and Environmental Solutions',
    },
    {
      name: 'Biomedical Research Center',
      director: 'Dr. Lisa Anderson',
      focus: 'Healthcare Innovation and Medical Technology',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Research & Publications</h1>
          <p className="text-xl text-primary-100">
            Advancing knowledge through innovative research
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Excellence</h2>
            <div className="bg-gray-50 border border-gray-200 p-8">
              <p className="text-lg text-gray-700 mb-4">
                At Brainae University, research is at the heart of our mission. Our faculty and
                students engage in groundbreaking research across diverse disciplines, contributing
                to knowledge and addressing real-world challenges.
              </p>
              <p className="text-lg text-gray-700">
                We foster a collaborative research environment that encourages innovation,
                interdisciplinary work, and partnerships with industry and institutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchAreas.map((area, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 hover:border-primary transition-colors">
                <Icon icon={faFlask} className="text-primary mb-4" size="lg" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon icon={faBook} className="mr-2" />
                  <span>{area.projects} active projects</span>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Centers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Research Centers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {centers.map((center, index) => (
                <div key={index} className="border border-gray-200 p-8 hover:border-primary transition-colors">
                  <div className="flex items-center mb-4">
                    <Icon icon={faAward} className="text-primary mr-3" size="lg" />
                    <h3 className="text-xl font-semibold text-gray-900">{center.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Director:</span> {center.director}
                  </p>
                  <p className="text-sm text-gray-700">{center.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Publications</h2>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 hover:border-primary transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
                    <Icon icon={faUsers} className="mr-2" />
                    <span className="mr-4">{pub.authors}</span>
                    <Icon icon={faBook} className="mr-2" />
                    <span className="mr-4">{pub.journal}</span>
                    <Icon icon={faCalendar} className="mr-2" />
                    <span>{pub.year}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-flex items-center text-primary hover:text-primary-600 font-semibold"
              >
                View All Publications
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-primary text-white p-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Research Community</h2>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                Explore research opportunities and collaborate with leading scholars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/admissions"
                  className="bg-white text-primary px-8 py-3 rounded hover:bg-gray-100 transition-colors"
                >
                  Graduate Programs
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-primary transition-colors"
                >
                  Contact Research Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

