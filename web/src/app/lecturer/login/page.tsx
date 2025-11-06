import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LecturerLogin from '../../components/LecturerLogin';

export const metadata: Metadata = {
  title: "Lecturer Portal - Login",
  description: "Lecturer login portal for BRAINAE University",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LecturerLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <LecturerLogin />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

