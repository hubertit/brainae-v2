import type { Metadata } from 'next';
import Image from 'next/image';
import StudentLogin from '../components/StudentLogin';

export const metadata: Metadata = {
  title: "Student Portal - Login",
    description: "Access your student portal to view courses, grades, assessments, and more at Brainae University.",
  openGraph: {
    title: "Student Portal - Brainae University",
    description: "Login to access your courses, grades, and academic resources",
  },
};

export default function StudentPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Split Layout: Cover + Login */}
      <section className="min-h-screen flex">
        {/* Login Side - Left */}
        <div className="w-full lg:w-[40%] lg:min-w-[500px] bg-white flex items-center justify-center p-8">
          <div className="w-full max-w-[400px]">
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
              Student Portal Login
            </h1>

            {/* Auth Links */}
            <div className="text-center mb-8 text-sm text-gray-600">
              <span>New student? </span>
              <a href="/application" className="text-primary font-medium hover:underline">
                Apply for admission
              </a>
            </div>

            {/* Login Form */}
            <StudentLogin />

            {/* Back to Home Button */}
            <div className="mt-8">
              <a 
                href="/" 
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors rounded font-medium text-sm"
              >
                <span>←</span>
                <span>Back to Home</span>
              </a>
            </div>

            {/* Footer Text */}
            <div className="mt-6 text-center text-gray-600 text-xs leading-relaxed">
              <p>© 2024 Brainae University</p>
              <p>A comprehensive online learning platform</p>
              <p>Empowering students worldwide</p>
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
          {/* Additional overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white px-8 max-w-md">
              <h2 className="text-4xl font-bold mb-4 text-center">Welcome to Student Portal</h2>
              <p className="text-lg text-white/90 mb-8 text-center">
                Access your courses, grades, assessments, and all your academic resources in one place.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Course Management</h3>
                    <p className="text-sm text-white/80">Access all your courses and learning materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Online Assessments</h3>
                    <p className="text-sm text-white/80">Take exams and submit assignments online</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-Library Access</h3>
                    <p className="text-sm text-white/80">Browse digital resources and research materials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Grades & Transcripts</h3>
                    <p className="text-sm text-white/80">View your grades and download official documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Financial Information</h3>
                    <p className="text-sm text-white/80">View tuition fees and payment history</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

