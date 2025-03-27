"use client";

import { resumeData } from "./resumeData";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaDownload,
  FaFilePdf,
  FaLink,
  FaGraduationCap,
  FaRocket,
  FaBriefcase,
  FaFlag,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdVolunteerActivism } from "react-icons/md";

export default function Resume({ isPdfMode = false }: { isPdfMode?: boolean }) {
  function formatBold(text: string) {
    const boldRegex = /\*\*(.*?)\*\*/g;
    return text.replace(boldRegex, '<span class="font-semibold">$1</span>');
  }

  return (
    <div id="resume-content">
      <main
        className={`flex flex-col items-center ${
          isPdfMode ? "p-0" : "px-4 py-20"
        }`}
      >
        {!isPdfMode && (
          <div className="w-full flex justify-center mb-6">
            <div className="flex gap-4">
              <a
                href="/DevanshiGarg-Resume.pdf"
                download="DevanshiGarg-Resume.pdf"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
              >
                <FaDownload size={14} /> Download PDF
              </a>

              <a
                href="/DevanshiGarg-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-90"
              >
                <FaFilePdf size={14} /> View PDF
              </a>
            </div>
          </div>
        )}

        {/* Resume Card */}
        <div
          id="resume-pdf-wrapper"
          className="w-full max-w-5xl bg-white rounded-xl shadow-md"
        >
          {/* Header */}
          <section className={`bg-monoBeige px-6 py-6 md:px-12`}>
            <div className="text-left">
              <h1 className="text-4xl font-bold tracking-wide">
                {resumeData.name}
              </h1>
              <p className="uppercase tracking-widest text-gray-900 mt-1">
                {resumeData.title}
              </p>
            </div>
            <div
              className={`flex flex-wrap justify-start gap-6 mt-6 text-sm text-gray-900`}
            >
              {resumeData.contacts.map((contact, idx) => {
                let href = "#";
                if (contact.label === "Phone") {
                  href = `tel:${contact.value.replace(/[^+\d]/g, "")}`;
                } else if (contact.label === "Email") {
                  href = `mailto:${contact.value}`;
                } else {
                  href = contact.value.startsWith("http")
                    ? contact.value
                    : `https://${contact.value}`;
                }

                return (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {contact.label === "Phone" && (
                      <FaPhone className="h-4 w-4" />
                    )}
                    {contact.label === "Email" && (
                      <FaEnvelope className="h-4 w-4" />
                    )}
                    {contact.label !== "Phone" && contact.label !== "Email" && (
                      <FaLink className="h-4 w-4" />
                    )}
                    <span>{contact.value}</span>
                  </a>
                );
              })}

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-4 w-4" />
                {resumeData.location}
              </div>
            </div>
          </section>
          <div className={`md:px-12  py-10`}>
            <p
              className={`${
                isPdfMode ? "text-base" : "text-base"
              } text-gray-700`}
            >
              Creative and results-driven Flutter Developer with 4+ years of
              software engineering experience. Proven track record in building
              high-performance mobile apps across diverse domains. Skilled in
              UI/UX implementation, front-end architecture, and cross-platform
              development.
            </p>
          </div>

          {/* Body */}
          <section
            className={`grid grid-cols-1 md:grid-cols-3 px-6 md:px-12 gap-10  bg-white relative mb-12`}
          >
            {/* Vertical Divider */}
            <div className="hidden md:block absolute left-1/3 inset-y-0 border-l border-gray-300" />

            {/* Left Sidebar */}
            <div
              className={`${
                isPdfMode ? "space-y-8" : "space-y-12"
              } md:col-span-1 z-10`}
            >
              {/* Education */}
              <div>
                <div
                  className={`flex items-center gap-3 ${
                    isPdfMode ? "mb-2" : "mb-4"
                  }`}
                >
                  <div className="bg-monoBeige p-2 rounded-md">
                    <FaGraduationCap
                      className={`${
                        isPdfMode ? "text-lg" : "text-xl"
                      } text-black`}
                    />
                  </div>
                  <h2
                    className={`${
                      isPdfMode ? "text-lg" : "text-lg"
                    } font-bold uppercase`}
                  >
                    Education
                  </h2>
                </div>
                <div className="text-gray-800 space-y-1">
                  <p className="text-sm font-semibold">
                    {resumeData.education.degree}
                  </p>
                  <p
                    className={`${
                      isPdfMode ? "text-sm" : "text-sm"
                    } text-gray-700`}
                  >
                    {resumeData.education.institution}
                  </p>
                  <div
                    className={`flex justify-between ${
                      isPdfMode ? "text-sm" : "text-sm"
                    } text-gray-600`}
                  >
                    <span>{resumeData.education.duration}</span>
                  </div>
                  <p className={`pt-1`}>
                    <span
                      className={`${
                        isPdfMode ? "text-sm" : "text-sm"
                      } text-gray-700 font-medium`}
                    >
                      GPA
                    </span>{" "}
                    |{" "}
                    <span
                      className={`${
                        isPdfMode ? "text-sm" : "text-sm"
                      } text-amber-800 font-bold`}
                    >
                      {resumeData.education.gpa}
                    </span>{" "}
                    <span className={`${isPdfMode ? "text-sm" : "text-sm"}`}>
                      / 10
                    </span>
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <div
                  className={`flex items-center gap-3 ${
                    isPdfMode ? "mb-2" : "mb-4"
                  }`}
                >
                  <div className="bg-monoBeige p-2 rounded-md">
                    <FaRocket
                      className={`${
                        isPdfMode ? "text-lg" : "text-xl"
                      } text-black`}
                    />
                  </div>
                  <h2
                    className={`${
                      isPdfMode ? "text-lg" : "text-lg"
                    } font-bold uppercase`}
                  >
                    Skills
                  </h2>
                </div>

                <div
                  className={`${
                    isPdfMode ? "space-y-2" : "space-y-4"
                  } text-sm text-gray-800`}
                >
                  {resumeData.skills.map((section, index) => (
                    <div key={index}>
                      <p className="font-semibold text-gray-900">
                        {section.sectionTitle}:
                      </p>
                      <p
                        className={`${
                          isPdfMode ? "text-sm" : "text-sm"
                        } text-gray-700 leading-relaxed`}
                      >
                        {section.items.map((item, idx) => (
                          <span key={idx}>
                            {item}
                            {idx !== section.items.length - 1 && (
                              <span className="font-bold text-lg text-gray-900">
                                {"  "}·{"  "}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volunteering */}
              <div>
                <div
                  className={`flex items-center gap-3 ${
                    isPdfMode ? "mb-2" : "mb-4"
                  }`}
                >
                  <div className="bg-monoBeige p-2 rounded-md">
                    <MdVolunteerActivism
                      className={`${
                        isPdfMode ? "text-lg" : "text-xl"
                      } text-black`}
                    />
                  </div>
                  <h2
                    className={`${
                      isPdfMode ? "text-lg" : "text-lg"
                    } font-bold uppercase`}
                  >
                    Volunteering
                  </h2>
                </div>
                <div className={` text-gray-800 space-y-1`}>
                  <p className="text-sm font-bold">
                    {resumeData.volunteering.organization}
                  </p>
                  <p
                    className={`${
                      isPdfMode ? "text-sm" : "text-sm"
                    } text-gray-700`}
                  >
                    {resumeData.volunteering.role}
                  </p>
                  <p
                    className={`${
                      isPdfMode ? "text-sm" : "text-sm"
                    } text-gray-600`}
                  >
                    {resumeData.volunteering.duration}
                  </p>
                  <p
                    className={`${
                      isPdfMode ? "text-sm" : "text-sm"
                    } pt-1 text-gray-700`}
                  >
                    {resumeData.volunteering.description}
                  </p>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div
              className={`${
                isPdfMode ? "space-y-8" : "space-y-10"
              } md:col-span-2 z-10`}
            >
              {/* Experience */}
              <div>
                <div
                  className={`flex items-center gap-3 ${
                    isPdfMode ? "mb-2" : "mb-4"
                  }`}
                >
                  <div className="bg-monoBeige p-2 rounded-md">
                    <FaBriefcase
                      className={`${
                        isPdfMode ? "text-lg" : "text-xl"
                      } text-black`}
                    />
                  </div>
                  <h2
                    className={`${
                      isPdfMode ? "text-lg" : "text-lg"
                    } font-bold uppercase`}
                  >
                    Experience
                  </h2>
                </div>

                <div className="space-y-6">
                  {resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between items-start flex-wrap">
                        <div>
                          <p className="font-semibold text-sm text-gray-900">
                            {exp.company}
                          </p>
                          <p className="font-medium text-sm text-gray-800">
                            {exp.role}
                          </p>
                        </div>
                        <div
                          className={`${
                            isPdfMode ? "text-sm" : "text-sm"
                          } text-gray-600 text-right`}
                        >
                          <p>{exp.location}</p>
                          <p>{exp.duration}</p>
                        </div>
                      </div>

                      <ul
                        className={`list-disc list-outside pl-4 mt-2 ${
                          isPdfMode ? "text-sm" : "text-sm"
                        } text-gray-700 space-y-1`}
                      >
                        {exp.points.map((point, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{
                              __html: formatBold(point),
                            }}
                          />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div
                  className={`flex items-center gap-3 ${
                    isPdfMode ? "mb-2" : "mb-4"
                  }`}
                >
                  <div className="bg-monoBeige p-2 rounded-md">
                    <FaFlag
                      className={`${
                        isPdfMode ? "text-lg" : "text-xl"
                      } text-black`}
                    />
                  </div>
                  <h2
                    className={`${
                      isPdfMode ? "text-lg" : "text-lg"
                    } font-bold uppercase`}
                  >
                    Key Achievements
                  </h2>
                </div>

                <ul
                  className={`list-disc list-outside pl-4 mt-2 ${
                    isPdfMode ? "text-sm" : "text-sm"
                  } text-gray-700 space-y-1`}
                >
                  {resumeData.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{
                        __html: formatBold(item),
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
