"use client";

const destinations = [
  {
    id: 1,
    title: "Rajkot To Ahmedabad Airport",
    subtitle: "Flat rate for airport transfers",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=600",
    prices: [
      { name: "Regular Sedan (Up To 4)", price: "₹2,500" },
      { name: "SUV (Up To 6)", price: "₹3,500" },
      { name: "Innova (Up To 7)", price: "₹4,000" }
    ],
    buttonText: "Book This Ride",
    isPopular: false
  },
  {
    id: 2,
    title: "Rajkot To Dwarka",
    subtitle: "Flat rate for transfers",
    image: "https://images.unsplash.com/photo-1621255554316-291db7ec6891?auto=format&fit=crop&q=80&w=600",
    prices: [
      { name: "Regular Sedan (Up To 4)", price: "₹4,000" },
      { name: "SUV (Up To 6)", price: "₹5,500" },
      { name: "Innova (Up To 7)", price: "₹6,500" }
    ],
    buttonText: "Book This Ride",
    isPopular: true
  },
  {
    id: 3,
    title: "Rajkot To Somnath",
    subtitle: "Flat rate for transfers",
    image: "https://images.unsplash.com/photo-1596884029272-35db31fc4cb5?auto=format&fit=crop&q=80&w=600",
    prices: [
      { name: "Regular Sedan (Up To 4)", price: "₹3,500" },
      { name: "SUV (Up To 6)", price: "₹4,800" },
      { name: "Innova (Up To 7)", price: "₹5,800" }
    ],
    buttonText: "Book This Ride",
    isPopular: false
  },
  {
    id: 4,
    title: "Rajkot To Diu",
    subtitle: "Flat rate for transfers",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=600",
    prices: [
      { name: "Regular Sedan (Up To 4)", price: "₹4,500" },
      { name: "SUV (Up To 6)", price: "₹6,000" },
      { name: "Innova (Up To 7)", price: "₹7,000" }
    ],
    buttonText: "Book This Ride",
    isPopular: false
  },
  {
    id: 5,
    title: "Rajkot To Surat",
    subtitle: "Flat rate for transfers",
    image: "https://images.unsplash.com/photo-1583274351601-5e8840dc4117?auto=format&fit=crop&q=80&w=600",
    prices: [
      { name: "Regular Sedan (Up To 4)", price: "₹6,000" },
      { name: "SUV (Up To 6)", price: "₹8,000" },
      { name: "Innova (Up To 7)", price: "₹9,500" }
    ],
    buttonText: "Book This Ride",
    isPopular: false
  },
  {
    id: 6,
    title: "Corporate Accounts Setup",
    subtitle: "Setup For Corporates",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
    features: [
      "For Companies: Accounts are opened in the company's name.",
      "Monthly Billing: One invoice instead of paying per ride.",
      "Special Benefits: Discounts, priority service, and detailed reports."
    ],
    buttonText: "Get Custom Quote",
    isPopular: false
  }
];

export default function DestinationsSection() {
  const handleBooking = (title: string) => {
    window.open(`https://wa.me/917990468872?text=I%20want%20to%20inquire%20about%20${encodeURIComponent(title)}`, "_blank");
  };

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061A33] mb-4">
            Popular Destinations & Rates
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Book our premium executive service for outstation travel with flat rates, extra comfort, and absolute reliability.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest.id} 
              className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 group"
            >
              
              {/* Photo Header (Added per user request) */}
              <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-8 relative">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                
                {/* Yellow Icon */}
                <div className="absolute -bottom-5 left-6 w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center shadow-lg border-4 border-white text-[#061A33]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6 pl-2">
                <h3 className="text-xl font-black text-[#061A33] leading-tight mb-1">{dest.title}</h3>
                <p className="text-sm text-gray-500 font-medium">{dest.subtitle}</p>
              </div>

              {/* Pricing List or Features List */}
              <div className="flex-grow space-y-4 mb-8 pl-2 pr-2">
                {dest.prices ? (
                  dest.prices.map((p, idx) => (
                    <div key={idx} className="flex justify-between items-end border-b border-gray-100 pb-2">
                      <span className="text-sm font-semibold text-gray-600">{p.name}</span>
                      <span className="text-sm font-black text-[#061A33]">{p.price}</span>
                    </div>
                  ))
                ) : (
                  dest.features?.map((f, idx) => (
                    <div key={idx} className="text-sm font-medium text-gray-600 leading-relaxed">
                      {f}
                    </div>
                  ))
                )}
              </div>

              {/* Button */}
              <div className="mt-auto pt-4">
                <button 
                  onClick={() => handleBooking(dest.title)}
                  className={`w-full py-4 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 
                    ${dest.isPopular 
                      ? 'bg-[#FFC107] hover:bg-[#e0a800] text-[#061A33] shadow-[0_5px_15px_rgba(255,193,7,0.3)]' 
                      : 'bg-white border-2 border-gray-200 hover:border-[#FFC107] text-[#061A33] hover:text-black hover:bg-gray-50'
                    }`}
                >
                  {dest.buttonText}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
