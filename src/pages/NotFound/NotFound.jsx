import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`";

function glitch(str) {
  return str
    .split("")
    .map((c) =>
      Math.random() < 0.15
        ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        : c
    )
    .join("");
}

export default function NotFound() {
  const navigate = useNavigate();
  const [text, setText] = useState("404");

  useEffect(() => {
    let count = 0;
    const id = setInterval(() => {
      setText(count < 10 ? glitch("404") : "404");
      count++;
      if (count > 14) count = 10;
    }, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>

      {/* Glowing blob */}
      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl top-1/3 -translate-y-1/2 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center relative z-10"
      >
        {/* Giant glitch number */}
        <div
          className="text-[10rem] font-black leading-none select-none"
          style={{
            background: "linear-gradient(135deg, #4ade80, #06b6d4, #818cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "-4px",
          }}
        >
          {text}
        </div>

        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white mt-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-md mx-auto mb-10 text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          Looks like this page drifted into the void. Let&apos;s get you back on track.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-blue-500 text-white font-medium text-sm hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <Home className="w-4 h-4" />
            Home
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
