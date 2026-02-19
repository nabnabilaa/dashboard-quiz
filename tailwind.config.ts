import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Maxy brand palette — unified
        brand: {
          50: '#FFF8EB',
          100: '#FFEFC6',
          200: '#FFDF88',
          300: '#FFCF4A',
          400: '#F5A623',
          500: '#F5A623',
          600: '#E09000',
          700: '#B87200',
          800: '#945A00',
          900: '#7A4A00',
        },
        accent: {
          cyan: '#06b6d4',
          teal: '#14b8a6',
        },
        // Dark theme colors — used by ethical-hacking module
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          border: '#334155',
        },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'reverse-spin': 'reverseSpin 15s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'pulse-glow-blue': 'pulseGlowBlue 3s ease-in-out infinite',
      },
      keyframes: {
        reverseSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(245, 166, 35, 0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(245, 166, 35, 0.5)' },
        },
        pulseGlowBlue: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(14, 165, 233, 0.5)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
