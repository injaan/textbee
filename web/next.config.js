/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/your-page', // Change this to your desired page
        permanent: false,
      },
      // {
      //   source: '/android',
      //   destination: 'https://dl.textbee.dev',
      //   permanent: false,
      // },
    ]
  },
}

module.exports = nextConfig
