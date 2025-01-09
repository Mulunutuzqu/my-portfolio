/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io", // Allow all hosts - not recommended for production
        // Or specify exact domains:
        // hostname: 'example.com',
        port: "",
        pathname: "/f/**",
      },
    ],
  },
};

export default nextConfig;
