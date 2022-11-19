/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		screens: {
      		// Portrait, Landscape
      		xsp: {min: '0px',max: '414px'},
      		// => @media (min-width: 280px and max-width: 414px) { ... }
			xsl: {'raw': 'only screen and (min-height: 0px) and (max-height: 414px)'},
      		//sel: '568px',
      		// => @media (min-width: 321px and max-width: 568px) { ... }
      		//s8p: {'raw': 'only screen and (max-height: 667px) and (max-width: 375px)'},
      		// => @media (min-width: 321px and max-width: 375px) { ... }
      		//s8l: {'raw': 'only screen and (max-height: 375px) and (max-width: 667px)'},
      		// => @media (min-width: 321px and max-width: 375px) { ... }
			xsm: { min: '600px', max: '639px' },
			// => @media (min-width: 600px and max-width: 639px) { ... }
			sm: { min: '640px', max: '767px' },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { min: '768px', max: '1023px' },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lg: { min: '1024px', max: '1279px' },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }

			xl: { min: '1280px', max: '1535px' },
			// => @media (min-width: 1280px and max-width: 1535px) { ... }

			'2xl': { min: '1536px' }
			// => @media (min-width: 1536px) { ... }
		}
	},
	/*variants: {
		extend: {
		  textOpacity: ['dark']
		}
	},*/
	darkMode: 'media', // or 'media' or 'class'
	daisyui: {
		themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
	},
	plugins: [require('daisyui')]
};
