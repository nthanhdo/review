/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Đảm bảo sử dụng output dạng tĩnh
  basePath: '/review', // Thay thế <repository-name> bằng tên repo của bạn trên GitHub
  assetPrefix: '/review', // Prefix cho tài nguyên tĩnh
  trailingSlash: true, // Thêm dấu / ở cuối URL
};

export default nextConfig;
