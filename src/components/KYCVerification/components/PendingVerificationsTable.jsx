import React from 'react';
import { FiFile, FiPaperclip, FiCreditCard, FiCamera, FiClock } from 'react-icons/fi';

const drivers = [
    {
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        date: '1/15/2024',
    },
    {
        name: 'Anita Patel',
        email: 'anita.patel@email.com',
        date: '1/14/2024',
    },
    {
        name: 'Meera Reddy',
        email: 'meera.reddy@email.com',
        date: '1/13/2024',
    },
];

const PendingVerificationsTable = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Pending Driver Verifications</h2>
            <p className="text-sm text-gray-500 mt-1">Review and verify driver documents. Click on documents to view details.</p>
            
            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {drivers.map((driver) => (
                            <tr key={driver.email}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{driver.name}</div>
                                            <div className="text-sm text-gray-500">{driver.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-2">
                                        <button className="p-1.5 text-gray-500 rounded-md hover:bg-gray-100"><FiPaperclip /></button>
                                        <button className="p-1.5 text-gray-500 rounded-md hover:bg-gray-100"><FiFile /></button>
                                        <button className="p-1.5 text-gray-500 rounded-md hover:bg-gray-100"><FiCreditCard /></button>
                                        <button className="p-1.5 text-gray-500 rounded-md hover:bg-gray-100"><FiCamera /></button>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        <FiClock className="mr-1.5 h-3 w-3" />
                                        Pending
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                    <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">Verify</button>
                                    <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingVerificationsTable; 