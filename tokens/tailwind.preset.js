/**
 * ROOTS LIFE — Tailwind preset
 *
 * Uso:
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./tokens/tailwind.preset.js')],
 *     content: ['./src/**\/*.{js,ts,jsx,tsx,html}'],
 *   }
 */

module.exports = {
  theme: {
    // Escala de color — extend para no perder los defaults de Tailwind
    extend: {
      colors: {
        ink: {
          50:  '#F5F4F1',
          100: '#E8E6E0',
          200: '#CFCCC3',
          300: '#A8A49A',
          400: '#706C63',
          500: '#4A4740',
          600: '#2E2C28',
          700: '#1A1917',
          800: '#121110',
          900: '#0E0E0E',
          950: '#050505',
          DEFAULT: '#0E0E0E',
        },
        paper: {
          50:  '#FDFBF6',
          100: '#F7F3EA',
          200: '#EFE8D9',
          300: '#E3DBC8',
          400: '#CFC5AE',
          DEFAULT: '#F7F3EA',
        },
        rust: {
          50:  '#FBEEE8',
          100: '#F6D4C5',
          300: '#E89274',
          500: '#D85A3A',
          700: '#A03E24',
          900: '#5E2413',
          DEFAULT: '#D85A3A',
        },
        moss: {
          50:  '#EEF0E8',
          100: '#D2D8BF',
          300: '#8B9770',
          500: '#4E5A38',
          700: '#323B23',
          900: '#1B2012',
          DEFAULT: '#4E5A38',
        },
        tide: {
          50:  '#E8F0F0',
          100: '#C1D7D7',
          300: '#6AA0A0',
          500: '#3E8A8A',
          700: '#27605E',
          900: '#143432',
          DEFAULT: '#3E8A8A',
        },
        earth: {
          50:  '#F2EBE3',
          100: '#DBC5AD',
          300: '#A67A54',
          500: '#7A4A2A',
          700: '#50301A',
          900: '#2A1A0E',
          DEFAULT: '#7A4A2A',
        },
        capsule: {
          lime: '#8BA548',
          cyan: '#2FB8D4',
          sky:  '#9CB7D4',
          rose: '#B07870',
        },
        success: { bg: '#E6F2EA', fg: '#2B6B3E' },
        warning: { bg: '#FBF1E0', fg: '#8A5A16' },
        error:   { bg: '#FBE7E4', fg: '#B53022' },
        info:    { bg: '#E8EEF6', fg: '#2B4F86' },
      },

      fontFamily: {
        display: ['Kobe', 'Poppins', 'Helvetica Neue', 'Arial', 'sans-serif'],
        body:    ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        sans:    ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },

      fontWeight: {
        regular:   '400',
        medium:    '500',
        bold:      '700',
        extrabold: '800',
      },

      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1.4' }],
        sm:   ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem',     { lineHeight: '1.6' }],
        md:   ['1.125rem', { lineHeight: '1.6' }],
        lg:   ['1.25rem',  { lineHeight: '1.4' }],
        xl:   ['1.5rem',   { lineHeight: '1.25' }],
        '2xl': ['1.875rem', { lineHeight: '1.2' }],
        '3xl': ['2.375rem', { lineHeight: '1.15' }],
        '4xl': ['3rem',     { lineHeight: '1.1' }],
        '5xl': ['3.75rem',  { lineHeight: '1.05' }],
        '6xl': ['4.75rem',  { lineHeight: '1' }],
        '7xl': ['6rem',     { lineHeight: '1' }],
      },

      letterSpacing: {
        tighter: '-0.02em',
        tight:   '-0.01em',
        normal:  '0',
        wide:    '0.04em',
        wider:   '0.06em',
        widest:  '0.1em',
      },

      spacing: {
        '0':    '0',
        'px':   '1px',
        '0.5':  '0.125rem',
        '1':    '0.25rem',
        '2':    '0.5rem',
        '3':    '0.75rem',
        '4':    '1rem',
        '5':    '1.25rem',
        '6':    '1.5rem',
        '8':    '2rem',
        '10':   '2.5rem',
        '12':   '3rem',
        '16':   '4rem',
        '20':   '5rem',
        '24':   '6rem',
        '32':   '8rem',
        '40':   '10rem',
        '48':   '12rem',
      },

      maxWidth: {
        'prose-narrow': '32rem',
        'prose':        '42rem',
        'container-md': '60rem',
        'container-lg': '75rem',
        'container-xl': '90rem',
      },

      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1440px',
      },

      borderRadius: {
        none: '0',
        xs:   '2px',
        sm:   '4px',
        md:   '8px',
        lg:   '16px',
        full: '9999px',
      },

      boxShadow: {
        sm: '0 1px 2px 0 rgba(14, 14, 14, 0.06)',
        md: '0 2px 8px 0 rgba(14, 14, 14, 0.08)',
        lg: '0 8px 24px 0 rgba(14, 14, 14, 0.12)',
        xl: '0 16px 48px 0 rgba(14, 14, 14, 0.16)',
      },

      transitionDuration: {
        fast:   '120ms',
        normal: '200ms',
        slow:   '320ms',
        slower: '500ms',
      },

      transitionTimingFunction: {
        standard:   'cubic-bezier(0.4, 0, 0.2, 1)',
        decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
        accelerate: 'cubic-bezier(0.4, 0, 1, 1)',
      },

      zIndex: {
        base:     '0',
        dropdown: '100',
        sticky:   '200',
        overlay:  '800',
        modal:    '900',
        toast:    '1000',
      },
    },
  },

  plugins: [
    // Utilities for composite text styles (ROOTS LIFE typography system)
    function ({ addComponents }) {
      addComponents({
        '.text-display-hero': {
          fontFamily: 'Kobe, Poppins, sans-serif',
          fontSize: 'clamp(2.75rem, 6vw + 1rem, 4.75rem)',
          fontWeight: '700',
          lineHeight: '1',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
        },
        '.text-display-xl': {
          fontFamily: 'Kobe, Poppins, sans-serif',
          fontSize: 'clamp(2.25rem, 4vw + 1rem, 3.75rem)',
          fontWeight: '700',
          lineHeight: '1.05',
          letterSpacing: '-0.015em',
          textTransform: 'uppercase',
        },
        '.text-h1': {
          fontFamily: 'Kobe, Poppins, sans-serif',
          fontSize: 'clamp(1.875rem, 3vw + 1rem, 3rem)',
          fontWeight: '700',
          lineHeight: '1.1',
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
        },
        '.text-h2': {
          fontFamily: 'Kobe, Poppins, sans-serif',
          fontSize: 'clamp(1.5rem, 2vw + 1rem, 2.375rem)',
          fontWeight: '700',
          lineHeight: '1.15',
          letterSpacing: '-0.005em',
          textTransform: 'uppercase',
        },
        '.text-h3': {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '1.875rem',
          fontWeight: '800',
          lineHeight: '1.2',
          letterSpacing: '-0.005em',
        },
        '.text-button': {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.875rem',
          fontWeight: '800',
          lineHeight: '1.1',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        },
        '.text-nav-link': {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.875rem',
          fontWeight: '800',
          lineHeight: '1.1',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        },
        '.text-stamp': {
          fontFamily: 'Poppins, sans-serif',
          fontSize: '0.75rem',
          fontWeight: '800',
          lineHeight: '1',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        },
      });
    },
  ],
};
