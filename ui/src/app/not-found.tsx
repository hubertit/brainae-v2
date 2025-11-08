import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import Icon, { faHome, faSearch, faEnvelope } from './components/Icon';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-extrabold text-primary opacity-20">404</h1>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
              <p className="text-xl text-gray-600 mb-2">
                Sorry, we couldn't find the page you're looking for.
              </p>
              <p className="text-gray-500">
                The page may have been moved, deleted, or the URL might be incorrect.
              </p>
            </div>

            {/* Helpful Links */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Here are some helpful links:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/"
                  className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon icon={faHome} className="mr-2" />
                  Home Page
                </Link>
                <Link
                  href="/programs"
                  className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon icon={faSearch} className="mr-2" />
                  Browse Programs
                </Link>
                <Link
                  href="/about"
                  className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon icon={faEnvelope} className="mr-2" />
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
              >
                <Icon icon={faHome} className="mr-2" />
                Go to Homepage
              </Link>
              <BackButton />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

