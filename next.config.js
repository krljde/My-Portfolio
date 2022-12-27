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
        source: "/((?!maintenance).*)",
        destination: "/maintenance.html",
        permanent: false, //!!!IMPORTANT!!!
      },
    ];
  },
};
