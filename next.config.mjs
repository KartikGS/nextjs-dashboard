/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        ppr: 'incremental',
    },
    webpack: (config) => {
        config.externals = [...config.externals, "bcrypt"];
        return config;
      },
};

export default nextConfig;
