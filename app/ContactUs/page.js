"use client";
import React, { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://web3forms.com/client/script.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="dark:bg-gray-900 bg-gray-100 p-6" >
      <div className="dark:bg-gray-900 mt-6 ">
        <h2 className="mb-4 text-4xl  tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
      </div>
      <div className="grid max-w-screen-xl lg:px-28 mx-auto lg:gap-28 xl:gap-0 lg:grid-cols-12">
        <div className="lg:col-span-5 sm:p-4 md:text-center mt-6">
          <h2 className="mb-4 text-4xl lg:text-start font-extrabold leading-tight text-gray-900 dark:text-white">
            Let's talk about everything!
          </h2>
          <p className="mb-8 lg:mb-16 font-light lg:text-start text-gray-500 dark:text-gray-400 sm:text-xl">
            Hate forms? Send us an email instead.
          </p>
          <img src="/images/contact.png" className="lg:h-1/2 lg:w-4/5" alt="contact" />
        </div>
        <div className="lg:col-span-7">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="73b5b312-59be-4a53-a744-f6e0e88bbdcb"/>

              <label htmlFor="name" className="block mt-2 ml-1 mb-2 text-sm font-bold text-gray-600 dark:text-gray-300">
                NAME
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="shadow-sm bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700"
                required
              />

              <label htmlFor="email" className="block mt-2 ml-1 mb-2 text-sm font-bold text-gray-600 dark:text-gray-300">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-300 rounded-xl border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                required
              />

              <label htmlFor="message" className="block mt-2 ml-1 mb-2 text-sm font-bold text-gray-600 dark:text-gray-300">
                MESSAGE
              </label>
              <textarea
                name="message"
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-300 rounded-xl shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                required
              ></textarea>

              <div className="h-captcha mt-4 mb-4 w-full rounded-xl" data-captcha="true"></div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-bold text-center text-white rounded-lg block w-full bg-indigo-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
