'use client';

import { useState } from 'react';
import Icon, {
  faUserGraduate,
  faSearch,
  faFilter,
  faEnvelope,
  faFileAlt,
  faAward,
  faCalendar,
  faBook,
  faArrowRight,
  faUsers,
  faClock,
  faPlus,
  faEdit,
  faTrash,
  faEye,
  faCheckCircle,
  faTimesCircle,
} from '../../components/Icon';

interface Student {
  id: number;
  name: string;
  email: string;
  studentId: string;
  program: string;
  status: 'active' | 'inactive' | 'suspended' | 'graduated';
  enrollmentDate: string;
  coursesEnrolled: number;
  gpa: string;
  lastActivity: string;
}

export default function AdminStudents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterProgram, setFilterProgram] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: 'Samantha Reed',
      email: 'samantha.reed@brainae.edu',
      studentId: 'STU-2024-045',
      program: 'MBA',
      status: 'active',
      enrollmentDate: '2024-01-15',
      coursesEnrolled: 4,
      gpa: '3.7',
      lastActivity: 'Dec 13, 2024',
    },
    {
      id: 2,
      name: 'Daniel Obi',
      email: 'daniel.obi@brainae.edu',
      studentId: 'STU-2024-128',
      program: 'Finance',
      status: 'active',
      enrollmentDate: '2024-02-20',
      coursesEnrolled: 5,
      gpa: '2.8',
      lastActivity: 'Dec 8, 2024',
    },
    {
      id: 3,
      name: 'Lina Chen',
      email: 'lina.chen@brainae.edu',
      studentId: 'STU-2024-089',
      program: 'Entrepreneurship',
      status: 'active',
      enrollmentDate: '2024-01-10',
      coursesEnrolled: 3,
      gpa: '4.0',
      lastActivity: 'Dec 13, 2024',
    },
    {
      id: 4,
      name: 'Marcus Johnson',
      email: 'marcus.johnson@brainae.edu',
      studentId: 'STU-2024-156',
      program: 'MBA',
      status: 'active',
      enrollmentDate: '2024-01-15',
      coursesEnrolled: 4,
      gpa: '3.9',
      lastActivity: 'Dec 13, 2024',
    },
    {
      id: 5,
      name: 'Priya Patel',
      email: 'priya.patel@brainae.edu',
      studentId: 'STU-2024-092',
      program: 'Finance',
      status: 'active',
      enrollmentDate: '2024-02-20',
      coursesEnrolled: 5,
      gpa: '3.6',
      lastActivity: 'Dec 12, 2024',
    },
    {
      id: 6,
      name: 'James Wilson',
      email: 'james.wilson@brainae.edu',
      studentId: 'STU-2024-201',
      program: 'Management',
      status: 'suspended',
      enrollmentDate: '2023-09-05',
      coursesEnrolled: 2,
      gpa: '2.1',
      lastActivity: 'Nov 20, 2024',
    },
    {
      id: 7,
      name: 'Emma Thompson',
      email: 'emma.thompson@brainae.edu',
      studentId: 'STU-2023-078',
      program: 'MBA',
      status: 'graduated',
      enrollmentDate: '2022-01-10',
      coursesEnrolled: 0,
      gpa: '3.8',
      lastActivity: 'May 15, 2024',
    },
    {
      id: 8,
      name: 'Ahmed Hassan',
      email: 'ahmed.hassan@brainae.edu',
      studentId: 'STU-2024-134',
      program: 'Entrepreneurship',
      status: 'inactive',
      enrollmentDate: '2024-03-01',
      coursesEnrolled: 1,
      gpa: '3.2',
      lastActivity: 'Oct 5, 2024',
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    program: '',
    status: 'active' as Student['status'],
    enrollmentDate: '',
  });

  const programs = ['MBA', 'Finance', 'Entrepreneurship', 'Management', 'Marketing'];

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProgram = filterProgram === 'all' || student.program === filterProgram;
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesProgram && matchesStatus;
  });

  const getStatusBadge = (status: Student['status']) => {
    const styles = {
      active: 'bg-green-100 text-green-700',
      inactive: 'bg-gray-100 text-gray-700',
      suspended: 'bg-red-100 text-red-700',
      graduated: 'bg-blue-100 text-blue-700',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const handleCreate = () => {
    setFormData({
      name: '',
      email: '',
      studentId: '',
      program: '',
      status: 'active',
      enrollmentDate: '',
    });
    setEditingStudent(null);
    setShowCreateModal(true);
  };

  const handleEdit = (student: Student) => {
    setFormData({
      name: student.name,
      email: student.email,
      studentId: student.studentId,
      program: student.program,
      status: student.status,
      enrollmentDate: student.enrollmentDate,
    });
    setEditingStudent(student);
    setShowCreateModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this student?')) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingStudent) {
      setStudents(
        students.map((s) =>
          s.id === editingStudent.id
            ? {
                ...s,
                ...formData,
                coursesEnrolled: s.coursesEnrolled,
                gpa: s.gpa,
                lastActivity: s.lastActivity,
              }
            : s
        )
      );
    } else {
      const newStudent: Student = {
        id: students.length + 1,
        ...formData,
        coursesEnrolled: 0,
        gpa: '0.0',
        lastActivity: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      };
      setStudents([...students, newStudent]);
    }
    setShowCreateModal(false);
    setEditingStudent(null);
    setFormData({
      name: '',
      email: '',
      studentId: '',
      program: '',
      status: 'active',
      enrollmentDate: '',
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Management</h1>
          <p className="text-gray-600">Manage all students in the system</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Icon icon={faPlus} size="sm" />
          <span>Add Student</span>
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
                placeholder="Search by name, email, or student ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <select
              value={filterProgram}
              onChange={(e) => setFilterProgram(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="all">All Programs</option>
              {programs.map((program) => (
                <option key={program} value={program}>
                  {program}
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
              <option value="suspended">Suspended</option>
              <option value="graduated">Graduated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">GPA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollment</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                        <Icon icon={faUserGraduate} className="text-blue-600" size="sm" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                        <div className="text-xs text-gray-400">{student.studentId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{student.program}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{getStatusBadge(student.status)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{student.coursesEnrolled}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{student.gpa}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.enrollmentDate}</div>
                    <div className="text-xs text-gray-500">Last: {student.lastActivity}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <a
                        href={`/admin/students/${student.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Icon icon={faEye} size="sm" />
                      </a>
                      <button
                        onClick={() => handleEdit(student)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Icon icon={faEdit} size="sm" />
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Icon icon={faTrash} size="sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <Icon icon={faUserGraduate} className="text-gray-400 mx-auto mb-4" size="2x" />
            <p className="text-gray-500">No students found</p>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingStudent ? 'Edit Student' : 'Add New Student'}
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                    <input
                      type="text"
                      required
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                    <select
                      required
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="">Select Program</option>
                      {programs.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                      required
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as Student['status'] })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="suspended">Suspended</option>
                      <option value="graduated">Graduated</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Enrollment Date</label>
                    <input
                      type="date"
                      required
                      value={formData.enrollmentDate}
                      onChange={(e) => setFormData({ ...formData, enrollmentDate: e.target.value })}
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
                    setEditingStudent(null);
                  }}
                  className="px-4 py-2 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {editingStudent ? 'Update Student' : 'Create Student'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

