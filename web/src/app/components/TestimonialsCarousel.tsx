'use client';

import { useState, useEffect } from 'react';
import Icon, { faChevronLeft, faChevronRight, faStar } from './Icon';

interface Testimonial {
  name: string;
  quote: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function TestimonialsCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Calculate how many testimonials to show per slide based on screen size
  const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3; // lg: 3 items
    if (window.innerWidth >= 768) return 2; // md: 2 items
    return 1; // sm: 1 item
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        return newIndex >= totalSlides ? 0 : newIndex;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isPaused, totalSlides]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? totalSlides - 1 : newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex >= totalSlides ? 0 : newIndex;
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonials Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] px-3"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-full hover:shadow-md transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      icon={faStar}
                      className="text-yellow-400"
                      size="sm"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">Student</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white text-gray-700 z-10 hidden md:flex items-center justify-center"
        aria-label="Previous testimonials"
      >
        <Icon icon={faChevronLeft} size="sm" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white text-gray-700 z-10 hidden md:flex items-center justify-center"
        aria-label="Next testimonials"
      >
        <Icon icon={faChevronRight} size="sm" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-primary'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

