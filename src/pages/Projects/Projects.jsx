import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, X, ZoomIn, Layers, Star } from "lucide-react";

// ─── Assets ────────────────────────────────────────────────────────────────
import portfolioImg from "../../assets/images/portfolio.png";
import codebuddy1  from "../../assets/images/codebuddy1.png";
import codebuddy2  from "../../assets/images/codebuddy2.png";
import codebuddy3  from "../../assets/images/codebuddy3.png";
import codebuddy4  from "../../assets/images/codebuddy4.png";
import codebuddy5  from "../../assets/images/codebuddy5.png";

// CareerSync AI
import cs1 from "../../assets/images/careersync/landing.png";
import cs2 from "../../assets/images/careersync/summary.png";
import cs3 from "../../assets/images/careersync/matrix.png";
import cs4 from "../../assets/images/careersync/studio.png";

// PawFect Care
import pw1 from "../../assets/images/pawfectcare/hero.png";
import pw2 from "../../assets/images/pawfectcare/tools.png";
import pw3 from "../../assets/images/pawfectcare/breeds.png";
import pw4 from "../../assets/images/pawfectcare/treats.png";

// PrepBuddy
import pb1 from "../../assets/images/prepbuddy/hero.png";
import pb2 from "../../assets/images/prepbuddy/features.png";
import pb3 from "../../assets/images/prepbuddy/cards.png";
import pb4 from "../../assets/images/prepbuddy/contact.png";

// TextForge
import tf1 from "../../assets/images/textforge/hero.png";
import tf2 from "../../assets/images/textforge/stats.png";
import tf3 from "../../assets/images/textforge/options.png";

// Crease & Crown
import cc1 from "../../assets/images/turf/hero.png";
import cc2 from "../../assets/images/turf/booking.png";
import cc3 from "../../assets/images/turf/gallery.png";

// Market Regime & CV
import mr1 from "../../assets/images/marketregime/analytics.png";
import fd1 from "../../assets/images/facedetection/demo.png";

