import React from "react";
import { motion } from "framer-motion";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu } from "lucide-react";
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaLinux,
  FaFigma, FaJava, FaHtml5, FaCss3Alt, FaJsSquare,
  FaAndroid, FaPhp,
} from "react-icons/fa";
import {
  SiMongodb, SiFirebase, SiCanva, SiCplusplus, SiSqlite,
  SiVercel, SiVite, SiJsonwebtokens, SiKotlin, SiXml,
  SiTypescript, SiNextdotjs, SiFlask, SiTailwindcss,
  SiOpenai, SiFramer,
} from "react-icons/si";
import { MdAnimation, MdPsychology } from "react-icons/md";

const CATEGORY_STYLES = [
  { gradient: "from-purple-600/20 to-purple-500/5", border: "border-purple-500/20", glow: "hover:shadow-purple-500/20", iconBg: "bg-purple-500/15", iconColor: "text-purple-300", badgeBorder: "border-purple-500/30", badgeBg: "bg-purple-500/10", badgeHover: "hover:bg-purple-500/20" },
  { gradient: "from-pink-600/20 to-pink-500/5",     border: "border-pink-500/20",   glow: "hover:shadow-pink-500/20",   iconBg: "bg-pink-500/15",   iconColor: "text-pink-300",   badgeBorder: "border-pink-500/30",   badgeBg: "bg-pink-500/10",   badgeHover: "hover:bg-pink-500/20"   },
  { gradient: "from-violet-600/20 to-violet-500/5", border: "border-violet-500/20", glow: "hover:shadow-violet-500/20", iconBg: "bg-violet-500/15", iconColor: "text-violet-300", badgeBorder: "border-violet-500/30", badgeBg: "bg-violet-500/10", badgeHover: "hover:bg-violet-500/20" },
  { gradient: "from-fuchsia-600/20 to-fuchsia-500/5", border: "border-fuchsia-500/20", glow: "hover:shadow-fuchsia-500/20", iconBg: "bg-fuchsia-500/15", iconColor: "text-fuchsia-300", badgeBorder: "border-fuchsia-500/30", badgeBg: "bg-fuchsia-500/10", badgeHover: "hover:bg-fuchsia-500/20" },
  { gradient: "from-rose-600/20 to-rose-500/5",     border: "border-rose-500/20",   glow: "hover:shadow-rose-500/20",   iconBg: "bg-rose-500/15",   iconColor: "text-rose-300",   badgeBorder: "border-rose-500/30",   badgeBg: "bg-rose-500/10",   badgeHover: "hover:bg-rose-500/20"   },
];

function SkillCard({ icon: Icon, title, skills, styleIdx }) {
  const s = CATEGORY_STYLES[styleIdx % CATEGORY_STYLES.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: styleIdx * 0.08 }}
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl border ${s.border} bg-gradient-to-br ${s.gradient} p-6 backdrop-blur-sm overflow-hidden shadow-xl ${s.glow} hover:shadow-xl transition-all duration-300`}
    >
      {/* Shimmer sweep */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shimmer_2s_ease-in-out_infinite]" />
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className={`${s.iconBg} ${s.iconColor} p-2.5 rounded-xl`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-base font-bold text-white">{title}</h3>
      </div>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${s.badgeBorder} ${s.badgeBg} ${s.badgeHover} text-gray-200 text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default`}
          >
            {skill.icon}
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: [
        { name: "Python",     icon: <FaPython    className="w-3.5 h-3.5 text-[#3776AB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <FaJsSquare  className="w-3.5 h-3.5 text-[#F7DF1E]" /> },
        { name: "Java",       icon: <FaJava      className="w-3.5 h-3.5 text-[#007396]" /> },
        { name: "C++",        icon: <SiCplusplus className="w-3.5 h-3.5 text-[#00599C]" /> },
        { name: "Kotlin",     icon: <SiKotlin    className="w-3.5 h-3.5 text-[#A97BFF]" /> },
        { name: "SQL",        icon: <SiSqlite    className="w-3.5 h-3.5 text-[#003B57]" /> },
        { name: "PHP",        icon: <FaPhp       className="w-3.5 h-3.5 text-[#777BB4]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Flask",    icon: <SiFlask    className="w-3.5 h-3.5 text-white" /> },
        { name: "Node.js",  icon: <FaNodeJs   className="w-3.5 h-3.5 text-[#339933]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-3.5 h-3.5 text-[#FFCA28]" /> },
        { name: "MongoDB",  icon: <SiMongodb  className="w-3.5 h-3.5 text-[#47A248]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend & Frameworks",
      skills: [
        { name: "Next.js",  icon: <SiNextdotjs   className="w-3.5 h-3.5 text-white" /> },
        { name: "React",    icon: <FaReact       className="w-3.5 h-3.5 text-[#61DAFB]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-3.5 h-3.5 text-[#06B6D4]" /> },
        { name: "Framer",   icon: <SiFramer      className="w-3.5 h-3.5 text-white" /> },
        { name: "Vite",     icon: <SiVite        className="w-3.5 h-3.5 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      skills: [
        { name: "LLM Ops",      icon: <SiOpenai      className="w-3.5 h-3.5 text-white" /> },
        { name: "Prompt Eng.",  icon: <MdPsychology   className="w-3.5 h-3.5 text-fuchsia-300" /> },
        { name: "TF-IDF / ML",  icon: <Layout         className="w-3.5 h-3.5 text-fuchsia-400" /> },
        { name: "Gemini / Groq",icon: <Code2          className="w-3.5 h-3.5 text-purple-400" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Design & Creativity",
      skills: [
        { name: "Figma",       icon: <FaFigma    className="w-3.5 h-3.5 text-[#F24E1E]" /> },
        { name: "Canva",       icon: <SiCanva    className="w-3.5 h-3.5 text-[#00C4CC]" /> },
        { name: "UI Animation",icon: <MdAnimation className="w-3.5 h-3.5 text-[#FF4081]" /> },
      ],
    },
  ];

  return (
    <main className="relative text-white min-h-screen bg-[#01040f] overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-600/8 rounded-full blur-3xl" />
        {/* neon grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <section className="relative z-10 container mx-auto px-4 py-16">
        {/* Section header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Cpu className="w-3.5 h-3.5" /> Tech Stack
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            <span className="text-white">Skills &amp; </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-400 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
        </div>

        {/* Globe */}
        <div className="flex justify-center items-center mb-12">
          <IconCloudDemo />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              styleIdx={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
