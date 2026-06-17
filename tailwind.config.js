/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0f172a",   // Fondo pizarra oscuro
        cardBg: "#1e293b",   // Gris azulado para las tarjetas
        neonGreen: "#10b981", // Verde esmeralda para resaltar la IA y tecnologías
      }
    },
  },
  plugins: [],
}