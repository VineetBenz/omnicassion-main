"use client";
import React, { useState } from 'react'


const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your search functionality, such as filtering items based on the search query
    // For demonstration purposes, let's assume you have a list of items and you want to filter them based on their name or description
    const filteredResults = items.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    setSearchResults(filteredResults);
  };

  // Dummy data representing items on your website
  const items = [
    { id: 1, name: 'Venue 1', description: 'This is the description for Venue 1' },
    { id: 2, name: 'Vendor 1', description: 'This is the description for Vendor 1' },
    { id: 3, name: 'Planner 1', description: 'This is the description for Planner 1' },
    // Add more items as needed
  ];
  const backgroundImageUrl = '/images/hero-section.jpg';

    return (
        <>
            <section className=" dark:bg-gray-900 " style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-12 ">
                    <h1 class=" text-4xl mt-32 mb-4 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl font-serif dark:text-white">JUST SIT BACK AND ENJOY</h1>
                 {/*  <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Omnicassion is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer. </p> */} 
                    <div class=" sm:justify-center mb-12 sm:space-y-0 sm:space-x-4">


                        <div>
                            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-100 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-100 dark:text-white  dark:focus:border-blue-500"
                                        placeholder="Search for venue, vendor or planner"
                                        value={searchQuery}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute end-2.5 bottom-2.5 bg-transparent hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>

                            {/* Display search results */}
                            <div className="mt-4">
                                <h2 className="text-lg font-semibold mb-2"></h2>
                                {searchResults.length === 0 ? (
                                    <p></p>
                                ) : (
                                    <ul>
                                        {searchResults.map((item) => (
                                            <li key={item.id}>
                                                <h3>{item.name}</h3>
                                                <p>{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </section >


            { /* Category section */}
            < section className='mt-28' >
                <h1 class="mb-4 text-4xl  font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-6xl text-center dark:text-white">Select Category</h1>
                <div class="space-y-8 p-10  md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">


                    <div
                        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/wedding.webp" width="100%" height="60%" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wedding
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Plan your dream wedding</p>
                            <a href="#"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/personal.webp" width="100%" height="60%" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Celebrate your secret moment</p>
                            <a href="#"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/corporate.webp" width="100%" height="60%" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Corporate
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Plan your important projects</p>
                            <a href="#"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div
                        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src="/images/social.webp" width="100%"
                                height="60%" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Social

                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Get out and socialize a little</p>
                            <a href="#"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </section >


            { /* about section */}
            < section class=" bg-gray-900 mt-20 text-white" >
                <div class="gap-10 p-10 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-20 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                    <img class="w-full rounded-b-full" src="/images/about.webp" alt="about image" />
                    <div class="mt-4 md:mt-0">
                        <h1 class="mb-4 text-5xl tracking-tight font-extrabold text-white">About Us</h1>
                        <p class="mb-6 font-light text-white md:text-lg dark:text-gray-400">Omnicassion is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
                        <a href="" class="inline-flex items-center text-black bg-gray-100 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-3xl text-md px-5 py-2.5 text-center dark:focus:ring-primary-900">
                            Learn More
                            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section >



            { /* plan perfect wedding section */}
            < section className='p-10 mt-16' >
                <h1 class="mb-4 text-4xl  font-bold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-6xl text-center dark:text-white">Let's Plan Your Perfect Wedding</h1>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq3YzTkSSXvrJpU4KfrAxlDEm3m-FKqjELOJT1MORbA&s" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/d3/7f/59/d37f5973122f81f90a5b1a930c59e321.jpg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMc_eoqRkvhbM5LZYgNviUbvC623g32wFWDkH0uZ9rQ&s" alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://img.ehowcdn.com/-/clsd/getty/cache.gettyimages.com/16f782add01b4e578411e54bb4be0894.jpg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDzMBec9VsHcgBxrAg7N_O7At34IykdLWwOdM-Qo4kO0bfpkSnnlXuYYowE9-uI6NnaI&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://i.pinimg.com/736x/d3/7f/59/d37f5973122f81f90a5b1a930c59e321.jpg" alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </section >

        </>
    )
}

export default Home