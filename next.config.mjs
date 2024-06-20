/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowedForwardedHosts: ['fluffy-dollop-699gr7vqq9w5fxv99-3000.app.github.dev','localhost:3000'],
          allowedOrigins: ['fluffy-dollop-699gr7vqq9w5fxv99-3000.app.github.dev','localhost:3000'],
        },
      },
};

export default nextConfig;
