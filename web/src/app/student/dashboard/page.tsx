'use client';

import Icon, {
  faBook,
  faFileAlt,
  faAward,
  faGraduationCap,
  faClock,
  faArrowRight,
  faBell,
  faNewspaper,
  faCheckCircle,
  faBookOpen,
  faDollarSign,
  faCalendar,
} from '../../components/Icon';

export default function StudentDashboard() {
  const stats = [
    { label: 'Active Courses', value: '5', icon: faBook },
    { label: 'Assignments Due', value: '3', icon: faFileAlt },
    { label: 'GPA', value: '3.8', icon: faAward },
    { label: 'Credits Earned', value: '45', icon: faGraduationCap },
  ];

  const recentCourses = [
    {
      name: 'Introduction to Business Management',
      code: 'BUS 101',
      progress: 75,
      nextAssignment: 'Assignment 4 - Due Dec 15',
    },
    {
      name: 'Data Structures and Algorithms',
      code: 'CS 201',
      progress: 60,
      nextAssignment: 'Project 2 - Due Dec 20',
    },
    {
      name: 'Financial Accounting',
      code: 'ACC 301',
      progress: 85,
      nextAssignment: 'Final Exam - Dec 22',
    },
  ];

  const upcomingEvents = [
    { title: 'Assignment Due: BUS 101', date: 'Dec 15, 2024', type: 'assignment' },
    { title: 'Final Exam: CS 201', date: 'Dec 18, 2024', type: 'exam' },
    { title: 'Project Submission: ACC 301', date: 'Dec 20, 2024', type: 'project' },
  ];

  const announcements = [
    { title: 'Winter Semester Registration Opens', date: 'Dec 10, 2024', read: false },
    { title: 'Library Extended Hours for Finals', date: 'Dec 8, 2024', read: false },
    { title: 'New Online Resources Available', date: 'Dec 5, 2024', read: true },
  ];

  const recentGrades = [
    { course: 'BUS 101', assignment: 'Midterm Exam', grade: 'A', date: 'Dec 1, 2024' },
    { course: 'CS 201', assignment: 'Project 1', grade: 'B+', date: 'Nov 28, 2024' },
    { course: 'ACC 301', assignment: 'Quiz 5', grade: 'A-', date: 'Nov 25, 2024' },
  ];

  const quickActions = [
    { label: 'View Assignments', href: '/student/assignments', icon: faFileAlt },
    { label: 'Access E-Library', href: '/library/portal', icon: faBookOpen },
    { label: 'Financial Info', href: '/student/financial', icon: faDollarSign },
    { label: 'Academic Calendar', href: '/student/calendar', icon: faCalendar },
  ];

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">Here's what's happening with your studies today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                <Icon icon={stat.icon} className="text-primary" size="lg" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
              <a
                href="/student/courses"
                className="text-primary hover:text-primary-600 text-sm font-medium flex items-center gap-1"
              >
                View All
                <Icon icon={faArrowRight} size="sm" />
              </a>
            </div>
            <div className="space-y-4">
              {recentCourses.map((course, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-5 hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{course.name}</h3>
                      <p className="text-sm text-gray-600">{course.code}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2">
                      <div
                        className="bg-primary h-2 transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon icon={faClock} className="mr-2 text-primary" size="sm" />
                    <span>{course.nextAssignment}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 flex items-center justify-center">
                  <Icon icon={faClock} className="text-primary" size="sm" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{event.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Widgets Row */}
      <div className="grid lg:grid-cols-3 gap-8 mt-8">
        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border border-gray-100 hover:border-primary"
              >
                <div className="w-8 h-8 bg-primary/10 flex items-center justify-center">
                  <Icon icon={action.icon} className="text-primary" size="sm" />
                </div>
                <span className="text-sm font-medium text-gray-900">{action.label}</span>
                <Icon icon={faArrowRight} className="ml-auto text-gray-400" size="sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Announcements</h2>
            <Icon icon={faBell} className="text-primary" size="sm" />
          </div>
          <div className="space-y-3">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 flex items-center justify-center">
                  <Icon icon={faNewspaper} className="text-primary" size="sm" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start gap-2">
                    <p className="text-sm font-medium text-gray-900 flex-1">{announcement.title}</p>
                    {!announcement.read && (
                      <span className="w-2 h-2 bg-primary rounded-full mt-1"></span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">{announcement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Grades */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Grades</h2>
          <div className="space-y-3">
            {recentGrades.map((grade, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 flex items-center justify-center">
                  <Icon icon={faCheckCircle} className="text-primary" size="sm" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900">{grade.course}</p>
                    <span className="text-sm font-bold text-primary">{grade.grade}</span>
                  </div>
                  <p className="text-xs text-gray-600">{grade.assignment}</p>
                  <p className="text-xs text-gray-500 mt-1">{grade.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

