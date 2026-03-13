import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-sans)"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" }
        },
        pulseSoft: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(14, 165, 233, 0.14)" },
          "50%": { boxShadow: "0 0 0 14px rgba(14, 165, 233, 0)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        rise: "rise 0.8s ease-out both",
        "pulse-soft": "pulseSoft 3.4s ease-in-out infinite"
      },
      boxShadow: {
        glow: "0 24px 80px -32px rgba(8, 17, 31, 0.42)"
      }
    }
  },
  plugins: []
};

export default config;
