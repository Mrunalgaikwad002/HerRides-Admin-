import React from 'react';
import { FiXCircle, FiArrowUp, FiArrowDown } from 'react-icons/fi';

const reasons = [
    { title: 'Driver Cancelled', count: '89 cancellations', trend: '+12%', type: 'increase' },
    { title: 'Passenger Cancelled', count: '67 cancellations', trend: '5%', type: 'decrease' },
    { title: 'No Driver Available', count: '45 cancellations', trend: '+8%', type: 'increase' },
    { title: 'Technical Issues', count: '23 cancellations', trend: '15%', type: 'decrease' },
];

const TrendBadge = ({ type, value }) => {
    const isIncrease = type === 'increase';
    const badgeClasses = isIncrease ? 'bg-red-100 text-red-600' : 'bg-gray-800 text-white';
    const icon = isIncrease ? <FiArrowUp className="h-3 w-3" /> : <FiArrowDown className="h-3 w-3" />;

    return (
        <div className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs font-semibold ${badgeClasses}`}>
            {icon}
            <span>{value}</span>
        </div>
    );
};

const CancellationTrends = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
                <FiXCircle className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-bold ml-2">Cancellation Trends</h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">Ride cancellation analysis for the last 30 days</p>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: List of Reasons */}
                <div className="lg:col-span-2 space-y-4">
                    {reasons.map(reason => (
                        <div key={reason.title} className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                                <p className="font-semibold text-gray-800">{reason.title}</p>
                                <p className="text-sm text-gray-500">{reason.count}</p>
                            </div>
                            <TrendBadge type={reason.type} value={reason.trend} />
                        </div>
                    ))}
                </div>

                {/* Right Side: Total */}
                <div className="flex flex-col items-center justify-center text-center p-4 border-l">
                    <p className="text-5xl font-bold text-gray-800">224</p>
                    <p className="text-sm text-gray-500 mt-1">Total Cancellations</p>
                    <div className="flex items-center text-red-500 text-sm font-semibold mt-2">
                        <FiArrowUp className="h-4 w-4 mr-1" />
                        <span>8.5% from last month</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancellationTrends; 