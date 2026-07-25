import { createFileRoute } from "@tanstack/react-router";
import {
  Crosshair, ShieldCheck, MapPin, Users, Lock, Search,
  Scale, BarChart3, Network, ArrowRight, Radio, Menu,
  Phone, Mail, MapPinned, Zap, Target, Award,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import logoImg from "@/assets/logo.png";
import cMetals from "@/assets/course-metals.jpg";
import cIntel from "@/assets/course-intel.jpg";
import cInvestigate from "@/assets/course-investigate.jpg";
import cComms from "@/assets/course-comms.jpg";
import cLegal from "@/assets/course-legal.jpg";
import cIndustry from "@/assets/course-industry.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "For Organisations", href: "#organisations" },
  { label: "Contact", href: "#contact" },
];

const pillars = [
  { icon: Crosshair, title: "Targeted Training", body: "Industry-specific, scenario-based learning." },
  { icon: ShieldCheck, title: "Practical & Applied", body: "Real-world case studies and intelligence tools." },
  { icon: MapPin, title: "South Africa Focused", body: "Designed for the unique challenges of metals theft." },
  { icon: Users, title: "Stronger Together", body: "Building capability across agencies and sectors." },
  { icon: Lock, title: "Safer Communities", body: "Turning intelligence into prevention and impact." },
];

const approach = [
  { icon: Search, title: "Intelligence Driven", body: "Actionable insights that drive operations." },
  { icon: Zap, title: "Practical Focus", body: "Tools and techniques you can apply immediately." },
  { icon: Award, title: "Expert Led", body: "Training developed by industry experts." },
  { icon: BarChart3, title: "Measurable Impact", body: "Stronger outcomes for safer communities." },
];

const courses = [
  { img: cMetals, icon: Target, title: "Metals Theft Overview", body: "Understand the scope, impact and modus operandi.", level: "Foundation" },
  { img: cIntel, icon: Search, title: "Crime Intelligence Fundamentals", body: "Collection, analysis and actionable intelligence.", level: "Foundation" },
  { img: cInvestigate, icon: Network, title: "Investigative Techniques", body: "From scene to intelligence-led investigation.", level: "Intermediate" },
  { img: cComms, icon: Radio, title: "Information Management", body: "Systems, databases and intelligence workflows.", level: "Intermediate" },
  { img: cLegal, icon: Scale, title: "Case Building & Prosecution", body: "Strengthen dockets. Secure convictions.", level: "Advanced" },
  { img: cIndustry, icon: ShieldCheck, title: "Industry Partnerships", body: "Collaboration for prevention and impact.", level: "Advanced" },
];

const partners = ["SAPS", "PSIRA", "TRANSNET", "ESKOM", "SANRAL", "PRASA", "TELKOM", "MINE SA"];

