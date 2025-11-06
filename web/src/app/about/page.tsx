import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, {
  faGraduationCap,
  faUsers,
  faCertificate,
  faAward,
  faLightbulb,
  faHandshake,
} from '../components/Icon';

export default function AboutPage() {
  const values = [
    {
      icon: faGraduationCap,
      title: 'Excellence',
      description: 'Commitment to the highest standards in education and research',
    },
    {
      icon: faLightbulb,
      title: 'Innovation',
      description: 'Fostering creativity and cutting-edge thinking',
    },
    {
      icon: faUsers,
      title: 'Community',
      description: 'Building a supportive and inclusive learning environment',
    },
    {
      icon: faHandshake,
      title: 'Integrity',
      description: 'Upholding ethical standards and academic honesty',
    },
  ];

  const achievements = [
    { number: '2,327+', label: 'Learners' },
    { number: '178+', label: 'Instructors' },
    { number: '1,682+', label: 'Short Courses' },
    { number: '7', label: 'Schools' },
    { number: '100+', label: 'Programs' },
    { number: 'Worldwide', label: 'Online Platform' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Brainae University</h1>
          <p className="text-xl text-primary-100">
            Excellence in Education, Innovation in Learning
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Mission</h2>
            <div className="bg-gray-50 border border-gray-200 p-8">
              <p className="text-lg text-gray-700 mb-4">
                BRAINAE University is a fully-featured online educational platform that helps students 
                and professionals around the world to acquire new skills. We're at the forefront of 
                delivering high-quality distance learning for working professionals and students who 
                want to obtain academic degrees, professional certificates, or learn in-demand new skills.
              </p>
              <p className="text-lg text-gray-700">
                The BRAINAE University program offers a hands-on approach to both business and community 
                leadership, as part of a cutting-edge and stimulating educational experience. We build 
                better skills fast, helping you face the future with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white border border-gray-200 p-8 text-center hover:border-primary transition-colors">
                  <Icon icon={value.icon} className="text-primary mb-4 mx-auto" size="2x" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-gray-600 text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our History</h2>
            <div className="bg-white border border-gray-200 p-8">
              <p className="text-gray-700 mb-4">
                BRAINAE University has established itself as a leading online educational platform, 
                serving thousands of learners worldwide. Our journey has been marked by innovation 
                in distance learning and a commitment to making quality education accessible to all.
              </p>
              <p className="text-gray-700 mb-4">
                We specialize in delivering high-quality online education for working professionals 
                and students who want to obtain academic degrees, professional certificates, or 
                learn in-demand new skills without leaving their place.
              </p>
              <p className="text-gray-700">
                Today, we continue to expand our offerings across seven schools, providing flexible 
                learning options that help students and professionals advance their careers and 
                achieve their educational goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-8 hover:border-primary transition-colors">
                <div className="flex items-center mb-4">
                  <Icon icon={faAward} className="text-primary mr-3" size="lg" />
                  <h3 className="text-xl font-semibold text-gray-900">President</h3>
                </div>
                <p className="text-gray-600">
                  Our leadership team brings decades of experience in higher education and
                  is committed to advancing the university's mission and vision.
                </p>
              </div>
              <div className="border border-gray-200 p-8 hover:border-primary transition-colors">
                <div className="flex items-center mb-4">
                  <Icon icon={faUsers} className="text-primary mr-3" size="lg" />
                  <h3 className="text-xl font-semibold text-gray-900">Board of Trustees</h3>
                </div>
                <p className="text-gray-600">
                  Our board provides strategic guidance and oversight to ensure the university
                  continues to thrive and serve its students effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

