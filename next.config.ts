/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const isGitHubPages = !isVercel && isProd;

module.exports = {
  // Remove static export on Vercel
  output: isGitHubPages ? 'export' : undefined,
  basePath: isGitHubPages ? '/ali-portfolio-next' : '',
  assetPrefix: isGitHubPages ? '/ali-portfolio-next/' : '',
};
