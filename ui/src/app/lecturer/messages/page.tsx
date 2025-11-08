'use client';

import { useState } from 'react';
import Icon, {
  faEnvelope,
  faSearch,
  faFilter,
  faUserGraduate,
  faPaperPlane,
  faClock,
  faCheckCircle,
  faBook,
  faReply,
} from '../../components/Icon';

export default function LecturerMessages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [messageText, setMessageText] = useState('');

  const conversations = [
    {
      id: 1,
      student: {
        name: 'Samantha Reed',
        email: 'samantha.reed@brainae.edu',
        studentId: 'STU-2024-045',
      },
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      lastMessage: 'Thank you for the clarification on the case study requirements.',
      lastMessageTime: '2 hours ago',
      unread: 0,
      status: 'read',
    },
    {
      id: 2,
      student: {
        name: 'Daniel Obi',
        email: 'daniel.obi@brainae.edu',
        studentId: 'STU-2024-128',
      },
      course: 'FIN 305',
      courseName: 'Corporate Finance',
      lastMessage: 'I have a question about the midterm exam format.',
      lastMessageTime: '5 hours ago',
      unread: 2,
      status: 'unread',
    },
    {
      id: 3,
      student: {
        name: 'Lina Chen',
        email: 'lina.chen@brainae.edu',
        studentId: 'STU-2024-089',
      },
      course: 'ENT 211',
      courseName: 'Innovation Lab',
      lastMessage: 'Could you review my prototype submission?',
      lastMessageTime: '1 day ago',
      unread: 0,
      status: 'read',
    },
    {
      id: 4,
      student: {
        name: 'Marcus Johnson',
        email: 'marcus.johnson@brainae.edu',
        studentId: 'STU-2024-156',
      },
      course: 'MBA 602',
      courseName: 'Leadership & Strategy',
      lastMessage: 'I need help understanding the strategic analysis framework.',
      lastMessageTime: '2 days ago',
      unread: 1,
      status: 'unread',
    },
  ];

  const messages = [
    {
      id: 1,
      conversationId: 2,
      sender: 'student',
      content: 'Hello Professor, I have a question about the midterm exam format. Will it be multiple choice or essay-based?',
      timestamp: 'Dec 13, 2024 - 10:30 AM',
    },
    {
      id: 2,
      conversationId: 2,
      sender: 'lecturer',
      content: 'Hi Daniel, the midterm will be a combination of both. 60% multiple choice and 40% short essay questions covering chapters 1-5.',
      timestamp: 'Dec 13, 2024 - 11:15 AM',
    },
    {
      id: 3,
      conversationId: 2,
      sender: 'student',
      content: 'Thank you for the clarification. Should I focus more on the theoretical concepts or practical applications?',
      timestamp: 'Dec 13, 2024 - 2:45 PM',
    },
  ];

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch = conv.student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || conv.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const currentMessages = selectedConversation
    ? messages.filter(m => m.conversationId === selectedConversation)
    : [];

  const currentConversation = selectedConversation
    ? conversations.find(c => c.id === selectedConversation)
    : null;

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    // In a real app, this would send the message
    console.log('Sending message:', messageText);
    setMessageText('');
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Messages</h1>
        <p className="text-gray-600">Communicate with your students</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200">
            {/* Search and Filter */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <Icon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="sm" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white text-sm"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon={faFilter} className="text-gray-600" size="sm" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary bg-white text-sm"
                  >
                    <option value="all">All Messages</option>
                    <option value="unread">Unread</option>
                    <option value="read">Read</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Conversations */}
            <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`w-full p-4 text-left hover:bg-gray-50 transition-colors ${
                    selectedConversation === conversation.id ? 'bg-primary/5 border-l-4 border-primary' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon icon={faUserGraduate} className="text-primary" size="sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{conversation.student.name}</h3>
                        {conversation.unread > 0 && (
                          <span className="ml-2 bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 mb-1 truncate">{conversation.course} - {conversation.courseName}</p>
                      <p className="text-xs text-gray-500 truncate">{conversation.lastMessage}</p>
                      <p className="text-xs text-gray-400 mt-1">{conversation.lastMessageTime}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Message View */}
        <div className="lg:col-span-2">
          {currentConversation ? (
            <div className="bg-white border border-gray-200 flex flex-col h-[600px]">
              {/* Conversation Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon icon={faUserGraduate} className="text-primary" size="lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{currentConversation.student.name}</h3>
                    <p className="text-sm text-gray-600">{currentConversation.student.email}</p>
                    <p className="text-xs text-gray-500">{currentConversation.course} - {currentConversation.courseName}</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'lecturer' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.sender === 'lecturer'
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'lecturer' ? 'text-primary-100' : 'text-gray-500'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-200 focus:outline-none focus:border-primary rounded-lg"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors rounded-lg flex items-center gap-2"
                  >
                    <Icon icon={faPaperPlane} size="sm" />
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 p-12 text-center h-[600px] flex items-center justify-center">
              <div>
                <Icon icon={faEnvelope} className="text-gray-400 mb-4 mx-auto" size="3x" />
                <p className="text-gray-600">Select a conversation to view messages</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {filteredConversations.length === 0 && (
        <div className="bg-white border border-gray-200 p-12 text-center">
          <Icon icon={faEnvelope} className="text-gray-400 mb-4" size="3x" />
          <p className="text-gray-600">No conversations found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
}

