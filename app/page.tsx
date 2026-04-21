"use client";

import IntroAnimation from "./components/IntroAnimation";

export default function Page() {
  return (
    <>
      <IntroAnimation />
      <iframe
        src="/hero-demo.html"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
        }}
        title="Vevoga Systems"
      />
    </>
  );
}
