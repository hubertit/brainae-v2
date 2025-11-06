import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Icon, { faCertificate, faAward, faCheckCircle, faArrowRight } from '../components/Icon';

export const metadata: Metadata = {
  title: "Accreditations & Recognitions",
  description: "BRAINAE University is accredited by multiple international accreditation bodies including QAHE, ECHEA, IADL, IATA, ASIC, and IAO. Learn about our accreditations and quality assurance.",
  openGraph: {
    title: "Accreditations & Recognitions at BRAINAE University",
    description: "Learn about our international accreditations and quality assurance standards",
  },
};

export default function AccreditationsPage() {
  const accreditations = [
    {
      title: 'International Association for Quality Assurance in Higher Education (QAHE)',
      imageUrl: 'https://brainae.org/store/1/QAHE.jpg',
      description: 'BRAINAE University is accredited by Accreditation Service for International Association for Quality Assurance for Higher Education (QAHE). The university has earned Premier status with QAHE for its commendable areas of operation.',
      website: 'https://www.qahe.org/list-of-accredited-institution/',
      type: 'Accreditation',
    },
    {
      title: 'International Accreditation Commission For Education (IACE)',
      imageUrl: 'https://brainae.org/store/1/Rudolf.jpeg',
      description: 'International Accreditation Commission For Education IACE -USA is a Christian organization dedicated to making a significant contribution to the promotion of Christian education everywhere.',
      website: 'http://www.iace-accreditation.info/',
      type: 'Accreditation',
    },
    {
      title: 'International Interdisciplinary Innovation Centre of Life "Alliance of the peoples of the world"',
      imageUrl: 'https://brainae.org/store/1/IPAOW.png',
      description: 'BRAINAE University got its accreditation No: IPAOW/BU/23 for achievement of highest standards in organizational management, academic management and institutional performance through a commitment to high quality and continuous improvement.',
      website: 'https://ipaow.org/',
      type: 'Accreditation',
    },
    {
      title: 'All Nations Bible Institution & Projects',
      imageUrl: 'https://brainae.org/store/1/All%20nations.png',
      description: 'BRAINAE University is fully accredited by All Nations Bible Institution & Projects, recognizing our commitment to excellence in theological and biblical education.',
      website: '#',
      type: 'Accreditation',
    },
    {
      title: 'ISIBUSISO SOLWAZI APOSTOLIC MINISTRIES COUNCILOF BIBLE SCHOOLS & CHURCHES',
      imageUrl: 'https://brainae.org/store/1/isibusiso.jpg',
      description: 'BRAINAE University is fully accredited by ISIBUSISO SOLWAZI APOSTOLIC MINISTRIES COUNCILOF BIBLE SCHOOLS & CHURCHES, affirming our dedication to quality theological education.',
      website: '#',
      type: 'Accreditation',
    },
    {
      title: 'ISO 9001:2015 – Quality Management System',
      imageUrl: 'https://brainae.org/store/1/ISO.jpg',
      description: 'BRAINAE University got ISO 9001:2015 – about Quality management system. ISO stands for International organization for standardization. It is the world\'s largest developer of International standards and it has established 21000+ standards till date.',
      website: 'https://www.smcrac.org/iso-certificate-validity.php',
      type: 'Certification',
    },
    {
      title: 'UNIVERSITY OF MARLYNE, USA',
      imageUrl: 'https://brainae.org/store/1/Marlyne.png',
      description: 'BRAINAE University is Partner of UNIVERSITY OF MARLYNE, USA, fostering academic collaboration and exchange programs.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'British National University of Queen Mary',
      imageUrl: 'https://brainae.org/store/1/usa.png',
      description: 'BRAINAE University is Partner of British National University of Queen Mary, promoting international educational partnerships and collaborative research initiatives.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'CALIFORNIA PUBLIC UNIVERSITY',
      imageUrl: 'https://brainae.org/store/1/california.png',
      description: 'BRAINAE University is Partner of CALIFORNIA PUBLIC UNIVERSITY, enhancing academic opportunities and cross-institutional collaboration.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'European Institute of Applied Research, Viimsi Parish, Harjumaa, Tallinn, Estonia',
      imageUrl: 'https://brainae.org/store/1/EIAR.png',
      description: 'Brainae University is Partner of European Institute of Applied Research, Viimsi Parish, Harjumaa, Tallinn, Estonia, supporting research and academic excellence.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'African Moon University',
      imageUrl: 'https://brainae.org/store/1/AFRICAN%20MOON.png',
      description: 'Brainae University is Partner of African Moon University, promoting educational access and collaboration across Africa.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'JILCE International University and Seminary, Post Box BT329, Community 2, Tema, Accra, Ghana',
      imageUrl: 'https://brainae.org/store/1/JILCE.jpg',
      description: 'Brainae University is Partner of JILCE International University and Seminary, Post Box BT329, Community 2, Tema, Accra, Ghana, fostering theological education and academic partnerships.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'DK International Research Foundation, Perambalur, Tamilnadu, India',
      imageUrl: 'https://brainae.org/store/1/DK%20International%20Research%20Foundation.jpeg',
      description: 'Brainae University is Partner of DK International Research Foundation, Perambalur, Tamilnadu, India, supporting research initiatives and academic collaboration.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Saraswati Madhyamik Vidhyalay Vibha (A Subsidiary of: Shree Sarswati Vidhya Seva Mandal), Vibhapar, Jamnagar, Gujarat',
      imageUrl: 'https://brainae.org/store/1/Saraswati%20Madhyamik%20Vidhyalay%20Vibha.jpeg',
      description: 'Brainae University is Partner of Saraswati Madhyamik Vidhyalay Vibha (A Subsidiary of: Shree Sarswati Vidhya Seva Mandal), Vibhapar, Jamnagar, Gujarat, promoting educational excellence and collaboration.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Sarojini Research and Development Council, New Delhi / Odisha / Kerala / Karnataka / Tamilnadu',
      imageUrl: 'https://brainae.org/store/1/Sarojini%20Research%20and%20Development%20Council.png',
      description: 'Brainae University is Partner of Sarojini Research and Development Council, New Delhi / Odisha / Kerala / Karnataka / Tamilnadu, supporting research and development initiatives across India.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Saint Martin\'s Centre of Research & Accreditation Commission, Australia',
      imageUrl: 'https://brainae.org/store/1/Saint%20Martin%E2%80%99s%20Centre%20of%20Research%20&%20Accreditation%20Commission,%20Australia.jpeg',
      description: 'Brainae University is Partner of Saint Martin\'s Centre of Research & Accreditation Commission, Australia, promoting research excellence and quality assurance.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'International Human Rights and Social Justice Federation, Malaysia / Canada / USA / India',
      imageUrl: 'https://brainae.org/store/1/International%20Human%20Rights%20and%20Social%20Justice%20Federation,%20Malaysia.jpeg',
      description: 'Brainae University is Partner of International Human Rights and Social Justice Federation, Malaysia / Canada / USA / India, advancing human rights education and social justice initiatives.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Corporate Institute of Strategic Research, Abuja',
      imageUrl: 'https://brainae.org/store/1/Nigeria.jpeg',
      description: 'BRAINAE University is Partner of Corporate Institute of Strategic Research, Abuja, supporting strategic research and academic collaboration in Nigeria.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'CFPEM - ESIM Group, Burkina Fasso',
      imageUrl: 'https://brainae.org/store/1/burkina.png',
      description: 'BRAINAE University is Partner of CFPEM - ESIM Group, Burkina Fasso, fostering educational partnerships and academic exchange in West Africa.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Access to Human Rights International, Dhaka, Republic of Bangladesh',
      imageUrl: 'https://brainae.org/store/1/Access%20to%20Human%20Rights%20International,%20Dhaka,%20Republic%20of%20Bangladesh.jpeg',
      description: 'BRAINAE University is Partner of Access to Human Rights International, Dhaka, Republic of Bangladesh, promoting human rights education and advocacy.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Krisna International Institute, Rajender Nagar, Bareilly, Uttar Pradesh, India',
      imageUrl: 'https://brainae.org/store/1/Krisna%20International%20Institute,%20Rajender%20Nagar,%20Bareilly,%20Uttar%20Pradesh,%20India.jpeg',
      description: 'BRAINAE University is affiliated to Krisna International Institute, Rajender Nagar, Bareilly, Uttar Pradesh, India, supporting educational initiatives and academic collaboration.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Arbitrators Media Information, Minna Niger State, Nigeria',
      imageUrl: 'https://brainae.org/store/1/Arbitrators%20Media%20Information,%20Minna%20Niger%20State,%20Nigeria.jpeg',
      description: 'BRAINAE University is affiliated to Arbitrators Media Information, Minna Niger State, Nigeria, promoting media education and information literacy.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Global Institute of Peace Education and Research Centre, Eastern Province, Sri Lanka',
      imageUrl: 'https://brainae.org/store/1/Global%20Institute%20of%20Peace%20Education%20and%20Research%20Centre,%20Eastern%20Province,%20Sri%20Lanka.jpeg',
      description: 'BRAINAE University is Affiliated to Global Institute of Peace Education and Research Centre, Eastern Province, Sri Lanka, advancing peace education and research initiatives.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'International American Council for Research & Development, United States of America - India',
      imageUrl: 'https://brainae.org/store/1/International%20American%20Council%20for%20Research%20&%20Development,%20United%20States%20of%20America%20-%20India.jpeg',
      description: 'BRAINAE University is Affiliated to International American Council for Research & Development, United States of America - India, supporting research collaboration and development initiatives.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Grace International Bible University',
      imageUrl: 'https://brainae.org/store/1/GIBU.png',
      description: 'BRAINAE University is Partner of Grace International Bible University, promoting theological education and biblical studies.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Miracle Evangelism Bible College, Mpumalanga Province, South Africa',
      imageUrl: 'https://brainae.org/store/1/Miracle%20Evangelism%20Bible%20College,%20Mpumalanga%20Province,%20South%20Africa.jpeg',
      description: 'BRAINAE University is Affiliated to Miracle Evangelism Bible College, Mpumalanga Province, South Africa, supporting theological education and evangelism training.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'ISO 17024:2012 Conformity Assessment - General Requirements for Bodies Operating Certification of Persons',
      imageUrl: 'https://brainae.org/store/1/isooooo.png',
      description: 'ISO/IEC 17024:2012 specifies criteria for the operation of a personnel certification body. The standard includes requirements for the development and maintenance of the certification scheme for persons upon which the certification is based.',
      website: '#',
      type: 'Certification',
    },
    {
      title: 'International Accreditation Board (IAB), USA/Delaware',
      imageUrl: 'https://brainae.org/store/accreditation_certificates/International%20Accreditation%20Board.png',
      description: 'IAB provides accreditation to Certification Bodies for various Management System Schemes as per ISO 17021, Personnel Certification Bodies as per ISO 17024, Inspection Bodies as per ISO 17020 based on assessment of their competence.',
      website: 'https://iabonline.org/',
      type: 'Accreditation',
    },
    {
      title: 'Northwest International University',
      imageUrl: 'https://brainae.org/store/accreditation_certificates/Northwest%20International%20University.jpeg',
      description: 'BRAINAE University is in Partnership with Northwest International University, fostering academic collaboration and student exchange programs.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'Continuing Professional Development (CPD) Provider',
      imageUrl: 'https://brainae.org/store/accreditation_certificates/CPD%20Provider.png',
      description: 'BRAINAE University is fully Certified Continuing Professional Development (CPD) Provider, enabling professionals to maintain and enhance their skills through ongoing education.',
      website: '#',
      type: 'Certification',
    },
    {
      title: 'TARABA Business School',
      imageUrl: 'https://brainae.org/store/accreditation_certificates/result-economy-success-report-solution-statistics.jpg',
      description: 'TARABA Business School is Partner of BRAINAE University, promoting business education and professional development.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'ISO 21001:2018 Educational Organizations',
      imageUrl: 'https://brainae.org/images/accreditations/1719236324.jpg',
      description: 'ISO 21001:2018 specifies requirements for a management system for educational organizations (EOMS) when such an organization needs to demonstrate its ability to support the acquisition and development of competence through teaching, learning or research.',
      website: '#',
      type: 'Certification',
    },
    {
      title: 'Kesmonds International University',
      imageUrl: 'https://brainae.org/images/accreditations/1719236365.jpg',
      description: 'BRAINAE University is an Affiliated Partner of Kesmonds International University, supporting international educational collaboration and academic excellence.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'GEPEA University',
      imageUrl: 'https://brainae.org/images/accreditations/1719236413.jpg',
      description: 'Brainae University is Admitted Affiliate Partner of GEPEA University, fostering academic partnerships and collaborative research.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'International European Accreditation Forum',
      imageUrl: 'https://brainae.org/images/accreditations/1719236497.jpg',
      description: 'The Board of directors in recommendation of an affiliation and accreditation committee by virtue of authority vested in them, hereby confers upon Brainae University, Delaware, United States of America with this certified affiliation.',
      website: '#',
      type: 'Accreditation',
    },
    {
      title: 'Christian Theological Accreditation International',
      imageUrl: 'https://brainae.org/images/accreditations/1719236547.jpg',
      description: 'Brainae University is Fully Accredited by Christian Theological Accreditation International, recognizing our commitment to excellence in theological education and Christian studies.',
      website: '#',
      type: 'Accreditation',
    },
    {
      title: 'Revival Bible University',
      imageUrl: 'https://brainae.org/images/accreditations/1719236256.jpg',
      description: 'BRAINAE University signed Partnership Agreement with Revival Bible University, promoting biblical education and theological training.',
      website: '#',
      type: 'Partnership',
    },
    {
      title: 'World Human Rights Education Commission',
      imageUrl: 'https://brainae.org/images/accreditations/1719236602.jpg',
      description: 'World Human Rights Education Commission (WHREC) is an autonomous, voluntary non-governmental, non-partisan and non-profit organization envisioning to uphold, protect and enforce the human rights of all under-served communities.',
      website: 'http://whrec.org/',
      type: 'Accreditation',
    },
    {
      title: 'European Council for Higher Education and Accreditation (ECHEA)',
      imageUrl: 'https://brainae.org/images/accreditations/1719236017.png',
      description: 'ECHEA is a non-governmental, independent, and international quality assurance, rating, and accreditation agency working to improve quality assurance standards of educational organizations all over the world.',
      website: 'https://echea.uk/about-us.php',
      type: 'Accreditation',
    },
    {
      title: 'Confederation of International Universities',
      imageUrl: 'https://brainae.org/images/accreditations/1729948767.jpg',
      description: 'Brainae University is a member of Confederation of International Universities, joining a global network of institutions committed to international education and collaboration.',
      website: '#',
      type: 'Membership',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Accreditations & Certifications</h1>
          <p className="text-xl text-primary-100">
            Recognized excellence in quality assurance and educational standards
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 border border-gray-200 p-8 mb-12">
              <p className="text-lg text-gray-700 mb-4">
                BRAINAE University is proud to be accredited and certified by multiple international 
                organizations that recognize our commitment to excellence in education, quality management, 
                and institutional performance.
              </p>
              <p className="text-lg text-gray-700">
                These accreditations and certifications demonstrate our dedication to maintaining the 
                highest standards in academic programs, institutional management, and student services. 
                They validate our commitment to continuous improvement and quality assurance in all 
                aspects of our educational delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Grid */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Accreditations & Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accreditations.map((accreditation, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
                >
                  <div className="mb-4 flex items-center justify-center h-32 bg-gray-50 rounded relative">
                    <Image
                      src={accreditation.imageUrl}
                      alt={accreditation.title}
                      width={200}
                      height={128}
                      className="object-contain"
                      style={{ maxHeight: '100%', maxWidth: '100%' }}
                      unoptimized={accreditation.imageUrl.startsWith('http')}
                    />
                  </div>
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                      accreditation.type === 'Certification' 
                        ? 'bg-blue-100 text-blue-800' 
                        : accreditation.type === 'Partnership'
                        ? 'bg-purple-100 text-purple-800'
                        : accreditation.type === 'Membership'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {accreditation.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {accreditation.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {accreditation.description}
                  </p>
                  {accreditation.website && accreditation.website !== '#' && (
                    <a
                      href={accreditation.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-primary-600 font-semibold inline-flex items-center"
                    >
                      Learn More
                      <Icon icon={faCheckCircle} className="ml-2" size="sm" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Accreditations Matter</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-6 hover:border-primary transition-colors">
                <Icon icon={faAward} className="text-primary mb-4" size="2x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Our accreditations ensure that our programs meet international standards for 
                  educational quality, curriculum design, and student outcomes.
                </p>
              </div>
              <div className="border border-gray-200 p-6 hover:border-primary transition-colors">
                <Icon icon={faCertificate} className="text-primary mb-4" size="2x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Recognition</h3>
                <p className="text-gray-600 text-sm">
                  Our certifications are recognized internationally, providing credibility and 
                  value to our degrees and certificates worldwide.
                </p>
              </div>
              <div className="border border-gray-200 p-6 hover:border-primary transition-colors">
                <Icon icon={faCheckCircle} className="text-primary mb-4" size="2x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
                <p className="text-gray-600 text-sm">
                  Accreditation processes require ongoing evaluation and improvement, ensuring 
                  we maintain the highest standards in all our operations.
                </p>
              </div>
              <div className="border border-gray-200 p-6 hover:border-primary transition-colors">
                <Icon icon={faAward} className="text-primary mb-4" size="2x" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Confidence</h3>
                <p className="text-gray-600 text-sm">
                  Students can be confident that their education meets rigorous standards and 
                  that their credentials will be respected by employers and institutions globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join an Accredited Institution?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who trust BRAINAE University for quality education 
              backed by international accreditations and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/application"
                className="bg-white text-primary px-8 py-3 rounded hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Apply Now
              </a>
              <a
                href="/contact"
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

