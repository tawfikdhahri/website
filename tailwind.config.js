/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryAccent: "var(--color-accent)",
        primaryDark: "var(--color-primary)",
        secondaryDark: "var(--color-secondary)",
        mutedText: "var(--color-text)",
        background: "var(--color-background)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        iconGreen: "var(--color-icon-green)",
        iconRed: "var(--color-icon-red)",
        iconCyan: "var(--color-icon-cyan)",
        heroText: "var(--color-hero-text)"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
