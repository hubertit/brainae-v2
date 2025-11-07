'use client';

import { useState } from 'react';
import Icon, { faEnvelope, faPaperPlane, faCheckCircle, faSpinner } from './Icon';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setSubmitStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1 relative">
            <Icon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            {isSubmitting ? (
              <Icon icon={faSpinner} className="animate-spin" />
            ) : (
              <>
                Subscribe
                <Icon icon={faPaperPlane} className="ml-2" size="xs" />
              </>
            )}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p className="mt-2 text-sm text-green-600 flex items-center">
            <Icon icon={faCheckCircle} className="mr-1" size="xs" />
            Successfully subscribed!
          </p>
        )}
        {submitStatus === 'error' && errorMessage && (
          <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Icon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-semibold whitespace-nowrap"
          >
            {isSubmitting ? (
              <>
                <Icon icon={faSpinner} className="mr-2 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <Icon icon={faPaperPlane} className="ml-2" />
              </>
            )}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p className="mt-3 text-sm text-green-600 flex items-center">
            <Icon icon={faCheckCircle} className="mr-2" />
            Thank you! You've been successfully subscribed to our newsletter.
          </p>
        )}
        {submitStatus === 'error' && errorMessage && (
          <p className="mt-3 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-8 ${className}`}>
      <div className="text-center mb-6">
        <Icon icon={faEnvelope} className="text-primary mb-4 mx-auto" size="2x" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-gray-600">
          Subscribe to our newsletter to receive updates about new programs, events, and opportunities.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <div className="relative">
            <Icon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-semibold"
        >
          {isSubmitting ? (
            <>
              <Icon icon={faSpinner} className="mr-2 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              Subscribe to Newsletter
              <Icon icon={faPaperPlane} className="ml-2" />
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="mt-4 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center">
            <Icon icon={faCheckCircle} className="mr-2" />
            Thank you! You've been successfully subscribed to our newsletter.
          </div>
        )}

        {submitStatus === 'error' && errorMessage && (
          <div className="mt-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
            {errorMessage}
          </div>
        )}

        <p className="mt-4 text-xs text-gray-500 text-center">
          By subscribing, you agree to receive emails from Brainae University. You can unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}

