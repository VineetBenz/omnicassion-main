"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import SignInBox from './out';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track menu visibility
    const [isProfileOpen, setIsProfileOpen] = useState(false); // State to track profile dropdown visibility
    const [userRole, setUserRole] = useState('vendor'); // State to track user role ('vendor' or 'customer')

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state on click
    };

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen); // Toggle profile dropdown on click
    };

    const closeProfileMenu = () => {
        setIsProfileOpen(false); // Close profile dropdown
    };
    const [isSignedIn, setIsSignedIn] = useState(false);
    const handleSignIn = () => {
        setIsSignedIn(true);
      };
    
      const handleSignOut = () => {
        setIsSignedIn(false);
      };


      const [showSignInBox, setShowSignInBox] = useState(false);

      const toggleSignInBox = () => {
        setShowSignInBox(!showSignInBox);
      };  
    // Close profile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.profile-menu')) {
                closeProfileMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-indigo-900 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-white">
                            OMNICASSION
                        </Link>
                    </div>
                    <div className="flex-grow hidden lg:flex lg:space-x-8 justify-center">
                        <Link href="/About" className="text-white border-effect hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">
                            About
                        </Link>
                        <Link href="/Portfolio" className="text-white border-effect hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">
                            Portfolio
                        </Link>
                        <Link href="/Events" className="text-white border-effect hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">
                            Events
                        </Link>
                        <Link href="/ContactUs" className="text-white border-effect hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium">
                            Contact
                        </Link>
                        
                    </div>
                    <div className="flex items-center space-x-4">
                    {isSignedIn? (
                        <div className="relative profile-menu">
                        <Link href="/SignIn" class="text-white border-effect hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium" id="sign-in-link">
                            Sign In
                        </Link>
                            <button onClick={toggleProfileMenu} className="flex text-md border-2 border-transparent rounded-full focus:outline-none">
                                <img className="h-12 w-20 rounded-full" src="/images/user-removebg-preview.png" alt="User Avatar" />
                            </button>
                            {isProfileOpen && (
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                                    {userRole === 'vendor' ? (
                                        <>
                                            <Link href="/VendorProfile" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                                Vendor Profile
                                            </Link>
                                            <Link href="/VendorDashboard" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                                Vendor Dashboard
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link href="/CustomerProfile" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                                Customer Profile
                                            </Link>
                                            <Link href="/CustomerDashboard" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                                Customer Dashboard
                                            </Link>
                                        </>
                                    )}
                                    <button on className="block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                        ) : (
                            <div>
                            <button class="text-white border-effect hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium" id="sign-in-link" onClick={toggleSignInBox} >
                            {showSignInBox ? 'Close Sign In' : 'Sign In'}
                        </button>
                        {showSignInBox && <SignInBox />}
                        
                            </div>
                        )}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-white mt-3 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 md:px-3">
                    <Link href="/Events" className="block text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                        Events
                    </Link>
                    <Link href="/About" className="block text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                        About
                    </Link>
                    <Link href="/ContactUs" className="block text-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;