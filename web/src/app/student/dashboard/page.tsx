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
  faDownload,
} from '../../components/Icon';

export default function StudentDashboard() {
  const getGradeDescription = (gpa: number): string => {
    if (gpa >= 3.7) return 'A';
    if (gpa >= 3.3) return 'A-';
    if (gpa >= 3.0) return 'B+';
    if (gpa >= 2.7) return 'B';
    if (gpa >= 2.3) return 'B-';
    if (gpa >= 2.0) return 'C+';
    if (gpa >= 1.7) return 'C';
    if (gpa >= 1.3) return 'C-';
    if (gpa >= 1.0) return 'D';
    return 'F';
  };

  const gpa = 3.8;
  const gradeDescription = getGradeDescription(gpa);

  const stats = [
    { label: 'Active Courses', value: '5', icon: faBook },
    { label: 'Assessments Due', value: '3', icon: faFileAlt },
    { label: 'GPA', value: `${gpa} (${gradeDescription})`, icon: faAward },
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

  const recentActivities = [
    { title: 'Submitted Assignment 4', course: 'BUS 101', date: 'Dec 12, 2024', time: '2:30 PM', type: 'submission' },
    { title: 'Accessed Course Materials', course: 'CS 201', date: 'Dec 11, 2024', time: '10:15 AM', type: 'access' },
    { title: 'Grade Received: A', course: 'ACC 301', date: 'Dec 10, 2024', time: '4:45 PM', type: 'grade' },
    { title: 'Downloaded Lecture Notes', course: 'BUS 101', date: 'Dec 9, 2024', time: '3:20 PM', type: 'download' },
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
    { label: 'View Assessments', href: '/student/assignments', icon: faFileAlt },
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
            className="bg-white border border-gray-200 p-5 hover:border-primary transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0 ml-4">
                <Icon icon={stat.icon} className="text-gray-600" size="lg" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Courses */}
        <div className="lg:col-span-2 flex">
          <div className="bg-white border border-gray-200 p-5 flex flex-col w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">My Courses</h2>
              <a
                href="/student/courses"
                className="text-primary hover:text-primary-600 text-sm font-medium flex items-center gap-1"
              >
                View All
                <Icon icon={faArrowRight} size="sm" />
              </a>
            </div>
            <div className="space-y-3 flex-1">
              {recentCourses.map((course, index) => (
                <div
                  key={index}
                  className="border border-gray-200 p-4 hover:border-primary transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Icon icon={faBook} className="text-gray-600" size="sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 mb-0.5 truncate">{course.name}</h3>
                        <p className="text-xs text-gray-600 mb-1">{course.code}</p>
                        <p className="text-xs text-gray-500 truncate">{course.nextAssignment}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 ml-3 flex-shrink-0">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-gray-900 mb-1">{course.progress}%</div>
                        <div className="w-20 bg-gray-200 h-1.5">
                          <div
                            className="bg-primary h-1.5 transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                      <a
                        href="/student/courses"
                        className="p-1.5 hover:bg-gray-100 transition-colors"
                        aria-label="View course"
                      >
                        <Icon icon={faArrowRight} className="text-gray-600" size="sm" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="flex">
          <div className="bg-white border border-gray-200 p-5 flex flex-col w-full">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activities</h2>
            <div className="space-y-2 flex-1">
              {recentActivities.map((activity, index) => {
                const getActivityIcon = () => {
                  switch (activity.type) {
                    case 'submission':
                      return faFileAlt;
                    case 'access':
                      return faBookOpen;
                    case 'grade':
                      return faAward;
                    case 'download':
                      return faDownload;
                    default:
                      return faClock;
                  }
                };

                return (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 p-2.5 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
                  >
                    <div className="flex-shrink-0 w-7 h-7 bg-gray-100 flex items-center justify-center">
                      <Icon icon={getActivityIcon()} className="text-gray-600" size="xs" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 truncate">{activity.title}</p>
                      <p className="text-xs text-gray-600 mt-0.5 truncate">{activity.course}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{activity.date} • {activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
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
                <div className="w-8 h-8 bg-gray-100 flex items-center justify-center">
                  <Icon icon={action.icon} className="text-gray-600" size="sm" />
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
            <Icon icon={faBell} className="text-gray-600" size="sm" />
          </div>
          <div className="space-y-3">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 flex items-center justify-center">
                  <Icon icon={faNewspaper} className="text-gray-600" size="sm" />
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
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 flex items-center justify-center">
                  <Icon icon={faCheckCircle} className="text-gray-600" size="sm" />
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

