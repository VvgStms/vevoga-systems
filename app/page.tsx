"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Shield,
  Workflow,
  Store,
  Factory,
  Sparkles,
} from "lucide-react";

const fadeUp: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const pillars = [
  {
    icon: Sparkles,
    title: "Klare Systeme",
    text: "Moderne Assistenzlösungen mit Fokus auf Verständlichkeit, Nutzen und Wirkung im Alltag.",
  },
  {
    icon: Shield,
    title: "Professioneller Auftritt",
    text: "Keine Spielerei, kein Hype, sondern ein hochwertiger Auftritt für reale betriebliche Herausforderungen.",
  },
  {
    icon: Workflow,
    title: "Praxisnah entwickelt",
    text: "Entstanden aus echten Problemstellungen aus Industrie und Handel – mit Blick auf schnelle Anwendbarkeit.",
  },
];

const industrialPoints = [
  "Weniger Zeitverlust durch Nachfragen und Suchen",
  "Schnellere Verfügbarkeit von entscheidendem Wissen",
  "Entlastung bei Personalwechsel und Einarbeitung",
  "Mehr Stabilität im täglichen Ablauf",
];

const retailPoints = [
  "Schnellere Orientierung im Markt",
  "Höhere Kundenzufriedenheit",
  "Weniger Suchfrust im Einkaufsalltag",
  "Neue Einblicke in reale Kundenbedürfnisse",
];

const advantages = [
  {
    title: "Schnell nutzbar",
    text: "Informationen sollen in kurzer Zeit verfügbar sein – ohne unnötige Umwege.",
  },
  {
    title: "Intuitiv aufgebaut",
    text: "Die Nutzung ist verständlich aufgebaut und auf einen klaren praktischen Mehrwert ausgerichtet.",
  },
  {
    title: "Praxisorientiert gedacht",
    text: "Die Systeme entstehen nicht aus Theorie, sondern aus realen Herausforderungen im Arbeitsalltag.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-white/55 backdrop-blur">
      {children}
    </div>
  );
}

