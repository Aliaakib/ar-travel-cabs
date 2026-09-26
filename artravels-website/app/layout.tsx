import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FloatingIcons from "../components/layout/FloatingIcons";
import RouteScroller from "../components/layout/RouteScroller";

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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <FloatingIcons />
        <RouteScroller />
      </body>
    </html>
  );
}
