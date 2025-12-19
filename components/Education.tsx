"use client";

import { resumeData } from "@/data/ResumeData";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Academic foundation in computer science
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                {edu.school}
              </p>
              <p className="text-slate-600 dark:text-slate-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
