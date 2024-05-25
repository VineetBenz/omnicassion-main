"use client";
import React from 'react';

const CustomerDashboard = () => {
    // Example data for demonstration
    const customer = {
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        phone: '+1 123 456 789',
        recentOrders: [
            { id: 1, product: 'Product A', date: '2024-05-01', amount: '$50' },
            { id: 2, product: 'Product B', date: '2024-04-15', amount: '$100' },
            { id: 3, product: 'Product C', date: '2024-03-20', amount: '$200' },
        ],
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-screen-xl mx-auto mt-10">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Customer Dashboard</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4 mb-6">
                    <img
                        className="w-52 h-32 rounded-full"
                        src="/images/user-removebg-preview.png" // Replace with your customer's avatar image path
                        alt="Customer Avatar"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">{customer.name}</h2>
                        <p className="text-gray-600">{customer.email}</p>
                        <p className="text-gray-600">{customer.phone}</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">Order ID</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">Product</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">Date</th>
                                    <th className="py-2 px-4 border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customer.recentOrders.map((order) => (
                                    <tr key={order.id}>
                                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600 text-sm">{order.id}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600 text-sm">{order.product}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600 text-sm">{order.date}</td>
                                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600 text-sm">{order.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;
