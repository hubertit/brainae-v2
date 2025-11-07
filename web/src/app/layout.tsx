import type { Metadata } from "next";
import "./globals.css";
import "./config/fontawesome";

export const metadata: Metadata = {
  title: {
    default: "Brainae University - Online Education Platform",
    template: "%s | Brainae University",
  },
  description: "Brainae University is a fully-featured online educational platform that helps students and professionals around the world to acquire new skills. We deliver high-quality distance learning for working professionals and students.",
  keywords: ["online university", "distance learning", "online education", "degree programs", "professional development", "online courses"],
  authors: [{ name: "Brainae University" }],
  creator: "Brainae University",
  publisher: "Brainae University",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brainae.org",
    siteName: "Brainae University",
    title: "Brainae University - Online Education Platform",
    description: "Online education platform that accelerates your career and prepares you to face the future with in-demand skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brainae University - Online Education Platform",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
