'use client';

import { useState } from 'react';
import Icon, {
  faCertificate,
  faSearch,
  faFilter,
  faDownload,
  faAward,
  faFileAlt,
  faCalendar,
  faBook,
  faGraduationCap,
} from '../../components/Icon';

export default function StudentGrades() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [activeTab, setActiveTab] = useState<'grades' | 'transcript'>('grades');

  const overallGPA = 3.8;
  const totalCredits = 45;
  const completedCredits = 42;

  const courseGrades = [
    {
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      credits: 3,
      semester: 'Fall 2024',
      grade: 'A',
      points: 4.0,
      assignments: [
        { name: 'Midterm Exam', grade: 'A', points: 95, maxPoints: 100 },
        { name: 'Assignment 1', grade: 'A-', points: 92, maxPoints: 100 },
        { name: 'Assignment 2', grade: 'B+', points: 88, maxPoints: 100 },
        { name: 'Final Project', grade: 'A', points: 96, maxPoints: 100 },
      ],
    },
    {
      course: 'CS 201',
      courseName: 'Data Structures and Algorithms',
      credits: 4,
      semester: 'Fall 2024',
      grade: 'B+',
      points: 3.3,
      assignments: [
        { name: 'Project 1', grade: 'B+', points: 88, maxPoints: 100 },
        { name: 'Quiz 1', grade: 'B', points: 85, maxPoints: 100 },
        { name: 'Project 2', grade: 'A-', points: 92, maxPoints: 100 },
        { name: 'Final Exam', grade: 'B', points: 83, maxPoints: 100 },
      ],
    },
    {
      course: 'ACC 301',
      courseName: 'Financial Accounting',
      credits: 3,
      semester: 'Fall 2024',
      grade: 'A-',
      points: 3.7,
      assignments: [
        { name: 'Quiz 5', grade: 'A-', points: 92, maxPoints: 100 },
        { name: 'Assignment 3', grade: 'A', points: 95, maxPoints: 100 },
        { name: 'Midterm', grade: 'B+', points: 88, maxPoints: 100 },
        { name: 'Final Exam', grade: 'A', points: 94, maxPoints: 100 },
      ],
    },
    {
      course: 'MKT 201',
      courseName: 'Marketing Principles',
      credits: 3,
      semester: 'Fall 2024',
      grade: 'B',
      points: 3.0,
      assignments: [
        { name: 'Assignment 1', grade: 'B', points: 85, maxPoints: 100 },
        { name: 'Assignment 2', grade: 'B+', points: 88, maxPoints: 100 },
        { name: 'Assignment 3', grade: 'B', points: 83, maxPoints: 100 },
      ],
    },
    {
      course: 'CS 150',
      courseName: 'Web Development Fundamentals',
      credits: 3,
      semester: 'Summer 2024',
      grade: 'A',
      points: 4.0,
      assignments: [
        { name: 'Final Project', grade: 'A', points: 96, maxPoints: 100 },
        { name: 'Midterm', grade: 'A-', points: 92, maxPoints: 100 },
      ],
    },
  ];

  const courses = ['All Courses', 'BUS 101', 'CS 201', 'ACC 301', 'MKT 201', 'CS 150'];

  const filteredGrades = courseGrades.filter((course) => {
    const matchesSearch = course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = filterCourse === 'all' || course.course === filterCourse;
    return matchesSearch && matchesCourse;
  });

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Grades & Transcripts</h1>
        <p className="text-gray-600">View your academic performance and download transcripts</p>
      </div>

      {/* GPA Summary */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Icon icon={faAward} className="text-gray-600" size="lg" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">{overallGPA}</div>
              <div className="text-sm text-gray-600">Overall GPA</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Icon icon={faGraduationCap} className="text-gray-600" size="lg" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">{completedCredits}</div>
              <div className="text-sm text-gray-600">Credits Completed</div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Icon icon={faCertificate} className="text-gray-600" size="lg" />
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">{totalCredits}</div>
              <div className="text-sm text-gray-600">Total Credits</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('grades')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'grades'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Course Grades
          </button>
          <button
            onClick={() => setActiveTab('transcript')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'transcript'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Transcript
          </button>
        </div>
      </div>

      {activeTab === 'grades' && (
        <>
          {/* Search and Filters */}
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

          {/* Grades List */}
          <div className="space-y-4">
            {filteredGrades.map((course, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                        <Icon icon={faBook} className="text-gray-600" size="lg" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.courseName}</h3>
                        <p className="text-sm text-gray-600">{course.course} • {course.credits} Credits • {course.semester}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${getGradeColor(course.grade)}`}>
                      {course.grade}
                    </div>
                    <div className="text-sm text-gray-600">{course.points.toFixed(1)} GPA</div>
                  </div>
                </div>

                {/* Assignment Breakdown */}
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Assignment Breakdown</h4>
                  <div className="space-y-2">
                    {course.assignments.map((assignment, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
                          <span className="text-gray-700">{assignment.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-gray-600">{assignment.points}/{assignment.maxPoints}</span>
                          <span className={`font-semibold ${getGradeColor(assignment.grade)}`}>
                            {assignment.grade}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'transcript' && (
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Official Transcript</h2>
              <p className="text-sm text-gray-600">Download your official academic transcript</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
              <Icon icon={faDownload} size="sm" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="space-y-4">
            {courseGrades.map((course, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{course.course} - {course.courseName}</p>
                  <p className="text-sm text-gray-600">{course.semester} • {course.credits} Credits</p>
                </div>
                <div className="text-right">
                  <span className={`text-lg font-bold ${getGradeColor(course.grade)}`}>
                    {course.grade}
                  </span>
                  <p className="text-xs text-gray-600">{course.points.toFixed(1)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {filteredGrades.length === 0 && activeTab === 'grades' && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faCertificate} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No grades found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

