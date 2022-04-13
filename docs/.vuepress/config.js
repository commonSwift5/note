module.exports = {
	title: 'happy-cooking',
	base: '/happy-cooking/',
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '饮料', link: '/drinkDocs/water.md' }
		],
		sidebar: [
			{
				title: '饮料', // 必要的
				path: '/drinkDocs/water', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
				collapsable: false, // 可选的, 默认值是 true,
				sidebarDepth: 1, // 可选的, 默认值是 1
				children: ['/drinkDocs/jfx/jfx.md', '/drinkDocs/百香果橙子特调/百香果橙子特调']
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
