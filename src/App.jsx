import React, { useState, useEffect } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import NotFound from "./pages/NotFound/NotFound";
import CommandPalette from "./components/CommandPalette";
import { ReadingProgressBar, ScrollToTop } from "./components/PageUtils";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  // ⌘K / Ctrl+K handler
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Global utilities */}
      <ReadingProgressBar />
      <ScrollToTop />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <Header onOpenPalette={() => setPaletteOpen(true)} />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
