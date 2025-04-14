const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/invitation/spring/0614',
        permanent: false, // 307 (임시 이동), true로 하면 308
      },
    ];
  },
};

export default nextConfig;