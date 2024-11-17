import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "i.ytimg.com",
            port: "",
         },
         {
            protocol: "https",
            hostname: "yt3.ggpht.com",
            port: "",
         },
      ],
   },
};

export default nextConfig;
