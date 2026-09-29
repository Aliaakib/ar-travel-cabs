"use client";

import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <div key={pathname} className="animate-page-in flex-grow flex flex-col w-full h-full">
      {children}
    </div>
  );
}
