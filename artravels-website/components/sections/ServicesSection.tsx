"use client";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F8F9FA] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-[#061A33] text-xs font-black tracking-widest uppercase mb-6 shadow-sm border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-[#FFC107]"></span>
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#061A33] leading-[1.1] tracking-tight">
              A Ride Built For <br className="hidden lg:block" /> Every Passenger
            </h2>
          </div>
          <div className="max-w-md pb-3">
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              From airport runs to daily city rides and premium outstation service, AR Travel Cabs delivers comfort and punctuality every time.
            </p>
          </div>
        </div>

        {/* Services Grid (Premium Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1: Airport Transfers */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col border border-gray-100/50">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="/service/airpot.png" 
                alt="Airport Transfers" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[#FFC107] font-bold text-xs tracking-[0.2em] uppercase">01 / Transfer</span>
              </div>
              <h3 className="text-2xl font-black text-[#061A33] mb-4 group-hover:text-[#FFC107] transition-colors duration-300">Airport Transfers</h3>
              <p className="text-gray-500 font-medium mb-10 leading-relaxed text-[15px] flex-grow">
                Book a reliable ride to or from the airport — no surge pricing, no surprises. We track your flight and time your pickup perfectly so you're never left waiting.
              </p>
              <a href="#booking" className="inline-flex items-center gap-3 text-[#061A33] font-black text-sm uppercase tracking-wider hover:text-[#FFC107] transition-colors w-max group/btn">
                Book This Ride
                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service 2: City Rides */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col border border-gray-100/50">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="/service/cityride.png" 
                alt="City Rides" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[#FFC107] font-bold text-xs tracking-[0.2em] uppercase">02 / Local</span>
              </div>
              <h3 className="text-2xl font-black text-[#061A33] mb-4 group-hover:text-[#FFC107] transition-colors duration-300">City Rides</h3>
              <p className="text-gray-500 font-medium mb-10 leading-relaxed text-[15px] flex-grow">
                Need to get across the city fast? Our city cabs handle everything from grocery runs and errands to nights out and appointments — available around the clock.
              </p>
              <a href="#booking" className="inline-flex items-center gap-3 text-[#061A33] font-black text-sm uppercase tracking-wider hover:text-[#FFC107] transition-colors w-max group/btn">
                Book This Ride
                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Service 3: Premium Transport */}
          <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col border border-gray-100/50">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src="/service/premiumtransport.png" 
                alt="Premium Transport" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="p-8 sm:p-10 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="text-[#FFC107] font-bold text-xs tracking-[0.2em] uppercase">03 / Luxury</span>
              </div>
              <h3 className="text-2xl font-black text-[#061A33] mb-4 group-hover:text-[#FFC107] transition-colors duration-300">Premium Transport</h3>
              <p className="text-gray-500 font-medium mb-10 leading-relaxed text-[15px] flex-grow">
                For corporate travel, special occasions, or when you just want a smoother ride, our premium vehicles and experienced chauffeurs deliver unparalleled comfort.
              </p>
              <a href="#booking" className="inline-flex items-center gap-3 text-[#061A33] font-black text-sm uppercase tracking-wider hover:text-[#FFC107] transition-colors w-max group/btn">
                Book This Ride
                <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
