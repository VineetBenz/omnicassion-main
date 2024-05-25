"use client";
import React, { useState } from 'react';

const CustomerProfile = () => {
    const [editing, setEditing] = useState(false);
    const [customer, setCustomer] = useState({
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        phone: '+1 123 456 789',
        address: '123 Main Street, Anytown, USA',
        avatar: '/images/user-removebg-preview.png', // Replace with your customer's avatar image path
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const toggleEditing = () => {
        setEditing(!editing);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-screen-xl mx-auto mt-10">
            <div className="flex items-center space-x-4">
                <img
                    className="w-52 h-32 rounded-full"
                    src={customer.avatar}
                    alt="Customer Avatar"
                />
                <div>
                    {editing ? (
                        <input
                            type="text"
                            name="name"
                            value={customer.name}
                            onChange={handleInputChange}
                            className="text-2xl font-semibold text-gray-800 border-b border-gray-300 focus:outline-none"
                        />
                    ) : (
                        <h2 className="text-2xl font-semibold text-gray-800">{customer.name}</h2>
                    )}
                    {editing ? (
                        <input
                            type="email"
                            name="email"
                            value={customer.email}
                            onChange={handleInputChange}
                            className="text-gray-600 border-b border-gray-300 focus:outline-none w-full"
                        />
                    ) : (
                        <p className="text-gray-600">{customer.email}</p>
                    )}
                    {editing ? (
                        <input
                            type="tel"
                            name="phone"
                            value={customer.phone}
                            onChange={handleInputChange}
                            className="text-gray-600 border-b border-gray-300 focus:outline-none w-full"
                        />
                    ) : (
                        <p className="text-gray-600">{customer.phone}</p>
                    )}
                    {editing ? (
                        <input
                            type="text"
                            name="address"
                            value={customer.address}
                            onChange={handleInputChange}
                            className="text-gray-600 border-b border-gray-300 focus:outline-none w-full"
                        />
                    ) : (
                        <p className="text-gray-600">{customer.address}</p>
                    )}
                </div>
            </div>

            <div className="mt-6 text-right">
                <button
                    onClick={toggleEditing}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                    {editing ? 'Save' : 'Edit'}
                </button>
            </div>
        </div>
    );
};

export default CustomerProfile;
