import React, { useRef, useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";

import portfolioImg from "../../assets/images/portfolio.png";

import codebuddy1 from "../../assets/images/codebuddy1.png";
import codebuddy2 from "../../assets/images/codebuddy2.png";
import codebuddy3 from "../../assets/images/codebuddy3.png";
import codebuddy4 from "../../assets/images/codebuddy4.png";
import codebuddy5 from "../../assets/images/codebuddy5.png";

import prepbuddy1 from "../../assets/images/prepbuddy1.png";
import prepbuddy2 from "../../assets/images/prepbuddy2.png";
import prepbuddy3 from "../../assets/images/prepbuddy3.png";
import prepbuddy4 from "../../assets/images/prepbuddy4.png";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio built with React, Vite, and Tailwind CSS showcasing skills, projects, and experience with modern UI and animations.",
    why:
      "Created to present my developer profile professionally and demonstrate front-end design, animations, and project architecture.",
    images: [portfolioImg],
    color: "#4ADE80",
    githubLink: "https://github.com/Khushant15/khushant-portfolio",
    liveLink: "https://khushant-portfolio.vercel.app",
  },

  {
    title: "CodeBuddy Web App",
    description:
      "Interactive coding learning platform with hands-on coding, AI debugging, quizzes, and leaderboard. Built using Next.js, React, Firebase, and Tailwind CSS.",
    why:
      "Designed to help beginners practice real coding, improve logic building, and receive instant feedback instead of only watching tutorials.",
    images: [codebuddy1, codebuddy2, codebuddy3, codebuddy4, codebuddy5],
    color: "#60A5FA",
    githubLink: "https://github.com/Khushant15/CodeBuddyWebApp",
    liveLink: "https://code-buddy-web-app.vercel.app/",
  },

  {
    title: "PrepBuddy (Ongoing Project)",
    description:
      "Interview preparation platform focused on DSA, CS fundamentals, mock tests, and AI guidance for students.",
    why:
      "Built to provide structured interview preparation in one place instead of scattered resources across platforms.",
    images: [prepbuddy1, prepbuddy2, prepbuddy3, prepbuddy4],
    color: "#F472B6",
    liveLink: "https://v0-interview-prep-web-app.vercel.app/",
  },
];

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main className="bg-black" ref={containerRef}>
        <section className="w-full bg-slate-950 text-white">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            const rangeStart = i * (1 / projects.length);

            return (
              <Card
                key={i}
                index={i}
                {...project}
                progress={scrollYProgress}
                range={[rangeStart, 1]}
                targetScale={targetScale}
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
  why,
  images,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const cardRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* FULLSCREEN VIEW */}
      {fullscreen && (
        <div
          onClick={() => setFullscreen(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-zoom-out"
        >
          <img src={fullscreen} className="max-w-[90%] max-h-[90%] rounded-xl" />
        </div>
      )}

      <div ref={cardRef} className="h-screen sticky top-0 flex items-center justify-center">
        <motion.div
          style={{ scale }}
          className="w-[90%] md:w-[80%] bg-zinc-900 rounded-2xl overflow-hidden shadow-xl"
        >
          {/* IMAGE TOP */}
          <div className="relative h-[300px] md:h-[420px] overflow-hidden">
            <motion.img
              src={images[current]}
              key={current}
              onClick={() => setFullscreen(images[current])}
              className="w-full h-full object-cover cursor-zoom-in"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
            />

            {/* DOTS */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === current ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold">{title}</h2>

            <p className="text-gray-400 mt-3">{description}</p>

            <div className="mt-4 text-sm text-gray-500">
              <span className="font-semibold text-white">Why needed:</span> {why}
            </div>

            <div className="mt-5 flex gap-6">
              {githubLink && (
                <a href={githubLink} target="_blank" style={{ color }}>
                  GitHub
                </a>
              )}

              {liveLink && (
                <a href={liveLink} target="_blank" style={{ color }}>
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

Card.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  why: PropTypes.string,
  images: PropTypes.array,
  color: PropTypes.string,
  progress: PropTypes.object,
  range: PropTypes.array,
  targetScale: PropTypes.number,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};
