import React from 'react';
import { FiCheckCircle, FiClock, FiMoreHorizontal, FiChevronDown } from 'react-icons/fi';

const transactions = [
    { id: 'TXN001', type: 'Commission', amount: '₹450', driver: 'Priya Sharma', dateTime: '2024-01-15 14:30', method: 'Razorpay', status: 'Completed' },
    { id: 'TXN002', type: 'Payout', amount: '₹8,450', driver: 'Anita Verma', dateTime: '2024-01-15 10:15', method: 'UPI', status: 'Processing' },
    { id: 'TXN003', type: 'Commission', amount: '₹320', driver: 'Sunita Patel', dateTime: '2024-01-14 16:45', method: 'Razorpay', status: 'Completed' },
    { id: 'TXN004', type: 'Wallet Credit', amount: '₹1,000', driver: 'Meera Singh', dateTime: '2024-01-14 12:20', method: 'Manual', status: 'Completed' },
];

const TypeBadge = ({ type }) => {
    return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">{type}</span>;
};

const StatusBadge = ({ status }) => {
    const isCompleted = status === 'Completed';
    const badgeClasses = isCompleted ? 'bg-gray-800 text-white' : 'bg-yellow-100 text-yellow-800';
    const icon = isCompleted ? <FiCheckCircle className="mr-1.5" /> : <FiClock className="mr-1.5" />;

    return <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${badgeClasses}`}>{icon}{status}</span>;
};

const TransactionLogsTable = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-bold">Transaction Logs</h2>
                    <p className="text-sm text-gray-500 mt-1">All platform transactions and payment activities</p>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="flex items-center justify-between w-40 px-4 py-2 border rounded-lg text-sm bg-white">
                        <span>Transaction...</span>
                        <FiChevronDown />
                    </button>
                    <button className="flex items-center justify-between w-32 px-4 py-2 border rounded-lg text-sm bg-white">
                        <span>Status</span>
                        <FiChevronDown />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Transaction ID</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Payment Method</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(txn => (
                            <tr key={txn.id} className="border-b last:border-0">
                                <td className="py-4 px-4 text-sm font-medium text-gray-800 whitespace-nowrap">{txn.id}</td>
                                <td className="py-4 px-4 whitespace-nowrap"><TypeBadge type={txn.type} /></td>
                                <td className="py-4 px-4 text-sm font-semibold text-gray-800 whitespace-nowrap">{txn.amount}</td>
                                <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">{txn.driver}</td>
                                <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">
                                    <div>{txn.dateTime.split(' ')[0]}</div>
                                    <div className="text-xs text-gray-500">{txn.dateTime.split(' ')[1]}</div>
                                </td>
                                <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">{txn.method}</td>
                                <td className="py-4 px-4 whitespace-nowrap"><StatusBadge status={txn.status} /></td>
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

export default TransactionLogsTable; 