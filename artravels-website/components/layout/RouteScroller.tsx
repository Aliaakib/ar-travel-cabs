"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteScroller() {
  const pathname = usePathname();

  useEffect(() => {
    // pathname will be "/services", "/contact", etc.
    const path = pathname.replace("/", "");
    if (path) {
      // Small delay to ensure all DOM is mounted
      setTimeout(() => {
        const element = document.getElementById(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  return null;
}
