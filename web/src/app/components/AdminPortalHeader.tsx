'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon, { faBars, faTimes, faBell, faRightFromBracket, faUserShield } from './Icon';

interface AdminPortalHeaderProps {
  adminName?: string;
  onMenuToggle?: () => void;
  sidebarOpen?: boolean;
}

export default function AdminPortalHeader({ 
  adminName = 'Admin',
  onMenuToggle,
  sidebarOpen = false 
}: AdminPortalHeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/admin/login');
  };

  return (
    <header className="bg-white border-b border-red-200 sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <Icon icon={sidebarOpen ? faTimes : faBars} className="text-gray-700" />
            </button>
            <a href="/admin/dashboard" className="flex items-center gap-2">
              <Image
                src="/icon.png"
                alt="BRAINAE University"
                width={64}
                height={64}
                className="w-8 h-8 rounded-full border border-gray-300"
              />
              <span className="font-bold text-gray-900 hidden sm:inline">Admin Portal</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Icon icon={faBell} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">{adminName}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Icon icon={faUserShield} className="text-red-600" />
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

