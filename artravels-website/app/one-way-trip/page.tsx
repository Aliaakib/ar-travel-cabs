import Image from "next/image";
import Link from "next/link";

const trips = [
  {
    id: 1,
    title: "Rajkot to Ahmedabad",
    prices: { sedan: 2300, eartiga: 3000 },
    image: "/onewaytrip/ahmedabad-image.jpg"
  },
  {
    id: 2,
    title: "Rajkot to Mumbai",
    prices: { sedan: 9500, eartiga: 10500 },
    image: "/onewaytrip/mumbai-image.jpg"
  },
  {
    id: 3,
    title: "Rajkot to Gandhidham",
    prices: { sedan: 2999, eartiga: 3499 },
    image: "/onewaytrip/gandhidham-image.jpg"
  },
  {
    id: 4,
    title: "Rajkot to Bhuj",
    prices: { sedan: 3499, eartiga: 4499 },
    image: "/onewaytrip/bhuj-image.jpg"
  },
  {
    id: 5,
    title: "Rajkot to Mundra",
    prices: { sedan: 3999, eartiga: 4499 },
    image: "/onewaytrip/mundra-image.jpg"
  },
  {
    id: 6,
    title: "Rajkot to Dwarka",
    prices: { sedan: 3499, eartiga: 3999 },
    image: "/onewaytrip/dwarka-image.jpg"
  },
  {
    id: 7,
    title: "Rajkot to Somnath",
    prices: { sedan: 2999, eartiga: 3499 },
    image: "/onewaytrip/somnath-image.jpg"
  },
  {
    id: 8,
    title: "Rajkot to Udaipur",
    prices: { sedan: 5999, eartiga: 6999 },
    image: "/onewaytrip/udaipur-image.jpg"
  }
];

export default function OneWayTrip() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#061A33] uppercase tracking-wide">
            One Way Trip
          </h1>
          <p className="text-gray-500 mt-4 font-medium text-lg max-w-2xl mx-auto">
            Comfortable and affordable one-way trips to your favorite destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trips.map((trip, idx) => (
            <div 
              key={trip.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-gray-100 animate-stagger"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-gray-100 flex items-center justify-center p-2">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className={`transition-transform duration-500 group-hover:scale-110 ${trip.image.includes('car-img') ? 'object-contain p-4' : 'object-cover'}`}
                />
                <div className="absolute bottom-0 left-0 bg-[#FFC107] text-[#061A33] px-5 py-1 text-sm font-bold rounded-tr-lg z-10">
                  {trip.title}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#061A33] mb-4">{trip.title}</h3>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex justify-between items-center bg-[#F8F9FA] rounded-lg py-2 px-3 border border-gray-100">
                    <span className="font-semibold text-gray-700">Sedan</span>
                    <span className="font-bold text-[#061A33]">₹{trip.prices.sedan}</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#F8F9FA] rounded-lg py-2 px-3 border border-gray-100">
                    <span className="font-semibold text-gray-700">Eartiga</span>
                    <span className="font-bold text-[#061A33]">₹{trip.prices.eartiga}</span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/916351794714?text=${encodeURIComponent(`Hello AR Travel Cabs,\nI am interested in booking a one way trip for *${trip.title}*.\nPlease provide me with more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block w-full bg-[#FFC107] hover:bg-[#FFB300] hover:shadow-[0_8px_20px_rgba(255,193,7,0.4)] transition-all duration-300 text-[#061A33] font-bold text-center py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  Book Now
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
