import React, { useState } from 'react';
import { FiPlus, FiEdit, FiTrash2, FiUsers, FiShield, FiMoreVertical } from 'react-icons/fi';

const mockRoles = [
  {
    id: 1,
    name: 'Super Admin',
    description: 'Has access to all features and settings.',
    userCount: 2,
  },
  {
    id: 2,
    name: 'Finance Manager',
    description: 'Manages earnings, payouts, and transactions.',
    userCount: 3,
  },
  {
    id: 3,
    name: 'Support Agent',
    description: 'Handles user feedback and resolves issues.',
    userCount: 5,
  },
  {
    id: 4,
    name: 'KYC Verifier',
    description: 'Reviews and processes driver KYC documents.',
    userCount: 4,
  },
];

export const AdminRoles = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <header className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Admin Roles</h1>
                    <p className="text-sm text-gray-500 mt-1">Manage roles and permissions for your admin team.</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center font-semibold shadow-sm">
                    <FiPlus className="mr-2" />
                    Create New Role
                </button>
            </header>

            <div className="bg-white p-4 rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Users Assigned
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {mockRoles.map((role) => (
                            <tr key={role.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="p-2 bg-blue-100 rounded-full mr-4">
                                            <FiShield className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div className="text-sm font-semibold text-gray-900">{role.name}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-pre-wrap max-w-sm text-sm text-gray-600">
                                    {role.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <FiUsers className="mr-2"/>
                                        {role.userCount} Users
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button className="text-gray-400 hover:text-gray-600 p-1">
                                        <FiEdit className="h-5 w-5" />
                                    </button>
                                    <button className="text-gray-400 hover:text-red-600 p-1 ml-2">
                                        <FiTrash2 className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// export default AdminRoles; 