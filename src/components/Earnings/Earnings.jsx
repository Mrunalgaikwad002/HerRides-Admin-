import React, { useState } from 'react';
import { FiDownload, FiPlus, FiBriefcase, FiRepeat, FiTrendingUp, FiUsers, FiDollarSign } from 'react-icons/fi';
import AnalyticsStatCard from '../Analytics/components/AnalyticsStatCard'; // Reusing the stat card from Analytics
import DriverEarningsTable from './components/DriverEarningsTable';
import TransactionLogsTable from './components/TransactionLogsTable';
import RazorpayIntegration from './components/RazorpayIntegration';
import PayoutHistoryTable from './components/PayoutHistoryTable';
import ManualPayoutModal from './components/ManualPayoutModal';
import WalletManagementModal from './components/WalletManagementModal';

export const Earnings = () => {
    const [activeTab, setActiveTab] = useState('Driver Earnings');
    const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    const tabs = ['Driver Earnings', 'Payout History', 'Transaction Logs', 'Razorpay Integration'];

    const renderContent = () => {
        switch (activeTab) {
            case 'Driver Earnings':
                return <DriverEarningsTable />;
            case 'Payout History':
                return <PayoutHistoryTable />;
            case 'Transaction Logs':
                return <TransactionLogsTable />;
            case 'Razorpay Integration':
                return <RazorpayIntegration />;
            default:
                return null;
        }
    };

    return (
        <>
            <div>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Payments & Earnings</h1>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm bg-white">
                            <FiDownload className="h-4 w-4" />
                            <span>Export</span>
                        </button>
                        <button onClick={() => setIsPayoutModalOpen(true)} className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm bg-gray-800 text-white">
                            <FiPlus className="h-4 w-4" />
                            <span>Manual Payout</span>
                        </button>
                        <button onClick={() => setIsWalletModalOpen(true)} className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm bg-white">
                            <FiBriefcase className="h-4 w-4" />
                            <span>Manage Wallet</span>
                        </button>
                    </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnalyticsStatCard title="Total Revenue" value="₹2,45,680" change="+12.5% from last month" icon={<FiDollarSign />} />
                    <AnalyticsStatCard title="Total Rides" value="1,234" change="Active rides this month" icon={<FiRepeat />} />
                    <AnalyticsStatCard title="Avg Commission" value="15%" change="Platform commission rate" icon={<FiTrendingUp />} />
                    <AnalyticsStatCard title="Active Drivers" value="156" change="Drivers earning today" icon={<FiUsers />} />
                </div>

                {/* Tabs */}
                <div className="mt-6">
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`${activeTab === tab ? 'border-pink-500 text-pink-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Content */}
                <div className="mt-6">
                    {renderContent()}
                </div>
            </div>
            
            {isPayoutModalOpen && <ManualPayoutModal onClose={() => setIsPayoutModalOpen(false)} />}
            {isWalletModalOpen && <WalletManagementModal onClose={() => setIsWalletModalOpen(false)} />}
        </>
    );
};
