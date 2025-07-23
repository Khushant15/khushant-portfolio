import React, { useRef, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

import portfolioImg from "@/assets/images/portfolio.png";
import codebuddyImg from "@/assets/images/Codebuddy.png";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS showcasing skills, experience, and projects with a modern UI.",
    src: portfolioImg,
    link: portfolioImg,
    color: "#4ADE80", // emerald
    githubLink: "https://github.com/Khushant15/khushant-portfolio",
    liveLink: "https://khushant-portfolio.vercel.app",
  },
  {
    title: "CodeBuddy (In Progress)",
    description:
      "CodeBuddy is a beginner-friendly mobile app designed to help students learn programming, debug real errors, and build logic visually. It features a guided learning system, AI-based debug assistant, and step-by-step code visualizations.",
    src: codebuddyImg,
    link: codebuddyImg,
    color: "#60A5FA", // blue
    githubLink: "", // In progress
    liveLink: "",   // In progress
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Optional: any other effects can go here

  return (
    <ReactLenis root>
      <main className="bg-black" ref={containerRef}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            const rangeStart = i * (1 / projects.length);
            return (
              <Card
                key={`project-${i}`}
                index={i}
                title={project.title}
                description={project.description}
                imageSrc={project.link}
                color={project.color}
                progress={scrollYProgress}
                range={[rangeStart, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  index,
  title,
  description,
  imageSrc,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const cardRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky top-0"
      style={{ height: "100vh" }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image Section */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
              Project {index + 1}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-20 bg-gray-600" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
              <p className="text-base text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="mt-4 pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4" />
              <div className="flex items-center gap-4">
                {githubLink && (
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium"
                    style={{ color }}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    GitHub
                  </motion.a>
                )}
                {liveLink && (
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium"
                    style={{ color }}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};
