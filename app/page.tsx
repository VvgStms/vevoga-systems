"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Mail,
  Shield,
  Workflow,
  Store,
  Factory,
  Sparkles,
  Smartphone,
  BarChart3,
  FileSpreadsheet,
  Search,
  MessageSquare,
  Cpu,
  Boxes,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.2 },
};

const splitCards = [
  {
    id: "retail",
    icon: Store,
    eyebrow: "Retail System",
    title: "Ihr Kunde sucht. Findet nicht. Geht.",
    text: "Jede fehlgeschlagene Suche ist ein verlorener Kauf — still, unsichtbar, täglich. Das Retail System macht beides sichtbar: den Weg für Ihren Kunden, die Lücken für Sie.",
    cta: "Retail System entdecken",
  },
  {
    id: "knowledge",
    icon: Factory,
    eyebrow: "Knowledge System",
    title: "Wissen, das nur im Kopf eines Einzigen steckt, ist kein Wissen — es ist ein Risiko.",
    text: "Ob Azubi, Spätschicht oder neuer Kollege — das Knowledge System gibt sofort die richtige Antwort. Auch wenn der Experte gerade nicht da ist.",
    cta: "Knowledge System entdecken",
  },
];

const retailFeatures = [
  {
    icon: Smartphone,
    title: "Kein Download. Keine Anmeldung. Einfach scannen.",
    text: "Jeder Kunde — egal wie alt, egal mit welchem Handy — ist sofort drin. Keine Erklärung nötig. Keine Hürde.",
  },
  {
    icon: Search,
    title: "Direkt zum Regal. Ohne Personal. Ohne Umwege.",
    text: "Kein Personal fragen. Kein langes Suchen. Der Kunde findet alleine — und das merkt er.",
  },
  {
    icon: BarChart3,
    title: "Null-Treffer sind keine Statistik — sie sind entgangener Umsatz.",
    text: "Das Dashboard zeigt Ihnen täglich: Was suchen Kunden — und finden es nicht? Genau das gehört ins Sortiment.",
  },
  {
    icon: FileSpreadsheet,
    title: "In einer Stunde einsatzbereit. Heute noch.",
    text: "Produktliste per CSV oder Excel importieren, QR-Code aufhängen — fertig. Keine IT-Abteilung. Kein Aufwand.",
  },
];

const knowledgeFeatures = [
  {
    icon: MessageSquare,
    title: "Experte krank. Spätschicht. Niemand erreichbar. Kein Problem.",
    text: "Fehlerbild eingeben — Ursache und Lösung sofort. Kein Warten. Kein Anruf. Kein Raten.",
  },
  {
    icon: Workflow,
    title: "Derselbe Fehler zum dritten Mal? Nie wieder.",
    text: "Wiederkehrende Fehlerbilder werden einmal gelöst und dauerhaft hinterlegt — damit niemand mehr von vorne anfangen muss.",
  },
  {
    icon: Boxes,
    title: "Auch der Azubi findet sofort die richtige Antwort.",
    text: "Schritt für Schritt durch jeden Prozess — präzise, produktbezogen, für jeden verständlich. Ohne auf jemanden warten zu müssen.",
  },
  {
    icon: Cpu,
    title: "Ihr bester Mann geht bald in Rente. Sein Wissen bleibt.",
    text: "Was jahrelang nur im Kopf einer Person steckte, wird gesichert — bevor sie geht. Nicht danach.",
  },
];

const advantages = [
  {
    title: "Kein Konzept. Ein Ergebnis.",
    text: "Sie sehen sofort was es bringt — keine langen Präsentationen, keine Versprechen auf Papier.",
  },
  {
    title: "Jeder kann es — sofort.",
    text: "Keine Schulung. Keine IT-Kenntnisse. Keine Geduld nötig. Im Markt wie im Betrieb.",
  },
  {
    title: "Aus der Praxis — nicht aus dem Labor.",
    text: "Entwickelt an echten Problemen aus Einzelhandel und Fertigung. Nicht am Whiteboard.",
  },
];

