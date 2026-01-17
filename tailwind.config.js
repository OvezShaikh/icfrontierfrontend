export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",     // dark navy (finance feel)
        secondary: "#1e293b",   // slate
        accent: "#2563eb",      // blue
        muted: "#64748b",       // text-muted
        surface: "#f8fafc",     // light bg
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
