'use client';

import { useState } from 'react';
import Icon, {
  faBook,
  faSearch,
  faFilter,
  faClock,
  faUserGraduate,
  faArrowRight,
  faEdit,
  faUsers,
  faFileAlt,
  faCalendar,
  faVideo,
} from '../../components/Icon';

export default function LecturerCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const courses = [
    {
      id: 1,
      name: 'MBA 602 • Leadership & Strategy',
      code: 'MBA 602',
      enrolledStudents: 42,
      status: 'active',
      credits: 3,
      semester: 'Fall 2024',
      nextClass: 'Dec 16, 2024 - 09:00 AM',
      materials: 15,
      assignments: 4,
      pendingGrading: 8,
      completion: 82,
    },
    {
      id: 2,
      name: 'FIN 305 • Corporate Finance',
      code: 'FIN 305',
      enrolledStudents: 67,
      status: 'active',
      credits: 4,
      semester: 'Fall 2024',
      nextClass: 'Dec 17, 2024 - 11:00 AM',
      materials: 22,
      assignments: 5,
      pendingGrading: 12,
      completion: 74,
    },
    {
      id: 3,
      name: 'ENT 211 • Innovation Lab',
      code: 'ENT 211',
      enrolledStudents: 28,
      status: 'active',
      credits: 3,
      semester: 'Fall 2024',
      nextClass: 'Dec 18, 2024 - 02:00 PM',
      materials: 18,
      assignments: 3,
      pendingGrading: 5,
      completion: 68,
    },
    {
      id: 4,
      name: 'MGT 401 • Strategic Management',
      code: 'MGT 401',
      enrolledStudents: 35,
      status: 'active',
      credits: 3,
      semester: 'Fall 2024',
      nextClass: 'Dec 19, 2024 - 10:00 AM',
      materials: 12,
      assignments: 6,
      pendingGrading: 15,
      completion: 71,
    },
    {
      id: 5,
      name: 'BUS 501 • Advanced Business Analytics',
      code: 'BUS 501',
      enrolledStudents: 31,
      status: 'completed',
      credits: 3,
      semester: 'Summer 2024',
      nextClass: 'Completed',
      materials: 20,
      assignments: 0,
      pendingGrading: 0,
      completion: 100,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
        <p className="text-gray-600">Manage your courses, students, and teaching materials</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <Icon icon={faFilter} className="text-gray-600" size="sm" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          >
            <option value="all">All Courses</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            {/* Course Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Icon icon={faBook} className="text-primary" size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{course.name}</h3>
                    <p className="text-sm text-gray-600">{course.code}</p>
                  </div>
                </div>
              </div>
              {course.status === 'completed' && (
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1">
                  Completed
                </span>
              )}
            </div>

            {/* Course Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon icon={faUserGraduate} className="text-gray-500" size="sm" />
                <span>{course.enrolledStudents} Enrolled Students</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon icon={faClock} className="text-gray-500" size="sm" />
                <span>{course.semester} • {course.credits} Credits</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                <span>Next: {course.nextClass}</span>
              </div>
            </div>

            {/* Progress */}
            {course.status === 'active' && (
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                  <span>Course Completion</span>
                  <span>{course.completion}%</span>
                </div>
                <div className="w-full bg-gray-200 h-2">
                  <div
                    className="bg-primary h-2 transition-all"
                    style={{ width: `${course.completion}%` }}
                  />
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
              <span className="flex items-center gap-1">
                <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
                {course.materials} Materials
              </span>
              <span className="flex items-center gap-1">
                <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
                {course.assignments} Assignments
              </span>
              {course.pendingGrading > 0 && (
                <span className="flex items-center gap-1 text-orange-600 font-semibold">
                  <Icon icon={faFileAlt} className="text-orange-600" size="sm" />
                  {course.pendingGrading} Pending
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <a
                href={`/lecturer/courses/${course.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                <Icon icon={faEdit} size="sm" />
                <span>Manage Course</span>
              </a>
              <a
                href="/lecturer/grading"
                className="p-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors"
                title="Grade Assignments"
              >
                <Icon icon={faFileAlt} className="text-gray-600" size="sm" />
              </a>
              <a
                href="/lecturer/students"
                className="p-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors"
                title="View Students"
              >
                <Icon icon={faUsers} className="text-gray-600" size="sm" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faBook} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No courses found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

