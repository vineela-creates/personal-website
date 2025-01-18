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
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0 dark:bg-slate-900">
      <div className="flex justify-between gap-4">
        <div className="items-end">
          <nav>
            <ThemeToggle />
          </nav>
        </div>
        <Header data={resumeData} onScroll={scrollToSection} />
        {/* Main Content */}

        <main className="pt-24 lg:w-[52%] lg:py-24 dark:text-white">
          <section
            id="about"
            className="
       scroll-mt-16 md:mb-24 lg:mb-20 lg:scroll-mt-24"
          >
            <div className="mb-4 text-justify">
              <p className="mb-4">
                I'm a full stack developer passionate about designing and
                building user-friendly web applications that seamlessly blend
                robust frontend and backend engineering. My expertise lies at
                the intersection of design, development, and maintenance of
                applications optimized for peak performance.
              </p>
              <p className="mb-4">
                Currently, I'm a Senior Software Engineer at Techvision Co for
                UnitedHealth Group, specializing in full stack development of
                the Retiree Insurance Portal. I contribute to the creation and
                maintenance of UI components, backend APIs, and data pipelines
                that ensure a smooth experience for Medicare customers.
              </p>
              <p className="mb-4">
                Throughout my career, I've developed software solutions for
                various healthcare companies. Additionally, I mentor junior
                developers on our team, sharing best practices in programming
                and software development.
              </p>
              <p className="mb-4">
                In my spare time, I enjoy reading books,solving puzzles, playing
                badminton, and spending quality time with friends and family.
              </p>
            </div>
          </section>
          <section
            id="experience"
            className="min-h-screen bg-blue gap-4 mb-12  scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="max-w-4xl leading-6">
              <h1 className="text-blue-800 mb-10 font-bold text-2xl">
                EXPERIENCE
              </h1>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="mt-10">
                  <div className="mb-8 text-cyan-700 font-semibold">
                    <p>
                      {exp.title}, {exp.company} -{exp.project}
                    </p>
                    <p>{exp.period}</p>
                  </div>
                  <div>
                    <ul className="list-disc ml-15">
                      {exp.achievements.map((a, index) => (
                        <li key={index} className="ml-8 text-justify">
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
            className="min-h-screen bg-blue gap-4 mb-12  scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="max-w-4xl leading-6">
              <h1 className="text-blue-800 mb-10 mt-5 font-bold text-2xl">
                EDUCATION
              </h1>
              {resumeData.education.map((edu, index) => (
                <div className="mb-4" key={index}>
                  <p className="text-cyan-700">
                    {edu.school} <></>
                  </p>
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
