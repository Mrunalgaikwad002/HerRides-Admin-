import React from 'react';
import { FiClock, FiAlertCircle, FiStar, FiAlertTriangle } from 'react-icons/fi';

const AlertItem = ({ icon, text, subtext, buttonText }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center">
        {icon}
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-800">{text}</p>
          <p className="text-xs text-gray-500">{subtext}</p>
        </div>
      </div>
      <button className="text-sm bg-white border border-gray-300 rounded-md px-4 py-1.5 hover:bg-gray-100">
        {buttonText}
      </button>
    </div>
  );

const AlertsAndIssues = () => {
  const alerts = [
    {
        icon: <FiClock className="h-5 w-5 text-red-500" />,
        text: '5 Pending Driver Verifications',
        subtext: 'Waiting for approval',
        buttonText: 'Review'
    },
    {
        icon: <FiAlertCircle className="h-5 w-5 text-yellow-500" />,
        text: '3 Rides Delayed',
        subtext: 'Over 15 minutes',
        buttonText: 'Monitor'
    },
    {
        icon: <FiStar className="h-5 w-5 text-orange-500" />,
        text: '2 Low-Rated Drivers',
        subtext: 'Below 4.0 rating',
        buttonText: 'Review'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
            <FiAlertTriangle className="h-5 w-5 text-yellow-500" />
            <h2 className="text-xl font-bold ml-2">Alerts & Issues</h2>
        </div>
      <p className="text-sm text-gray-500 mt-1">Items requiring attention</p>
      <div className="mt-4 space-y-3">
        {alerts.map((alert, index) => (
            <AlertItem key={index} {...alert} />
        ))}
      </div>
    </div>
  );
};

export default AlertsAndIssues;
