/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i2-prod.gloucestershirelive.co.uk',
        pathname: '/incoming/**',
      },
      {
        protocol: 'https',
        hostname: 'i2-prod.gloucestershirelive.co.uk',
        pathname: '/news/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jwplayer.com',
        pathname: '/v2/media/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
