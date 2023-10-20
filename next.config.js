/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        // Next JS Image Optimization does not work on static site generation 
        // See: https://nextjs.org/docs/pages/building-your-application/optimizing/images
        unoptimized: true
    }
};

module.exports = nextConfig;