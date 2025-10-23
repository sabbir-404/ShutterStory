/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rehivhbkyaopgsvaibdu.supabase.co', // ← no spaces
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};
export default nextConfig;
