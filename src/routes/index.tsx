import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Search, Network, ClipboardList, Radio, Scale,
  ShieldCheck, Building2, Landmark, ArrowRight, Menu,
  Phone, Mail, MapPinned, AlertTriangle, FileWarning,
  TrainFront, Zap, Target, CheckCircle2, Download, BookOpen,
  Brain, Quote, Gauge, Clock,
} from "lucide-react";
import { Hero } from "@/components/Hero";
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
  { label: "Estimator", href: "#estimator" },
  { label: "Programme", href: "#programme" },
  { label: "Credibility", href: "#credibility" },
  { label: "About", href: "#about" },
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
      <RiskEstimator />
      <Programme />
      <Credibility />
      <Standards />
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
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-[1240px] rounded-full backdrop-blur-md bg-background/80 border border-white/[0.08] py-2 px-5">
        <div className="flex items-center justify-between">

          <Logo />
          <nav className="hidden xl:flex items-center gap-7 text-[0.8125rem] font-medium tracking-tight">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground transition-colors relative group">
                {n.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <a href="/noesis-brochure.pdf" download className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[0.8125rem] font-medium tracking-tight text-muted-foreground hover:text-foreground transition-colors">
              <Download className="h-3.5 w-3.5" /> Brochure
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-copper text-primary-foreground px-4 py-2 text-[0.8125rem] font-semibold tracking-tight hover:bg-bronze transition-colors">
              Enquire <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="xl:hidden text-foreground p-2" aria-label="Menu"><Menu /></button>
        </div>
        {open && (
          <div className="xl:hidden border-t border-foreground/10 px-5">
            <div className="py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-copper py-1.5">{n.label}</a>
              ))}
              <a href="/noesis-brochure.pdf" download className="text-sm text-copper font-semibold mt-2 inline-flex items-center gap-2"><Download className="h-4 w-4" /> Download brochure</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

const cycle = [
  { n: "01", label: "COLLECT", body: "Source handling. OSINT. Institutional intelligence." },
  { n: "02", label: "ANALYSE", body: "5×5×5 grading. Link charts. Geospatial patterns." },
  { n: "03", label: "PLAN", body: "Mandate. Warrants. Tactical operational order." },
  { n: "04", label: "EXECUTE", body: "Coordinated operation. Chain of custody. Courtroom-ready docket." },
];



