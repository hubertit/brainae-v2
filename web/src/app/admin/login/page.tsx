import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdminLogin from '../../components/AdminLogin';

export const metadata: Metadata = {
  title: "Admin Portal - Login",
  description: "Administrator login portal for BRAINAE University",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <AdminLogin />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

