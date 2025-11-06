'use client';

import { useState } from 'react';

export default function PartnersCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'EduTech Solutions', logo: 'ETS' },
    { name: 'Global Learning', logo: 'GL' },
    { name: 'Innovation Hub', logo: 'IH' },
    { name: 'Digital Academy', logo: 'DA' },
    { name: 'Future Skills', logo: 'FS' },
    { name: 'Smart Education', logo: 'SE' },
    { name: 'Knowledge Partners', logo: 'KP' },
    { name: 'Academic Alliance', logo: 'AA' },
    { name: 'Learning Network', logo: 'LN' },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Partners</h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            We collaborate with leading organizations and institutions to deliver exceptional educational experiences.
          </p>
          
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex gap-8"
              style={{
                animation: isPaused ? 'none' : 'scroll 60s linear infinite',
                width: 'fit-content',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-white border border-gray-200 rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <div className="text-center p-4 w-full">
                    <div className="text-3xl font-extrabold text-primary mb-2">{partner.logo}</div>
                    <div className="text-xs text-gray-600 font-medium leading-tight">{partner.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

