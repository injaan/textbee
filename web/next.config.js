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
        destination: '/login', // Change this to your desired page
        permanent: false,
      },
      // {
      //   source: '/android',
      //   destination: 'https://sms.serve.mn/dl',
      //   permanent: false,
      // },
    ]
  },
}

module.exports = nextConfig
