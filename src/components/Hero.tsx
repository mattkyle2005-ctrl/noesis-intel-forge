import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Search, Satellite, Banknote, Globe2, BrainCircuit,
  ShieldCheck, Activity, Download,
} from "lucide-react";

const feeds = [
  { icon: Satellite, label: "Satellite", status: "LIVE", tone: "ok" },
  { icon: Banknote, label: "Financial", status: "LIVE", tone: "ok" },
  { icon: Globe2, label: "Geopolitical", status: "SYNC", tone: "warn" },
  { icon: BrainCircuit, label: "Neural", status: "LIVE", tone: "ok" },
];

type Prompt = { q: string; lines: string[] };

const prompts: Prompt[] = [
  {
    q: "Analyse market volatility",
    lines: [
      "» ingest: 41 commodity feeds ......... OK",
      "» model: copper price variance ....... σ 3.8%",
      "» correlate: theft incidents ↔ price . r = 0.71",
      "✓ synthesis complete · 99.4% confidence",
    ],
  },
  {
    q: "Scan supply chain bottlenecks",
    lines: [
      "» map: rail corridors ................ 30,400 km",
      "» detect: recurring outage nodes ..... 17 sites",
      "» rank: exposure by asset value ...... R380m",
      "✓ synthesis complete · 97.1% confidence",
    ],
  },
  {
    q: "Synthesize threat signals",
    lines: [
      "» grade: 5×5×5 source evaluation ..... B/2/2",
      "» link: syndicate cluster resolved ... 14 nodes / 31 edges",
      "» plan: operational order drafted .... warrant attached",
      "✓ docket sealed · POCA-ready · 98.6% confidence",
    ],
  },
];

function useTypedLines(active: Prompt) {
  const [shown, setShown] = useState<string[]>([]);
  const [typed, setTyped] = useState("");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    let line = 0;
    let char = 0;
    setShown([]);
    setTyped("");

    const tick = () => {
      if (cancelled || line >= active.lines.length) return;
      const current = active.lines[line];
      if (char < current.length) {
        char += 1;
        setTyped(current.slice(0, char));
        timer.current = window.setTimeout(tick, 14);
      } else {
        setShown((prev) => [...prev, current]);
        setTyped("");
        char = 0;
        line += 1;
        timer.current = window.setTimeout(tick, 220);
      }
    };
    timer.current = window.setTimeout(tick, 260);
    return () => {
      cancelled = true;
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active]);

  return { shown, typed };
}