function Landing() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Pillars />
      <About />
      <Courses />
      <Stats />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`}>
      <img src={logoImg} alt="Noesis Academy" className="h-10 w-10 object-contain" width={40} height={40} />
      <div className="leading-none">
        <div className="text-lg font-bold tracking-[0.25em] text-foreground">NOESIS</div>
        <div className="text-[0.65rem] tracking-[0.35em] text-copper mt-0.5">ACADEMY</div>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="container-x flex items-center justify-between h-20">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9 text-sm">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-muted-foreground hover:text-copper transition-colors relative group">
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex group items-center gap-2 bg-copper text-primary-foreground px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors"
        >
          ENROL NOW <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <button className="lg:hidden text-foreground" aria-label="Menu"><Menu /></button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, transparent 30%, var(--background) 80%)" }} />
      <div className="container-x relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center py-20 lg:py-28">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">INTELLIGENCE. THAT MAKES A DIFFERENCE.</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] mb-6">
            EMPOWERING<br />PROFESSIONALS.<br />
            <span className="text-gradient-copper">PROTECTING</span> COMMUNITIES.
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
            Specialised training in metals theft crime intelligence and combat tactics for law enforcement and private security professionals across South Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#courses" className="group inline-flex items-center gap-3 bg-copper text-primary-foreground px-7 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors shadow-[var(--shadow-copper)]">
              EXPLORE COURSES <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="inline-flex items-center gap-3 border border-border px-7 py-4 text-sm font-semibold tracking-wide text-foreground hover:border-copper hover:text-copper transition-colors">
              OUR APPROACH
            </a>
          </div>
        </div>
        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 bg-gradient-to-br from-copper/20 to-transparent blur-3xl" />
          <div className="relative overflow-hidden border border-copper/30">
            <img src={heroImg} alt="Noesis intelligence unit at rail infrastructure" className="w-full h-[560px] object-cover" width={1600} height={1200} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2 text-[0.65rem] tracking-[0.3em] text-copper bg-background/60 backdrop-blur px-3 py-1.5 border border-copper/40">
              <span className="h-1.5 w-1.5 bg-copper animate-pulse rounded-full" /> LIVE OPS
            </div>
            <div className="absolute bottom-4 right-4 text-right">
              <div className="text-xs tracking-[0.3em] text-copper">NOESIS</div>
              <div className="text-[0.6rem] tracking-[0.25em] text-muted-foreground">INTELLIGENCE UNIT</div>
            </div>
            <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-copper/10 to-transparent pointer-events-none animate-scan" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="border-y border-border">
      <div className="container-x grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className={`p-6 lg:p-8 group hover:bg-secondary/40 transition-colors ${i > 0 ? "lg:border-l border-border" : ""}`}
          >
            <p.icon className="h-7 w-7 text-copper mb-4" strokeWidth={1.5} />
            <div className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold mb-2">{p.title.toUpperCase()}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-copper" />
            <span className="text-copper text-xs font-semibold tracking-[0.3em]">ABOUT NOESIS ACADEMY</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            KNOWLEDGE TODAY.<br />
            <span className="text-gradient-copper">SAFER TOMORROW.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
            We equip professionals with the knowledge, skills and intelligence to disrupt metals theft networks and protect South Africa's critical infrastructure and communities.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {approach.map((a) => (
              <div key={a.title} className="flex gap-4">
                <div className="shrink-0 h-11 w-11 border border-copper/40 flex items-center justify-center text-copper">
                  <a.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground mb-1 tracking-wide">{a.title}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-copper/15 to-transparent blur-3xl" />
          <div className="relative border border-border overflow-hidden">
            <img src={aboutImg} alt="Security officers on patrol" className="w-full h-[520px] object-cover" width={1400} height={1000} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="text-copper text-xs tracking-[0.3em]">FIELD READY</div>
                <div className="text-2xl font-bold mt-1">Built for the ground.</div>
              </div>
              <div className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">NOESIS · SA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className="py-24 lg:py-32 bg-secondary/30 border-y border-border relative">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container-x relative">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-copper" />
              <span className="text-copper text-xs font-semibold tracking-[0.3em]">OUR COURSES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl">
              PRACTICAL. RELEVANT.<br /><span className="text-gradient-copper">IMPACTFUL.</span>
            </h2>
          </div>
          <a href="#contact" className="group inline-flex items-center gap-3 border border-copper text-copper px-6 py-3 text-sm font-semibold tracking-wide hover:bg-copper hover:text-primary-foreground transition-colors">
            VIEW ALL COURSES <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <article key={c.title} className="group relative bg-card border border-border overflow-hidden hover:border-copper/60 transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={900} height={700} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 left-4 h-11 w-11 border border-copper/60 bg-background/70 backdrop-blur flex items-center justify-center text-copper">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="absolute top-4 right-4 text-[0.6rem] tracking-[0.3em] text-copper bg-background/70 backdrop-blur px-2.5 py-1 border border-copper/40">
                  0{i + 1}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 tracking-wide">{c.title.toUpperCase()}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.body}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold">{c.level.toUpperCase()}</span>
                  <ArrowRight className="h-4 w-4 text-copper opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { icon: Award, value: "500+", label: "PROFESSIONALS TRAINED", sub: "Across law enforcement and private security." },
    { icon: Lock, value: "20+", label: "SPECIALISED COURSES", sub: "Practical, intelligence-led learning pathways." },
    { icon: MapPin, value: "9", label: "NATIONWIDE IMPACT", sub: "Strengthening capability across South Africa." },
    { icon: Users, value: "24/7", label: "STRONGER TOGETHER", sub: "Building safer communities through intelligence." },
  ];
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-copper/60 pl-6 py-2">
            <s.icon className="h-6 w-6 text-copper mb-4" strokeWidth={1.5} />
            <div className="text-4xl md:text-5xl font-bold text-gradient-copper mb-2">{s.value}</div>
            <div className="text-[0.65rem] tracking-[0.3em] text-foreground font-semibold mb-2">{s.label}</div>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="organisations" className="py-16 border-y border-border overflow-hidden">
      <div className="container-x">
        <div className="text-center text-[0.65rem] tracking-[0.4em] text-muted-foreground mb-10">
          TRUSTED BY AGENCIES AND ORGANISATIONS COMMITTED TO COMBATING METALS THEFT
        </div>
      </div>
      <div className="relative">
        <div className="flex animate-marquee gap-16 whitespace-nowrap w-max">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div key={i} className="text-2xl font-bold tracking-[0.3em] text-muted-foreground/60 hover:text-copper transition-colors">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--copper) 15%, transparent) 0%, transparent 60%)" }} />
      <div className="container-x relative">
        <div className="border border-copper/40 bg-card/60 backdrop-blur p-8 lg:p-16 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={logoImg} alt="" className="h-14 w-14 object-contain" width={56} height={56} />
              <div>
                <div className="text-copper text-xs tracking-[0.3em]">INVEST IN INTELLIGENCE.</div>
                <div className="text-3xl md:text-4xl font-bold mt-1">PROTECT OUR FUTURE.</div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Join Noesis Academy and be part of the solution against metals theft in South Africa. Talk to our team about custom programmes for your organisation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="mailto:info@noesis.academy" className="group inline-flex items-center justify-between gap-3 bg-copper text-primary-foreground px-6 py-4 text-sm font-semibold tracking-wide hover:bg-bronze transition-colors">
              ENROL NOW <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#courses" className="inline-flex items-center justify-between gap-3 border border-border px-6 py-4 text-sm font-semibold tracking-wide hover:border-copper hover:text-copper transition-colors">
              REQUEST A CALLBACK <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Company", links: ["About Us", "Our Approach", "Careers", "News", "Contact"] },
    { title: "Courses", links: ["All Courses", "Learning Pathways", "In-House Training", "Enrolment Info", "FAQs"] },
    { title: "Resources", links: ["Blog", "Case Studies", "Reports", "Guides", "Toolkits"] },
    { title: "For Orgs", links: ["In-House Training", "Strategic Partnerships", "Capacity Building", "Consulting"] },
  ];
  return (
    <footer className="border-t border-border bg-background pt-20 pb-8">
      <div className="container-x grid lg:grid-cols-[1.4fr_2fr_1fr] gap-12 mb-16">
        <div>
          <Logo />
          <p className="text-sm text-muted-foreground mt-6 max-w-xs leading-relaxed">
            Intelligence training that drives impact and builds safer communities.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold mb-4">{c.title.toUpperCase()}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-copper transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div className="text-[0.65rem] tracking-[0.3em] text-copper font-semibold mb-4">CONTACT</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-copper" /> +27 10 500 2726</li>
            <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-copper" /> info@noesis.academy</li>
            <li className="flex items-center gap-2.5"><MapPinned className="h-4 w-4 text-copper" /> Pretoria, South Africa</li>
          </ul>
        </div>
      </div>
      <div className="container-x">
        <div className="divider-copper mb-6" />
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Noesis Academy. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-copper transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-copper transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
