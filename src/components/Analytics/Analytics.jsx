import React, { useState } from 'react';
import { FiFilter, FiTrendingUp, FiUsers, FiDollarSign, FiStar, FiChevronDown } from 'react-icons/fi';
import AnalyticsStatCard from './components/AnalyticsStatCard';
import { MostActiveCities } from './components/MostActiveCities';
import CityPerformanceChart from './components/CityPerformanceChart';
import DriverPerformanceReport from './components/DriverPerformanceReport';
import FrequentComplaints from './components/FrequentComplaints';
import ComplaintDistributionChart from './components/ComplaintDistributionChart';
import { PeakHoursChart } from './components/PeakHoursChart';
import CancellationTrends from './components/CancellationTrends';

export const Analytics = () => {
  const [activeTab, setActiveTab] = useState('Most Active Cities');
  const tabs = ['Most Active Cities', 'Peak Hours', 'Complaints', 'Driver Performance', 'Cancellations'];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Analytics & Reports</h1>
            <p className="text-sm text-gray-500">Monitor platform performance and insights</p>
        </div>
        <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm">
                <span>Last 7 days</span>
                <FiChevronDown />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg text-sm">
                <FiFilter className="h-4 w-4" />
                <span>Filter</span>
            </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsStatCard 
          title="Total Rides"
          value="12,847"
          change="+12.5% from last week"
          icon={<FiTrendingUp />}
        />
        <AnalyticsStatCard 
          title="Active Drivers"
          value="1,234"
          change="+8.2% from last week"
          icon={<FiUsers />}
        />
        <AnalyticsStatCard 
          title="Total Earnings"
          value="₹8,45,670"
          change="+15.3% from last week"
          icon={<FiDollarSign />}
        />
        <AnalyticsStatCard 
          title="Avg Rating"
          value="4.7"
          change="+0.2 from last week"
          icon={<FiStar />}
        />
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`${
                            activeTab === tab
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

      <div className="mt-6">
        {activeTab === 'Most Active Cities' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1">
                    <MostActiveCities />
                </div>
                <div className="lg:col-span-2">
                    <CityPerformanceChart />
                </div>
            </div>
        )}
        {activeTab === 'Driver Performance' && <DriverPerformanceReport />}
        {activeTab === 'Complaints' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FrequentComplaints />
                <ComplaintDistributionChart />
            </div>
        )}
        {activeTab === 'Peak Hours' && <PeakHoursChart />}
        {activeTab === 'Cancellations' && <CancellationTrends />}
      </div>

    </div>
  );
};

// export default Analytics;