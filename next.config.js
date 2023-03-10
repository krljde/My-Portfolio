/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = nextConfig

module.exports = {
  // your other settings
  async redirects() {
    return [
      {
        source: "/((?!maintenance|_next).*)",
        destination: "/maintenance.html",
        permanent: false, //!!!IMPORTANT!!!
      },
    ];
  },
};
