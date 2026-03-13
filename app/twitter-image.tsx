import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top left, rgba(56,189,248,0.28), transparent 24%), radial-gradient(circle at 80% 18%, rgba(16,185,129,0.22), transparent 24%), linear-gradient(135deg, #fffdf8 0%, #fff4e6 100%)",
          color: "#08111f",
          fontFamily: "sans-serif",
          padding: "48px",
          position: "relative"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "20px",
                background: "#08111f",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 800,
                letterSpacing: "0.16em"
              }}
            >
              AI
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "20px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0f766e", fontWeight: 700 }}>
                AI Chat Exporter
              </div>
              <div style={{ fontSize: "24px", color: "#334155" }}>Export ChatGPT, Gemini, Claude and Perplexity chats</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: "860px" }}>
            <div style={{ fontSize: "74px", lineHeight: 1.02, fontWeight: 800 }}>
              PDF, Markdown, screenshots, and code extraction.
            </div>
            <div style={{ marginTop: "20px", fontSize: "30px", lineHeight: 1.4, color: "#475569" }}>
              Fast, privacy-friendly, and built for modern AI workflows.
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "26px" }}>
              {[
                "Local-first",
                "One-click export",
                "4 AI platforms"
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "999px",
                    border: "1px solid rgba(8,17,31,0.08)",
                    background: "rgba(255,255,255,0.82)",
                    padding: "10px 18px",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0f172a"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
