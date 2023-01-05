/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

// }

// module.exports = nextConfig

module.exports = {
 
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },

  eslint:{
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/rpc',
        permanent: true,
      },
    ]
  },
  
}