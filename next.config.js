const { createSecureHeaders } = require('next-secure-headers');

/** @type {import('next').NextConfig} */
module.exports = {
    async headers() {
        return [{ source: '/(.*)', headers: createSecureHeaders() }];
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vercel.com',
            },
        ],
    },
};
