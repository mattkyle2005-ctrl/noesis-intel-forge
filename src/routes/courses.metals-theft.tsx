import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight, ArrowLeft, Download, CheckCircle2, Clock, Users, Award, MapPin,
  Search, Radio, Network, ClipboardList, Scale, Target, Zap, TrainFront, Building2,
  Mail, Phone, Plus, Minus, PhoneCall, Send, ShieldCheck, Loader2,
} from "lucide-react";
import heroImg from "@/assets/hero-v2.jpg";
import trainingImg from "@/assets/training.jpg";
import cableCourtImg from "@/assets/cable-courtroom.jpg";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/courses/metals-theft")({
  component: CoursePage,
  head: () => ({
    meta: [
      { title: "Intelligence-Led Metals Theft Investigations & Enforcement — Noesis" },
      { name: "description", content: "Flagship 5-day NQF-aligned programme. Full cycle: intelligence collection, analysis, lawful tactical operations, and courtroom-ready prosecution of metals theft." },
      { property: "og:title", content: "Intelligence-Led Metals Theft Investigations & Enforcement" },
      { property: "og:description", content: "The full operational cycle — from community tip to conviction — taught as one method." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const modules = [
  { icon: Search, n: "01", title: "Understand the crime", hours: "6 hrs",
    points: ["Illicit metals value chain from cable to export", "Syndicate typologies and modus operandi", "Legislative environment: SHGA, Criminal Matters Amendment Act, POCA"] },
  { icon: Radio, n: "02", title: "Collect the intelligence", hours: "10 hrs",
    points: ["Source handling and informant management", "OSINT tradecraft and digital footprint analysis", "Institutional intelligence: banks, second-hand dealers, FICA partners"] },
  { icon: Network, n: "03", title: "Analyse it properly", hours: "10 hrs",
    points: ["5×5×5 grading of source reliability and information", "Link-chart and network analysis workshops", "Geospatial pattern mapping and hotspot analysis"] },
  { icon: ClipboardList, n: "04", title: "Plan and execute lawfully", hours: "8 hrs",
    points: ["Mandate clarity: SAPS, metro, peace officer, private", "Warrants, Section 205 and legal grounds for action", "Tactical operational order writing and rehearsal"] },
  { icon: Scale, n: "05", title: "Make it stick in court", hours: "6 hrs",
    points: ["Chain of custody discipline from scene to court", "POCA, racketeering, money laundering, asset forfeiture", "Docket construction that survives cross-examination"] },
];

const outcomes = [
  "Build an actionable intelligence product from scattered information",
  "Grade sources and information with 5×5×5 discipline",
  "Draft a lawful tactical operational order under the correct mandate",
  "Preserve chain of custody from scene to courtroom",
  "Prepare a docket that supports POCA and asset forfeiture applications",
  "Interoperate cleanly between SAPS, metro, SOE and private investigators",
];

const facts = [
  { icon: Clock, label: "DURATION", value: "5 days" },
  { icon: Users, label: "FORMAT", value: "Cohort, in-person" },
  { icon: Award, label: "ALIGNMENT", value: "NQF-aligned" },
  { icon: MapPin, label: "DELIVERY", value: "National, RSA" },
];

function CoursePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CourseHeader />
      <CourseHero />
      <WhyNow />
      <FactsBar />
      <DynamicCycle />
      <Modules />
      <Outcomes />
      <FAQ />
      <EnquiryForm />
      <Enrol />
      <CourseFooter />
    </div>
  );
}

function CourseHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Noesis" className="h-10 w-10 object-contain" width={40} height={40} />
          <div className="leading-none">
            <div className="text-lg font-bold tracking-[0.25em]">NOESIS</div>
            <div className="text-[0.6rem] tracking-[0.35em] text-copper mt-0.5">TRAINING</div>
          </div>
        </Link>
        <Link to="/" className="hidden sm:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Noesis
        </Link>
        <a href="/noesis-brochure.pdf" download className="hidden sm:inline-flex group items-center gap-2 bg-copper text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors">
          <Download className="h-4 w-4" /> BROCHURE
        </a>
      </div>
    </header>
  );
}