function MeaningStrip() {
  return (
    <section className="py-24 sm:py-32 border-y border-border bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative grid md:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
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
          <span className="text-muted-foreground">Noun.</span> The act of thinking, the process of understanding, <span className="text-copper font-semibold">and pure cognition.</span>
          <span className="block text-sm text-muted-foreground mt-4">
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
    <div className="border-b border-border bg-background overflow-hidden relative py-5">
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
    <section id="problem" className="py-24 sm:py-32 border-t border-border relative">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <img src={impactImg} alt="" aria-hidden className="absolute right-0 top-0 h-full w-1/2 object-cover" width={1000} height={1000} loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--background) 45%, transparent 100%)" }} />
      </div>
      <div className="container-x relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-semibold tracking-[0.3em]">WHERE THE WORLD IS RIGHT NOW</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            R45 BILLION LOST A YEAR.<br />
            <span className="text-copper">Everyone is reacting.</span>
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

        <div className="mt-10 flex flex-wrap items-center justify-between gap-8 max-w-5xl">
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
    <section id="approach" className="py-24 sm:py-32 bg-secondary/30 border-y border-border relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-10 bg-copper" />
              <span className="text-copper text-sm font-semibold tracking-[0.3em]">THE NOESIS APPROACH</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
              One connected<br />
              <span className="text-copper">operational cycle.</span>
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
            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.n} className="relative flex gap-8 group">
                  <div className="shrink-0 h-11 w-11 border border-copper/50 bg-background flex items-center justify-center text-copper relative z-10 group-hover:bg-copper group-hover:text-primary-foreground transition-colors">
                    <s.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 rounded-xl border border-foreground/10 bg-card/50 backdrop-blur-md card-lift p-6 group-hover:border-copper/50 transition-colors">
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
    <section id="audiences" className="py-24 sm:py-32 section-rule">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-copper" />
              <span className="text-copper text-sm font-semibold tracking-[0.3em]">WHO IT'S FOR</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Three mandates.<br />
              <span className="text-copper">One methodology.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((a) => (
            <div key={a.tag} className="group rounded-xl border border-foreground/10 bg-card/50 backdrop-blur-md card-lift p-8 hover:border-copper/60 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-8">
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

const riskSectors = [
  { key: "Mining", exposure: 2.4, downtime: 3, compliance: 40 },
  { key: "Energy", exposure: 6.1, downtime: 9, compliance: 55 },
  { key: "Telecoms", exposure: 1.8, downtime: 4, compliance: 35 },
  { key: "Rail", exposure: 4.5, downtime: 7, compliance: 50 },
  { key: "Scrap Logistics", exposure: 0.9, downtime: 1, compliance: 70 },
] as const;

const riskLevels = ["Low", "Guarded", "Elevated", "High", "Critical"] as const;
const riskMultiplier = [0.6, 0.85, 1.0, 1.3, 1.7];

function RiskEstimator() {
  const [sectorKey, setSectorKey] = useState<(typeof riskSectors)[number]["key"]>("Energy");
  const [riskIdx, setRiskIdx] = useState(2);

  const sector = riskSectors.find((s) => s.key === sectorKey)!;
  const mult = riskMultiplier[riskIdx];
  const exposure = (sector.exposure * mult).toFixed(1);
  const downtime = Math.round(sector.downtime * mult);
  const compliance = Math.min(100, Math.round(sector.compliance + riskIdx * 8));

  return (
    <section id="estimator" className="py-24 sm:py-32 bg-secondary/20 border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-semibold tracking-[0.3em]">KNOW YOUR EXPOSURE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            SA Infrastructure <span className="text-copper">Loss Estimator.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            An illustrative planning tool for municipal managers and security heads — not an audited figure. Select a sector and site risk level to see indicative exposure.
          </p>
        </div>

        <div className="rounded-xl border border-foreground/10 bg-card/50 backdrop-blur-md overflow-hidden card-lift">
          <div className="grid md:grid-cols-2 gap-10 p-8 lg:p-10 border-b border-border">
            <div>
              <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-4">SECTOR</div>
              <div className="grid grid-cols-2 gap-3">
                {riskSectors.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setSectorKey(s.key)}
                    className={`px-4 py-3 text-left text-sm font-mono border rounded-lg transition-colors ${
                      sectorKey === s.key
                        ? "border-copper bg-copper/10 text-copper"
                        : "border-foreground/10 text-muted-foreground hover:border-copper/40 hover:text-foreground"
                    }`}
                  >
                    {s.key}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-4">
                SITE RISK LEVEL — <span className="text-foreground">{riskLevels[riskIdx].toUpperCase()}</span>
              </div>
              <input
                type="range"
                min={0}
                max={4}
                step={1}
                value={riskIdx}
                onChange={(e) => setRiskIdx(Number(e.target.value))}
                className="w-full accent-copper"
                aria-label="Site risk level"
              />
              <div className="flex justify-between font-mono text-[0.6rem] tracking-[0.1em] text-muted-foreground mt-3">
                {riskLevels.map((r) => (
                  <span key={r}>{r.toUpperCase()}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-border">
            <div className="bg-background p-6 lg:p-8">
              <div className="flex items-center gap-2 text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-3">
                <Gauge className="h-3.5 w-3.5" /> ANNUAL EXPOSURE
              </div>
              <div className="text-3xl font-bold tracking-tight tabular text-copper">R{exposure}M</div>
            </div>
            <div className="bg-background p-6 lg:p-8">
              <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-3">DOWNTIME IMPACT</div>
              <div className="text-3xl font-bold tracking-tight tabular text-copper">{downtime} days/yr</div>
            </div>
            <div className="bg-background p-6 lg:p-8">
              <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-3">COMPLIANCE RISK</div>
              <div className="text-3xl font-bold tracking-tight tabular text-copper">{compliance}/100</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <AlertTriangle className="h-4 w-4 text-copper shrink-0" />
          <a href="#contact" className="text-sm text-copper font-semibold hover:text-bronze transition-colors">
            Discuss your site's actual exposure with us →
          </a>
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
    <section id="programme" className="py-24 sm:py-32 border-y border-border bg-secondary/20 relative overflow-hidden">
      <div className="container-x relative grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-start">
        <div>
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-semibold tracking-[0.3em]">FLAGSHIP PROGRAMME</span>
          </div>
          <h2 className="text-3xl md:text-5xl leading-[1.05] mb-8">
            Intelligence-Led Metals Theft <span className="text-copper">Investigations & Enforcement.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            A 5-day, NQF-aligned programme. The first Noesis programme to reach cohort delivery, and the operational blueprint for everything that follows.
          </p>

          <div className="grid grid-cols-2 gap-px bg-border border border-border mb-16">
            {programmeFacts.map((f) => (
              <div key={f.label} className="bg-background p-5">
                <div className="text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-2">{f.label}</div>
                <div className="text-lg font-bold">{f.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/courses/metals-theft" className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze glow-cta">
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
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-5 w-5 text-copper" />
            <div className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold">WHAT'S COVERED</div>
          </div>
          <ul className="space-y-5 mb-8">
            {programmeIncludes.map((i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-copper mt-0.5 shrink-0" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{i}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="group w-full inline-flex items-center justify-between gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze glow-cta">
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
    <section id="credibility" className="py-24 sm:py-32 relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-25">
        <img src={cableCourtImg} alt="" aria-hidden className="h-full w-full object-cover" width={1600} height={800} loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, var(--background) 0%, transparent 40%, var(--background) 100%)" }} />
      </div>
      <div ref={ref} className="container-x relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-semibold tracking-[0.3em]">CREDIBILITY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Built by practitioners.<br />
            <span className="text-copper">Written for the courtroom.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every module is anchored in South African law and real operational experience — the 5×5×5 grading system, POCA, chain-of-custody discipline, and dockets that have to survive cross-examination.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border mb-16">
          {credStats.map((s) => {
            const v = useCountUp(s.n, visible);
            return (
              <div key={s.label} className="bg-background p-8">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight tabular text-copper mb-2">
                  {s.prefix}{v}{s.suffix}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed">{s.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { q: "The training gap in South Africa isn't tactical. It's the intelligence-to-conviction pipeline. Noesis is built to close it.", who: "Programme design principle" },
            { q: "You cannot raid your way out of a R45-billion syndicated economy. You have to investigate it as a value chain.", who: "Course methodology" },
          ].map((t) => (
            <div key={t.who} className="border border-copper/30 bg-card/60 backdrop-blur p-8 relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-copper/30" />
              <p className="text-lg leading-relaxed mb-8 pr-8">{t.q}</p>
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

const standards = [
  { framework: "NQF Alignment", status: "ALIGNED", note: "5-day programme structured to NQF standards" },
  { framework: "SASSETA Accreditation", status: "IN PROGRESS", note: "Non-standard learning programme pathway — not yet accredited" },
  { framework: "Second-Hand Goods Act 6 of 2009", status: "REFERENCE", note: "s21 record-keeping, s25 registration, s32 penalties" },
  { framework: "Prevention of Organised Crime Act 121 of 1998", status: "REFERENCE", note: "Racketeering, money laundering, asset forfeiture" },
  { framework: "Criminal Matters Amendment Act 18 of 2015", status: "REFERENCE", note: "Essential infrastructure, minimum sentencing" },
  { framework: "Financial Intelligence Centre Act 38 of 2001", status: "REFERENCE", note: "Cash threshold and suspicious-transaction reporting" },
];

const trustFacts = [
  { label: "DELIVERY MODEL", value: "5-day, cohort or in-house" },
  { label: "FACILITATOR BASIS", value: "Practitioner-led, applied instruction" },
  { label: "IMPACT TRACKING", value: "Begins Year 1 — no completed cohorts yet" },
];

function Standards() {
  return (
    <section className="py-24 sm:py-32 border-b border-border relative">
      <div className="container-x relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-semibold tracking-[0.3em]">STANDARDS &amp; COMPLIANCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Alignment we can prove.<br /><span className="text-copper">Not credentials we can't.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Noesis is pursuing SASSETA accreditation as a non-standard learning programme and is not yet accredited. Every legal framework below is cited by section number and checked against the actual Act text.
          </p>
        </div>

        <div className="overflow-x-auto border border-border rounded-xl mb-8">
          <table className="w-full text-sm border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-border bg-secondary/30">
                <th className="text-left text-[0.6rem] tracking-[0.2em] text-copper font-semibold px-6 py-4">FRAMEWORK</th>
                <th className="text-left text-[0.6rem] tracking-[0.2em] text-copper font-semibold px-6 py-4">STATUS</th>
                <th className="text-left text-[0.6rem] tracking-[0.2em] text-copper font-semibold px-6 py-4">DETAIL</th>
              </tr>
            </thead>
            <tbody>
              {standards.map((s) => (
                <tr key={s.framework} className="border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-5 text-foreground font-semibold">{s.framework}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.6rem] tracking-[0.15em] ${
                        s.status === "ALIGNED"
                          ? "border-copper/40 bg-copper/10 text-copper"
                          : s.status === "IN PROGRESS"
                          ? "border-border text-foreground"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {s.status === "ALIGNED" && <CheckCircle2 className="h-3 w-3" />}
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-muted-foreground">{s.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
          {trustFacts.map((f) => (
            <div key={f.label} className="bg-background p-6">
              <div className="flex items-center gap-2 text-[0.6rem] tracking-[0.3em] text-copper font-semibold mb-3">
                <Clock className="h-3.5 w-3.5" /> {f.label}
              </div>
              <div className="text-foreground font-medium leading-snug">{f.value}</div>
            </div>
          ))}
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

function KnowledgeGraph() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const nodes = Array.from({ length: 22 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
      r: 1.5 + Math.random() * 2,
    }));
    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = (a.x - b.x) * w, dy = (a.y - b.y) * h;
          const d = Math.hypot(dx, dy);
          if (d < 150) {
            ctx.strokeStyle = `rgba(212,116,82,${0.28 * (1 - d / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x * w, a.y * h);
            ctx.lineTo(b.x * w, b.y * h);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.fillStyle = "rgba(212,116,82,0.9)";
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(212,116,82,0.12)";
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, n.r * 4, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}

function TelemetryBars() {
  const [vals, setVals] = useState([62, 41, 78]);
  useEffect(() => {
    const id = window.setInterval(() => {
      setVals([30 + Math.random() * 60, 25 + Math.random() * 55, 45 + Math.random() * 50]);
    }, 1200);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="space-y-3">
      {["CPU", "GPU", "I/O"].map((k, i) => (
        <div key={k}>
          <div className="flex justify-between font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground mb-1.5">
            <span>{k}</span><span className="text-primary">{vals[i].toFixed(0)}%</span>
          </div>
          <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary/70 transition-all duration-1000 ease-out" style={{ width: `${vals[i]}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const snippets: Record<string, string> = {
  Python: "forge.ingest('docket.pdf')\nforge.grade(scale='5x5x5')\nforge.link().export('court')",
  TypeScript: "await forge.ingest(file)\nawait forge.grade({ scale: '5x5x5' })\nawait forge.link().export()",
  Rust: "forge.ingest(&file)?;\nforge.grade(Scale::FiveByFive)?;\nforge.link().export()?;",
};

function DropZone() {
  const [tab, setTab] = useState<string>("Python");
  const [over, setOver] = useState(false);
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <div
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => { e.preventDefault(); setOver(false); }}
        className={`flex flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center transition-all duration-300 ${over ? "border-primary/60 bg-primary/5" : "border-foreground/15"}`}
      >
        <Download className="h-6 w-6 text-primary mb-3" strokeWidth={1.5} />
        <div className="text-sm font-semibold">Drop dockets, CDRs, SCADA logs</div>
        <div className="text-xs text-muted-foreground mt-1 font-mono">PDF · CSV · JSON · SHP</div>
      </div>
      <div className="rounded-xl border border-foreground/10 bg-black/60 overflow-hidden">
        <div className="flex border-b border-foreground/10">
          {Object.keys(snippets).map((k) => (
            <button key={k} onClick={() => setTab(k)} className={`px-3 py-2 font-mono text-[0.65rem] tracking-[0.15em] transition-colors ${tab === k ? "text-primary border-b border-primary" : "text-muted-foreground hover:text-foreground"}`}>{k.toUpperCase()}</button>
          ))}
        </div>
        <pre className="p-4 font-mono text-xs text-primary/90 whitespace-pre-wrap leading-6">{snippets[tab]}</pre>
      </div>
    </div>
  );
}

const bentoCard = "bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all duration-300 rounded-xl p-6";

function WhyNoesis() {
  return (
    <section className="py-24 sm:py-32 section-rule">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-mono font-semibold tracking-[0.3em]">CAPABILITIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            The only method that goes from <span className="text-copper">community tip to conviction.</span>
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className={`${bentoCard} col-span-12 md:col-span-8 relative overflow-hidden min-h-[420px] flex flex-col`}>
            <div className="absolute inset-0 opacity-70"><KnowledgeGraph /></div>
            <div className="relative mt-auto">
              <span className="icon-chip mb-4 w-fit"><Network className="h-5 w-5" strokeWidth={1.5} /></span>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">Neural Knowledge Graph</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{differentiators[2].body}</p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col gap-5">
            <div className={`${bentoCard} flex-1`}>
              <div className="flex items-start justify-between gap-8">
                <div>
                  <span className="icon-chip mb-4 w-fit"><Zap className="h-5 w-5" strokeWidth={1.5} /></span>
                  <h3 className="text-lg font-extrabold tracking-tight mb-1">Zero-Latency Agent Swarm</h3>
                  <div className="font-mono text-2xl text-primary mb-2">0.04ms <span className="text-xs text-muted-foreground">execution</span></div>
                </div>
                <div className="w-28 shrink-0"><TelemetryBars /></div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">{differentiators[0].body}</p>
            </div>

            <div className={`${bentoCard} flex-1`}>
              <div className="flex items-center gap-4 mb-4">
                <span className="relative icon-chip">
                  <span className="absolute inset-0 rounded-xl bg-primary/20 animate-pulse" />
                  <ShieldCheck className="relative h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[0.6rem] tracking-[0.2em] text-primary">ZERO-TRUST VERIFIED</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight mb-2">Enterprise Security Guardrails</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{differentiators[1].body}</p>
            </div>
          </div>

          <div className={`${bentoCard} col-span-12`}>
            <div className="flex items-center gap-3 mb-5">
              <span className="icon-chip"><ClipboardList className="h-5 w-5" strokeWidth={1.5} /></span>
              <h3 className="text-lg font-extrabold tracking-tight">Multi-Modal Data Ingestion</h3>
            </div>
            <DropZone />
          </div>
        </div>

        <div className="mt-6 relative rounded-xl border border-foreground/10 overflow-hidden card-lift">
          <img src={trainingImg} alt="Delegates working geospatial maps in a briefing room" className="w-full h-[320px] object-cover" width={1400} height={1000} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-copper text-[0.6rem] font-mono tracking-[0.3em]">METHOD-LED</div>
            <div className="text-2xl font-extrabold tracking-tight mt-1">From the desk to the operation.</div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Facilitators() {
  const people = [
    {
      name: "Neil Arendse",
      role: "Co-founder · Lead Facilitator",
      bio: "Career investigator with deep experience running intelligence-led operations against organised infrastructure crime. Leads curriculum design across the collect–analyse–execute cycle.",
    },
    {
      name: "Rudolph Wiltshire",
      role: "Co-founder · Lead Facilitator",
      bio: "Tactical operations specialist focused on lawful planning, warrant execution and inter-agency coordination between SAPS, metro units and SOE risk divisions.",
    },
    {
      name: "Matthew Arendse",
      role: "Co-founder · Programme Director",
      bio: "Programme architect responsible for NQF alignment, docket-to-court discipline and the financial-crime and POCA modules that anchor Noesis prosecutions.",
    },
  ];
  return (
    <section id="about" className="py-24 sm:py-32 border-y border-border bg-secondary/20">
      <div className="container-x">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-semibold tracking-[0.3em]">ABOUT · CO-FOUNDERS</span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-[1.05] mb-8">
            Built by practitioners. <span className="text-copper">Taught by them too.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Noesis Training was founded by three operators who have worked the full arc of infrastructure crime — from first informant to final conviction. Every module is written from that experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {people.map((p) => (
            <div key={p.name} className="rounded-xl border border-foreground/10 bg-card/50 backdrop-blur-md card-lift p-8 hover:border-copper/50 transition-colors group">
              <div className="h-16 w-16 border border-copper/40 flex items-center justify-center text-copper text-lg font-bold mb-8 group-hover:bg-copper group-hover:text-primary-foreground transition-colors">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="text-xl font-bold">{p.name}</div>
              <div className="text-copper text-[0.65rem] tracking-[0.3em] font-semibold mt-1 mb-4">{p.role.toUpperCase()}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-xl border border-foreground/10 bg-black/70 px-6 py-20 lg:py-20 text-center">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative max-w-2xl mx-auto">
            <div className="font-mono text-xs tracking-[0.3em] text-primary mb-4">FLAGSHIP PROGRAMME · ENQUIRIES OPEN</div>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
              Ready to build the intelligence-to-conviction pipeline?
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="relative mx-auto max-w-xl">
              <input
                type="email"
                required
                placeholder="you@organisation.gov.za"
                aria-label="Email address"
                className="w-full rounded-full border border-foreground/15 bg-background/60 backdrop-blur-md py-4 pl-6 pr-44 text-sm outline-none focus:border-primary/50 transition-colors"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full bg-copper px-5 text-xs font-semibold tracking-wide text-primary-foreground hover:bg-bronze glow-cta">
                REQUEST DETAILS
              </button>
            </form>
            <p className="mt-4 font-mono text-[0.65rem] tracking-[0.15em] text-muted-foreground">
              Cohort or in-house delivery • NQF-aligned • Response within two working days
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/noesis-brochure.pdf" download className="inline-flex items-center gap-3 rounded-full border border-copper/50 px-6 py-3.5 text-sm font-semibold tracking-wide hover:bg-copper/10 hover:text-copper transition-colors">
                <Download className="h-4 w-4" /> DOWNLOAD BROCHURE
              </a>
              <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-foreground/15 px-6 py-3.5 text-sm font-semibold tracking-wide hover:border-primary/40 transition-colors">
                REQUEST A BRIEFING <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--copper) 12%, transparent) 0%, transparent 65%)" }} />
      <div className="container-x relative grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start">
        <div>
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-sm font-semibold tracking-[0.3em]">ENQUIRE</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Request a programme <span className="text-copper">briefing.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
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
                className="group w-full inline-flex items-center justify-between gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze glow-cta"
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
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="container-x grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-16 mb-16">
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
        <div className="divider-copper mb-8" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Noesis. All rights reserved. SASSETA accreditation in progress.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-copper transition-colors">Privacy (POPIA)</a>
            <a href="#" className="hover:text-copper transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
