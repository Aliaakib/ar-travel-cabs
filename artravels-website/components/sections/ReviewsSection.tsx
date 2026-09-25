"use client";

import { useRef, useEffect, useState } from "react";

const reviews = [
  { name: "dinesh chauhan", initial: "D", bgColor: "bg-purple-600", text: "Very nice Service Good Cab Draiver Good Parfect timeing Picup & Drop" },
  { name: "Pintu Chauhan", initial: "P", bgColor: "bg-blue-600", text: "Goo driver Best car Best sarvice" },
  { name: "Rizwan Dhebar", initial: "R", bgColor: "bg-orange-500", text: "Very good service and fair pricing. The booking process was easy and support team was helpful. Will surely book again." },
  { name: "Rozbeen Saiyad", initial: "R", bgColor: "bg-green-600", text: "Nice experience overall. Car quality was good and the journey was comfortable. Recommended for local and outstation travel." },
  { name: "Fazlil Naqvi", initial: "F", bgColor: "bg-red-500", text: "Very good service and fair pricing. The booking process was easy and support team was helpful. Will surely book again." },
  { name: "Imran Gogda", initial: "I", bgColor: "bg-teal-500", text: "Used their service for a round trip and everything was perfectly managed. Great communication and reliable driver." },
  { name: "Sifan Hasan", initial: "S", bgColor: "bg-indigo-500", text: "One of the best travel services in Rajkot. Neat car, safe driving, and overall a very good experience for our Jaipur trip." },
  { name: "Hasnain Hasnain", initial: "H", bgColor: "bg-pink-500", text: "Very good service and fair pricing. The booking process was easy and support team was helpful. Will surely book again." }
];

export default function ReviewsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        
        // If we reached the end, smoothly scroll back to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Otherwise, scroll to the next card
          scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const scrollLeftBtn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRightBtn = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className="py-20 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#061A33] uppercase tracking-wide">What Our Customers Say</h2>
          <p className="text-gray-500 mt-3 font-medium">Read verified reviews from Google</p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          
          {/* Left Arrow */}
          <button 
            onClick={scrollLeftBtn}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black hover:scale-110 transition-all border border-gray-100 hidden md:flex"
            aria-label="Previous reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Scroll View */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-4 sm:px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] sm:w-auto min-w-[280px] sm:min-w-[320px] max-w-[320px] flex-shrink-0 snap-center bg-white rounded-2xl p-6 shadow-[0_8px_20px_rgba(0,0,0,0.04)] border border-gray-100 relative mx-auto sm:mx-0"
              >
                {/* Dotted background pattern simulating Trustindex */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 opacity-[0.15] pointer-events-none rounded-tr-2xl" 
                  style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                ></div>

                {/* Top Row: Avatar, Name, Google Icon */}
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.bgColor}`}>
                      {review.initial}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-[#061A33] text-[15px] leading-none mb-1 capitalize">{review.name}</span>
                    </div>
                  </div>
                  {/* Google Logo SVG */}
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>

                {/* Stars and Verified */}
                <div className="flex items-center gap-1.5 mb-3 relative z-10">
                  <div className="flex text-[#FFC107]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  {/* Blue Verified Check */}
                  <svg className="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.1 14.6l-4.5-4.5 1.4-1.4 3.1 3.1 7.2-7.2 1.4 1.4-8.6 8.6z" />
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4 relative z-10 min-h-[80px]">
                  {review.text}
                </p>
                
                <button className="text-gray-400 text-xs font-semibold hover:text-gray-600 transition-colors relative z-10">
                  Read more
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={scrollRightBtn}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-black hover:scale-110 transition-all border border-gray-100 hidden md:flex"
            aria-label="Next reviews"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>

      </div>
      
      {/* Hide scrollbar styles injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
