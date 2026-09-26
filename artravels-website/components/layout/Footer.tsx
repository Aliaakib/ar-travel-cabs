import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#061A33] text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand Col */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/AR-LOGO.png"
              alt="AR TRAVEL CABS"
              width={180}
              height={60}
              className="h-16 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Car Is Where Early Adopters And Innovation Seekers Find Lively Imaginative Tech.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FFC107]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/cars" className="text-gray-400 hover:text-white transition-colors text-sm">Visiting Places</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FFC107]">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Airport Transfers</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Local City Rides</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Outstation Trips</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Corporate Travel</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#FFC107]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-[#FFC107] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-sm text-gray-400">Rajkot, Gujarat</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-[#FFC107] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:asifrazasaiyad@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">asifrazasaiyad@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-[#FFC107] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+917990468872" className="text-sm text-gray-400 hover:text-white transition-colors">+91 7990468872</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} AR TRAVEL CABS. <br className="sm:hidden" /> By <a href="https://www.linkedin.com/in/bukhari-aliaakib-9056581ab" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:text-white transition-colors whitespace-nowrap">Bukhari Aliaakib</a>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
