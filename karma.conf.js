module.exports = function (config) {
	config.set({

		frameworks: ['jasmine', 'browserify'],

		//basePath: '../',

		files: [
			{ pattern: 'src/**/*.js' }
		],

		preprocessors: {
			'src/**/*.js': ['browserify'],
		},

		reporters: ['progress'],

		autoWatch: true,

		colors: true,

		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-browserify'
		],

		browsers: ['ChromeHeadless'],

		customLaunchers: {
			ChromiumNoSandbox: {
				base: 'ChromeHeadless',
				flags: [
					'--disable-background-networking',
					'--disable-default-apps',
					'--disable-extensions',
					'--disable-gpu',
					'--disable-sync',
					'--disable-translate',
					'--headless',
					'--hide-scrollbars',
					'--metrics-recording-only',
					'--mute-audio',
					'--no-first-run',
					'--remote-debugging-port=42420',
					'--safebrowsing-disable-auto-update'
				]
			}
		}
	});
};