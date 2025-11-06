'use client';

import Icon, {
  faUsers,
  faBook,
  faUserGraduate,
  faAward,
  faArrowRight,
} from '../../components/Icon';

export default function AdminDashboard() {

  const stats = [
    { label: 'Total Students', value: '2,327', icon: faUserGraduate, color: 'bg-blue-500' },
    { label: 'Active Courses', value: '156', icon: faBook, color: 'bg-green-500' },
    { label: 'Instructors', value: '178', icon: faUsers, color: 'bg-purple-500' },
    { label: 'Pending Requests', value: '12', icon: faAward, color: 'bg-orange-500' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your university operations and resources.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-red-200 transition-all"
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
            { label: 'Manage Students', href: '/admin/students', icon: faUserGraduate },
            { label: 'Manage Courses', href: '/admin/courses', icon: faBook },
            { label: 'Manage Instructors', href: '/admin/instructors', icon: faUsers },
          ].map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-red-600 hover:bg-red-50 transition-all group"
            >
              <Icon icon={action.icon} className="text-gray-500 group-hover:text-red-600" />
              <span className="font-medium text-gray-900 group-hover:text-red-600">{action.label}</span>
              <Icon icon={faArrowRight} className="ml-auto text-gray-400 group-hover:text-red-600" size="sm" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

