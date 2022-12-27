/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? { source: "/((?!maintenance).*)", destination: "pages/maintenance.html", permanent: false }
        : null,
    ].filter(Boolean);
  }
};

module.exports = nextConfig
