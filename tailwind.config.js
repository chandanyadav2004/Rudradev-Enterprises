// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- NEW THEME COLORS ---
        'accent-blue': '#0B6B9E',       // Medical Blue (Primary Accent)
        'bg-light': '#F6FBFF',          // Light Medical Blue (Background)
        'text-muted': '#64748B',        // Blue-Gray (Muted Text)
        'text-dark': '#0F1724',         // Dark Navy (Main Text)
        'bg-footer': '#071226',         // Deep Navy (Footer Background)
        'card-white': '#FFFFFF',        // Pure White (Card Backgrounds)
      },
    },
  },
  plugins: [],
}