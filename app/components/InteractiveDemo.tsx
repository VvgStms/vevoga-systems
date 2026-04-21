"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Hotspot {
  hx: number; // position on image in %
  hy: number;
  zx: number; // zoom-origin in %
  zy: number;
  zoom: number;
  title: string;
  desc: string;
}

interface DemoConfig {
  img: string;
  url: string;
  spots: Hotspot[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export default function InteractiveDemo({ config }: { config: DemoConfig }) {
  const [active, setActive] = useState<number | null>(null);

  const spot = active !== null ? config.spots[active] : null;

  function prev() {
    if (active === null) return;
    setActive((active - 1 + config.spots.length) % config.spots.length);
  }
  function next() {
    if (active === null) return;
    setActive((active + 1) % config.spots.length);
  }

  return (
    <div className="grid items-stretch gap-0 overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] lg:grid-cols-[1fr_340px]">

      {/* ── LEFT: browser mockup ── */}
      <div className="relative bg-[#0f1117]">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#171b23] px-4 py-3">
          <div className="flex gap-[5px]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto rounded-md bg-white/[0.06] px-4 py-[3px] text-[10px] tracking-wide text-white/25">
            {config.url}
          </div>
        </div>

        {/* Screenshot + zoom */}
        <div className="relative overflow-hidden">
          {/* Zoomable image */}
          <motion.img
            src={config.img}
            alt=""
            className="block w-full"
            animate={
              spot
                ? {
                    scale: spot.zoom,
                    x: `calc(${50 - spot.zx}% * ${spot.zoom - 1} / ${spot.zoom})`,
                    y: `calc(${50 - spot.zy}% * ${spot.zoom - 1} / ${spot.zoom})`,
                  }
                : { scale: 1, x: 0, y: 0 }
            }
            transition={{ duration: 0.65, ease: EASE }}
            style={{ transformOrigin: "center center", willChange: "transform" }}
          />

          {/* Hotspot layer */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ pointerEvents: "none" }}
          >
            {config.spots.map((sp, i) => (
              <motion.button
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${sp.hx}%`,
                  top: `${sp.hy}%`,
                  pointerEvents: "all",
                }}
                animate={
                  active !== null && active !== i
                    ? { opacity: 0.2, scale: 0.8 }
                    : { opacity: 1, scale: 1 }
                }
                transition={{ duration: 0.3 }}
                onClick={() => setActive(i === active ? null : i)}
              >
                {/* Outer pulse rings */}
                <motion.span
                  className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/70"
                  animate={{ scale: [1, 2], opacity: [0.7, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/40"
                  animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />
                {/* Dot */}
                <motion.span
                  className="relative flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 shadow-[0_0_0_3px_rgba(99,102,241,0.3),0_0_14px_rgba(99,102,241,0.7)]"
                  animate={
                    i === active
                      ? { backgroundColor: "#a5b4fc", boxShadow: "0 0 0 3px rgba(165,180,252,0.4), 0 0 20px rgba(165,180,252,0.8)" }
                      : { backgroundColor: "#6366f1" }
                  }
                  whileHover={{ scale: 1.35 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* "Click a spot" hint */}
          <AnimatePresence>
            {active === null && (
              <motion.div
                className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/50 px-3 py-1 text-[10px] uppercase tracking-widest text-white/40 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Klicke auf eine markierte Stelle
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── RIGHT: info panel ── */}
      <div className="flex flex-col justify-between border-l border-white/[0.06] bg-[#0d1015] p-7">

        <AnimatePresence mode="wait">
          {active === null ? (
            /* Overview */
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5 h-full"
            >
              <div>
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/30">
                  Interaktive Demo
                </p>
                <p className="text-base font-semibold leading-snug text-white">
                  Erkunde die Oberfläche
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  Klicke auf eine der markierten Stellen im Screenshot.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {config.spots.map((sp, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-left text-sm text-white/55 transition duration-200 hover:border-indigo-500/40 hover:bg-indigo-500/[0.07] hover:text-white"
                  >
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-500/20 text-[10px] font-bold text-indigo-400">
                      {i + 1}
                    </span>
                    {sp.title}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Detail */
            <motion.div
              key={`detail-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col h-full"
            >
              <button
                onClick={() => setActive(null)}
                className="mb-6 flex items-center gap-2 text-[11px] font-medium uppercase tracking-widest text-white/30 transition hover:text-white/65"
              >
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="15,18 9,12 15,6" />
                </svg>
                Alle Bereiche
              </button>

              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-400/80">
                {String(active + 1).padStart(2, "0")} / {String(config.spots.length).padStart(2, "0")}
              </p>

              <h3 className="text-xl font-bold leading-snug tracking-tight text-white">
                {spot!.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {spot!.desc}
              </p>

              {/* Dot progress */}
              <div className="mt-6 flex gap-2">
                {config.spots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="h-[3px] rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 28 : 14,
                      background: i === active ? "rgba(99,102,241,0.9)" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>

              {/* Nav buttons */}
              <div className="mt-auto pt-8 flex gap-2">
                <button
                  onClick={prev}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-white/55 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <polyline points="15,18 9,12 15,6" />
                  </svg>
                  Zurück
                </button>
                <button
                  onClick={next}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/[0.12] px-4 py-2.5 text-xs font-semibold text-white/85 transition hover:border-indigo-500/55 hover:bg-indigo-500/25 hover:text-white"
                >
                  {active === config.spots.length - 1 ? "Von vorne" : "Weiter"}
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    {active === config.spots.length - 1
                      ? <><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 .49-4.5"/></>
                      : <polyline points="9,18 15,12 9,6" />
                    }
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
