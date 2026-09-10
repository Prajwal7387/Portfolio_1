/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0A0A0A',
          elevated: '#141414',
          card: '#1A1A1A',
        },
        fg: {
          DEFAULT: '#FAFAF9',
          muted: '#999999',
          subtle: '#666666',
        },
        accent: {
          DEFAULT: '#CDFF50',
          dim: '#CDFF5033',
        },
        border: {
          DEFAULT: '#ffffff12',
          strong: '#ffffff25',
        },
        overlay: '#0a0a0acc',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
