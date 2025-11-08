'use client';

import { useEffect, useState } from 'react';
import Icon, { faArrowRight } from './Icon';

const heroImages = ['/images/hero.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg'];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const pickNextIndex = (previousIndex: number) => {
      let nextIndex = Math.floor(Math.random() * heroImages.length);
      if (nextIndex === previousIndex) {
        nextIndex = (previousIndex + 1) % heroImages.length;
      }
      return nextIndex;
    };

    setActiveIndex((previousIndex) => pickNextIndex(previousIndex));

    const interval = window.setInterval(() => {
      setActiveIndex((previousIndex) => pickNextIndex(previousIndex));
    }, 12000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight px-4">
            Welcome to Brainae University
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/95 leading-relaxed px-4">
            Online education platform that accelerates your career and prepares you to face the future with in-demand skills
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="/application"
              className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Apply Now
              <Icon icon={faArrowRight} className="ml-2" />
            </a>
            <a
              href="/programs"
              className="border-2 border-white/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center font-semibold text-base sm:text-lg shadow-lg"
            >
              Explore Programs
              <Icon icon={faArrowRight} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}


