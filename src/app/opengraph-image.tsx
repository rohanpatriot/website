import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "@huntsyea — Growing ideas and people.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          backgroundColor: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#737373",
            marginBottom: 32,
          }}
        >
          @huntsyea
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            color: "#000000",
            maxWidth: "14ch",
          }}
        >
          Growing ideas and people.
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: "#737373",
          }}
        >
          Business &amp; Product Leader
        </div>
      </div>
    ),
    { ...size }
  );
}
