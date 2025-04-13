import React from "react";
import { FiMail, FiMapPin, FiPhone, FiClock, FiUser, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-[65px]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us—we're here to help!
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Contact Form */}
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FiMessageSquare className="mr-2 text-blue-600" />
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email *
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiMail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    Send Message
                    <FiMail className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 sm:p-10 text-white">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white bg-opacity-20 p-3 rounded-full">
                    <FiMapPin className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Our Location</h3>
                    <p className="mt-1">
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white bg-opacity-20 p-3 rounded-full">
                    <FiMail className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Email Us</h3>
                    <p className="mt-1">
                      support@printmartshop.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white bg-opacity-20 p-3 rounded-full">
                    <FiClock className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Working Hours</h3>
                    <p className="mt-1">
                      <span className="block">Monday - Friday: 9am - 5pm</span>
                      <span className="block">Saturday: 10am - 2pm</span>
                      <span className="block">Sunday: Closed</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white border-opacity-20">
                  <h3 className="text-lg font-semibold mb-3">Need immediate help?</h3>
                  <button className="flex items-center justify-center w-full px-4 py-3 border border-white border-opacity-30 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-200">
                    <FiPhone className="mr-2" />
                    Call Now: (123) 456-7890
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="h-64 md:h-96 w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Map Integration Would Appear Here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;