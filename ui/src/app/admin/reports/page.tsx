'use client';

import { useState } from 'react';
import Icon, {
  faChartLine,
  faUserGraduate,
  faBook,
  faChalkboardTeacher,
  faFileAlt,
  faDownload,
  faCalendar,
  faAward,
} from '../../components/Icon';

export default function AdminReports() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const reports = [
    {
      id: 'enrollment',
      title: 'Enrollment Report',
      description: 'Student enrollment statistics by program and semester',
      icon: faUserGraduate,
      color: 'bg-blue-500',
    },
    {
      id: 'courses',
      title: 'Course Performance',
      description: 'Course completion rates and student performance metrics',
      icon: faBook,
      color: 'bg-green-500',
    },
    {
      id: 'instructors',
      title: 'Instructor Activity',
      description: 'Teaching load and student satisfaction by instructor',
      icon: faChalkboardTeacher,
      color: 'bg-purple-500',
    },
    {
      id: 'grades',
      title: 'Grade Distribution',
      description: 'Grade statistics and GPA trends across programs',
      icon: faAward,
      color: 'bg-orange-500',
    },
    {
      id: 'attendance',
      title: 'Attendance Report',
      description: 'Class attendance rates and patterns',
      icon: faCalendar,
      color: 'bg-red-500',
    },
    {
      id: 'financial',
      title: 'Financial Summary',
      description: 'Revenue, fees, and payment statistics',
      icon: faFileAlt,
      color: 'bg-indigo-500',
    },
  ];

  const stats = [
    { label: 'Total Students', value: '2,327', change: '+12%', icon: faUserGraduate, color: 'text-blue-600' },
    { label: 'Active Courses', value: '156', change: '+5%', icon: faBook, color: 'text-green-600' },
    { label: 'Instructors', value: '178', change: '+3%', icon: faChalkboardTeacher, color: 'text-purple-600' },
    { label: 'Avg. GPA', value: '3.4', change: '+0.2', icon: faAward, color: 'text-orange-600' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">View comprehensive reports and analytics</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg bg-opacity-10`}>
                <Icon icon={stat.icon} className={stat.color} size="lg" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
            <div className="text-xs text-green-600 font-medium">{stat.change} from last month</div>
          </div>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <div
            key={report.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors cursor-pointer"
            onClick={() => setSelectedReport(report.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${report.color} p-3 rounded-lg`}>
                <Icon icon={report.icon} className="text-white" size="lg" />
              </div>
              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                <Icon icon={faDownload} size="sm" />
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{report.description}</p>
            <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
              <Icon icon={faChartLine} size="sm" />
              <span>Generate Report</span>
            </button>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all">
            <Icon icon={faDownload} className="text-blue-600" size="lg" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Export All Data</div>
              <div className="text-sm text-gray-600">Download complete dataset</div>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-all">
            <Icon icon={faCalendar} className="text-blue-600" size="lg" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Schedule Report</div>
              <div className="text-sm text-gray-600">Set up automated reports</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

