"use client";
import React from "react";
import { resumeData } from "../data/ResumeData";
import { Header } from "./sections/Header";
import ThemeToggle from "./ThemeToggle";

const PageDetails: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-4 py-8 font-sans md:px-12 md:py-16 lg:py-0 dark:bg-slate-900">
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
        <main className="w-full lg:w-[52%] pt-12 lg:pt-24 lg:py-24 dark:text-white">
          <section
            id="about"
            className="scroll-mt-16 mb-16 lg:mb-20 lg:scroll-mt-24"
          >
            <div className="text-justify space-y-4">
              <p>
                I'm a full stack developer passionate about designing and
                building user-friendly web applications that seamlessly blend
                robust frontend and backend engineering. My expertise lies at
                the intersection of design, development, and maintenance of
                applications optimized for peak performance.
              </p>
              <p>
                Currently, I'm a Senior Software Engineer at Techvision Co for
                UnitedHealth Group, specializing in full stack development of
                the Retiree Insurance Portal. I contribute to the creation and
                maintenance of UI components, backend APIs, and data pipelines
                that ensure a smooth experience for Medicare customers.
              </p>
              <p>
                Throughout my career, I've developed software solutions for
                various healthcare companies. Additionally, I mentor junior
                developers on our team, sharing best practices in programming
                and software development.
              </p>
              <p>
                In my spare time, I enjoy reading books, solving puzzles,
                playing badminton, and spending quality time with friends and
                family.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="mb-16 lg:mb-36 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="max-w-full leading-6">
              <h1 className="text-blue-800 mb-8 font-bold text-xl md:text-2xl">
                EXPERIENCE
              </h1>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mb-8">
                  <div className="mb-4 text-cyan-700 font-semibold">
                    <p className="break-words">
                      {exp.title}, {exp.company} - {exp.project}
                    </p>
                    <p>{exp.period}</p>
                  </div>
                  <div>
                    <ul className="list-disc ml-4 md:ml-8 space-y-2">
                      {exp.achievements.map((a, index) => (
                        <li key={index} className="text-justify">
                          {a}
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
            className="mb-16 lg:mb-36 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="max-w-full leading-6">
              <h1 className="text-blue-800 mb-8 font-bold text-xl md:text-2xl">
                EDUCATION
              </h1>
              {resumeData.education.map((edu, index) => (
                <div className="mb-6" key={index}>
                  <p className="text-cyan-700 font-semibold">{edu.school}</p>
                  <p>{edu.year}</p>
                  <p>{edu.degree}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PageDetails;
