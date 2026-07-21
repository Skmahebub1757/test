/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F172A',
        surface: '#151F38',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#22D3EE',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'gradient-radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.25), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(59,130,246,0.25)',
        'glow-purple': '0 0 40px rgba(139,92,246,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: 0.6 },
          '100%': { transform: 'scale(4)', opacity: 0 },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        ripple: 'ripple 0.6s linear',
      },
    },
  },
  plugins: [],
}
