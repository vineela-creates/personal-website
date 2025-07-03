"use client";
import React from "react";
import { resumeData } from "../data/ResumeData";
import { Header } from "./sections/Header";
import ThemeToggle from "./ThemeToggle";
import ContactForm from "./ContactForm";

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
      className={`mx-auto min-h-screen ${gradients.sunrise} dark:${gradients.sunset} w-full
     px-2 sm:px-4 py-8  md:px-12 md:py-16 lg:py-0 bg-slate-900 dark:bg-blue-500 font-calibri font-light`}
    >
      {/* Mobile-first layout with flex-col by default, switching to row on larger screens */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4 ">
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
            <div className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-orange-200 dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95 lg:shadow-xl lg:border-orange-600 p-4 sm:p-6 lg:p-10 lg:rounded-lg rounded-lg shadow-xl lg:text-justify text-justify space-y-10 lg:space-y-10 dark: text-teal-800">
              <p className="text-sm sm:text-base leading-relaxed">
                Hi there! I'm Vineela 👋, a Senior Software Engineer passionate
                about architecting and building impactful web applications that
                users love. I thrive on transforming complex business
                requirements into elegant, scalable solutions that make a real
                difference. I excel at designing event-driven architectures,
                optimizing high-traffic applications and implementing
                microservices that reduce processing time by up to 80%.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                As a technical leader, I mentor development teams, drive
                architectural decisions and collaborate closely with
                stakeholders to align technical solutions with business
                objectives. My approach combines robust backend system design
                with intuitive user experience, ensuring solutions are both
                technically sound and user-centric. I particularly enjoy working
                on challenging projects that push boundaries, whether it's
                optimizing high-traffic applications, implementing event-driven
                architectures, or crafting seamless user interfaces. When I'm
                not coding, I mentor junior developers on our team, sharing not
                just technical knowledge but also practical insights from my
                journey in tech.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Outside the world of code, you'll find me reading books, solving
                puzzles (yes, debugging skills come in handy!), and spending
                quality time with friends and family. I believe these diverse
                interests help bring fresh perspectives to my technical
                problem-solving approach.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Currently seeking senior engineering opportunities where I can
                apply my technology expertise and leadership experience to drive
                innovation and technical excellence.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="mb-8 sm:mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="w-full leading-6">
              <h1 className="text-blue-600 mb-6 sm:mb-8 mt-4 sm:mt-8 font-bold text-lg sm:text-xl md:text-2xl text-center underline">
                PROFESSIONAL EXPERIENCE
              </h1>
              {resumeData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-orange-200 dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95 lg:shadow-xl lg:border-orange-800 p-4 sm:p-6 lg:p-10 rounded-lg shadow-2xl mb-6 sm:mb-8 w-full"
                >
                  <div className="mb-4 dark:text-blue-600 text-teal-800 font-semibold text-base sm:text-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <p className="text-sm sm:text-base lg:text-lg break-words">
                        {exp.title} at {exp.company}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base mt-2 md:mt-0 flex-shrink-0">
                        {exp.period}
                      </p>
                    </div>
                    <p className="mb-4 break-words text-center text-sm sm:text-base">
                      {exp.project}
                    </p>
                  </div>
                  <div>
                    <ul className="list-disc ml-4 md:ml-8 space-y-2 lg:space-y-2 dark:text-teal-800">
                      {exp.responsibilities.map((a, index) => (
                        <li
                          key={index}
                          className="text-justify text-sm sm:text-base leading-relaxed break-words"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2 flex flex-wrap shadow-lg border-orange-600 p-3 sm:p-6 lg:p-10 rounded-lg group w-full">
                    {exp.skills.map((skill, index) => (
                      <div key={index} className="mr-1.5 mt-2">
                        <span
                          className="flex items-center rounded-full dark:bg-slate-900 bg-teal-800 px-3 py-1 text-xs font-medium leading-5
                           dark:text-teal-300 
                           text-blue-300
                     group-hover:shadow-lg group-hover:shadow-teal-800/50 
                     group-hover:scale-105 group-hover:bg-teal-700
                     transition-all duration-300 ease-out"
                          style={{
                            transitionDelay: `${index * 50}ms`,
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="education"
            className="mb-8 sm:mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="w-full leading-6 shadow-lg border-orange-600 p-4 sm:p-6 lg:p-10 rounded-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-orange-200 dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95">
              <h1 className="text-blue-600 mb-6 sm:mb-8 font-bold text-lg sm:text-xl md:text-2xl">
                EDUCATION
              </h1>
              {resumeData.education.map((edu, index) => (
                <div className="mb-6" key={index}>
                  <p className="text-teal-800 dark:text-blue-600 font-semibold text-sm sm:text-base">
                    {edu.school}
                  </p>
                  <div className="text-teal-800 text-sm sm:text-base">
                    <p>{edu.year}</p>
                    <p>{edu.degree}</p>
                  </div>
                </div>
              ))}
              <p className="text-sm sm:text-base leading-relaxed">
                "Continuous Learning Philosophy" - Staying ahead of the curve
                with emerging technologies and industry best practices
              </p>
            </div>
          </section>
          <section
            id="get_in_touch"
            className="mb-8 sm:mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <ContactForm />
          </section>
          <div className="w-full">
            <h3 className="text-sm sm:text-base break-words">
              Designed using <b>Next.js,React,Tailwind CSS </b> deployed on{" "}
              <b>Netlify</b>
            </h3>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PageDetails;
