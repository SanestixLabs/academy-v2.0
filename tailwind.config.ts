import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0F172A", // primary text / headings
          soft: "#475569", // secondary text
          muted: "#64748B", // tertiary text
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC", // section backgrounds
          raised: "#FFFFFF",
          border: "#E2E8F0",
        },
        brand: {
          cyan: "#10B981",
          blue: "#059669",
          deep: "#04432C", 
          50: "#ECFDF5",
          100: "#D1FAE5",
          mint: "#86EFAC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.12) 100%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.10)",
        button: "0 8px 20px -6px rgba(16,185,129,0.45)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
