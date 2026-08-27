import type { Config } from 'tailwindcss';

/** Токены объявлены в app/globals.css как RGB-каналы, поэтому alpha работает: bg-brand/10 */
const rgb = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: rgb('--brand'),
          strong: rgb('--brand-strong'),
          dark: rgb('--brand-dark'),
          soft: rgb('--brand-soft'),
        },
        surface: {
          DEFAULT: rgb('--surface'),
          muted: rgb('--surface-muted'),
          dark: rgb('--surface-dark'),
        },
        ink: {
          DEFAULT: rgb('--ink'),
          muted: rgb('--ink-muted'),
          subtle: rgb('--ink-subtle'),
          inverse: rgb('--ink-inverse'),
        },
        line: {
          DEFAULT: rgb('--line'),
          strong: rgb('--line-strong'),
        },
        accent: {
          blue: rgb('--accent-blue'),
          green: rgb('--accent-green'),
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        float: '0 24px 60px -20px rgb(17 24 39 / 0.18)',
        card: '0 12px 32px -16px rgb(17 24 39 / 0.14)',
        brand: '0 12px 28px -12px rgb(255 107 53 / 0.55)',
      },
      maxWidth: {
        page: '1240px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
