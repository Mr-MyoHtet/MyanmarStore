import React from 'react'
import PageTitle from './PageTitle';
import { Form } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="max-w-[1152px] mx-auto">
      {/* Page Title */}
      <div className="max-w-2xl mx-auto pt-20 text-center text-center text-gray-600 dark:text-lighter flex flex-col items-center">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-normalbg">
          Contact Us
        </h1>
        <p className="text-gray-500 mb-10 dark:text-normalbg">
          We'd love to hear from you! If you have any questions, feedback, or
          suggestions, please don't hesitate to reach out.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
            className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Mobile Number
            </label>
            <input
              type="tel"
              placeholder="Your Mobile Number"
              className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-normalbg">
              Message
            </label>
            <textarea
            rows="5"
            placeholder="Your Message"
          className="w-full bg-white text-gray-800 placeholder-gray-400 
           border border-gray-300 rounded-md px-4 py-3 
           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-medium py-3 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact