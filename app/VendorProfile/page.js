"use client";
import React, { useState } from 'react';

const VendorProfile = () => {
    const [editing, setEditing] = useState(false);
    const [vendor, setVendor] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1 234 567 890',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        services: ['Service 1', 'Service 2', 'Service 3'],
        avatar: '/images/user-removebg-preview.png', // Replace with your vendor's avatar image path
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVendor({ ...vendor, [name]: value });
    };

    const handleServiceChange = (index, value) => {
        const newServices = [...vendor.services];
        newServices[index] = value;
        setVendor({ ...vendor, services: newServices });
    };

    const handleAddService = () => {
        setVendor({ ...vendor, services: [...vendor.services, ''] });
    };

    const handleRemoveService = (index) => {
        const newServices = vendor.services.filter((_, i) => i !== index);
        setVendor({ ...vendor, services: newServices });
    };

    const toggleEditing = () => {
        setEditing(!editing);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-screen-xl mx-auto mt-10">
            <div className="flex items-center space-x-4">
                <img
                    className="w-52 h-32 rounded-full"
                    src={vendor.avatar}
                    alt="Vendor Avatar"
                />
                <div className="mt-4">
                    {editing ? (
                        <input
                            type="text"
                            name="name"
                            value={vendor.name}
                            onChange={handleInputChange}
                            className="text-2xl font-semibold text-gray-800 border-b border-gray-300 focus:outline-none"
                        />
                    ) : (
                        <h2 className="text-2xl font-semibold text-gray-800">{vendor.name}</h2>
                    )}

                    {editing ? (
                        <input
                            type="email"
                            name="email"
                            value={vendor.email}
                            onChange={handleInputChange}
                            className="text-gray-600 border-b border-gray-300 focus:outline-none w-full"
                        />
                    ) : (
                        <p className="text-gray-600">{vendor.email}</p>
                    )}
                    {editing ? (
                        <input
                            type="tel"
                            name="phone"
                            value={vendor.phone}
                            onChange={handleInputChange}
                            className="text-gray-600 border-b border-gray-300 focus:outline-none w-full"
                        />
                    ) : (
                        <p className="text-gray-600">{vendor.phone}</p>
                    )}
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">About</h3>
                {editing ? (
                    <textarea
                        name="about"
                        value={vendor.about}
                        onChange={handleInputChange}
                        className="mt-2 text-gray-600 border border-gray-300 focus:outline-none w-full p-2 rounded-lg"
                    />
                ) : (
                    <p className="mt-2 text-gray-600">{vendor.about}</p>
                )}
            </div>
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800">Services Offered</h3>
                {editing ? (
                    <div className="mt-2 space-y-2">
                        {vendor.services.map((service, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={service}
                                    onChange={(e) => handleServiceChange(index, e.target.value)}
                                    className="text-gray-600 border-b border-gray-300 focus:outline-none flex-grow"
                                />
                                <button
                                    onClick={() => handleRemoveService(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={handleAddService}
                            className="text-blue-500 hover:text-blue-700"
                        >
                            Add Service
                        </button>
                    </div>
                ) : (
                    <ul className="mt-2 list-disc list-inside text-gray-600">
                        {vendor.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                )}
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

export default VendorProfile;
