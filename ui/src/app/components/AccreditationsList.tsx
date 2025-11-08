'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon, { faCheckCircle, faChevronLeft, faChevronRight } from './Icon';

interface Accreditation {
  title: string;
  imageUrl: string;
  description: string;
  website: string;
  type: 'Accreditation' | 'Certification' | 'Partnership' | 'Membership';
}

interface AccreditationsListProps {
  accreditations: Accreditation[];
  itemsPerPage?: number;
}

export default function AccreditationsList({ accreditations, itemsPerPage = 9 }: AccreditationsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(accreditations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAccreditations = accreditations.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Show first few pages
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show last few pages
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show pages around current
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentAccreditations.map((accreditation, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 hover:border-primary transition-colors"
          >
            <div className="mb-4 flex items-center justify-center h-32 bg-gray-50 rounded relative">
              <Image
                src={accreditation.imageUrl}
                alt={accreditation.title}
                width={200}
                height={128}
                className="object-contain"
                style={{ maxHeight: '100%', maxWidth: '100%' }}
                unoptimized={accreditation.imageUrl.startsWith('http')}
              />
            </div>
            <div className="mb-3">
              <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                accreditation.type === 'Certification' 
                  ? 'bg-blue-100 text-blue-800' 
                  : accreditation.type === 'Partnership'
                  ? 'bg-purple-100 text-purple-800'
                  : accreditation.type === 'Membership'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {accreditation.type}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
              {accreditation.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {accreditation.description}
            </p>
            {accreditation.website && accreditation.website !== '#' && (
              <a
                href={accreditation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary-600 font-semibold inline-flex items-center"
              >
                Learn More
                <Icon icon={faCheckCircle} className="ml-2" size="sm" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded border ${
                currentPage === 1
                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary'
              } transition-colors`}
              aria-label="Previous page"
            >
              <Icon icon={faChevronLeft} />
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
              {getPageNumbers().map((page, index) => {
                if (page === '...') {
                  return (
                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                      ...
                    </span>
                  );
                }

                const pageNum = page as number;
                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`px-4 py-2 rounded border transition-colors ${
                      currentPage === pageNum
                        ? 'bg-primary text-white border-primary'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary'
                    }`}
                    aria-label={`Go to page ${pageNum}`}
                    aria-current={currentPage === pageNum ? 'page' : undefined}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded border ${
                currentPage === totalPages
                  ? 'border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary'
              } transition-colors`}
              aria-label="Next page"
            >
              <Icon icon={faChevronRight} />
            </button>
          </div>

          {/* Page Info */}
          <p className="mt-4 text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, accreditations.length)} of {accreditations.length} accreditations
          </p>
        </div>
      )}
    </>
  );
}

