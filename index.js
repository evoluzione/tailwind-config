module.exports = {
	content: ['./**/*.php', './js/scripts.min.js','../../plugins/woocommerce/**/*.php', './gutenberg/dist/bundle.js'],
	safelist: ['aspect-w-21', 'aspect-w-16', 'aspect-h-9', 'aspect-w-4', 'aspect-h-3'],
	darkMode: 'media', // false, 'media' or 'class'
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				xl: '1440px'
			}
		},
		extend: {
			typography: () => ({
				DEFAULT: {
					css: {
						maxWidth: '100%',
						color: 'var(--ground-color-tertiary)',
						h1: { color: 'var(--ground-color-tertiary)' },
						h2: { color: 'var(--ground-color-tertiary)' },
						h3: { color: 'var(--ground-color-tertiary)' },
						h4: { color: 'var(--ground-color-tertiary)' },
						h5: { color: 'var(--ground-color-tertiary)' },
						h6: { color: 'var(--ground-color-tertiary)' },
						strong: { color: 'var(--ground-color-tertiary)' }
					}
				}
			}),
			colors: {
				primary: 'var(--ground-color-primary)',
				secondary: 'var(--ground-color-secondary)',
				tertiary: 'var(--ground-color-tertiary)',
				quaternary: 'var(--ground-color-quaternary)',
				quinary: 'var(--ground-color-quinary)',
				'body-secondary': 'var(--ground-color-body-secondary)',
				'line-primary': 'var(--ground-color-line-primary)',
				'line-secondary': 'var(--ground-color-line-secondary)'
			},
			margin: {
				'1/2': '50%'
			},
			zIndex: {
				'-10': '-10',
				'-5': '-5',
				'-1': '-1',
				1: 1,
				2: 2,
				5: 5,
				60: 60,
				75: 75,
				100: 100
			},
			width: {
				sidebar: '650px'
			},
			fontFamily: {
				primary: [
					'var(--ground-font-primary)',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'"Noto Sans"',
					'sans-serif',
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"'
				],
				secondary: [
					'var(--ground-font-secondary)',
					'ui-serif',
					'Georgia',
					'Cambria',
					'"Times New Roman"',
					'Times',
					'serif'
				]
			},
			transitionDelay: {
				400: '400ms',
				600: '600ms',
				800: '800ms',
				900: '900ms'
			},
			transitionTimingFunction: {
				default: 'cubic-bezier(0.77, 0, 0.175, 1)'
			},
			keyframes: {
				'fade-in': {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				'fade-in-up': {
					from: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
					to: { opacity: 1, transform: 'none' }
				},
				'fade-in-down': {
					from: { opacity: 0, transform: 'translate3d(0, -100%, 0)' },
					to: { opacity: 1, transform: 'none' }
				},
				'fade-in-left': {
					from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
					to: { opacity: 1, transform: 'none' }
				},
				'fade-in-right': {
					from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
					to: { opacity: 1, transform: 'none' }
				},
				'fade-out': {
					from: { opacity: 1 },
					to: { opacity: 0 }
				},
				'fade-out-up': {
					from: { opacity: 1 },
					to: { opacity: 0, transform: 'translate3d(0, -100%, 0)' }
				},
				'fade-out-down': {
					from: { opacity: 1 },
					to: { opacity: 0, transform: 'translate3d(0, 100%, 0)' }
				},
				'scale-in': {
					from: { opacity: 0, transform: 'scale(0)' },
					to: { opacity: 1, transform: 'scale(1)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-in-out forwards',
				'fade-in-up': 'fade-in-up 0.5s ease-in-out forwards',
				'fade-in-down': 'fade-in-down 0.5s ease-in-out forwards',
				'fade-in-left': 'fade-in-left 0.5s ease-in-out forwards',
				'fade-in-right': 'fade-in-right 0.5s ease-in-out forwards',
				'fade-out': 'fade-out 0.5s ease-in-out forwards',
				'fade-out-up': 'fade-out-up 0.5s ease-in-out forwards',
				'fade-out-down': 'fade-out-down 0.5s ease-in-out forwards',
				'scale-in': 'scale-in 0.5s ease-in-out forwards'
			}
		}
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
		require('tailwindcss-debug-screens')
	]
};
