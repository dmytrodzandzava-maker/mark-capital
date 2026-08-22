import { ImageResponse } from "next/og";

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
          justifyContent: "space-between",
          background: "#181818",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#ffffff",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#235e80", display: "flex" }} />
          MARK
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 950,
              display: "flex",
            }}
          >
            Making our MARK
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 28,
              lineHeight: 1.4,
              maxWidth: 820,
              display: "flex",
            }}
          >
            An independent real estate investment and asset manager, managing
            private real estate across Europe since 2004.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
