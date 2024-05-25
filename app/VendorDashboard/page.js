"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const VendorDashboard = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false); // State to track profile dropdown visibility
    const [isDashboardOpen, setIsDashboardOpen] = useState(false); // State to track dashboard dropdown visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu state on click
    };

    const toggleProfileMenu = () => {
        setIsProfileOpen(!isProfileOpen); // Toggle profile dropdown on click
    };

    const closeProfileMenu = () => {
        setIsProfileOpen(false); // Close profile dropdown
    };

    const closeDashboardMenu = () => {
        setIsDashboardOpen(false); // Close dashboard dropdown
    };

    const toggleDashboardMenu = () => {
        setIsDashboardOpen(!isDashboardOpen); // Toggle dashboard dropdown on click
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.profile-menu')) {
                closeProfileMenu();
            }
            if (!event.target.closest('.dashboard-menu')) {
                closeDashboardMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className=" flex  bg-gray-100">
            <aside className="w-64 bg-white shadow-md ">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-green-600">omnicassion</h1>
                </div>
                <nav className="px-6 mt-10 space-y-2">
                    <div className="flex items-center ">
                        <div className="relative dashboard-menu w-full mb-6">       
                            <Link href="#" onClick={toggleDashboardMenu} className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Dashboard</Link>
                            {isDashboardOpen && (
                                <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                                    <Link href="/Analytics" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                        Analytics
                                    </Link>
                                    <Link href="/CRM" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                        CRM
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    <Link href="#" className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Orders</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Customers</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Portfolio</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Invoices</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Authentication</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Help</Link>
                    <Link href="#" className="block px-4 py-2 text-gray-700 border border-gray-300 hover:bg-gray-100 rounded-lg">Settings</Link>

                </nav>
            </aside>
            <div className="flex flex-col flex-1">
                <header className="bg-white shadow-md p-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700">Welcome vendor</h2>
                    </div>
                    <div className="flex items-center">
                        <input type="text" className="border border-gray-300 rounded-lg p-2 mr-4" placeholder="Search..." />
                        <div className="flex items-center space-x-4">
                            <div className="relative profile-menu">
                                <button onClick={toggleProfileMenu} className="flex text-md border-2 border-transparent rounded-full focus:outline-none">
                                    <img className="h-12 w-20 rounded-full" src="/images/user-removebg-preview.png" alt="User Avatar" />
                                </button>
                                {isProfileOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">

                                        <Link href="/VendorProfile" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                            My Profile
                                        </Link>
                                        <Link href="/Withdraw" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                            Withdraw Money
                                        </Link>
                                        <Link href="" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                            Add Money
                                        </Link>
                                        <Link href="" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100">
                                            Get Loan
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className="lg:hidden">
                                <button onClick={toggleMenu} className="text-white mt-3 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                                    <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-grow p-6 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
                            <p className="text-3xl font-bold text-green-600">11,580</p>
                            <p className="text-sm text-gray-500">+4.9%</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-700">No. of Coustomer</h3>
                            <p className="text-3xl font-bold text-green-600">45,580</p>
                            <p className="text-sm text-gray-500">+13.9%</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-700">Total Vendors</h3>
                            <p className="text-3xl font-bold text-red-600">8,580</p>
                            <p className="text-sm text-gray-500">-3.9%</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-4">
                            <h3 className="text-lg font-semibold text-gray-700">Total Earnings</h3>
                            <p className="text-3xl font-bold text-green-600">$51,580</p>
                            <p className="text-sm text-gray-500">+5.5%</p>
                        </div>
                    </div>
                    <div className="mt-6 bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Revenue Report</h3>
                        <div className="h-48">
                            {/* You can use a chart library like Chart.js or Recharts to render the chart */}
                            <p>Chart Placeholder</p>
                        </div>
                    </div>
                    <div className="mt-6 bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Best Selling Product</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Product</th>
                                    <th className="px-4 py-2">Category</th>
                                    <th className="px-4 py-2">Brand</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Stock</th>
                                    <th className="px-4 py-2">Rating</th>
                                    <th className="px-4 py-2">Order</th>
                                    <th className="px-4 py-2">Sales</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2">#1</td>
                                    <td className="border px-4 py-2">Dell Mac Pro 2</td>
                                    <td className="border px-4 py-2">Tech gadget</td>
                                    <td className="border px-4 py-2">Apple</td>
                                    <td className="border px-4 py-2">$899.00</td>
                                    <td className="border px-4 py-2">500</td>
                                    <td className="border px-4 py-2">4.8</td>
                                    <td className="border px-4 py-2">200</td>
                                    <td className="border px-4 py-2">$178k</td>
                                    <td className="border px-4 py-2">
                                        <button className="text-blue-600 hover:text-blue-900">Edit</button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed */}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default VendorDashboard;
