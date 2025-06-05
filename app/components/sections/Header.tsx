"use client";
import { BookOpen, Github, Linkedin } from "lucide-react";
import { SectionProps } from "../../types/SectionProps";
import Image from "next/image";

export const Header: React.FC<SectionProps> = ({ data, onScroll }) => (
  <header className="w-full px-4 py-8 md:px-0 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:py-24">
    <div className="flex justify-center lg:justify-start mb-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80">
        <img
          src="/Linkedinpic.jpeg"
          alt="Profile picture"
          className="object-cover rounded-full border-2 border-gray-200 shadow-lg w-full h-full"
        />
      </div>
    </div>

    <div className="text-center flex flex-col text-wrap">
      <h1 className="text-3xl font-bold tracking-tight text-teal-800 mb-4 lg:mb-6">
        {data.intro.name}
      </h1>
      <h2 className="text-xl leading-relaxed text-teal-800 mb-6 lg:mb-8">
        {data.intro.title}
      </h2>

      <div className="flex flex-row ml-20 lg:ml-25 gap-6 mb-8">
        <a
          href="https://www.linkedin.com/in/vsridha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-800 hover:text-blue-800 dark:hover:text-cyan-500 transition-colors"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={28} />
        </a>

        <a
          href="https://github.com/vineela-creates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-800 hover:text-blue-800 dark:hover:text-cyan-500 transition-colors"
          aria-label="GitHub Profile"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.goodreads.com/user/show/185179856-vineela-sridhara"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-800 hover:text-blue-800 dark:hover:text-cyan-500 transition-colors"
          aria-label="Goodreads Profile"
        >
          <BookOpen size={28} />
        </a>
      </div>
    </div>
  </header>
);
