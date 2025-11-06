'use client';

import Icon, { faArrowLeft } from './Icon';

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition-colors font-semibold"
    >
      <Icon icon={faArrowLeft} className="mr-2" />
      Go Back
    </button>
  );
}

