"use client";
import React from "react";
import { resumeData } from "../data/ResumeData";
import { Header } from "./sections/Header";
import ThemeToggle from "./ThemeToggle";
import PdfDownload from "./PdfDownload";
import { Bold } from "lucide-react";

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
      className={`mx-auto min-h-screen ${gradients.sunrise} dark:${gradients.sunset} max-w-screen
     px-4 py-8  md:px-12 md:py-16 lg:py-0 bg-slate-900 dark:bg-blue-500 font-calibri font-light`}
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
            <div className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-orange-200 dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95 lg:shadow-xl lg:border-orange-600 lg:p-10 p-10 lg:rounded-lg rounded-lg shadow-xl lg:text-justify text-justify space-y-10 lg:space-y-10 dark: text-teal-800">
              <p>
                Hi there! I'm Vineela 👋, a Senior Software Engineer passionate
                about architecting and building impactful web applications that
                users love. I thrive on transforming complex business
                requirements into elegant, scalable solutions that make a real
                difference. I excel at designing event-driven architectures,
                optimizing high-traffic applications and implementing
                microservices that reduce processing time by up to 80%.
              </p>
              <p>
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
              <p>
                Outside the world of code, you'll find me reading books, solving
                puzzles (yes, debugging skills come in handy!), and spending
                quality time with friends and family. I believe these diverse
                interests help bring fresh perspectives to my technical
                problem-solving approach.
              </p>
              <p>
                Currently seeking senior engineering opportunities where I can
                apply my technology expertise and leadership experience to drive
                innovation and technical excellence.
              </p>
            </div>
          </section>

          <section
            id="experience"
            className="mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="max-w-full leading-6">
              <h1 className="text-blue-600 mb-8 mt-8 font-bold text-xl md:text-2xl text-center underline">
                PROFESSIONAL EXPERIENCE
              </h1>
              {resumeData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-orange-200 dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95 lg:shadow-xl lg:border-orange-800 lg:p-10 p-10 lg:rounded-lg rounded-lg shadow-2xl mb-8 "
                >
                  <div className="mb-4 dark:text-blue-600 text-teal-800 font-semibold text-lg">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <p>
                        {exp.title} at {exp.company}
                      </p>
                      <p className="text-sm md:text-base mt-2 md:mt-0">
                        {exp.period}
                      </p>
                    </div>
                    <p className="mb-4 break-words text-center">
                      {exp.project}
                    </p>
                  </div>
                  <div>
                    <ul className="list-disc ml-4 md:ml-8 space-y-2 lg:space-y-2 dark:text-teal-800">
                      {exp.responsibilities.map((a, index) => (
                        <li key={index} className="text-justify">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2 flex flex-wrap lg:shadow-xl lg:border-orange-600 lg:p-10 p-10 lg:rounded-lg rounded-lg shadow-xl group">
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
            className="mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <div className="max-w-full leading-6 lg:shadow-xl lg:border-orange-600 lg:p-10 p-10 lg:rounded-lg rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:bg-orange-200 dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95">
              <h1 className="text-blue-600 mb-8 font-bold text-xl md:text-2xl space-x-4 lg:space-x-4">
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
              <p>
                "Continuous Learning Philosophy" - Staying ahead of the curve
                with emerging technologies and industry best practices
              </p>
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
          <section
            id="get_in_touch"
            className="mb-16 lg:mb-20 scroll-mt-16 lg:scroll-mt-24"
          >
            <div
              className="max-w-full leading-6 lg:shadow-xl lg:border-orange-600 lg:p-10 p-10 lg:rounded-lg rounded-lg 
            shadow-xl transition-all duration-300 ease-in-out 
            hover:shadow-2xl hover:scale-105
             hover:bg-orange-200
             dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95"
            >
              <h1 className="font-bold md:text-2xl text-center mb-10">
                LET'S CONNECT !!
              </h1>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="mb-8 space-y-6"
              >
                <div className="mb-8">
                  <label>Your Name</label>
                  <input
                    type="input"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label>Email</label>
                  <input
                    type="input"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <div className="mb-8">
                  <label>Tell me about the project !!</label>
                  <textarea
                    name="project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
                    placeholder="Tell me about the project.."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
                  <div>
                    <h4 className="font-semibold text-teal-800 mb-1">Email</h4>
                    <p className="text-teal-600">
                      sridharavineela304@gmail.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-800 mb-1">
                      Response Time
                    </h4>
                    <p className="text-teal-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full lg:w-auto">
            <h3 className="text-md">
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
