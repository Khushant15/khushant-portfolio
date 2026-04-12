import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Code, Briefcase, GraduationCap, Mail, Home, Cpu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const commands = [
  { id: "home",       label: "Go to Home",       icon: Home,           path: "/" },
  { id: "skills",     label: "Go to Skills",      icon: Cpu,            path: "/skills" },
  { id: "experience", label: "Go to Experience",  icon: Briefcase,      path: "/experience" },
  { id: "education",  label: "Go to Education",   icon: GraduationCap,  path: "/education" },
  { id: "projects",   label: "Go to Projects",    icon: Code,           path: "/projects" },
  { id: "contact",    label: "Go to Contact",     icon: Mail,           path: "/contact" },
  {
    id: "github",
    label: "Open GitHub",
    icon: Code,
    action: () => window.open("https://github.com/Khushant15", "_blank"),
  },
  {
    id: "resume",
    label: "Download Resume",
    icon: Briefcase,
    action: () => {
      const a = document.createElement("a");
      a.href = "/Khushant_Resume.pdf";
      a.download = "Khushant_Resume.pdf";
      a.click();
    },
  },
];

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelected(0);
    setQuery("");
  }, [open]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter") {
        const cmd = filtered[selected];
        if (cmd) runCommand(cmd);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [filtered, selected, onClose]);

  const runCommand = (cmd) => {
    onClose();
    if (cmd.action) cmd.action();
    else if (cmd.path) navigate(cmd.path);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh] px-4"
          style={{ background: "rgba(2,6,23,0.8)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ background: "rgba(9,17,35,0.95)" }}
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelected(0); }}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-white text-sm placeholder-gray-500 outline-none"
              />
              <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="text-center text-gray-500 text-sm py-8">No results found</p>
              ) : (
                filtered.map((cmd, i) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onMouseEnter={() => setSelected(i)}
                      onClick={() => runCommand(cmd)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                        selected === i
                          ? "bg-blue-500/20 text-white"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${selected === i ? "text-blue-400" : "text-gray-500"}`} />
                      {cmd.label}
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer hint */}
            <div className="px-4 py-2 border-t border-white/10 flex items-center gap-4 text-xs text-gray-600">
              <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-gray-400">↑↓</kbd> navigate</span>
              <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-gray-400">↵</kbd> select</span>
              <span><kbd className="bg-white/10 px-1.5 py-0.5 rounded text-gray-400">Esc</kbd> close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
