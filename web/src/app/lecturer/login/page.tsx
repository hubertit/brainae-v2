import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Lecturer Portal - Login",
  description: "Lecturer login portal for Brainae University",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LecturerLoginPage() {
  redirect('/login?role=lecturer');
}

