'use client';

import { useState } from 'react';
import Icon, {
  faEnvelope,
  faSearch,
  faUser,
  faPaperPlane,
  faClock,
  faCheckCircle,
  faCheck,
  faPlus,
  faTrash,
} from '../../components/Icon';

interface Message {
  id: number;
  sender: string;
  senderRole: 'instructor' | 'support' | 'admin';
  subject: string;
  preview: string;
  time: string;
  date: string;
  read: boolean;
  type: 'inbox' | 'sent';
}

export default function MessagesPage() {
  const [activeTab, setActiveTab] = useState<'inbox' | 'sent' | 'compose'>('inbox');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const inboxMessages: Message[] = [
    {
      id: 1,
      sender: 'Dr. Sarah Johnson',
      senderRole: 'instructor',
      subject: 'Re: Question about Assignment 4',
      preview: 'Thank you for your question. The assignment is due on December 15th...',
      time: '2 hours ago',
      date: 'Dec 12, 2024',
      read: false,
      type: 'inbox',
    },
    {
      id: 2,
      sender: 'Support Team',
      senderRole: 'support',
      subject: 'Library Access Issue Resolved',
      preview: 'We have resolved the library access issue you reported. You should now be able to...',
      time: '1 day ago',
      date: 'Dec 11, 2024',
      read: false,
      type: 'inbox',
    },
    {
      id: 3,
      sender: 'Prof. Michael Chen',
      senderRole: 'instructor',
      subject: 'Course Material Update',
      preview: 'New lecture slides have been uploaded for Module 3. Please review before the next class...',
      time: '2 days ago',
      date: 'Dec 10, 2024',
      read: true,
      type: 'inbox',
    },
    {
      id: 4,
      sender: 'Academic Office',
      senderRole: 'admin',
      subject: 'Semester Registration Reminder',
      preview: 'This is a reminder that Winter 2025 semester registration closes on December 20th...',
      time: '3 days ago',
      date: 'Dec 9, 2024',
      read: true,
      type: 'inbox',
    },
  ];

  const sentMessages: Message[] = [
    {
      id: 5,
      sender: 'Dr. Sarah Johnson',
      senderRole: 'instructor',
      subject: 'Question about Assignment 4',
      preview: 'I have a question regarding the requirements for Assignment 4...',
      time: '1 day ago',
      date: 'Dec 11, 2024',
      read: true,
      type: 'sent',
    },
    {
      id: 6,
      sender: 'Support Team',
      senderRole: 'support',
      subject: 'Library Access Issue',
      preview: 'I am unable to access certain resources in the library. Could you please help...',
      time: '2 days ago',
      date: 'Dec 10, 2024',
      read: true,
      type: 'sent',
    },
  ];

  const messages = activeTab === 'inbox' ? inboxMessages : sentMessages;
  const unreadCount = inboxMessages.filter(m => !m.read).length;

  const filteredMessages = messages.filter((message) =>
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markAsRead = (id: number) => {
    // In production, update via API
    console.log('Mark as read:', id);
  };

  const getSenderIcon = (role: string) => {
    return faUser;
  };

  const getSenderColor = (role: string) => {
    switch (role) {
      case 'instructor':
        return 'bg-blue-100 text-blue-600';
      case 'support':
        return 'bg-green-100 text-green-600';
      case 'admin':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  if (activeTab === 'compose') {
    return (
      <div>
        <div className="mb-8">
          <button
            onClick={() => setActiveTab('inbox')}
            className="flex items-center gap-2 text-gray-600 hover:text-primary mb-4"
          >
            <Icon icon={faEnvelope} size="sm" />
            <span>Back to Messages</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compose Message</h1>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">To</label>
              <select className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white">
                <option>Select recipient...</option>
                <option>Dr. Sarah Johnson (Instructor - BUS 101)</option>
                <option>Prof. Michael Chen (Instructor - CS 201)</option>
                <option>Support Team</option>
                <option>Academic Office</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                placeholder="Enter subject..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
              <textarea
                rows={10}
                className="w-full px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                placeholder="Type your message here..."
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 bg-primary text-white hover:bg-primary/90 transition-colors font-medium">
                <Icon icon={faPaperPlane} className="inline mr-2" size="sm" />
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('inbox')}
                className="px-6 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
            <p className="text-gray-600">
              {activeTab === 'inbox' && unreadCount > 0
                ? `${unreadCount} unread message${unreadCount !== 1 ? 's' : ''}`
                : 'Communicate with instructors and support'}
            </p>
          </div>
          <button
            onClick={() => setActiveTab('compose')}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
          >
            <Icon icon={faPlus} size="sm" />
            <span>New Message</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-gray-200">
          <button
            onClick={() => {
              setActiveTab('inbox');
              setSelectedMessage(null);
            }}
            className={`px-6 py-3 font-medium transition-colors relative ${
              activeTab === 'inbox'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Icon icon={faEnvelope} className="inline mr-2" size="sm" />
            Inbox
            {unreadCount > 0 && (
              <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              setActiveTab('sent');
              setSelectedMessage(null);
            }}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'sent'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Icon icon={faPaperPlane} className="inline mr-2" size="sm" />
            Sent
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 mb-4">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white"
                />
              </div>
            </div>
            <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
              {filteredMessages.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <Icon icon={faEnvelope} className="text-gray-400 mb-2" size="2x" />
                  <p className="text-sm">No messages found</p>
                </div>
              ) : (
                filteredMessages.map((message) => (
                  <button
                    key={message.id}
                    onClick={() => setSelectedMessage(message)}
                    className={`w-full text-left p-4 hover:bg-gray-50 transition-colors ${
                      selectedMessage?.id === message.id ? 'bg-primary/5 border-l-4 border-primary' : ''
                    } ${!message.read ? 'bg-gray-50' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${getSenderColor(message.senderRole)}`}>
                        <Icon icon={getSenderIcon(message.senderRole)} className="text-white" size="sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className={`text-sm font-medium truncate ${!message.read ? 'text-gray-900' : 'text-gray-700'}`}>
                            {message.sender}
                          </p>
                          {message.read && activeTab === 'inbox' && (
                            <Icon icon={faCheck} className="text-gray-400" size="xs" />
                          )}
                        </div>
                        <p className={`text-sm truncate mb-1 ${!message.read ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>
                          {message.subject}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{message.preview}</p>
                        <p className="text-xs text-gray-400 mt-1">{message.time}</p>
                      </div>
                      {!message.read && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2">
          {selectedMessage ? (
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 ${getSenderColor(selectedMessage.senderRole)}`}>
                    <Icon icon={getSenderIcon(selectedMessage.senderRole)} className="text-white" size="lg" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                      {!selectedMessage.read && activeTab === 'inbox' && (
                        <span className="px-2 py-0.5 bg-primary text-white text-xs font-medium rounded">
                          New
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="font-medium">{selectedMessage.sender}</span>
                      <span>•</span>
                      <span>{selectedMessage.date}</span>
                      <span>•</span>
                      <span>{selectedMessage.time}</span>
                    </div>
                  </div>
                </div>
                {!selectedMessage.read && activeTab === 'inbox' && (
                  <button
                    onClick={() => markAsRead(selectedMessage.id)}
                    className="px-4 py-2 border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                  >
                    Mark as read
                  </button>
                )}
              </div>
              <div className="prose max-w-none border-t border-gray-200 pt-6">
                <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.preview}</p>
                <p className="text-gray-700 mt-4">
                  {selectedMessage.type === 'inbox'
                    ? 'This is a full message preview. In production, this would show the complete message content.'
                    : 'This is the message you sent. In production, this would show the complete sent message.'}
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium">
                  <Icon icon={faPaperPlane} className="inline mr-2" size="sm" />
                  Reply
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 p-12 text-center">
              <Icon icon={faEnvelope} className="text-gray-400 mb-4" size="3x" />
              <p className="text-gray-600">Select a message to view</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

