'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon, { faEnvelope, faLock, faUser, faSpinner } from './Icon';

export default function StudentLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  // Mock credentials for testing
  const MOCK_CREDENTIALS = [
    {
      email: 'student@brainae.edu',
      password: 'student123',
      name: 'John Doe',
      studentId: 'STU-2024-001',
    },
    {
      email: 'test@brainae.edu',
      password: 'test123',
      name: 'Jane Smith',
      studentId: 'STU-2024-002',
    },
    {
      email: 'demo@brainae.edu',
      password: 'demo123',
      name: 'Demo Student',
      studentId: 'STU-2024-003',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Check against mock credentials
      const user = MOCK_CREDENTIALS.find(
        (cred) => cred.email === formData.email && cred.password === formData.password
      );

      if (user) {
        // Store login state (in production, use proper auth)
        sessionStorage.setItem('studentLoggedIn', 'true');
        sessionStorage.setItem('studentEmail', user.email);
        sessionStorage.setItem('studentName', user.name);
        sessionStorage.setItem('studentId', user.studentId);
        
        // Set cookie for middleware
        document.cookie = `studentLoggedIn=true; path=/; max-age=86400`;
        
        // Redirect to dashboard
        router.push('/student/dashboard');
      } else {
        setError('Invalid email or password. Please check your credentials and try again.');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Icon icon={faUser} className="text-primary" size="2x" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Login to Your Account</h2>
        <p className="text-gray-600 text-sm">
          Enter your student credentials to access the portal
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded text-sm">
            {error}
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Icon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="student@brainae.edu"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Icon
              icon={faLock}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a
            href="#"
            className="text-sm text-primary hover:text-primary-600 font-medium"
          >
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Icon icon={faSpinner} className="mr-2" spin />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600">
          New student?{' '}
          <a href="/application" className="text-primary hover:text-primary-600 font-medium">
            Apply for admission
          </a>
        </p>
      </div>
    </div>
  );
}

