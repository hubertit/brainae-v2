import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Apply to Brainae University. Start your application journey with our simple 4-step process. Submit your application online and begin your path to academic excellence.",
  openGraph: {
    title: "Apply to Brainae University",
    description: "Start your application journey with our simple online application process",
  },
};

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

