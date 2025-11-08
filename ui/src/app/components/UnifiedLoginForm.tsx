'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon, { faEnvelope, faLock, faSpinner, faUserGraduate, faChalkboardTeacher, faUserShield } from './Icon';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type UserRole = 'student' | 'lecturer' | 'admin';

interface UnifiedLoginFormProps {
  highlightRole?: UserRole;
}

interface MockUser {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  studentId?: string;
  department?: string;
}

const MOCK_USERS: MockUser[] = [
  { email: 'student@brainae.edu', password: 'student123', name: 'John Doe', role: 'student', studentId: 'STU-2024-001' },
  { email: 'learner@brainae.edu', password: 'learner123', name: 'Jane Smith', role: 'student', studentId: 'STU-2024-002' },
  { email: 'demo@brainae.edu', password: 'demo123', name: 'Demo Student', role: 'student', studentId: 'STU-2024-003' },
  { email: 'lecturer@brainae.edu', password: 'lecturer123', name: 'Dr. Emily Carter', role: 'lecturer', department: 'Business School' },
  { email: 'instructor@brainae.edu', password: 'instructor123', name: 'Prof. Michael Lee', role: 'lecturer', department: 'Engineering Faculty' },
  { email: 'admin@brainae.edu', password: 'admin123', name: 'Alex Johnson', role: 'admin' },
  { email: 'operations@brainae.edu', password: 'operations123', name: 'Morgan Blake', role: 'admin' },
];

const ROLE_INFO: Record<UserRole, { label: string; description: string; icon: IconDefinition }> = {
  student: {
    label: 'Student portal',
    description: 'Keep learning, submit work, and follow your progress.',
    icon: faUserGraduate,
  },
  lecturer: {
    label: 'Lecturer portal',
    description: 'Run classes, share materials, and guide your learners.',
    icon: faChalkboardTeacher,
  },
  admin: {
    label: 'Administrator portal',
    description: 'Look after admissions, records, and campus messages.',
    icon: faUserShield,
  },
};

const COOKIE_MAX_AGE = 60 * 60 * 24; // 24 hours

const clearAuthState = () => {
  if (typeof window === 'undefined') return;

  sessionStorage.removeItem('brainaeAuth');
  sessionStorage.removeItem('brainaeRole');
  sessionStorage.removeItem('studentLoggedIn');
  sessionStorage.removeItem('studentEmail');
  sessionStorage.removeItem('studentName');
  sessionStorage.removeItem('studentId');
  sessionStorage.removeItem('lecturerName');
  sessionStorage.removeItem('adminName');

  document.cookie = 'studentLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'lecturerLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'brainaeRole=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'brainaeLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
};

const setCookie = (name: string, value: string) => {
  document.cookie = `${name}=${value}; path=/; max-age=${COOKIE_MAX_AGE}`;
};

export default function UnifiedLoginForm({ highlightRole }: UnifiedLoginFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const activeRoleInfo = highlightRole ? ROLE_INFO[highlightRole] : undefined;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const user = MOCK_USERS.find(
        (cred) => cred.email === formData.email.trim() && cred.password === formData.password,
      );

      if (!user) {
        setError('Invalid credentials. Please check your email and password, then try again.');
        return;
      }

      clearAuthState();

      sessionStorage.setItem(
        'brainaeAuth',
        JSON.stringify({
          role: user.role,
          email: user.email,
          name: user.name,
          studentId: user.studentId,
          department: user.department,
        }),
      );
      sessionStorage.setItem('brainaeRole', user.role);

      if (user.role === 'student') {
        sessionStorage.setItem('studentLoggedIn', 'true');
        sessionStorage.setItem('studentEmail', user.email);
        sessionStorage.setItem('studentName', user.name);
        if (user.studentId) {
          sessionStorage.setItem('studentId', user.studentId);
        } else {
          sessionStorage.removeItem('studentId');
        }
        setCookie('studentLoggedIn', 'true');
      } else {
        document.cookie = 'studentLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }

      if (user.role === 'lecturer') {
        sessionStorage.setItem('lecturerName', user.name);
        setCookie('lecturerLoggedIn', 'true');
      } else {
        document.cookie = 'lecturerLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }

      if (user.role === 'admin') {
        sessionStorage.setItem('adminName', user.name);
        setCookie('adminLoggedIn', 'true');
      } else {
        document.cookie = 'adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }

      setCookie('brainaeRole', user.role);
      setCookie('brainaeLoggedIn', 'true');

      const targetRoute =
        user.role === 'student'
          ? '/student/dashboard'
          : user.role === 'lecturer'
            ? '/lecturer/dashboard'
            : '/admin/dashboard';

      router.push(targetRoute);
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const heading = activeRoleInfo ? `Welcome back to the ${activeRoleInfo.label}` : 'Sign in to Brainae University';
  const description = 'Enter your email and password to continue.';

  return (
    <div>
      {activeRoleInfo ? (
        <div className="mb-6 flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon icon={activeRoleInfo.icon} className="text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{activeRoleInfo.label}</p>
            <p className="text-xs text-gray-600">{activeRoleInfo.description}</p>
          </div>
        </div>
      ) : null}

      <div className="border border-gray-200 rounded-lg p-5 sm:p-6">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{heading}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded text-sm">
              {error}
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
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@brainae.edu"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
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
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed font-semibold flex items-center justify-center gap-2 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <Icon icon={faSpinner} className="animate-spin" size="sm" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>

          <div className="text-center mt-4">
            <a href="/student/forgot-password" className="text-sm text-primary hover:underline font-medium">
              Forgot password?
            </a>
          </div>
        </form>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Have multiple roles? Sign in once and switch dashboards without re-entering your credentials.
      </p>
    </div>
  );
}


