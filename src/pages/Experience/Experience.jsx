import React, { useState } from "react";
import { Code2, Award, BookText, Eye, Download } from "lucide-react";

// Certificate images
import Python1 from "@/assets/images/PythonEssentials1.jpg";
import Python2 from "@/assets/images/PythonEssentials2.jpg";
import AngularCert from "@/assets/images/Angular.jpg";

const CertificateModal = ({ images, onClose }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden relative shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-black text-2xl font-bold hover:text-red-600 z-10"
        >
          &times;
        </button>

        {/* Certificate Image */}
        <img
          src={images[selected].src}
          alt={`Certificate ${selected + 1}`}
          className="w-full h-auto"
        />

        <div className="p-4 flex justify-between items-center flex-wrap gap-4">
          {/* Download */}
          <a
            href={images[selected].src}
            download
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Certificate
          </a>

          {/* Thumbnail Selector if multiple */}
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
                  <img src={img.src} alt={`thumb-${i}`} className="object-cover w-full h-full" />
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
      {/* Backgrounds */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />
      <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

      {/* Card Content */}
      <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl space-y-6 z-10">
        <div className="relative mb-6">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse" />
          <Icon className="w-12 h-12 text-cyan-400 relative z-10" />
        </div>

        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>

        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>

        {certificates && (
          <button
            onClick={() => setModalOpen(true)}
            className="text-sm text-blue-400 border border-blue-400 rounded-md px-3 py-1 hover:bg-blue-600 hover:text-white transition"
          >
            <Eye className="inline-block w-4 h-4 mr-1" />
            View Certificate{certificates.length > 1 ? "s" : ""}
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
        "Completed foundational to intermediate Python programming, OOP, file handling, and real-world applications.",
      certificates: [
        { src: Python1, name: "Python Essentials 1" },
        { src: Python2, name: "Python Essentials 2" },
      ],
    },
    {
      icon: Code2,
      title: "Angular Developer",
      company: "Infosys Springboard",
      period: "June 2025",
      description:
        "Completed a hands-on full-stack Angular internship, building real-time UI components and projects.",
      certificates: [{ src: AngularCert, name: "Angular" }],
    },
    {
      icon: Award,
      title: "Practice Contributor",
      company: "BrainCircuit",
      period: "2025",
      description:
        "Helped peers and juniors by solving programming and debugging problems collaboratively on BrainCircuit.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#04081A] pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8 mb-20">
          <h2 className="text-5xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
            Experience & Certifications
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl">
            Explore real-world experience and achievements in web development and programming.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
