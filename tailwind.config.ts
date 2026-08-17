import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B12",
        foreground: "#F8FAFC",
        midnight: {
          950: "#04070D",
          900: "#070B12",
          850: "#0A101C",
          800: "#0D172A",
          700: "#13233F",
          600: "#1C3156",
        },
        clinical: {
          cyan: "#00F2FE",
          teal: "#0EA5E9",
          glow: "rgba(0, 242, 254, 0.18)",
          dim: "#0284C7",
        },
        recovery: {
          mint: "#10B981",
          emerald: "#06D6A0",
          glow: "rgba(16, 185, 129, 0.2)",
        },
        pain: {
          crimson: "#EF4444",
          amber: "#F59E0B",
          glow: "rgba(239, 68, 68, 0.22)",
        },
        aries: {
          coral: "#FF4D4D",
          ruby: "#E11D48",
        },
        border: "rgba(255, 255, 255, 0.08)",
        card: {
          DEFAULT: "rgba(13, 23, 42, 0.7)",
          hover: "rgba(19, 35, 63, 0.85)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "clinical-glow": "0 0 40px -10px rgba(0, 242, 254, 0.3)",
        "pain-glow": "0 0 40px -10px rgba(239, 68, 68, 0.3)",
        "recovery-glow": "0 0 40px -10px rgba(16, 185, 129, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "breath-subtle": "breath 6s ease-in-out infinite",
        "glow-flow": "glowFlow 3s ease infinite alternate",
      },
      keyframes: {
        breath: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(1.02)", opacity: "1" },
        },
        glowFlow: {
          "0%": { filter: "drop-shadow(0 0 8px rgba(0,242,254,0.3))" },
          "100%": { filter: "drop-shadow(0 0 22px rgba(0,242,254,0.7))" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
