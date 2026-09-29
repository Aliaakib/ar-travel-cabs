import Image from "next/image";

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

export default function ReviewsPage() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#061A33] uppercase tracking-wide">
            Customer Reviews
          </h1>
          <p className="text-gray-500 mt-4 font-medium text-lg max-w-2xl mx-auto">
            See what our valued customers have to say about their travel experiences with AR Travel Cabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 relative group flex flex-col h-full animate-stagger"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Dotted background pattern */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-[0.1] pointer-events-none rounded-tr-2xl transition-opacity group-hover:opacity-[0.2]" 
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '8px 8px' }}
              ></div>

              {/* Top Row: Avatar, Name, Google Icon */}
              <div className="flex justify-between items-start mb-5 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner ${review.bgColor}`}>
                    {review.initial}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[#061A33] text-[16px] leading-tight capitalize">{review.name}</span>
                    <span className="text-xs text-gray-400 mt-1">Verified Customer</span>
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

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4 relative z-10">
                <div className="flex text-[#FFC107]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <svg className="w-4 h-4 text-blue-500 ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.1 14.6l-4.5-4.5 1.4-1.4 3.1 3.1 7.2-7.2 1.4 1.4-8.6 8.6z" />
                </svg>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-[15px] leading-relaxed flex-grow relative z-10 italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action for Google Review */}
        <div className="mt-16 bg-[#061A33] rounded-3xl p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Traveled with us recently?</h2>
             <p className="text-gray-300 mb-8">We would love to hear about your experience. Your feedback helps us improve and serve you better.</p>
             <a 
               href="https://www.google.com/search?sca_esv=a963c435ce01c701&rlz=1C1CHBF_enIN1144IN1144&sxsrf=ANbL-n6w7gIZA26JyZQeKhPYolETq-LInw:1776421951850&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYO7RNbtnuccVYKN-LrpcBezOT9svNRBRnFBnU2m43MvtWGtPTLNItoX0wTuEM5q16pd5qr2SYHRl3tn-xQSL5lTgJGj&q=AR+Travels+Reviews&sa=X&ved=2ahUKEwiG5KS71_STAxWDkyYFHT7-E7IQ0bkNegQIKRAH&biw=1396&bih=639&dpr=1.38" 
               target="_blank"
               rel="noopener noreferrer"
               className="group inline-flex items-center justify-center bg-[#FFC107] text-[#061A33] font-bold px-8 py-3.5 rounded-full hover:bg-[#FFB300] transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(255,193,7,0.4)]"
             >
               Leave a Review on Google
               <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
               </svg>
             </a>
           </div>
        </div>

      </div>
    </div>
  );
}
