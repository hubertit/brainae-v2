'use client';

import { useState } from 'react';
import Icon, {
  faUserGraduate,
  faSearch,
  faFilter,
  faEnvelope,
  faFileAlt,
  faAward,
  faCalendar,
  faBook,
  faArrowRight,
  faUsers,
  faClock,
} from '../../components/Icon';

export default function LecturerStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const students = [
    {
      id: 1,
      name: 'Samantha Reed',
      email: 'samantha.reed@brainae.edu',
      studentId: 'STU-2024-045',
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      status: 'active',
      attendance: 85,
      assignmentsSubmitted: 3,
      assignmentsTotal: 4,
      averageGrade: 'B+',
      lastActivity: 'Dec 12, 2024',
    },
    {
      id: 2,
      name: 'Daniel Obi',
      email: 'daniel.obi@brainae.edu',
      studentId: 'STU-2024-128',
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      status: 'at_risk',
      attendance: 62,
      assignmentsSubmitted: 2,
      assignmentsTotal: 5,
      averageGrade: 'C',
      lastActivity: 'Dec 8, 2024',
    },
    {
      id: 3,
      name: 'Lina Chen',
      email: 'lina.chen@brainae.edu',
      studentId: 'STU-2024-089',
      course: 'ENT 211',
      courseName: 'Innovation Lab',
      status: 'excellent',
      attendance: 98,
      assignmentsSubmitted: 3,
      assignmentsTotal: 3,
      averageGrade: 'A',
      lastActivity: 'Dec 13, 2024',
    },
    {
      id: 4,
      name: 'Marcus Johnson',
      email: 'marcus.johnson@brainae.edu',
      studentId: 'STU-2024-156',
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      status: 'active',
      attendance: 91,
      assignmentsSubmitted: 4,
      assignmentsTotal: 4,
      averageGrade: 'A-',
      lastActivity: 'Dec 13, 2024',
    },
    {
      id: 5,
      name: 'Priya Patel',
      email: 'priya.patel@brainae.edu',
      studentId: 'STU-2024-092',
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      status: 'active',
      attendance: 88,
      assignmentsSubmitted: 4,
      assignmentsTotal: 5,
      averageGrade: 'B+',
      lastActivity: 'Dec 12, 2024',
    },
    {
      id: 6,
      name: 'James Wilson',
      email: 'james.wilson@brainae.edu',
      studentId: 'STU-2024-201',
      course: 'MGT 401',
      courseName: 'Strategic Management',
      status: 'active',
      attendance: 79,
      assignmentsSubmitted: 5,
      assignmentsTotal: 6,
      averageGrade: 'B',
      lastActivity: 'Dec 11, 2024',
    },
  ];

  const courses = ['All Courses', 'MBA 602', 'FIN 305', 'ENT 211', 'MGT 401'];

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = filterCourse === 'all' || student.course === filterCourse;
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesCourse && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent':
        return (
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1">
            Excellent
          </span>
        );
      case 'active':
        return (
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1">
            Active
          </span>
        );
      case 'at_risk':
        return (
          <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1">
            At Risk
          </span>
        );
      default:
        return null;
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Students</h1>
        <p className="text-gray-600">View and manage your students across all courses</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
          <input
            type="text"
            placeholder="Search students by name, email, or ID..."
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
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          >
            <option value="all">All Status</option>
            <option value="excellent">Excellent</option>
            <option value="active">Active</option>
            <option value="at_risk">At Risk</option>
          </select>
        </div>
      </div>

      {/* Students List */}
      <div className="space-y-4">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon icon={faUserGraduate} className="text-primary" size="lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-gray-900">{student.name}</h3>
                    {getStatusBadge(student.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{student.email}</p>
                  <p className="text-xs text-gray-500">{student.studentId}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Icon icon={faBook} className="text-gray-400" size="sm" />
                    <span className="text-xs text-gray-600">{student.course} - {student.courseName}</span>
                  </div>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className={`text-2xl font-bold ${getGradeColor(student.averageGrade)}`}>
                  {student.averageGrade}
                </div>
                <div className="text-xs text-gray-600">Average</div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Attendance: <span className="font-semibold">{student.attendance}%</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Assignments: <span className="font-semibold">{student.assignmentsSubmitted}/{student.assignmentsTotal}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faClock} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Last Activity: <span className="font-semibold">{student.lastActivity}</span></span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href="/lecturer/messages"
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Icon icon={faEnvelope} size="sm" />
                <span>Message</span>
              </a>
              <a
                href="/lecturer/grading"
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Icon icon={faFileAlt} size="sm" />
                <span>View Work</span>
              </a>
              <a
                href="/lecturer/attendance"
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Icon icon={faCalendar} size="sm" />
                <span>Attendance</span>
              </a>
              <a
                href={`/lecturer/students/${student.id}`}
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                <span>View Profile</span>
                <Icon icon={faArrowRight} size="sm" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faUserGraduate} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No students found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

