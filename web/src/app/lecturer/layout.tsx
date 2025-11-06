'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import LecturerPortalHeader from '../components/LecturerPortalHeader';
import LecturerPortalSidebar from '../components/LecturerPortalSidebar';

export default function LecturerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lecturerName, setLecturerName] = useState('');

  useEffect(() => {
    const loggedIn = document.cookie.includes('lecturerLoggedIn=true');
    if (!loggedIn) {
      if (pathname !== '/lecturer/login') {
        router.push('/lecturer/login');
      }
    } else {
      setLecturerName('Professor');
    }
  }, [router, pathname]);

  if (pathname === '/lecturer/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <LecturerPortalHeader
        lecturerName={lecturerName}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex">
        <LecturerPortalSidebar
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

