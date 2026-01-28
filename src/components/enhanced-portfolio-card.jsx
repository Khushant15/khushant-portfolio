import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle, Briefcase, Code, Server, Database } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            opacity: Math.random(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
        />
      ))}
    </div>
  );
};

export default function EnhancedPortfolioCard() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(to right bottom, #1a1a2e, #16213e, #1b2a4e, #24335e, #2f3c6e)",
        "linear-gradient(to right bottom, #2f3c6e, #24335e, #1b2a4e, #16213e, #1a1a2e)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-4 md:p-8 flex items-center justify-center overflow-hidden relative"
      animate={controls}
    >
      <Particles />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl grid md:grid-cols-[1fr,1.5fr] gap-8 relative z-10"
      >
        {/* Profile Card */}
        <Card className="p-8 flex flex-col items-center text-center shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/50 border border-[#2DD4BF]/20 overflow-hidden relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/30 to-[#38BDF8]/30"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="relative z-10 w-64 h-64 mb-6 group"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8] rounded-full shadow-lg"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <img
              src="/your-profile.jpg"
              alt="Profile"
              className="rounded-full relative z-10 w-full h-full object-cover border-4 border-gray-700 group-hover:border-purple-500 transition-colors duration-300"
            />
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Khushant Sharma
          </motion.h1>
          <motion.a
            href="mailto:khushantsharma766@gmail.com"
            className="text-lg text-blue-400 hover:text-blue-300 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            khushantsharma766@gmail.com
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button className="mt-6 bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8] hover:from-[#2DD4BF]/90 hover:to-[#38BDF8]/90 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>
        </Card>

        {/* Info Section */}
        <div className="space-y-8">
          {/* About Me */}
          <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/50 border border-[#2DD4BF]/20 overflow-hidden">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]">
                  About Me
                </h2>
                <Badge className="flex items-center bg-green-900/20 text-green-400 px-4 py-1 rounded-full text-sm font-medium">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Open to work
                </Badge>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Full Stack Developer & Python Developer. I enjoy solving complex problems, building
                user-friendly applications, and learning new technologies. Currently working on projects like Path2Learn and my Portfolio.
              </p>
            </motion.div>
          </Card>

          {/* Latest Roles */}
          <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/50 border border-[#2DD4BF]/20 overflow-hidden">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]">
              Latest Roles
            </h2>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2DD4BF] to-[#38BDF8] rounded-2xl flex items-center justify-center shadow-lg">
                  <Code className="w-8 h-8 text-gray-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-100">Python Developer</h3>
                  <p className="text-lg text-gray-400">Personal Projects</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2DD4BF] to-[#38BDF8] rounded-2xl flex items-center justify-center shadow-lg">
                  <Server className="w-8 h-8 text-gray-200" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-100">Full Stack Developer</h3>
                  <p className="text-lg text-gray-400">Path2Learn (in progress)</p>
                </div>
              </div>
            </motion.div>
          </Card>

          {/* Main Tech Stack */}
          <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/50 border border-[#2DD4BF]/20 overflow-hidden">
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]">
              Tech Stack
            </h2>
            <motion.div
              className="flex justify-between flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {["Python", "React", "Firebase", "Tailwind CSS", "Java", "SQL", "Node.js"].map((tool, index) => (
                <TooltipProvider key={tool}>
                  <Tooltip>
                    <TooltipTrigger>
                      <motion.div
                        className="text-center"
                        whileHover={{ y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2DD4BF] to-[#38BDF8] rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                          <span className="text-white font-bold text-sm">{tool}</span>
                        </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tool} Developer</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </motion.div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
}
