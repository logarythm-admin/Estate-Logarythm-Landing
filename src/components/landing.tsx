"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ChevronDown,
  Compass,
  Globe,
  Gauge,
  MessageCircle,
  Link2,
  LineChart,
  Users,
  SlidersHorizontal,
  Trophy,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Gauge,
    title: "Visibility",
    description: "See the share of chats where your brand is mentioned and understand how often you show up in conversations.",
    detail: "Track your presence across ChatGPT, Gemini, Perplexity and other AI platforms with real-time monitoring.",
  },
  {
    icon: Compass,
    title: "Position",
    description: "Understand your brand's position within AI search results and uncover opportunities to improve your ranking.",
    detail: "Geo-specific analysis across micro-markets. Know where you rank for every locality and project type.",
  },
  {
    icon: MessageCircle,
    title: "Sentiment",
    description: "Find out how your brand is perceived by AI, what's going well, and what requires improvements.",
    detail: "AI tone tracking, competitor benchmarking, and narrative repositioning to shape how AI describes you.",
  },
  {
    icon: Link2,
    title: "Citations",
    description: "Map which platforms AI pulls data from and ensure your brand is prominently cited across all of them.",
    detail: "Portal audit across 99acres, Magicbricks, Housing.com with structured schema markup optimization.",
  },
  {
    icon: Globe,
    title: "Amplification",
    description: "Ensure your campaigns, PR, and launches appear inside AI answers \u2014 not just paid ad slots.",
    detail: "AI-friendly campaign pages, PR indexing, and cross-platform message alignment for maximum reach.",
  },
];

const features = [
  {
    icon: Gauge,
    title: "Visibility Scores",
    desc: "Monitor how often you appear in AI answers with visibility scores and share of voice metrics.",
    viz: "gauge",
  },
  {
    icon: MessageCircle,
    title: "Sentiment & Keyword Insights",
    desc: "Analyse how AI describes your brand. Identify key themes, topics, and recurring sentiments.",
    viz: "sentiment",
  },
  {
    icon: Link2,
    title: "Citation Authority",
    desc: "See which websites influence AI-generated answers about your brand and track their authority.",
    viz: "citations",
  },
  {
    icon: LineChart,
    title: "Trends & Insights Over Time",
    desc: "Analyse changes in your presence across time, markets, topics, and languages.",
    viz: "trend",
  },
  {
    icon: Users,
    title: "Competitive Benchmarking",
    desc: "Compare your presence against industry leaders and competitors across all AI engines.",
    viz: "benchmark",
  },
  {
    icon: SlidersHorizontal,
    title: "Platform Comparisons",
    desc: "Uncover differences in visibility, accuracy, and representation across all the major AI engines.",
    viz: "platforms",
  },
];

const aiPlatforms = [
  "ChatGPT",
  "Perplexity",
  "Google AI Mode",
  "Google Gemini",
  "Microsoft Copilot",
  "Meta AI",
  "Grok",
  "DeepSeek",
  "Anthropic Claude",
  "Google AI Overviews",
];

function LargeGaugeViz() {
  return (
    <div className="flex flex-wrap items-end gap-2 h-24">
      {[35, 55, 45, 72, 60, 85, 78, 90, 65, 80].map((h, i) => (
        <motion.div
          key={i}
          className={`flex-1 ${i >= 5 ? "bg-primary" : "bg-primary/30"}`}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
        />
      ))}
    </div>
  );
}

