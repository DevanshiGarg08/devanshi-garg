"use client";

import { motion } from "framer-motion";
import { DiJavascript1 } from "react-icons/di";
import {
  FaReact,
  FaMobile,
  FaPaintBrush,
  FaAndroid,
  FaTrello,
} from "react-icons/fa";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiNotionFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAdobe,
  SiFigma,
  SiAndroidstudio,
  SiTypescript,
  SiAdobephotoshop,
  SiAdobelightroom,
  SiJira,
} from "react-icons/si";
import Sidebar from "../components/Sidebar";

const skills = [
  {
    title: "Mobile App",
    description:
      "Developing beautiful and functional mobile applications for iOS and Android.",
    icon: FaMobile,
    color: "text-green-500",
    bgColor: "bg-gray-50",
    technologies: [
      { icon: FaFlutter, name: "Flutter" },
      { icon: FaDartLang, name: "Dart" },
      { icon: RiFirebaseFill, name: "Firebase" },
      { icon: FaAndroid, name: "Android" },
      { icon: SiAndroidstudio, name: "Android Studio" },
    ],
  },
  {
    title: "Web Development",
    description:
      "Building functional web services including custom development and e-commerce solutions.",
    icon: FaReact,
    color: "text-blue-500",
    bgColor: "bg-gray-50",
    technologies: [
      { icon: FaReact, name: "React" },
      { icon: RiNextjsFill, name: "Next JS" },
      { icon: DiJavascript1, name: "Javascript" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: RiTailwindCssFill, name: "TailwindCSS" },
    ],
  },
  {
    title: "Web Design",
    description:
      "Creating stunning, intuitive websites with seamless user experiences.",
    icon: FaPaintBrush,
    color: "text-gray-500",
    bgColor: "bg-gray-50",
    technologies: [
      { icon: SiFigma, name: "Figma" },
      { icon: SiAdobe, name: "Adobe Suite" },
      { icon: SiAdobephotoshop, name: "Photoshop" },
      { icon: SiAdobelightroom, name: "Lightroom" },
    ],
  },
  {
    title: "Product Management",
    description:
      "Driving strategy, roadmaps, and execution to build user-focused and scalable products.",
    icon: MdManageAccounts,
    color: "text-red-500",
    bgColor: "bg-gray-50",
    technologies: [
      { icon: SiJira, name: "Jira" },
      { icon: FaTrello, name: "Trello" },
      { icon: RiNotionFill, name: "Notion" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      {/* Content Section */}
      <div className="flex-grow flex flex-col justify-center items-center py-20 px-6 md:px-12">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-semibold font-poppins text-gray-900 mb-12"
        >
          Tech & Tools
        </motion.h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-white/35 backdrop-blur-lg shadow-xl rounded-xl p-6 flex flex-col items-center text-center"
            >
              {/* Floating Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-white opacity-20 blur-lg rounded-3xl" />

              {/* Skill Icon with Smooth Rotational Animation */}
              <motion.div
                className={`w-16 h-16 flex items-center justify-center rounded-full ${skill.bgColor} mb-4 shadow-lg`}
                animate={{
                  rotate: [0, 1, -1, 0], // Subtle rotation
                  y: [0, -5, 0], // Slight vertical movement
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <skill.icon className="text-4xl" />
                </motion.div>
              </motion.div>

              {/* Skill Description */}
              <p className="text-gray-600 font-roboto mt-2">
                {skill.description}
              </p>

              {/* Sub Icons for Technologies with Tooltip */}
              <div className="flex space-x-4 mt-6">
                {skill.technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: idx * 0.3,
                      ease: "easeOut",
                    }}
                    className="relative group text-3xl text-gray-700"
                  >
                    {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs font-semibold px-2 py-1 rounded-md shadow-lg">
                      {tech.name}
                    </div>

                    {/* Technology Icon */}
                    <tech.icon />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sidebar as Footer on Mobile */}
      <div className="md:hidden w-full ">
        <Sidebar />
      </div>
    </div>
  );
}
