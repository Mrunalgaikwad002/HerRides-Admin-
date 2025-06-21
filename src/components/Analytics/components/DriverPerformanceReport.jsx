import React from 'react';
import { FiStar, FiTrendingUp } from 'react-icons/fi';

const drivers = [
    { name: 'Aanya Sharma', rides: 120, acceptance: '98%', rating: 4.9, earnings: '₹15,200' },
    { name: 'Vidya Singh', rides: 110, acceptance: '95%', rating: 4.8, earnings: '₹14,500' },
    { name: 'Aditi Patel', rides: 105, acceptance: '99%', rating: 4.9, earnings: '₹13,800' },
    { name: 'Anjali Kumar', rides: 98, acceptance: '92%', rating: 4.7, earnings: '₹12,100' },
    { name: 'Riya Gupta', rides: 95, acceptance: '97%', rating: 4.8, earnings: '₹11,500' },
];

const StatusBadge = ({ status }) => {
    const baseClasses = 'px-3 py-1 text-xs font-medium rounded-full';
    const statusClasses = status === 'Active' 
        ? 'bg-gray-800 text-white' 
        : 'bg-gray-200 text-gray-700';
    return <span className={`${baseClasses} ${statusClasses}`}>{status}</span>;
};

const DriverPerformanceReport = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
                <FiTrendingUp className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-bold ml-2">Driver Performance Report</h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">Top performing drivers in the last 30 days</p>

            <div className="mt-6">
                <div className="grid grid-cols-5 gap-4 text-left text-xs font-medium text-gray-500 uppercase py-2 border-b">
                    <div>Driver Name</div>
                    <div>Rating</div>
                    <div>Total Rides</div>
                    <div>Earnings</div>
                    <div>Status</div>
                </div>
                <div className="divide-y divide-gray-100">
                    {drivers.map((driver) => (
                        <div key={driver.name} className="grid grid-cols-5 gap-4 items-center py-4">
                            <div className="text-sm font-medium text-gray-900">{driver.name}</div>
                            <div className="flex items-center text-sm text-gray-700">
                                <FiStar className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                                {driver.rating}
                            </div>
                            <div className="text-sm text-gray-700">{driver.rides}</div>
                            <div className="text-sm text-gray-700">{driver.earnings}</div>
                            <div><StatusBadge status={driver.status} /></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DriverPerformanceReport; 