// ─── Data ───────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: "careersync",
    title: "CareerSync AI",
    tagline: "Hybrid AI analysis for resume & ATS optimization",
    description:
      "A sophisticated Flask-based web application designed to help job seekers optimize resumes using hybrid AI analysis. Combines traditional ML (TF-IDF) with modern LLM-driven insights (Groq/Llama-3) to provide ATS readiness audits, competency profiling, and AI-generated cover letters.",
    images: [cs1, cs2, cs3, cs4],
    tech: ["Flask", "Python", "Groq / Llama-3", "TF-IDF", "Chart.js", "Tailwind CSS"],
    category: "AI",
    status: "Live",
    featured: true,
    accent: "#10b981",
    accentRGB: "16,185,129",
    githubLink: "https://github.com/Khushant15/CareerSync-AI",
    liveLink: "https://aicareersync.netlify.app/",
  },
  {
    id: "prepbuddy",
    title: "PrepBuddy",
    tagline: "Elite AI interview smart engine",
    description:
      "Enterprise-grade full-stack platform for mastering technical and behavioral interviews. Features dual-LLM AI interviewing (Groq + Gemini), real-time Firestore-synced telemetry dashboards, and intelligent job matching via TheirStack.",
    images: [pb1, pb2, pb3, pb4],
    tech: ["Next.js", "TypeScript", "Tailwind", "Firebase", "Groq Cloud", "Gemini Pro"],
    category: "Full Stack",
    status: "Live",
    featured: false,
    accent: "#6366f1",
    accentRGB: "99,102,241",
    githubLink: "https://github.com/Khushant15/PrepBuddy",
    liveLink: "https://prep-buddy-teal.vercel.app/",
  },
  {
    id: "codebuddy",
    title: "CodeBuddy",
    tagline: "Elite professional coding learning platform",
    description:
      "Enterprise-grade full-stack interactive platform to master Python, HTML & CSS. Combines gamified learning (XP, streaks) with real-world debugging challenges and an integrated 'Architect Intelligence' AI engine powered by Groq (Llama-3.3-70b).",
    images: [codebuddy1, codebuddy2, codebuddy3, codebuddy4, codebuddy5],
    tech: ["Next.js 15", "TypeScript", "Node.js", "MongoDB", "Firebase Auth", "Groq AI", "Judge0", "Tailwind"],
    category: "Full Stack",
    status: "Live",
    featured: false,
    accent: "#60A5FA",
    accentRGB: "96,165,250",
    githubLink: "https://github.com/Khushant15/CodeBuddyWebApp",
    liveLink: "https://code-buddy-web-app-wes2.vercel.app/",
  },
  {
    id: "market-regime",
    title: "Market Regime Detection",
    tagline: "Professional-grade ML regime analysis toolkit",
    description:
      "Advanced Python toolkit for detecting market regimes (Bull, Bear, Sideways) using K-Means and HMM. Features rich feature engineering, regime-aware backtesting vs Buy & Hold, and an interactive Plotly dashboard with professional dark-themed charts.",
    images: [mr1],
    tech: ["Python", "Machine Learning", "KMeans / HMM", "Plotly", "Scikit-Learn", "Matplotlib"],
    category: "AI",
    status: "Live",
    featured: false,
    accent: "#38bdf8",
    accentRGB: "56,189,248",
    githubLink: "https://github.com/Khushant15/Market-Regime-Detection-System",
  },
  {
    id: "face-detection",
    title: "Face & Eye Detection",
    tagline: "Real-time CV with Haar Cascade classifiers",
    description:
      "High-performance computer vision application utilizing OpenCV for real-time webcam detection. Features precision face and eye tracking with lightweight execution, optimized for real-time edge processing.",
    images: [fd1],
    tech: ["Python", "OpenCV", "NumPy", "Haar Cascade"],
    category: "AI",
    status: "Live",
    featured: false,
    accent: "#818cf8",
    accentRGB: "129,140,248",
    githubLink: "https://github.com/Khushant15",
  },
  {
    id: "crease-crown",
    title: "Crease & Crown",
    tagline: "Premium cricket turf booking facility",
    description:
      "Dark, premium multi-page website for a cricket turf booking facility. Features live SVG pitch status cards, dynamic slot pricing, and a category-filtered lightbox gallery. Built for high-conversion and seamless user experience.",
    images: [cc1, cc2, cc3],
    tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide React", "ApexCharts"],
    category: "Frontend",
    status: "Live",
    featured: false,
    accent: "#eab308",
    accentRGB: "234,179,8",
    githubLink: "https://github.com/Khushant15/Turf-Website",
    liveLink: "https://turf-website-gamma.vercel.app/",
  },
  {
    id: "textforge",
    title: "TextForge",
    tagline: "Next-gen text cleaner & transformer",
    description:
      "A high-performance text processing tool featuring regex find/replace, case transforms, and advanced cleaning logic. Includes real-time diff summaries and a color-coded progression bar for character limits.",
    images: [tf1, tf2, tf3],
    tech: ["React", "Vite", "Tailwind CSS", "Regex", "File-Saver"],
    category: "Frontend",
    status: "Live",
    featured: false,
    accent: "#ec4899",
    accentRGB: "236,72,153",
    githubLink: "https://github.com/Khushant15/textforge",
    liveLink: "https://textforge-delta.vercel.app/",
  },
  {
    id: "pawfectcare",
    title: "PawFect Care",
    tagline: "Data-driven personalized pet care strategies",
    description:
      "Premium pet care platform featuring intelligent nutrition planning, dog age calculators, and a comprehensive breed discovery system. Designed with a sleek 'liquid glass' aesthetic for high user engagement.",
    images: [pw1, pw2, pw3, pw4],
    tech: ["React 19", "Tailwind CSS 4", "Vite 6", "Lucide React", "Framer Motion"],
    category: "Frontend",
    status: "Live",
    featured: false,
    accent: "#f97316",
    accentRGB: "249,115,22",
    githubLink: "https://github.com/Khushant15/PawFectCare",
    liveLink: "https://pawfectcareweb.netlify.app/",
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    tagline: "Modern personal portfolio with rich animations",
    description:
      "Responsive portfolio built with React, Vite, and Tailwind CSS featuring animated timelines, a command palette, reading progress bar, and interactive project showcase.",
    images: [portfolioImg],
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lenis"],
    category: "Frontend",
    status: "Live",
    featured: false,
    accent: "#4ADE80",
    accentRGB: "74,222,128",
    githubLink: "https://github.com/Khushant15/khushant-portfolio",
    liveLink: "https://khushant-portfolio.vercel.app",
  },
];

