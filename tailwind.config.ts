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
						10: '#101014',
						20: '#1B1B21',
						30: '#25252D',
						40: '#30303A',
						50: '#3B3B49',
						60: '#464656',
						70: '#525264',
						80: '#5F5F74',
						90: '#8E8EA2',
						100: '#C5C5CF',
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
						10: '#F0F0F2',
						20: '#E0E0E6',
						30: '#D1D1D9',
						40: '#C1C1CD',
						50: '#9F9FB1',
						60: '#7E7E96',
						70: '#626278',
						80: '#494959',
						90: '#32323D',
						100: '#1B1B21',
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