function CourseHero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Analysts working a link chart" className="h-full w-full object-cover opacity-30" width={1600} height={1000} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--background) 20%, transparent 100%)" }} />
      </div>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container-x relative py-28 lg:py-36 max-w-4xl">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-copper" />
          <span className="text-copper text-xs font-semibold tracking-[0.3em]">FLAGSHIP PROGRAMME · 5 DAYS</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.03] mb-6">
          Intelligence-Led Metals Theft <span className="text-gradient-copper">Investigations & Enforcement.</span>
        </h1>
        <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
          The full operational cycle — understand, collect, analyse, plan, execute, prosecute — taught as one connected method. Built for SAPS, metro law enforcement, and SOE risk divisions who are done reacting.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="/noesis-brochure.pdf" download className="group inline-flex items-center gap-3 rounded-full bg-copper text-primary-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-bronze glow-cta shadow-[var(--shadow-copper)]">
            <Download className="h-4 w-4" /> DOWNLOAD BROCHURE
          </a>
          <Link to="/" hash="contact" className="inline-flex items-center gap-3 border border-copper/60 px-7 py-4 text-sm font-semibold tracking-wide text-foreground hover:bg-copper/10 hover:text-copper transition-colors">
            RESERVE A COHORT SEAT <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  return (
    <section className="py-28 lg:py-36 bg-secondary/30 border-b border-border">
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">WHY NOW</span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-6">
            The infrastructure is <span className="text-gradient-copper">bleeding out.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every day without trained intelligence-led investigators is another substation dark, another line down, another docket that will not survive court.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { icon: Zap, stat: "R7B+", label: "Eskom cable theft losses per year" },
            { icon: TrainFront, stat: "11,000", label: "Copper theft incidents annually across SOEs" },
            { icon: Building2, stat: "R380M", label: "One city, one year — City Power repair costs" },
          ].map((s) => (
            <div key={s.label} className="bg-background p-8">
              <s.icon className="h-6 w-6 text-copper mb-4" strokeWidth={1.5} />
              <div className="text-4xl md:text-5xl font-bold text-gradient-copper mb-2">{s.stat}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactsBar() {
  return (
    <section className="py-20 border-b border-border">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-6">
        {facts.map((f) => (
          <div key={f.label} className="flex items-start gap-4">
            <div className="h-11 w-11 border border-copper/40 flex items-center justify-center text-copper shrink-0">
              <f.icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-1">{f.label}</div>
              <div className="text-lg font-bold">{f.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="py-28 lg:py-40 border-b border-border">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-copper" />
              <span className="text-copper text-xs font-semibold tracking-[0.3em]">MODULE BREAKDOWN</span>
            </div>
            <h2 className="text-3xl md:text-5xl leading-[1.05] mb-6">
              Five days.<br /><span className="text-gradient-copper">Five modules. One method.</span>
            </h2>
            <div className="relative border border-copper/40 overflow-hidden mt-8">
              <img src={cableCourtImg} alt="Cable to courtroom" className="w-full h-64 object-cover" width={800} height={600} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 text-copper text-[0.6rem] tracking-[0.3em]">CABLE → COURTROOM</div>
            </div>
          </div>
          <div className="space-y-4">
            {modules.map((m) => (
              <div key={m.n} className="rounded-2xl border border-foreground/10 bg-card/50 backdrop-blur-md card-lift p-6 lg:p-8 hover:border-copper/50 transition-colors group">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 h-11 w-11 border border-copper/50 flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-primary-foreground transition-colors">
                    <m.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <span className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold">MODULE {m.n}</span>
                      <span className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">{m.hours}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4">{m.title}</h3>
                    <ul className="space-y-2">
                      {m.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-copper mt-0.5 shrink-0" strokeWidth={1.5} />{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="py-28 lg:py-40 bg-secondary/20 border-b border-border relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">LEARNING OUTCOMES</span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-6">On day six, they can <span className="text-gradient-copper">do this.</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every module ends with an applied exercise. Delegates leave with a workbook, templates for grading and operational orders, and a docket structure they can use on the first case back.
          </p>
          <div className="relative border border-border overflow-hidden">
            <img src={trainingImg} alt="Delegates working geospatial maps" className="w-full h-72 object-cover" width={1000} height={800} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>
        <div className="border border-copper/40 bg-card p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-5 w-5 text-copper" />
            <div className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold">DELEGATES WILL BE ABLE TO</div>
          </div>
          <ul className="space-y-4">
            {outcomes.map((o) => (
              <li key={o} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-copper mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Enrol() {
  return (
    <section className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--copper) 15%, transparent) 0%, transparent 65%)" }} />
      <div className="container-x relative max-w-3xl text-center">
        <div className="inline-flex items-center gap-3 mb-6 justify-center">
          <span className="h-px w-10 bg-copper" />
          <span className="text-copper text-xs font-semibold tracking-[0.3em]">ENROL A COHORT</span>
          <span className="h-px w-10 bg-copper" />
        </div>
        <h2 className="text-4xl md:text-6xl leading-[1.05] mb-6">
          Book seats, commission a private cohort, or <span className="text-gradient-copper">embed the method.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Cohort delivery for individual delegates. Private in-house delivery for units and SOE divisions. Direct contracts for embedded methodology across an internal investigations function.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <a href="/noesis-brochure.pdf" download className="group inline-flex items-center gap-3 rounded-full bg-copper text-primary-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-bronze glow-cta shadow-[var(--shadow-copper)]">
            <Download className="h-4 w-4" /> DOWNLOAD BROCHURE
          </a>
          <Link to="/" hash="contact" className="inline-flex items-center gap-3 border border-copper/60 px-7 py-4 text-sm font-semibold tracking-wide hover:bg-copper/10 hover:text-copper transition-colors">
            REQUEST A BRIEFING <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-copper" /> info@noesis.co.za</span>
          <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-copper" /> Contact to be confirmed</span>
        </div>
      </div>
    </section>
  );
}

function CourseFooter() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container-x flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Noesis. Noesis is pursuing SASSETA accreditation; not yet accredited.</div>
        <Link to="/" className="hover:text-copper transition-colors">← Return home</Link>
      </div>
    </footer>
  );
}

const cycleSteps = [
  { icon: Radio, key: "COLLECT", title: "Collect", blurb: "Human sources, OSINT, institutional feeds. Turn noise into a graded stream.", detail: "Informant handling under lawful cover. OSINT tradecraft across marketplaces, WhatsApp groups and second-hand dealer registers. FICA and banking partnerships worked properly." },
  { icon: Network, key: "ANALYSE", title: "Analyse", blurb: "5×5×5 grading, link charts, geospatial hotspots. Find the syndicate, not the runner.", detail: "Grade every source and every piece of information. Build the network from cable cutter to exporter. Overlay incident data on geography to predict, not chase." },
  { icon: ClipboardList, key: "PLAN", title: "Plan", blurb: "Mandate, warrant, operational order. Nothing improvised, nothing challenged in court.", detail: "Confirm the mandate: SAPS, metro, peace officer or private. Draft warrants and Section 205s that survive scrutiny. Rehearse the op order before anyone moves." },
  { icon: Zap, key: "EXECUTE", title: "Execute", blurb: "Coordinated action, clean scene, docket that survives cross-examination.", detail: "Multi-agency choreography. Chain-of-custody discipline from the first exhibit. Docket built for POCA, racketeering and asset forfeiture — not just possession." },
];

function DynamicCycle() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % cycleSteps.length), 3200);
    return () => clearInterval(id);
  }, [paused]);
  const step = cycleSteps[active];
  return (
    <section className="py-28 lg:py-40 border-b border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">THE METHOD · LIVE CYCLE</span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-4">
            Collect. Analyse. Plan. <span className="text-gradient-copper">Execute.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            One continuous loop. Break any link and the case collapses. Hover a stage to hold it.
          </p>
        </div>
        <div
          className="grid lg:grid-cols-4 gap-3 mb-10"
          onMouseLeave={() => setPaused(false)}
        >
          {cycleSteps.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.key}
                onMouseEnter={() => { setPaused(true); setActive(i); }}
                onFocus={() => { setPaused(true); setActive(i); }}
                onClick={() => { setPaused(true); setActive(i); }}
                className={`text-left border p-6 transition-all duration-500 relative overflow-hidden ${
                  isActive ? "border-copper bg-copper/10 shadow-[var(--shadow-copper)] scale-[1.02]" : "border-border bg-card hover:border-copper/40"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`h-10 w-10 border flex items-center justify-center transition-colors ${isActive ? "border-copper bg-copper text-primary-foreground" : "border-copper/40 text-copper"}`}>
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold">0{i + 1}</span>
                </div>
                <div className="text-lg font-bold mb-2">{s.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.blurb}</div>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-copper transition-all duration-[3200ms] ease-linear ${isActive && !paused ? "w-full" : "w-0"}`} />
              </button>
            );
          })}
        </div>
        <div key={step.key} className="border border-copper/40 bg-card p-8 lg:p-10 animate-fade-in">
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 border border-copper bg-copper text-primary-foreground flex items-center justify-center shrink-0">
              <step.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">STAGE 0{active + 1} · {step.key}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Who should attend this programme?", a: "SAPS unit commanders and detectives, metro police and municipal law enforcement leads, and SOE risk / security divisions at Eskom, Transnet, PRASA and metros. Private investigators working infrastructure files are welcome subject to vetting." },
  { q: "Is Noesis SASSETA accredited?", a: "Noesis is pursuing SASSETA accreditation. The programme is NQF-aligned in structure and content while accreditation is in progress. We are transparent about status on every proposal." },
  { q: "How is the course delivered?", a: "Five consecutive days, in-person, cohort format. We deliver open cohorts nationally and private in-house cohorts at your facility. Materials, workbooks and templates are included." },
  { q: "What does it cost?", a: "Pricing depends on cohort type (open vs private in-house) and delegate numbers. Request a briefing and we will send a written proposal within two working days." },
  { q: "Do delegates receive a certificate?", a: "Yes. Delegates who complete all five modules and the applied exercises receive a Noesis certificate of completion, with module hours listed for CPD purposes." },
  { q: "Can you tailor content to our mandate?", a: "Yes. Private cohorts are calibrated to your legal mandate — SAPS, metro peace officer, SOE investigator or private — so warrants, powers and operational orders match what your team can actually execute." },
  { q: "How soon can we book?", a: "Open cohorts run quarterly. Private in-house cohorts typically confirm within four to six weeks of a signed proposal." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 lg:py-40 bg-secondary/20 border-b border-border">
      <div className="container-x grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-6">
            The questions <span className="text-gradient-copper">commanders ask.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Straight answers. If something is not here, ask us directly in the enquiry form below.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left hover:text-copper transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold">{f.q}</span>
                  <span className="shrink-0 h-8 w-8 border border-copper/50 flex items-center justify-center text-copper">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type EnquiryData = {
  name: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  delegates: string;
  cohort: string;
  message: string;
  callback: boolean;
};

const initialEnquiry: EnquiryData = {
  name: "", email: "", phone: "", organisation: "", role: "",
  delegates: "", cohort: "open", message: "", callback: false,
};

function validate(d: EnquiryData) {
  const errors: Partial<Record<keyof EnquiryData, string>> = {};
  if (!d.name.trim() || d.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (d.name.length > 100) errors.name = "Name must be under 100 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) errors.email = "Enter a valid email address.";
  if (d.email.length > 255) errors.email = "Email must be under 255 characters.";
  if (d.callback) {
    if (!/^[+\d\s()-]{7,20}$/.test(d.phone.trim())) errors.phone = "Enter a valid phone number for the call-back.";
  } else if (d.phone && !/^[+\d\s()-]{7,20}$/.test(d.phone.trim())) {
    errors.phone = "Phone number looks invalid.";
  }
  if (!d.organisation.trim()) errors.organisation = "Organisation is required.";
  if (d.organisation.length > 120) errors.organisation = "Organisation must be under 120 characters.";
  if (!d.role.trim()) errors.role = "Role or rank is required.";
  if (d.delegates && !/^\d{1,3}$/.test(d.delegates)) errors.delegates = "Delegates must be a number.";
  if (d.message.length > 1000) errors.message = "Message must be under 1000 characters.";
  return errors;
}

function EnquiryForm() {
  const [data, setData] = useState<EnquiryData>(initialEnquiry);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryData, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = <K extends keyof EnquiryData>(k: K, v: EnquiryData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <section id="enquire" className="py-28 lg:py-40 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--copper) 12%, transparent) 0%, transparent 60%)" }} />
        <div className="container-x relative max-w-2xl text-center animate-fade-in">
          <div className="h-16 w-16 mx-auto border border-copper bg-copper/10 flex items-center justify-center text-copper mb-6">
            <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-3">ENQUIRY RECEIVED</div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-6">
            Thank you, {data.name.split(" ")[0]}. <span className="text-gradient-copper">We are on it.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A Noesis facilitator will respond to <span className="text-foreground font-semibold">{data.email}</span> within two working days
            {data.callback ? <> and will call you on <span className="text-foreground font-semibold">{data.phone}</span> to arrange a briefing.</> : "."}
          </p>
          <div className="border border-copper/40 bg-card p-6 text-left text-sm text-muted-foreground mb-8">
            <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-3">SUMMARY</div>
            <ul className="space-y-1.5">
              <li><span className="text-foreground">Organisation:</span> {data.organisation}</li>
              <li><span className="text-foreground">Role:</span> {data.role}</li>
              <li><span className="text-foreground">Cohort type:</span> {data.cohort === "open" ? "Open cohort" : data.cohort === "private" ? "Private in-house" : "Embedded programme"}</li>
              {data.delegates && <li><span className="text-foreground">Delegates:</span> {data.delegates}</li>}
              {data.callback && <li className="text-copper">Facilitator call-back requested.</li>}
            </ul>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/noesis-brochure.pdf" download className="inline-flex items-center gap-3 bg-copper text-primary-foreground px-6 py-3 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors">
              <Download className="h-4 w-4" /> DOWNLOAD BROCHURE
            </a>
            <button
              onClick={() => { setData(initialEnquiry); setStatus("idle"); }}
              className="inline-flex items-center gap-3 border border-copper/60 px-6 py-3 text-sm font-semibold tracking-wide hover:bg-copper/10 hover:text-copper transition-colors"
            >
              SUBMIT ANOTHER ENQUIRY
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquire" className="py-28 lg:py-40 border-b border-border">
      <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">COURSE ENQUIRY</span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-6">
            Tell us who's coming. <span className="text-gradient-copper">We'll shape the cohort.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Written responses within two working days. Prefer a conversation? Tick the call-back option and a facilitator will phone you directly.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><ShieldCheck className="h-4 w-4 text-copper mt-0.5 shrink-0" /> POPIA-conscious. Data used only to respond to this enquiry.</li>
            <li className="flex gap-3"><PhoneCall className="h-4 w-4 text-copper mt-0.5 shrink-0" /> Optional facilitator call-back for commanders.</li>
            <li className="flex gap-3"><CheckCircle2 className="h-4 w-4 text-copper mt-0.5 shrink-0" /> Written proposal for private cohorts within two working days.</li>
          </ul>
        </div>
        <form onSubmit={submit} noValidate className="rounded-2xl border border-foreground/10 bg-card/50 backdrop-blur-md card-lift p-6 md:p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <EField label="Full name" value={data.name} onChange={(v) => update("name", v)} error={errors.name} maxLength={100} required />
            <EField label="Work email" type="email" value={data.email} onChange={(v) => update("email", v)} error={errors.email} maxLength={255} required />
            <EField label="Organisation" value={data.organisation} onChange={(v) => update("organisation", v)} error={errors.organisation} maxLength={120} required />
            <EField label="Role / rank" value={data.role} onChange={(v) => update("role", v)} error={errors.role} maxLength={80} required />
            <EField label="Phone" type="tel" value={data.phone} onChange={(v) => update("phone", v)} error={errors.phone} maxLength={20} required={data.callback} />
            <EField label="Approx. delegates" value={data.delegates} onChange={(v) => update("delegates", v)} error={errors.delegates} maxLength={3} />
          </div>
          <div>
            <label className="block text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">COHORT TYPE</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: "open", l: "Open cohort" },
                { v: "private", l: "Private in-house" },
                { v: "embedded", l: "Embedded programme" },
              ].map((o) => (
                <button
                  key={o.v}
                  type="button"
                  onClick={() => update("cohort", o.v)}
                  className={`border px-3 py-3 text-xs font-semibold tracking-wide transition-colors ${
                    data.cohort === o.v ? "border-copper bg-copper/10 text-copper" : "border-border hover:border-copper/50"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">MESSAGE</label>
            <textarea
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
              maxLength={1000}
              rows={4}
              placeholder="Context on your mandate, target crime types, timing..."
              className="w-full bg-background border border-border px-3 py-3 text-sm focus:border-copper focus:outline-none transition-colors resize-none"
            />
            <div className="flex justify-between mt-1 text-[0.65rem] text-muted-foreground">
              <span>{errors.message && <span className="text-destructive">{errors.message}</span>}</span>
              <span>{data.message.length}/1000</span>
            </div>
          </div>
          <label className="flex items-start gap-3 border border-border p-4 hover:border-copper/50 transition-colors cursor-pointer">
            <input
              type="checkbox"
              checked={data.callback}
              onChange={(e) => update("callback", e.target.checked)}
              className="mt-1 h-4 w-4 accent-[color:var(--copper)]"
            />
            <div>
              <div className="text-sm font-semibold flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-copper" /> Request a facilitator call-back
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                A lead facilitator will phone you within one working day to discuss cohort fit and next steps.
              </div>
            </div>
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full group inline-flex items-center justify-center gap-3 rounded-full bg-copper text-primary-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-bronze glow-cta shadow-[var(--shadow-copper)] disabled:opacity-70"
          >
            {status === "sending" ? (
              <><Loader2 className="h-4 w-4 animate-spin" /> SENDING…</>
            ) : (
              <><Send className="h-4 w-4" /> SUBMIT ENQUIRY <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function EField({ label, value, onChange, error, type = "text", required, maxLength }: {
  label: string; value: string; onChange: (v: string) => void; error?: string;
  type?: string; required?: boolean; maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">
        {label.toUpperCase()}{required && <span className="text-copper"> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        className={`w-full bg-background border px-3 py-3 text-sm focus:outline-none transition-colors ${
          error ? "border-destructive" : "border-border focus:border-copper"
        }`}
      />
      {error && <div className="text-[0.7rem] text-destructive mt-1">{error}</div>}
    </div>
  );
}
