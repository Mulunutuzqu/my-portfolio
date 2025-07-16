/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos", // Allow all hosts - not recommended for production
        // Or specify exact domains:
        // hostname: 'example.com',
        port: "",
        pathname: "/",
      },
    ],
  },
};

export default nextConfig;
