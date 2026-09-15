import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B1220",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #00C2FF 0%, #00C2FF 100%)",
              color: "white",
              fontSize: 26,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            S
          </div>
          <div style={{ display: "flex", color: "white", fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>
            SANESTIX ACADEMY
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ display: "flex", color: "white", fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
            Learn AI. Build Real Systems.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.1,
              backgroundImage: "linear-gradient(135deg, #00C2FF 0%, #00C2FF 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Get Paid.
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 32, color: "#9AA5B4", fontSize: 24 }}>
          2-month weekend cohort &bull; Real projects &bull; Client acquisition
        </div>
      </div>
    ),
    { ...size }
  );
}
