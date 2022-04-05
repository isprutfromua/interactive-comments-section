import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	safelist: [
		'bg-grayishBlue',
		'bg-moderateBlue',
		'bg-softRed',
		'focus:bg-lightGrayishBlue',
		'focus:bg-paleRed',
		'gap-x-2',
		'gap-y-2',
		'grid-cols-[max-content,1fr,max-content]',
		'hover:bg-lightGrayishBlue',
		'hover:bg-paleRed',
		'hover:text-lightGrayishBlue',
		'hover:text-paleRed',
		'lg:gap-x-6',
		'lg:gap-y-4',
		'lg:grid-cols-[max-content,1fr,max-content]',
		'text-moderateBlue',
		'text-softRed',
		'overflow-hidden'
	],
	theme: {
		extend: {
			fontSize: {
				heading: '1.5rem',
				label: '0.8125rem'
			},
			container: {
				screens: {
					lg: '45.6rem'
				}
			},
			borderRadius: {
				main: '0.5rem',
				counter: '0.625rem'
			}
		},
		colors: {
			darkBlue: 'hsla(212, 23.9%, 26.3%, 1)',
			grayishBlue: 'hsla(211, 10%, 44.9%, 1)',
			moderateBlue: 'hsla(238, 40.4%, 52%, 1)',
			veryLightGray: 'hsla(228, 33.3%, 97.1%, 1)',
			lightGrayishBlue: 'hsla(239, 56.8%, 85.5%, 1)',
			lightGray: 'hsla(223, 18.9%, 92.7%, 1)',
			softRed: 'hsla(358, 79.3%, 65.9%, 1)',
			paleRed: 'hsla(357, 100%, 86.1%, 1)',
			white: 'hsla(0, 0%, 100%, 1)',
			overlay: 'hsla(0, 0%, 0%, .5)'
		},
		fontFamily: {
			sans: [
				'Rubik',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'sans-serif'
			]
		}
	},
	variants: {},
	plugins: []
});
