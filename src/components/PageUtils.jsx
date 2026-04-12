import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronUp } from "lucide-react";

/** Reading progress bar across top of viewport */
export function ReadingProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[300]"
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="w-full h-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500" />
    </motion.div>
  );
}

/** Scroll-to-top floating button */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8, pointerEvents: visible ? "auto" : "none" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.25 }}
      className="fixed bottom-6 left-6 z-[100] p-3 rounded-xl border border-white/10 shadow-lg"
      style={{ background: "linear-gradient(135deg, rgba(20,184,166,0.2), rgba(96,165,250,0.2))", backdropFilter: "blur(10px)" }}
    >
      <ChevronUp className="w-5 h-5 text-teal-400" />
    </motion.button>
  );
}
