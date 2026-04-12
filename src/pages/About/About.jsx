import { motion } from "framer-motion";
import { Code2, Layers, BrainCircuit, Rocket, Trophy, Users } from "lucide-react";
import HeroImg from "@/assets/images/hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0 },
};

const STATS = [
  { icon: Rocket,       label: "Projects Built",  value: "9+",       color: "text-purple-400" },
  { icon: Trophy,       label: "Certifications",  value: "8+",       color: "text-pink-400"   },
  { icon: BrainCircuit, label: "AI Integrations", value: "4+",       color: "text-fuchsia-400"},
  { icon: Users,        label: "GitHub",           value: "Active",   color: "text-violet-400" },
];

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    desc: "Architecting end-to-end web solutions with Next.js 15, Flask, Node.js, and MongoDB.",
    color: "from-purple-600/20 to-purple-500/5",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
  },
  {
    icon: BrainCircuit,
    title: "AI & ML Enthusiast",
    desc: "Building LLM-powered products (Groq, Gemini) and ML pipelines including market regime analysis and computer vision.",
    color: "from-pink-600/20 to-pink-500/5",
    border: "border-pink-500/20",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-400",
  },
  {
    icon: Layers,
    title: "9+ Live Projects",
    desc: "From AI-driven resume analyzers and interview platforms to pet care apps — each built with premium UX and scalable code.",
    color: "from-fuchsia-600/20 to-fuchsia-500/5",
    border: "border-fuchsia-500/20",
    iconBg: "bg-fuchsia-500/15",
    iconColor: "text-fuchsia-400",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-36 bg-[#01040f] text-white overflow-hidden"
    >
      {/* ── Background glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/6 rounded-full blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* ── Section label ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px flex-1 max-w-[3rem] bg-gradient-to-r from-purple-500 to-transparent" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">Who I Am</span>
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-4 leading-tight"
        >
          <span className="text-white">Developer. Creator. </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">
            Problem Solver.
          </span>
        </motion.h2>

        {/* ── Main grid: image + text ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Outer neon frame */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-lg" />
            <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-900/20">
              <img
                src={HeroImg}
                alt="Khushant Sharma"
                className="w-full h-full object-cover block"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#01040f]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 bg-[#120820] border border-purple-500/30 rounded-xl px-4 py-3 shadow-xl shadow-purple-900/30 backdrop-blur-sm"
            >
              <div className="text-xs text-gray-400 font-medium">Projects Shipped</div>
              <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">9+</div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-base leading-relaxed">
              I'm a full-stack developer with a strong interest in
              <span className="text-purple-300 font-semibold"> AI, machine learning, and building products</span> that make a real
              difference. I specialize in React, Next.js, Flask, and integrating modern LLMs like Groq and Gemini.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              My flagship work includes <span className="text-pink-300 font-semibold">CareerSync AI</span> — a hybrid ML/LLM resume optimizer,{" "}
              <span className="text-fuchsia-300 font-semibold">PrepBuddy</span> — an enterprise interview mastery platform, and{" "}
              <span className="text-purple-300 font-semibold">CodeBuddy (v2)</span> — a gamified coding education ecosystem powered by the Architect Intelligence AI engine.
            </p>

            <p className="text-gray-300 text-base leading-relaxed">
              Beyond web development, I've built a{" "}
              <span className="text-violet-300 font-semibold">Market Regime Detection system</span> using K-Means & HMM and a real-time{" "}
              <span className="text-pink-300 font-semibold">Computer Vision</span> face & eye tracker with OpenCV.
            </p>

            {/* Accent quote */}
            <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-500/5 rounded-r-lg">
              <p className="text-gray-400 text-sm italic leading-relaxed">
                "My mission is to create accessible, practical, and impactful learning experiences for future developers while building products that push the frontier of what's possible."
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 hover:shadow-[0_0_1.5rem_-0.4rem_#ec4899] transition-all duration-300"
              >
                <Rocket className="w-4 h-4" /> View Projects
              </a>
              <a
                href="/experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-gray-300 border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/15 hover:border-purple-500/50 transition-all duration-200 hover:scale-105"
              >
                <Trophy className="w-4 h-4 text-purple-400" /> Certifications
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Highlight cards ── */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative rounded-2xl border ${item.border} p-6 bg-gradient-to-br ${item.color} backdrop-blur-sm overflow-hidden group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className={`${item.iconBg} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {STATS.map(({ icon: Icon, label, value, color }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 py-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-300 text-center"
            >
              <Icon className={`w-5 h-5 ${color} mb-1`} />
              <div className={`text-3xl font-black ${color}`}>{value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