function SignalCounter() {
  const [value, setValue] = useState(2_412_880);
  useEffect(() => {
    const id = window.setInterval(() => setValue((v) => v + Math.floor(Math.random() * 900)), 700);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="tabular font-mono text-sm text-foreground">
      {(value / 1_000_000).toFixed(2)}M
    </span>
  );
}

function HashBadge() {
  const [hash, setHash] = useState("a7f3…91cd");
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const rand = () => Math.random().toString(16).slice(2, 6);
    const update = () => {
      setHash(`${rand()}…${rand()}`);
      setTime(new Date().toISOString().slice(11, 19));
    };
    update();
    const id = window.setInterval(update, 3000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-copper">
        <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
      </span>
      <div className="leading-tight">
        <div className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground">CHAIN VERIFIED</div>
        <div className="font-mono text-[0.7rem] tabular text-foreground">{hash} · {time}Z</div>
      </div>
    </div>
  );
}

function Console() {
  const [active, setActive] = useState(prompts[2]);
  const [query, setQuery] = useState("");
  const { shown, typed } = useTypedLines(active);

  const run = (p: Prompt) => {
    setQuery(p.q);
    setActive(p);
  };

  return (
    <div className="relative mt-16 lg:mt-20 max-w-5xl mx-auto">
      {/* window */}
      <div className="relative rounded-xl border border-white/10 bg-[#050C17]/90 backdrop-blur-md overflow-hidden">
        {/* title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.08] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-copper/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="hidden sm:flex flex-1 items-center justify-center">
            <div className="flex w-full max-w-xs items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1">
              <Search className="h-3 w-3 text-muted-foreground" strokeWidth={1.5} />
              <span className="font-mono text-[0.65rem] tracking-[0.15em] text-muted-foreground">noesis://forge/console</span>
            </div>
          </div>
          <span className="ml-auto sm:ml-0 font-mono text-[0.65rem] tabular text-copper">14ms</span>
        </div>

        <div className="grid sm:grid-cols-[168px_1fr]">
          {/* feeds */}
          <aside className="hidden sm:block border-r border-white/[0.08] p-4">
            <div className="font-mono text-[0.6rem] tracking-[0.25em] text-muted-foreground mb-4">DATA FEEDS</div>
            <ul className="space-y-3">
              {feeds.map((f) => (
                <li key={f.label} className="flex items-center gap-2.5">
                  <f.icon className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-xs text-foreground/90">{f.label}</span>
                  <span className="ml-auto relative flex h-1.5 w-1.5">
                    <span className={`absolute inline-flex h-full w-full rounded-full opacity-70 animate-ping ${f.tone === "ok" ? "bg-emerald-400" : "bg-copper"}`} />
                    <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${f.tone === "ok" ? "bg-emerald-400" : "bg-copper"}`} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/[0.08] pt-4">
              <div className="font-mono text-[0.6rem] tracking-[0.25em] text-muted-foreground">NODES</div>
              <div className="font-mono text-sm tabular text-foreground mt-1">14 / 31</div>
            </div>
          </aside>

          {/* main */}
          <div className="p-4 sm:p-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const match = prompts.find((p) => p.q.toLowerCase().includes(query.trim().toLowerCase()));
                setActive(match ?? { q: query, lines: [`» query: ${query || "…"}`, "» resolving intelligence graph ...", "✓ synthesis complete · 96.2% confidence"] });
              }}
              className="flex items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-2 focus-within:border-copper/40 transition-colors"
            >
              <Search className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Query the intelligence graph…"
                aria-label="Intelligence query"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
              />
              <button type="submit" className="font-mono text-[0.6rem] tracking-[0.2em] text-copper hover:text-foreground transition-colors">RUN</button>
            </form>

            <div className="mt-3 flex flex-wrap gap-2">
              {prompts.map((p) => (
                <button
                  key={p.q}
                  onClick={() => run(p)}
                  className={`rounded-full border px-3 py-1.5 text-[0.7rem] tracking-tight transition-colors ${
                    active.q === p.q
                      ? "border-copper/40 bg-copper/10 text-copper"
                      : "border-white/[0.08] text-muted-foreground hover:text-foreground hover:border-white/20"
                  }`}
                >
                  {p.q}
                </button>
              ))}
            </div>

            <div className="mt-4 h-[196px] overflow-hidden rounded-md border border-white/[0.06] bg-black/50 p-4 font-mono text-xs text-left">
              <div className="text-muted-foreground/70">$ forge run --query "{active.q}"</div>
              {shown.map((l, i) => (
                <div key={`${l}-${i}`} className="mt-1.5 leading-6 text-muted-foreground animate-fade-in">{l}</div>
              ))}
              {typed && (
                <div className="mt-1.5 leading-6 text-copper">
                  {typed}
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-copper animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* floating micro-cards */}
      <div className="hidden md:flex absolute -top-6 -right-4 lg:-right-10 items-center gap-3 rounded-full border border-white/10 bg-background/70 backdrop-blur-md px-4 py-2.5">
        <Activity className="h-4 w-4 text-copper" strokeWidth={1.5} />
        <div className="leading-tight text-left">
          <SignalCounter />
          <div className="font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground">SIGNALS / SEC</div>
        </div>
      </div>
      <div className="hidden md:block absolute -bottom-7 -left-4 lg:-left-10 rounded-xl border border-white/10 bg-background/70 backdrop-blur-md px-4 py-3">
        <HashBadge />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-spotlight">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container-x relative pt-40 lg:pt-52 pb-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="group relative inline-flex items-center gap-2.5 mb-10 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground hover:border-white/20 transition-colors">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-emerald-400">[ONLINE]</span> NOESIS ENGINE v2.4 ACTIVE
            <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-md border border-white/10 bg-background/95 px-3 py-2 text-[0.65rem] leading-relaxed tracking-normal text-muted-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
              All ingestion nodes operational. Median query latency 14ms across four live feeds.
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.05] text-foreground mb-8">
            Autonomous Intelligence.<br />Precision Forged.
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Synthesising unstructured global data streams into actionable intelligence at machine speed.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/courses/metals-theft"
              className="group inline-flex items-center gap-3 rounded-full border border-copper/60 bg-copper px-7 py-3.5 text-sm font-semibold tracking-tight text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_6px_rgba(0,0,0,0.35)] hover:bg-bronze transition-colors"
            >
              Explore the flagship programme
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="#programme"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold tracking-tight text-muted-foreground hover:text-foreground hover:border-white/25 transition-colors"
            >
              Explore Live Demo
              <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[0.65rem] text-muted-foreground">⌘ + K</span>
            </a>
            <a
              href="/noesis-brochure.pdf"
              download
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-3.5 text-sm font-medium tracking-tight text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download className="h-4 w-4" strokeWidth={1.5} /> Brochure
            </a>
          </div>
        </div>

        <Console />
      </div>
    </section>
  );
}
