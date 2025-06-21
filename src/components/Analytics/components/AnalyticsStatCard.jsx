import React from 'react';

const AnalyticsStatCard = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex-1">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{title}</p>
        <div className="text-gray-400">{icon}</div>
      </div>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <p className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</p>
    </div>
  );
};

export default AnalyticsStatCard; 