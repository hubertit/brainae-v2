'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon, { faBars, faTimes, faBell, faRightFromBracket, faUser } from './Icon';

interface StudentPortalHeaderProps {
  studentName?: string;
  onMenuToggle?: () => void;
  sidebarOpen?: boolean;
}

export default function StudentPortalHeader({ 
  studentName = 'Student',
  onMenuToggle,
  sidebarOpen = false 
}: StudentPortalHeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem('studentLoggedIn');
    sessionStorage.removeItem('studentEmail');
    sessionStorage.removeItem('studentName');
    sessionStorage.removeItem('studentId');
    document.cookie = 'studentLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/student');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Menu Toggle & Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <Icon icon={sidebarOpen ? faTimes : faBars} className="text-gray-700" />
            </button>
            <a href="/student/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BU</span>
              </div>
              <span className="font-bold text-gray-900 hidden sm:inline">Student Portal</span>
            </a>
          </div>

          {/* Right: Notifications & User Menu */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Icon icon={faBell} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">{studentName}</p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon icon={faUser} className="text-primary" />
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600 hover:text-red-600"
                aria-label="Logout"
              >
                <Icon icon={faRightFromBracket} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

