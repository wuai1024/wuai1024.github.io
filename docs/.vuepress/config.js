module.exports = {
    title: '个人主页',
    description: 'Just playing around',
    dest: '.vuepress/dist',
    locales: { '/': { lang: 'zh-CN', }, },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./nav'),
        lastUpdated: '最近更新',
        docsDir: 'docs',
        repo: 'https://github.com/YangKang626/YangKang626.github.io',
        repoLabel: 'GitHub',
        docsBranch: 'master',
        displayAllHeaders: true,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {updatePopup: true},
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['vuepress-plugin-code-copy', true]
    ]
}
