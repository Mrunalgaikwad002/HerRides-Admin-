import React from 'react';
import { FiMoreHorizontal, FiSearch } from 'react-icons/fi';

const users = [
    { id: 'USR001', name: 'Aanya Sharma', joinDate: '2023-01-15', totalRides: 120, totalSpent: '₹15,200', status: 'Active' },
    { id: 'USR002', name: 'Vidya Patel', joinDate: '2023-02-20', totalRides: 85, totalSpent: '₹10,500', status: 'Active' },
    { id: 'USR003', name: 'Aditi Singh', joinDate: '2023-03-10', totalRides: 210, totalSpent: '₹25,800', status: 'Inactive' },
    { id: 'USR004', name: 'Anjali Kumar', joinDate: '2023-04-05', totalRides: 50, totalSpent: '₹6,200', status: 'Active' },
    { id: 'USR005', name: 'Saanvi Gupta', joinDate: '2023-05-12', totalRides: 300, totalSpent: '₹35,000', status: 'Blocked' },
    { id: 'USR006', name: 'Riya Reddy', joinDate: '2023-06-18', totalRides: 75, totalSpent: '₹9,800', status: 'Active' },
];

const StatusBadge = ({ status }) => {
    const baseClasses = 'px-3 py-1 text-xs font-medium rounded-full';
    const statusClasses = status === 'Active' 
        ? 'bg-green-100 text-green-800' 
        : 'bg-gray-100 text-gray-800';
    return <span className={`${baseClasses} ${statusClasses}`}>{status}</span>;
};

const UsersTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2 className="text-xl font-bold">User Management</h2>
                <p className="text-sm text-gray-500 mt-1">View and manage all platform users.</p>
            </div>
            <div className="relative">
                <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search users..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none w-64" />
            </div>
        </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Join Date</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Total Rides</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b last:border-0">
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">{user.joinDate}</td>
                <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">{user.totalRides}</td>
                <td className="py-4 px-4 whitespace-nowrap"><StatusBadge status={user.status} /></td>
                <td className="py-4 px-4 text-gray-500 whitespace-nowrap">
                  <button className="hover:bg-gray-100 p-2 rounded-full"><FiMoreHorizontal /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable; 