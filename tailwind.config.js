/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/i18n/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gtc: {
          dark: '#0a1628',
          primary: '#0e4c92',
          'primary-hover': '#0d3d76',
          accent: '#f5a623',
          'accent-hover': '#f7b84d',
          surface: '#f8fafc',
          muted: '#64748b',
          border: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['var(--gtc-font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'gtc': '1rem',
        'gtc-lg': '1.25rem',
        'gtc-xl': '1.5rem',
      },
      boxShadow: {
        'gtc': '0 4px 20px rgba(14, 76, 146, 0.08)',
        'gtc-lg': '0 20px 50px rgba(14, 76, 146, 0.12)',
        'gtc-glow': '0 0 60px rgba(245, 166, 35, 0.15)',
      },
    },
  },
  plugins: [],
};
