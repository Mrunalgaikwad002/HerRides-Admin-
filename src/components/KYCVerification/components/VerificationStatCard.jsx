import React from 'react';

const VerificationStatCard = ({ icon, title, value, change, timeframe }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
          <div className="flex items-center mt-2">
            <p className="text-sm text-gray-500">
                {change && <span className="text-green-500 font-semibold">{change}</span>}
                {timeframe}
            </p>
          </div>
        </div>
        <div className="p-2 rounded-md">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default VerificationStatCard; 