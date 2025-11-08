'use client';

import { useState } from 'react';
import Icon, {
  faCalendar,
  faClock,
  faVideo,
  faUsers,
  faFileAlt,
  faChalkboardTeacher,
  faChevronLeft,
  faChevronRight,
  faBook,
} from '../../components/Icon';

export default function LecturerCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const teachingSchedule = [
    {
      id: 1,
      title: 'MBA 602 • Leadership & Strategy',
      date: 'Dec 16, 2024',
      time: '09:00 AM - 10:30 AM',
      type: 'live_session',
      location: 'Zoom • Room 3',
      attendees: 42,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'FIN 305 • Corporate Finance',
      date: 'Dec 17, 2024',
      time: '11:00 AM - 12:30 PM',
      type: 'live_session',
      location: 'Main Hall • Room 201',
      attendees: 67,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Office Hours',
      date: 'Dec 16, 2024',
      time: '02:00 PM - 04:00 PM',
      type: 'office_hours',
      location: 'Virtual Office',
      attendees: null,
      status: 'upcoming',
    },
    {
      id: 4,
      title: 'ENT 211 • Innovation Lab',
      date: 'Dec 18, 2024',
      time: '02:00 PM - 03:30 PM',
      type: 'workshop',
      location: 'Lab Building • Room 5',
      attendees: 28,
      status: 'upcoming',
    },
    {
      id: 5,
      title: 'Faculty Meeting',
      date: 'Dec 19, 2024',
      time: '10:00 AM - 11:00 AM',
      type: 'meeting',
      location: 'Conference Room A',
      attendees: null,
      status: 'upcoming',
    },
    {
      id: 6,
      title: 'MGT 401 • Strategic Management',
      date: 'Dec 19, 2024',
      time: '10:00 AM - 11:30 AM',
      type: 'live_session',
      location: 'Business Hall • Room 301',
      attendees: 35,
      status: 'upcoming',
    },
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Grade: Case Study: Emerging Markets',
      course: 'MBA 602',
      dueDate: 'Dec 15, 2024',
      dueTime: '11:59 PM',
      type: 'grading',
      submissions: 24,
    },
    {
      id: 2,
      title: 'Grade: Midterm Exam Review',
      course: 'FIN 305',
      dueDate: 'Dec 17, 2024',
      dueTime: '11:59 PM',
      type: 'grading',
      submissions: 67,
    },
    {
      id: 3,
      title: 'Mark Attendance: MBA 602',
      course: 'MBA 602',
      dueDate: 'Dec 16, 2024',
      dueTime: '09:00 AM',
      type: 'attendance',
      submissions: null,
    },
  ];

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'live_session':
        return faVideo;
      case 'office_hours':
        return faUsers;
      case 'workshop':
        return faChalkboardTeacher;
      case 'meeting':
        return faUsers;
      case 'grading':
        return faFileAlt;
      case 'attendance':
        return faCalendar;
      default:
        return faCalendar;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'live_session':
        return 'text-blue-600 bg-blue-50';
      case 'office_hours':
        return 'text-green-600 bg-green-50';
      case 'workshop':
        return 'text-purple-600 bg-purple-50';
      case 'meeting':
        return 'text-orange-600 bg-orange-50';
      case 'grading':
        return 'text-red-600 bg-red-50';
      case 'attendance':
        return 'text-primary bg-primary/10';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'live_session':
        return 'Live Session';
      case 'office_hours':
        return 'Office Hours';
      case 'workshop':
        return 'Workshop';
      case 'meeting':
        return 'Meeting';
      case 'grading':
        return 'Grading Due';
      case 'attendance':
        return 'Attendance';
      default:
        return 'Event';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Teaching Calendar</h1>
        <p className="text-gray-600">View your teaching schedule, deadlines, and important dates</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Teaching Schedule */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Sessions</h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Icon icon={faChevronLeft} className="text-gray-600" size="sm" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Icon icon={faChevronRight} className="text-gray-600" size="sm" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {teachingSchedule.map((session) => (
                <div
                  key={session.id}
                  className="flex items-start gap-4 p-4 border border-gray-200 hover:border-primary transition-colors"
                >
                  <div className={`w-12 h-12 ${getEventTypeColor(session.type)} flex items-center justify-center flex-shrink-0`}>
                    <Icon icon={getEventTypeIcon(session.type)} size="lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1">{session.title}</h3>
                        <p className="text-xs text-gray-600 mb-1">{getEventTypeLabel(session.type)}</p>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 ${getEventTypeColor(session.type)}`}>
                        {getEventTypeLabel(session.type)}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon icon={faCalendar} size="sm" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon icon={faClock} size="sm" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon icon={faBook} size="sm" />
                        <span>{session.location}</span>
                      </div>
                      {session.attendees && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Icon icon={faUsers} size="sm" />
                          <span>{session.attendees} students enrolled</span>
                        </div>
                      )}
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
                  <div className={`w-8 h-8 ${getEventTypeColor(deadline.type)} flex items-center justify-center flex-shrink-0`}>
                    <Icon icon={getEventTypeIcon(deadline.type)} size="sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">{deadline.title}</h3>
                    <p className="text-xs text-gray-600">{deadline.course}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 ml-11">
                  <div className="flex items-center gap-1">
                    <Icon icon={faClock} size="sm" />
                    <span>{deadline.dueDate} at {deadline.dueTime}</span>
                  </div>
                  {deadline.submissions && (
                    <span className="text-xs font-semibold text-orange-600">{deadline.submissions} pending</span>
                  )}
                </div>
                <div className="mt-2 ml-11">
                  <a
                    href={deadline.type === 'grading' ? '/lecturer/grading' : '/lecturer/attendance'}
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    {deadline.type === 'grading' ? 'Go to Grading →' : 'Mark Attendance →'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

