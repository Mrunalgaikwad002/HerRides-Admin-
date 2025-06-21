import React from 'react';
import { FiXCircle } from 'react-icons/fi';

const drivers = [
    {
        name: 'Kavita Malhotra',
        email: 'kavita.malhotra@email.com',
        rejectionDate: '1/12/2024',
        reason: 'Invalid ID proof',
    },
    {
        name: 'Sunita Rao',
        email: 'sunita.rao@email.com',
        rejectionDate: '1/11/2024',
        reason: 'Photo mismatch',
    },
];

const RejectedApplicationsTable = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Rejected Applications</h2>
            <p className="text-sm text-gray-500 mt-1">List of driver applications that have been rejected.</p>
            
            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rejection Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {drivers.map((driver) => (
                            <tr key={driver.email}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full"></div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{driver.name}</div>
                                            <div className="text-sm text-gray-500">{driver.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.rejectionDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.reason}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                        <FiXCircle className="mr-1.5 h-3 w-3" />
                                        Rejected
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RejectedApplicationsTable; 