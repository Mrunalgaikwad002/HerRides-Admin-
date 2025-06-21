import React from 'react';
import AnalyticsStatCard from '../Analytics/components/AnalyticsStatCard'; // Reusing stat card
import UsersTable from './components/UsersTable';
import { FiUsers, FiUserPlus, FiActivity, FiUserCheck } from 'react-icons/fi';

export const Users = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
            </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnalyticsStatCard title="Total Users" value="1,247" change="+12% from last month" icon={<FiUsers />} />
            <AnalyticsStatCard title="Active Today" value="856" change="Online in last 24 hours" icon={<FiUserCheck />} />
            <AnalyticsStatCard title="New Users" value="98" change="Joined this month" icon={<FiUserPlus />} />
            <AnalyticsStatCard title="Avg Rides / User" value="18" change="All time average" icon={<FiActivity />} />
        </div>

        {/* Table */}
        <div className="mt-8">
            <UsersTable />
        </div>
    </div>
  );
};

// export default Users; 