import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-900">
            <Sidebar />

            <div className="flex-1 p-8 text-gray-300">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-white">Dashboard</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                        Logout
                    </button>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-400">Users</h2>
                        <p className="text-3xl font-bold text-white">1,245</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-400">Task Count</h2>
                        <p className="text-3xl font-bold text-white">4226</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold text-gray-400">active users</h2>
                        <p className="text-3xl font-bold text-white">200</p>
                    </div>
                </div>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <ul className="space-y-4">
                            <li className="flex justify-between">
                                <span>User John Doe signed up</span>
                                <span className="text-sm text-gray-400">2 hours ago</span>
                            </li>
                            <li className="flex justify-between">
                                <span>New Users count increased by 2x</span>
                                <span className="text-sm text-gray-400">Yesterday</span>
                            </li>
                            <li className="flex justify-between">
                                <span>active users 50%</span>
                                <span className="text-sm text-gray-400">Last week</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
