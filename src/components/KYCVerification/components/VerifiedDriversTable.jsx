import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const drivers = [
    {
        name: 'Anjali Verma',
        email: 'anjali.verma@email.com',
        verificationDate: '1/10/2024',
    },
    {
        name: 'Pooja Desai',
        email: 'pooja.desai@email.com',
        verificationDate: '1/9/2024',
    },
];

export const VerifiedDriversTable = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Verified Drivers</h2>
            <p className="text-sm text-gray-500 mt-1">List of drivers with successfully verified documents.</p>
            
            <div className="mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Driver</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verification Date</th>
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.verificationDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        <FiCheckCircle className="mr-1.5 h-3 w-3" />
                                        Verified
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