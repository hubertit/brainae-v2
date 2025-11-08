'use client';

import { useState } from 'react';
import Icon, {
  faFileAlt,
  faSearch,
  faFilter,
  faPlus,
  faEdit,
  faTrash,
  faEye,
  faCalendar,
  faClock,
  faBook,
  faUserGraduate,
  faCheckCircle,
  faExclamationCircle,
  faTimes,
  faSave,
} from '../../components/Icon';

type AssessmentType = 'assignment' | 'cat' | 'exam';

interface Assessment {
  id: number;
  title: string;
  type: AssessmentType;
  course: string;
  courseName: string;
  description: string;
  points: number;
  dueDate: string;
  dueTime: string;
  instructions: string;
  status: 'draft' | 'published' | 'closed';
  createdAt: string;
  submissions: number;
  totalStudents: number;
}

export default function LecturerAssessments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<AssessmentType | 'all'>('all');
  const [filterCourse, setFilterCourse] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingAssessment, setEditingAssessment] = useState<Assessment | null>(null);
  const [assessments, setAssessments] = useState<Assessment[]>([
    {
      id: 1,
      title: 'Case Study: Emerging Markets',
      type: 'assignment',
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      description: 'Analyze emerging market opportunities and provide strategic recommendations.',
      points: 100,
      dueDate: '2024-12-15',
      dueTime: '23:59',
      instructions: 'Please submit a comprehensive analysis of at least 2000 words.',
      status: 'published',
      createdAt: '2024-12-01',
      submissions: 24,
      totalStudents: 42,
    },
    {
      id: 2,
      title: 'Midterm Examination',
      type: 'exam',
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      description: 'Comprehensive midterm examination covering financial analysis and valuation.',
      points: 200,
      dueDate: '2024-12-17',
      dueTime: '23:59',
      instructions: 'This is a closed-book exam. Duration: 2 hours.',
      status: 'published',
      createdAt: '2024-11-15',
      submissions: 67,
      totalStudents: 67,
    },
    {
      id: 3,
      title: 'Continuous Assessment Test 1',
      type: 'cat',
      course: 'ENT 211',
      courseName: 'Innovation Lab',
      description: 'First continuous assessment test covering innovation frameworks.',
      points: 50,
      dueDate: '2024-12-19',
      dueTime: '14:00',
      instructions: 'Answer all questions. Time limit: 45 minutes.',
      status: 'published',
      createdAt: '2024-12-05',
      submissions: 12,
      totalStudents: 28,
    },
    {
      id: 4,
      title: 'Strategic Analysis Report',
      type: 'assignment',
      course: 'MGT 401',
      courseName: 'Strategic Management',
      description: 'Strategic analysis of a chosen company with recommendations.',
      points: 100,
      dueDate: '2024-12-20',
      dueTime: '23:59',
      instructions: 'Select a company and analyze its strategic position.',
      status: 'draft',
      createdAt: '2024-12-10',
      submissions: 0,
      totalStudents: 35,
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    type: 'assignment' as AssessmentType,
    courseId: '',
    description: '',
    points: '',
    dueDate: '',
    dueTime: '',
    instructions: '',
    status: 'draft' as 'draft' | 'published' | 'closed',
  });

  const availableCourses = [
    { id: 1, code: 'MBA 602', name: 'Leadership & Strategy', enrolledStudents: 42 },
    { id: 2, code: 'FIN 305', name: 'Corporate Finance', enrolledStudents: 67 },
    { id: 3, code: 'ENT 211', name: 'Innovation Lab', enrolledStudents: 28 },
    { id: 4, code: 'MGT 401', name: 'Strategic Management', enrolledStudents: 35 },
  ];

  const courses = ['All Courses', 'MBA 602', 'FIN 305', 'ENT 211', 'MGT 401'];

  const filteredAssessments = assessments.filter((assessment) => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assessment.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || assessment.type === filterType;
    const matchesCourse = filterCourse === 'all' || assessment.course === filterCourse;
    const matchesStatus = filterStatus === 'all' || assessment.status === filterStatus;
    return matchesSearch && matchesType && matchesCourse && matchesStatus;
  });

  const getTypeBadge = (type: AssessmentType) => {
    switch (type) {
      case 'assignment':
        return (
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1">
            Assignment
          </span>
        );
      case 'cat':
        return (
          <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1">
            CAT
          </span>
        );
      case 'exam':
        return (
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1">
            Exam
          </span>
        );
    }
  };

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
      case 'closed':
        return (
          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1">
            Closed
          </span>
        );
    }
  };

  const handleCreate = () => {
    setFormData({
      title: '',
      type: 'assignment',
      courseId: '',
      description: '',
      points: '',
      dueDate: '',
      dueTime: '',
      instructions: '',
      status: 'draft',
    });
    setEditingAssessment(null);
    setShowCreateModal(true);
  };

  const handleEdit = (assessment: Assessment) => {
    // Find the course ID from the assessment's course code
    const course = availableCourses.find(c => c.code === assessment.course);
    setFormData({
      title: assessment.title,
      type: assessment.type,
      courseId: course?.id.toString() || '',
      description: assessment.description,
      points: assessment.points.toString(),
      dueDate: assessment.dueDate,
      dueTime: assessment.dueTime,
      instructions: assessment.instructions,
      status: assessment.status,
    });
    setEditingAssessment(assessment);
    setShowCreateModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this assessment? This action cannot be undone.')) {
      setAssessments(assessments.filter(a => a.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedCourse = availableCourses.find(c => c.id.toString() === formData.courseId);
    if (!selectedCourse) {
      alert('Please select a course');
      return;
    }
    
    if (editingAssessment) {
      // Update existing
      setAssessments(assessments.map(a => 
        a.id === editingAssessment.id 
          ? {
              ...a,
              title: formData.title,
              type: formData.type,
              course: selectedCourse.code,
              courseName: selectedCourse.name,
              description: formData.description,
              points: parseInt(formData.points),
              dueDate: formData.dueDate,
              dueTime: formData.dueTime,
              instructions: formData.instructions,
              status: formData.status,
              id: editingAssessment.id,
              createdAt: editingAssessment.createdAt,
              submissions: editingAssessment.submissions,
              totalStudents: selectedCourse.enrolledStudents,
            }
          : a
      ));
    } else {
      // Create new
      const newAssessment: Assessment = {
        id: assessments.length + 1,
        title: formData.title,
        type: formData.type,
        course: selectedCourse.code,
        courseName: selectedCourse.name,
        description: formData.description,
        points: parseInt(formData.points),
        dueDate: formData.dueDate,
        dueTime: formData.dueTime,
        instructions: formData.instructions,
        status: formData.status,
        createdAt: new Date().toISOString().split('T')[0],
        submissions: 0,
        totalStudents: selectedCourse.enrolledStudents,
      };
      setAssessments([...assessments, newAssessment]);
    }
    
    setShowCreateModal(false);
    setEditingAssessment(null);
    setFormData({
      title: '',
      type: 'assignment',
      courseId: '',
      description: '',
      points: '',
      dueDate: '',
      dueTime: '',
      instructions: '',
      status: 'draft',
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Assessments</h1>
          <p className="text-gray-600">Create and manage assignments, CATs, and exams</p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          <Icon icon={faPlus} size="sm" />
          <span>New Assessment</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
          <input
            type="text"
            placeholder="Search assessments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          />
        </div>
        <div className="flex items-center gap-2">
          <Icon icon={faFilter} className="text-gray-600" size="sm" />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as AssessmentType | 'all')}
            className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          >
            <option value="all">All Types</option>
            <option value="assignment">Assignment</option>
            <option value="cat">CAT</option>
            <option value="exam">Exam</option>
          </select>
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
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
          >
            <option value="all">All Status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Assessments List */}
      <div className="space-y-4">
        {filteredAssessments.map((assessment) => (
          <div
            key={assessment.id}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <Icon icon={faFileAlt} className="text-primary" size="lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{assessment.title}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      {getTypeBadge(assessment.type)}
                      {getStatusBadge(assessment.status)}
                      <span className="text-xs text-gray-600">{assessment.course} - {assessment.courseName}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 ml-[52px] mb-3">{assessment.description}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-4 pb-4 border-b border-gray-100 ml-[52px]">
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faFileAlt} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Points: <span className="font-semibold text-gray-900">{assessment.points}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Due: <span className="font-semibold text-gray-900">{assessment.dueDate}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faClock} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Time: <span className="font-semibold text-gray-900">{assessment.dueTime}</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Icon icon={faUserGraduate} className="text-gray-500" size="sm" />
                <span className="text-gray-600">Submissions: <span className="font-semibold text-gray-900">{assessment.submissions}/{assessment.totalStudents}</span></span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 ml-[52px]">
              <a
                href={`/lecturer/grading/${assessment.id}`}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Icon icon={faEye} size="sm" />
                <span>View Submissions</span>
              </a>
              <button
                onClick={() => handleEdit(assessment)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                <Icon icon={faEdit} size="sm" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => handleDelete(assessment.id)}
                className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 transition-colors text-sm font-medium"
              >
                <Icon icon={faTrash} size="sm" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAssessments.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faFileAlt} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No assessments found matching your search criteria.</p>
        </div>
      )}

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {editingAssessment ? 'Edit Assessment' : 'Create New Assessment'}
              </h2>
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setEditingAssessment(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <Icon icon={faTimes} size="lg" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                    placeholder="e.g., Case Study: Emerging Markets"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as AssessmentType })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  >
                    <option value="assignment">Assignment</option>
                    <option value="cat">CAT (Continuous Assessment Test)</option>
                    <option value="exam">Exam</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course *</label>
                <select
                  required
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                >
                  <option value="">Select a course</option>
                  {availableCourses.map((course) => (
                    <option key={course.id} value={course.id.toString()}>
                      {course.code} - {course.name} ({course.enrolledStudents} students)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  placeholder="Brief description of the assessment"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Points *</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.points}
                    onChange={(e) => setFormData({ ...formData, points: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                    placeholder="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.dueDate}
                    onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Time *</label>
                  <input
                    type="time"
                    required
                    value={formData.dueTime}
                    onChange={(e) => setFormData({ ...formData, dueTime: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                <textarea
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  placeholder="Detailed instructions for students..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                <select
                  required
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' | 'closed' })}
                  className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <Icon icon={faSave} size="sm" />
                  <span>{editingAssessment ? 'Update Assessment' : 'Create Assessment'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setEditingAssessment(null);
                  }}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <Icon icon={faTimes} size="sm" />
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

