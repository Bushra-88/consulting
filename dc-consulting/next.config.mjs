/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure you've specified the output as export
  images: {
    unoptimized: true, // Ensure images are not optimized
  },
};

export default nextConfig;