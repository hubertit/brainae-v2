'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Icon, {
  faBookOpen,
  faSearch,
  faDownload,
  faBook,
  faRightFromBracket,
} from '../../components/Icon';

export default function LibraryPortal() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Library can be accessed by students or lecturers
    const studentLoggedIn = document.cookie.includes('studentLoggedIn=true');
    const lecturerLoggedIn = document.cookie.includes('lecturerLoggedIn=true');
    
    if (!studentLoggedIn && !lecturerLoggedIn) {
      // Redirect to public library page or login
      router.push('/library');
    } else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">E-Library Portal</h1>
              <p className="text-primary-100">Access digital resources and materials</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'E-Books', count: '1,250+', icon: faBook, color: 'bg-blue-500' },
            { label: 'Journals', count: '450+', icon: faBookOpen, color: 'bg-green-500' },
            { label: 'Research Papers', count: '2,100+', icon: faDownload, color: 'bg-purple-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon icon={stat.icon} className="text-white" size="lg" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.count}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-4 mb-6">
            <Icon icon={faSearch} className="text-primary" size="lg" />
            <h2 className="text-xl font-bold text-gray-900">Search Library Resources</h2>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Search books, journals, articles..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            <div className="flex gap-4">
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors">
                Search
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Advanced Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

