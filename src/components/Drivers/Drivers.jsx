import React from 'react';
import StatCard from '../shared/StatCard';
import DriversTable from './components/DriversTable';
import { FiUsers, FiUserCheck, FiUserX, FiStar } from 'react-icons/fi';

export const Drivers = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800">Driver Management</h1>
                <p className="text-base text-gray-500 mt-2">Monitor, manage, and track all your drivers.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard 
                    icon={<FiUsers />}
                    title="Total Drivers"
                    value="1,250"
                    change="+5.4%"
                    changeType="increase"
                    iconBgClass="bg-blue-100"
                    iconColorClass="text-blue-500"
                />
                <StatCard 
                    icon={<FiUserCheck />}
                    title="Active Drivers"
                    value="980"
                    change="+2.1%"
                    changeType="increase"
                    iconBgClass="bg-green-100"
                    iconColorClass="text-green-500"
                />
                <StatCard 
                    icon={<FiUserX />}
                    title="Inactive Drivers"
                    value="270"
                    change="-1.5%"
                    changeType="decrease"
                    iconBgClass="bg-red-100"
                    iconColorClass="text-red-500"
                />
                <StatCard 
                    icon={<FiStar />}
                    title="Avg. Rating"
                    value="4.7"
                    change="+0.2"
                    changeType="increase"
                    iconBgClass="bg-yellow-100"
                    iconColorClass="text-yellow-500"
                />
            </div>
            
            <DriversTable />
        </div>
    );
};