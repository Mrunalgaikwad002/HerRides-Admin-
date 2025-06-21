import React from 'react';

const RecentActivity = () => {
  const activities = [
    { color: 'bg-green-500', text: 'New driver Sarah M. completed verification', time: '2 minutes ago' },
    { color: 'bg-blue-500', text: 'Ride #2847 completed successfully', time: '5 minutes ago' },
    { color: 'bg-yellow-500', text: 'Payment issue reported by user Emma K.', time: '12 minutes ago' },
    { color: 'bg-purple-500', text: 'New feedback received (5 stars)', time: '18 minutes ago' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Recent Activity</h2>
      <p className="text-sm text-gray-500">Latest platform activities</p>
      <div className="mt-4 space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            <div className={`flex-shrink-0 w-2.5 h-2.5 rounded-full mt-1.5 ${activity.color}`}></div>
            <div className="ml-3">
              <p className="text-sm text-gray-800">{activity.text}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity; 