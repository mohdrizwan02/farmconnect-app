"use client";

import Header from "@/components/Header";
import React, { useState } from "react";



const FarmerContact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Header/>
      <section className="bg-white m-auto flex flex-col  text-black">
        <div className="container  mx-auto px-6 py-12 ">
          <div className="text-center">
            <p className="font-medium text-blue-600 dark:text-blue-400">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">
              Get in touch
            </h1>

            <p className="mt-3  text-black">
              Our friendly team is always here to chat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
              <p className="mt-2 text-black ">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-blue-500">farmconnectapp@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800">Office</h2>
              <p className="mt-2 text-black">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-blue-500">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="p-3 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full bg-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-medium text-gray-800">Phone</h2>
              <p className="mt-2 text-black">Mon-Fri from 8am to 5pm.</p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">
                +91 9515269727
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="max-w-5xl w-full bg-white p-8 justify-center rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstName"
                  >
                    First Name*
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-blue-500"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Last Name*
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-blue-500"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    E-mail*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-blue-500"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-blue-500"
                  rows={4}
                />
              </div>
              <div className="col-span-1 md:col-span-2 mb-4">
                <label className="inline-flex items-start">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 dark:bg-zinc-200"
                    required
                  />
                  <div>
                    <span className="ml-2 text-md text-black  ">
                      I agree to the storage of personal information provided
                      above, and consent to agribazaar representative to contact
                      me.
                    </span>

                    <br />
                  </div>
                </label>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-400 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default FarmerContact;
