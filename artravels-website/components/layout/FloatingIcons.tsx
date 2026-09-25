"use client";

import { useEffect, useState } from "react";

export default function FloatingIcons() {
  return (
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
  );
}
