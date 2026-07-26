import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
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
      <div className="container-x relative py-20 lg:py-28 max-w-4xl">
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
          <a href="/noesis-brochure.pdf" download className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors shadow-[var(--shadow-copper)]">
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
    <section className="py-20 lg:py-28 bg-secondary/30 border-b border-border">
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
    <section className="py-14 border-b border-border">
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
    <section className="py-24 lg:py-32 border-b border-border">
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
              <div key={m.n} className="border border-border bg-card p-6 lg:p-8 hover:border-copper/50 transition-colors group">
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
    <section className="py-24 lg:py-32 bg-secondary/20 border-b border-border relative">
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
    <section className="py-24 lg:py-32 relative overflow-hidden">
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
          <a href="/noesis-brochure.pdf" download className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors shadow-[var(--shadow-copper)]">
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
