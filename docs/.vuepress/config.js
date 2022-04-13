module.exports = {
	title: 'function',
	base: '/function/',
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '饮料', link: '/method/' }
		],
		sidebar: [
			{
				title: '字符串', // 必要的
				path: '/method/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: ['/method/String/String.md']
			},
			{
				title: '目录',
				children: [
					/* ... */
				],
				initialOpenGroupIndex: -1 // 可选的, 默认值是 0
			}
		]
	}
}
