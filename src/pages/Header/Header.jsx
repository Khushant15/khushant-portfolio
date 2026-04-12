import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaSun,
  FaMoon,
  FaDownload,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onOpenPalette }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Read preference: default to DARK if nothing stored
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true; // default: dark
  });

  const [scrolled, setScrolled] = useState(false);

  // Apply dark class IMMEDIATELY on mount to avoid flash
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []); // eslint-disable-line

  // Sync active link with location changes
  useEffect(() => {
    const path = location.pathname.substring(1) || "home";
    setActiveLink(path);
  }, [location.pathname]);

  // Scroll detection for header shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Persist + apply dark mode on every toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const navLinks = [
    { id: "home",       icon: FaHome,          text: "Home",       path: "/" },
    { id: "skills",     icon: FaCode,          text: "Skills",     path: "/skills" },
    { id: "experience", icon: FaBriefcase,     text: "Experience", path: "/experience" },
    { id: "education",  icon: FaGraduationCap, text: "Education",  path: "/education" },
    { id: "projects",   icon: FaLaptopCode,    text: "Projects",   path: "/projects" },
    { id: "contact",    icon: FaEnvelope,      text: "Contact",    path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-black/30" : "bg-transparent"
      }`}
    >
      {/* ── Desktop pill nav ── */}
      <div className="hidden md:flex items-center justify-center pt-4">
        <div className="p-[2px] rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md rounded-full px-4 py-2">
            <div className="flex items-center gap-1">
              {navLinks.map(({ id, icon: Icon, text, path }) => (
                <Link
                  key={id}
                  to={path}
                  onClick={() => setActiveLink(id === "home" ? "" : id)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                    hover:bg-white/10
                    ${activeLink === (id === "home" ? "" : id) || (id === "home" && activeLink === "home")
                      ? "bg-white/15 text-white"
                      : "text-gray-300 hover:text-white"
                    }`}
                >
                  <Icon className="text-base" />
                  <span>{text}</span>
                </Link>
              ))}

              {/* ⌘K button */}
              <button
                onClick={onOpenPalette}
                title="Command palette (Ctrl+K)"
                className="px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white hover:bg-white/10 flex items-center gap-1.5 transition border border-white/10 ml-1"
              >
                <span className="hidden lg:inline">Search</span>
                <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-gray-400">⌘K</kbd>
              </button>

              {/* Resume */}
              <a
                href="/Khushant_Resume.pdf"
                download="Khushant_Resume.pdf"
                className="px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:brightness-110 transition ml-1"
              >
                <FaDownload />
                <span className="hidden lg:inline">Resume</span>
              </a>

              {/* Dark toggle */}
              <button
                onClick={() => setIsDark((p) => !p)}
                className="px-3 py-1.5 rounded-full text-sm font-medium text-white hover:bg-white/10 flex items-center gap-2 transition"
              >
                {isDark ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-blue-300" />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* ── Mobile header bar ── */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-gray-900/95 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-white font-bold text-lg">Portfolio</Link>
          {/* Availability badge */}
          <span className="flex items-center gap-1 text-[10px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onOpenPalette} className="text-gray-400 hover:text-white transition p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/97 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col py-3">
            {navLinks.map(({ id, icon: Icon, text, path }) => (
              <Link
                key={id}
                to={path}
                onClick={() => { setActiveLink(id === "home" ? "" : id); setIsMenuOpen(false); }}
                className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors
                  ${activeLink === (id === "home" ? "" : id) || (id === "home" && activeLink === "home")
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
              >
                <Icon className="text-base" />
                {text}
              </Link>
            ))}
            <div className="px-6 py-3 flex gap-3">
              <a
                href="/Khushant_Resume.pdf"
                download="Khushant_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:brightness-110 transition"
              >
                <FaDownload /> Resume
              </a>
              <button
                onClick={() => setIsDark((p) => !p)}
                className="p-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition"
              >
                {isDark ? <FaSun className="text-yellow-300 w-5 h-5" /> : <FaMoon className="text-blue-300 w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gradient animation style */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
