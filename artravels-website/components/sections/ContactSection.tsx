"use client";
import React from 'react';

export default function ContactSection() {

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') as string;
    const phone = data.get('phone') as string;
    const email = data.get('email') as string;
    const msg = data.get('message') as string;

    const text = `*New Contact Message*
    
*Name:* ${name || 'Not provided'}
*Phone:* ${phone || 'Not provided'}
*Email:* ${email || 'Not provided'}

*Message:*
${msg || 'No message provided.'}

Thank you!`;

    window.open(`https://wa.me/916351794714?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
       
       {/* Light Theme Background Elements */}
       <div className="absolute inset-0 z-0 bg-[#F8F9FA] overflow-hidden">
         {/* Massive Outline Text Watermark */}
         <div className="absolute top-[5%] left-[-5%] text-[12rem] lg:text-[18rem] font-black whitespace-nowrap select-none pointer-events-none transform -rotate-3 leading-none opacity-[0.03]" style={{ WebkitTextStroke: '2px rgba(0, 0, 0, 1)', color: 'transparent' }}>
            CONTACT US
         </div>
         <div className="absolute bottom-[5%] right-[-5%] text-[10rem] lg:text-[15rem] font-black whitespace-nowrap select-none pointer-events-none transform rotate-2 leading-none opacity-[0.02]" style={{ WebkitTextStroke: '2px rgba(0, 0, 0, 1)', color: 'transparent' }}>
            AR TRAVELS
         </div>

         {/* Abstract Glassmorphism Glowing Orbs (Light Mode) */}
         <div className="absolute top-[-10%] left-[20%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-[#FFC107] rounded-full filter blur-[120px] lg:blur-[180px] opacity-[0.08] animate-pulse" style={{ animationDuration: '8s' }}></div>
         <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-[#061A33] rounded-full filter blur-[150px] opacity-[0.04]"></div>
         
         {/* Subtle architectural dot pattern overlay */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000000 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}></div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white backdrop-blur-md px-4 py-1.5 rounded-full text-[#061A33] text-xs font-black tracking-widest uppercase mb-4 border border-gray-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FFC107]"></span>
              Reach Out To Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#061A33] tracking-tight">
              Contact & Location
            </h2>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             {/* Phone */}
             <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center text-[#FFC107] mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <h4 className="text-xl font-black text-[#061A33] mb-2">Call Us</h4>
                <a href="tel:+916351794714" className="text-gray-600 font-medium hover:text-[#FFC107] transition-colors">+91 6351 794 714</a>
             </div>
             
             {/* Email */}
             <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center text-[#FFC107] mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h4 className="text-xl font-black text-[#061A33] mb-2">Mail Us</h4>
                <a href="mailto:asifrazasaiyad@gmail.com" className="text-gray-600 font-medium hover:text-[#FFC107] transition-colors break-all">asifrazasaiyad@gmail.com</a>
             </div>

             {/* Location */}
             <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#FFC107]/10 rounded-full flex items-center justify-center text-[#FFC107] mb-6">
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h4 className="text-xl font-black text-[#061A33] mb-2">Our Office</h4>
                <p className="text-gray-600 font-medium leading-relaxed">B/10, Street Number 3, Mochinagar 1, Karan Park, Rajkot, Gujarat 360006</p>
             </div>
          </div>

          {/* Form and Map Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100">
             
             {/* Map */}
             <div className="h-[400px] lg:h-auto min-h-[400px] lg:min-h-[600px] relative w-full bg-gray-100 order-2 lg:order-1">
               <iframe 
                 src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=AR%20Travels,%20B/10,%20Street%20Number%203,%20mochinagar%201,%20Karan%20Park,%20Rajkot,%20Gujarat%20360006,%20India&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                 className="absolute inset-0 w-full h-full" 
                 frameBorder="0" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 aria-hidden="false" 
                 tabIndex={0}
               ></iframe>
             </div>

             {/* Form */}
             <div className="p-10 lg:p-16 flex flex-col justify-center bg-[#061A33] order-1 lg:order-2">
                <div className="mb-10">
                   <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">Get A Free Quote</h3>
                   <p className="text-white/70 text-lg">Send us a message and we'll get back to you immediately with the best rates.</p>
                </div>
                
                <form onSubmit={handleContactSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="flex flex-col">
                        <label className="text-white/80 text-sm font-bold mb-2">Name</label>
                        <input required name="name" type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 transition-all" />
                     </div>
                     <div className="flex flex-col">
                        <label className="text-white/80 text-sm font-bold mb-2">Phone</label>
                        <input required name="phone" type="tel" placeholder="Your Phone" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 transition-all" />
                     </div>
                   </div>
                   
                   <div className="flex flex-col">
                      <label className="text-white/80 text-sm font-bold mb-2">Email (Optional)</label>
                      <input name="email" type="email" placeholder="Your Email" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 transition-all" />
                   </div>

                   <div className="flex flex-col">
                      <label className="text-white/80 text-sm font-bold mb-2">Message</label>
                      <textarea required name="message" rows={4} placeholder="How can we help you?" className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFC107] focus:bg-white/10 transition-all resize-none"></textarea>
                   </div>

                   <button type="submit" className="w-full py-5 bg-[#FFC107] hover:bg-[#e0a800] text-[#061A33] font-black text-lg rounded-xl transition-all flex items-center justify-center gap-3 group shadow-[0_10px_20px_rgba(255,193,7,0.2)] hover:shadow-[0_15px_30px_rgba(255,193,7,0.3)] hover:-translate-y-1">
                      Send Message
                      <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                   </button>
                </form>
             </div>

          </div>

       </div>
    </section>
  );
}
