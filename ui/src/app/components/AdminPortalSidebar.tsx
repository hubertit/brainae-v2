'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Icon, {
  faHome,
  faUsers,
  faBook,
  faUserGraduate,
  faCog,
  faAward,
  faFileAlt,
  faUserShield,
  faChevronLeft,
  faChevronRight,
  faBars,
} from './Icon';

interface AdminPortalSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export default function AdminPortalSidebar({ isOpen, onClose, onCollapsedChange }: AdminPortalSidebarProps) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [userInfo, setUserInfo] = useState<{ name?: string; email?: string; role?: string } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('adminSidebarCollapsed');
      if (saved !== null) {
        const isCollapsed = saved === 'true';
        setCollapsed(isCollapsed);
        onCollapsedChange?.(isCollapsed);
      }
    }
  }, [onCollapsedChange]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminSidebarCollapsed', collapsed.toString());
      onCollapsedChange?.(collapsed);
    }
  }, [collapsed, onCollapsedChange]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const authRaw = sessionStorage.getItem('brainaeAuth');
        if (authRaw) {
          const auth = JSON.parse(authRaw) as { role?: string; name?: string; email?: string } | null;
          if (auth?.role === 'admin') {
            setUserInfo({
              name: auth.name || 'Administrator',
              email: auth.email || '',
              role: 'Admin',
            });
            return;
          }
        }

        const fallbackName = sessionStorage.getItem('adminName');
        if (fallbackName) {
          setUserInfo({ name: fallbackName, email: 'admin@brainae.edu', role: 'Admin' });
        } else {
          setUserInfo({ name: 'Administrator', email: 'admin@brainae.edu', role: 'Admin' });
        }
      } catch (error) {
        console.error('Unable to load admin info', error);
        setUserInfo({ name: 'Administrator', email: 'admin@brainae.edu', role: 'Admin' });
      }
    }
  }, []);

  const menuItems = [
    { icon: faHome, label: 'Dashboard', href: '/admin/dashboard' },
    { icon: faUserGraduate, label: 'Students', href: '/admin/students' },
    { icon: faBook, label: 'Courses', href: '/admin/courses' },
    { icon: faUsers, label: 'Instructors', href: '/admin/instructors' },
    { icon: faFileAlt, label: 'Applications', href: '/admin/applications' },
    { icon: faAward, label: 'Reports', href: '/admin/reports' },
    { icon: faCog, label: 'Settings', href: '/admin/settings' },
  ];

  const isActive = (href: string) => {
    if (href === '/admin/dashboard') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

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
        <div className="p-5 border-b border-gray-200 flex-shrink-0">
          <div className={`flex items-center ${collapsed ? 'justify-center' : 'gap-2'}`}>
            <Image
              src="/icon.png"
              alt="Brainae University"
              width={64}
              height={64}
              className="w-10 h-10 flex-shrink-0 rounded-full border border-gray-300"
            />
            {!collapsed && (
              <div className="flex items-center gap-2 flex-1">
                <h2 className="text-lg font-semibold text-gray-900">Admin Portal</h2>
                <button
                  onClick={() => setCollapsed(true)}
                  className="ml-auto p-1.5 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-700"
                  aria-label="Collapse sidebar"
                  title="Collapse sidebar"
                >
                  <Icon icon={faBars} size="sm" />
                </button>
              </div>
            )}
            {collapsed && (
              <button
                onClick={() => setCollapsed(false)}
                className="p-1.5 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-700"
                aria-label="Expand sidebar"
                title="Expand sidebar"
              >
                <Icon icon={faBars} size="sm" />
              </button>
            )}
          </div>
        </div>

        {/* User Information Section */}
        {userInfo && (
          <div className={`
            border-b border-gray-200 flex-shrink-0
            ${collapsed ? 'p-3 flex flex-col items-center' : 'p-5'}
          `}>
            <div className={`
              ${collapsed ? 'w-12 h-12' : 'w-24 h-24'}
              rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 ${collapsed ? '' : 'mx-auto mb-3'}
            `}>
              <Icon icon={faUserShield} className="text-gray-600" size={collapsed ? 'sm' : '2x'} />
            </div>
            {!collapsed && (
              <div className="text-center">
                <div className="text-sm font-semibold text-gray-900 mb-1 truncate">
                  {userInfo.name}
                </div>
                {userInfo.email && (
                  <div className="text-xs text-gray-600 mb-1 truncate">
                    {userInfo.email}
                  </div>
                )}
                <div className="text-xs text-blue-600 font-medium">
                  {userInfo.role}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation - Scrollable */}
        <nav className="flex-1 py-4 overflow-y-auto min-h-0">
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
                          ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }
                    `}
                    title={collapsed ? item.label : undefined}
                  >
                    <Icon
                      icon={item.icon}
                      className={active ? 'text-blue-600' : 'text-gray-500'}
                      size="sm"
                    />
                    {!collapsed && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex-shrink-0">
          {/* Back to Website */}
          <Link
            href="/"
            className={`
              flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors
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

