'use client';

import Icon, {
  faBook,
  faUserGraduate,
  faFileAlt,
  faAward,
  faArrowRight,
  faCalendar,
  faClock,
  faVideo,
  faUsers,
  faEdit,
  faChartLine,
  faBell,
} from '../../components/Icon';

export default function LecturerDashboard() {
  const stats = [
    { label: 'Active Courses', value: '8', change: '+2 this term', icon: faBook, color: 'bg-blue-500' },
    { label: 'Enrolled Students', value: '245', change: '+18 this week', icon: faUserGraduate, color: 'bg-green-500' },
    { label: 'Grading Queue', value: '18', change: '12 due in 48h', icon: faFileAlt, color: 'bg-orange-500' },
    { label: 'Teaching Score', value: '4.8', change: 'Top 10% faculty', icon: faAward, color: 'bg-purple-500' },
  ];

  const todaysSchedule = [
    {
      title: 'MBA 602 • Leadership & Strategy',
      type: 'Live Session',
      icon: faVideo,
      time: '09:00 - 10:30',
      location: 'Zoom • Room 3',
      attendees: 42,
    },
    {
      title: 'FIN 305 • Corporate Finance',
      type: 'Recorded Lecture',
      icon: faVideo,
      time: '11:00 - 11:45',
      location: 'Studio A',
      attendees: 128,
    },
    {
      title: 'Advising Hours',
      type: 'Office Hours',
      icon: faUsers,
      time: '14:00 - 16:00',
      location: 'Virtual Office',
      attendees: 6,
    },
  ];

  const gradingQueue = [
    {
      course: 'MBA 602 • Leadership & Strategy',
      assessment: 'Case Study: Emerging Markets',
      submissions: 24,
      due: 'Due in 18h',
      priority: 'High',
    },
    {
      course: 'FIN 305 • Corporate Finance',
      assessment: 'Midterm Exam Review',
      submissions: 67,
      due: 'Due in 2d',
      priority: 'Medium',
    },
    {
      course: 'ENT 211 • Innovation Lab',
      assessment: 'Prototype Feedback Round',
      submissions: 12,
      due: 'Due in 4d',
      priority: 'Low',
    },
  ];

  const coursePerformance = [
    {
      name: 'MBA 602 • Leadership & Strategy',
      completion: 82,
      satisfaction: '4.9 / 5',
      trend: '+4.1%',
    },
    {
      name: 'FIN 305 • Corporate Finance',
      completion: 74,
      satisfaction: '4.6 / 5',
      trend: '+2.3%',
    },
    {
      name: 'ENT 211 • Innovation Lab',
      completion: 68,
      satisfaction: '4.7 / 5',
      trend: '+5.6%',
    },
  ];

  const announcements = [
    {
      title: 'Graduate Faculty Meeting',
      description: 'Agenda: accreditation review, new program proposals, research grant updates.',
      time: 'Tomorrow • 09:30',
    },
    {
      title: 'Assessment Policy Update',
      description: 'Revised grading rubric templates are now available for all schools.',
      time: '2 days ago',
    },
  ];

  const studentSignals = [
    {
      name: 'Samantha Reed',
      course: 'MBA 602',
      status: 'Missed last 2 live sessions',
      action: 'Send reminder',
    },
    {
      name: 'Daniel Obi',
      course: 'FIN 305',
      status: 'Submitted late 3 times',
      action: 'Review progress',
    },
    {
      name: 'Lina Chen',
      course: 'ENT 211',
      status: 'Top performer • +12% improvement',
      action: 'Send kudos',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Lecturer Dashboard</h1>
        <p className="text-gray-600">Stay on top of your courses, students, and assessments.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-gray-200 p-6 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} text-white w-12 h-12 flex items-center justify-center rounded-full`}> 
                <Icon icon={stat.icon} />
              </div>
            </div>
            <p className="text-xs font-medium text-primary">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="space-y-6 xl:col-span-2">
          <section className="bg-white border border-gray-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Today’s Teaching Schedule</h2>
                <p className="text-sm text-gray-500">Review upcoming engagements and prepare resources.</p>
              </div>
              <a href="/lecturer/calendar" className="text-sm font-medium text-primary hover:text-primary/80">
                View calendar
              </a>
            </div>
            <div className="divide-y divide-gray-100">
              {todaysSchedule.map((item) => (
                <div key={item.title} className="flex flex-col lg:flex-row lg:items-center gap-4 px-6 py-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full">
                      <Icon icon={item.icon} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Icon icon={faClock} className="text-gray-400" size="sm" />
                      {item.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon icon={faCalendar} className="text-gray-400" size="sm" />
                      {item.location}
                    </span>
                    <span className="hidden md:flex items-center gap-2">
                      <Icon icon={faUsers} className="text-gray-400" size="sm" />
                      {item.attendees} learners
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-200">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Grading Tasks</h2>
                <p className="text-sm text-gray-500">Prioritize assessments awaiting review.</p>
              </div>
              <a href="/lecturer/grading" className="text-sm font-medium text-primary hover:text-primary/80">
                Go to grading
              </a>
            </div>
            <div className="divide-y divide-gray-100">
              {gradingQueue.map((item) => (
                <div key={item.assessment} className="px-6 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">{item.assessment}</p>
                    <p className="text-xs text-gray-500 truncate">{item.course}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faFileAlt} className="text-gray-400" size="sm" />
                      {item.submissions} submissions
                    </span>
                    <span className="text-gray-600 flex items-center gap-2">
                      <Icon icon={faClock} className="text-gray-400" size="sm" />
                      {item.due}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full ${
                        item.priority === 'High'
                          ? 'bg-red-50 text-red-600'
                          : item.priority === 'Medium'
                            ? 'bg-amber-50 text-amber-600'
                            : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      {item.priority}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Course Performance</h2>
              <p className="text-sm text-gray-500">Monitor completion and satisfaction metrics.</p>
            </div>
            <div className="px-6 py-4 space-y-4">
              {coursePerformance.map((course) => (
                <div key={course.name} className="border border-gray-100 p-4 hover:border-primary/40 transition-all">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{course.name}</p>
                      <p className="text-xs text-gray-500">Learner satisfaction: {course.satisfaction}</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                      <Icon icon={faChartLine} size="sm" />
                      {course.trend}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Course completion</span>
                      <span>{course.completion}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${course.completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {[
                { label: 'Manage Courses', href: '/lecturer/courses', icon: faBook },
                { label: 'Message Students', href: '/lecturer/messages', icon: faBell },
                { label: 'Plan Assessments', href: '/lecturer/grading', icon: faEdit },
              ].map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="w-10 h-10 bg-gray-100 group-hover:bg-primary/10 flex items-center justify-center rounded-lg">
                    <Icon icon={action.icon} className="text-gray-600 group-hover:text-primary" />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-primary">{action.label}</span>
                  <Icon icon={faArrowRight} className="ml-auto text-gray-400 group-hover:text-primary" size="sm" />
                </a>
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Faculty Updates</h2>
              <a href="/lecturer/announcements" className="text-xs font-semibold text-primary uppercase tracking-wide">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {announcements.map((item) => (
                <div key={item.title} className="border border-gray-100 p-4 hover:border-primary/40 transition-all">
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{item.time}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Student Signals</h2>
            <div className="space-y-3">
              {studentSignals.map((signal) => (
                <div key={signal.name} className="p-3 border border-gray-100 hover:border-primary/40 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{signal.name}</p>
                      <p className="text-xs text-gray-500">{signal.course}</p>
                    </div>
                    <a href="/lecturer/messages" className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {signal.action}
                    </a>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{signal.status}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

