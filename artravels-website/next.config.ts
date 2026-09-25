import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',    // Static HTML build nikalne ke liye
  images: {
    unoptimized: true, // Static export mein images crash na hon, isliye zaroori hai
  },
};

export default nextConfig;
