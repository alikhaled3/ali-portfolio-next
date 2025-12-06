/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // static HTML export
  basePath: isProd ? '/ali-portfolio-next' : '', // your GitHub repo name
  assetPrefix: isProd ? '/ali-portfolio-next/' : '',
};
