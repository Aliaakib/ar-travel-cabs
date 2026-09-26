"use client";

export default function BookingSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    const fullName = data.get('fullName') as string;
    const phone = data.get('phone') as string;
    const email = data.get('email') as string;
    const pickup = data.get('pickup') as string;
    const destination = data.get('destination') as string;
    const vehicleClass = data.get('vehicleClass') as string;
    const date = data.get('date') as string;
    const time = data.get('time') as string;
    const vehicleType = data.get('vehicleType') as string;

    const message = `*New Ride Booking Request*
    
*Passenger Details:*
- Name: ${fullName || 'Not provided'}
- Phone: ${phone || 'Not provided'}
- Email: ${email || 'Not provided'}

*Trip Details:*
- Pickup: ${pickup || 'Not provided'}
- Destination: ${destination || 'Not provided'}
- Date: ${date || 'Not provided'}
- Time: ${time || 'Not provided'}

*Vehicle Preferences:*
- Class: ${vehicleClass || 'Not provided'}
- Type: ${vehicleType || 'Not provided'}

Please confirm the availability and pricing. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/916351794714?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="relative w-full bg-[#F8F9FA] py-24 lg:py-32 overflow-hidden">
      
      {/* Premium Navy Blue Background Top Half */}
      <div className="absolute top-0 left-0 w-full h-[65%] bg-[#061A33] z-0">
        {/* Subtle architectural dot pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        {/* Soft gradient glow in the center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a274c]/50 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[#FFC107] text-xs font-black tracking-widest uppercase mb-4 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#FFC107]"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Reserve Your Car
          </h2>
        </div>

        {/* Centered Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.15)] w-full max-w-5xl mx-auto relative border border-gray-100">
          {/* Form Content Begins */}

          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
              {/* Row 1 */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Enter Your Full Name</label>
                <input required name="fullName" type="text" placeholder="Enter Your Full Name" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Enter Your Phone Number</label>
                <input required name="phone" type="tel" placeholder="Enter Your Phone Number" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Enter Your Email</label>
                <input name="email" type="email" placeholder="Enter Your Email" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all" />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Pickup Address</label>
                <input required name="pickup" type="text" placeholder="Enter pickup address" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Destination Address</label>
                <input required name="destination" type="text" placeholder="Enter destination" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-black focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Vehicle Class</label>
                <select name="vehicleClass" defaultValue="" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Select vehicle class</option>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </select>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Pickup Date</label>
                <input required name="date" type="date" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Pickup Time</label>
                <input required name="time" type="time" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all" />
              </div>
              
              <div className="flex flex-col">
                <label className="text-sm font-bold text-gray-800 mb-2">Vehicle Type</label>
                <select name="vehicleType" defaultValue="" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition-all appearance-none cursor-pointer">
                  <option value="" disabled>Select vehicle type</option>
                  <option value="Sedan (Swift Dzire)">Sedan (Swift Dzire)</option>
                  <option value="SUV (Ertiga / Innova)">SUV (Ertiga / Innova)</option>
                  <option value="Hatchback">Hatchback</option>
                </select>
              </div>
            </div>

            {/* Submit Button Centered */}
            <div className="mt-12 flex justify-center">
              <button type="submit" className="px-10 py-4 bg-[#FFC107] hover:bg-[#e0a800] text-black font-bold rounded-full transition-all shadow-[0_5px_15px_rgba(255,193,7,0.3)] hover:shadow-[0_8px_20px_rgba(255,193,7,0.4)] transform hover:-translate-y-0.5">
                Book Your Ride
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
