"use client";

export default function CallToAction() {
  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFC107] rounded-3xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_20px_50px_rgba(255,193,7,0.2)]">
           
           {/* Yellow Content Section */}
           <div className="w-full md:w-3/5 p-10 md:p-16 lg:p-20 relative z-10 flex flex-col justify-center">
             <h4 className="text-[#061A33] font-bold text-sm tracking-[0.15em] uppercase mb-4">Book Your Ride Today</h4>
             <h2 className="text-4xl md:text-5xl font-black text-[#061A33] leading-tight mb-6">
               Ready For A Quicker,<br/>Safer Taxi Experience?
             </h2>
             <p className="text-[#061A33]/80 font-medium max-w-md mb-10 text-lg">
               Book AR Travel Cabs for dependable airport transfers, city rides, and premium transport across Gujarat — available 24/7.
             </p>
             <div className="flex flex-wrap items-center gap-4">
               <a href="tel:+916351794714" className="bg-[#061A33] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg flex items-center gap-2">
                 Call +91 6351794714
               </a>
               <a href="#booking" className="border-2 border-[#061A33] text-[#061A33] px-8 py-3.5 rounded-full font-bold hover:bg-[#061A33] hover:text-white transition-all">
                 Book Your Ride
               </a>
             </div>
           </div>
           
           {/* Image Section with Slanted Cut */}
           <div className="w-full md:w-2/5 h-64 md:h-auto relative hidden md:block">
              {/* Slanted overlay to create the angle effect */}
              <div 
                className="absolute inset-0 z-10" 
                style={{ clipPath: 'polygon(0 0, 15% 0, 0 100%)', backgroundColor: '#FFC107' }}
              ></div>
              <img 
                src="/images/car-img.png" 
                alt="Premium Cab Service" 
                className="w-full h-full object-cover absolute inset-0 z-0 bg-[#F8F9FA]" 
              />
           </div>
           
           {/* Mobile Image Fallback (No slant) */}
           <div className="w-full h-64 md:hidden relative">
              <img 
                src="/images/car-img.png" 
                alt="Premium Cab Service" 
                className="w-full h-full object-cover bg-[#F8F9FA]" 
              />
           </div>

        </div>
      </div>
    </section>
  );
}
