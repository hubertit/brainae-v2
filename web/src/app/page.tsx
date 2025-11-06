import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';
import PartnersCarousel from './components/PartnersCarousel';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Icon, {
  faGraduationCap,
  faBook,
  faUserGraduate,
  faCertificate,
  faUsers,
  faArrowRight,
  faNewspaper,
  faLaptopCode,
  faBriefcase,
  faBuilding,
  faCheckCircle,
  faFileAlt,
} from './components/Icon';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to BRAINAE University - an online education platform that accelerates your career and prepares you to face the future with in-demand skills. Join 2,327+ learners worldwide.",
  openGraph: {
    title: "BRAINAE University - Online Education Platform",
    description: "Online education platform that accelerates your career and prepares you to face the future with in-demand skills",
    images: ["/images/hero.jpg"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/hero.jpg)',
            }}
          />
          <div className="absolute inset-0 bg-primary/40" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-4">
              Welcome to BRAINAE University
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/95 leading-relaxed px-4">
              Online education platform that accelerates your career and prepares you to face the future with in-demand skills
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <a
                href="/application"
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Apply Now
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
              <a
                href="/programs"
                className="border-2 border-white/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center font-semibold text-base sm:text-lg shadow-lg"
              >
                Explore Programs
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
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

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Learn with BRAINAE University</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Build better skills fast right here. We're at the forefront of delivering high-quality distance learning for working professionals and students.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <Icon icon={faGraduationCap} className="text-primary mb-4" size="3x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Degrees</h3>
                <p className="text-gray-600 mb-4">
                  We offer Academic Degrees in various programs across all our schools. Check our programs to find the perfect fit for your career goals.
                </p>
                <a
                  href="/programs"
                  className="inline-flex items-center text-primary hover:text-primary-600 text-sm font-semibold"
                >
                  View Programs
                  <Icon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <Icon icon={faCertificate} className="text-primary mb-4" size="3x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn New Skills</h3>
                <p className="text-gray-600 mb-4">
                  Face the future with confidence by learning new in-demand skills right here without leaving your place. Flexible learning at your own pace.
                </p>
                <a
                  href="/programs"
                  className="inline-flex items-center text-primary hover:text-primary-600 text-sm font-semibold"
                >
                  Get Started
                  <Icon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <Icon icon={faUsers} className="text-primary mb-4" size="3x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Development</h3>
                <p className="text-gray-600 mb-4">
                  Gain a competitive advantage and excel in your career. Achieve exponential growth through our professional development programs.
                </p>
                <a
                  href="/professional"
                  className="inline-flex items-center text-primary hover:text-primary-600 text-sm font-semibold"
                >
                  Explore Courses
                  <Icon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Getting started at BRAINAE University is easy. Follow these simple steps to begin your educational journey.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Choose Your Program',
                  description: 'Browse our programs and select the one that aligns with your career goals',
                },
                {
                  step: '02',
                  title: 'Apply Online',
                  description: 'Complete our simple online application form with your basic information',
                },
                {
                  step: '03',
                  title: 'Get Enrolled',
                  description: 'Receive your acceptance and enroll in your chosen program',
                },
                {
                  step: '04',
                  title: 'Start Learning',
                  description: 'Access your courses and begin learning at your own pace',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold text-xl">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="/application"
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center font-semibold"
              >
                Apply Now
                <Icon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">This Platform is Helping Many Types of Organizations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                BRAINAE University provides tailored solutions for different sectors, helping organizations achieve their goals through quality education.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                <Icon icon={faBriefcase} className="text-primary mb-4" size="3x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business</h3>
                <p className="text-gray-600 mb-4">
                  Helping employees advance their careers — and organizations to grow. Keep top talent engaged with professional development opportunities.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Employee career advancement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Professional development programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Retain top talent</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                <Icon icon={faGraduationCap} className="text-primary mb-4" size="3x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Higher Education</h3>
                <p className="text-gray-600 mb-4">
                  We teach professionals skills utilized by educators and administrators. Enhance your institution's capabilities with our programs.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Educator training programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Administrative skills development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Institutional capacity building</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary transition-colors">
                <Icon icon={faBuilding} className="text-primary mb-4" size="3x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Government</h3>
                <p className="text-gray-600 mb-4">
                  We are the best source for government needed skills for better governance. Equip your team with essential competencies.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Public sector training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Governance skills development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Policy implementation training</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAINAE Journal Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon icon={faNewspaper} className="text-primary" size="2x" />
                    <h2 className="text-3xl font-bold text-gray-900">BRAINAE Journal</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-4">
                    Do you have an article to publish? You can Publish Now, it takes very short time!!
                  </p>
                  <p className="text-gray-600 mb-6">
                    Brainae Journal of Business, Sciences and Technology is a highly ranked Journal assigned ISSN as per standardized international code governed by the ISO 3297 whereby <strong>2789-374x (print)</strong> and <strong>2789-3758 (online)</strong>.
                  </p>
                  <p className="text-gray-600 mb-6">
                    This Journal is Cross Ref Indexed where <strong>(DOI)</strong> Digital Object Identifier is assigned to each article published for linking citations across publishers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/journal"
                      className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center font-semibold"
                    >
                      Publish Now
                      <Icon icon={faArrowRight} className="ml-2" />
                    </a>
                    <a
                      href="/contact"
                      className="border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors inline-flex items-center justify-center font-semibold"
                    >
                      Ask Support
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Journal Features</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>ISSN Certified (ISO 3297)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Cross Ref Indexed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>DOI Assignment for All Articles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Peer-Reviewed Publications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Quick Publication Process</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Studies Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                  <Icon icon={faLaptopCode} className="text-primary mb-4" size="3x" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Professional Expertise</h3>
                  <p className="text-gray-600 mb-4">
                    Become a Professional Expert in a number of professional courses online. Choose to gain a competitive advantage and excel in your career.
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>In-demand digital technology skills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Competency-focused courses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Career advancement opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Icon icon={faCertificate} className="text-primary" size="2x" />
                  <h2 className="text-3xl font-bold text-gray-900">BRAINAE Institute of Professional Studies</h2>
                </div>
                <p className="text-lg text-gray-700 mb-4">
                  Do you know that you can become a Professional Expert in a number of professional courses online?
                </p>
                <p className="text-gray-600 mb-6">
                  Choose to gain a competitive advantage and excel in your career and achieve exponential growth. It takes a while and is easy.
                </p>
                <p className="text-gray-600 mb-6">
                  BRAINAE Institute of Professional Studies competency focuses exclusively on <strong>in-demand digital technology</strong> skills.
                </p>
                <a
                  href="/professional"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-flex items-center justify-center font-semibold"
                >
                  Explore Courses
                  <Icon icon={faArrowRight} className="ml-2" />
                </a>
              </div>
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
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Learners Are Saying</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                8+ million people are already learning on BRAINAE University. Here's what they have to say about their experience.
              </p>
            </div>
            <TestimonialsCarousel
              testimonials={[
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
              ]}
              autoPlay={true}
              autoPlayInterval={5000}
            />
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
                href="/application"
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
