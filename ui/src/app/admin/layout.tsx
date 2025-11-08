'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import AdminPortalHeader from '../components/AdminPortalHeader';
import AdminPortalSidebar from '../components/AdminPortalSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [adminName, setAdminName] = useState('');

  useEffect(() => {
    if (pathname === '/admin/login') {
      return;
    }

    try {
      const authRaw = sessionStorage.getItem('brainaeAuth');
      if (!authRaw) {
        router.replace('/login?role=admin');
        return;
      }

      const auth = JSON.parse(authRaw) as { role?: string; name?: string; email?: string } | null;
      if (!auth || auth.role !== 'admin') {
        router.replace('/login?role=admin');
        return;
      }

      setAdminName(auth.name || auth.email || 'Administrator');
    } catch (error) {
      console.error('Failed to read authentication state', error);
      router.replace('/login?role=admin');
    }
  }, [router, pathname]);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminPortalHeader
        adminName={adminName}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
      />
      <div className="flex">
        <AdminPortalSidebar
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

