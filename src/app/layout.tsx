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
  title: "BMI Calculator - Free Online Tool",
  description: "Calculate your Body Mass Index (BMI) with our free online calculator. Get instant results and learn about BMI categories.",
  keywords: "BMI calculator, body mass index, weight calculator, health calculator, BMI categories, health assessment, weight management",
  robots: "index, follow",
  openGraph: {
    title: "BMI Calculator - Free Online Tool",
    description: "Calculate your Body Mass Index (BMI) with our free online calculator. Get instant results and learn about BMI categories.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-MC6ZJRJ6W9`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MC6ZJRJ6W9');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
