const pkg = require('./package')

module.exports = {
	mode: 'universal',
	head: {
		title: 'PiratCrew',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' }, { name: 'keywords', content: 'mart, cube, portfolio, site, web, developer' }, { hid: 'description', name: 'description', content: pkg.description }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Customize the progress-bar color
	loading: { color: '#fff' },

	// Global css
	css: ['~/assets/style.scss'],

	// Plugins to load before mounting the App
	plugins: ['~/plugins/v-select.js'],

	// Nuxt.js modules
	modules: ['@nuxtjs/prismic'],

	prismic: {
		endpoint: 'https://piratcrew.cdn.prismic.io/api/v2',
		linkResolver: '@/plugins/link-resolver',
		htmlSerializer: '@/plugins/html-serializer',
		preview: false,
	},

	// Build configuration
	build: {
		// You can extend webpack config here

		extend(config, ctx) {},
	},
}
