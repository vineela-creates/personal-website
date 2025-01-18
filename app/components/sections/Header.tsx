"use client";
import { SectionProps } from "../../types/SectionProps";
import Image from "next/image";

export const Header: React.FC<SectionProps> = ({ data, onScroll }) => (
  <header
    id="intro"
    className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24"
  >
    <Image
      src="/Linkedin pic.jpeg"
      alt="My pic"
      width={200}
      height={200}
      className="rounded-s-lg border-2 border-gray-300 mb-5"
    />

    <div>
      <h1 className="text-3xl font-bold tracking-tight text-blue-800 mb-6 dark:text-white-400">
        {data.intro.name}
      </h1>
      <h2 className="mt-3 text-lg font-medium leading-relaxed mb-8">
        {data.intro.title}
      </h2>

      {/* <nav className="nav hidden lg:block" aria-label="In-page jump links">
        <ul className="mt-20 w-max">
          <li>
            <span className="group flex items-center py-3 active"></span>
            <button className="nav-indicator mr-4 h-px w-20 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
              <span className="font-bold text-medium">ABOUT</span>
            </button>
          </li>
          <li>
            <a
              href="#experiences"
              className="group flex items-center py-3 active"
            >
              <span className="nav-indicator mr-4 h-px w-20 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span
                className="font-bold text-medium
            "
              >
                EXPERIENCES
              </span>
            </a>
          </li>
          <li>
            <a href="#projects" className="group flex items-center py-3 active">
              <span className="nav-indicator mr-4 h-px w-20 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
              <span
                className="font-bold text-medium
            "
              >
                PROJECTS
              </span>
            </a>
          </li>
        </ul>
      </nav> */}
    </div>
  </header>
);
