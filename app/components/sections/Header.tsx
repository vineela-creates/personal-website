"use client";
import { SectionProps } from "../../types/SectionProps";
import Image from "next/image";

export const Header: React.FC<SectionProps> = ({ data, onScroll }) => (
  <header className="w-full px-4 py-8 md:px-0 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:py-24">
    <div className="flex justify-center lg:justify-start mb-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72">
        <Image
          src="/Linkedin pic.jpeg"
          alt="Profile picture"
          fill
          className="object-cover rounded-full border-2 border-gray-200 shadow-lg w-full h-full"
          priority
        />
      </div>
    </div>

    <div className="text-center flex flex-col text-wrap">
      <h1 className="text-3xl font-bold tracking-tight text-blue-600 mb-4 lg:mb-6 dark:text-white">
        {data.intro.name}
      </h1>
      <h2 className="text-xl leading-relaxed text-blue-600 mb-6 lg:mb-8">
        {data.intro.title}
      </h2>
    </div>
  </header>
);
