import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio',
    NEXT_PUBLIC_GITHUB_USERNAME: 'Godzap',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
};

export default nextConfig;
