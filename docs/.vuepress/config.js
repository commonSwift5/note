module.exports = {
	title: 'function',
	base: '/function/',
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: '数组', link: '/string/' },
			{ text: '数组', link: '/array/' }
		],
		sidebar: {
			'/string/': ['string.md'],
			'/array/': ['array.md', '01array.md']
		}
	}
}
