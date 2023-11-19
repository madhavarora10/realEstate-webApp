/** @type {import('next').NextConfig} */
// swiperjs url is added for test purposes only

const nextConfig = {
 experimental:{
  appDir: true,
 },
 webpack(config) {
  config.experiments = { ...config.experiments, topLevelAwait: true }
  return config
},
  reactStrictMode: true,
};

module.exports = nextConfig;
