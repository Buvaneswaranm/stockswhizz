/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      colors: {
        midnight: {
          DEFAULT: '#08080f',
          50: '#12121c',
          100: '#161622',
          200: '#1c1c2b',
          300: '#252538',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e2c878',
          dim: '#8a7340',
          glow: 'rgba(201, 168, 76, 0.15)',
        },
        cream: '#f5f0e8',
        muted: '#8b8b9e',
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 40px rgba(0,0,0,0.4)',
        'card-hover':
          '0 0 0 1px rgba(201,168,76,0.25), 0 16px 48px rgba(0,0,0,0.5)',
        glow: '0 0 60px rgba(201, 168, 76, 0.12)',
      },
      backgroundImage: {
        'mesh-gradient':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,168,76,0.12), transparent), radial-gradient(ellipse 50% 40% at 100% 50%, rgba(99,102,241,0.06), transparent), radial-gradient(ellipse 40% 30% at 0% 80%, rgba(201,168,76,0.08), transparent)',
      },
    },
  },
  plugins: [],
};
