import Image from "next/image";

const packagesData = [
  {
    id: 1,
    title: "Ahmedabad to Dwarka Spiritual Journey",
    duration: "1400 KM",
    description: "Spiritual journey covering Dwarkadhish, Somnath, Nageshwar Jyotirling, Gir, Diu, and Rann of Kutch. All-inclusive (Toll, Parking & Driver Food).",
    price: "₹19,999",
    image: "/package/package1.jpeg",
  },
  {
    id: 2,
    title: "Explore Gujarat Tour Package",
    duration: "3 Days",
    description: "3-day round trip from Ahmedabad covering Statue of Unity, Narmada, and Akshardham Gandhinagar. 900 km range. Toll, parking & driver included.",
    price: "₹13,500",
    image: "/package/package2.jpeg",
  },
  {
    id: 3,
    title: "Ahmedabad to Nathdwara Round Trip",
    duration: "2 Days",
    description: "2-day family-friendly round trip to the divine Shrinathji Temple in Nathdwara. Toll, border tax, and driver food included.",
    price: "₹12,999",
    image: "/package/package3.jpeg",
  },
  {
    id: 4,
    title: "10 Days Ultimate Gujarat Tour",
    duration: "10 Days",
    description: "Extensive 3000 KM journey covering Ahmedabad, Dwarka, Somnath, Diu, Gir, Junagadh, Palitana, Vadodara, Statue of Unity, and Rann of Kutch. All-inclusive.",
    price: "₹49,999",
    image: "/package/package4.jpeg",
  },
  {
    id: 5,
    title: "Gujarat Darshan Special Tour",
    duration: "8 Days",
    description: "8-day immersive journey spanning 2100 KM. Covering Dwarka, Somnath, Sasan Gir, and Diu. All-inclusive (Toll, Parking & Driver Food).",
    price: "₹27,999",
    image: "/package/package5.jpeg",
  },
];

export default function PackagesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#061A33] mb-6">
            Explore Our <span className="text-[#FFC107]">Packages</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover carefully curated travel packages designed for comfort, safety, and unforgettable memories. Book your next adventure with AR Travel Cabs today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packagesData.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] transition-all duration-300 group flex flex-col h-full border border-gray-100">
              
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] bg-gray-50 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-4"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-[#061A33] mb-3 line-clamp-2 leading-snug">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {pkg.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 gap-3">
                  <div className="flex flex-col flex-1">
                    <span className="text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5 whitespace-nowrap">Starting at</span>
                    <span className="text-[#061A33] font-black text-base sm:text-lg">{pkg.price}</span>
                  </div>
                  <a 
                    href={`https://wa.me/916351794714?text=Hello,%20I'm%20interested%20in%20booking%20the%20*${encodeURIComponent(pkg.title)}*%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 whitespace-nowrap bg-[#FFC107] hover:bg-[#FFB300] text-[#061A33] px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    Book Now
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