const retailShowcase = [
  {
    src: "/retail-kundenansicht.png",
    eyebrow: "Kundenansicht",
    title: "Produkt gefunden — der Kunde sieht sofort wo es steht.",
    text: "Gang, Regal und Ebene auf einen Blick — klar, direkt, ohne Erklärung.",
  },
  {
    src: "/retail-statistik.png",
    eyebrow: "Statistik",
    title: "Wie viele Kunden haben heute nicht gefunden, was sie gesucht haben?",
    text: "Das Dashboard macht sichtbar, wie häufig gesucht wird und wie hoch die Treffer- oder Nulltrefferquote im Markt ist.",
  },
  {
    src: "/retail-analyse.png",
    eyebrow: "Analyse",
    title: "Nicht was verkauft wurde — sondern was gesucht und nicht gefunden wurde.",
    text: "Treffer und Nulltreffer lassen sich über Zeiträume vergleichen — für bessere Entscheidungen im Sortiment.",
  },
  {
    src: "/retail-produkte.png",
    eyebrow: "Verwaltung",
    title: "Ihre Produkte rein — System läuft. Heute noch.",
    text: "Produktdaten, Gänge, Regale und Kategorien werden zentral gepflegt und schnell übernommen. Dies ist ein Ausschnitt. Das vollständige System zeigen wir Ihnen gerne persönlich.",
  },
];

