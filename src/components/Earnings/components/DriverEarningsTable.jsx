import React from 'react';
import { FiStar, FiMoreHorizontal, FiSearch } from 'react-icons/fi';

const earningsData = [
    { id: 'DR001', name: 'Priya Sharma', contact: '+91 98765 43210', total: '₹45,680', weekly: '₹8,450', daily: '₹1,200', rides: 156, rating: 4.8, status: 'Active' },
    { id: 'DR002', name: 'Anita Verma', contact: '+91 87654 32109', total: '₹38,920', weekly: '₹7,200', daily: '₹980', rides: 134, rating: 4.9, status: 'Active' },
    { id: 'DR003', name: 'Sunita Patel', contact: '+91 76543 21098', total: '₹52,340', weekly: '₹9,100', daily: '₹1,450', rides: 189, rating: 4.7, status: 'Inactive' },
    { id: 'DR004', name: 'Meera Singh', contact: '+91 65432 10987', total: '₹41,560', weekly: '₹7,800', daily: '₹1,100', rides: 145, rating: 4.6, status: 'Active' },
];

const StatusBadge = ({ status }) => {
    let statusClasses = '';
    switch (status) {
        case 'Active': statusClasses = 'bg-gray-800 text-white'; break;
        case 'Inactive': statusClasses = 'bg-gray-200 text-gray-700'; break;
        default: statusClasses = 'bg-gray-200 text-gray-700';
    }
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses}`}>{status}</span>;
};

const DriverEarningsTable = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">Driver Earnings Overview</h3>
                    <p className="text-sm text-gray-500 mt-1">Monitor individual driver performance and earnings</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search drivers..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none w-64" />
                    </div>
                    <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">Filter</button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead>
                        <tr className="text-left text-gray-500 font-medium border-b">
                            <th className="py-3 px-4">DRIVER</th>
                            <th className="py-3 px-4">CONTACT</th>
                            <th className="py-3 px-4">TOTAL EARNINGS</th>
                            <th className="py-3 px-4">WEEKLY</th>
                            <th className="py-3 px-4">DAILY</th>
                            <th className="py-3 px-4">RIDES</th>
                            <th className="py-3 px-4">RATING</th>
                            <th className="py-3 px-4">STATUS</th>
                            <th className="py-3 px-4">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {earningsData.map(driver => (
                            <tr key={driver.id} className="border-b last:border-0 hover:bg-gray-50">
                                <td className="py-4 px-4">
                                    <p className="font-semibold text-gray-800">{driver.name}</p>
                                    <p className="text-xs text-gray-500">{driver.id}</p>
                                </td>
                                <td className="py-4 px-4 text-gray-700">{driver.contact}</td>
                                <td className="py-4 px-4 font-bold text-gray-800">{driver.total}</td>
                                <td className="py-4 px-4 text-gray-700">{driver.weekly}</td>
                                <td className="py-4 px-4 text-gray-700">{driver.daily}</td>
                                <td className="py-4 px-4 text-gray-700">{driver.rides}</td>
                                <td className="py-4 px-4">
                                    <div className="flex items-center text-gray-700">
                                        <FiStar className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                                        {driver.rating}
                                    </div>
                                </td>
                                <td className="py-4 px-4"><StatusBadge status={driver.status} /></td>
                                <td className="py-4 px-4 text-gray-500">
                                    <button className="hover:bg-gray-200 p-2 rounded-full"><FiMoreHorizontal /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DriverEarningsTable; 