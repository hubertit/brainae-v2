import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Icon, {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faBuilding,
  faUser,
} from '../components/Icon';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with BRAINAE University. Contact our admissions, financial aid, academic affairs, student services, or technical support teams. We're here to help.",
  openGraph: {
    title: "Contact BRAINAE University",
    description: "Get in touch with us. We're here to help with admissions, financial aid, academics, and more",
  },
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: faEnvelope,
      title: 'Email Us',
      info: 'info@brainae.edu',
      description: 'Send us an email and we\'ll respond within 24 hours',
      action: 'mailto:info@brainae.edu',
    },
    {
      icon: faPhone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      description: 'Monday - Friday, 9:00 AM - 5:00 PM',
      action: 'tel:+15551234567',
    },
    {
      icon: faLocationDot,
      title: 'Visit Us',
      info: '123 University Avenue',
      description: 'City, Country 12345',
      action: '#',
    },
  ];

  const departments = [
    {
      name: 'Admissions',
      email: 'admissions@brainae.edu',
      phone: '+1 (555) 123-4568',
      description: 'Questions about applications, requirements, and enrollment',
    },
    {
      name: 'Financial Aid',
      email: 'financialaid@brainae.edu',
      phone: '+1 (555) 123-4569',
      description: 'Scholarships, grants, and financial assistance',
    },
    {
      name: 'Academic Affairs',
      email: 'academics@brainae.edu',
      phone: '+1 (555) 123-4570',
      description: 'Program information and academic support',
    },
    {
      name: 'Student Services',
      email: 'studentservices@brainae.edu',
      phone: '+1 (555) 123-4571',
      description: 'Student support and campus services',
    },
    {
      name: 'Technical Support',
      email: 'support@brainae.edu',
      phone: '+1 (555) 123-4572',
      description: 'Technical issues and platform assistance',
    },
    {
      name: 'General Inquiry',
      email: 'info@brainae.edu',
      phone: '+1 (555) 123-4567',
      description: 'General questions and information',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-primary-100">
            We're here to help. Get in touch with us
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="border border-gray-200 p-8 text-center hover:border-primary transition-colors">
                  <Icon icon={method.icon} className="text-primary mb-4 mx-auto" size="2x" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                  <a
                    href={method.action}
                    className="text-primary hover:text-primary-600 font-semibold mb-3 block"
                  >
                    {method.info}
                  </a>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Office Hours</h2>
            <div className="bg-white border border-gray-200 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Administrative Office</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 2:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Student Support</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 9:00 AM - 1:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  <Icon icon={faClock} className="mr-2 inline" />
                  All times are in Eastern Standard Time (EST)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Contact by Department</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="border border-gray-200 p-6 hover:border-primary transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{dept.description}</p>
                  <div className="space-y-3">
                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center text-sm text-primary hover:text-primary-600"
                    >
                      <Icon icon={faEnvelope} className="mr-2" />
                      {dept.email}
                    </a>
                    <a
                      href={`tel:${dept.phone.replace(/\s/g, '')}`}
                      className="flex items-center text-sm text-primary hover:text-primary-600"
                    >
                      <Icon icon={faPhone} className="mr-2" />
                      {dept.phone}
                    </a>
                  </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Send Us a Message</h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Have questions? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="bg-white border border-gray-200 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary text-white p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
                For urgent matters, please call our main office during business hours. 
                For technical support with the online platform, our support team is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="bg-white text-primary px-8 py-3 rounded hover:bg-gray-100 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="mailto:support@brainae.edu"
                  className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-primary transition-colors"
                >
                  Email Support
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

