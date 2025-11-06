'use client';

import { useState } from 'react';
import Icon, {
  faCalendar,
  faClock,
  faFileAlt,
  faFilter,
  faCheckCircle,
  faExclamationCircle,
} from '../../components/Icon';

interface Deadline {
  id: number;
  title: string;
  course: string;
  courseName: string;
  type: 'assignment' | 'exam' | 'quiz' | 'cat' | 'project';
  dueDate: string;
  dueTime: string;
  daysRemaining: number;
  status: 'upcoming' | 'due_today' | 'overdue' | 'completed';
  completed: boolean;
}

export default function DeadlinesPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'due_today' | 'overdue' | 'completed'>('all');

  const deadlines: Deadline[] = [
    {
      id: 1,
      title: 'Assignment 4: Business Case Analysis',
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      type: 'assignment',
      dueDate: 'Dec 15, 2024',
      dueTime: '11:59 PM',
      daysRemaining: 3,
      status: 'upcoming',
      completed: false,
    },
    {
      id: 2,
      title: 'Project 2: Data Structure Implementation',
      course: 'CS 201',
      courseName: 'Data Structures and Algorithms',
      type: 'project',
      dueDate: 'Dec 20, 2024',
      dueTime: '11:59 PM',
      daysRemaining: 8,
      status: 'upcoming',
      completed: false,
    },
    {
      id: 3,
      title: 'Module 2 CAT',
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      type: 'cat',
      dueDate: 'Dec 14, 2024',
      dueTime: '11:59 PM',
      daysRemaining: 2,
      status: 'due_today',
      completed: false,
    },
    {
      id: 4,
      title: 'Quiz 5',
      course: 'ACC 301',
      courseName: 'Financial Accounting',
      type: 'quiz',
      dueDate: 'Dec 10, 2024',
      dueTime: '11:59 PM',
      daysRemaining: -2,
      status: 'overdue',
      completed: false,
    },
    {
      id: 5,
      title: 'Final Exam',
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      type: 'exam',
      dueDate: 'Dec 22, 2024',
      dueTime: '10:00 AM',
      daysRemaining: 10,
      status: 'upcoming',
      completed: false,
    },
    {
      id: 6,
      title: 'Assignment 3',
      course: 'CS 201',
      courseName: 'Data Structures and Algorithms',
      type: 'assignment',
      dueDate: 'Dec 5, 2024',
      dueTime: '11:59 PM',
      daysRemaining: -7,
      status: 'completed',
      completed: true,
    },
  ];

  const filteredDeadlines = deadlines.filter((deadline) => {
    if (filter === 'all') return true;
    return deadline.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'due_today':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'overdue':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'due_today':
        return faExclamationCircle;
      case 'overdue':
        return faExclamationCircle;
      case 'completed':
        return faCheckCircle;
      default:
        return faClock;
    }
  };

  const upcomingCount = deadlines.filter(d => d.status === 'upcoming').length;
  const dueTodayCount = deadlines.filter(d => d.status === 'due_today').length;
  const overdueCount = deadlines.filter(d => d.status === 'overdue').length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Deadlines</h1>
        <p className="text-gray-600">Track all your assignments, exams, and important dates</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 p-6">
          <div className="text-2xl font-bold text-gray-900 mb-1">{upcomingCount}</div>
          <div className="text-sm text-gray-600">Upcoming</div>
        </div>
        <div className="bg-white border border-yellow-200 p-6 bg-yellow-50">
          <div className="text-2xl font-bold text-yellow-800 mb-1">{dueTodayCount}</div>
          <div className="text-sm text-yellow-700">Due Today</div>
        </div>
        <div className="bg-white border border-red-200 p-6 bg-red-50">
          <div className="text-2xl font-bold text-red-800 mb-1">{overdueCount}</div>
          <div className="text-sm text-red-700">Overdue</div>
        </div>
        <div className="bg-white border border-gray-200 p-6">
          <div className="text-2xl font-bold text-gray-900 mb-1">{deadlines.length}</div>
          <div className="text-sm text-gray-600">Total</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Icon icon={faFilter} className="text-gray-600" size="sm" />
          <span className="text-sm text-gray-600">Filter:</span>
        </div>
        <div className="flex gap-2">
          {(['all', 'upcoming', 'due_today', 'overdue', 'completed'] as const).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                filter === filterOption
                  ? 'bg-primary text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {filterOption === 'all' ? 'All' : filterOption === 'due_today' ? 'Due Today' : filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Deadlines List */}
      <div className="space-y-4">
        {filteredDeadlines.length === 0 ? (
          <div className="bg-white border border-gray-200 p-12 text-center">
            <Icon icon={faCalendar} className="text-gray-400 mb-4" size="3x" />
            <p className="text-gray-600">No deadlines found.</p>
          </div>
        ) : (
          filteredDeadlines.map((deadline) => (
            <div
              key={deadline.id}
              className={`bg-white border-2 p-6 ${
                deadline.status === 'due_today'
                  ? 'border-yellow-200 bg-yellow-50'
                  : deadline.status === 'overdue'
                  ? 'border-red-200 bg-red-50'
                  : deadline.status === 'completed'
                  ? 'border-green-200 bg-green-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`px-3 py-1 text-xs font-semibold border ${getStatusColor(deadline.status)}`}>
                      {deadline.type.toUpperCase()}
                    </div>
                    {deadline.completed && (
                      <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800">
                        Completed
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{deadline.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="font-medium">{deadline.course}</span>
                    <span>•</span>
                    <span>{deadline.courseName}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                      <span className="text-gray-700 font-medium">{deadline.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon={faClock} className="text-gray-500" size="sm" />
                      <span className="text-gray-700">{deadline.dueTime}</span>
                    </div>
                    {deadline.daysRemaining >= 0 && (
                      <div className={`flex items-center gap-2 ${
                        deadline.daysRemaining === 0
                          ? 'text-yellow-700'
                          : deadline.daysRemaining < 3
                          ? 'text-orange-700'
                          : 'text-gray-700'
                      }`}>
                        <Icon icon={getStatusIcon(deadline.status)} className="text-current" size="sm" />
                        <span className="font-medium">
                          {deadline.daysRemaining === 0
                            ? 'Due today'
                            : deadline.daysRemaining === 1
                            ? '1 day remaining'
                            : `${deadline.daysRemaining} days remaining`}
                        </span>
                      </div>
                    )}
                    {deadline.daysRemaining < 0 && (
                      <div className="flex items-center gap-2 text-red-700">
                        <Icon icon={faExclamationCircle} className="text-current" size="sm" />
                        <span className="font-medium">
                          {Math.abs(deadline.daysRemaining)} day{Math.abs(deadline.daysRemaining) !== 1 ? 's' : ''} overdue
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {!deadline.completed && (
                  <a
                    href={`/student/assignments`}
                    className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    View Details
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

