"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
          color: "#000",
          backgroundColor: "#fff",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#737373",
              marginBottom: "1.5rem",
            }}
          >
            Error
          </p>
          <h1
            style={{
              fontSize: "clamp(2.25rem, 1.5rem + 3.5vw, 3.75rem)",
              fontWeight: 600,
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              marginTop: "1.5rem",
              maxWidth: "40ch",
              color: "#737373",
            }}
          >
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "3rem",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "1px solid #000",
              background: "transparent",
              padding: "0.5rem 1.5rem",
              cursor: "pointer",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
