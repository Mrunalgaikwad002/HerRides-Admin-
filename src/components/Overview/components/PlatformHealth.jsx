import React from 'react';

const HealthMetric = ({ title, value, percentage }) => (
    <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-sm font-semibold text-gray-800">{value}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
);

const PlatformHealth = () => {
    const metrics = [
        { title: 'Driver Utilization', value: '78%', percentage: 78 },
        { title: 'Customer Satisfaction', value: '4.6/5', percentage: 92 },
        { title: 'System Uptime', value: '99.8%', percentage: 99.8 },
    ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold">Platform Health</h2>
      <p className="text-sm text-gray-500">Key performance indicators</p>
      <div className="mt-6 flex space-x-8">
        {metrics.map((metric, index) => (
            <HealthMetric key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default PlatformHealth; 