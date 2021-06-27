module.exports = [
    {
        title: 'Group 1',   // 必要的
        path: '/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的,是否允许折叠 默认值是 true,
        children: [
            '/java/four'
        ]
    },
    {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
    }
]
