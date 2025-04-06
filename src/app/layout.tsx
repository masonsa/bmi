import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bmi-calculator-tools.netlify.app'),
  title: "BMI Calculator - Free Online Tool",
  description: "Calculate your Body Mass Index (BMI) with our free online calculator. Get instant results and learn about BMI categories.",
  keywords: "BMI calculator, body mass index, weight calculator, health calculator, BMI categories, health assessment, weight management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BMI Calculator - Free Online Tool",
    description: "Calculate your Body Mass Index (BMI) with our free online calculator. Get instant results and learn about BMI categories.",
    url: 'https://bmi-calculator-tools.netlify.app',
    siteName: 'BMI Calculator',
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator - Free Online Tool",
    description: "Calculate your Body Mass Index (BMI) with our free online calculator. Get instant results and learn about BMI categories.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google AdSense - Using inline script for verification */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4731095609771891"
          crossOrigin="anonymous"
        />
        
        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
