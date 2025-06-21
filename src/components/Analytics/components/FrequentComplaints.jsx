import React from 'react';
import { FiMessageSquare } from 'react-icons/fi';

const complaints = [
    { category: 'Driver Behavior', count: 156 },
    { category: 'Vehicle Condition', count: 89 },
    { category: 'Route Issues', count: 67 },
    { category: 'Payment Problems', count: 56 },
    { category: 'App Issues', count: 45 },
    { category: 'Others', count: 32 },
];

const ComplaintProgressBar = ({ category, count, maxCount }) => (
    <div className="py-3">
        <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-800">{category}</p>
            <p className="text-sm font-semibold text-gray-600">{count}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-gray-800 h-1.5 rounded-full" style={{ width: `${(count / maxCount) * 100}%` }}></div>
        </div>
    </div>
);

const FrequentComplaints = () => {
    const maxCount = Math.max(...complaints.map(c => c.count));

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
                <FiMessageSquare className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-bold ml-2">Frequent Complaints</h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">Complaint categories in the last 30 days</p>
            <div className="mt-4">
                {complaints.map(complaint => (
                    <ComplaintProgressBar key={complaint.category} {...complaint} maxCount={maxCount} />
                ))}
            </div>
        </div>
    );
};

export default FrequentComplaints; 