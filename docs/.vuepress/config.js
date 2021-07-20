
const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "HUAN's blog",
  description: '个人技术博客,不积跬步,无以至千里',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
   // base: '/BLOG_HUAN/', // '/<github仓库名>/'， 默认'/'
  base: process.argv.splice(-1)[0],

  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}