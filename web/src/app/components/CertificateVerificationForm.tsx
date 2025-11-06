'use client';

import { useState } from 'react';
import Icon, { faSearch, faCheckCircle, faCircleXmark, faSpinner } from './Icon';

interface VerificationResult {
  student: string;
  program: string;
  date: string;
  documentType: string;
}

export default function CertificateVerificationForm() {
  const [documentType, setDocumentType] = useState('degree');
  const [documentId, setDocumentId] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!documentId.trim()) {
      setError('Please enter a document ID');
      return;
    }

    setIsValidating(true);
    setError(null);
    setResult(null);

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock validation - in production, this would call your API
      // For demo purposes, accept any numeric ID
      if (/^\d+$/.test(documentId)) {
        setResult({
          student: 'John Doe',
          program: 'Master of Business Administration',
          date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          documentType: documentType,
        });
      } else {
        setError('Document not found. Please verify the document ID and try again.');
      }
    } catch (err) {
      setError('An error occurred during verification. Please try again.');
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Document Type Selection */}
        <div>
          <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-2">
            Document Type *
          </label>
          <select
            id="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="degree">Degree</option>
            <option value="transcript">Transcript</option>
            <option value="towhom">Authorization</option>
            <option value="admissionletter">Admission Letter</option>
          </select>
        </div>

        {/* Document ID Input */}
        <div>
          <label htmlFor="documentId" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Your Registration Number / Document ID *
          </label>
          <div className="relative">
            <input
              type="text"
              id="documentId"
              value={documentId}
              onChange={(e) => setDocumentId(e.target.value)}
              placeholder="e.g., BC/01234/567/2024"
              required
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
            <Icon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Enter the document ID or registration number as it appears on your certificate or document.
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isValidating}
          className="w-full bg-primary text-white px-6 py-3 rounded hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-semibold"
        >
          {isValidating ? (
            <>
              <Icon icon={faSpinner} className="mr-2 animate-spin" />
              Validating...
            </>
          ) : (
            <>
              Validate Document
              <Icon icon={faSearch} className="ml-2" />
            </>
          )}
        </button>
      </form>

      {/* Success Result */}
      {result && (
        <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <div className="flex items-start">
            <Icon icon={faCheckCircle} className="text-green-600 mr-3 mt-1" size="lg" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Document Verified Successfully</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-semibold">Student Name:</span> {result.student}
                </div>
                <div>
                  <span className="font-semibold">Program:</span> {result.program}
                </div>
                <div>
                  <span className="font-semibold">Issue Date:</span> {result.date}
                </div>
                <div>
                  <span className="font-semibold">Document Type:</span> {result.documentType.charAt(0).toUpperCase() + result.documentType.slice(1)}
                </div>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-sm text-green-800">
                    ✓ This document has been verified and is authentic. It was issued by BRAINAE University.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Result */}
      {error && (
        <div className="mt-6 bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="flex items-start">
            <Icon icon={faCircleXmark} className="text-red-600 mr-3 mt-1" size="lg" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Verification Failed</h3>
              <p className="text-red-800">{error}</p>
              <div className="mt-4 text-sm text-red-700">
                <p>Please check:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>The document ID is entered correctly</li>
                  <li>The document type matches your selection</li>
                  <li>The document was issued by BRAINAE University</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

