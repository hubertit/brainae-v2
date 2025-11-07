import type { Metadata } from 'next';
import Image from 'next/image';
import UnifiedLoginForm, { UserRole } from '../components/UnifiedLoginForm';

interface LoginPageProps {
  searchParams?: Record<string, string | string[]>;
}

const HERO_BULLETS = [
  {
    title: 'One account',
    description: 'Use the same login for every Brainae service.',
  },
  {
    title: 'Personal dashboard',
    description: 'We take you straight to the tools made for you.',
  },
  {
    title: 'Always connected',
    description: 'Pick up where you left off on any device.',
  },
];

const VALID_ROLES: UserRole[] = ['student', 'lecturer', 'admin'];

const ROLE_HEADLINES: Record<UserRole, { heading: string; subtitle: string }> = {
  student: {
    heading: 'Student sign in',
    subtitle: 'Enter your details to keep learning and stay on track.',
  },
  lecturer: {
    heading: 'Lecturer sign in',
    subtitle: 'Reach your classes, learners, and shared resources.',
  },
  admin: {
    heading: 'Administrator sign in',
    subtitle: 'Take care of campus updates, records, and support.',
  },
};

export const metadata: Metadata = {
  title: 'Portal Login',
  description: 'Sign in to Brainae University portals with a unified login experience for students, lecturers, and administrators.',
  openGraph: {
    title: 'Brainae University Portal Login',
    description: 'Access student, lecturer, and admin portals from a single unified login.',
  },
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const queryRole = typeof searchParams?.role === 'string' ? searchParams.role : undefined;
  const highlightRole = VALID_ROLES.includes(queryRole as UserRole) ? (queryRole as UserRole) : undefined;
  const heroHeading = highlightRole ? ROLE_HEADLINES[highlightRole].heading : 'Sign in to Brainae University';
  const heroSubtitle = highlightRole
    ? ROLE_HEADLINES[highlightRole].subtitle
    : 'Use your email and password to continue.';

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="min-h-screen flex">
        <div className="w-full lg:w-[40%] lg:min-w-[500px] bg-white flex items-center justify-center p-8">
          <div className="w-full max-w-[420px]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <Image
                  src="/icon.png"
                  alt="Brainae University"
                  width={128}
                  height={128}
                  className="w-16 h-16 rounded-full border border-gray-300"
                  priority
                />
              </div>
              <h1 className="text-2xl font-semibold text-gray-900">{heroHeading}</h1>
              <p className="mt-2 text-sm text-gray-600">{heroSubtitle}</p>
            </div>

            <UnifiedLoginForm highlightRole={highlightRole} />

            <div className="mt-8 space-y-3 text-sm text-gray-600">
              <p className="text-center">
                Need access? <a href="/application" className="text-primary font-medium hover:underline">Apply for admission</a>
              </p>
              <a
                href="/"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-primary hover:text-primary transition-colors rounded font-medium"
              >
                <span>←</span>
                <span>Back to Home</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="hidden lg:flex flex-1 bg-cover bg-center relative"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url('/images/hero-2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-white px-10 max-w-xl">
              <h2 className="text-4xl font-bold mb-5 text-center">Everything you need in one place</h2>
              <p className="text-lg text-white/90 mb-8 text-center">
                Stay organised with your learning, teaching, and campus tasks.
              </p>
              <div className="space-y-4">
                {HERO_BULLETS.map((bullet) => (
                  <div key={bullet.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{bullet.title}</h3>
                      <p className="text-sm text-white/80">{bullet.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


