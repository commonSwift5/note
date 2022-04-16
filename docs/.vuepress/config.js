module.exports = {
	title: 'function',
	base: '/note/',
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '字符串', link: '/string/' },
			{ text: '数组', link: '/array/' }
		],
		sidebar: {
			'/string/': ['string.md'],
			'/array/': ['array.md', '01array.md']
		}
	}
}
