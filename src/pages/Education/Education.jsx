import React, { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const colorMap = ["purple", "yellow", "pink"];
const glowMap = {
  purple: "bg-purple-500/10 text-purple-300",
  yellow: "bg-yellow-500/10 text-yellow-300",
  pink: "bg-pink-500/10 text-pink-300",
};
const glowBlurMap = {
  purple: "bg-purple-400",
  yellow: "bg-yellow-400",
  pink: "bg-pink-400",
};

const GlowingSkillPill = ({ skill, delay = 0, color = "purple" }) => {
  return (
    <motion.div
      className={`relative px-3 py-1 rounded-full text-xs font-medium shadow-md overflow-hidden ${glowMap[color]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: `0 0 10px var(--tw-${color}-400)`,
      }}
    >
      <span className="relative z-10">{skill}</span>
      <motion.span
        className={`absolute inset-0 rounded-full ${glowBlurMap[color]} opacity-20 blur-md`}
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay,
        }}
      />
    </motion.div>
  );
};

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor's Degree in Computer Science",
      school: "Thakur Ramnarayan College of Arts and Commerce",
      mascot: "🎓",
      year: "2023 – 2026 (Pursuing)",
      achievements: ["Current CGPA: 8.8", "Major: Computer Science"],
      skills: ["Python", "Java", "JavaScript", "React", "Kotlin", "SQL", "MongoDB"],
      description:
        "Building a solid foundation in core computer science subjects with hands-on experience in software development, programming, and databases.",
      color: "purple",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "Royal College of Arts, Science, and Commerce",
      mascot: "📗",
      year: "2021 – 2023",
      achievements: ["66.83% overall", "Stream: Science"],
      skills: ["Mathematics", "Physics", "Chemistry", "Economics"],
      description:
        "Studied science stream with a focus on analytical thinking and foundational technical skills.",
      color: "yellow",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Mount Carmel School",
      mascot: "📘",
      year: "2019 – 2020",
      achievements: ["Score: 90%"],
      skills: ["Science", "Mathematics", "English", "Marathi"],
      description:
        "Excelled in core subjects, developed strong discipline, time management, and study habits during secondary education.",
      color: "pink",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02]"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, i) => (
                    <GlowingSkillPill
                      key={i}
                      skill={skill}
                      delay={i * 0.2}
                      color={edu.color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
