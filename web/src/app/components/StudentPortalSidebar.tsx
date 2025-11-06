'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Icon, {
  faHome,
  faBook,
  faCertificate,
  faFileAlt,
  faBookOpen,
  faDollarSign,
  faUser,
  faCog,
  faGraduationCap,
  faChevronLeft,
  faChevronRight,
} from './Icon';

interface StudentPortalSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudentPortalSidebar({ isOpen, onClose }: StudentPortalSidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [userInfo, setUserInfo] = useState<{ name?: string; email?: string; role?: string } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = sessionStorage.getItem('studentName');
      const email = sessionStorage.getItem('studentEmail');
      const studentId = sessionStorage.getItem('studentId');
      
      if (name || email) {
        setUserInfo({
          name: name || 'Student',
          email: email || '',
          role: 'Student',
        });
      }
    }
  }, []);

  const menuItems = [
    { icon: faHome, label: 'Dashboard', href: '/student/dashboard' },
    { icon: faBook, label: 'My Courses', href: '/student/courses' },
    { icon: faFileAlt, label: 'Assignments', href: '/student/assignments' },
    { icon: faCertificate, label: 'Grades & Transcripts', href: '/student/grades' },
    { icon: faBookOpen, label: 'E-Library', href: '/library/portal' },
    { icon: faDollarSign, label: 'Financial Info', href: '/student/financial' },
    { icon: faGraduationCap, label: 'Academic Records', href: '/student/records' },
    { icon: faUser, label: 'Profile', href: '/student/profile' },
    { icon: faCog, label: 'Settings', href: '/student/settings' },
  ];

  const isActive = (href: string) => {
    if (href === '/student/dashboard') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-50
          transform transition-all duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          ${collapsed ? 'w-20' : 'w-64'}
          flex flex-col
          overflow-y-auto
        `}
      >
        {/* Logo Section */}
        <div className="p-5 border-b border-gray-200">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2'}`}>
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">BU</span>
            </div>
            {!collapsed && (
              <h2 className="text-xl font-semibold text-gray-900">Student Portal</h2>
            )}
          </div>
        </div>

        {/* User Information Section */}
        {userInfo && (
          <div className={`
            p-5 border-b border-gray-200
            ${collapsed ? 'flex flex-col items-center' : ''}
          `}>
            <div className={`
              ${collapsed ? 'w-16 h-16' : 'w-24 h-24'}
              rounded-full bg-primary flex items-center justify-center flex-shrink-0 mx-auto mb-3
            `}>
              <Icon icon={faUser} className="text-white" size={collapsed ? 'lg' : '2x'} />
            </div>
            {!collapsed && (
              <div className="text-center">
                <div className="text-base font-semibold text-gray-900 mb-1 truncate">
                  {userInfo.name}
                </div>
                {userInfo.email && (
                  <div className="text-xs text-gray-600 mb-1 truncate">
                    {userInfo.email}
                  </div>
                )}
                <div className="text-xs text-primary font-medium">
                  {userInfo.role}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`
                      flex items-center gap-3 px-4 py-3
                      transition-all duration-200
                      ${collapsed ? 'justify-center' : ''}
                      ${
                        active
                          ? 'bg-primary/10 text-primary border-l-4 border-primary'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                      }
                    `}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon
                      icon={item.icon}
                      className={active ? 'text-primary' : 'text-gray-500'}
                      size="sm"
                    />
                    {!collapsed && (
                      <span className="font-medium">{item.label}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Collapse Toggle & Footer */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          {/* Collapse Toggle (Desktop only) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex w-full items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <Icon icon={collapsed ? faChevronRight : faChevronLeft} />
          </button>

          {/* Back to Website */}
          <Link
            href="/"
            className={`
              flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors
              ${collapsed ? 'justify-center' : ''}
            `}
            title={collapsed ? 'Back to Website' : undefined}
          >
            {!collapsed && <span>← Back to Website</span>}
            {collapsed && <Icon icon={faChevronLeft} />}
          </Link>
        </div>
      </aside>
    </>
  );
}

