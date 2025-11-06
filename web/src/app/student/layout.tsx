'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import StudentPortalHeader from '../components/StudentPortalHeader';
import StudentPortalSidebar from '../components/StudentPortalSidebar';

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    // Check authentication
    const loggedIn = sessionStorage.getItem('studentLoggedIn');
    const email = sessionStorage.getItem('studentEmail');
    const name = sessionStorage.getItem('studentName');

    if (!loggedIn || !email) {
      if (pathname !== '/student') {
        router.push('/student');
      }
    } else {
      setStudentName(name || email);
    }
  }, [router, pathname]);

  // Don't show layout on login page
  if (pathname === '/student') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <StudentPortalHeader
        studentName={studentName}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex">
        <StudentPortalSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 lg:ml-64 transition-all duration-300">
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

