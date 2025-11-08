'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon, {
  faBook,
  faArrowLeft,
  faUsers,
  faFileAlt,
  faCalendar,
  faEdit,
  faDownload,
  faUpload,
  faChartLine,
  faUserGraduate,
  faClock,
} from '../../../components/Icon';

export default function LecturerCourseDetail() {
  const params = useParams();
  const router = useRouter();
  const courseId = params.id as string;
  const [course, setCourse] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Mock course data
    const mockCourses: { [key: string]: any } = {
      '1': {
        id: 1,
        name: 'MBA 602 • Leadership & Strategy',
        code: 'MBA 602',
        enrolledStudents: 42,
        semester: 'Fall 2024',
        credits: 3,
        materials: 15,
        assignments: 4,
        pendingGrading: 8,
        completion: 82,
        nextClass: 'Dec 16, 2024 - 09:00 AM',
        description: 'Advanced course on leadership principles and strategic management in modern organizations.',
      },
      '2': {
        id: 2,
        name: 'FIN 305 • Corporate Finance',
        code: 'FIN 305',
        enrolledStudents: 67,
        semester: 'Fall 2024',
        credits: 4,
        materials: 22,
        assignments: 5,
        pendingGrading: 12,
        completion: 74,
        nextClass: 'Dec 17, 2024 - 11:00 AM',
        description: 'Comprehensive study of corporate finance principles, valuation, and financial decision-making.',
      },
    };

    setCourse(mockCourses[courseId] || null);
  }, [courseId, mounted]);

  if (!mounted || !course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Icon icon={faBook} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/lecturer/courses"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4"
        >
          <Icon icon={faArrowLeft} size="sm" />
          <span>Back to Courses</span>
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h1>
            <p className="text-gray-600 mb-4">{course.code} • {course.semester} • {course.credits} Credits</p>
            <p className="text-gray-700 max-w-3xl">{course.description}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Icon icon={faUserGraduate} className="text-primary" size="lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{course.enrolledStudents}</div>
                  <div className="text-xs text-gray-600">Enrolled Students</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-50 flex items-center justify-center">
                  <Icon icon={faFileAlt} className="text-orange-600" size="lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{course.pendingGrading}</div>
                  <div className="text-xs text-gray-600">Pending Grading</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-50 flex items-center justify-center">
                  <Icon icon={faChartLine} className="text-green-600" size="lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{course.completion}%</div>
                  <div className="text-xs text-gray-600">Completion Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Management */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Course Management</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="/lecturer/students"
                className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Icon icon={faUsers} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">View Students</p>
                  <p className="text-xs text-gray-600">Manage enrolled students</p>
                </div>
              </a>
              <a
                href="/lecturer/grading"
                className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 bg-orange-50 flex items-center justify-center">
                  <Icon icon={faFileAlt} className="text-orange-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Grade Assignments</p>
                  <p className="text-xs text-gray-600">Review and grade submissions</p>
                </div>
              </a>
              <a
                href="/lecturer/attendance"
                className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 bg-green-50 flex items-center justify-center">
                  <Icon icon={faCalendar} className="text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Mark Attendance</p>
                  <p className="text-xs text-gray-600">Track student attendance</p>
                </div>
              </a>
              <a
                href="/lecturer/announcements"
                className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 bg-blue-50 flex items-center justify-center">
                  <Icon icon={faEdit} className="text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Post Announcement</p>
                  <p className="text-xs text-gray-600">Share updates with students</p>
                </div>
              </a>
            </div>
          </div>

          {/* Course Materials */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Course Materials</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
                <Icon icon={faUpload} size="sm" />
                <span>Upload Material</span>
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Course materials management would go here.</p>
              <p className="text-xs text-gray-500">{course.materials} materials uploaded</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Info */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Course Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Icon icon={faBook} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Code: <span className="font-medium text-gray-900">{course.code}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Semester: <span className="font-medium text-gray-900">{course.semester}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={faClock} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Next Class: <span className="font-medium text-gray-900">{course.nextClass}</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={faUserGraduate} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Students: <span className="font-medium text-gray-900">{course.enrolledStudents}</span></span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <a
                href="/lecturer/grading"
                className="flex items-center gap-2 p-3 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-sm"
              >
                <Icon icon={faFileAlt} className="text-gray-600" size="sm" />
                <span className="font-medium text-gray-900">Grade {course.pendingGrading} Pending</span>
              </a>
              <a
                href="/lecturer/students"
                className="flex items-center gap-2 p-3 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-sm"
              >
                <Icon icon={faUsers} className="text-gray-600" size="sm" />
                <span className="font-medium text-gray-900">View All Students</span>
              </a>
              <a
                href="/lecturer/calendar"
                className="flex items-center gap-2 p-3 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-sm"
              >
                <Icon icon={faCalendar} className="text-gray-600" size="sm" />
                <span className="font-medium text-gray-900">View Schedule</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

