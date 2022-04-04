module.exports = {
    title: '个人主页',
    description: 'Just playing around',
    dest: '.vuepress/dist',
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        //sidebar: 'auto', // 侧边栏配置
        // sidebarDepth: 2, // 侧边栏显示2级
        lastUpdated: '最近更新',
        docsDir: 'docs',
        repo: 'https://github.com/wuai1024/wuai1024.github.io',
        repoLabel: 'GitHub',
        docsBranch: 'main',
        displayAllHeaders: true,
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
            updatePopup: true
        },
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor'
        }],
        ['@vuepress/last-updated', {
            transformer: (timestamp, lang) => {
                const dayjs = require('dayjs') // https://day.js.org/
                return dayjs(timestamp).add(8, 'hour').format('YYYY-MM-DD HH:mm:ss')
            },
        }, ],
        ['@vuepress/medium-zoom'],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: '有新内容更新啦~',
                buttonText: '立即获取新内容'
            }
        }],
        ['vuepress-plugin-code-copy', true],
        ['@vuepress/nprogress']
    ]
}