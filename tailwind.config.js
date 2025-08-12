import { colors, theme } from './src/lib/color.mjs';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: colors.backgrounds,
        text: colors.text,
        accent: colors.accents,
        table: colors.tables,
        ui: colors.ui
      },
      fontFamily: {
        sans: [theme.fonts.primary],
        mono: [theme.fonts.secondary]
      },
      spacing: theme.spacing
    }
  },
  plugins: [
    forms,
    typography
  ]
};