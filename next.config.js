const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
    async headers() {
        return [{ source: '/(.*)', headers: createSecureHeaders() }];
    },
    images: {
        dangerouslyAllowSVG: true,
        domains: ['vercel.com'],
    },
};
