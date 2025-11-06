import NewsletterSignup from './NewsletterSignup';
import Icon, {
  faEnvelope,
  faPhone,
  faLocationDot,
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram,
} from './Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">BRAINAE University</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A fully-featured online educational platform that helps students and professionals 
              around the world to acquire new skills. We deliver high-quality distance learning 
              for working professionals and students.
            </p>
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white mb-3">Newsletter</h4>
              <NewsletterSignup variant="compact" />
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Icon icon={faFacebook} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Icon icon={faTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Icon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Icon icon={faYoutube} size="lg" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Icon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="/admissions"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Admissions
                </a>
              </li>
              <li>
                <a
                  href="/faculty"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Faculty
                </a>
              </li>
              <li>
                <a
                  href="/research"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="/financial-aid"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Financial Aid
                </a>
              </li>
              <li>
                <a
                  href="/accreditations"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Accreditations
                </a>
              </li>
              <li>
                <a
                  href="/verify-certificate"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Verify Certificate
                </a>
              </li>
              <li>
                <a
                  href="/library"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  E-Library
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/student"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Student Portal
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/application"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <a
                  href="/verify-certificate"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Verify Certificate
                </a>
              </li>
              <li>
                <a
                  href="/library"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  E-Library
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Course Catalog
                </a>
              </li>
              <li>
                <a
                  href="/financial-aid"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Scholarships
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  University Mission
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Academic Programs</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Undergraduate
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Graduate Programs
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Professional Studies
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Online Learning
                </a>
              </li>
              <li>
                <a
                  href="/programs"
                  className="text-gray-400 hover:text-primary transition-colors inline-block"
                >
                  Certificate Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <Icon icon={faLocationDot} className="mr-3 mt-1 flex-shrink-0 text-primary" />
                <span className="leading-relaxed">
                  123 University Avenue<br />
                  City, Country 12345
                </span>
              </li>
              <li className="flex items-center">
                <Icon icon={faPhone} className="mr-3 flex-shrink-0 text-primary" />
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Icon icon={faEnvelope} className="mr-3 flex-shrink-0 text-primary" />
                <a
                  href="mailto:info@brainae.edu"
                  className="hover:text-primary transition-colors break-all"
                >
                  info@brainae.edu
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary-600 transition-colors text-sm font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {currentYear} BRAINAE University. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/accessibility"
                className="hover:text-primary transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

