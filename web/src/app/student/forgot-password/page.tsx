'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon, { faEnvelope, faSpinner, faArrowLeft } from '../../components/Icon';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In production, this would send a reset link to the email
      setIsSuccess(true);
    } catch (err) {
      setError('Failed to send reset link. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  alt="BRAINAE University"
                  width={128}
                  height={128}
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-medium text-gray-900 mb-2 text-center">
              Forgot Password
            </h1>
            <p className="text-sm text-gray-600 mb-8 text-center">
              Enter your email address and we'll send you a link to reset your password.
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
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
                      placeholder="student@brainae.edu"
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
                      Sending...
                    </>
                  ) : (
                    'Send Reset Link'
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Check Your Email</h3>
                <p className="text-sm text-gray-600 mb-4">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className="text-xs text-gray-500 mb-6">
                  Please check your inbox and click on the link to reset your password. The link will expire in 1 hour.
                </p>
                <a
                  href="/student"
                  className="inline-block w-full bg-primary text-white py-2.5 rounded hover:bg-primary/90 transition-colors font-medium text-sm"
                >
                  Back to Login
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
              <h2 className="text-4xl font-bold mb-4 text-center">Reset Your Password</h2>
              <p className="text-lg text-white/90 mb-8 text-center">
                Don't worry, we'll help you regain access to your account.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

