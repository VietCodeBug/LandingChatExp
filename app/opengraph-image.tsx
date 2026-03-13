import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(8,17,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(8,17,31,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(circle at center, black 28%, transparent 78%)"
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", zIndex: 1 }}>
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
              <div style={{ fontSize: "18px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#0f766e", fontWeight: 700 }}>
                AI Chat Exporter
              </div>
              <div style={{ fontSize: "22px", color: "#334155" }}>Chrome extension for AI conversations</div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", gap: "40px", alignItems: "flex-end" }}>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "720px" }}>
              <div style={{ fontSize: "72px", lineHeight: 1.02, fontWeight: 800 }}>
                Export AI chats beautifully.
              </div>
              <div style={{ marginTop: "20px", fontSize: "28px", lineHeight: 1.4, color: "#475569" }}>
                PDF, Markdown, Text, JSON, screenshots, and code extraction with local-first privacy.
              </div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "26px" }}>
                {[
                  "ChatGPT",
                  "Gemini",
                  "Claude",
                  "Perplexity",
                  "Local-first"
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

            <div
              style={{
                width: "300px",
                borderRadius: "32px",
                background: "#08111f",
                color: "white",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 24px 80px rgba(8,17,31,0.2)"
              }}
            >
              <div style={{ fontSize: "16px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#7dd3fc", fontWeight: 700 }}>
                Export kit
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px" }}>
                {["PDF", "MD", "TXT", "JSON"].map((format) => (
                  <div
                    key={format}
                    style={{
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "14px",
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: 700
                    }}
                  >
                    {format}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "18px", borderRadius: "22px", background: "rgba(255,255,255,0.08)", padding: "18px" }}>
                <div style={{ fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.16em", color: "#cbd5e1", fontWeight: 700 }}>
                  Privacy
                </div>
                <div style={{ marginTop: "10px", fontSize: "18px", lineHeight: 1.5, color: "#e2e8f0" }}>
                  No raw chat content sent to external servers during export.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
