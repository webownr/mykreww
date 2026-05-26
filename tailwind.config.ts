/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kreww design system — dark mode default
        'bg-primary': '#050D1A',
        'bg-card': '#0F1C2E',
        'bg-sidebar': '#080F1A',
        'kreww-border': '#1A2D45',
        'accent': '#00D4FF',
        'accent-dim': '#0099BB',
        'text-primary': '#F0F4F8',
        'text-secondary': '#8BA0B8',
        'text-muted': '#4A6080',
        'success': '#00E676',
        'warning': '#FFB300',
        'danger': '#FF5252',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,212,255,0.12), transparent)',
        'card-glow': 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,212,255,0.06), transparent)',
        'cyan-gradient': 'linear-gradient(135deg, #00D4FF 0%, #0099BB 100%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0,212,255,0.15), 0 0 80px rgba(0,212,255,0.06)',
        'glow-sm': '0 0 20px rgba(0,212,255,0.12)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.5), 0 0 20px rgba(0,212,255,0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
