'use client';

import { useState } from 'react';
import Icon, {
  faFileAlt,
  faSearch,
  faCheckCircle,
  faTimesCircle,
  faEye,
  faClock,
  faUserGraduate,
  faCalendar,
  faAward,
} from '../../components/Icon';

interface Application {
  id: number;
  studentName: string;
  email: string;
  program: string;
  status: 'pending' | 'approved' | 'rejected' | 'under_review';
  submittedDate: string;
  gpa: string;
  documents: number;
}

export default function AdminApplications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProgram, setFilterProgram] = useState('all');
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 1,
      studentName: 'John Smith',
      email: 'john.smith@example.com',
      program: 'MBA',
      status: 'pending',
      submittedDate: '2024-12-10',
      gpa: '3.8',
      documents: 5,
    },
    {
      id: 2,
      studentName: 'Maria Garcia',
      email: 'maria.garcia@example.com',
      program: 'Finance',
      status: 'under_review',
      submittedDate: '2024-12-08',
      gpa: '3.6',
      documents: 4,
    },
    {
      id: 3,
      studentName: 'Ahmed Hassan',
      email: 'ahmed.hassan@example.com',
      program: 'Entrepreneurship',
      status: 'pending',
      submittedDate: '2024-12-12',
      gpa: '3.9',
      documents: 6,
    },
    {
      id: 4,
      studentName: 'Lisa Chen',
      email: 'lisa.chen@example.com',
      program: 'MBA',
      status: 'approved',
      submittedDate: '2024-11-25',
      gpa: '3.7',
      documents: 5,
    },
    {
      id: 5,
      studentName: 'Robert Taylor',
      email: 'robert.taylor@example.com',
      program: 'Management',
      status: 'rejected',
      submittedDate: '2024-11-20',
      gpa: '2.9',
      documents: 4,
    },
  ]);

  const programs = ['MBA', 'Finance', 'Entrepreneurship', 'Management', 'Marketing'];

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    const matchesProgram = filterProgram === 'all' || app.program === filterProgram;
    return matchesSearch && matchesStatus && matchesProgram;
  });

  const getStatusBadge = (status: Application['status']) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-700',
      under_review: 'bg-blue-100 text-blue-700',
      approved: 'bg-green-100 text-green-700',
      rejected: 'bg-red-100 text-red-700',
    };
    const labels = {
      pending: 'Pending',
      under_review: 'Under Review',
      approved: 'Approved',
      rejected: 'Rejected',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const handleApprove = (id: number) => {
    if (confirm('Approve this application?')) {
      setApplications(applications.map((app) => (app.id === id ? { ...app, status: 'approved' as const } : app)));
    }
  };

  const handleReject = (id: number) => {
    if (confirm('Reject this application?')) {
      setApplications(applications.map((app) => (app.id === id ? { ...app, status: 'rejected' as const } : app)));
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Application Management</h1>
        <p className="text-gray-600">Review and manage student applications</p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <select
              value={filterProgram}
              onChange={(e) => setFilterProgram(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="all">All Programs</option>
              {programs.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="under_review">Under Review</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((application) => (
          <div key={application.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon icon={faUserGraduate} className="text-blue-600" size="lg" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-gray-900">{application.studentName}</h3>
                    {getStatusBadge(application.status)}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{application.email}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon icon={faAward} className="text-gray-400" size="sm" />
                      <span className="text-gray-600">{application.program} Program</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon={faFileAlt} className="text-gray-400" size="sm" />
                      <span className="text-gray-600">{application.documents} documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon icon={faCalendar} className="text-gray-400" size="sm" />
                      <span className="text-gray-600">Submitted: {application.submittedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900 mb-1">{application.gpa}</div>
                <div className="text-xs text-gray-500">GPA</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
              <a
                href={`/admin/applications/${application.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm font-medium rounded-lg"
              >
                <Icon icon={faEye} size="sm" />
                <span>View Details</span>
              </a>
              {application.status === 'pending' || application.status === 'under_review' ? (
                <>
                  <button
                    onClick={() => handleApprove(application.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition-colors text-sm font-medium rounded-lg"
                  >
                    <Icon icon={faCheckCircle} size="sm" />
                    <span>Approve</span>
                  </button>
                  <button
                    onClick={() => handleReject(application.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors text-sm font-medium rounded-lg"
                  >
                    <Icon icon={faTimesCircle} size="sm" />
                    <span>Reject</span>
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <Icon icon={faFileAlt} className="text-gray-400 mx-auto mb-4" size="3x" />
          <p className="text-gray-500">No applications found</p>
        </div>
      )}
    </div>
  );
}

