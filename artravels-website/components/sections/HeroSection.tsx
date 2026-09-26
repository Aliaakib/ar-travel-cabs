"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full bg-white lg:min-h-[800px] flex flex-col lg:flex-row lg:items-center overflow-hidden pt-4 lg:pt-0">
      
      {/* 
        MOBILE-ONLY TITLE:
        Appears above the image strictly on mobile/tablet.
      */}
      <div className="w-full px-4 sm:px-6 pt-6 pb-2 block lg:hidden relative z-20 bg-white">
        <div className="flex items-center gap-2 text-black font-bold text-xs tracking-[0.2em] mb-2 uppercase">
          {/* <svg className="w-4 h-4 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
          </svg> */}
          WELCOME TO
        </div>
        <h1 className="text-5xl sm:text-6xl font-black leading-[0.95] tracking-tighter">
          <span className="text-[#061A33]">AR</span><span className="text-[#FFC107]">TRAVELS</span>
        </h1>
      </div>

      {/* 
        IMAGE CONTAINER: 
        Mobile: Sits sandwiched between mobile title and buttons.
        Desktop: Positioned absolutely on the right side.
      */}
      <div className="relative w-full h-[35vh] min-h-[250px] sm:min-h-[350px] lg:absolute lg:top-0 lg:right-0 lg:w-[65%] lg:h-full lg:z-0">
         <Image 
           src="/images/car-img.png" 
           alt="AR Travels Cab" 
           fill 
           className="object-cover object-[center_60%] lg:object-[80%_center]"
           priority 
         />
         {/* Desktop Gradient: Smooth blend into white text area */}
         <div className="hidden lg:block absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white via-white/90 to-transparent"></div>
         {/* Mobile Gradient: Soft fade at the bottom to merge with the white content block below */}
         <div className="block lg:hidden absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* 
        CONTENT CONTAINER:
        Mobile: Flows naturally below the image (subtitle, buttons, features).
        Desktop: Floating on the left over the white background.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:justify-center lg:h-full py-8 lg:py-0 bg-white lg:bg-transparent -mt-6 lg:mt-0 rounded-t-3xl lg:rounded-none">
        
        <div className="w-full lg:w-[60%] xl:w-[55%] flex flex-col items-start relative z-20">
          
          {/* DESKTOP-ONLY TITLE (Hidden on mobile to avoid duplication) */}
          <div className="hidden lg:flex flex-col mb-4">
            <div className="flex items-center gap-2 text-black font-bold text-sm tracking-[0.2em] mb-4 uppercase">
              {/* <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
              </svg> */}
              WELCOME TO
            </div>
            <h1 className="text-[6.5rem] font-black leading-[0.95] tracking-tighter">
              <span className="text-[#061A33]">AR</span><span className="text-[#FFC107]">TRAVELS</span>
            </h1>
          </div>
          
          <p className="text-[#061A33] text-lg sm:text-xl lg:text-2xl font-bold mb-8 max-w-xl leading-snug uppercase">
            BEST CAB SERVICE IN AHMEDABAD & RAJKOT – 24/7 TAXI SERVICE NEAR YOU
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 w-full">
             <div className="flex bg-[#FFC107] rounded-full py-1.5 px-1.5 gap-1.5 self-start shadow-sm">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
             </div>
             <div className="flex items-center gap-2 text-gray-700 italic font-medium text-sm">
                Over 1K+ Rides & 5.0-Star Ratings
                <svg className="w-4 h-4 text-[#FFC107] transform -rotate-45 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes slideSheen {
                0% { transform: translateX(-150%) skewX(-20deg); }
                100% { transform: translateX(250%) skewX(-20deg); }
              }
              .animate-slide-sheen {
                animation: slideSheen 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
              }
            `}} />
            
            <a 
              href="tel:+916351794714"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-gray-200 hover:border-[#FFC107] text-black font-bold rounded-full transition-all text-center shadow-sm text-base"
            >
              <svg className="w-5 h-5 text-[#FFC107]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
              Call +91 6351 794 714
            </a>
            
            <Link 
              href="/booking"
              className="group relative overflow-hidden flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FFC107] hover:bg-[#e0a800] text-black font-bold rounded-full transition-all text-center shadow-md text-base"
            >
              {/* Sliding Sheen */}
              <div className="absolute top-0 left-0 w-1/2 h-full bg-white/40 animate-slide-sheen pointer-events-none"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Book Your Ride
                <svg className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          </div>

          {/* Bottom Features Row */}
          <div className="flex justify-between sm:justify-start items-start sm:items-center gap-2 sm:gap-6 lg:gap-8 text-[10px] sm:text-sm font-bold text-gray-800 tracking-wide uppercase w-full">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left flex-1 sm:flex-none">
              <svg className="w-7 h-7 sm:w-6 sm:h-6 lg:w-8 lg:h-8 shrink-0 text-[#061A33]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="leading-tight">24/7<br className="hidden sm:block"/> Service</div>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left flex-1 sm:flex-none">
              <svg className="w-7 h-7 sm:w-6 sm:h-6 lg:w-8 lg:h-8 shrink-0 text-[#061A33]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              <div className="leading-tight">Professional<br className="hidden sm:block"/> Drivers</div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left flex-1 sm:flex-none">
              <svg className="w-7 h-7 sm:w-6 sm:h-6 lg:w-8 lg:h-8 shrink-0 text-[#061A33]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <div className="leading-tight">Comfortable<br className="hidden sm:block"/> Rides</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
