import React from 'react';
import { FiCheckCircle, FiSettings, FiDownload, FiEye, FiZap, FiDollarSign } from 'react-icons/fi';

const StatRow = ({ title, value, valueColor }) => (
    <div className="flex justify-between items-center py-3">
        <p className="text-sm text-gray-600">{title}</p>
        <p className={`text-sm font-semibold ${valueColor}`}>{value}</p>
    </div>
);

const ActionButton = ({ icon, text }) => (
    <button className="flex items-center w-full text-left p-3 border rounded-lg hover:bg-gray-50">
        {icon}
        <span className="ml-3 text-sm font-medium text-gray-700">{text}</span>
    </button>
);

const RazorpayIntegration = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Status */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold">Razorpay Status</h2>
                    <p className="text-sm text-gray-500 mt-1">Integration health and statistics</p>
                    <div className="mt-4 divide-y divide-gray-100">
                        <div className="flex justify-between items-center py-3">
                            <p className="text-sm text-gray-600">Connection Status</p>
                            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                                <FiCheckCircle className="mr-1.5 h-3 w-3" />
                                Connected
                            </span>
                        </div>
                        <StatRow title="Today's Transactions" value="₹45,680" valueColor="text-gray-800" />
                        <StatRow title="Success Rate" value="98.5%" valueColor="text-green-600" />
                        <StatRow title="Failed Transactions" value="3" valueColor="text-red-600" />
                    </div>
                </div>

                {/* Right: Quick Actions */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold">Quick Actions</h2>
                    <p className="text-sm text-gray-500 mt-1">Manage Razorpay integration</p>
                    <div className="mt-4 space-y-3">
                        <ActionButton icon={<FiSettings className="h-5 w-5 text-gray-500"/>} text="Configure Settings" />
                        <ActionButton icon={<FiDownload className="h-5 w-5 text-gray-500"/>} text="Download Reports" />
                        <ActionButton icon={<FiEye className="h-5 w-5 text-gray-500"/>} text="View Webhook Logs" />
                        <ActionButton icon={<FiZap className="h-5 w-5 text-gray-500"/>} text="Test Connection" />
                    </div>
                </div>
            </div>

            {/* Bottom: Recent Transactions */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold">Recent Razorpay Transactions</h2>
                <p className="text-sm text-gray-500 mt-1">Latest payment gateway transactions</p>
                <div className="mt-12 flex flex-col items-center justify-center text-center text-gray-500">
                    <FiDollarSign className="h-12 w-12 text-gray-300" />
                    <p className="mt-4 font-semibold">Razorpay transaction logs will appear here</p>
                    <p className="text-xs">Real-time sync with payment gateway</p>
                </div>
            </div>
        </div>
    );
};

export default RazorpayIntegration; 