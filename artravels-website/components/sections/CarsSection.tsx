"use client";

import { useState } from "react";

const carsData = [
  {
    id: 1,
    make: "Suzuki",
    name: "Swift DZire",
    type: "sedan",
    subtitle: "Comfortable Sedan",
    image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:d25a3965-3e92-433b-b274-079cab94dadb/as/Dzire_desk-Varient_2000x1171.png?width=750&id=1&preferwebp=true",
    details: [
      { label: "Seating Capacity", value: "4 + 1 Seats" },
      { label: "Air Conditioning", value: "Yes" },
      { label: "Rate Per Km", value: "₹11.00" }
    ],
    isPopular: true
  },
  {
    id: 2,
    make: "Suzuki",
    name: "Ertiga",
    type: "suv",
    subtitle: "Spacious MUV",
    image: "https://content.carlelo.com/media/models/Ertiga/base/ertiga-1.webp",
    details: [
      { label: "Seating Capacity", value: "6 + 1 Seats" },
      { label: "Luggage Carrier", value: "Yes" },
      { label: "Rate Per Km", value: "₹13.00" }
    ],
    isPopular: false
  },
  {
    id: 3,
    make: "TATA",
    name: "TATA PUNCH",
    type: "suv",
    subtitle: "Compact SUV",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/39015/punch-exterior-right-front-three-quarter-2.jpeg",
    details: [
      { label: "Seating Capacity", value: "4 + 1 Seats" },
      { label: "Air Conditioning", value: "Yes" },
      { label: "Rate Per Km", value: "₹11.00" }
    ],
    isPopular: false
  },
  {
    id: 4,
    make: "Toyota",
    name: "Innova Crysta",
    type: "suv",
    subtitle: "Premium SUV",
    image: "https://mycarjunction.com/_next/image?url=https%3A%2F%2Fassets.tractorjunction.com%2Fcar-junction%2Fimages%2Ftoyota-innova-crysta-front-left-side-47-1.webp&w=3840&q=75",
    details: [
      { label: "Seating Capacity", value: "7 + 1 Seats" },
      { label: "Comfort Level", value: "Premium" },
      { label: "Rate Per Km", value: "₹18.00" }
    ],
    isPopular: true
  }
];

export default function CarsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCars = activeFilter === "all" 
    ? carsData 
    : carsData.filter(car => car.type === activeFilter);

  const handleBooking = (carName: string) => {
    window.open(`https://wa.me/916351794714?text=I%20want%20to%20book%20the%20${encodeURIComponent(carName)}`, "_blank");
  };

  return (
    <section id="cars" className="py-20 lg:py-28 bg-[#F6F8FB] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg className="w-6 h-6 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <h4 className="text-[#FFC107] font-bold text-sm tracking-[0.2em] uppercase">Check Out Our New Cars</h4>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#061A33] uppercase">
            Our Car Pricing
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-16 flex-wrap">
          <button 
            onClick={() => setActiveFilter("all")}
            className={`px-6 sm:px-8 py-2.5 rounded-md font-bold text-sm sm:text-base transition-all ${
              activeFilter === "all" 
                ? "bg-[#FFC107] text-[#061A33] shadow-md" 
                : "bg-[#061A33] text-white hover:bg-[#0a274c]"
            }`}
          >
            All Cars
          </button>
          <button 
            onClick={() => setActiveFilter("sedan")}
            className={`px-6 sm:px-8 py-2.5 rounded-md font-bold text-sm sm:text-base transition-all ${
              activeFilter === "sedan" 
                ? "bg-[#FFC107] text-[#061A33] shadow-md" 
                : "bg-[#061A33] text-white hover:bg-[#0a274c]"
            }`}
          >
            Sedan
          </button>
          <button 
            onClick={() => setActiveFilter("suv")}
            className={`px-6 sm:px-8 py-2.5 rounded-md font-bold text-sm sm:text-base transition-all ${
              activeFilter === "suv" 
                ? "bg-[#FFC107] text-[#061A33] shadow-md" 
                : "bg-[#061A33] text-white hover:bg-[#0a274c]"
            }`}
          >
            SUV / MUV
          </button>
        </div>

        {/* Cars Grid (Destinations Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCars.map((car) => (
            <div 
              key={car.id} 
              className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-lg transition-all duration-300 group"
            >
              
              {/* Photo Header (Edge-to-Edge) */}
              <div className="w-full h-48 sm:h-56 relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Title & Subtitle */}
                <div className="mb-6">
                  <h3 className="text-xl font-black text-[#061A33] leading-tight mb-1">{car.name}</h3>
                  <p className="text-sm text-gray-500 font-medium">{car.subtitle}</p>
                </div>

                {/* Car Details List */}
                <div className="flex-grow space-y-4 mb-8">
                  {car.details.map((detail, idx) => (
                    <div key={idx} className="flex justify-between items-end border-b border-gray-100 pb-2">
                      <span className="text-sm font-semibold text-gray-600">{detail.label}</span>
                      <span className="text-sm font-black text-[#061A33]">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => handleBooking(car.name)}
                    className={`w-full py-3.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 
                      ${car.isPopular 
                        ? 'bg-[#FFC107] hover:bg-[#e0a800] text-[#061A33] shadow-[0_5px_15px_rgba(255,193,7,0.3)]' 
                        : 'bg-white border-2 border-gray-200 hover:border-[#FFC107] text-[#061A33] hover:text-black hover:bg-gray-50'
                      }`}
                  >
                    Book This Car
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredCars.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-500">No cars found for this category.</h3>
          </div>
        )}

      </div>
    </section>
  );
}
