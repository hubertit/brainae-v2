import type { Metadata } from "next";
import "./globals.css";
import "./config/fontawesome";

export const metadata: Metadata = {
  title: {
    default: "BRAINAE University - Online Education Platform",
    template: "%s | BRAINAE University",
  },
  description: "BRAINAE University is a fully-featured online educational platform that helps students and professionals around the world to acquire new skills. We deliver high-quality distance learning for working professionals and students.",
  keywords: ["online university", "distance learning", "online education", "degree programs", "professional development", "online courses"],
  authors: [{ name: "BRAINAE University" }],
  creator: "BRAINAE University",
  publisher: "BRAINAE University",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brainae.org",
    siteName: "BRAINAE University",
    title: "BRAINAE University - Online Education Platform",
    description: "Online education platform that accelerates your career and prepares you to face the future with in-demand skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRAINAE University - Online Education Platform",
    description: "Online education platform that accelerates your career and prepares you to face the future with in-demand skills",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
