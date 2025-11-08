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
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [lecturerName, setLecturerName] = useState('');

  useEffect(() => {
    if (pathname === '/lecturer/login') {
      return;
    }

    try {
      const authRaw = sessionStorage.getItem('brainaeAuth');
      if (!authRaw) {
        router.replace('/login?role=lecturer');
        return;
      }

      const auth = JSON.parse(authRaw) as { role?: string; name?: string; email?: string } | null;
      if (!auth || auth.role !== 'lecturer') {
        router.replace('/login?role=lecturer');
        return;
      }

      setLecturerName(auth.name || auth.email || 'Lecturer');
    } catch (error) {
      console.error('Failed to read authentication state', error);
      router.replace('/login?role=lecturer');
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
        sidebarCollapsed={sidebarCollapsed}
      />
      <div className="flex">
        <LecturerPortalSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onCollapsedChange={setSidebarCollapsed}
        />
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
          <div className="p-4 sm:p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

