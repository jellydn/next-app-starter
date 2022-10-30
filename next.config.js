const { createSecureHeaders } = require("next-secure-headers");

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["vercel.com"],
  },
};
