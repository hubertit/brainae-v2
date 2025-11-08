'use client';

import { useState } from 'react';
import Icon, {
  faStickyNote,
  faSearch,
  faPlus,
  faBook,
  faEdit,
  faTrash,
  faSave,
  faCalendar,
  faFilter,
} from '../../components/Icon';

interface Note {
  id: number;
  title: string;
  content: string;
  course?: string;
  courseName?: string;
  module?: string;
  lesson?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export default function StudyNotesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: 'Management Theories Overview',
      content: 'Key points from Module 1:\n\n1. Classical Management Theory\n- Focus on efficiency and productivity\n- Scientific management principles\n\n2. Behavioral Management Theory\n- Emphasis on human relations\n- Motivation and leadership\n\n3. Modern Management Theory\n- Systems approach\n- Contingency theory',
      course: 'BUS 101',
      courseName: 'Introduction to Business Management',
      module: 'Module 1',
      lesson: 'Management Theories Overview',
      createdAt: 'Dec 10, 2024',
      updatedAt: 'Dec 10, 2024',
      tags: ['theory', 'management'],
    },
    {
      id: 2,
      title: 'Data Structures - Binary Trees',
      content: 'Binary Search Tree (BST) properties:\n- Left child < Parent < Right child\n- Efficient for searching: O(log n)\n- In-order traversal gives sorted order\n\nImplementation notes:\n- Use recursion for insertion\n- Handle edge cases (empty tree, single node)',
      course: 'CS 201',
      courseName: 'Data Structures and Algorithms',
      module: 'Module 2',
      lesson: 'Binary Trees',
      createdAt: 'Dec 8, 2024',
      updatedAt: 'Dec 9, 2024',
      tags: ['data-structures', 'trees'],
    },
    {
      id: 3,
      title: 'Accounting Principles',
      content: 'Fundamental accounting principles:\n1. Revenue Recognition\n2. Matching Principle\n3. Historical Cost\n4. Full Disclosure\n\nImportant formulas to remember...',
      course: 'ACC 301',
      courseName: 'Financial Accounting',
      module: 'Module 1',
      lesson: 'Accounting Principles',
      createdAt: 'Dec 5, 2024',
      updatedAt: 'Dec 7, 2024',
      tags: ['accounting', 'principles'],
    },
  ]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [showNewNote, setShowNewNote] = useState(false);

  const courses = ['all', 'BUS 101', 'CS 201', 'ACC 301'];

  const filteredNotes = notes.filter((note) => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCourse = selectedCourse === 'all' || note.course === selectedCourse;
    return matchesSearch && matchesCourse;
  });

  const handleSaveNote = (noteData: Partial<Note>) => {
    if (editingNote) {
      setNotes(notes.map(n => n.id === editingNote.id ? { ...n, ...noteData, updatedAt: new Date().toLocaleDateString() } : n));
      setEditingNote(null);
    } else {
      const newNote: Note = {
        id: notes.length + 1,
        title: noteData.title || 'Untitled Note',
        content: noteData.content || '',
        course: noteData.course,
        courseName: noteData.courseName,
        module: noteData.module,
        lesson: noteData.lesson,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString(),
        tags: noteData.tags || [],
      };
      setNotes([newNote, ...notes]);
      setShowNewNote(false);
    }
  };

  const handleDeleteNote = (id: number) => {
    if (confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(n => n.id !== id));
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Notes</h1>
            <p className="text-gray-600">Organize and manage your study notes</p>
          </div>
          <button
            onClick={() => setShowNewNote(true)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
          >
            <Icon icon={faPlus} size="sm" />
            <span>New Note</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <Icon icon={faFilter} className="text-gray-600" size="sm" />
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
            >
              {courses.map((course) => (
                <option key={course} value={course}>
                  {course === 'all' ? 'All Courses' : course}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* New/Edit Note Form */}
      {(showNewNote || editingNote) && (
        <div className="bg-white border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {editingNote ? 'Edit Note' : 'Create New Note'}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Title</label>
              <input
                type="text"
                defaultValue={editingNote?.title}
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                placeholder="Note title..."
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Course (Optional)</label>
                <select className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white">
                  <option value="">Select course...</option>
                  <option>BUS 101 - Introduction to Business Management</option>
                  <option>CS 201 - Data Structures and Algorithms</option>
                  <option>ACC 301 - Financial Accounting</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Module/Lesson (Optional)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                  placeholder="Module 1, Lesson 2..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Content</label>
              <textarea
                rows={10}
                defaultValue={editingNote?.content}
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                placeholder="Write your notes here..."
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setShowNewNote(false);
                  setEditingNote(null);
                }}
                className="px-6 py-2 bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
              >
                <Icon icon={faSave} className="inline mr-2" size="sm" />
                Save Note
              </button>
              <button
                onClick={() => {
                  setShowNewNote(false);
                  setEditingNote(null);
                }}
                className="px-6 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notes Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length === 0 ? (
          <div className="col-span-full bg-white border border-gray-200 p-12 text-center">
            <Icon icon={faStickyNote} className="text-gray-400 mb-4" size="3x" />
            <p className="text-gray-600">No notes found. Create your first note to get started!</p>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div key={note.id} className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{note.title}</h3>
                  {note.course && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <Icon icon={faBook} className="text-gray-500" size="xs" />
                      <span>{note.course}</span>
                      {note.module && <span>• {note.module}</span>}
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingNote(note)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    title="Edit"
                  >
                    <Icon icon={faEdit} className="text-gray-500" size="sm" />
                  </button>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="p-2 hover:bg-red-50 hover:text-red-600 transition-colors"
                    title="Delete"
                  >
                    <Icon icon={faTrash} className="text-gray-500" size="sm" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-4">{note.content}</p>
              {note.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {note.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <Icon icon={faCalendar} className="text-gray-400" size="xs" />
                  <span>Updated {note.updatedAt}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

