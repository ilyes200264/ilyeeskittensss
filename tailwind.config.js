/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			text: '#434343',
  			background: 'hsl(var(--background))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			foreground: 'hsl(var(--foreground))',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			error: '#E85D75',
  			warning: '#F4B942',
  			info: '#6BB6FF',
  			success: '#7BC96F',
  			'cat-primary': '#8B6F47',
  			'cat-secondary': '#D4B896',
  			'cat-accent': '#FF9AC1',
  			'background-light': '#FCFAF6',
  			'background-dark': '#2A2A2A',
  			white: '#FFFFFF',
  			black: '#000000',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Poppins"',
  				'Inter"',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'Nunito"',
  				'Poppins"',
  				'system-ui',
  				'sans-serif'
  			],
  			body: [
  				'Open Sans"',
  				'Inter"',
  				'system-ui',
  				'sans-serif'
  			],
  			serif: [
  				'Playfair Display"',
  				'Georgia',
  				'serif'
  			],
  			mono: [
  				'JetBrains Mono"',
  				'Menlo',
  				'monospace'
  			],
  			fun: [
  				'Comfortaa"',
  				'Nunito"',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem'
  		},
  		borderRadius: {
  			'4xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			cat: '0 4px 14px 0 rgba(255, 169, 133, 0.15)',
  			'cat-lg': '0 10px 30px 0 rgba(255, 169, 133, 0.2)',
  			soft: '0 4px 14px 0 rgba(185, 218, 248, 0.15)',
  			mint: '0 4px 14px 0 rgba(163, 222, 200, 0.15)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

