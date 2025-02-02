"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedButton from "../components/AnimatedButton";

// Sample Project Data
const projects = [
  {
    id: "01",
    title: "Multiplayer Soccer Management Game",
    category: "Flutter",
    description:
      "It's a game built on blockchain. It is purely community-driven, with true asset ownership and all the code and database are 100% open-sourced for the users to maintain and develop the game as they see fit. The blockchain gaming platform is also 100% open source.",
    image: "/soccer.jpeg", // Ensure correct image path
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
      "This is a dating app for paid/non-paid dating - although other use cases have been covered as well. Compared to classic dating apps it has not only the obligatory profile, but also the possibility of classified ads. The ads are linked to the profile so whoever goes to a profile sees a list of ads that person has posted at the moment.",
    image: "/nda1.webp", // Ensure correct image path
    link: "NDA",
  },
  {
    id: "04",
    title: "Flutter Starter",
    category: "Flutter",
    description:
      "Flutter Starter is a starter kit for Flutter that helps users bootstrap projects with all the essential modules like State Management, API calls, Style Guide, Localisation, Routes, etc. It helps you build production-ready apps in a jiffy. It handles everything in one place so you don't have to rewrite code.",
    image: "/starter2.jpeg",
    link: "https://flutter-starter.geekyants.com/",
  },
  {
    id: "05",
    title: "Flutter Gluestack",
    category: "FULL STACK APP",
    description:
      "gluestack-ui-flutter is a universal UI library that provides optionally styled and accessible widgets.",
    image: "/gluestack.jpeg", // Ensure correct image path
    link: "https://flutter.gluestack.io/docs/overview/introduction",
  },
  {
    id: "06",
    title: "Uno Jobs",
    category: "NEXT JS",
    description:
      "Designed and developed the landing page for UnoJobs, a platform connecting job seekers with remote and freelance opportunities worldwide. ",
    image: "/uno.jpeg",
    link: "https://www.unojobs.com/",
  },
  {
    id: "07",
    title: "Mobile Application Development for Inspection Services Platform",
    category: "FULL STACK APP",
    description:
      "Developed a mobile application for a client in the inspection services industry. The app provides a seamless and intuitive user experience, enabling users to access inspection-related features on the go.",
    image: "/nda1.webp", // Ensure correct image path
    link: "NDA",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-beige text-black py-20 px-8">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl font-poppins font-semibold text-center mb-16"
      >
        Notable Projects
      </motion.h1>

      {/* Projects Grid */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Project Image with Number Overlay */}
            <div className="w-full md:w-1/2 p-6 relative">
              {/* Image Container */}
              <div className="w-[540px] h-[400px] overflow-hidden rounded-2xl shadow-xl flex items-center justify-center">
                {/* Number Overlay (Bottom-Left) */}
                <span className="absolute bottom-4 left-8 text-8xl font-extrabold text-white opacity-50 drop-shadow-lg">
                  {project.id}
                </span>

                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={540}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-4xl font-semibold font-poppins text-black uppercase tracking-wide outline-text">
                {project.title}
              </h2>
              <p className="uppercase text-sm font-poppins text-gray-600 tracking-wide mt-1">
                {project.category}
              </p>
              <p className="text-lg font-poppins text-gray-700 mt-4">
                {project.description}
              </p>

              {/* View Project Button */}
              {/* Conditional Rendering for Button or NDA Text */}
              {project.link === "NDA" ? (
                <p className="text-gray-500 text-lg font-semibold mt-4">#NDA</p>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimatedButton text="View Project" />
                  <span className="ml-3"></span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
