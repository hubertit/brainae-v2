'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Icon, { faBars, faTimes, faBell, faRightFromBracket, faUser, faSearch, faCog, faChevronDown, faNewspaper, faAward, faFileAlt, faArrowRight } from './Icon';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Mock notifications data
  const notifications = [
    { id: 1, type: 'announcement', title: 'Winter Semester Registration Opens', time: '2 hours ago', read: false, icon: faNewspaper },
    { id: 2, type: 'grade', title: 'Grade received for Assignment 4', course: 'BUS 101', time: '5 hours ago', read: false, icon: faAward },
    { id: 3, type: 'deadline', title: 'Assignment 5 due in 2 days', course: 'CS 201', time: '1 day ago', read: true, icon: faFileAlt },
    { id: 4, type: 'announcement', title: 'Library Extended Hours for Finals', time: '2 days ago', read: true, icon: faNewspaper },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };

    if (userMenuOpen || notificationsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen, notificationsOpen]);

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
      <div className="flex items-center h-20">
        {/* Left: Menu Toggle & Logo - Fixed width matching sidebar */}
        <div className="flex items-center gap-4 px-4 sm:px-6 lg:px-8 lg:w-64 flex-shrink-0">
          <button
            onClick={onMenuToggle}
            className="p-2 hover:bg-gray-100 transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            <Icon icon={sidebarOpen ? faTimes : faBars} className="text-gray-700" />
          </button>
          <a href="/student/dashboard" className="flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="Brainae University"
              width={64}
              height={64}
              className="w-8 h-8 rounded-full border border-gray-300"
            />
            <span className="font-bold text-gray-900 hidden sm:inline">Student Portal</span>
          </a>
        </div>

        {/* Main Content Area - Search aligned with page content */}
        <div className="flex-1 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Search Input */}
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
              <input
                type="text"
                placeholder="Search courses, assignments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Right: Notifications & User Menu */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Notifications */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative p-2 hover:bg-gray-100 transition-colors"
                aria-label="Notifications"
              >
                <Icon icon={faBell} className="text-gray-700" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 shadow-lg z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    <Link
                      href="/student/notifications"
                      onClick={() => setNotificationsOpen(false)}
                      className="text-sm text-primary hover:text-primary/80"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="py-2">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No notifications
                      </div>
                    ) : (
                      notifications.slice(0, 5).map((notification) => (
                        <Link
                          key={notification.id}
                          href="/student/notifications"
                          onClick={() => setNotificationsOpen(false)}
                          className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                            !notification.read ? 'bg-primary/5' : ''
                          }`}
                        >
                          <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center ${
                            !notification.read ? 'bg-primary/10' : 'bg-gray-100'
                          }`}>
                            <Icon
                              icon={notification.icon}
                              className={!notification.read ? 'text-primary' : 'text-gray-600'}
                              size="sm"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm ${!notification.read ? 'font-semibold text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                            </p>
                            {notification.course && (
                              <p className="text-xs text-gray-500 mt-0.5">{notification.course}</p>
                            )}
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                          )}
                        </Link>
                      ))
                    )}
                  </div>
                  {notifications.length > 5 && (
                    <div className="p-3 border-t border-gray-200 text-center">
                      <Link
                        href="/student/notifications"
                        onClick={() => setNotificationsOpen(false)}
                        className="text-sm text-primary hover:text-primary/80 flex items-center justify-center gap-1"
                      >
                        View all notifications
                        <Icon icon={faArrowRight} size="xs" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-3 border-l border-gray-200 relative" ref={userMenuRef}>
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">{studentName}</p>
                <p className="text-xs text-gray-600">Student</p>
              </div>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-colors rounded-lg"
                aria-label="User menu"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon icon={faUser} className="text-primary" />
                </div>
                <Icon icon={faChevronDown} className={`text-gray-500 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} size="sm" />
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      href="/student/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Icon icon={faUser} className="text-gray-500" size="sm" />
                      <span>Profile</span>
                    </Link>
                    <Link
                      href="/student/settings"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Icon icon={faCog} className="text-gray-500" size="sm" />
                      <span>Settings</span>
                    </Link>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        handleLogout();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      <Icon icon={faRightFromBracket} className="text-gray-500" size="sm" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

