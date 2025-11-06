'use client';

import { useState } from 'react';
import Image from 'next/image';
import Icon, { faBars, faTimes } from './Icon';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="BRAINAE University"
                width={128}
                height={128}
                className="h-14 w-14 rounded-full border border-gray-300"
              />
              <span className="text-3xl font-extrabold text-primary tracking-tighter leading-none inline-block">
                <span className="block whitespace-nowrap">Brainae</span>
                <span className="block font-light text-2xl text-gray-900 whitespace-nowrap -mt-2">University</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/about" className="text-sm text-gray-700 hover:text-primary transition-colors">
              About
            </a>
            <a href="/admissions" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Admissions
            </a>
            <a href="/programs" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Programs
            </a>
            <a href="/faculty" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Faculty
            </a>
            <a href="/research" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Research
            </a>
            <a href="/financial-aid" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Financial Aid
            </a>
            <a href="/accreditations" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Accreditations
            </a>
            <a href="/verify-certificate" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Verify Certificate
            </a>
            <a href="/library" className="text-sm text-gray-700 hover:text-primary transition-colors">
              E-Library
            </a>
            <a href="/contact" className="text-sm text-gray-700 hover:text-primary transition-colors">
              Contact
            </a>
            <a
              href="/student"
              className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-primary-600 transition-colors"
            >
              Student Portal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="/about"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/admissions"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admissions
              </a>
              <a
                href="/programs"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </a>
              <a
                href="/faculty"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Faculty
              </a>
              <a
                href="/research"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Research
              </a>
              <a
                href="/financial-aid"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Financial Aid
              </a>
              <a
                href="/accreditations"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accreditations
              </a>
              <a
                href="/verify-certificate"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Verify Certificate
              </a>
              <a
                href="/library"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                E-Library
              </a>
              <a
                href="/contact"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="/student"
                className="bg-primary text-white text-sm px-4 py-2 rounded text-center hover:bg-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Student Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

