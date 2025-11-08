'use client';

import { useState } from 'react';
import Icon, {
  faNewspaper,
  faSearch,
  faFilter,
  faPlus,
  faEdit,
  faTrash,
  faBook,
  faCalendar,
  faUsers,
  faEye,
} from '../../components/Icon';

export default function LecturerAnnouncements() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const announcements = [
    {
      id: 1,
      title: 'Graduate Faculty Meeting',
      course: 'All Courses',
      courseName: 'General',
      content: 'Agenda: accreditation review, new program proposals, research grant updates. Please review the attached documents before the meeting.',
      date: 'Dec 14, 2024',
      time: '09:30 AM',
      status: 'published',
      views: 156,
      recipients: 245,
    },
    {
      id: 2,
      title: 'Assessment Policy Update',
      course: 'All Courses',
      courseName: 'General',
      content: 'Revised grading rubric templates are now available for all schools. Please download the new templates from the faculty portal.',
      date: 'Dec 12, 2024',
      time: '02:15 PM',
      status: 'published',
      views: 203,
      recipients: 245,
    },
    {
      id: 3,
      title: 'Midterm Exam Schedule - FIN 305',
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      content: 'The midterm exam will be held on December 17th from 11:00 AM to 12:30 PM. Please ensure all students are aware of the date and location.',
      date: 'Dec 10, 2024',
      time: '10:00 AM',
      status: 'published',
      views: 67,
      recipients: 67,
    },
    {
      id: 4,
      title: 'Office Hours Change - This Week',
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      content: 'Due to a faculty meeting, office hours this week will be moved to Thursday 2:00 PM - 4:00 PM instead of the usual Tuesday slot.',
      date: 'Dec 9, 2024',
      time: '03:45 PM',
      status: 'published',
      views: 42,
      recipients: 42,
    },
    {
      id: 5,
      title: 'Draft: New Course Materials Available',
      course: 'ENT 211',
      courseName: 'Innovation Lab',
      content: 'New course materials for the innovation lab are now available. Students can access them through the course portal.',
      date: 'Dec 13, 2024',
      time: '11:20 AM',
      status: 'draft',
      views: 0,
      recipients: 28,
    },
  ];

  const courses = ['All Courses', 'MBA 602', 'FIN 305', 'ENT 211', 'MGT 401'];

  const filteredAnnouncements = announcements.filter((announcement) => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = filterCourse === 'all' || announcement.course === filterCourse;
    return matchesSearch && matchesCourse;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return (
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1">
            Published
          </span>
        );
      case 'draft':
        return (
          <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1">
            Draft
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h1>
          <p className="text-gray-600">Create and manage course announcements</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          <Icon icon={faPlus} size="sm" />
          <span>New Announcement</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
          <input
            type="text"
            placeholder="Search announcements..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <Icon icon={faFilter} className="text-gray-600" size="sm" />
          <select
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          >
            {courses.map((course) => (
              <option key={course} value={course === 'All Courses' ? 'all' : course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Icon icon={faNewspaper} className="text-primary" size="lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{announcement.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Icon icon={faBook} className="text-gray-500" size="sm" />
                        <span>{announcement.course === 'All Courses' ? 'All Courses' : `${announcement.course} - ${announcement.courseName}`}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ml-[52px] mb-3">{announcement.content}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                {getStatusBadge(announcement.status)}
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100 ml-[52px]">
              <div className="flex items-center gap-2">
                <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                <span>{announcement.date} at {announcement.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={faUsers} className="text-gray-500" size="sm" />
                <span>{announcement.recipients} recipients</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon={faEye} className="text-gray-500" size="sm" />
                <span>{announcement.views} views</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 ml-[52px]">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium">
                <Icon icon={faEdit} size="sm" />
                <span>Edit</span>
              </button>
              {announcement.status === 'draft' && (
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
                  <Icon icon={faNewspaper} size="sm" />
                  <span>Publish</span>
                </button>
              )}
              <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 transition-colors text-sm font-medium">
                <Icon icon={faTrash} size="sm" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAnnouncements.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faNewspaper} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No announcements found matching your search criteria.</p>
        </div>
      )}

      {/* Create Modal (Placeholder) */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Create New Announcement</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Icon icon={faTrash} size="sm" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">Announcement creation form would go here.</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Save Draft
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

