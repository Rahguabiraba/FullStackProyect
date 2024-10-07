/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        secondary: "#1A1A1D", // Negro oscuro
        gradientStart: "#6C63FF",
        gradientEnd: "#1A1A1D",
      },
      animation: {
        spinAround: "spinAround 8s linear infinite",
        spinSelf: "spinSelf 3s linear infinite",
        pulse: "pulse 1.5s infinite",
        "spin-slow": "spin 3s linear infinite", // Duración personalizada
        "spin-reverse": "spin-reverse 2s linear infinite", // Giro en sentido contrario
      },
      keyframes: {
        spinAround: {
          "0%": { transform: "rotate(0deg) translateX(30px) rotate(0deg)" },
          "100%": {
            transform: "rotate(360deg) translateX(30px) rotate(-360deg)",
          },
        },
        spinSelf: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" }, // Giro contrario a las manecillas del reloj
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
  },
  plugins: [],
};
