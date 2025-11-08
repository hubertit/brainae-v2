import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Admin Portal - Login",
  description: "Administrator login portal for Brainae University",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  redirect('/login?role=admin');
}

