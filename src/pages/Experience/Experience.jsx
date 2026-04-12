import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Award, BookText, Eye, Download, Smartphone, FileText, ChevronDown, ChevronUp } from "lucide-react";

// Existing certificates
import Python1 from "@/assets/images/PythonEssentials1.jpg";
import Python2 from "@/assets/images/PythonEssentials2.jpg";
import AngularCert from "@/assets/images/Angular.jpg";
import HtmlCert from "@/assets/images/HTML5.png";
import CssCert from "@/assets/images/CSS3.png";
import JsCert from "@/assets/images/JavaScript.png";
import KotlinCert from "@/assets/images/KotlinIIT.jpg";
import ResearchCert from "@/assets/images/research1.jpg";
import CDAACert from "@/assets/images/cdaa.jpg";

// New certificates
import OracleOCI from "@/assets/images/Oracle_OCI.png";
import PhpCert from "@/assets/images/PHP_MySQL.jpg";
import JavaBusCert from "@/assets/images/Java_Business.jpg";

const TAG_COLORS = [
  "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "bg-teal-500/15 text-teal-300 border-teal-500/20",
  "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "bg-pink-500/15 text-pink-300 border-pink-500/20",
];

const CertificateModal = ({ images, onClose }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div className="bg-gray-900 rounded-xl max-w-3xl w-full overflow-hidden relative shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 hover:text-white z-10 text-2xl font-bold">×</button>
        <img src={images[selected].src} alt={`Certificate ${selected + 1}`} className="w-full h-auto" />
        <div className="p-4 flex justify-between items-center flex-wrap gap-4">
          <a href={images[selected].src} download className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm gap-2">
            <Download className="w-4 h-4" /> Download
          </a>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button key={i} onClick={() => setSelected(i)} className={`w-16 h-12 border-2 ${selected === i ? "border-blue-500" : "border-gray-700"} rounded overflow-hidden`}>
                  <img src={img.src} className="object-cover w-full h-full" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TimelineCard = ({ title, company, period, description, icon: Icon, certificates, tags, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="relative flex items-start gap-6"
    >
      {/* Timeline dot */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30 z-10"
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Card */}
      <div className="flex-1 mb-10">
        <div className="group relative overflow-hidden rounded-xl border border-gray-800/60 bg-gray-900/70 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="p-6 relative">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{title}</h3>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-blue-400 text-sm font-medium">{company}</span>
                  <span className="text-gray-600 text-xs">•</span>
                  <span className="text-xs font-mono bg-blue-500/10 text-gray-300 px-2 py-0.5 rounded-full">{period}</span>
                </div>
              </div>
              {/* Expand toggle */}
              <button
                onClick={() => setExpanded((v) => !v)}
                className="flex-shrink-0 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition"
              >
                {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Stack tags */}
            {tags && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {tags.map((tag, i) => (
                  <span key={tag} className={`text-xs px-2 py-0.5 rounded-full border ${TAG_COLORS[i % TAG_COLORS.length]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Description — collapsible */}
            <motion.div
              initial={false}
              animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 text-sm border-l-4 border-blue-500/50 pl-4 leading-relaxed mb-4">
                {description}
              </p>
            </motion.div>

            {/* Certificate button */}
            {certificates && (
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-400 border border-cyan-400/30 rounded-lg px-3 py-1.5 hover:bg-cyan-500/10 transition"
              >
                <Eye className="w-3.5 h-3.5" /> View Certificate
              </button>
            )}
          </div>
        </div>
      </div>

      {modalOpen && <CertificateModal images={certificates} onClose={() => setModalOpen(false)} />}
    </motion.div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Award,
      title: "Oracle Certified Foundations Associate",
      company: "Oracle University",
      period: "Feb 2026",
      tags: ["Oracle Cloud", "OCI", "Cloud Infrastructure", "Foundations"],
      description: "Achieved Oracle Cloud Infrastructure 2025 Certified Foundations Associate status, validated by Oracle University.",
      certificates: [{ src: OracleOCI }],
    },
    {
      icon: BookText,
      title: "PHP and MySQL Training",
      company: "IIT Bombay / EduPyramids",
      period: "Feb 2026",
      tags: ["PHP", "MySQL", "Backend", "Database"],
      description: "Completed comprehensive training organized at Thakur Ramnarayan College with material from SINE, IIT Bombay. Final Score: 100.00% | Credits: 4.",
      certificates: [{ src: PhpCert }],
    },
    {
      icon: BookText,
      title: "Java Business Application Training",
      company: "IIT Bombay / EduPyramids",
      period: "Feb 2026",
      tags: ["Java", "Business Logic", "Enterprise", "Backend"],
      description: "Successfully completed Java Business Application test conducted remotely from IIT Bombay. Final Score: 100.00% | Credits: 1.",
      certificates: [{ src: JavaBusCert }],
    },
    {
      icon: BookText,
      title: "Cisco Python Essentials 1 & 2",
      company: "Cisco Networking Academy",
      period: "2025",
      tags: ["Python", "OOP", "File Handling", "Algorithms"],
      description: "Completed foundational to intermediate Python programming including OOP, file handling and real-world applications.",
      certificates: [{ src: Python1 }, { src: Python2 }],
    },
    {
      icon: Code2,
      title: "Angular Developer",
      company: "Infosys Springboard",
      period: "2025",
      tags: ["Angular", "TypeScript", "RxJS", "Component UI"],
      description: "Hands-on Angular development with component-based UI design and real-world projects.",
      certificates: [{ src: AngularCert }],
    },
    {
      icon: Smartphone,
      title: "Android App using Kotlin",
      company: "EduPyramids / IIT Bombay",
      period: "2025",
      tags: ["Kotlin", "Android Studio", "MVVM", "XML"],
      description: "Completed Android development training using Kotlin including layouts, activities and basic MVVM concepts.",
      certificates: [{ src: KotlinCert }],
    },
    {
      icon: FileText,
      title: "Research Paper Publication",
      company: "Thakur Ramnarayan College",
      period: "2025",
      tags: ["Research", "AI Feedback", "Code Learning", "Academic"],
      description: "Published research paper on intelligent error feedback systems supporting code learning.",
      certificates: [{ src: ResearchCert }],
    },
    {
      icon: Code2,
      title: "Web Development – Frontend Fundamentals",
      company: "Infosys Springboard",
      period: "2025",
      tags: ["HTML5", "CSS3", "JavaScript", "DOM", "Responsive Design"],
      description: "Completed HTML5, CSS3 and JavaScript covering responsive layouts, styling fundamentals, DOM manipulation and core frontend concepts.",
      certificates: [{ src: HtmlCert }, { src: CssCert }, { src: JsCert }],
    },
    {
      icon: Award,
      title: "Design & Analysis of Algorithms",
      company: "Thakur Ramnarayan College",
      period: "2024",
      tags: ["DSA", "Complexity", "Sorting", "Problem Solving"],
      description: "Completed algorithm design concepts including complexity analysis, sorting and problem solving.",
      certificates: [{ src: CDAACert }],
    },
  ];

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-[#04081A] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Experience &amp; Certifications
          </h2>
          <p className="text-gray-400 mt-4 text-sm">Academic achievements, certifications and technical training.</p>
        </motion.div>

        {/* Timeline */}
        <div ref={sectionRef} className="relative">
          {/* Animated connector line */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-800">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"
            />
          </div>

          <div className="pl-4">
            {experiences.map((exp, index) => (
              <TimelineCard key={index} index={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