const CATEGORIES = ["All", "AI", "Full Stack", "Frontend"];

const STATUS_STYLES = {
  Live:        "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Progress": "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

// ─── Lightbox ───────────────────────────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.92 }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm">
          <X className="w-4 h-4" /> Close <kbd className="bg-white/10 px-1 rounded text-xs">Esc</kbd>
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={images[idx]}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
            className="w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl overflow-hidden"
          />
        </AnimatePresence>

        {/* Nav */}
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 transition">
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="mt-4 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-8 h-1 rounded-full transition-all ${i === idx ? "bg-white" : "bg-white/25"}`}
                />
              ))}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Image Carousel inside card ─────────────────────────────────────────────
function ImageCarousel({ images, accent, onLightbox }) {
  const [idx, setIdx] = useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  if (!images || images.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-gray-900/50 flex items-center justify-center border border-white/5 shadow-2xl group/img">
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
          style={{ background: `radial-gradient(circle at 50% 50%, ${accent}, transparent)` }} />
        <div className="text-center relative z-10 p-6">
          <Layers className="w-10 h-10 mx-auto mb-3 opacity-20" style={{ color: accent }} />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Visualization Pending</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative overflow-hidden rounded-xl aspect-[16/10] bg-gray-950 group/img cursor-zoom-in ring-1 ring-white/10 shadow-2xl" 
      onClick={() => onLightbox(idx)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          alt=""
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-110"
        />
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity duration-300" />

      {/* Zoom overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 opacity-0 group-hover/img:opacity-100 transform translate-y-4 group-hover/img:translate-y-0 transition-all duration-300">
          <ZoomIn className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className={`h-1 rounded-full transition-all duration-500 ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"}`}
            />
          ))}
        </div>
      )}

      {/* Nav arrows (only on desktop) */}
      {images.length > 1 && (
        <div className="hidden md:block">
          <button
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/10 opacity-0 group-hover/img:opacity-100 transition-all hover:bg-black/60"
          ><ChevronLeft className="w-4 h-4" /></button>
          <button
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/10 opacity-0 group-hover/img:opacity-100 transition-all hover:bg-black/60"
          ><ChevronRight className="w-4 h-4" /></button>
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1 uppercase tracking-wider">
        <Layers className="w-3 h-3" />
        {idx + 1} / {images.length}
      </div>
    </div>
  );
}

// ─── Featured Project Card (full-width) ──────────────────────────────────────
function FeaturedCard({ project, onLightbox }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/8"
      style={{ background: "rgba(9,17,35,0.8)" }}
    >
      {/* Accent glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
        style={{ background: `radial-gradient(800px circle at 50% 0%, rgba(${project.accentRGB},0.08), transparent 60%)` }}
      />
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: `linear-gradient(135deg, rgba(${project.accentRGB},0.06) 0%, transparent 50%)` }}
      />

      <div className="grid md:grid-cols-2 gap-0">
        {/* Image side */}
        <div className="p-6 md:p-8">
          <ImageCarousel images={project.images} accent={project.accent} onLightbox={(i) => onLightbox(project.id, i)} />
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-center p-6 md:p-10 md:pl-2">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              <Star className="w-3 h-3 fill-current" /> Featured
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${STATUS_STYLES[project.status]}`}>
              {project.status === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 align-middle animate-pulse" />}
              {project.status}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/8">
              {project.category}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-medium mb-4" style={{ color: project.accent }}>
            {project.tagline}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-lg border font-medium"
                style={{
                  background: `rgba(${project.accentRGB},0.08)`,
                  borderColor: `rgba(${project.accentRGB},0.2)`,
                  color: project.accent,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
                style={{ background: `linear-gradient(135deg, rgba(${project.accentRGB},0.8), rgba(${project.accentRGB},0.5))`, boxShadow: `0 4px 24px -4px rgba(${project.accentRGB},0.4)` }}
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/8 border border-white/10 hover:bg-white/15 transition-all duration-200 hover:scale-105"
              >
                <Github className="w-4 h-4" /> Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Regular Project Card ────────────────────────────────────────────────────
function ProjectCard({ project, index, onLightbox }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 transition-all duration-300"
      style={{ background: "rgba(9,17,35,0.7)", backdropFilter: "blur(12px)" }}
    >
      {/* Hover accent border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(400px circle at 50% 0%, rgba(${project.accentRGB},0.12), transparent 70%)`, boxShadow: `inset 0 0 0 1px rgba(${project.accentRGB},0.3)` }}
      />

      {/* Image Area */}
      <div className="p-4">
        <ImageCarousel images={project.images} accent={project.accent} onLightbox={(i) => onLightbox(project.id, i)} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 pt-2">
        {/* Badges row */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${STATUS_STYLES[project.status]}`}>
            {project.status === "Live" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 align-middle animate-pulse" />}
            {project.status}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/8">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-opacity-95 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-semibold mb-3 tracking-wide" style={{ color: project.accent }}>
          {project.tagline}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1 min-h-[4.5rem]">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-1 rounded-lg border font-bold uppercase tracking-tighter"
              style={{
                background: `rgba(${project.accentRGB},0.08)`,
                borderColor: `rgba(${project.accentRGB},0.2)`,
                color: project.accent,
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-[10px] px-2 py-1 text-gray-500 font-bold">+ {project.tech.length - 5}</span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-2.5 mt-auto">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-[1.02] hover:brightness-110 shadow-lg"
              style={{ background: `linear-gradient(135deg, rgba(${project.accentRGB},0.3), rgba(${project.accentRGB},0.15))`, border: `1px solid rgba(${project.accentRGB},0.3)` }}
            >
              <ExternalLink className="w-3.5 h-3.5" /> Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02] flex items-center justify-center"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null); // { projectId, imageIndex }

  const featured = PROJECTS.find((p) => p.featured);
  const grid = PROJECTS.filter((p) => !p.featured);

  const filtered = activeFilter === "All"
    ? grid
    : grid.filter((p) => p.category === activeFilter);

  const openLightbox = (projectId, idx) => setLightbox({ projectId, imageIndex: idx });
  const closeLightbox = () => setLightbox(null);

  const lightboxProject = lightbox ? PROJECTS.find((p) => p.id === lightbox.projectId) : null;

  return (
    <main className="min-h-screen bg-[#01040f] text-white">

      {/* ── Hero Header ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-16 px-4">
        {/* Background radial */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-500/6 rounded-full blur-3xl" />
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-purple-500/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
          >
            <Layers className="w-4 h-4" />
            {PROJECTS.length}+ Projects Built
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-5"
          >
            <span className="bg-gradient-to-br from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
              My{" "}
            </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A collection of things I&apos;ve built — from AI-powered learning platforms
            to high-performance web tools and premium facilities.
          </motion.p>
        </div>
      </section>

      {/* ── Featured ──────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex items-center gap-3 mb-6">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Featured Project</h2>
        </div>
        {featured && (
          <FeaturedCard project={featured} onLightbox={openLightbox} />
        )}
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        {/* Filter tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">All Projects</h2>
          <div className="flex gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-blue-500/20 border-blue-500/40 text-blue-300"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onLightbox={openLightbox} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-600">
            <Layers className="w-10 h-10 mx-auto mb-3 opacity-40" />
            No projects in this category yet.
          </div>
        )}
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────── */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Projects Built",    value: PROJECTS.length },
              { label: "Live on Vercel",    value: PROJECTS.filter(p => p.liveLink?.includes("vercel")).length + PROJECTS.filter(p => p.liveLink?.includes("netlify")).length },
              { label: "Tech Used",         value: [...new Set(PROJECTS.flatMap(p => p.tech))].length + "+" },
              { label: "In Progress",       value: PROJECTS.filter(p => p.status === "In Progress").length },
            ].map(({ label, value }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-1"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightbox && lightboxProject && (
          <Lightbox
            images={lightboxProject.images}
            startIndex={lightbox.imageIndex}
            onClose={closeLightbox}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
