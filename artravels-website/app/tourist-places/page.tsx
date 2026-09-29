import Image from "next/image";
import Link from "next/link";

const places = [
  {
    id: 1,
    title: "Jubilee Garden",
    location: "Rajkot",
    description: "A well-maintained public garden in the heart of Rajkot, ideal for relaxation and family time.",
    price: 100,
    image: "/tourist-places/jubileegarden.png"
  },
  {
    id: 2,
    title: "Ishwariya Temple",
    location: "Rajkot",
    description: "Visit this ancient temple dedicated to Goddess Ishwariya, known for its beautiful architecture.",
    price: 150,
    image: "/tourist-places/ishwariyatemple.png"
  },
  {
    id: 3,
    title: "Nyari Dam",
    location: "Rajkot",
    description: "A serene dam and garden complex perfect for family outings, picnics, and enjoying nature.",
    price: 250,
    image: "/tourist-places/nyari-dam.png"
  },
  {
    id: 4,
    title: "Watson Museum",
    location: "Rajkot",
    description: "Discover Rajkot's rich history at the Watson Museum, featuring artifacts and sculptures.",
    price: 120,
    image: "/tourist-places/watson-museum.png"
  },
  {
    id: 5,
    title: "Aji Dam",
    location: "Rajkot",
    description: "A beautiful reservoir surrounded by lush gardens, offering a peaceful retreat and views.",
    price: 300,
    image: "/tourist-places/ajidam.png"
  },
  {
    id: 6,
    title: "Kaba Gandhi No Delo",
    location: "Rajkot",
    description: "The childhood home of Mahatma Gandhi, now a fascinating museum dedicated to his early life.",
    price: 500,
    image: "/tourist-places/kabha-gandhi-no-delo.png"
  },
  {
    id: 7,
    title: "Jaipur",
    location: "Jaipur",
    description: "Explore the Pink City's majestic forts, vibrant markets, and rich cultural heritage.",
    price: 500,
    image: "/tourist-places/jaipur.png"
  }
];

export default function TouristPlaces() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#061A33] uppercase">
            Tourist Places
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {places.map((place) => (
            <div key={place.id} className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-gray-100">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 bg-[#FFC107] text-[#061A33] px-5 py-1 text-sm font-bold rounded-tr-lg">
                  {place.location}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#061A33] mb-2">{place.title}</h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3">
                  {place.description}
                </p>

                <div className="bg-[#F8F9FA] rounded-lg py-3 px-2 mb-4 flex items-center justify-center">
                  <span className="text-gray-700 font-bold text-[13px] md:text-sm whitespace-nowrap">
                    Starting From <span className="text-[#FFC107]">₹{place.price.toFixed(2)}/</span> Person
                  </span>
                </div>

                <a 
                  href={`https://wa.me/916351794714?text=${encodeURIComponent(`Hello AR Travel Cabs,\nI am interested in booking a tour for *${place.title}* (${place.location}).\nPrice mentioned: ₹${place.price}/Person.\nPlease provide me with more details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#FFC107] hover:bg-[#e0a800] transition-colors text-[#061A33] font-bold text-center py-3 rounded-lg flex items-center justify-center gap-2"
                >
                  Book Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
