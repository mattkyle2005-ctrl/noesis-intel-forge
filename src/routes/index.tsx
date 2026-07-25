import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Search, Network, ClipboardList, Radio, Scale,
  ShieldCheck, Building2, Landmark, ArrowRight, Menu,
  Phone, Mail, MapPinned, AlertTriangle, FileWarning,
  TrainFront, Zap, Target, CheckCircle2, Download, BookOpen,
  Brain, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-v2.jpg";
import aboutImg from "@/assets/about.jpg";
import logoImg from "@/assets/logo.png";
import impactImg from "@/assets/impact.jpg";
import cableCourtImg from "@/assets/cable-courtroom.jpg";
import trainingImg from "@/assets/training.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Noesis — Empowering Professionals. Protecting Communities." },
      { name: "description", content: "Intelligence-led investigation and enforcement training. Flagship 5-day NQF-aligned programme in metals theft — from cable to courtroom." },
      { property: "og:title", content: "Noesis — Empowering Professionals. Protecting Communities." },
      { property: "og:description", content: "Intelligence-led investigation and enforcement training for SAPS, metro police and SOE risk teams. Cable to courtroom." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const nav = [
  { label: "The Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Who It's For", href: "#audiences" },
  { label: "Programme", href: "#programme" },
  { label: "Credibility", href: "#credibility" },
  { label: "Enquire", href: "#contact" },
];

function Landing() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <MeaningStrip />
      <UrgencyTicker />
      <Problem />
      <Approach />
      <Audiences />
      <Programme />
      <Credibility />
      <WhyNoesis />
      <Facilitators />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`}>
      <img src={logoImg} alt="Noesis" className="h-10 w-10 object-contain" width={40} height={40} />
      <div className="leading-none">
        <div className="text-lg font-bold tracking-[0.25em] text-foreground">NOESIS</div>
        <div className="text-[0.6rem] tracking-[0.35em] text-copper mt-0.5">TRAINING</div>
      </div>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container-x flex items-center justify-between h-20">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-muted-foreground hover:text-copper transition-colors relative group">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <a href="/noesis-brochure.pdf" download className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-xs font-semibold tracking-wide text-foreground hover:border-copper hover:text-copper transition-colors">
            <Download className="h-3.5 w-3.5" /> BROCHURE
          </a>
          <a href="#contact" className="group inline-flex items-center gap-2 bg-copper text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors">
            ENQUIRE <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground" aria-label="Menu"><Menu /></button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-copper py-1.5">{n.label}</a>
            ))}
            <a href="/noesis-brochure.pdf" download className="text-sm text-copper font-semibold mt-2 inline-flex items-center gap-2"><Download className="h-4 w-4" /> Download brochure</a>
          </div>
        </div>
      )}
    </header>
  );
}

const cycle = [
  { n: "01", label: "COLLECT", body: "Source handling. OSINT. Institutional intelligence." },
  { n: "02", label: "ANALYSE", body: "5×5×5 grading. Link charts. Geospatial patterns." },
  { n: "03", label: "PLAN", body: "Mandate. Warrants. Tactical operational order." },
  { n: "04", label: "EXECUTE", body: "Coordinated operation. Chain of custody. Courtroom-ready docket." },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 30%, transparent 30%, var(--background) 85%)" }} />
      <div className="container-x relative pt-16 lg:pt-24 pb-20">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-copper" />
              <span className="text-copper text-xs font-semibold tracking-[0.3em]">INTELLIGENCE · INSIGHT · IMPACT</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.03] mb-6">
              EMPOWERING <span className="text-gradient-copper">PROFESSIONALS.</span><br />
              PROTECTING COMMUNITIES.
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-copper/60" />
              <span className="text-copper text-sm font-semibold tracking-[0.2em]">FROM CABLE TO COURTROOM</span>
            </div>
            <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
              Noesis trains South Africa's investigators, enforcers and risk professionals in the full operational cycle of intelligence-led work — starting with the R45-billion crime nobody is trained to get ahead of.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses/metals-theft" className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors shadow-[var(--shadow-copper)]">
                EXPLORE THE FLAGSHIP COURSE <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="/noesis-brochure.pdf" download className="inline-flex items-center gap-3 border border-copper/60 px-7 py-4 text-sm font-semibold tracking-wide text-foreground hover:bg-copper/10 hover:text-copper transition-colors">
                <Download className="h-4 w-4" /> DOWNLOAD BROCHURE
              </a>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-4 bg-gradient-to-br from-copper/15 to-transparent blur-3xl" />
            <div className="relative overflow-hidden border border-copper/30">
              <img src={heroImg} alt="Analysts working a link chart during a briefing" className="w-full h-[520px] object-cover" width={1600} height={1200} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2 text-[0.6rem] tracking-[0.3em] text-copper bg-background/70 backdrop-blur px-3 py-1.5 border border-copper/40">
                <span className="h-1.5 w-1.5 bg-copper animate-pulse rounded-full" /> OPERATIONAL CYCLE
              </div>
              <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-copper/10 to-transparent pointer-events-none animate-scan" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <div className="text-[0.6rem] tracking-[0.3em] text-copper">LIVE OPS</div>
                  <div className="text-sm font-bold">Link-chart briefing</div>
                </div>
                <div className="text-right">
                  <div className="text-[0.6rem] tracking-[0.3em] text-copper">GRADING</div>
                  <div className="text-sm font-bold">5 × 5 × 5</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cycle strip */}
        <div className="mt-16 lg:mt-20 border-t border-border pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {cycle.map((s, i) => (
              <div key={s.n} className="bg-background p-6 relative group hover:bg-secondary/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold">{s.n}</span>
                  <span className="h-px flex-1 bg-copper/30" />
                  {i < cycle.length - 1 && <ArrowRight className="h-3 w-3 text-copper/60 hidden md:block" />}
                </div>
                <div className="text-sm font-bold tracking-[0.25em] mb-2">{s.label}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MeaningStrip() {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative grid md:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center">
        <div className="flex items-center gap-5">
          <div className="h-16 w-16 border border-copper/50 flex items-center justify-center text-copper">
            <Brain className="h-7 w-7" strokeWidth={1.5} />
          </div>
          <div>
            <div className="text-[0.6rem] tracking-[0.35em] text-copper font-semibold mb-1">NOESIS · /ˈnəʊ.ɪ.sɪs/</div>
            <div className="text-3xl md:text-4xl font-bold tracking-[0.15em]">NOESIS</div>
          </div>
        </div>
        <p className="text-lg md:text-2xl leading-relaxed text-foreground">
          <span className="text-muted-foreground">Noun.</span> The act of thinking, the process of understanding, <span className="text-gradient-copper font-semibold">and pure cognition.</span>
          <span className="block text-sm text-muted-foreground mt-3">
            The name is the method. Before the raid, before the arrest, before the docket — thinking.
          </span>
        </p>
      </div>
    </section>
  );
}

const tickerFacts = [
  "R45 BILLION lost to infrastructure theft each year",
  "R7 BILLION Eskom cable-theft losses annually",
  "11,000 copper-theft incidents across Eskom, Transnet & PRASA",
  "30,000 KM of infrastructure lost",
  "R380 MILLION single-city repair cost — City Power, one year",
  "R221 MILLION lost in 10 months to Feb 2025 alone",
  "18,000 detectives to cover every crime category in RSA",
];

function UrgencyTicker() {
  return (
    <div className="border-b border-border bg-background overflow-hidden relative py-4">
      <div className="flex gap-14 animate-marquee whitespace-nowrap">
        {[...tickerFacts, ...tickerFacts].map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <AlertTriangle className="h-4 w-4 text-copper shrink-0" />
            <span className="text-muted-foreground tracking-wide">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const problems = [
  {
    icon: Zap,
    tag: "ESKOM",
    headline: "R5–7 billion a year in copper cable theft.",
    body: "A further R2 billion a year to replace stolen cable — before counting the cost of the outages it causes. R221 million in infrastructure theft and vandalism recorded in ten months to February 2025 alone.",
  },
  {
    icon: TrainFront,
    tag: "TRANSNET & PRASA",
    headline: "30,000 km of infrastructure lost.",
    body: "Transnet alone reported 1,121 km of cable stolen in a single financial year. Across Eskom, Transnet and PRASA: roughly 11,000 copper theft incidents a year.",
  },
  {
    icon: Building2,
    tag: "MUNICIPAL",
    headline: "R380 million in a single city.",
    body: "City Power in Johannesburg logged 2,000 cable theft incidents in one financial year at R380 million to repair. Every metro is fighting the same fight with different budgets.",
  },
  {
    icon: FileWarning,
    tag: "SAPS",
    headline: "Arrests without convictions aren't progress.",
    body: "Roughly 18,000 detectives nationally cover every crime category. Syndicates operate in high-visibility jackets in broad daylight. Officers are rarely trained to build the intelligence picture that would catch them before the cable's already gone.",
  },
];

function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32 border-t border-border relative">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <img src={impactImg} alt="" aria-hidden className="absolute right-0 top-0 h-full w-1/2 object-cover" width={1000} height={1000} loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--background) 45%, transparent 100%)" }} />
      </div>
      <div className="container-x relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">WHERE THE WORLD IS RIGHT NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            R45 BILLION LOST A YEAR.<br />
            <span className="text-gradient-copper">Everyone is reacting.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            South Africa loses roughly R45 billion a year to infrastructure theft and vandalism. The figures break down differently for every audience — but the common thread is the same. Nobody is trained to get ahead of it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {problems.map((p) => (
            <div key={p.tag} className="bg-background p-8 lg:p-10 hover:bg-secondary/30 transition-colors">
              <div className="flex items-start gap-4 mb-5">
                <div className="shrink-0 h-11 w-11 border border-copper/40 flex items-center justify-center text-copper">
                  <p.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold pt-3">{p.tag}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4">{p.headline}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 max-w-5xl">
          <div className="flex items-start gap-4 max-w-2xl">
            <AlertTriangle className="h-5 w-5 text-copper mt-1 shrink-0" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              This is organised crime operating in plain sight — cable to scrap yard to export. It cannot be solved with more raids. It has to be investigated, analysed, and prosecuted as a value chain.
            </p>
          </div>
          <Link to="/courses/metals-theft" className="group inline-flex items-center gap-3 border border-copper/60 px-5 py-3 text-xs font-semibold tracking-wide hover:bg-copper/10 hover:text-copper transition-colors">
            SEE THE TRAINING <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    icon: Search,
    n: "01",
    title: "Understand the crime",
    body: "How metals theft actually works as organised crime — the value chain from cable to scrap yard to export, and who profits at each link.",
  },
  {
    icon: Radio,
    n: "02",
    title: "Collect the intelligence",
    body: "Source handling, OSINT and informant management. Working with banks, second-hand goods dealers and FICA-accountable entities to build a picture before acting.",
  },
  {
    icon: Network,
    n: "03",
    title: "Analyse it properly",
    body: "The 5×5×5 grading system for source reliability and information accuracy. Link-chart and network analysis. Geospatial pattern mapping. Scattered tips become an actionable intelligence product.",
  },
  {
    icon: ClipboardList,
    n: "04",
    title: "Plan and execute the operation",
    body: "Turning an intelligence product into a legally sound tactical operation. Who has what mandate — SAPS, metro police, peace officer — the warrants and legal grounds required, and how the operation is actually run.",
  },
  {
    icon: Scale,
    n: "05",
    title: "Make it stick in court",
    body: "Chain of custody. POCA, racketeering, money laundering and asset forfeiture. Building a docket that survives cross-examination instead of collapsing at trial.",
  },
];

function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-secondary/30 border-y border-border relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-copper" />
              <span className="text-copper text-xs font-semibold tracking-[0.3em]">THE NOESIS APPROACH</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
              One connected<br />
              <span className="text-gradient-copper">operational cycle.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-8">
              Not tactics in isolation. Not forensics in isolation. Not legal theory in isolation. The full cycle, taught as one method.
            </p>
            <Link to="/courses/metals-theft" className="group inline-flex items-center gap-3 text-copper text-sm font-semibold tracking-wide hover:text-bronze transition-colors">
              SEE THE FULL MODULE BREAKDOWN <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute left-[22px] top-4 bottom-4 w-px bg-copper/30 hidden md:block" />
            <div className="space-y-6">
              {steps.map((s) => (
                <div key={s.n} className="relative flex gap-6 group">
                  <div className="shrink-0 h-11 w-11 border border-copper/50 bg-background flex items-center justify-center text-copper relative z-10 group-hover:bg-copper group-hover:text-primary-foreground transition-colors">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 border border-border bg-card p-6 group-hover:border-copper/50 transition-colors">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold">STEP {s.n}</span>
                      <span className="h-px flex-1 bg-border" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    icon: ShieldCheck,
    tag: "SAPS",
    title: "SAPS detectives and unit commanders",
    body: "Move beyond the arrest-count. Build dockets that convict, and intelligence products that direct the next operation instead of chasing the last one.",
  },
  {
    icon: Building2,
    tag: "MUNICIPAL",
    title: "Metro & municipal law enforcement",
    body: "Peace-officer and metro-police mandates operate under a specific legal envelope. This programme trains commanders to work that envelope precisely — and to interoperate cleanly with SAPS.",
  },
  {
    icon: Landmark,
    tag: "SOE & PRIVATE",
    title: "SOE security and risk divisions",
    body: "For Eskom, Transnet, PRASA and comparable risk teams: fund a cohort, commission a direct contract, or embed the methodology across an internal investigations function.",
  },
];

function Audiences() {
  return (
    <section id="audiences" className="py-24 lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-copper" />
              <span className="text-copper text-xs font-semibold tracking-[0.3em]">WHO IT'S FOR</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Three mandates.<br />
              <span className="text-gradient-copper">One methodology.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((a) => (
            <div key={a.tag} className="group border border-border bg-card p-8 hover:border-copper/60 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 border border-copper/40 flex items-center justify-center text-copper group-hover:bg-copper group-hover:text-primary-foreground transition-colors">
                  <a.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <span className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold">{a.tag}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 leading-tight">{a.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const programmeFacts = [
  { label: "DURATION", value: "5 days" },
  { label: "FORMAT", value: "In-person, cohort" },
  { label: "ALIGNMENT", value: "NQF-aligned" },
  { label: "ACCREDITATION", value: "SASSETA in progress" },
];

const programmeIncludes = [
  "The value chain of organised metals theft — from cable to export",
  "Source handling, OSINT, informant management and institutional intelligence",
  "5×5×5 grading, link-chart, network and geospatial analysis",
  "Mandate, warrants and lawful operational planning",
  "Chain of custody, POCA, racketeering, money laundering and asset forfeiture",
  "Docket construction that survives cross-examination",
];

function Programme() {
  return (
    <section id="programme" className="py-24 lg:py-32 border-y border-border bg-secondary/20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-copper/10 blur-3xl" />
      <div className="container-x relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">FLAGSHIP PROGRAMME</span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-6">
            Intelligence-Led Metals Theft <span className="text-gradient-copper">Investigations & Enforcement.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            A 5-day, NQF-aligned programme. The first Noesis programme to reach cohort delivery, and the operational blueprint for everything that follows.
          </p>

          <div className="grid grid-cols-2 gap-px bg-border border border-border mb-10">
            {programmeFacts.map((f) => (
              <div key={f.label} className="bg-background p-5">
                <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">{f.label}</div>
                <div className="text-lg font-bold">{f.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/courses/metals-theft" className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors shadow-[var(--shadow-copper)]">
              <BookOpen className="h-4 w-4" /> VIEW FULL COURSE PAGE
            </Link>
            <a href="/noesis-brochure.pdf" download className="group inline-flex items-center gap-3 border border-copper/60 px-6 py-4 text-sm font-semibold tracking-wide hover:bg-copper/10 hover:text-copper transition-colors">
              <Download className="h-4 w-4" /> BROCHURE
            </a>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed max-w-lg mt-8">
            Noesis is pursuing SASSETA accreditation as a non-standard learning programme. The course is not yet SASSETA-accredited and is not represented as such.
          </p>
        </div>

        <div className="border border-copper/40 bg-card p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-5 w-5 text-copper" />
            <div className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold">WHAT'S COVERED</div>
          </div>
          <ul className="space-y-4 mb-8">
            {programmeIncludes.map((i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-copper mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{i}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="group w-full inline-flex items-center justify-between gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors">
            REQUEST THE FULL PROGRAMME OUTLINE <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
}

const credStats = [
  { n: 45, suffix: "B+", prefix: "R", label: "annual infrastructure theft losses in RSA" },
  { n: 5, suffix: "", prefix: "", label: "modules covering the full cycle" },
  { n: 5, suffix: "", prefix: "", label: "days, cohort or in-house delivery" },
  { n: 100, suffix: "%", prefix: "", label: "practitioner-led, applied instruction" },
];

function Credibility() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="credibility" className="py-24 lg:py-32 relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-25">
        <img src={cableCourtImg} alt="" aria-hidden className="h-full w-full object-cover" width={1600} height={800} loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 40%, var(--background) 100%)" }} />
      </div>
      <div ref={ref} className="container-x relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">CREDIBILITY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Built by practitioners.<br />
            <span className="text-gradient-copper">Written for the courtroom.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every module is anchored in South African law and real operational experience — the 5×5×5 grading system, POCA, chain-of-custody discipline, and dockets that have to survive cross-examination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-14">
          {credStats.map((s) => {
            const v = useCountUp(s.n, visible);
            return (
              <div key={s.label} className="bg-background p-8">
                <div className="text-4xl md:text-5xl font-bold text-gradient-copper mb-2">
                  {s.prefix}{v}{s.suffix}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { q: "The training gap in South Africa isn't tactical. It's the intelligence-to-conviction pipeline. Noesis is built to close it.", who: "Programme design principle" },
            { q: "You cannot raid your way out of a R45-billion syndicated economy. You have to investigate it as a value chain.", who: "Course methodology" },
          ].map((t) => (
            <div key={t.who} className="border border-copper/30 bg-card/60 backdrop-blur p-8 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-copper/30" />
              <p className="text-lg leading-relaxed mb-6 pr-8">{t.q}</p>
              <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold">— {t.who.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-5">METHODOLOGY ANCHORED IN</div>
          <div className="flex flex-wrap gap-3">
            {["5×5×5 grading", "POCA", "SHGA", "Criminal Matters Amendment Act", "FICA-partner intelligence", "NQF alignment", "OSINT tradecraft", "Chain of custody"].map((c) => (
              <span key={c} className="px-4 py-2 border border-border text-sm text-muted-foreground hover:border-copper hover:text-copper transition-colors cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const differentiators = [
  { title: "Not general fraud training.", body: "Fraud examiner programmes teach financial investigation in the abstract. They do not teach infrastructure crime, and they do not teach tactical operations." },
  { title: "Not a generic security catalogue.", body: "Multi-qualification vocational providers offer close protection, paralegal studies and policing diplomas side by side. Breadth is not depth. Noesis does one thing." },
  { title: "The full cycle, taught as one method.", body: "Understand the crime. Collect. Analyse. Plan and execute. Prosecute. No other South African provider teaches all five as one connected operational cycle." },
];

function WhyNoesis() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-copper/15 to-transparent blur-3xl" />
          <div className="relative border border-border overflow-hidden">
            <img src={trainingImg} alt="Delegates working geospatial maps in a briefing room" className="w-full h-[480px] object-cover" width={1400} height={1000} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-copper text-[0.6rem] tracking-[0.3em]">METHOD-LED</div>
              <div className="text-2xl font-bold mt-1">From the desk to the operation.</div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">WHY NOESIS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            The only training that goes from <span className="text-gradient-copper">community tip to conviction.</span>
          </h2>
          <div className="space-y-6">
            {differentiators.map((d) => (
              <div key={d.title} className="border-l-2 border-copper pl-5">
                <h3 className="text-lg font-bold mb-2">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Facilitators() {
  const people = [
    { name: "Neil Arendse", role: "Lead Facilitator" },
    { name: "Rudolph Wiltshire", role: "Lead Facilitator" },
  ];
  return (
    <section className="py-24 lg:py-32 border-y border-border bg-secondary/20">
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">LEAD FACILITATORS</span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05]">
            Taught by practitioners.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {people.map((p) => (
            <div key={p.name} className="border border-border bg-card p-8 flex gap-6 items-start hover:border-copper/50 transition-colors">
              <div className="h-16 w-16 border border-copper/40 flex items-center justify-center text-copper text-lg font-bold shrink-0">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <div className="text-xl font-bold">{p.name}</div>
                <div className="text-copper text-[0.65rem] tracking-[0.3em] font-semibold mt-1 mb-4">{p.role.toUpperCase()}</div>
                <div className="text-sm text-muted-foreground italic">
                  Biography and operational background to be confirmed.
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden border-y border-copper/30">
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--copper) 18%, transparent) 0%, transparent 60%)" }} />
      <div className="container-x relative flex flex-wrap items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-3">READY TO GET AHEAD OF IT?</div>
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
            Stop reacting. <span className="text-gradient-copper">Start investigating.</span>
          </h3>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="/noesis-brochure.pdf" download className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors shadow-[var(--shadow-copper)]">
            <Download className="h-4 w-4" /> DOWNLOAD BROCHURE
          </a>
          <a href="#contact" className="inline-flex items-center gap-3 border border-copper/60 px-6 py-4 text-sm font-semibold tracking-wide hover:bg-copper/10 hover:text-copper transition-colors">
            REQUEST A BRIEFING <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--copper) 12%, transparent) 0%, transparent 65%)" }} />
      <div className="container-x relative grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">ENQUIRE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Request a programme <span className="text-gradient-copper">briefing.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Tell us about your unit, division or organisation. We'll come back with dates, a full outline, and cohort or in-house options.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-copper" /> info@noesis.co.za</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-copper" /> Contact number to be confirmed</li>
            <li className="flex items-center gap-3"><MapPinned className="h-4 w-4 text-copper" /> South Africa — national delivery</li>
          </ul>
          <a href="/noesis-brochure.pdf" download className="mt-8 inline-flex items-center gap-2 text-copper text-sm font-semibold hover:text-bronze transition-colors">
            <Download className="h-4 w-4" /> Or download the brochure now
          </a>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="border border-copper/40 bg-card/70 backdrop-blur p-8 lg:p-10 space-y-5"
        >
          {sent ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="h-10 w-10 text-copper mx-auto mb-4" />
              <div className="text-xl font-bold mb-2">Enquiry received.</div>
              <p className="text-muted-foreground text-sm">We'll respond within two working days.</p>
            </div>
          ) : (
            <>
              <Field label="Name" name="name" required maxLength={100} />
              <Field label="Organisation" name="org" required maxLength={150} />
              <Field label="Role / Rank" name="role" required maxLength={100} />
              <Field label="Email" name="email" type="email" required maxLength={150} />
              <div>
                <label className="block text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-copper focus:outline-none transition-colors resize-none"
                />
              </div>
              <p className="text-[0.65rem] text-muted-foreground leading-relaxed">
                We collect only what we need to respond to your enquiry, in line with POPIA. Your details are not shared with third parties.
              </p>
              <button
                type="submit"
                className="group w-full inline-flex items-center justify-between gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors"
              >
                SEND ENQUIRY <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">
        {label.toUpperCase()}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={maxLength}
        className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:border-copper focus:outline-none transition-colors"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container-x grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <Logo />
          <p className="text-sm text-muted-foreground mt-6 max-w-sm leading-relaxed">
            <span className="text-copper font-semibold">Noesis</span> — the act of thinking, the process of understanding, and pure cognition. A South African training company. Intelligence-led investigation and enforcement, starting with metals theft.
          </p>
        </div>
        <div>
          <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-4">NAVIGATE</div>
          <ul className="space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="text-sm text-muted-foreground hover:text-copper transition-colors">{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-4">PROGRAMMES</div>
          <ul className="space-y-2.5">
            <li><Link to="/courses/metals-theft" className="text-sm text-muted-foreground hover:text-copper transition-colors">Metals Theft Investigations</Link></li>
            <li><a href="/noesis-brochure.pdf" download className="text-sm text-muted-foreground hover:text-copper transition-colors inline-flex items-center gap-1.5"><Download className="h-3 w-3" /> Brochure PDF</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-4">CONTACT</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-copper" /> info@noesis.co.za</li>
            <li className="flex items-center gap-2.5"><MapPinned className="h-4 w-4 text-copper" /> South Africa</li>
          </ul>
        </div>
      </div>
      <div className="container-x">
        <div className="divider-copper mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Noesis. All rights reserved. SASSETA accreditation in progress.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-copper transition-colors">Privacy (POPIA)</a>
            <a href="#" className="hover:text-copper transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
