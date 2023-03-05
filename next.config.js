/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: `/${process.env.GOOGLE_VERIFICATION_CODE}.html`,
        destination: `/google${process.env.GOOGLE_VERIFICATION_CODE}.html`,
      },
    ]
  },
}