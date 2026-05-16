import { ImageResponse } from "next/og";

export const alt =
  "Kriven AI — The AI sales engine for Indian real estate builders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#faf9f6",
          padding: "96px",
          borderBottom: "16px solid #d9583e",
        }}
      >
        {/* Coral accent dash */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: 64,
              height: 8,
              background: "#d9583e",
              borderRadius: 999,
            }}
          />
        </div>

        {/* Wordmark — Kriven (dark) + AI (coral) */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginTop: 34,
            fontSize: 130,
            fontWeight: 800,
            letterSpacing: "-0.045em",
          }}
        >
          <div style={{ display: "flex", color: "#1a1817" }}>Kriven</div>
          <div style={{ display: "flex", color: "#d9583e", marginLeft: 24 }}>
            AI
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 29,
            fontWeight: 600,
            letterSpacing: "0.26em",
            color: "#8e8a82",
          }}
        >
          REAL ESTATE INTELLIGENCE
        </div>

        {/* Value proposition */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 62,
            fontSize: 43,
            fontWeight: 600,
            lineHeight: 1.32,
          }}
        >
          <div style={{ display: "flex", color: "#1a1817" }}>
            Every step of the real estate sale.
          </div>
          <div style={{ display: "flex", color: "#5c5851" }}>
            One platform, built for Indian builders.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: 60,
            fontSize: 27,
            color: "#8e8a82",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 9,
              height: 9,
              borderRadius: 999,
              background: "#d9583e",
            }}
          />
          realty-website.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
