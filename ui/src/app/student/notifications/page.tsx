'use client';

import { useState } from 'react';
import Icon, {
  faBell,
  faNewspaper,
  faAward,
  faFileAlt,
  faCheckCircle,
  faFilter,
  faTrash,
} from '../../components/Icon';

interface Notification {
  id: number;
  type: 'announcement' | 'grade' | 'deadline' | 'course' | 'system';
  title: string;
  course?: string;
  message?: string;
  time: string;
  date: string;
  read: boolean;
  icon: any;
}

export default function NotificationsPage() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'announcement',
      title: 'Winter Semester Registration Opens',
      message: 'Registration for Winter 2025 semester is now open. Please register before December 20, 2024.',
      time: '2 hours ago',
      date: 'Dec 12, 2024',
      read: false,
      icon: faNewspaper,
    },
    {
      id: 2,
      type: 'grade',
      title: 'Grade received for Assignment 4',
      course: 'BUS 101',
      message: 'You received a grade of A (95/100) for Assignment 4: Business Case Analysis.',
      time: '5 hours ago',
      date: 'Dec 12, 2024',
      read: false,
      icon: faAward,
    },
    {
      id: 3,
      type: 'deadline',
      title: 'Assignment 5 due in 2 days',
      course: 'CS 201',
      message: 'Project 2: Data Structure Implementation is due on December 20, 2024 at 11:59 PM.',
      time: '1 day ago',
      date: 'Dec 11, 2024',
      read: true,
      icon: faFileAlt,
    },
    {
      id: 4,
      type: 'announcement',
      title: 'Library Extended Hours for Finals',
      message: 'The library will have extended hours during finals week. Open 24/7 from December 15-22.',
      time: '2 days ago',
      date: 'Dec 10, 2024',
      read: true,
      icon: faNewspaper,
    },
    {
      id: 5,
      type: 'course',
      title: 'New course material available',
      course: 'ACC 301',
      message: 'New lecture slides and reading materials have been uploaded for Module 3.',
      time: '3 days ago',
      date: 'Dec 9, 2024',
      read: true,
      icon: faFileAlt,
    },
    {
      id: 6,
      type: 'grade',
      title: 'Grade received for Quiz 5',
      course: 'ACC 301',
      message: 'You received a grade of A- (92/100) for Quiz 5.',
      time: '4 days ago',
      date: 'Dec 8, 2024',
      read: true,
      icon: faAward,
    },
    {
      id: 7,
      type: 'deadline',
      title: 'Final Exam scheduled',
      course: 'BUS 101',
      message: 'Final Exam for Introduction to Business Management is scheduled for December 22, 2024 at 10:00 AM.',
      time: '5 days ago',
      date: 'Dec 7, 2024',
      read: true,
      icon: faFileAlt,
    },
    {
      id: 8,
      type: 'system',
      title: 'System maintenance scheduled',
      message: 'Scheduled maintenance will occur on December 15, 2024 from 2:00 AM to 4:00 AM. The system will be unavailable during this time.',
      time: '1 week ago',
      date: 'Dec 5, 2024',
      read: true,
      icon: faBell,
    },
  ]);

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'bg-blue-100 text-blue-600';
      case 'grade':
        return 'bg-green-100 text-green-600';
      case 'deadline':
        return 'bg-red-100 text-red-600';
      case 'course':
        return 'bg-purple-100 text-purple-600';
      case 'system':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">
              {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount !== 1 ? 's' : ''}` : 'All caught up!'}
            </p>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Mark all as read
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon icon={faFilter} className="text-gray-600" size="sm" />
            <span className="text-sm text-gray-600">Filter:</span>
          </div>
          <div className="flex gap-2">
            {(['all', 'unread', 'read'] as const).map((filterOption) => (
              <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  filter === filterOption
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
                {filterOption === 'unread' && unreadCount > 0 && (
                  <span className="ml-2 bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white border border-gray-200">
        {filteredNotifications.length === 0 ? (
          <div className="p-12 text-center">
            <Icon icon={faBell} className="text-gray-400 mb-4" size="3x" />
            <p className="text-gray-600">No notifications found.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-6 hover:bg-gray-50 transition-colors ${
                  !notification.read ? 'bg-primary/5' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${
                    !notification.read ? 'bg-primary/10' : 'bg-gray-100'
                  }`}>
                    <Icon
                      icon={notification.icon}
                      className={!notification.read ? 'text-primary' : 'text-gray-600'}
                      size="lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                          )}
                        </div>
                        {notification.course && (
                          <span className={`inline-block px-2 py-0.5 text-xs font-medium ${getNotificationColor(notification.type)}`}>
                            {notification.course}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            title="Mark as read"
                          >
                            <Icon icon={faCheckCircle} className="text-gray-500" size="sm" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 hover:bg-red-50 hover:text-red-600 transition-colors"
                          title="Delete"
                        >
                          <Icon icon={faTrash} className="text-gray-500" size="sm" />
                        </button>
                      </div>
                    </div>
                    {notification.message && (
                      <p className="text-sm text-gray-600 mb-3">{notification.message}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{notification.date}</span>
                      <span>•</span>
                      <span>{notification.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

