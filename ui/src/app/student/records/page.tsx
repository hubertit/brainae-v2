'use client';

import { useState } from 'react';
import Icon, {
  faGraduationCap,
  faCertificate,
  faDownload,
  faFileAlt,
  faCalendar,
  faAward,
  faCheckCircle,
  faBook,
} from '../../components/Icon';

export default function StudentRecords() {
  const [activeTab, setActiveTab] = useState<'enrollment' | 'certificates' | 'documents'>('enrollment');

  const enrollmentHistory = [
    {
      semester: 'Fall 2024',
      status: 'Active',
      courses: 5,
      credits: 13,
      gpa: 3.8,
      startDate: 'Aug 15, 2024',
      endDate: 'Dec 22, 2024',
    },
    {
      semester: 'Summer 2024',
      status: 'Completed',
      courses: 2,
      credits: 6,
      gpa: 4.0,
      startDate: 'Jun 1, 2024',
      endDate: 'Aug 10, 2024',
    },
    {
      semester: 'Spring 2024',
      status: 'Completed',
      courses: 4,
      credits: 12,
      gpa: 3.7,
      startDate: 'Jan 15, 2024',
      endDate: 'May 20, 2024',
    },
  ];

  const certificates = [
    {
      id: 'CERT-2024-001',
      name: 'Web Development Fundamentals',
      issueDate: 'Aug 10, 2024',
      course: 'CS 150',
      status: 'issued',
    },
    {
      id: 'CERT-2024-002',
      name: 'Business Management Essentials',
      issueDate: 'May 20, 2024',
      course: 'BUS 101',
      status: 'issued',
    },
  ];

  const documents = [
    {
      id: 1,
      name: 'Official Transcript',
      type: 'Transcript',
      date: 'Dec 1, 2024',
      size: '2.5 MB',
    },
    {
      id: 2,
      name: 'Enrollment Verification Letter',
      type: 'Verification',
      date: 'Sep 1, 2024',
      size: '1.2 MB',
    },
    {
      id: 3,
      name: 'Degree Audit Report',
      type: 'Report',
      date: 'Nov 15, 2024',
      size: '3.1 MB',
    },
  ];

  const academicStanding = {
    status: 'Good Standing',
    gpa: 3.8,
    creditsCompleted: 42,
    creditsRequired: 120,
    progress: 35,
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Academic Records</h1>
        <p className="text-gray-600">View your enrollment history, certificates, and official documents</p>
      </div>

      {/* Academic Standing */}
      <div className="bg-white border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Academic Standing</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                <Icon icon={faAward} className="text-gray-600" size="sm" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-semibold text-gray-900">{academicStanding.status}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                <Icon icon={faAward} className="text-gray-600" size="sm" />
              </div>
              <div>
                <p className="text-sm text-gray-600">GPA</p>
                <p className="font-semibold text-gray-900">{academicStanding.gpa}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                <Icon icon={faGraduationCap} className="text-gray-600" size="sm" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Credits</p>
                <p className="font-semibold text-gray-900">{academicStanding.creditsCompleted}/{academicStanding.creditsRequired}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                <Icon icon={faCheckCircle} className="text-gray-600" size="sm" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <p className="font-semibold text-gray-900">{academicStanding.progress}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border border-gray-200 mb-6">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('enrollment')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'enrollment'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Enrollment History
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'certificates'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Certificates
          </button>
          <button
            onClick={() => setActiveTab('documents')}
            className={`px-6 py-3 font-medium text-sm ${
              activeTab === 'documents'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Official Documents
          </button>
        </div>
      </div>

      {activeTab === 'enrollment' && (
        <div className="space-y-4">
          {enrollmentHistory.map((semester, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                    <Icon icon={faCalendar} className="text-gray-600" size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{semester.semester}</h3>
                    <p className="text-sm text-gray-600">{semester.startDate} - {semester.endDate}</p>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 ${
                  semester.status === 'Active'
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-600 bg-gray-100'
                }`}>
                  {semester.status}
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Courses</p>
                  <p className="font-semibold text-gray-900">{semester.courses}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Credits</p>
                  <p className="font-semibold text-gray-900">{semester.credits}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">GPA</p>
                  <p className="font-semibold text-gray-900">{semester.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="space-y-4">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                    <Icon icon={faCertificate} className="text-gray-600" size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{certificate.name}</h3>
                    <p className="text-sm text-gray-600">{certificate.course} • Issued: {certificate.issueDate}</p>
                    <p className="text-xs text-gray-500 mt-1">Certificate ID: {certificate.id}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                  <Icon icon={faDownload} size="sm" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'documents' && (
        <div className="space-y-4">
          {documents.map((document) => (
            <div
              key={document.id}
              className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                    <Icon icon={faFileAlt} className="text-gray-600" size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{document.name}</h3>
                    <p className="text-sm text-gray-600">{document.type} • {document.date} • {document.size}</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                  <Icon icon={faDownload} size="sm" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

