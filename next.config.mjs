/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MAP_KEY: process.env.NEXT_PUBLIC_MAP_KEY,
    NEXT_PUBLIC_MAP_ID: process.env.NEXT_PUBLIC_MAP_ID,
  },
};

export default nextConfig;
