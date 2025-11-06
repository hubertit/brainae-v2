'use client';

import { useState } from 'react';
import Icon, {
  faBook,
  faBookOpen,
  faSearch,
  faDownload,
  faFilter,
  faFileAlt,
  faVideo,
  faClock,
  faUser,
  faCalendar,
} from '../../components/Icon';

interface Resource {
  id: number;
  title: string;
  type: 'ebook' | 'journal' | 'paper' | 'video' | 'article';
  author: string;
  category: string;
  year: number;
  pages?: number;
  duration?: string;
  size: string;
  description: string;
  available: boolean;
  downloads: number;
}

export default function StudentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [resources, setResources] = useState<Resource[]>([
    {
      id: 1,
      title: 'Introduction to Business Management',
      type: 'ebook',
      author: 'Dr. Sarah Johnson',
      category: 'Business',
      year: 2024,
      pages: 450,
      size: '12.5 MB',
      description: 'Comprehensive guide to modern business management principles and practices.',
      available: true,
      downloads: 1250,
    },
    {
      id: 2,
      title: 'Strategic Planning in Organizations',
      type: 'journal',
      author: 'Prof. Michael Chen',
      category: 'Business',
      year: 2023,
      pages: 25,
      size: '2.1 MB',
      description: 'Research paper on strategic planning methodologies and their implementation.',
      available: true,
      downloads: 890,
    },
    {
      id: 3,
      title: 'Data Structures and Algorithms: Advanced Concepts',
      type: 'ebook',
      author: 'Dr. Lisa Anderson',
      category: 'Computer Science',
      year: 2024,
      pages: 680,
      size: '18.3 MB',
      description: 'In-depth exploration of advanced data structures and algorithmic techniques.',
      available: true,
      downloads: 2100,
    },
    {
      id: 4,
      title: 'Financial Accounting Standards',
      type: 'paper',
      author: 'Dr. Emily Rodriguez',
      category: 'Accounting',
      year: 2024,
      pages: 45,
      size: '3.5 MB',
      description: 'Latest updates on financial accounting standards and reporting requirements.',
      available: true,
      downloads: 1450,
    },
    {
      id: 5,
      title: 'Marketing Strategies for Digital Age',
      type: 'video',
      author: 'Prof. David Williams',
      category: 'Marketing',
      year: 2024,
      duration: '2h 30m',
      size: '450 MB',
      description: 'Video lecture series on modern marketing strategies and digital transformation.',
      available: true,
      downloads: 3200,
    },
    {
      id: 6,
      title: 'Leadership and Team Management',
      type: 'article',
      author: 'Dr. Sarah Johnson',
      category: 'Management',
      year: 2023,
      pages: 15,
      size: '1.2 MB',
      description: 'Article on effective leadership styles and team management techniques.',
      available: true,
      downloads: 980,
    },
    {
      id: 7,
      title: 'Web Development Best Practices',
      type: 'ebook',
      author: 'Dr. Lisa Anderson',
      category: 'Computer Science',
      year: 2024,
      pages: 520,
      size: '14.8 MB',
      description: 'Comprehensive guide to modern web development practices and frameworks.',
      available: true,
      downloads: 1890,
    },
    {
      id: 8,
      title: 'Research Methods in Social Sciences',
      type: 'journal',
      author: 'Prof. Michael Chen',
      category: 'Research',
      year: 2023,
      pages: 30,
      size: '2.8 MB',
      description: 'Academic journal article on research methodologies in social sciences.',
      available: true,
      downloads: 1120,
    },
  ]);

  const categories = ['all', 'Business', 'Computer Science', 'Accounting', 'Marketing', 'Management', 'Research'];
  const types = ['all', 'ebook', 'journal', 'paper', 'video', 'article'];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'ebook':
        return faBook;
      case 'journal':
        return faBookOpen;
      case 'paper':
        return faFileAlt;
      case 'video':
        return faVideo;
      case 'article':
        return faFileAlt;
      default:
        return faBook;
    }
  };

  const stats = [
    { label: 'E-Books', count: '1,250+', icon: faBook, color: 'bg-gray-100', iconColor: 'text-gray-600' },
    { label: 'Journals', count: '450+', icon: faBookOpen, color: 'bg-gray-100', iconColor: 'text-gray-600' },
    { label: 'Research Papers', count: '2,100+', icon: faFileAlt, color: 'bg-gray-100', iconColor: 'text-gray-600' },
    { label: 'Video Lectures', count: '320+', icon: faVideo, color: 'bg-gray-100', iconColor: 'text-gray-600' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">E-Library</h1>
        <p className="text-gray-600">Access digital resources, e-books, journals, and research materials</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className={`${stat.color} p-3`}>
                <Icon icon={stat.icon} className={stat.iconColor} size="lg" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.count}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
            <input
              type="text"
              placeholder="Search books, journals, articles, videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
            />
          </div>
          <div className="flex items-center gap-2">
            <Icon icon={faFilter} className="text-gray-600" size="sm" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Icon icon={getResourceIcon(resource.type)} className="text-gray-600" size="lg" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{resource.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Icon icon={faUser} className="text-gray-500" size="xs" />
                  <span className="truncate">{resource.author}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="capitalize">{resource.type}</span>
                  <span>•</span>
                  <span>{resource.year}</span>
                  {resource.pages && (
                    <>
                      <span>•</span>
                      <span>{resource.pages} pages</span>
                    </>
                  )}
                  {resource.duration && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Icon icon={faClock} size="xs" />
                        {resource.duration}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">{resource.description}</p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="text-xs text-gray-500">
                <span>{resource.size}</span>
                <span className="mx-2">•</span>
                <span>{resource.downloads.toLocaleString()} downloads</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
                <Icon icon={faDownload} size="sm" />
                <span>Download</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faBook} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No resources found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

