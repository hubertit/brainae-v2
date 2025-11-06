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
    <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded text-sm flex items-center gap-2">
            <span>⚠</span>
            <span>{error}</span>
          </div>
        )}

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Icon
              icon={faEnvelope}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size="sm"
            />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              placeholder="student@brainae.edu"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
            Password
          </label>
          <div className="relative">
            <Icon
              icon={faLock}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size="sm"
            />
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 rounded hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          {isSubmitting ? (
            <>
              <Icon icon={faSpinner} className="animate-spin" size="sm" />
              Logging in...
            </>
          ) : (
            'Login'
          )}
        </button>

        <div className="text-center mt-6">
          <a
            href="/student/forgot-password"
            className="text-sm text-primary hover:underline font-medium"
          >
            Forgot password?
          </a>
        </div>
      </form>
  );
}

