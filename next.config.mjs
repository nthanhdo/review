/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/review', // Thay 'review' bằng tên repository của bạn
};

export default nextConfig;
