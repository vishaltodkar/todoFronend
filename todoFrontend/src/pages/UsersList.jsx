import React, { useState, useEffect } from 'react';
import { getUsers } from '../services/authService';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const mockUsers = [
            { _id: '1', name: 'John Doe', email: 'john.doe@example.com' },
            { _id: '2', name: 'Jane Smith', email: 'jane.smith@example.com' },
            { _id: '3', name: 'Alice Johnson', email: 'alice.johnson@example.com' },
        ];

        setUsers(mockUsers); 
    }, []);
    

    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
            <h1 className="text-4xl font-bold text-white mb-8 text-center">Users List</h1>

            {users?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {users?.map((user) => (
                        <div
                            key={user._id}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-white mb-2">
                                {user.name || "Anonymous User"}
                            </h2>
                            <p className="text-gray-400 mb-4">{user.email}</p>
                            <p className="text-sm text-gray-500">User ID: {user._id}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400">No users found.</p>
            )}
        </div>
    );
};

export default UsersList;
