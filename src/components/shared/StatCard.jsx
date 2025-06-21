import React from 'react';

const StatCard = ({ icon, title, value, change, changeType, iconBgClass, iconColorClass }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex items-center justify-between">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-3xl font-bold mt-1 text-gray-800">{value}</p>
        {change && (
          <p className={`text-sm font-semibold mt-1 ${changeType === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
            {change}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-full ${iconBgClass}`}>
        {React.cloneElement(icon, { className: `h-6 w-6 ${iconColorClass}` })}
      </div>
    </div>
  );
};

export default StatCard;