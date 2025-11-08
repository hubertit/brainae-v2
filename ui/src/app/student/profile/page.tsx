'use client';

import { useState, useEffect } from 'react';
import Icon, {
  faUser,
  faEnvelope,
  faPhone,
  faLocationDot,
  faEdit,
  faSave,
  faTimes,
  faCamera,
  faIdCard,
  faCalendar,
  faGraduationCap,
} from '../../components/Icon';

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'student@brainae.edu',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    dateOfBirth: '1995-05-15',
    studentId: 'STU-2024-001',
    enrollmentDate: 'Aug 15, 2024',
    program: 'Bachelor of Science in Business Administration',
  });

  const [emergencyContacts, setEmergencyContacts] = useState([
    {
      id: 1,
      name: 'Jane Doe',
      relationship: 'Parent',
      phone: '+1 (555) 987-6543',
      email: 'jane.doe@email.com',
    },
  ]);

  useEffect(() => {
    // Load user data from sessionStorage
    const name = sessionStorage.getItem('studentName');
    const email = sessionStorage.getItem('studentEmail');
    const studentId = sessionStorage.getItem('studentId');

    if (name) {
      const nameParts = name.split(' ');
      setProfileData((prev) => ({
        ...prev,
        firstName: nameParts[0] || prev.firstName,
        lastName: nameParts.slice(1).join(' ') || prev.lastName,
        email: email || prev.email,
        studentId: studentId || prev.studentId,
      }));
    }
  }, []);

  const handleSave = () => {
    // In production, save to backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reload original data
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile</h1>
        <p className="text-gray-600">Manage your personal information and contact details</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-primary hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  <Icon icon={faEdit} size="sm" />
                  <span>Edit</span>
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                    />
                  ) : (
                    <p className="text-gray-900">{profileData.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={profileData.dateOfBirth}
                    onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-gray-900">{new Date(profileData.dateOfBirth).toLocaleDateString()}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.address}
                    onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary mb-2"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.address}</p>
                )}
              </div>

              {isEditing && (
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      value={profileData.city}
                      onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      value={profileData.state}
                      onChange={(e) => setProfileData({ ...profileData, state: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      value={profileData.zipCode}
                      onChange={(e) => setProfileData({ ...profileData, zipCode: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {isEditing && (
                <div className="flex items-center gap-2 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary/90 transition-colors text-sm font-medium"
                  >
                    <Icon icon={faSave} size="sm" />
                    <span>Save Changes</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <Icon icon={faTimes} size="sm" />
                    <span>Cancel</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Emergency Contacts</h2>
              <button className="text-primary hover:text-primary/80 text-sm font-medium">
                Add Contact
              </button>
            </div>
            <div className="space-y-4">
              {emergencyContacts.map((contact) => (
                <div key={contact.id} className="p-4 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-1">{contact.name}</p>
                      <p className="text-sm text-gray-600 mb-1">{contact.relationship}</p>
                      <p className="text-sm text-gray-600">{contact.phone}</p>
                      <p className="text-sm text-gray-600">{contact.email}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <Icon icon={faEdit} size="sm" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="bg-white border border-gray-200 p-6">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <Icon icon={faUser} className="text-gray-400" size="3x" />
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Icon icon={faCamera} className="text-white" size="sm" />
                </button>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{profileData.firstName} {profileData.lastName}</h3>
              <p className="text-sm text-gray-600">{profileData.email}</p>
            </div>
          </div>

          {/* Student ID Info */}
          <div className="bg-white border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Student Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon icon={faIdCard} className="text-gray-500" size="sm" />
                <div>
                  <p className="text-xs text-gray-600">Student ID</p>
                  <p className="text-sm font-medium text-gray-900">{profileData.studentId}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon={faCalendar} className="text-gray-500" size="sm" />
                <div>
                  <p className="text-xs text-gray-600">Enrollment Date</p>
                  <p className="text-sm font-medium text-gray-900">{profileData.enrollmentDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon={faGraduationCap} className="text-gray-500" size="sm" />
                <div>
                  <p className="text-xs text-gray-600">Program</p>
                  <p className="text-sm font-medium text-gray-900">{profileData.program}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

