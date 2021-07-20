// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  ['meta', { name: 'keywords', content: '博客,个人技术博客,前端,前端开发,算法,计算机视觉,SLAM,3D建模,OpenCV,后台,工具文档,技术文档,学习,面试,JavaScript,js,ES6,vue,python,git,cmake,github,markdown' }],
  ['meta', { name: 'baidu-site-verification', content: 'uMIWIzKJNL' }],// 百度统计的站点拥有者验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜
/*   [
    'script',
    {
      'data-ad-client': 'ca-pub-7828333725993554',
      async: 'async',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    },
  ], // 网站关联Google AdSense 与 html格式广告支持 */
]