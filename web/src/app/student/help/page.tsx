'use client';

import { useState } from 'react';
import Icon, {
  faQuestionCircle,
  faSearch,
  faChevronDown,
  faChevronUp,
  faPaperPlane,
  faBook,
  faFileAlt,
  faEnvelope,
} from '../../components/Icon';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'faq' | 'support'>('faq');

  const faqs: FAQ[] = [
    {
      id: 1,
      category: 'Courses',
      question: 'How do I access my course materials?',
      answer: 'You can access course materials by navigating to "My Courses" from the sidebar, then clicking on any course. All course materials, including readings, videos, and resources, are organized by modules within each course.',
    },
    {
      id: 2,
      category: 'Assessments',
      question: 'How do I submit assignments?',
      answer: 'Go to "Assessments" from the sidebar to view all your assignments. Click on any pending assignment to access the submission interface. You can also access assignments directly from within your course modules.',
    },
    {
      id: 3,
      category: 'Grades',
      question: 'When are grades posted?',
      answer: 'Grades are typically posted within 5-7 business days after the assignment due date. You will receive a notification when your grade is available. Check the "Grades & Transcripts" section to view all your grades.',
    },
    {
      id: 4,
      category: 'Library',
      question: 'How do I download library resources?',
      answer: 'Navigate to "E-Library" from the sidebar. Browse or search for resources, then click the "Download" button on any resource card. All downloads are tracked in your account.',
    },
    {
      id: 5,
      category: 'Technical',
      question: 'I cannot access my exam. What should I do?',
      answer: 'First, ensure you have a stable internet connection. Clear your browser cache and cookies, then try again. If the problem persists, contact support through the "Messages" section or submit a support ticket.',
    },
    {
      id: 6,
      category: 'Financial',
      question: 'How do I view my financial information?',
      answer: 'Go to "Financial Info" from the sidebar to view your tuition, fees, payment history, and financial aid information. You can also download statements and receipts from this section.',
    },
    {
      id: 7,
      category: 'Account',
      question: 'How do I change my password?',
      answer: 'Navigate to "Settings" from the sidebar, then go to the "Security" tab. Enter your current password and new password, then confirm the change.',
    },
    {
      id: 8,
      category: 'Courses',
      question: 'Can I access completed courses?',
      answer: 'Yes, all completed courses remain accessible in your course list. You can review materials, download resources, and view your grades even after the course has ended.',
    },
  ];

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Help & Support</h1>
        <p className="text-gray-600">Find answers to common questions or get assistance from our support team</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('faq')}
          className={`px-6 py-3 font-medium transition-colors relative ${
            activeTab === 'faq'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Icon icon={faBook} className="inline mr-2" size="sm" />
          FAQ
        </button>
        <button
          onClick={() => setActiveTab('support')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'support'
              ? 'text-primary border-b-2 border-primary'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Icon icon={faEnvelope} className="inline mr-2" size="sm" />
          Contact Support
        </button>
      </div>

      {activeTab === 'faq' ? (
        <>
          {/* Search */}
          <div className="bg-white border border-gray-200 p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="bg-white border border-gray-200 p-12 text-center">
                <Icon icon={faQuestionCircle} className="text-gray-400 mb-4" size="3x" />
                <p className="text-gray-600">No FAQs found matching your search.</p>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-white border border-gray-200">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    <Icon
                      icon={expandedFAQ === faq.id ? faChevronUp : faChevronDown}
                      className="text-gray-400 ml-4"
                      size="sm"
                    />
                  </button>
                  {expandedFAQ === faq.id && (
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Submit a Support Ticket</h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Submit a support ticket and our team will get back to you within 24 hours.
          </p>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                placeholder="Brief description of your issue..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white">
                <option>Select a category...</option>
                <option>Technical Issue</option>
                <option>Course Related</option>
                <option>Financial</option>
                <option>Account</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Description</label>
              <textarea
                rows={8}
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                placeholder="Please provide detailed information about your issue..."
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-primary text-white hover:bg-primary/90 transition-colors font-medium">
                <Icon icon={faPaperPlane} className="inline mr-2" size="sm" />
                Submit Ticket
              </button>
              <a
                href="/student/messages"
                className="px-6 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Or send a message
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

