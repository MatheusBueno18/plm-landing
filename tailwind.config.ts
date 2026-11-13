import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { navy: "#10172C", vio: "#6546C8", lav: "#A9B6FF", ice: "#ECEEF7", silver: "#C9CEE0" },
    fontFamily: { display: ["var(--font-grotesk)", "system-ui", "sans-serif"], sans: ["var(--font-inter)", "system-ui", "sans-serif"] },
    keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } } },
    animation: { float: "float 7s ease-in-out infinite" },
  } },
  plugins: [],
} satisfies Config;
