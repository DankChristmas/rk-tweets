/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages project sites live under /<repo-name>
  basePath: "/rk-tweets",
  assetPrefix: "/rk-tweets/",

  // Only needed if you use next/image; harmless otherwise
  images: { unoptimized: true },
};

module.exports = nextConfig;
