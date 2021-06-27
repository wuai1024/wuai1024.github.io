module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    dest: '.vuepress/dist',
    locales: { '/': { lang: 'zh-CN', }, },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./nav'),
        lastUpdated: 'Last Updated'
    }
}