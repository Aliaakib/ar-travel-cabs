import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingIcons from "../components/layout/FloatingIcons";
import RouteScroller from "../components/layout/RouteScroller";
import PageTransition from "../components/layout/PageTransition";
import ScrollProgress from "../components/layout/ScrollProgress";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AR Travel Cabs | Premium Cab & Travel Services",
  description: "AR Travel Cabs provides reliable local, airport transfer, outstation and travel cab services with comfortable vehicles and professional drivers.",
  icons: {
    icon: "/AR-LOGO.png",
    shortcut: "/AR-LOGO.png",
    apple: "/AR-LOGO.png",
  },
  verification: {
    google: "TD3xqgO6nYbNz9uGpeBITvMqUlnT47Upqzi3H46EfLU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/AR-LOGO.png" type="image/png" sizes="any" />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WLTX6490DW"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WLTX6490DW');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M7NJNL37');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans relative">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7NJNL37"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <FloatingIcons />
        <RouteScroller />
      </body>
    </html>
  );
}
