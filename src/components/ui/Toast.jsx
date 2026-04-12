import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X } from "lucide-react";

export default function Toast({ message, type = "success", onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-md border"
          style={{
            background: type === "success"
              ? "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(6,182,212,0.15))"
              : "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,158,11,0.15))",
            borderColor: type === "success" ? "rgba(16,185,129,0.4)" : "rgba(239,68,68,0.4)",
          }}
        >
          {type === "success"
            ? <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            : <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          }
          <span className="text-white text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
