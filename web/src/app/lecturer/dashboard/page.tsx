'use client';

import Icon, {
  faBook,
  faUserGraduate,
  faFileAlt,
  faAward,
  faArrowRight,
} from '../../components/Icon';

export default function LecturerDashboard() {

  const stats = [
    { label: 'My Courses', value: '8', icon: faBook, color: 'bg-blue-500' },
    { label: 'Total Students', value: '245', icon: faUserGraduate, color: 'bg-green-500' },
    { label: 'Pending Grading', value: '18', icon: faFileAlt, color: 'bg-orange-500' },
    { label: 'Average Rating', value: '4.8', icon: faAward, color: 'bg-purple-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lecturer Dashboard</h1>
        <p className="text-gray-600">Welcome back! Manage your courses and students.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-primary/20 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-xl`}>
                <Icon icon={stat.icon} className="text-white" size="lg" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'My Courses', href: '/lecturer/courses', icon: faBook },
            { label: 'My Students', href: '/lecturer/students', icon: faUserGraduate },
            { label: 'Grade Assignments', href: '/lecturer/grading', icon: faFileAlt },
          ].map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all group"
            >
              <Icon icon={action.icon} className="text-gray-500 group-hover:text-primary" />
              <span className="font-medium text-gray-900 group-hover:text-primary">{action.label}</span>
              <Icon icon={faArrowRight} className="ml-auto text-gray-400 group-hover:text-primary" size="sm" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

