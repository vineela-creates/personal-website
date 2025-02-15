"use client";
import React from "react";
import { resumeData } from "../data/ResumeData";
import { Header } from "./sections/Header";
import ThemeToggle from "./ThemeToggle";
import PdfDownload from "./PdfDownload";

const PageDetails: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  const gradients = {
    ocean: "bg-gradient-to-r from-lime-200 via-emerald-300 to-green-300",
    forest: "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500",
    sunset: "dark:bg-gradient-to-t dark:from-slate-400 dark:to-zinc-400",
    sunrise: "bg-gradient-to-t from-orange-300 to-gray-100",
  };
  return (
    <div
      className={`mx-auto min-h-screen ${gradients.sunrise} ${gradients.sunset} max-w-screen
     px-4 py-8  md:px-12 md:py-16 lg:py-0 bg-slate-900 dark:bg-blue-500 font-inconsolata font-light`}
    >
      {/* Mobile-first layout with flex-col by default, switching to row on larger screens */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
        {/* Theme toggle and navigation container */}
        <div className="flex justify-end mb-4 lg:mb-0">
          <nav>
            <ThemeToggle />
          </nav>
        </div>

        {/* Header section - full width on mobile */}
        <div className="w-full lg:w-auto">
          <Header data={resumeData} onScroll={scrollToSection} />
        </div>

        {/* Main Content - full width on mobile */}
        <main className="w-full lg:w-[52%] pt-12 lg:pt-24 lg:py-24">
          <section
            id="about"
            className="scroll-mt-16 mb-16 lg:mb-20 lg:scroll-mt-24 animate-fade-left animate-once"
          >
            <h1 className="text-blue-800 mb-8 font-bold text-xl md:text-2xl">
              ABOUT
            </h1>
            <div className="text-justify space-y-4 dark: text-teal-800">
              <p>
                Hi there! I'm Vineela, a Senior Software Engineer passionate
                about architecting and building impactful web applications that
                users love. I thrive on transforming complex business
                requirements into elegant, scalable solutions that make a real
                difference.
              </p>
              <p>
                Currently at Techvision Co, I lead full-stack development
                initiatives where I get to blend my love for robust backend
                systems with creating intuitive user experiences. What excites
                me most about software engineering is the constant evolution -
                there's always something new to learn and innovative ways to
                solve problems.
              </p>
              <p>
                I particularly enjoy working on challenging projects that push
                boundaries, whether it's optimizing high-traffic applications,
                implementing event-driven architectures, or crafting seamless
                user interfaces. When I'm not coding, I mentor junior developers
                on our team, sharing not just technical knowledge but also
                practical insights from my journey in tech.
              </p>
              <p>
                Outside the world of code, you'll find me reading books, solving
                puzzles (yes, debugging skills come in handy!), and spending
                quality time with friends and family. I believe these diverse
                interests help bring fresh perspectives to my technical
                problem-solving approach.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="max-w-full leading-6">
              <h1 className="text-blue-600 mb-8 font-bold text-xl md:text-2xl">
                EXPERIENCE
              </h1>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-8">
                  <div className="mb-4 dark:text-blue-600 text-teal-800 font-semibold">
                    <p className="break-words">
                      {exp.title}, {exp.company} - {exp.project}
                    </p>
                    <p>{exp.period}</p>
                  </div>
                  <div>
                    <ul className="list-disc ml-4 md:ml-8 space-y-2 dark: text-teal-800">
                      {exp.responsibilities.map((a, index) => (
                        <li key={index} className="text-justify">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="mt-2 flex flex-wrap">
                      {exp.skills.map((skill, index) => (
                        <li key={index} className="mr-1.5 mt-2">
                          <span className="flex items-center rounded-full dark:bg-slate-900 bg-teal-800 px-3 py-1 text-xs font-medium leading-5 dark: text-teal-300  ">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="education"
            className="mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="max-w-full leading-6">
              <h1 className="text-blue-600 mb-8 font-bold text-xl md:text-2xl">
                EDUCATION
              </h1>
              {resumeData.education.map((edu, index) => (
                <div className="mb-6" key={index}>
                  <p className="text-teal-800 dark:text-blue-600 font-semibold">
                    {edu.school}
                  </p>
                  <div className="dark: text-teal-800">
                    <p>{edu.year}</p>
                    <p>{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section
            id="pdf_resume"
            className="mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <PdfDownload
              pdfUrl="/resume.pdf"
              className="mt-2 flex flex-wrap font-bold dark:text-slate-800"
            >
              View Full Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </PdfDownload>
          </section>
         
        </main>
      </div>
    </div>
  );
};

export default PageDetails;
