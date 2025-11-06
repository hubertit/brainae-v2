import Header from './components/Header';
import Footer from './components/Footer';
import PartnersCarousel from './components/PartnersCarousel';
import Icon, {
  faGraduationCap,
  faBook,
  faUserGraduate,
  faCertificate,
  faUsers,
  faArrowRight,
} from './components/Icon';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to BRAINAE University
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Online education platform that accelerates your career and prepares you to face the future with in-demand skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#programs"
                className="bg-primary text-white px-8 py-3 rounded hover:bg-primary-600 transition-colors inline-flex items-center justify-center"
              >
                Explore Programs
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
              <a
                href="/student"
                className="border-2 border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Student Portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              BRAINAE University is a fully-featured online educational platform that helps students 
              and professionals around the world to acquire new skills. We're at the forefront of 
              delivering high-quality distance learning for working professionals and students who 
              want to obtain academic degrees, professional certificates, or learn in-demand new skills.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-primary hover:text-primary-600 font-semibold"
            >
              Learn More About Us
              <Icon icon={faArrowRight} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: faBook,
                  title: 'Undergraduate Programs',
                  description: 'Bachelor\'s degrees across various disciplines',
                },
                {
                  icon: faGraduationCap,
                  title: 'Graduate Programs',
                  description: 'Master\'s and doctoral programs for advanced study',
                },
                {
                  icon: faCertificate,
                  title: 'Professional Development',
                  description: 'Certificates and continuing education courses',
                },
              ].map((program, index) => (
                <div key={index} className="border border-gray-200 p-8 hover:border-primary transition-colors">
                  <Icon icon={program.icon} className="text-primary mb-4" size="2x" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <a
                    href="/programs"
                    className="inline-flex items-center text-primary hover:text-primary-600 text-sm font-semibold"
                  >
                    Explore Programs
                    <Icon icon={faArrowRight} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">2,327+</div>
                <div className="text-primary-100">Learners</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">178+</div>
                <div className="text-primary-100">Instructors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1,682+</div>
                <div className="text-primary-100">Short Courses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Our Learners Are Saying</h2>
            <p className="text-center text-gray-600 mb-12">8+ million people are already learning on BRAINAE University</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Honorine Ugubwaneza',
                quote: 'Great experience from BRAINAE. You get a lot of opportunities. Work hard to get it. Be prepared for everything. Maintain your attendance.',
              },
              {
                name: 'John Hagenimana',
                quote: 'BRAINAE University is a place where you can find an amalgamation of learning. I feel great studying at BRAINAE University as it gives great opportunities as well as support from faculties and placement officers.',
              },
              {
                name: 'Gideon Maniriho',
                quote: 'BRAINAE University and SET faculties have put in all the efforts to groom us and make us corporate professionals. It was a wonderful experience at BRAINAE University.',
              },
              {
                name: 'Lauryn Bansal',
                quote: 'I am a student at BRAINAE, majoring in Masters of Finance. I was amazingly surprised by the warmth and care of the administration and faculty members. I enjoyed every class.',
              },
              {
                name: 'Sharma ATRASH',
                quote: 'I have been a student in the School of Management for over two years now, and I can tell you that no other school can prepare you for a successful career the way that BRAINAE can.',
              },
              {
                name: 'Joshi MENDA',
                quote: 'I thank my department and its faculty members for encouraging me to think globally and spread my wings. I appreciate the support of my university for shaping my career.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnersCarousel />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join more than 2,327 learners worldwide who are advancing their careers with BRAINAE University.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="bg-primary text-white px-8 py-3 rounded hover:bg-primary-600 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded hover:border-primary hover:text-primary transition-colors"
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
