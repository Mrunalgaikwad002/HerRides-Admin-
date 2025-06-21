import React from 'react';
import { FiSend } from 'react-icons/fi';

const drivers = [
    {
        name: 'Riya Gupta',
        email: 'riya.gupta@email.com',
        document: 'Driving License',
        expiryDate: '2/10/2024',
    },
    {
        name: 'Sonia Singh',
        email: 'sonia.singh@email.com',
        document: 'Vehicle Registration',
        expiryDate: '2/25/2024',
    },
];

const ExpiringDocumentsTable = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Expiring Documents</h2>
            <p className="text-sm text-gray-500 mt-1">Drivers with documents expiring soon. Notify them to update.</p>
            
            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.document}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 font-medium">{driver.expiryDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="inline-flex items-center px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                                        <FiSend className="mr-2 h-4 w-4" />
                                        Notify
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

export default ExpiringDocumentsTable; 