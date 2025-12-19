"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert mx-auto"
        >
          <div className="text-slate-700 dark:text-slate-300 space-y-6 text-lg leading-relaxed">
            <p>
              Hi there! I'm Vineela 👋, a Senior Software Engineer passionate
              about architecting and building impactful web applications that
              users love. I thrive on transforming complex business requirements
              into elegant, scalable solutions that make a real difference.
            </p>

            <p>
              I excel at designing event-driven architectures, optimizing
              high-traffic applications and implementing microservices that
              reduce processing time by up to 80%. My experience spans across
              the full technology stack, from crafting intuitive user interfaces
              with React and Angular to building robust backend systems with
              Spring Boot and Node.js.
            </p>

            <p>
              As a technical leader, I mentor development teams, drive
              architectural decisions and collaborate closely with stakeholders
              to align technical solutions with business objectives. My approach
              combines robust backend system design with intuitive user
              experience, ensuring solutions are both technically sound and
              user-centric.
            </p>

            <p>
              I particularly enjoy working on challenging projects that push
              boundaries, whether it's optimizing high-traffic applications,
              implementing event-driven architectures, or crafting seamless user
              interfaces. When I'm not coding, I mentor junior developers on our
              team, sharing not just technical knowledge but also practical
              insights from my journey in tech.
            </p>

            <p>
              Outside the world of code, you'll find me reading books, solving
              puzzles (yes, debugging skills come in handy!), and spending
              quality time with friends and family. I believe these diverse
              interests help bring fresh perspectives to my technical
              problem-solving approach.
            </p>

            <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              Currently seeking senior engineering opportunities where I can
              apply my technology expertise and leadership experience to drive
              innovation and technical excellence.
            </p>
          </div>
        </motion.div>

        {/* Continuous Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-600"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            💡 Continuous Learning Philosophy
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-lg">
            Staying ahead of the curve with emerging technologies and industry
            best practices
          </p>
        </motion.div>
      </div>
    </section>
  );
}