function BrandMark() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <motion.div
        className="absolute inset-[-10px] rounded-[22px] bg-[radial-gradient(circle,rgba(99,102,241,0.55),transparent_70%)] blur-[14px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-[-4px] rounded-[18px] bg-[radial-gradient(circle,rgba(139,92,246,0.5),transparent_75%)] blur-[10px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 rounded-[14px] bg-[linear-gradient(135deg,#6366f1_0%,#8b5cf6_55%,#34d399_100%)] shadow-[0_0_30px_rgba(99,102,241,0.45)]"
        animate={{ y: [-2, 3, -2] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10 flex h-10 w-10 items-center justify-center text-[18px] font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
        animate={{ y: [-2, 3, -2] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      >
        V
      </motion.div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_12px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
        <Icon className="h-5 w-5 text-white/80" />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/65">{text}</p>
    </div>
  );
}

function SolutionCard({
  icon: Icon,
  label,
  title,
  text,
  points,
  closing,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  title: string;
  text: string;
  points: string[];
  closing: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0f1117]/90 p-8 shadow-[0_18px_80px_rgba(0,0,0,0.35)] md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
            <Icon className="h-5 w-5 text-white/80" />
          </div>
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">{label}</div>
        </div>
        <h3 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-[2rem]">
          {title}
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">{text}</p>
        <div className="mt-8 grid gap-3">
          {points.map((point) => (
            <div
              key={point}
              className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-white/72"
            >
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-white/45" />
              <span>{point}</span>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg font-medium tracking-tight text-white/92">{closing}</p>
      </div>
    </div>
  );
}

export default function VevogaSystemsLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    area: "Industrial Solution",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Vevoga Systems – ${formData.area}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || "-"}\nUnternehmen: ${formData.company || "-"}\nE-Mail: ${formData.email || "-"}\nBereich: ${formData.area}\n\nNachricht:\n${formData.message || "-"}`
    );
    return `mailto:info@vevoga-systems.de?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = mailtoHref;
    setStatus("success");
  };

  return (
    <div
      className="min-h-screen overflow-x-hidden bg-[#06070b] text-white antialiased"
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(180deg,#0a0c11_0%,#06070b_45%,#07090d_100%)]" />
      <motion.div
        className="pointer-events-none fixed -z-10 h-80 w-80 rounded-full bg-white/10 blur-[120px]"
        animate={{ x: cursor.x - 160, y: cursor.y - 160 }}
        transition={{ type: "spring", damping: 30, stiffness: 120, mass: 0.6 }}
      />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_22%),radial-gradient(circle_at_85%_10%,rgba(120,119,198,0.16),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.06]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06070b]/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div className="text-sm font-semibold tracking-[0.28em] text-white">VEVOGA SYSTEMS</div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#why" className="transition hover:text-white">
              Warum Vevoga?
            </a>
            <a href="#pilot" className="transition hover:text-white">
              Pilot
            </a>
            <a href="#contact" className="transition hover:text-white">
              Kontakt
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.08]"
          >
            Kontakt
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-28 md:px-10 lg:px-12 lg:py-36">
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute left-1/2 top-6 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/10 blur-[145px]"
              animate={{ opacity: [0.34, 0.72, 0.34], scale: [0.94, 1.08, 0.94] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <motion.div {...fadeUp} className="mx-auto max-w-5xl text-center">
            <SectionEyebrow>Vevoga Systems</SectionEyebrow>
            <motion.h1
              className="mt-8 bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-5xl font-semibold leading-[1.02] tracking-tight text-transparent md:text-7xl lg:text-[5.25rem]"
              animate={{ backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "100% 220%" }}
            >
              Wissen verfügbar machen. Prozesse beschleunigen.
              <br />
              Für Industrie und Einzelhandel
            </motion.h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/62 md:text-xl">
              Wenn Zeit verloren geht durch Suchen, Nachfragen oder fehlende Orientierung, entsteht
              Stillstand. Vevoga Systems schafft sofortigen Zugriff auf das, was wirklich gebraucht wird –
              genau im richtigen Moment.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b0d12] shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Jetzt Lösung ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/25 hover:bg-white/[0.08]"
              >
                Pilot anfragen
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-3"
          >
            {pillars.map((pillar) => (
              <InfoCard key={pillar.title} icon={pillar.icon} title={pillar.title} text={pillar.text} />
            ))}
          </motion.div>
        </section>

        <section id="solutions" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Solutions</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/58">
              Zwei fokussierte Lösungen für reale operative Herausforderungen.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              {...fadeUp}
              whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
              transition={{ duration: 0.35 }}
              className="[transform-style:preserve-3d]"
            >
              <SolutionCard
                icon={Factory}
                label="Industrial Solution"
                title="Wissen verfügbar machen. Prozesse stabilisieren. Zeit sparen."
                text="In vielen Unternehmen entsteht entscheidendes Wissen nicht in Dokumentationen, sondern im Alltag. Über Jahre aufgebaut – und oft nur bei wenigen Personen vorhanden. Wenn dieses Wissen fehlt, entstehen Verzögerungen, Unsicherheiten und unnötige Stillstände. Vevoga Systems ermöglicht einen schnellen Zugriff auf relevantes Erfahrungs- und Prozesswissen – genau dort, wo es benötigt wird."
                points={industrialPoints}
                closing="Wissen, das verfügbar ist, wirkt."
              />
            </motion.div>

            <motion.div
              {...fadeUp}
              whileHover={{ y: -6, rotateX: -1.2, rotateY: 1.2 }}
              transition={{ duration: 0.35 }}
              className="[transform-style:preserve-3d]"
            >
              <SolutionCard
                icon={Store}
                label="Retail Solution"
                title="Produktsuche vereinfachen. Kundenzufriedenheit steigern. Verhalten verstehen."
                text="Im stationären Einzelhandel entscheidet oft ein einfacher Faktor über den Kauf: Wird das gesuchte Produkt gefunden – oder nicht. Lange Suchzeiten, volle Märkte und fehlende Orientierung führen schnell zu Frust und Kaufabbrüchen. Vevoga Systems ermöglicht eine schnelle und einfache Produktsuche im Markt und schafft gleichzeitig neue Einblicke in das tatsächliche Suchverhalten der Kundschaft."
                points={retailPoints}
                closing="Nicht nur Verkäufe zählen – sondern auch die Suche davor."
              />
            </motion.div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Warum Vevoga?</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
              Vevoga Systems steht für Klarheit, Einfachheit und echte Anwendbarkeit im Alltag.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-14 grid gap-6 md:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="h-px w-14 bg-gradient-to-r from-white/70 to-transparent transition duration-300 group-hover:w-24" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/64">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <section id="pilot" className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12 lg:py-12">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.05] p-8 shadow-[0_22px_90px_rgba(0,0,0,0.35)] md:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_26%)]" />
            <div className="relative max-w-4xl">
              <SectionEyebrow>Pilotprojekte</SectionEyebrow>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
                Gemeinsam im realen Einsatz weiterentwickeln
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/66">
                Aktuell suchen wir gezielt Unternehmen, die moderne Lösungen unter realen Bedingungen
                einsetzen und gemeinsam weiterentwickeln möchten. Im Fokus stehen Betriebe, die konkrete
                Herausforderungen nicht nur verwalten, sondern strukturiert lösen wollen – mit klarer
                Rückmeldung aus dem tatsächlichen Einsatz.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b0d12] transition hover:-translate-y-0.5"
              >
                Pilotmöglichkeit anfragen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <motion.div
              {...fadeUp}
              className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.3)] md:p-10"
            >
              <SectionEyebrow>Kontakt</SectionEyebrow>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
                Lassen Sie uns über Ihr Vorhaben sprechen
              </h2>
              <p className="mt-6 text-base leading-8 text-white/64">
                Für Anfragen, Pilotprojekte oder weitere Informationen erreichen Sie uns direkt per E-Mail
                oder über das Kontaktformular.
              </p>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-[#0f1218] p-5">
                <div className="flex items-center gap-3 text-white/85">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em] text-white/45">E-Mail</span>
                </div>
                <a
                  href="mailto:info@vevoga-systems.de"
                  className="mt-3 block text-lg font-medium tracking-tight text-white transition hover:text-white/80"
                >
                  info@vevoga-systems.de
                </a>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="relative rounded-[32px] border border-white/10 bg-[#0d1015] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.34)] md:p-10"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)]" />
              <form onSubmit={handleSubmit} className="relative grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-white/68">
                    Name
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr Name"
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/[0.06]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-white/68">
                    Unternehmen
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ihr Unternehmen"
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/[0.06]"
                    />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-white/68">
                    E-Mail
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      required
                      placeholder="name@unternehmen.de"
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/[0.06]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm text-white/68">
                    Bereich
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition focus:border-white/25 focus:bg-white/[0.06]"
                    >
                      <option className="bg-[#0d1015]">Industrial Solution</option>
                      <option className="bg-[#0d1015]">Retail Solution</option>
                      <option className="bg-[#0d1015]">Allgemeine Anfrage</option>
                    </select>
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-white/68">
                  Nachricht
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    required
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben oder Ihre Anfrage."
                    className="resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-white/28 focus:border-white/25 focus:bg-white/[0.06]"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="max-w-md text-xs leading-6 text-white/42">
                      Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Anfrage zur Kontaktaufnahme zu.
                    </p>
                    {status === "success" && (
                      <p className="mt-2 text-xs leading-6 text-white/62">
                        Ihre E-Mail-Anwendung wurde geöffnet. Prüfen Sie den vorausgefüllten Entwurf und
                        senden Sie ihn ab.
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b0d12] transition hover:-translate-y-0.5 hover:scale-[1.02]"
                  >
                    Anfrage senden
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10">
  <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-white/40 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
    
    <div>© 2026 Vevoga Systems</div>

    <div className="flex items-center gap-6">
      <a href="#contact" className="transition hover:text-white/70">
        Kontakt
      </a>
      <a href="/impressum" className="transition hover:text-white/70">
        Impressum
      </a>
      <a href="/datenschutz" className="transition hover:text-white/70">
        Datenschutz
      </a>
    </div>

  </div>
</footer>

</div>
);
}