'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Icon, {
  faFileAlt,
  faArrowLeft,
  faUserGraduate,
  faCheckCircle,
  faClock,
  faCalendar,
  faEdit,
  faSave,
  faBook,
  faDownload,
  faEye,
} from '../../../components/Icon';

export default function LecturerGradingDetail() {
  const params = useParams();
  const router = useRouter();
  const assignmentId = params.id as string;
  const [assignment, setAssignment] = useState<any>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Mock assignment data
    const mockAssignments: { [key: string]: any } = {
      '1': {
        id: 1,
        title: 'Case Study: Emerging Markets',
        course: 'MBA 602',
        courseName: 'Leadership & Strategy',
        dueDate: 'Dec 15, 2024',
        dueTime: '11:59 PM',
        points: 100,
        description: 'Analyze emerging market opportunities and provide strategic recommendations.',
        totalStudents: 42,
        submissions: 24,
        graded: 0,
      },
      '2': {
        id: 2,
        title: 'Midterm Exam Review',
        course: 'FIN 305',
        courseName: 'Corporate Finance',
        dueDate: 'Dec 17, 2024',
        dueTime: '11:59 PM',
        points: 200,
        description: 'Comprehensive midterm examination covering financial analysis and valuation.',
        totalStudents: 67,
        submissions: 67,
        graded: 45,
      },
    };

    const mockSubmissions: { [key: string]: any[] } = {
      '1': [
        {
          id: 1,
          studentName: 'Samantha Reed',
          studentId: 'STU-2024-045',
          submittedDate: 'Dec 14, 2024',
          submittedTime: '10:30 AM',
          status: 'pending',
          grade: null,
          feedback: '',
        },
        {
          id: 2,
          studentName: 'Marcus Johnson',
          studentId: 'STU-2024-156',
          submittedDate: 'Dec 14, 2024',
          submittedTime: '02:15 PM',
          status: 'pending',
          grade: null,
          feedback: '',
        },
        {
          id: 3,
          studentName: 'Lina Chen',
          studentId: 'STU-2024-089',
          submittedDate: 'Dec 13, 2024',
          submittedTime: '11:45 AM',
          status: 'graded',
          grade: 92,
          feedback: 'Excellent analysis with strong strategic recommendations.',
        },
      ],
      '2': [
        {
          id: 1,
          studentName: 'Daniel Obi',
          studentId: 'STU-2024-128',
          submittedDate: 'Dec 16, 2024',
          submittedTime: '09:20 AM',
          status: 'pending',
          grade: null,
          feedback: '',
        },
        {
          id: 2,
          studentName: 'Priya Patel',
          studentId: 'STU-2024-092',
          submittedDate: 'Dec 15, 2024',
          submittedTime: '03:45 PM',
          status: 'graded',
          grade: 88,
          feedback: 'Good work, but could use more detail in financial analysis section.',
        },
      ],
    };

    setAssignment(mockAssignments[assignmentId] || null);
    setSubmissions(mockSubmissions[assignmentId] || []);
  }, [assignmentId, mounted]);

  const handleGradeChange = (submissionId: number, grade: number) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === submissionId ? { ...sub, grade, status: 'graded' } : sub
    ));
  };

  const handleFeedbackChange = (submissionId: number, feedback: string) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === submissionId ? { ...sub, feedback } : sub
    ));
  };

  if (!mounted || !assignment) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Icon icon={faFileAlt} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">Loading assignment...</p>
        </div>
      </div>
    );
  }

  const pendingSubmissions = submissions.filter(s => s.status === 'pending');
  const gradedSubmissions = submissions.filter(s => s.status === 'graded');

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/lecturer/grading"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4"
        >
          <Icon icon={faArrowLeft} size="sm" />
          <span>Back to Grading</span>
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{assignment.title}</h1>
            <p className="text-gray-600 mb-4">{assignment.course} - {assignment.courseName}</p>
            <p className="text-gray-700 max-w-3xl">{assignment.description}</p>
          </div>
        </div>
      </div>

      {/* Assignment Info */}
      <div className="bg-white border border-gray-200 p-6 mb-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Icon icon={faCalendar} className="text-gray-500" size="sm" />
            <div>
              <p className="text-xs text-gray-600">Due Date</p>
              <p className="text-sm font-semibold text-gray-900">{assignment.dueDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon={faClock} className="text-gray-500" size="sm" />
            <div>
              <p className="text-xs text-gray-600">Due Time</p>
              <p className="text-sm font-semibold text-gray-900">{assignment.dueTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
            <div>
              <p className="text-xs text-gray-600">Points</p>
              <p className="text-sm font-semibold text-gray-900">{assignment.points}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon={faUserGraduate} className="text-gray-500" size="sm" />
            <div>
              <p className="text-xs text-gray-600">Submissions</p>
              <p className="text-sm font-semibold text-gray-900">{assignment.submissions}/{assignment.totalStudents}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content - Submissions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Pending Submissions */}
          {pendingSubmissions.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Pending Grading ({pendingSubmissions.length})
              </h2>
              <div className="space-y-4">
                {pendingSubmissions.map((submission) => (
                  <div key={submission.id} className="bg-white border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon icon={faUserGraduate} className="text-primary" size="sm" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{submission.studentName}</h3>
                          <p className="text-sm text-gray-600">{submission.studentId}</p>
                          <p className="text-xs text-gray-500">Submitted: {submission.submittedDate} at {submission.submittedTime}</p>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1">
                        Pending
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Grade (out of {assignment.points})</label>
                        <input
                          type="number"
                          min="0"
                          max={assignment.points}
                          value={submission.grade || ''}
                          onChange={(e) => handleGradeChange(submission.id, parseInt(e.target.value) || 0)}
                          className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                          placeholder="Enter grade"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Feedback</label>
                        <textarea
                          value={submission.feedback}
                          onChange={(e) => handleFeedbackChange(submission.id, e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                          placeholder="Enter feedback for the student..."
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
                          <Icon icon={faSave} size="sm" />
                          <span>Save Grade</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Icon icon={faEye} size="sm" />
                          <span>View Submission</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Icon icon={faDownload} size="sm" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Graded Submissions */}
          {gradedSubmissions.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Graded ({gradedSubmissions.length})
              </h2>
              <div className="space-y-4">
                {gradedSubmissions.map((submission) => (
                  <div key={submission.id} className="bg-white border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                          <Icon icon={faCheckCircle} className="text-green-600" size="sm" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{submission.studentName}</h3>
                          <p className="text-sm text-gray-600">{submission.studentId}</p>
                          <p className="text-xs text-gray-500">Submitted: {submission.submittedDate} at {submission.submittedTime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{submission.grade}/{assignment.points}</div>
                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1">
                          Graded
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{submission.feedback}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Icon icon={faEdit} size="sm" />
                          <span>Edit Grade</span>
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Icon icon={faEye} size="sm" />
                          <span>View Submission</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Grading Summary */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Grading Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Total Submissions</span>
                <span className="font-semibold text-gray-900">{assignment.submissions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Graded</span>
                <span className="font-semibold text-green-600">{gradedSubmissions.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Pending</span>
                <span className="font-semibold text-orange-600">{pendingSubmissions.length}</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="w-full bg-gray-200 h-2">
                  <div
                    className="bg-primary h-2"
                    style={{ width: `${(gradedSubmissions.length / assignment.submissions) * 100}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {Math.round((gradedSubmissions.length / assignment.submissions) * 100)}% Complete
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <a
                href="/lecturer/courses"
                className="flex items-center gap-2 p-3 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-sm"
              >
                <Icon icon={faBook} className="text-gray-600" size="sm" />
                <span className="font-medium text-gray-900">View Course</span>
              </a>
              <button className="w-full flex items-center gap-2 p-3 border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all text-sm">
                <Icon icon={faDownload} className="text-gray-600" size="sm" />
                <span className="font-medium text-gray-900">Export Grades</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