const knowledgeShowcase = [
  {
    src: "/knowledge-barcode.png",
    eyebrow: "Fehlerbeschreibung",
    title: "Problem beschreiben — Lösung sofort. Kein Anruf beim Kollegen.",
    text: "Ein Fehlerbild wie „Barcode nicht lesbar“ wird direkt mit Ursache und Maßnahme beantwortet — verständlich und umsetzbar.",
  },
  {
    src: "/knowledge-prozess.png",
    eyebrow: "Prozessdarstellung",
    title: "Auch der neue Kollege findet sich vom ersten Tag an zurecht.",
    text: "Auch längere Prozessbeschreibungen bleiben strukturiert und produktbezogen abrufbar — genau dort, wo das Wissen gebraucht wird. Dies ist ein Ausschnitt. Das vollständige System zeigen wir Ihnen gerne persönlich.",
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

function FeatureCard({
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

function SplitCard({
  icon: Icon,
  eyebrow,
  title,
  text,
  cta,
  id,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  text: string;
  cta: string;
  id: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_80px_rgba(0,0,0,0.3)] md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
          <Icon className="h-5 w-5 text-white/80" />
        </div>
        <div className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
          {eyebrow}
        </div>
        <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/66">{text}</p>
        <a
          href={`#${id}`}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#0b0d12] transition duration-300 hover:-translate-y-0.5"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function ShowcaseRow({
  src,
  eyebrow,
  title,
  text,
  reverse = false,
}: {
  src: string;
  eyebrow: string;
  title: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className={reverse ? "lg:order-2" : ""}>
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1015] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
          <img src={src} alt={title} className="block h-auto w-full" />
        </div>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-white/40">
          {eyebrow}
        </div>
        <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
          {title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-8 text-white/66">{text}</p>
      </div>
    </div>
  );
}

export default function VevogaSystemsLandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    area: "Retail System",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        area: "Retail System",
        message: "",
      });
    } catch {
      setStatus("error");
    }
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
            <div className="text-sm font-semibold tracking-[0.28em] text-white">
              VEVOGA SYSTEMS
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a href="#retail" className="transition hover:text-white">
              Retail
            </a>
            <a href="#knowledge" className="transition hover:text-white">
              Knowledge
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
              className=className="mt-8 bg-gradient-to-b from-white via-white to-white/55 bg-clip-text text-4xl font-semibold leading-[1.08] tracking-tight text-transparent md:text-5xl lg:text-[3.75rem]"
              animate={{ backgroundPosition: ["50% 0%", "50% 100%", "50% 0%"] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "100% 220%" }}
            >
              Was Ihr Kunde nicht findet, kauft er woanders.
              <br />
              Was Ihr Mitarbeiter weiß, geht verloren — wenn niemand es sichert.
            </motion.h1>
            <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/62 md:text-xl">
              Zwei stille Kostentreiber. Beide lösbar — ohne App, ohne IT-Projekt, ohne großen Aufwand.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#retail"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b0d12] shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Retail System entdecken
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#knowledge"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/25 hover:bg-white/[0.08]"
              >
                Knowledge System entdecken
              </a>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-10 md:px-10 lg:px-12 lg:pb-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {splitCards.map((card) => (
              <motion.div key={card.id} {...fadeUp}>
                <SplitCard {...card} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="retail" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28">
          <motion.div {...fadeUp} className="max-w-3xl">
            <SectionEyebrow>Retail System</SectionEyebrow>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Der Kassenbon zeigt, was verkauft wurde. Nicht was verloren ging.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Kunden, die nichts finden, beschweren sich nicht — sie gehen einfach. Ohne Spur, ohne Feedback. Das Retail System führt sie in Sekunden zum Produkt. Und zeigt Ihnen jeden Tag: Was wird gesucht? Was wird nicht gefunden? Wo liegt bares Geld brach?
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {retailFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>

          <div className="mt-20 grid gap-20">
            {retailShowcase.map((item, index) => (
              <motion.div key={item.title} {...fadeUp}>
                <ShowcaseRow {...item} reverse={index % 2 === 1} />
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.3)] md:p-10"
          >
            <div className="max-w-3xl">
              <h3 className="text-3xl font-semibold tracking-tight">
                Mehr Umsatz kommt nicht immer von mehr Werbung. Manchmal reicht es, wenn der Kunde findet, was er sucht.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/64">
                In jeder Sprache. Ohne App. Ohne Erklärung. Und Sie sehen endlich, was Ihnen bisher täglich entgangen ist.
              </p>
            </div>
          </motion.div>
        </section>

        <section
          id="knowledge"
          className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-28"
        >
          <motion.div {...fadeUp} className="max-w-3xl">
            <SectionEyebrow>Knowledge System</SectionEyebrow>
            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
              In jedem Betrieb gibt es Wissen, das nirgends steht — und trotzdem alles am Laufen hält.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Der Experte ist krank — die Maschine steht. Der Azubi steht alleine vor einem Problem — niemand ist erreichbar. Derselbe Fehler passiert zum dritten Mal — weil die Lösung nirgends steht. Das Knowledge System macht Schluss damit: Prozesswissen, Fehlerbilder und Abläufe — strukturiert, abrufbar, für jeden.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {knowledgeFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>

          <div className="mt-20 grid gap-20">
            {knowledgeShowcase.map((item, index) => (
              <motion.div key={item.title} {...fadeUp}>
                <ShowcaseRow {...item} reverse={index % 2 === 1} />
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="mt-20 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.3)] md:p-10"
          >
            <div className="max-w-3xl">
              <h3 className="text-3xl font-semibold tracking-tight">
                Das Teuerste, was ein Betrieb verlieren kann, ist nicht die Maschine. Es ist das Wissen, wie man sie repariert.
              </h3>
              <p className="mt-5 text-base leading-8 text-white/64">
                Kein IT-Projekt. Kein Umbau. Das System lernt das Wissen Ihres Betriebs — und gibt es weiter, wann immer es gebraucht wird.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12 lg:py-16">
          <motion.div {...fadeUp} className="grid gap-6 md:grid-cols-3">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_70px_rgba(0,0,0,0.28)] transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="h-px w-14 bg-gradient-to-r from-white/70 to-transparent transition duration-300 group-hover:w-24" />
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
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
                Sie haben ein echtes Problem. Wir haben die Lösung. Testen wir es.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/66">
                Kein langer Vertrag. Kein IT-Projekt. Sie bringen Ihr Problem — wir bringen das System. Direkt, schnell, ohne Bürokratie.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b0d12] transition hover:-translate-y-0.5"
              >
                Pilot anfragen
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
                Sprechen wir über Ihr Problem — nicht über Technik.
              </h2>
              <p className="mt-6 text-base leading-8 text-white/64">
                Kurzes Gespräch. Ehrliche Einschätzung. Kein Verkaufsgespräch.
              </p>

              <div className="mt-8 rounded-[24px] border border-white/10 bg-[#0f1218] p-5">
                <div className="flex items-center gap-3 text-white/85">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm uppercase tracking-[0.2em] text-white/45">
                    E-Mail
                  </span>
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
                      <option className="bg-[#0d1015]">Retail System</option>
                      <option className="bg-[#0d1015]">Knowledge System</option>
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
                      Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Anfrage zur
                      Kontaktaufnahme zu.
                    </p>

                    {status === "loading" && (
                      <p className="mt-2 text-xs leading-6 text-white/62">
                        Anfrage wird gesendet...
                      </p>
                    )}

                    {status === "success" && (
                      <p className="mt-2 text-xs leading-6 text-green-400">
                        Anfrage erfolgreich gesendet.
                      </p>
                    )}

                    {status === "error" && (
                      <p className="mt-2 text-xs leading-6 text-red-400">
                        Versand fehlgeschlagen. Bitte versuchen Sie es erneut.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0b0d12] transition hover:-translate-y-0.5 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
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