function LargeSentimentViz() {
  const data = [
    { label: "Positive", w: "72%", color: "bg-primary" },
    { label: "Neutral", w: "20%", color: "bg-primary/40" },
    { label: "Negative", w: "8%", color: "bg-white/15" },
  ];
  return (
    <div className="space-y-3">
      {data.map((s, i) => (
        <div key={i}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span className="text-[10px] text-white/40">{s.label}</span>
            <span className="text-[10px] font-mono text-primary">{s.w}</span>
          </div>
          <div className="h-2 bg-white/5">
            <motion.div
              className={`h-full ${s.color}`}
              initial={{ width: "0%" }}
              animate={{ width: s.w }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function LargeTrendViz() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-24 overflow-visible">
      <motion.path
        d="M0 65 L25 55 L50 58 L75 42 L100 45 L125 30 L150 32 L175 18 L200 12"
        fill="none"
        stroke="hsl(160 84% 39%)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M0 70 L25 68 L50 65 L75 60 L100 58 L125 55 L150 52 L175 50 L200 48"
        fill="none"
        stroke="hsl(160 84% 39% / 0.25)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.circle
        cx="200"
        cy="12"
        r="3"
        fill="hsl(160 84% 39%)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      />
    </svg>
  );
}

function LargeBenchmarkViz() {
  const bars = [
    { label: "You", val: 87, primary: true },
    { label: "Comp A", val: 64, primary: false },
    { label: "Comp B", val: 51, primary: false },
    { label: "Comp C", val: 38, primary: false },
  ];
  return (
    <div className="space-y-3">
      {bars.map((b, i) => (
        <div key={i}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span className="text-[10px] text-white/40">{b.label}</span>
            <span className="text-[10px] font-mono text-white/30">{b.val}%</span>
          </div>
          <div className="h-2 bg-white/5">
            <motion.div
              className={`h-full ${b.primary ? "bg-primary" : "bg-white/15"}`}
              initial={{ width: "0%" }}
              animate={{ width: `${b.val}%` }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function LargeCitationsViz() {
  const sources = [
    { name: "99acres", score: 92 },
    { name: "MagicBricks", score: 85 },
    { name: "Housing.com", score: 78 },
    { name: "CommonFloor", score: 61 },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {sources.map((s, i) => (
        <motion.div
          key={i}
          className="border border-border p-3 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        >
          <span className="text-[10px] text-white/40 block">{s.name}</span>
          <span className="text-sm font-semibold text-primary">{s.score}</span>
        </motion.div>
      ))}
    </div>
  );
}

function LargePlatformsViz() {
  const platforms = [
    { name: "ChatGPT", val: 92 },
    { name: "Gemini", val: 78 },
    { name: "Perplexity", val: 85 },
    { name: "Copilot", val: 64 },
  ];
  return (
    <div className="space-y-3">
      {platforms.map((p, i) => (
        <div key={i}>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <span className="text-[10px] text-white/40">{p.name}</span>
            <span className="text-[10px] font-mono text-primary">{p.val}%</span>
          </div>
          <div className="h-1.5 bg-white/5">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${p.val}%` }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureDetailViz({ type }: { type: string }) {
  switch (type) {
    case "gauge": return <LargeGaugeViz />;
    case "sentiment": return <LargeSentimentViz />;
    case "citations": return <LargeCitationsViz />;
    case "trend": return <LargeTrendViz />;
    case "benchmark": return <LargeBenchmarkViz />;
    case "platforms": return <LargePlatformsViz />;
    default: return null;
  }
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeatureTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView || paused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isInView, paused]);

  const displayIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;
  const activeFeature = features[displayIdx];

  return (
    <div ref={ref}>
      <div className="mb-10 flex flex-wrap items-center gap-3" data-testid="feature-timeline-bar">
        <Clock className="h-3.5 w-3.5 text-white/20" />
        <div className="flex flex-1 min-w-0 gap-0.5">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="relative flex-1 h-1 bg-white/8 cursor-pointer"
              onMouseEnter={() => { setHoveredIdx(idx); setPaused(true); }}
              onMouseLeave={() => { setHoveredIdx(null); setPaused(false); }}
              onClick={() => { setActiveIdx(idx); setHoveredIdx(null); }}
              role="tab"
              aria-selected={displayIdx === idx}
              aria-label={f.title}
              data-testid={`feature-timeline-segment-${idx}`}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{
                  width: idx < displayIdx ? "100%" : idx === displayIdx ? "100%" : "0%",
                }}
                transition={{
                  duration: idx === displayIdx && !paused ? 4 : 0.3,
                  ease: idx === displayIdx && !paused ? "linear" : "easeOut",
                }}
              />
            </div>
          ))}
        </div>
        <span className="text-[10px] font-mono text-white/20">
          {String(displayIdx + 1).padStart(2, "0")}/{String(features.length).padStart(2, "0")}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
        <div className="bg-background p-8 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-primary/10">
                  <activeFeature.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] font-mono text-white/20">
                  {String(displayIdx + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className="text-xl font-bold text-white sm:text-2xl"
                data-testid={`feature-title-active`}
              >
                {activeFeature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45 max-w-md">
                {activeFeature.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {features.map((f, idx) => (
                  <div
                    key={idx}
                    className={`cursor-pointer border px-3 py-1.5 text-[11px] font-medium transition-colors duration-200 ${
                      displayIdx === idx
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border text-white/30"
                    }`}
                    onMouseEnter={() => { setHoveredIdx(idx); setPaused(true); }}
                    onMouseLeave={() => { setHoveredIdx(null); setPaused(false); }}
                    onClick={() => { setActiveIdx(idx); setHoveredIdx(null); }}
                    data-testid={`card-feature-${f.title.split(" ")[0].toLowerCase()}`}
                  >
                    {f.title}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="bg-card p-8 lg:p-12 flex items-center">
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={displayIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                data-testid="feature-viz-active"
              >
                <FeatureDetailViz type={activeFeature.viz} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResponseGraphViz({ hovered }: { hovered: boolean }) {
  const points = [65, 58, 62, 70, 68, 75, 72, 80, 78, 85, 82, 87];
  return (
    <div className="mt-4 border border-border p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-[10px] text-white/30">Visibility trend (30 days)</span>
        <span className="text-[10px] font-mono text-primary">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0.3 }}
            transition={{ duration: 0.3 }}
          >
            +22% growth
          </motion.span>
        </span>
      </div>
      <div className="flex flex-wrap items-end gap-1 h-12">
        {points.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-primary/30"
            initial={{ height: `${h * 0.3}%` }}
            animate={{ height: hovered ? `${h}%` : `${h * 0.4}%` }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-between gap-2 mt-2">
        <span className="text-[8px] text-white/15 font-mono">Jan</span>
        <span className="text-[8px] text-white/15 font-mono">Feb</span>
        <span className="text-[8px] text-white/15 font-mono">Mar</span>
      </div>
    </div>
  );
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const numericPart = value.replace(/[^0-9.]/g, "");
  const suffix = value.replace(/[0-9.]/g, "");
  const target = parseFloat(numericPart);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(eased * target);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);

  const displayVal = target % 1 !== 0
    ? current.toFixed(1) + suffix
    : Math.round(current) + suffix;

  return (
    <div ref={ref} className="py-16 px-8 text-center group">
      <span className="text-4xl font-bold text-primary sm:text-5xl" data-testid={`stat-${value}`}>
        {isInView ? displayVal : "0" + suffix}
      </span>
      <p className="mt-3 text-xs uppercase tracking-wider text-white/30">{label}</p>
    </div>
  );
}

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredPreview, setHoveredPreview] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
        data-testid="nav-header"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex h-16 flex-wrap items-center justify-between gap-4">
            <a href="#" className="flex flex-wrap items-center gap-2" data-testid="nav-logo">
              <span className="text-lg font-bold tracking-tight text-white">
                Logarythm<span className="text-primary">.AI</span>
              </span>
              <span className="border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
                estates
              </span>
            </a>
            <div className="hidden items-center gap-1 md:flex flex-wrap">
              <Button variant="ghost" size="sm" className="text-white/50" asChild data-testid="link-services">
                <a href="#services">Services</a>
              </Button>
              <Button variant="ghost" size="sm" className="text-white/50" asChild data-testid="link-features">
                <a href="#features">Features</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="outline" size="sm" className="border-border text-white/70" data-testid="button-nav-demo">
                Get a Demo
              </Button>
              <Button size="sm" data-testid="button-nav-started">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center" data-testid="section-hero">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-25"
            poster="/images/hero-fallback.jpg"
            data-testid="video-hero"
          >
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-20 lg:px-12">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="mb-6 inline-flex flex-wrap items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary" data-testid="badge-hero">
                Answer Engine Insights
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              data-testid="text-hero-title"
            >
              Understand how AI is talking about{" "}
              <span className="text-primary">your brand</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/45"
              data-testid="text-hero-description"
            >
              Track your AI visibility, see where and how AI mentions your brand, and uncover insights to enhance your presence across ChatGPT, Gemini, and Perplexity.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button size="lg" data-testid="button-hero-audit">
                Get a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-border text-white/70" data-testid="button-hero-started">
                Get Started
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="mt-16 flex flex-wrap items-center gap-6"
            >
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/15">Tracking across</span>
              <div className="flex flex-wrap gap-4">
                {["ChatGPT", "Gemini", "Perplexity", "Copilot", "Grok"].map((p) => (
                  <span key={p} className="text-xs font-medium text-white/20">{p}</span>
                ))}
                <span className="text-xs text-white/15">+5 more</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-white/20" />
        </motion.div>
      </section>

      {/* Platform Capabilities / Features Timeline */}
      <section id="features" className="py-28 border-t border-border" data-testid="section-features">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection className="mb-16 text-center">
            <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span className="inline-block h-1.5 w-1.5 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Platform Capabilities
              </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              data-testid="text-features-title"
            >
              Built for real estate intelligence
            </motion.h2>
          </AnimatedSection>

          <FeatureTimeline />
        </div>
      </section>

      {/* Real-time Intelligence / Insight Preview */}
      <section className="py-28 border-t border-border" data-testid="section-insight">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block h-1.5 w-1.5 bg-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Real-time Intelligence
                </span>
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                data-testid="text-insight-title"
              >
                See exactly what AI says about your projects
              </motion.h2>
              <motion.p variants={fadeIn} className="mt-4 text-base text-white/40 max-w-md">
                Our platform simulates real buyer queries and tracks how AI platforms respond, giving you actionable data to improve positioning.
              </motion.p>

              <motion.div variants={fadeIn} className="mt-8 space-y-4">
                {[
                  "\"Best 3 BHK in Andheri West\" \u2014 Are you recommended?",
                  "\"Compare Godrej vs Lodha in Thane\" \u2014 How are you framed?",
                  "\"Top developers in Whitefield\" \u2014 Do you even appear?",
                ].map((q, i) => (
                  <div key={i} className="flex flex-wrap items-start gap-3">
                    <div className="mt-1 h-1 w-1 shrink-0 bg-primary" />
                    <span className="text-sm text-white/50 font-mono">{q}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="mt-10">
                <Button data-testid="button-insight-audit">
                  Run a Free AI Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <motion.div variants={fadeIn}>
                <Card
                  className="border-border bg-card overflow-visible"
                  data-testid="card-ai-response"
                  onMouseEnter={() => setHoveredPreview(true)}
                  onMouseLeave={() => setHoveredPreview(false)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-white/30">
                      <Globe className="h-3.5 w-3.5" />
                      <span className="font-mono">AI Response Preview</span>
                      <motion.span
                        className="ml-auto text-[10px] text-primary font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredPreview ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        LIVE
                      </motion.span>
                    </div>

                    <div className="border border-border bg-background p-5">
                      <p className="text-xs text-white/30 mb-3 font-mono">
                        Query: &quot;What are the best developers in Bandra?&quot;
                      </p>
                      <p className="text-sm text-white/60 leading-relaxed">
                        Choosing the right developer in Bandra comes down to track record, delivery timelines, and project quality. Here&apos;s a curated breakdown of the top developers:
                      </p>
                      <div className="mt-4 space-y-3">
                        {["Your Brand", "Competitor A", "Competitor B"].map((name, i) => (
                          <motion.div
                            key={name}
                            className="flex flex-wrap items-center gap-3 border border-border p-3"
                            animate={{
                              borderColor: hoveredPreview && i === 0
                                ? "hsl(160 84% 39% / 0.4)"
                                : "hsl(0 0% 12%)",
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="font-mono text-xs text-white/30">#{i + 1}</span>
                            <span className={`text-sm font-medium ${i === 0 ? "text-primary" : "text-white/60"}`}>
                              {name}
                            </span>
                            {i === 0 && (
                              <span className="ml-auto border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                                YOUR BRAND
                              </span>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {[
                          { label: "Visibility", val: "87%" },
                          { label: "Sentiment", val: "+ve" },
                          { label: "Citations", val: "12" },
                        ].map((m) => (
                          <div key={m.label} className="border border-border p-2 text-center">
                            <span className="text-[10px] text-white/25 block">{m.label}</span>
                            <span className="text-xs font-semibold text-primary">{m.val}</span>
                          </div>
                        ))}
                      </div>

                      <ResponseGraphViz hovered={hoveredPreview} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 border-t border-border" data-testid="section-services">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection className="mb-16">
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-block h-1.5 w-1.5 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Understand and control your AI Presence
              </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl"
              data-testid="text-services-title"
            >
              Five dimensions of AI visibility
            </motion.h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
              {services.map((service, idx) => (
                <motion.div
                  key={service.title}
                  variants={fadeIn}
                  className="group relative bg-background"
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  data-testid={`card-service-${idx}`}
                >
                  <div className={`relative h-full p-8 transition-colors duration-300 ${
                    hoveredService === idx ? "bg-card" : ""
                  }`}>
                    <div className={`absolute top-0 left-0 h-[2px] w-full transition-colors duration-300 ${
                      hoveredService === idx ? "bg-primary" : "bg-transparent"
                    }`} />

                    <service.icon className={`h-5 w-5 transition-colors duration-300 ${
                      hoveredService === idx ? "text-primary" : "text-white/30"
                    }`} />

                    <h3 className="mt-5 text-base font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/40">
                      {service.description}
                    </p>

                    <div className="mt-4 border-t border-border pt-4">
                      <p className={`text-xs leading-relaxed text-primary/80 transition-opacity duration-300 ${
                        hoveredService === idx ? "opacity-100" : "opacity-0"
                      }`}>
                        {service.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-28 border-t border-border" data-testid="section-why">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <AnimatedSection>
              <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-block h-1.5 w-1.5 bg-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Why it matters
                </span>
              </motion.div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                data-testid="text-why-title"
              >
                The buyer journey has fundamentally shifted
              </motion.h2>
              <motion.p variants={fadeIn} className="mt-4 text-base text-white/40 max-w-md">
                Today&apos;s buyers don&apos;t scroll portals. They ask AI. The developer who structures for AI today owns the conversation tomorrow.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection className="space-y-4">
              {[
                {
                  icon: Trophy,
                  title: "AI Recommends, Not Ranks",
                  desc: "AI picks one or two answers. Not ten links. Your brand must be the one it picks.",
                },
                {
                  icon: CheckCircle2,
                  title: "Trust Is Structured",
                  desc: "AI trusts verified data and consistent citations \u2014 not paid ads or SEO tricks.",
                },
                {
                  icon: LineChart,
                  title: "Early Movers Win",
                  desc: "Structure for AI today. Late entrants face an exponentially harder battle.",
                },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeIn}>
                  <Card className="border-border bg-card hover-elevate overflow-visible" data-testid={`card-why-${item.title.split(" ")[0].toLowerCase()}`}>
                    <CardContent className="flex flex-wrap items-start gap-4 p-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-border bg-background">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="mt-1 text-sm text-white/40">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border" data-testid="section-stats">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <AnimatedStat value="73%" label="of property searches now involve AI" />
            <AnimatedStat value="4.2x" label="higher conversion from AI leads" />
            <AnimatedStat value="58%" label="of buyers trust AI over ads" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 border-t border-border" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <motion.h2
              variants={fadeIn}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              data-testid="text-cta-title"
            >
              Ready to own the AI conversation?
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="mt-4 text-base text-white/40"
            >
              Get a complimentary AI visibility audit. We&apos;ll show you exactly where your brand stands.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Button size="lg" data-testid="button-cta-audit">
                Request Free Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-border text-white/70" data-testid="button-cta-contact">
                Talk to Us
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* AI Platforms */}
      <section className="border-t border-border py-16" data-testid="section-platforms">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-white/20 mb-8">
            Tracking AI visibility across
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {aiPlatforms.map((platform) => (
              <span key={platform} className="text-sm font-medium text-white/25" data-testid={`platform-${platform.replace(/\s+/g, "-").toLowerCase()}`}>
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12" data-testid="footer">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold tracking-tight text-white/50">
                Logarythm<span className="text-primary/50">.AI</span>
              </span>
              <span className="border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                estates
              </span>
            </div>
            <p className="text-xs text-white/20">
              AI-powered visibility intelligence for the real estate industry.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
