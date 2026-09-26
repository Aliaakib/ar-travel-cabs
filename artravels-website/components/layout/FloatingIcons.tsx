"use client";

import { useState, useEffect, useRef } from "react";

export default function FloatingIcons() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showBookNow, setShowBookNow] = useState(false);
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    mobile: ""
  });
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsPopupOpen(false);
      }
    };

    const handleScroll = () => {
      let shouldShow = false;
      const servicesSection = document.getElementById("services");
      const contactSection = document.getElementById("contact");

      if (servicesSection && contactSection) {
        // Calculate absolute position on the page
        const servicesTop = window.scrollY + servicesSection.getBoundingClientRect().top;
        const contactTop = window.scrollY + contactSection.getBoundingClientRect().top;

        // Show when user scrolls near Services
        const pastServices = window.scrollY >= servicesTop - window.innerHeight * 0.5;
        // Hide when user reaches near Contact
        const beforeContact = window.scrollY < contactTop - window.innerHeight * 0.5;

        if (pastServices && beforeContact) {
          shouldShow = true;
        }
      } else {
        // Fallback if sections aren't found
        if (window.scrollY > 300) shouldShow = true;
      }

      if (shouldShow) {
        setShowBookNow(true);
      } else {
        setShowBookNow(false);
        setIsPopupOpen(false); // Close popup when hidden
      }
    };

    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPopupOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    const { pickup, drop, date, time, mobile } = formData;
    const text = `*New Booking Request*%0A*Pick Up:* ${pickup}%0A*Drop:* ${drop}%0A*Date:* ${date}%0A*Time:* ${time}%0A*Mobile:* ${mobile}`;
    window.open(`https://wa.me/917990468872?text=${text}`, "_blank");
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* LEFT SIDE: Book Now */}
      <div 
        ref={popupRef} 
        className={`fixed bottom-8 left-6 z-[99] flex flex-col items-start transition-all duration-500 transform ${
          showBookNow ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {isPopupOpen && (
          <div className="mb-4 w-[90vw] sm:w-[360px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-6 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 relative">
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Let the Journey Begin</h2>
            <form onSubmit={handleBook} className="space-y-5">
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-900">Pick up</label>
                <div className="flex items-center border-b border-gray-200 pb-2">
                  <svg className="w-5 h-5 text-gray-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <input type="text" name="pickup" value={formData.pickup} onChange={handleInputChange} required placeholder="Pick Up Location" className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-900">Drop</label>
                <div className="flex items-center border-b border-gray-200 pb-2">
                  <svg className="w-5 h-5 text-gray-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <input type="text" name="drop" value={formData.drop} onChange={handleInputChange} required placeholder="Drop Location" className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-900">Pickup Date</label>
                  <div className="flex items-center border-b border-gray-200 pb-2">
                    <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full bg-transparent focus:outline-none text-gray-600" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-900">Pickup Time</label>
                  <div className="flex items-center border-b border-gray-200 pb-2">
                    <input type="time" name="time" value={formData.time} onChange={handleInputChange} required className="w-full bg-transparent focus:outline-none text-gray-600" />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-900">Mobile Number</label>
                <div className="flex items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700 font-semibold px-2 py-1 bg-gray-100 mr-2 rounded">+91</span>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} required placeholder="Mobile No." pattern="[0-9]{10}" className="w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400" />
                </div>
              </div>

              <button type="submit" className="w-full py-3 mt-4 bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 font-bold rounded-lg shadow-md transition-all flex items-center justify-center">
                Book Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </form>
          </div>
        )}

        {/* Book Now Button Floating */}
        <button 
          onClick={() => setIsPopupOpen(!isPopupOpen)}
          className="px-6 py-4 bg-[#FFC107]/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-900 font-bold shadow-[0_4px_12px_rgba(255,193,7,0.3)] hover:bg-[#FFC107] hover:shadow-[0_6px_16px_rgba(255,193,7,0.4)] hover:scale-105 transition-all uppercase tracking-wide"
        >
          Book Now
        </button>
      </div>

      {/* RIGHT SIDE: Call & WhatsApp */}
      <div className="fixed bottom-8 right-6 z-[99] flex flex-col items-center gap-4">
        {/* Phone Icon */}
        <a 
          href="tel:+917990468872" 
          className="w-14 h-14 bg-[#FF5722]/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(255,87,34,0.1)] hover:bg-[#FF5722]/70 hover:shadow-[0_6px_16px_rgba(255,87,34,0.2)] hover:scale-110 transition-all"
          aria-label="Call Us"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
          </svg>
        </a>

        {/* WhatsApp Icon */}
        <a 
          href="https://wa.me/917990468872" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366]/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-[0_4px_12px_rgba(37,211,102,0.1)] hover:bg-[#25D366]/70 hover:shadow-[0_6px_16px_rgba(37,211,102,0.2)] hover:scale-110 transition-all"
          aria-label="WhatsApp Us"
        >
          <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.388 0 0 5.388 0 12.031c0 2.12.553 4.195 1.606 6.012L.15 23.367l5.485-1.438A11.97 11.97 0 0012.031 24c6.643 0 12.031-5.388 12.031-12.031C24.062 5.388 18.674 0 12.031 0zm0 21.986c-1.782 0-3.535-.479-5.076-1.39l-.364-.216-3.774.99.999-3.682-.236-.376c-.997-1.583-1.523-3.418-1.523-5.305 0-5.526 4.496-10.022 10.022-10.022 5.527 0 10.024 4.496 10.024 10.022 0 5.527-4.497 10.022-10.022 10.022zm5.503-7.534c-.302-.152-1.786-.883-2.064-.984-.278-.101-.482-.152-.685.152-.204.303-.781.984-.959 1.185-.177.202-.355.228-.657.076-1.517-.768-2.618-1.503-3.6-3.211-.205-.355.205-.331.65-.851.101-.116.152-.203.203-.356.05-.152.025-.279-.026-.381-.051-.101-.685-1.654-.938-2.264-.246-.595-.496-.514-.685-.523-.177-.008-.381-.008-.584-.008-.204 0-.533.076-.812.381-.278.304-1.065 1.04-1.065 2.537 0 1.496 1.09 2.942 1.242 3.145.152.203 2.146 3.275 5.195 4.593 1.956.845 2.704.912 3.704.767 1.103-.16 2.457-1.002 2.802-1.97.345-.968.345-1.797.243-1.97-.101-.173-.38-.274-.684-.426z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
