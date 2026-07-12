import { ImageResponse } from "next/og";

export const runtime = "edge";

// Dynamic Open Graph / share-card generator. Pages reference it via metadata:
//   openGraph: { images: ["/og?title=...&category=..."] }
// so every page gets a branded share card with its own title.
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") ?? "Kriven AI").slice(0, 140);
  const category = searchParams.get("category") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 11,
              background: "linear-gradient(135deg,#e87a5f,#b9421a)",
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 700, color: "#1a1817" }}>
            Kriven AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {category ? (
            <div
              style={{
                fontSize: 24,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#d9583e",
                marginBottom: 22,
              }}
            >
              {category}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#1a1817",
              maxWidth: 1010,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#6b6760" }}>
          The AI sales engine for Indian real estate · kriven.ai
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
