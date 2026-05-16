/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  devIndicators: false,
  reactCompiler: true,
   images: {
    remotePatterns: [{ protocol: 'https', hostname: 'randomuser.me' }],
  },
};

export default nextConfig;
