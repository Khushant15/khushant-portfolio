import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail, Github, Linkedin, Trophy, Sparkles } from "lucide-react";
import Toast from "@/components/ui/Toast";

const CONTACTS = [
  { icon: Mail,     bg: "bg-purple-500/10", color: "text-purple-400",  border: "border-purple-500/20", label: "Email",    value: "khushantsharma766@gmail.com",          href: "mailto:khushantsharma766@gmail.com" },
  { icon: MapPin,   bg: "bg-pink-500/10",   color: "text-pink-400",    border: "border-pink-500/20",   label: "Location", value: "Vasai, India" },
  { icon: Phone,    bg: "bg-green-500/10",  color: "text-green-400",   border: "border-green-500/20",  label: "Phone",    value: "+91 7208500953",                       href: "tel:+917208500953" },
  { icon: Github,   bg: "bg-white/5",       color: "text-gray-300",    border: "border-white/10",      label: "GitHub",   value: "github.com/Khushant15",                href: "https://github.com/Khushant15",                                         external: true },
  { icon: Linkedin, bg: "bg-blue-500/10",   color: "text-blue-400",    border: "border-blue-500/20",   label: "LinkedIn", value: "khushant-sharma-9318962b2",            href: "https://www.linkedin.com/in/khushant-sharma-9318962b2",                 external: true },
  { icon: Trophy,   bg: "bg-yellow-500/10", color: "text-yellow-400",  border: "border-yellow-500/20", label: "LeetCode", value: "khushantsharma766",                    href: "https://leetcode.com/u/khushantsharma766/",                             external: true },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [toast, setToast]       = useState({ message: "", type: "success" });

  const showToast  = (message, type = "success") => setToast({ message, type });
  const clearToast = () => setToast({ message: "", type: "success" });

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    if (!formData.name.trim())    { tempErrors.name    = "Name is required";     isValid = false; }
    if (!formData.email.trim())   { tempErrors.email   = "Email is required";    isValid = false; }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) { tempErrors.email = "Email is invalid"; isValid = false; }
    if (!formData.subject.trim()) { tempErrors.subject = "Subject is required";  isValid = false; }
    if (!formData.message.trim()) { tempErrors.message = "Message is required";  isValid = false; }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) { showToast("Please fill in all required fields.", "error"); return; }
    setLoading(true);
    const form = new FormData();
    form.append("access_key", "0e4a70e0-9df8-45b2-b472-431e5a710291");
    form.append("name",    formData.name);
    form.append("email",   formData.email);
    form.append("subject", formData.subject || "New Contact Form Submission");
    form.append("message", formData.message);
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: form });
      const result   = await response.json();
      if (response.ok) {
        showToast("Message sent! I'll get back to you soon 🚀", "success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        showToast(result.message || "There was an error sending your message.", "error");
      }
    } catch {
      showToast("An error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-[#0d0d1f] border ${
      errors[field] ? "border-red-500" : "border-purple-500/20"
    } focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/30 transition-all text-white placeholder-gray-600 text-sm`;

  return (
    <main className="relative bg-[#01040f] text-white min-h-screen overflow-hidden">
      <Toast message={toast.message} type={toast.type} onClose={clearToast} />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-600/8 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <section className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" /> Let's Connect
            </motion.div>
            <motion.h1
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight mb-4"
            >
              <span className="text-white">Get in </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-gray-400 text-base max-w-xl mx-auto"
            >
              Have a project in mind or want to collaborate? Drop me a message — I typically respond within 24 hours.
            </motion.p>

            {/* Availability badge */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance &amp; full-time roles
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ─── Contact Info ─── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {CONTACTS.map(({ icon: Icon, bg, color, border, label, value, href, external }) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${border} bg-gradient-to-r from-white/[0.03] to-transparent hover:from-purple-500/5 transition-all duration-300 group`}
                >
                  <div className={`${bg} ${color} p-3 rounded-xl border ${border} group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className={`${color} text-sm font-medium hover:brightness-125 transition-all`}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className={`${color} text-sm font-medium`}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* ─── Contact Form ─── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-pink-600/5 backdrop-blur-sm p-8 shadow-2xl shadow-purple-900/20"
            >
              {/* Neon top border accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" />

              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-purple-400" />
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input id="contact-name" type="text" placeholder="Your Name" className={inputClass("name")} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    {errors.name    && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input id="contact-email" type="email" placeholder="Your Email" className={inputClass("email")} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    {errors.email   && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <input id="contact-subject" type="text" placeholder="Subject" className={inputClass("subject")} value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <textarea id="contact-message" placeholder="Your Message" rows="5" className={inputClass("message") + " resize-none"} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-[0_0_2rem_-0.5rem_#ec4899] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  {loading ? (
                    <span className="flex items-center gap-2 relative z-10">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2 relative z-10">
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
