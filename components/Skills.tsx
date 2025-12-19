"use client";

import { useState } from "react";
import { resumeData } from "@/data/ResumeData";
import { motion } from "framer-motion";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const filteredCategories = selectedCategory
    ? resumeData.skillCategories.filter(
        (cat) => cat.category === selectedCategory
      )
    : resumeData.skillCategories;
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            My technical expertise across the full stack
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            All
          </button>
          {resumeData.skillCategories.map((category) => (
            <button
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.category
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {filteredCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={item}
              className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 shadow-md"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700
                     dark:text-slate-300 rounded-lg border border-slate-300 dark:border-slate-600 font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
