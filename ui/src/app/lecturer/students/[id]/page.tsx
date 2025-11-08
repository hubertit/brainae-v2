'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon, {
  faUserGraduate,
  faArrowLeft,
  faEnvelope,
  faFileAlt,
  faCalendar,
  faAward,
  faChartLine,
  faBook,
  faClock,
  faCheckCircle,
  faExclamationCircle,
} from '../../../components/Icon';

export default function LecturerStudentDetail() {
  const params = useParams();
  const router = useRouter();
  const studentId = params.id as string;
  const [student, setStudent] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Mock student data
    const mockStudents: { [key: string]: any } = {
      '1': {
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
        gpa: 3.5,
        enrolledCourses: ['MBA 602', 'FIN 305'],
      },
      '2': {
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
        gpa: 2.8,
        enrolledCourses: ['FIN 305', 'MGT 401'],
      },
    };

    setStudent(mockStudents[studentId] || null);
  }, [studentId, mounted]);

  if (!mounted || !student) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Icon icon={faUserGraduate} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">Loading student profile...</p>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent':
        return <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1">Excellent</span>;
      case 'active':
        return <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1">Active</span>;
      case 'at_risk':
        return <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1">At Risk</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/lecturer/students"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4"
        >
          <Icon icon={faArrowLeft} size="sm" />
          <span>Back to Students</span>
        </Link>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon icon={faUserGraduate} className="text-primary" size="2x" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{student.name}</h1>
              <p className="text-gray-600 mb-1">{student.email}</p>
              <p className="text-sm text-gray-500">{student.studentId}</p>
              <div className="mt-2">{getStatusBadge(student.status)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Performance Stats */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Icon icon={faAward} className="text-primary" size="lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{student.averageGrade}</div>
                  <div className="text-xs text-gray-600">Average Grade</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-50 flex items-center justify-center">
                  <Icon icon={faCalendar} className="text-green-600" size="lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{student.attendance}%</div>
                  <div className="text-xs text-gray-600">Attendance</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-50 flex items-center justify-center">
                  <Icon icon={faFileAlt} className="text-blue-600" size="lg" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{student.assignmentsSubmitted}/{student.assignmentsTotal}</div>
                  <div className="text-xs text-gray-600">Assignments</div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Information */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Student Information</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{student.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Student ID</label>
                  <p className="text-gray-900">{student.studentId}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">GPA</label>
                  <p className="text-gray-900">{student.gpa}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Last Activity</label>
                  <p className="text-gray-900">{student.lastActivity}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="/lecturer/messages"
                className="flex items-center gap-3 p-4 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                  <Icon icon={faEnvelope} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Send Message</p>
                  <p className="text-xs text-gray-600">Contact this student</p>
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
                  <p className="font-semibold text-gray-900">View Submissions</p>
                  <p className="text-xs text-gray-600">Review student work</p>
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
                  <p className="font-semibold text-gray-900">View Attendance</p>
                  <p className="text-xs text-gray-600">Check attendance record</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course Enrollment */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Enrolled Courses</h3>
            <div className="space-y-2">
              {student.enrolledCourses.map((course: string, index: number) => (
                <div key={index} className="flex items-center gap-2 p-2 border border-gray-200">
                  <Icon icon={faBook} className="text-gray-500" size="sm" />
                  <span className="text-sm text-gray-900">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Performance Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Attendance Rate</span>
                <span className="font-semibold text-gray-900">{student.attendance}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className={`h-2 ${student.attendance >= 80 ? 'bg-green-600' : student.attendance >= 60 ? 'bg-orange-600' : 'bg-red-600'}`}
                  style={{ width: `${student.attendance}%` }}
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-gray-600">Assignment Completion</span>
                <span className="font-semibold text-gray-900">{Math.round((student.assignmentsSubmitted / student.assignmentsTotal) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 h-2">
                <div
                  className="bg-primary h-2"
                  style={{ width: `${(student.assignmentsSubmitted / student.assignmentsTotal) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

