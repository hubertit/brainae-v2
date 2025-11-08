'use client';

import { useState } from 'react';
import Icon, {
  faBook,
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faEye,
  faUserGraduate,
  faChalkboardTeacher,
  faCalendar,
} from '../../components/Icon';

interface Course {
  id: number;
  code: string;
  name: string;
  instructor: string;
  instructorEmail: string;
  enrolledStudents: number;
  maxStudents: number;
  status: 'active' | 'inactive' | 'archived';
  startDate: string;
  endDate: string;
  credits: number;
}

export default function AdminCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      code: 'MBA 602',
      name: 'Leadership & Strategy',
      instructor: 'Dr. Sarah Johnson',
      instructorEmail: 'sarah.johnson@brainae.edu',
      enrolledStudents: 42,
      maxStudents: 50,
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      credits: 3,
    },
    {
      id: 2,
      code: 'FIN 305',
      name: 'Corporate Finance',
      instructor: 'Prof. Michael Chen',
      instructorEmail: 'michael.chen@brainae.edu',
      enrolledStudents: 67,
      maxStudents: 70,
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      credits: 3,
    },
    {
      id: 3,
      code: 'ENT 211',
      name: 'Innovation Lab',
      instructor: 'Dr. David Williams',
      instructorEmail: 'david.williams@brainae.edu',
      enrolledStudents: 28,
      maxStudents: 30,
      status: 'active',
      startDate: '2024-02-01',
      endDate: '2024-06-01',
      credits: 2,
    },
    {
      id: 4,
      code: 'MGT 401',
      name: 'Strategic Management',
      instructor: 'Dr. Sarah Johnson',
      instructorEmail: 'sarah.johnson@brainae.edu',
      enrolledStudents: 35,
      maxStudents: 40,
      status: 'active',
      startDate: '2024-01-15',
      endDate: '2024-05-15',
      credits: 3,
    },
    {
      id: 5,
      code: 'MKT 301',
      name: 'Digital Marketing',
      instructor: 'Prof. Emily Davis',
      instructorEmail: 'emily.davis@brainae.edu',
      enrolledStudents: 0,
      maxStudents: 45,
      status: 'inactive',
      startDate: '2024-06-01',
      endDate: '2024-10-01',
      credits: 3,
    },
  ]);

  const [formData, setFormData] = useState({
    code: '',
    name: '',
    instructor: '',
    instructorEmail: '',
    maxStudents: '',
    status: 'active' as Course['status'],
    startDate: '',
    endDate: '',
    credits: '',
  });

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Course['status']) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      inactive: 'bg-gray-100 text-gray-700',
      archived: 'bg-blue-100 text-blue-700',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const handleCreate = () => {
    setFormData({
      code: '',
      name: '',
      instructor: '',
      instructorEmail: '',
      maxStudents: '',
      status: 'active',
      startDate: '',
      endDate: '',
      credits: '',
    });
    setEditingCourse(null);
    setShowCreateModal(true);
  };

  const handleEdit = (course: Course) => {
    setFormData({
      code: course.code,
      name: course.name,
      instructor: course.instructor,
      instructorEmail: course.instructorEmail,
      maxStudents: course.maxStudents.toString(),
      status: course.status,
      startDate: course.startDate,
      endDate: course.endDate,
      credits: course.credits.toString(),
    });
    setEditingCourse(course);
    setShowCreateModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      setCourses(
        courses.map((c) =>
          c.id === editingCourse.id
            ? {
                ...c,
                ...formData,
                maxStudents: parseInt(formData.maxStudents),
                credits: parseInt(formData.credits),
                enrolledStudents: c.enrolledStudents,
              }
            : c
        )
      );
    } else {
      const newCourse: Course = {
        id: courses.length + 1,
        ...formData,
        maxStudents: parseInt(formData.maxStudents),
        credits: parseInt(formData.credits),
        enrolledStudents: 0,
      };
      setCourses([...courses, newCourse]);
    }
    setShowCreateModal(false);
    setEditingCourse(null);
    setFormData({
      code: '',
      name: '',
      instructor: '',
      instructorEmail: '',
      maxStudents: '',
      status: 'active',
      startDate: '',
      endDate: '',
      credits: '',
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Management</h1>
          <p className="text-gray-600">Manage all courses in the system</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Icon icon={faPlus} size="sm" />
          <span>Add Course</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
              <input
                type="text"
                placeholder="Search by course code, name, or instructor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon icon={faBook} className="text-blue-600" size="lg" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{course.code}</h3>
                    <p className="text-sm text-gray-600">{course.name}</p>
                  </div>
                </div>
              </div>
              {getStatusBadge(course.status)}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faChalkboardTeacher} className="text-gray-400" size="sm" />
                <span className="text-gray-600">{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faUserGraduate} className="text-gray-400" size="sm" />
                <span className="text-gray-600">
                  {course.enrolledStudents} / {course.maxStudents} students
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faCalendar} className="text-gray-400" size="sm" />
                <span className="text-gray-600">
                  {course.startDate} - {course.endDate}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">{course.credits}</span> credits
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
              <a
                href={`/admin/courses/${course.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm font-medium rounded-lg"
              >
                <Icon icon={faEye} size="sm" />
                <span>View Details</span>
              </a>
              <button
                onClick={() => handleEdit(course)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Edit"
              >
                <Icon icon={faEdit} size="sm" />
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete"
              >
                <Icon icon={faTrash} size="sm" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <Icon icon={faBook} className="text-gray-400 mx-auto mb-4" size="3x" />
          <p className="text-gray-500">No courses found</p>
        </div>
      )}

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingCourse ? 'Edit Course' : 'Add New Course'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Code</label>
                    <input
                      type="text"
                      required
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.credits}
                      onChange={(e) => setFormData({ ...formData, credits: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instructor Name</label>
                    <input
                      type="text"
                      required
                      value={formData.instructor}
                      onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Instructor Email</label>
                    <input
                      type="email"
                      required
                      value={formData.instructorEmail}
                      onChange={(e) => setFormData({ ...formData, instructorEmail: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Max Students</label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.maxStudents}
                      onChange={(e) => setFormData({ ...formData, maxStudents: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="date"
                      required
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    required
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Course['status'] })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingCourse(null);
                  }}
                  className="px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingCourse ? 'Update Course' : 'Create Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

