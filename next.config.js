/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    reactStrictMode: false,
    swcMinify: true,
    serverRuntimeConfig: {
        headers: {
            'Content-Security-Policy': 'frame-ancestors \'none\';',
        },
    },
}

module.exports = nextConfig;