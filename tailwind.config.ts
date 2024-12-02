import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sf-pro': ['SF Pro', 'sans-serif']
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				semibold: '600',
				bold: '700',
				extrabold: '800',
				black: '900'
			},
			fontSize: {
				xs: '10px',
				sm: '11px',
				base: '12px',
				md: '14px',
				lg: '16px',
				xl: '20px',
				'2xl': '28px',
				headline: '128px'
			},
			colors:{
				dark:{
					neutral:{
						10: '#abx',
						20: '#abx',
						30: '#abx',
						40: '#abx',
						50: '#abx',
						60: '#abx',
						70: '#abx',
						80: '#abx',
						90: '#abx',
						100: '#abx',
					},
					primary: {
						10: '#abx',
						20: '#abx',
						30: '#abx',
						40: '#abx',
						50: '#abx',
					}
				},
				light:{
					neutral:{
						10: '#abx',
						20: '#abx',
						30: '#abx',
						40: '#abx',
						50: '#abx',
						60: '#abx',
						70: '#abx',
						80: '#abx',
						90: '#abx',
						100: '#abx',
					},
					primary: {
						10: '#abx',
						20: '#abx',
						30: '#abx',
						40: '#abx',
						50: '#abx',
					}
				}
			}
		}
	},

	plugins: []
} satisfies Config;
