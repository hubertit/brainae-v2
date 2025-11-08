import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Student Portal - Login",
  description: "Access your student portal to view courses, grades, assessments, and more at Brainae University.",
  openGraph: {
    title: "Student Portal - Brainae University",
    description: "Login to access your courses, grades, and academic resources",
  },
};

export default function StudentPortalPage() {
  redirect('/login?role=student');
}

