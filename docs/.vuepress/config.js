module.exports = {
	title: 'function',
	base: '/note/',
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '基础', link: '/basics/' },
			{ text: '字符串', link: '/string/' },
			{ text: '数组', link: '/array/' },
			{ text: '对象', link: '/object/' }
		],
		sidebar: {
			'/basics/': ['basics.md'],
			'/string/': ['string.md'],
			'/array/': ['array.md', '01array.md'],
			'/object/': ['object.md']
		}
	}
}
