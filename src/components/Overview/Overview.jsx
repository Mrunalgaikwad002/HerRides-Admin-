import React from 'react';
import StatCard from '../shared/StatCard';
import RecentActivity from './components/RecentActivity';
import AlertsAndIssues from './components/AlertsAndIssues';
import PlatformHealth from './components/PlatformHealth';
import { FiUsers, FiHardDrive, FiDollarSign, FiTrendingUp } from 'react-icons/fi';

export const Overview = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Overview</h1>
        {/* You can add dropdown/button here if needed */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        <StatCard 
          icon={<FiUsers className="h-6 w-6 text-blue-500" />}
          title="Total Users"
          value="1,247"
          percentage="+12%"
          from="from last month"
          iconBgColor="bg-blue-100"
        />
        <StatCard 
          icon={<FiHardDrive className="h-6 w-6 text-green-500" />}
          title="Active Drivers"
          value="342"
          percentage="+8%"
          from="from last month"
          iconBgColor="bg-green-100"
        />
        <StatCard 
          icon={<FiDollarSign className="h-6 w-6 text-yellow-500" />}
          title="Monthly Revenue"
          value="$45,231"
          percentage="+23%"
          from="from last month"
          iconBgColor="bg-yellow-100"
        />
        <StatCard 
          icon={<FiTrendingUp className="h-6 w-6 text-indigo-500" />}
          title="Completed Rides"
          value="2,847"
          percentage="+15%"
          from="from last month"
          iconBgColor="bg-indigo-100"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <AlertsAndIssues />
      </div>

      <PlatformHealth />
    </div>
  );
}; 