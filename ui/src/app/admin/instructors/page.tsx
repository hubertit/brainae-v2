'use client';

import { useState } from 'react';
import Icon, {
  faChalkboardTeacher,
  faSearch,
  faPlus,
  faEdit,
  faTrash,
  faEye,
  faBook,
  faEnvelope,
  faPhone,
  faCalendar,
} from '../../components/Icon';

interface Instructor {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  title: string;
  coursesTeaching: number;
  totalStudents: number;
  status: 'active' | 'inactive' | 'on_leave';
  hireDate: string;
}

export default function AdminInstructors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingInstructor, setEditingInstructor] = useState<Instructor | null>(null);
  const [instructors, setInstructors] = useState<Instructor[]>([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@brainae.edu',
      phone: '+1 (555) 123-4567',
      department: 'Business',
      title: 'Professor',
      coursesTeaching: 2,
      totalStudents: 77,
      status: 'active',
      hireDate: '2020-01-15',
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      email: 'michael.chen@brainae.edu',
      phone: '+1 (555) 234-5678',
      department: 'Finance',
      title: 'Associate Professor',
      coursesTeaching: 1,
      totalStudents: 67,
      status: 'active',
      hireDate: '2021-03-20',
    },
    {
      id: 3,
      name: 'Dr. David Williams',
      email: 'david.williams@brainae.edu',
      phone: '+1 (555) 345-6789',
      department: 'Entrepreneurship',
      title: 'Assistant Professor',
      coursesTeaching: 1,
      totalStudents: 28,
      status: 'active',
      hireDate: '2022-08-10',
    },
    {
      id: 4,
      name: 'Prof. Emily Davis',
      email: 'emily.davis@brainae.edu',
      phone: '+1 (555) 456-7890',
      department: 'Marketing',
      title: 'Professor',
      coursesTeaching: 0,
      totalStudents: 0,
      status: 'on_leave',
      hireDate: '2019-06-01',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    title: '',
    status: 'active' as Instructor['status'],
    hireDate: '',
  });

  const departments = ['Business', 'Finance', 'Entrepreneurship', 'Marketing', 'Management'];

  const filteredInstructors = instructors.filter((instructor) => {
    const matchesSearch =
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || instructor.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || instructor.status === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusBadge = (status: Instructor['status']) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      inactive: 'bg-gray-100 text-gray-700',
      on_leave: 'bg-yellow-100 text-yellow-700',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {status === 'on_leave' ? 'On Leave' : status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const handleCreate = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      title: '',
      status: 'active',
      hireDate: '',
    });
    setEditingInstructor(null);
    setShowCreateModal(true);
  };

  const handleEdit = (instructor: Instructor) => {
    setFormData({
      name: instructor.name,
      email: instructor.email,
      phone: instructor.phone,
      department: instructor.department,
      title: instructor.title,
      status: instructor.status,
      hireDate: instructor.hireDate,
    });
    setEditingInstructor(instructor);
    setShowCreateModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this instructor?')) {
      setInstructors(instructors.filter((i) => i.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingInstructor) {
      setInstructors(
        instructors.map((i) =>
          i.id === editingInstructor.id
            ? {
                ...i,
                ...formData,
                coursesTeaching: i.coursesTeaching,
                totalStudents: i.totalStudents,
              }
            : i
        )
      );
    } else {
      const newInstructor: Instructor = {
        id: instructors.length + 1,
        ...formData,
        coursesTeaching: 0,
        totalStudents: 0,
      };
      setInstructors([...instructors, newInstructor]);
    }
    setShowCreateModal(false);
    setEditingInstructor(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      department: '',
      title: '',
      status: 'active',
      hireDate: '',
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Instructor Management</h1>
          <p className="text-gray-600">Manage all instructors in the system</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Icon icon={faPlus} size="sm" />
          <span>Add Instructor</span>
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
                placeholder="Search by name, email, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="on_leave">On Leave</option>
            </select>
          </div>
        </div>
      </div>

      {/* Instructors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInstructors.map((instructor) => (
          <div key={instructor.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon icon={faChalkboardTeacher} className="text-blue-600" size="lg" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{instructor.name}</h3>
                  <p className="text-sm text-gray-600">{instructor.title}</p>
                </div>
              </div>
              {getStatusBadge(instructor.status)}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faEnvelope} className="text-gray-400" size="sm" />
                <span className="text-gray-600 truncate">{instructor.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faPhone} className="text-gray-400" size="sm" />
                <span className="text-gray-600">{instructor.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faBook} className="text-gray-400" size="sm" />
                <span className="text-gray-600">{instructor.department} Department</span>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100">
                <div>
                  <div className="text-xs text-gray-500">Courses</div>
                  <div className="text-sm font-semibold text-gray-900">{instructor.coursesTeaching}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Students</div>
                  <div className="text-sm font-semibold text-gray-900">{instructor.totalStudents}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
                <Icon icon={faCalendar} className="text-gray-400" size="xs" />
                <span>Hired: {instructor.hireDate}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
              <a
                href={`/admin/instructors/${instructor.id}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm font-medium rounded-lg"
              >
                <Icon icon={faEye} size="sm" />
                <span>View Details</span>
              </a>
              <button
                onClick={() => handleEdit(instructor)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Edit"
              >
                <Icon icon={faEdit} size="sm" />
              </button>
              <button
                onClick={() => handleDelete(instructor.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete"
              >
                <Icon icon={faTrash} size="sm" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredInstructors.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <Icon icon={faChalkboardTeacher} className="text-gray-400 mx-auto mb-4" size="3x" />
          <p className="text-gray-500">No instructors found</p>
        </div>
      )}

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingInstructor ? 'Edit Instructor' : 'Add New Instructor'}
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    <select
                      required
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <select
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select Title</option>
                      <option value="Professor">Professor</option>
                      <option value="Associate Professor">Associate Professor</option>
                      <option value="Assistant Professor">Assistant Professor</option>
                      <option value="Lecturer">Lecturer</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      required
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as Instructor['status'] })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="on_leave">On Leave</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hire Date</label>
                    <input
                      type="date"
                      required
                      value={formData.hireDate}
                      onChange={(e) => setFormData({ ...formData, hireDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingInstructor(null);
                  }}
                  className="px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingInstructor ? 'Update Instructor' : 'Create Instructor'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

