import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#7A4C2C] dark:text-[#B9BA76] mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get in touch with our agricultural experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7DA408] text-white py-3 rounded-lg hover:bg-[#807F10] transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                <div className="flex items-center space-x-4 text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
                  <MapPin className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">Visit Us</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  NS Road, Kushtia Sadar<br />
                  Kushtia - 7002<br />
                  Bangladesh
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                <div className="flex items-center space-x-4 text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
                  <Phone className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">Phone</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  +8801822-917633
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
                <div className="flex items-center space-x-4 text-[#7A4C2C] dark:text-[#B9BA76] mb-4">
                  <Mail className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  contact@farmfilo.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}