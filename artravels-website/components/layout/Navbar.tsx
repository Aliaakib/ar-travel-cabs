"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#061A33] w-full hidden md:block border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-sm font-semibold text-white">
          
          <div className="flex items-center gap-6">
            <a href="tel:+916351794714" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
              <svg className="w-4 h-4 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 6351794714
            </a>
            <span className="text-gray-600">|</span>
            <a href="mailto:asifrazasaiyad@gmail.com" className="flex items-center gap-2 hover:text-[#FFC107] transition-colors">
              <svg className="w-4 h-4 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              asifrazasaiyad@gmail.com
            </a>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-2 text-gray-200">
              <svg className="w-4 h-4 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Rajkot, Gujarat
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/booking" className="bg-[#FFC107] text-[#061A33] px-5 py-1.5 rounded-full hover:bg-[#e0a800] transition-colors">
              Book Your Ride
            </Link>
            <a href="tel:+916351794714" className="border border-[#FFC107] text-[#FFC107] px-5 py-1.5 rounded-full hover:bg-[#FFC107] hover:text-[#061A33] transition-colors">
              Call +91 6351 794 714
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          
          <Link 
            href="/" 
            className="flex items-center"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/AR-LOGO.png"
              alt="AR TRAVEL CABS"
              width={160}
              height={50}
              className="h-12 sm:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-12 text-gray-800 font-bold text-base">
            <Link href="/" className={`${pathname === '/' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors`}>Home</Link>
            {/* <Link href="/services" className={`${pathname === '/services' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors flex items-center gap-1`}>Services</Link> */}
            <Link href="/tourist-places" className={`${pathname === '/tourist-places' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors`}>Tourist Places</Link>
            <Link href="/booking" className={`${pathname === '/booking' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors`}>Booking</Link>
            <Link href="/cars" className={`${pathname === '/cars' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors`}>Cars</Link>
            <Link href="/packages" className={`${pathname === '/packages' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors`}>Packages</Link>
              <Link href="/reviews" className={`${pathname === '/reviews' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors flex items-center gap-1`}>Reviews</Link>
            <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors`}>Contact Us</Link>
          </nav>


          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl">
            <div className="flex flex-col p-4 space-y-4 text-black font-bold">
              <Link href="/" className={`${pathname === '/' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              {/* <Link href="/services" className={`${pathname === '/services' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Services</Link> */}
              <Link href="/tourist-places" className={`${pathname === '/tourist-places' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Tourist Places</Link>
              <Link href="/booking" className={`${pathname === '/booking' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Booking</Link>
              <Link href="/cars" className={`${pathname === '/cars' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Cars</Link>
              <Link href="/packages" className={`${pathname === '/packages' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Packages</Link>
               <Link href="/reviews" className={`${pathname === '/reviews' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Reviews</Link>
              <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#FFC107]' : ''} hover:text-[#FFC107] transition-colors p-2`} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                 <Link href="/booking" className="bg-[#FFC107] text-black px-4 py-3 rounded-full font-bold text-center w-full" onClick={() => setIsMobileMenuOpen(false)}>
                   Book Your Ride
                 </Link>
                 <a href="tel:+916351794714" className="border-2 border-black text-black px-4 py-3 rounded-full font-bold text-center w-full" onClick={() => setIsMobileMenuOpen(false)}>
                   Call +91 6351 794 714
                 </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
