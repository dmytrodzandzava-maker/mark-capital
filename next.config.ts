import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Portfolio images request quality=90; Next only serves qualities it's
    // explicitly told to allow, so without this it silently clamped every
    // request down to the default 75 regardless of what the component asked for.
    qualities: [75, 90],
  },
};

export default nextConfig;
