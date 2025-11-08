'use client';

import { useState } from 'react';
import Icon, {
  faCalendar,
  faClock,
  faGraduationCap,
  faFileAlt,
  faExclamationCircle,
  faChevronLeft,
  faChevronRight,
} from '../../components/Icon';

export default function StudentCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const importantDates = [
    {
      id: 1,
      title: 'Fall Semester Begins',
      date: 'Aug 15, 2024',
      type: 'semester',
      description: 'First day of Fall 2024 semester',
    },
    {
      id: 2,
      title: 'Midterm Exams',
      date: 'Oct 15, 2024',
      type: 'exam',
      description: 'Midterm examination period',
    },
    {
      id: 3,
      title: 'Thanksgiving Break',
      date: 'Nov 28, 2024',
      type: 'holiday',
      description: 'University closed for Thanksgiving',
    },
    {
      id: 4,
      title: 'Final Exams',
      date: 'Dec 15, 2024',
      type: 'exam',
      description: 'Final examination period begins',
    },
    {
      id: 5,
      title: 'Fall Semester Ends',
      date: 'Dec 22, 2024',
      type: 'semester',
      description: 'Last day of Fall 2024 semester',
    },
    {
      id: 6,
      title: 'Winter Break',
      date: 'Dec 23, 2024',
      type: 'holiday',
      description: 'University closed for winter break',
    },
    {
      id: 7,
      title: 'Spring Semester Begins',
      date: 'Jan 15, 2025',
      type: 'semester',
      description: 'First day of Spring 2025 semester',
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Assignment 4: Business Case Analysis',
      course: 'BUS 101',
      dueDate: 'Dec 15, 2024',
      dueTime: '11:59 PM',
      type: 'assignment',
    },
    {
      id: 2,
      title: 'Project 2: Data Structure Implementation',
      course: 'CS 201',
      dueDate: 'Dec 20, 2024',
      dueTime: '11:59 PM',
      type: 'project',
    },
    {
      id: 3,
      title: 'Final Exam',
      course: 'ACC 301',
      dueDate: 'Dec 22, 2024',
      dueTime: '11:59 PM',
      type: 'exam',
    },
  ];

  const getDateTypeIcon = (type: string) => {
    switch (type) {
      case 'semester':
        return faGraduationCap;
      case 'exam':
        return faFileAlt;
      case 'holiday':
        return faCalendar;
      case 'assignment':
        return faFileAlt;
      case 'project':
        return faFileAlt;
      default:
        return faCalendar;
    }
  };

  const getDateTypeColor = (type: string) => {
    switch (type) {
      case 'semester':
        return 'text-primary bg-primary/10';
      case 'exam':
        return 'text-red-600 bg-red-50';
      case 'holiday':
        return 'text-green-600 bg-green-50';
      case 'assignment':
        return 'text-blue-600 bg-blue-50';
      case 'project':
        return 'text-purple-600 bg-purple-50';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Calendar</h1>
        <p className="text-gray-600">View important dates, deadlines, and semester schedules</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Important Dates */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Important Dates</h2>
            <div className="space-y-4">
              {importantDates.map((date) => (
                <div
                  key={date.id}
                  className="flex items-start gap-4 p-4 border border-gray-200 hover:border-primary transition-colors"
                >
                  <div className={`w-12 h-12 ${getDateTypeColor(date.type)} flex items-center justify-center flex-shrink-0`}>
                    <Icon icon={getDateTypeIcon(date.type)} size="lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{date.title}</h3>
                    <p className="text-sm text-gray-600 mb-1">{date.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon icon={faCalendar} size="sm" />
                      <span>{date.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {upcomingDeadlines.map((deadline) => (
              <div
                key={deadline.id}
                className="p-4 border border-gray-200 hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                    <Icon icon={faExclamationCircle} className="text-gray-600" size="sm" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 text-sm mb-1">{deadline.title}</h3>
                    <p className="text-xs text-gray-600">{deadline.course}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 ml-11">
                  <Icon icon={faClock} size="sm" />
                  <span>{deadline.dueDate} at {deadline.dueTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

