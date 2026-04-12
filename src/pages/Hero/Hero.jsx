import { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Activity } from "lucide-react";

/* ── Animated grid ── */
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  </div>
);

/* ── Streaming typewriter effect ── */
function useTypewriter(text, speed = 28) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

/* ── Rotating title words ── */
const WORDS = [
  "Python & Full Stack Developer",
  "AI & Machine Learning Enthusiast",
  "Developing Next.js 15 Platforms",
  "Real-time CV & Data Science",
  "Building Enterprise-Grade Systems",
];

function FlipTitle() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % WORDS.length), 3200);
    return () => clearInterval(t);
  }, []);
  return (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="text-blue-400 font-medium"
    >
      {WORDS[idx]}
    </motion.span>
  );
}

/* ── GitHub stats mini-widget ── */
function GitHubStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Khushant15")
      .then((r) => r.json())
      .then((d) =>
        setStats({
          repos: d.public_repos,
          followers: d.followers,
          following: d.following,
        })
      )
      .catch(() => {});
  }, []);

  if (!stats) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="flex items-center gap-4 mt-6 px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm w-fit"
    >
      <a href="https://github.com/Khushant15" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors">
        <Github className="w-4 h-4" />
        <span className="text-xs font-medium">GitHub</span>
      </a>
      <div className="w-px h-4 bg-gray-700" />
      <div className="flex items-center gap-1 text-xs text-gray-300">
        <Star className="w-3.5 h-3.5 text-yellow-400" />
        <span>{stats.repos} repos</span>
      </div>
      <div className="flex items-center gap-1 text-xs text-gray-300">
        <Activity className="w-3.5 h-3.5 text-blue-400" />
        <span>{stats.followers} followers</span>
      </div>
    </motion.div>
  );
}

/* ── Code snippet for the window ── */
const CODE = `const profile = {
    name: 'Khushant Devendra Sharma',
    title: 'Python & Full Stack Developer | AI Enthusiast',
    skills: [
        'Python', 'Next.js 15', 'TypeScript',
        'Flask', 'ML / OpenCV', 'Firebase',
        'Tailwind CSS', 'AI / LLMs', 'MongoDB'
    ],
    portfolioSize: '9+ Projects',
    eagerToLearn: true,
    projectBuilder: true,
    hireable: function() {
        return this.eagerToLearn
            && this.projectBuilder;
    }
};`;

export default function Hero() {
  const codeRef = useRef(null);
  const { displayed, done } = useTypewriter(CODE, 20);

  useEffect(() => {
    if (codeRef.current) Prism.highlightElement(codeRef.current);
  }, [displayed]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0">
          <div className="absolute inset-0" />
          <GridBackground />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:pt-28 xl:pt-28 gap-12">

            {/* ── Left column ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl" />

              {/* Status pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-gray-300 text-xs sm:text-sm font-medium">Welcome to my universe</span>
              </div>

              {/* Heading */}
              <div className="relative mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I&apos;m
                    <span className="typing-effect gradient-text"> Khushant Sharma </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
              </div>

              {/* Flip title */}
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 backdrop-blur-sm">
                <i className="fas fa-rocket text-blue-400 animate-bounce text-sm" />
                <FlipTitle />
              </div>

              {/* Bio */}
              <div className="relative mb-8 max-w-xl">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  Passionate about building <span className="text-purple-400 font-semibold">AI-driven</span> solutions and 
                  <span className="text-blue-400 font-semibold"> high-performance full-stack</span> ecosystems. 
                  Focused on modern tools like <span className="text-teal-400 font-semibold">Next.js 15</span>, 
                  <span className="text-emerald-400 font-semibold"> OpenCV</span>, and ML.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/projects"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#ec4899]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 rounded-[11px] bg-gray-900 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>View Projects</span>
                      <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform" />
                    </span>
                  </span>
                </a>
                <a
                  href="/Khushant_Resume.pdf"
                  download
                  className="group relative inline-flex items-center justify-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:scale-105"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 rounded-[11px] bg-gray-900 border border-gray-700/50 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                      <span>Download Resume</span>
                      <i className="fas fa-download" />
                    </span>
                  </span>
                </a>
              </div>

              {/* GitHub stats mini-widget */}
              <GitHubStats />
            </motion.div>

            {/* ── Right column: streaming code window ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500" />
                    <div className="window-dot bg-yellow-500" />
                    <div className="window-dot bg-green-500" />
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code" /> developer.js
                    </span>
                  </div>
                  <pre className="language-javascript !bg-transparent">
                    <code ref={codeRef} className="language-javascript">{displayed}</code>
                    {/* Blinking cursor */}
                    {!done && (
                      <span
                        className="inline-block w-[2px] h-[1.1em] bg-teal-400 ml-0.5 align-middle"
                        style={{ animation: "blink 1s step-end infinite" }}
                      />
                    )}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <PortfolioPage />
      </main>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </>
  );
}
