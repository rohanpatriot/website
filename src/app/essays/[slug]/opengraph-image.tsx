import { ImageResponse } from "next/og";
import { getEssayBySlug, getEssaySlugs } from "@/lib/essays";

export const runtime = "nodejs";
export const alt = "Essay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getEssaySlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { meta } = getEssayBySlug(slug);

  const date = new Date(meta.date + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "40px 80px 80px",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#737373",
              marginBottom: 24,
            }}
          >
            {`${date} · ${meta.readingTime}`}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              color: "#000000",
              maxWidth: "20ch",
            }}
          >
            {meta.title}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 22,
              color: "#737373",
              maxWidth: "52ch",
            }}
          >
            {meta.description}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 80,
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#a3a3a3",
            }}
          >
            @huntsyea
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
