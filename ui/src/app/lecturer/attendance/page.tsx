'use client';

import { useState } from 'react';
import Icon, {
  faCalendar,
  faSearch,
  faFilter,
  faUserGraduate,
  faCheckCircle,
  faTimes,
  faClock,
  faBook,
  faDownload,
  faEdit,
} from '../../components/Icon';

export default function LecturerAttendance() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [filterDate, setFilterDate] = useState('all');
  const [selectedSession, setSelectedSession] = useState<number | null>(null);

  const sessions = [
    {
      id: 1,
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      date: 'Dec 13, 2024',
      time: '09:00 AM - 10:30 AM',
      type: 'Live Session',
      totalStudents: 42,
      present: 38,
      absent: 4,
      late: 2,
    },
    {
      id: 2,
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      date: 'Dec 12, 2024',
      time: '11:00 AM - 12:30 PM',
      type: 'Live Session',
      totalStudents: 67,
      present: 62,
      absent: 5,
      late: 3,
    },
    {
      id: 3,
      course: 'ENT 211',
      courseName: 'Innovation Lab',
      date: 'Dec 11, 2024',
      time: '02:00 PM - 03:30 PM',
      type: 'Workshop',
      totalStudents: 28,
      present: 26,
      absent: 2,
      late: 1,
    },
    {
      id: 4,
      course: 'MGT 401',
      courseName: 'Strategic Management',
      date: 'Dec 10, 2024',
      time: '10:00 AM - 11:30 AM',
      type: 'Live Session',
      totalStudents: 35,
      present: 33,
      absent: 2,
      late: 0,
    },
  ];

  const attendanceRecords = [
    {
      sessionId: 1,
      students: [
        { id: 1, name: 'Samantha Reed', studentId: 'STU-2024-045', status: 'present', time: '09:05 AM' },
        { id: 2, name: 'Marcus Johnson', studentId: 'STU-2024-156', status: 'present', time: '09:02 AM' },
        { id: 3, name: 'Daniel Obi', studentId: 'STU-2024-128', status: 'absent', time: null },
        { id: 4, name: 'Lina Chen', studentId: 'STU-2024-089', status: 'late', time: '09:15 AM' },
        { id: 5, name: 'Priya Patel', studentId: 'STU-2024-092', status: 'present', time: '09:00 AM' },
      ],
    },
  ];

  const courses = ['All Courses', 'MBA 602', 'FIN 305', 'ENT 211', 'MGT 401'];
  const dates = ['All Dates', 'Dec 13, 2024', 'Dec 12, 2024', 'Dec 11, 2024', 'Dec 10, 2024'];

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch = session.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      session.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = filterCourse === 'all' || session.course === filterCourse;
    const matchesDate = filterDate === 'all' || session.date === filterDate;
    return matchesSearch && matchesCourse && matchesDate;
  });

  const getAttendanceRate = (present: number, total: number) => {
    return Math.round((present / total) * 100);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'present':
        return (
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 flex items-center gap-1">
            <Icon icon={faCheckCircle} size="sm" />
            Present
          </span>
        );
      case 'late':
        return (
          <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 flex items-center gap-1">
            <Icon icon={faClock} size="sm" />
            Late
          </span>
        );
      case 'absent':
        return (
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 flex items-center gap-1">
            <Icon icon={faTimes} size="sm" />
            Absent
          </span>
        );
      default:
        return null;
    }
  };

  const currentSessionStudents = selectedSession
    ? attendanceRecords.find(r => r.sessionId === selectedSession)?.students || []
    : [];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance</h1>
        <p className="text-gray-600">Track and manage student attendance across your courses</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
          <input
            type="text"
            placeholder="Search sessions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <Icon icon={faFilter} className="text-gray-600" size="sm" />
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          >
            {courses.map((course) => (
              <option key={course} value={course === 'All Courses' ? 'all' : course}>
                {course}
              </option>
            ))}
          </select>
          <select
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          >
            {dates.map((date) => (
              <option key={date} value={date === 'All Dates' ? 'all' : date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sessions List */}
      <div className="space-y-4 mb-8">
        {filteredSessions.map((session) => {
          const attendanceRate = getAttendanceRate(session.present, session.totalStudents);
          
          return (
            <div
              key={session.id}
              className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <Icon icon={faCalendar} className="text-primary" size="lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{session.courseName}</h3>
                      <p className="text-sm text-gray-600">{session.course} • {session.type}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{attendanceRate}%</div>
                  <div className="text-xs text-gray-600">Attendance Rate</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <Icon icon={faUserGraduate} className="text-gray-500" size="sm" />
                  <span className="text-gray-600">Total: <span className="font-semibold text-gray-900">{session.totalStudents}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon icon={faCheckCircle} className="text-green-500" size="sm" />
                  <span className="text-gray-600">Present: <span className="font-semibold text-green-600">{session.present}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon icon={faClock} className="text-orange-500" size="sm" />
                  <span className="text-gray-600">Late: <span className="font-semibold text-orange-600">{session.late}</span></span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Icon icon={faTimes} className="text-red-500" size="sm" />
                  <span className="text-gray-600">Absent: <span className="font-semibold text-red-600">{session.absent}</span></span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                  <span>{session.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon={faClock} className="text-gray-500" size="sm" />
                  <span>{session.time}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedSession(selectedSession === session.id ? null : session.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <Icon icon={faEdit} size="sm" />
                  <span>{selectedSession === session.id ? 'Hide' : 'View'} Details</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                  <Icon icon={faDownload} size="sm" />
                  <span>Export</span>
                </button>
              </div>

              {/* Student Details */}
              {selectedSession === session.id && currentSessionStudents.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Student Attendance</h4>
                  <div className="space-y-2">
                    {currentSessionStudents.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <Icon icon={faUserGraduate} className="text-gray-600" size="sm" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{student.name}</p>
                            <p className="text-xs text-gray-600">{student.studentId}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {student.time && (
                            <span className="text-xs text-gray-600">{student.time}</span>
                          )}
                          {getStatusBadge(student.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
              <Icon icon={faEdit} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Mark Today's Attendance</p>
              <p className="text-xs text-gray-600">Record attendance for today's sessions</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
              <Icon icon={faDownload} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Export Report</p>
              <p className="text-xs text-gray-600">Download attendance reports</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
              <Icon icon={faCalendar} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">View Calendar</p>
              <p className="text-xs text-gray-600">See upcoming sessions</p>
            </div>
          </button>
        </div>
      </div>

      {filteredSessions.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faCalendar} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No attendance sessions found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

