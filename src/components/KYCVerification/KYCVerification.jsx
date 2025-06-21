import React, { useState } from 'react';
import VerificationStatCard from './components/VerificationStatCard';
import PendingVerificationsTable from './components/PendingVerificationsTable';
import ExpiringDocumentsTable from './components/ExpiringDocumentsTable';
import { VerifiedDriversTable } from './components/VerifiedDriversTable';
import RejectedApplicationsTable from './components/RejectedApplicationsTable';
import { FiClock, FiCheckCircle, FiAlertTriangle, FiXCircle, FiSearch, FiBell, FiSettings } from 'react-icons/fi';

export const KYCVerification = () => {
    const [activeTab, setActiveTab] = useState('Pending');

    const tabs = ['Pending Verification', 'Expiring Documents', 'Verified Drivers', 'Rejected Applications'];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">KYC & Verification Management</h1>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Search drivers, documents..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
                </div>
                <button className="relative p-2 rounded-full hover:bg-gray-200">
                    <FiBell />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <FiSettings />
                </button>
            </div>
        </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <VerificationStatCard 
          icon={<FiClock className="h-6 w-6 text-gray-500" />}
          title="Pending Verifications"
          value="12"
          change="+2 "
          timeframe="from yesterday"
        />
        <VerificationStatCard 
          icon={<FiCheckCircle className="h-6 w-6 text-green-500" />}
          title="Verified Drivers"
          value="248"
          change="+12 "
          timeframe="this week"
        />
        <VerificationStatCard 
          icon={<FiAlertTriangle className="h-6 w-6 text-orange-500" />}
          title="Expiring Documents"
          value="5"
          timeframe="Next 60 days"
        />
        <VerificationStatCard 
          icon={<FiXCircle className="h-6 w-6 text-red-500" />}
          title="Rejected Applications"
          value="8"
          timeframe="This month"
        />
      </div>

        {/* Alert Banner */}
        <div className="mt-6 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-md flex items-center">
            <FiAlertTriangle className="h-5 w-5 mr-3" />
            <p><span className="font-bold">2 documents</span> are expiring within the next 60 days. Review and notify drivers to update their documents.</p>
        </div>

        {/* Tabs */}
        <div className="mt-6">
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.split(' ')[0])}
                            className={`${
                                activeTab === tab.split(' ')[0]
                                ? 'border-pink-500 text-pink-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>
        </div>

        {/* Table will go here */}
        <div className="mt-6">
            {activeTab === 'Pending' && <PendingVerificationsTable />}
            {activeTab === 'Expiring' && <ExpiringDocumentsTable />}
            {activeTab === 'Verified' && <VerifiedDriversTable />}
            {activeTab === 'Rejected' && <RejectedApplicationsTable />}
        </div>
    </div>
  );
};

// export default KYCVerification;