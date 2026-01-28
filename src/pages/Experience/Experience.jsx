import React, { useState } from "react";
import { Code2, Award, BookText, Eye, Download, Smartphone, FileText } from "lucide-react";

// Existing certificates
import Python1 from "@/assets/images/PythonEssentials1.jpg";
import Python2 from "@/assets/images/PythonEssentials2.jpg";
import AngularCert from "@/assets/images/Angular.jpg";
import HtmlCert from "@/assets/images/HTML5.png";
import CssCert from "@/assets/images/CSS3.png";
import JsCert from "@/assets/images/JavaScript.png";

// NEW certificates (make sure filenames match exactly)
import KotlinCert from "@/assets/images/KotlinIIT.jpg";
import ResearchCert from "@/assets/images/research1.jpg";
import CDAACert from "@/assets/images/cdaa.jpg";

const CertificateModal = ({ images, onClose }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-600 z-10"
        >
          &times;
        </button>

        <img
          src={images[selected].src}
          alt={`Certificate ${selected + 1}`}
          className="w-full h-auto"
        />

        <div className="p-4 flex justify-between items-center flex-wrap gap-4">
          <a
            href={images[selected].src}
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Certificate
          </a>

          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`w-20 h-14 border-2 ${
                    selected === i ? "border-blue-500" : "border-gray-300"
                  } rounded overflow-hidden`}
                >
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

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  certificates,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
      <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
      <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl space-y-6 z-10">
        <Icon className="w-12 h-12 text-cyan-400" />

        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>

        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 leading-relaxed">
          {description}
        </p>

        {certificates && (
          <button
            onClick={() => setModalOpen(true)}
            className="text-sm text-blue-400 border border-blue-400 rounded-md px-3 py-1 hover:bg-blue-600 hover:text-white transition"
          >
            <Eye className="inline-block w-4 h-4 mr-1" />
            View Certificate
          </button>
        )}
      </div>

      {modalOpen && (
        <CertificateModal images={certificates} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      icon: BookText,
      title: "Cisco Python Essentials 1 & 2",
      company: "Cisco Networking Academy",
      period: "2025",
      description:
        "Completed foundational to intermediate Python programming including OOP, file handling and real-world applications.",
      certificates: [
        { src: Python1 },
        { src: Python2 },
      ],
    },

    {
      icon: Code2,
      title: "Angular Developer",
      company: "Infosys Springboard",
      period: "2025",
      description:
        "Hands-on Angular development with component-based UI design and real-world projects.",
      certificates: [{ src: AngularCert }],
    },

    {
      icon: Smartphone,
      title: "Android App using Kotlin",
      company: "EduPyramids / IIT Bombay",
      period: "2025",
      description:
        "Completed Android development training using Kotlin including layouts, activities and basic MVVM concepts.",
      certificates: [{ src: KotlinCert }],
    },

    {
      icon: FileText,
      title: "Research Paper Publication",
      company: "Thakur Ramnarayan College",
      period: "2025",
      description:
        "Published research paper on intelligent error feedback systems supporting code learning.",
      certificates: [{ src: ResearchCert }],
    },

    {
      icon: Code2,
      title: "Web Development – Frontend Fundamentals",
      company: "Infosys Springboard",
      period: "2025",
      description:
        "Completed HTML5, CSS3 and JavaScript covering responsive layouts, styling fundamentals, DOM manipulation and core frontend concepts.",
      certificates: [
        { src: HtmlCert },
        { src: CssCert },
        { src: JsCert },
      ],
    },
    
    {
      icon: Award,
      title: "Design & Analysis of Algorithms",
      company: "Thakur Ramnarayan College",
      period: "2024",
      description:
        "Completed algorithm design concepts including complexity analysis, sorting and problem solving.",
      certificates: [{ src: CDAACert }],
    },
  ];

  return (
    <div className="min-h-screen bg-[#04081A] pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text">
            Experience & Certifications
          </h2>
          <p className="text-gray-400 mt-4">
            Academic achievements, certifications and technical training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
