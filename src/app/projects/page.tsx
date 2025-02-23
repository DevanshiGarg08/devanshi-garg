"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";
import Sidebar from "../components/Sidebar";

// Sample Project Data
const projects = [
  {
    id: "01",
    title: "Multiplayer Soccer Management Game",
    category: "Flutter",
    description:
      "A blockchain-based, community-driven game with true asset ownership. All code and data are 100% open-source, allowing users to maintain and develop the game freely.",
    image: "/soccer.jpeg",
    link: "https://beta.soccerverse.io/",
  },
  {
    id: "02",
    title: "Cryptocurrency Payment App",
    category: "Flutter",
    description:
      "Provided web support and maintained the source code for this cryptocurrency app.",
    image: "/zapit.jpeg",
    link: "https://zapit.io/",
  },
  {
    id: "03",
    title: "A Dating Application",
    category: "FULL STACK APP",
    description:
      "A versatile dating app for both paid and free dating, with additional use cases. Unlike traditional apps, it features classified ads linked to user profiles, allowing visitors to see all active ads from a profile.",
    image: "/nda3.png",
    link: "NDA",
  },
  {
    id: "04",
    title: "Flutter Starter",
    category: "Flutter",
    description:
      "A starter kit for Flutter with essential modules like State Management, API calls, Localization, Routes, and more. It streamlines development, helping you build production-ready apps quickly without rewriting code.",
    image: "/starter2.jpeg",
    link: "https://flutter-starter.geekyants.com/",
  },
  {
    id: "05",
    title: "Flutter Gluestack",
    category: "FULL STACK APP",
    description:
      "gluestack-ui-flutter is a universal UI library that provides optionally styled and accessible widgets.",
    image: "/gluestack1.jpeg",
    link: "https://flutter.gluestack.io/docs/overview/introduction",
  },
  {
    id: "06",
    title: "Uno Jobs",
    category: "NEXT JS",
    description:
      "Designed and developed the landing page for UnoJobs, a platform connecting job seekers with remote and freelance opportunities worldwide.",
    image: "/uno.jpeg",
    link: "https://www.unojobs.com/",
  },
  {
    id: "07",
    title: "Mobile Application Development for Inspection Services Platform",
    category: "FULL STACK APP",
    description:
      "Developed a mobile application for a client in the inspection services industry. The app provides a seamless and intuitive user experience, enabling users to access inspection-related features on the go.",
    image: "/nda3.png",
    link: "NDA",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-beige">
      {/* Content Wrapper */}
      <div className="flex-grow bg-beige text-black py-20 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-poppins font-semibold text-center mb-12"
        >
          Notable Projects
        </motion.h1>

        <div className="space-y-20 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col sm:flex-col md:flex-row items-center gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className="w-full h-[200px] sm:h-[300px] md:h-[300px] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                  <span className="absolute bottom-4 left-6 text-4xl sm:text-6xl md:text-8xl font-extrabold text-white opacity-50 drop-shadow-lg">
                    {project.id}
                  </span>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-xl font-semibold font-poppins text-black uppercase tracking-wide">
                  {project.title}
                </h2>
                <p className="uppercase text-sm font-poppins text-gray-600 tracking-wide mt-1">
                  {project.category}
                </p>
                <p className="text-md font-poppins text-gray-700 mt-4">
                  {project.description}
                </p>

                {project.link === "NDA" ? (
                  <p className="text-gray-500 text-lg font-semibold mt-4">
                    #NDA
                  </p>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                  >
                    <AnimatedButton text="View Project" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sidebar as Footer on Mobile */}
      <div className="md:hidden w-full bg-black ">
        <Sidebar />
      </div>
    </div>
  );
}
