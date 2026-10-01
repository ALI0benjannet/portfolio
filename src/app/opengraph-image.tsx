import { ImageResponse } from "next/og";

// Image affichée quand le lien du portfolio est partagé (LinkedIn, WhatsApp, X…).
export const alt = "Ali Ben Jannet — Data Science & AI Engineering Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const tags = ["LLM Agents", "Vision-Language", "Deep Learning", "FastAPI", "Next.js"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1e1f29 0%, #282a36 55%, #3a2f2a 100%)",
          color: "#f8f8f2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 32,
              border: "3px solid #ffb86c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              color: "#ffb86c",
            }}
          >
            ABJ
          </div>
          <div style={{ fontSize: 28, color: "#bfbfd0" }}>alibenjannet.vercel.app</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>Ali Ben Jannet</div>
          <div style={{ fontSize: 40, color: "#ffb86c", marginTop: 16, fontWeight: 600 }}>
            Data Science & AI Engineering Student
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {tags.map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 24,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,184,108,0.45)",
                color: "#f8f8f2",
                background: "rgba(255,184,108,0.08)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
