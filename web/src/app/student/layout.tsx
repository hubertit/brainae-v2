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
    if (pathname === '/student') {
      return;
    }

    try {
      const authRaw = sessionStorage.getItem('brainaeAuth');
      if (!authRaw) {
        router.replace('/login?role=student');
        return;
      }

      const auth = JSON.parse(authRaw) as { role?: string; name?: string; email?: string } | null;
      if (!auth || auth.role !== 'student') {
        router.replace('/login?role=student');
        return;
      }

      setStudentName(auth.name || auth.email || 'Student');
    } catch (error) {
      console.error('Failed to read authentication state', error);
      router.replace('/login?role=student');
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

