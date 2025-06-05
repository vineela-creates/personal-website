"use client";

export default function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className="max-w-full leading-6 lg:shadow-xl lg:border-orange-600 lg:p-10 p-10 lg:rounded-lg rounded-lg 
            shadow-xl transition-all duration-300 ease-in-out 
            hover:shadow-2xl hover:scale-105
             hover:bg-orange-200
             dark:hover:bg-slate-800 focus:shadow-2xl focus:scale-105 active:scale-95"
      >
        <h2 className="text-3xl font-bold text-teal-800 mb-2 text-center">
          LET'S CONNECT
        </h2>

        {/* Simple Netlify Form - No JavaScript */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-teal-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-teal-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-teal-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none resize-none"
              placeholder="Tell me about the project..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
