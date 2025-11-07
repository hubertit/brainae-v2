'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon, { faLock, faSpinner, faArrowLeft, faEye, faEyeSlash } from '../../../components/Icon';

export default function ResetPasswordPage() {
  const params = useParams();
  const router = useRouter();
  const token = params.token as string;
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In production, this would reset the password using the token
      setIsSuccess(true);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/student');
      }, 2000);
    } catch (err) {
      setError('Failed to reset password. The link may have expired. Please request a new one.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Split Layout: Cover + Form */}
      <section className="min-h-screen flex">
        {/* Form Side - Left */}
        <div className="w-full lg:w-[40%] lg:min-w-[500px] bg-white flex items-center justify-center p-8">
          <div className="w-full max-w-[400px]">
            {/* Back to Login Link */}
            <div className="mb-6">
              <a 
                href="/student" 
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
              >
                <Icon icon={faArrowLeft} size="sm" />
                <span>Back to Login</span>
              </a>
            </div>

            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <Image
                  src="/icon.png"
                  alt="Brainae University"
                  width={128}
                  height={128}
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-medium text-gray-900 mb-2 text-center">
              Reset Password
            </h1>
            <p className="text-sm text-gray-600 mb-8 text-center">
              Enter your new password below.
            </p>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded text-sm flex items-center gap-2">
                    <span>⚠</span>
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Icon
                      icon={faLock}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size="sm"
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Icon icon={showPassword ? faEyeSlash : faEye} size="sm" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters long</p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Icon
                      icon={faLock}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size="sm"
                    />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Icon icon={showConfirmPassword ? faEyeSlash : faEye} size="sm" />
                    </button>
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
                      Resetting...
                    </>
                  ) : (
                    'Reset Password'
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Password Reset Successful</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your password has been successfully reset. You can now login with your new password.
                </p>
                <a
                  href="/student"
                  className="inline-block w-full bg-primary text-white py-2.5 rounded hover:bg-primary/90 transition-colors font-medium text-sm"
                >
                  Go to Login
                </a>
              </div>
            )}

            {/* Footer Text */}
            <div className="mt-8 text-center text-gray-600 text-xs leading-relaxed">
              <p>© 2024 Brainae University</p>
              <p>A comprehensive online learning platform</p>
            </div>
          </div>
        </div>

        {/* Cover Side - Right */}
        <div 
          className="hidden lg:flex flex-1 bg-cover bg-center relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white px-8 max-w-md">
              <h2 className="text-4xl font-bold mb-4 text-center">Create New Password</h2>
              <p className="text-lg text-white/90 mb-8 text-center">
                Choose a strong password to secure your account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

