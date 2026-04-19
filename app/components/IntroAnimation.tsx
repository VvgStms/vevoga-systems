"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./intro-animation.css";

const WORDS = ["Innovation", "Effizienz", "Entlastung", "Struktur"];
const WORD_DUR = 950;
const WORD_GAP = 80;

function delay(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}

type VPhase = "rising" | "floating" | "exiting";
type GlowPhase = "off" | "pulse" | "explode";

export default function IntroAnimation() {
  const [done, setDone] = useState(false);
  const [flash, setFlash] = useState(false);
  const [ambientOn, setAmbientOn] = useState(false);

  // Word stage
  const [wordText, setWordText] = useState("");
  const [wordKey, setWordKey] = useState(0);

  // Glow – key trick re-mounts the div → restarts CSS animation
  const [glowKey, setGlowKey] = useState(0);
  const [glowPhase, setGlowPhase] = useState<GlowPhase>("off");

  // V phases
  const [vPhase, setVPhase] = useState<VPhase>("rising");

  // Company name
  const [showCompany, setShowCompany] = useState(false);

  const pulse = () => {
    setGlowPhase("pulse");
    setGlowKey((k) => k + 1);
  };

  useEffect(() => {
    async function run() {
      // V rises (1.6 s animation in CSS)
      await delay(1650);

      setAmbientOn(true);
      pulse();
      await delay(500);

      // Words one by one
      for (let i = 0; i < WORDS.length; i++) {
        setWordText(WORDS[i]);
        setWordKey((k) => k + 1);
        pulse();
        await delay(WORD_DUR + WORD_GAP);
      }

      // Clear word → show company name
      setWordText("");
      setShowCompany(true);
      pulse();

      await delay(600);
      setVPhase("floating");

      // Float for 1.8 s, then begin exit
      await delay(1800);

      setShowCompany(false);
      setGlowPhase("explode");
      setGlowKey((k) => k + 1);
      setVPhase("exiting");

      // White flash at peak of fly-at
      await delay(520);
      setFlash(true);
      await delay(180);
      setFlash(false);

      await delay(350);
      setDone(true);
    }

    run();
  }, []);

  if (done) return null;

  const sceneClass = [
    vPhase === "floating" ? "intro-scene-floating" : "",
    vPhase === "exiting" ? "intro-scene-exiting" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const glowOuterClass = [
    "intro-glow-outer",
    glowPhase === "pulse" ? "intro-glow-outer-pulse" : "",
    glowPhase === "explode" ? "intro-glow-outer-explode" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const glowInnerClass = [
    "intro-glow-inner",
    glowPhase === "pulse" ? "intro-glow-inner-pulse" : "",
    glowPhase === "explode" ? "intro-glow-inner-explode" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* White flash */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] bg-white"
        style={{ opacity: flash ? 1 : 0, transition: "opacity 0.18s ease" }}
      />

      {/* Main overlay */}
      <div className="intro-overlay fixed inset-0 z-[9998] flex items-center justify-center overflow-hidden bg-[#06070b]">
        {/* Ambient radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)",
            opacity: ambientOn ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />

        <div
          className="flex flex-col items-center"
          style={{ perspective: "800px" }}
        >
          {/* Word stage */}
          <div className="intro-word-stage">
            <AnimatePresence>
              {wordText && (
                <span key={wordKey} className="intro-word intro-word-ignite">
                  {wordText}
                </span>
              )}
            </AnimatePresence>
          </div>

          {/* Brandmark */}
          <div
            className={sceneClass}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="intro-brand-wrap"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div key={`go-${glowKey}`} className={glowOuterClass} />
              <div key={`gi-${glowKey}`} className={glowInnerClass} />
              <div className="intro-brand-face">V</div>
            </div>
          </div>

          {/* Company name */}
          <AnimatePresence>
            {showCompany && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="intro-company-name"
              >
                Vevoga Systems
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
