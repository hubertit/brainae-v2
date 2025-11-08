'use client';

import { useState } from 'react';
import Icon, {
  faFileAlt,
  faSearch,
  faFilter,
  faClock,
  faCheckCircle,
  faExclamationCircle,
  faEye,
  faEdit,
  faCalendar,
  faUserGraduate,
  faBook,
  faArrowRight,
} from '../../components/Icon';

export default function LecturerGrading() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCourse, setFilterCourse] = useState('all');

  const assignments = [
    {
      id: 1,
      title: 'Case Study: Emerging Markets',
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      dueDate: 'Dec 15, 2024',
      dueTime: '11:59 PM',
      status: 'pending',
      totalStudents: 42,
      submissions: 24,
      graded: 0,
      points: 100,
      priority: 'high',
      description: 'Analyze emerging market opportunities and provide strategic recommendations.',
    },
    {
      id: 2,
      title: 'Midterm Exam Review',
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      dueDate: 'Dec 17, 2024',
      dueTime: '11:59 PM',
      status: 'pending',
      totalStudents: 67,
      submissions: 67,
      graded: 45,
      points: 200,
      priority: 'high',
      description: 'Comprehensive midterm examination covering financial analysis and valuation.',
    },
    {
      id: 3,
      title: 'Prototype Feedback Round',
      course: 'ENT 211',
      courseName: 'Innovation Lab',
      dueDate: 'Dec 19, 2024',
      dueTime: '11:59 PM',
      status: 'pending',
      totalStudents: 28,
      submissions: 12,
      graded: 0,
      points: 150,
      priority: 'medium',
      description: 'Submit prototype for peer and instructor feedback.',
    },
    {
      id: 4,
      title: 'Strategic Analysis Report',
      course: 'MGT 401',
      courseName: 'Strategic Management',
      dueDate: 'Dec 10, 2024',
      dueTime: '11:59 PM',
      status: 'in_progress',
      totalStudents: 35,
      submissions: 35,
      graded: 20,
      points: 100,
      priority: 'medium',
      description: 'Strategic analysis of a chosen company with recommendations.',
    },
    {
      id: 5,
      title: 'Leadership Reflection Essay',
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      dueDate: 'Nov 28, 2024',
      dueTime: '11:59 PM',
      status: 'completed',
      totalStudents: 42,
      submissions: 42,
      graded: 42,
      points: 80,
      priority: 'low',
      description: 'Reflect on leadership styles and personal development.',
    },
    {
      id: 6,
      title: 'Financial Modeling Project',
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      dueDate: 'Nov 25, 2024',
      dueTime: '11:59 PM',
      status: 'completed',
      totalStudents: 67,
      submissions: 67,
      graded: 67,
      points: 150,
      priority: 'low',
      description: 'Build a comprehensive financial model for a public company.',
    },
  ];

  const courses = ['All Courses', 'MBA 602', 'FIN 305', 'ENT 211', 'MGT 401'];

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesSearch = assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || assignment.status === filterStatus;
    const matchesCourse = filterCourse === 'all' || assignment.course === filterCourse;
    return matchesSearch && matchesStatus && matchesCourse;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1">
            Pending
          </span>
        );
      case 'in_progress':
        return (
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1">
            In Progress
          </span>
        );
      case 'completed':
        return (
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1">
            Completed
          </span>
        );
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1">
            High Priority
          </span>
        );
      case 'medium':
        return (
          <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1">
            Medium Priority
          </span>
        );
      case 'low':
        return (
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1">
            Low Priority
          </span>
        );
      default:
        return null;
    }
  };

  const getProgressPercentage = (graded: number, submissions: number) => {
    if (submissions === 0) return 0;
    return Math.round((graded / submissions) * 100);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Grade Assignments</h1>
        <p className="text-gray-600">Review and grade student submissions</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
          <input
            type="text"
            placeholder="Search assignments..."
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
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
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
        </div>
      </div>

      {/* Assignments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => {
          const progress = getProgressPercentage(assignment.graded, assignment.submissions);
          const pendingCount = assignment.submissions - assignment.graded;
          
          return (
            <div
              key={assignment.id}
              className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <Icon icon={faFileAlt} className="text-primary" size="lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{assignment.title}</h3>
                      <p className="text-sm text-gray-600">{assignment.course} - {assignment.courseName}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 ml-[52px]">{assignment.description}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {getStatusBadge(assignment.status)}
                  {getPriorityBadge(assignment.priority)}
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faUserGraduate} className="text-gray-500" size="sm" />
                      Total Students
                    </span>
                    <span className="font-semibold text-gray-900">{assignment.totalStudents}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faCheckCircle} className="text-gray-500" size="sm" />
                      Submissions
                    </span>
                    <span className="font-semibold text-gray-900">{assignment.submissions}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faEdit} className="text-gray-500" size="sm" />
                      Graded
                    </span>
                    <span className="font-semibold text-primary">{assignment.graded}</span>
                  </div>
                  {pendingCount > 0 && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center gap-2">
                        <Icon icon={faExclamationCircle} className="text-orange-500" size="sm" />
                        Pending
                      </span>
                      <span className="font-semibold text-orange-600">{pendingCount}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                      Due Date
                    </span>
                    <span className="font-semibold text-gray-900">{assignment.dueDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faClock} className="text-gray-500" size="sm" />
                      Due Time
                    </span>
                    <span className="font-semibold text-gray-900">{assignment.dueTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
                      Points
                    </span>
                    <span className="font-semibold text-gray-900">{assignment.points}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {assignment.status !== 'completed' && assignment.submissions > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>Grading Progress</span>
                    <span>{progress}% ({assignment.graded}/{assignment.submissions})</span>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                {pendingCount > 0 ? (
                  <a
                    href={`/lecturer/grading/${assignment.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Icon icon={faEdit} size="sm" />
                    <span>Grade {pendingCount} Pending</span>
                  </a>
                ) : assignment.status === 'completed' ? (
                  <a
                    href={`/lecturer/grading/${assignment.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <Icon icon={faEye} size="sm" />
                    <span>View All Grades</span>
                  </a>
                ) : (
                  <a
                    href={`/lecturer/grading/${assignment.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Icon icon={faEdit} size="sm" />
                    <span>Start Grading</span>
                  </a>
                )}
                <a
                  href={`/lecturer/courses`}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <Icon icon={faBook} size="sm" />
                  <span>View Course</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faFileAlt} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No assignments found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

