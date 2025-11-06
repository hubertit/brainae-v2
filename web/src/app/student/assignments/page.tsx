'use client';

import { useState } from 'react';
import Icon, {
  faFileAlt,
  faSearch,
  faFilter,
  faClock,
  faCheckCircle,
  faExclamationCircle,
  faUpload,
  faDownload,
  faEye,
  faCalendar,
} from '../../components/Icon';

export default function StudentAssignments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCourse, setFilterCourse] = useState('all');

  const assignments = [
    {
      id: 1,
      title: 'Assignment 4: Business Case Analysis',
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      dueDate: 'Dec 15, 2024',
      dueTime: '11:59 PM',
      status: 'pending',
      submittedDate: null,
      grade: null,
      points: 100,
      description: 'Analyze the provided business case and provide recommendations.',
    },
    {
      id: 2,
      title: 'Project 2: Data Structure Implementation',
      course: 'CS 201',
      courseName: 'Data Structures and Algorithms',
      dueDate: 'Dec 20, 2024',
      dueTime: '11:59 PM',
      status: 'in_progress',
      submittedDate: null,
      grade: null,
      points: 150,
      description: 'Implement a binary search tree with all required operations.',
    },
    {
      id: 3,
      title: 'Final Exam',
      course: 'ACC 301',
      courseName: 'Financial Accounting',
      dueDate: 'Dec 22, 2024',
      dueTime: '11:59 PM',
      status: 'pending',
      submittedDate: null,
      grade: null,
      points: 200,
      description: 'Comprehensive final examination covering all course materials.',
    },
    {
      id: 4,
      title: 'Assignment 3: Marketing Strategy',
      course: 'MKT 201',
      courseName: 'Marketing Principles',
      dueDate: 'Dec 10, 2024',
      dueTime: '11:59 PM',
      status: 'submitted',
      submittedDate: 'Dec 10, 2024',
      grade: null,
      points: 100,
      description: 'Develop a comprehensive marketing strategy for a new product.',
    },
    {
      id: 5,
      title: 'Midterm Exam',
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      dueDate: 'Nov 30, 2024',
      dueTime: '11:59 PM',
      status: 'graded',
      submittedDate: 'Nov 30, 2024',
      grade: 'A',
      points: 100,
      description: 'Midterm examination covering chapters 1-5.',
    },
    {
      id: 6,
      title: 'Project 1: Algorithm Analysis',
      course: 'CS 201',
      courseName: 'Data Structures and Algorithms',
      dueDate: 'Nov 25, 2024',
      dueTime: '11:59 PM',
      status: 'graded',
      submittedDate: 'Nov 25, 2024',
      grade: 'B+',
      points: 150,
      description: 'Analyze the time complexity of various sorting algorithms.',
    },
  ];

  const courses = ['All Courses', 'BUS 101', 'CS 201', 'ACC 301', 'MKT 201'];

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
      case 'submitted':
        return (
          <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1">
            Submitted
          </span>
        );
      case 'graded':
        return (
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1">
            Graded
          </span>
        );
      default:
        return null;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return faExclamationCircle;
      case 'in_progress':
        return faClock;
      case 'submitted':
        return faCheckCircle;
      case 'graded':
        return faCheckCircle;
      default:
        return faFileAlt;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assessments</h1>
        <p className="text-gray-600">View and manage all your assessments, exams, and assignments</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
          <input
            type="text"
            placeholder="Search assessments..."
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
            <option value="submitted">Submitted</option>
            <option value="graded">Graded</option>
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

      {/* Assessments List */}
      <div className="space-y-4">
        {filteredAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                    <Icon icon={getStatusIcon(assignment.status)} className="text-gray-600" size="lg" />
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
                {assignment.grade && (
                  <span className="text-lg font-bold text-primary">{assignment.grade}</span>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                <span>Due: {assignment.dueDate} at {assignment.dueTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
                <span>{assignment.points} points</span>
              </div>
              {assignment.submittedDate && (
                <div className="flex items-center gap-2">
                  <Icon icon={faCheckCircle} className="text-gray-500" size="sm" />
                  <span>Submitted: {assignment.submittedDate}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {assignment.status === 'pending' || assignment.status === 'in_progress' ? (
                <>
                  <a
                    href={`/student/exam/${assignment.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Icon icon={faUpload} size="sm" />
                    <span>Take Exam/Assignment</span>
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Icon icon={faDownload} size="sm" />
                    <span>Download</span>
                  </button>
                </>
              ) : assignment.status === 'submitted' ? (
                <>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Icon icon={faEye} size="sm" />
                    <span>View Submission</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Icon icon={faDownload} size="sm" />
                    <span>Download</span>
                  </button>
                </>
              ) : (
                <>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Icon icon={faEye} size="sm" />
                    <span>View Feedback</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                    <Icon icon={faDownload} size="sm" />
                    <span>Download</span>
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredAssignments.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faFileAlt} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No assessments found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

