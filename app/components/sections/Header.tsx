"use client";
import { Linkedin, LinkedinIcon } from "lucide-react";
import { SectionProps } from "../../types/SectionProps";
import Image from "next/image";

export const Header: React.FC<SectionProps> = ({ data, onScroll }) => (
  <header
    id="intro"
    className="w-full px-4 py-8 md:px-0 lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:py-24"
  >
    <div className="flex justify-center lg:justify-start mb-6">
      <div className="relative aspect-square w-48 lg:w-64">
        <Image
          src="/Linkedin pic.jpeg"
          alt="Profile picture"
          fill
          className="object-cover rounded-full border-2 border-gray-200 shadow-lg"
          sizes="(max-width: 768px) 192px, 256px"
          priority
        />
      </div>
    </div>

    <div className="text-center lg:text-left">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-blue-800 mb-4 lg:mb-6 dark:text-white">
        {data.intro.name}
      </h1>
      <h2 className="text-base md:text-lg font-medium leading-relaxed mb-6 lg:mb-8">
        {data.intro.title}
      </h2>
    </div>
  </header>
);
