"use client";

import { useState } from "react";
import { resumeData } from "@/data/ResumeData";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
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
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Open to opportunities and always happy to chat about technology
          </p>

          {/* Availability Badge */}
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="font-semibold">Available for opportunities</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                  status === "sending"
                    ? "bg-blue-400 cursor-not-allowed"
                    : status === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {status === "sending" && "Sending..."}
                {status === "success" && "✓ Message Sent!"}
                {status === "idle" && "Send Message"}
                {status === "error" && "Try Again"}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Email
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {resumeData.contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Connect Online
              </h3>
              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={`https://${resumeData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      LinkedIn
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      Connect with me
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                {resumeData.contact.github && (
                  <a
                    href={resumeData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-slate-700 dark:text-slate-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        GitHub
                      </p>
                      <p className="text-slate-900 dark:text-white font-medium">
                        View my code
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                💬 <strong>Quick Response:</strong> I typically respond to
                messages within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
