import React from 'react';

const payouts = [
    { id: 'PAYOUT-001', date: '2024-05-15', driver: 'Priya Sharma', amount: '₹5,500', method: 'Bank Transfer', status: 'Completed' },
    { id: 'PAYOUT-002', date: '2024-05-15', driver: 'Anita Verma', amount: '₹4,200', method: 'Bank Transfer', status: 'Completed' },
    { id: 'PAYOUT-003', date: '2024-05-10', driver: 'Sunita Patel', amount: '₹6,100', method: 'Bank Transfer', status: 'Completed' },
    { id: 'PAYOUT-004', date: '2024-05-08', driver: 'Meera Singh', amount: '₹3,500', method: 'Bank Transfer', status: 'Failed' },
    { id: 'PAYOUT-005', date: '2024-05-05', driver: 'Alia Khan', amount: '₹2,800', method: 'Bank Transfer', status: 'Processing' },
];

const StatusBadge = ({ status }) => {
    const statusClasses = {
        Completed: 'bg-green-100 text-green-800',
        Processing: 'bg-yellow-100 text-yellow-800',
        Failed: 'bg-red-100 text-red-800',
    };
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses[status]}`}>{status}</span>;
};


const PayoutHistoryTable = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Payout History</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="text-left text-gray-500">
                        <tr>
                            <th className="p-2">Transaction ID</th>
                            <th className="p-2">Date</th>
                            <th className="p-2">Driver</th>
                            <th className="p-2">Amount</th>
                            <th className="p-2">Method</th>
                            <th className="p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payouts.map(payout => (
                            <tr key={payout.id} className="border-b last:border-0">
                                <td className="p-2 font-medium text-gray-800">{payout.id}</td>
                                <td className="p-2 text-gray-600">{payout.date}</td>
                                <td className="p-2 text-gray-800 font-medium">{payout.driver}</td>
                                <td className="p-2 text-gray-800 font-semibold">{payout.amount}</td>
                                <td className="p-2 text-gray-600">{payout.method}</td>
                                <td className="p-2"><StatusBadge status={payout.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PayoutHistoryTable; 