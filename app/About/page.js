
import React from 'react'

const about = () => {
  return (
    <>
     { /* about section */}
            < section class=" bg-gray-100  text-black" >
                <div class="gap-10 p-10  items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-20 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img class="w-full rounded-b-full" src="/images/about.webp" alt="about image" />
                    <div class="mt-4 md:mt-0">
                        <h1 class="mb-4 text-5xl tracking-tight font-extrabold text-black">About Us</h1>
                        <p class="mb-6 font-light text-black md:text-lg dark:text-gray-400">Omnicassion is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
                       {/*  <a href="" class="inline-flex items-center text-black bg-blue-300 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-3xl text-md px-5 py-2.5 text-center dark:focus:ring-primary-900">
                            Learn More
                            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                        */}
                    </div>
                </div>
            </section >


           {/* Team section*/}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 p-10">
          <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
            <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Emphasis is placed on the collaborative effort between Omnicassion and Cater to deliver exceptional results</p>
          </div>
          <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.1.752795207.1704461883&semt=sph" alt=" "/>
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the platform and brand.</p>
                <ul class="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.1.752795207.1704461883&semt=sph" alt="Jese Avatar"/>
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Jese Leos</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">CTO</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Jese drives the technical strategy of the platform and brand.</p>
                <ul class="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.1.752795207.1704461883&semt=sph" alt="Michael Avatar"/>
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Michael Gough</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Senior Front-end Developer</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Michael drives the technical strategy of the platform and brand.</p>
                <ul class="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.1.752795207.1704461883&semt=sph" alt="Sofia Avatar"/>
              </a>
              <div class="p-5">
                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">Lana Byrd</a>
                </h3>
                <span class="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Lana drives the technical strategy of the platform and brand.</p>
                <ul class="flex space-x-4 sm:mt-0">
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="bg-gray-100  py-10">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 p-6">
                <section className="mb-12">
                    <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Privacy Policy</h2>
                    <p className="mt-4 font-medium text-black md:text-lg dark:text-gray-400">
                        At Omnicassion, we respect your privacy and are committed to protecting your personal information. 
                        This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
                    </p>
                    <ul className="list-disc list-inside font-medium text-gray-600 mt-4">
                        <li>We collect personal information that you provide to us when you register, make a booking, or communicate with us.</li>
                        <li>Your information is used to provide and improve our services, process transactions, and communicate with you.</li>
                        <li>We implement security measures to protect your data from unauthorized access, alteration, or disclosure.</li>
                        <li>We do not sell or share your personal information with third parties, except as necessary to provide our services or as required by law.</li>
                        <li>By using our platform, you consent to the collection and use of your information as described in this Privacy Policy.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Terms & Conditions</h2>
                    <p className="mt-4 font-medium text-black md:text-lg dark:text-gray-400">
                        These Terms & Conditions govern your use of the Omnicassion platform. By accessing or using our services, you agree to be bound by these terms.
                    </p>
                    <ul className="list-disc list-inside font-medium  text-gray-600 mt-4">
                        <li>You must be at least 18 years old to use our platform.</li>
                        <li>All information you provide must be accurate and up-to-date.</li>
                        <li>You are responsible for maintaining the confidentiality of your account information.</li>
                        <li>We reserve the right to suspend or terminate your account if you violate these terms.</li>
                        <li>Our platform is provided "as is" without warranties of any kind, either express or implied.</li>
                        <li>We are not liable for any damages arising from your use of our platform.</li>
                        <li>These terms may be updated from time to time, and your continued use of the platform constitutes acceptance of the new terms.</li>
                    </ul>
                </section>
               
            </div>
        </div>
    </>

  )
}

export default about