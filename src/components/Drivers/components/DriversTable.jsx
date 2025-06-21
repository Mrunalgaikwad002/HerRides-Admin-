import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiStar } from 'react-icons/fi';

const drivers = [
    { id: 'DR001', name: 'Priya Sharma', joinDate: '2023-11-10', vehicle: 'TVS Scooty, Lucknow', license: 'UP32ABC', totalRides: 452, rating: 4.8, status: 'Active' },
    { id: 'DR002', name: 'Anita Verma', joinDate: '2023-11-15', vehicle: 'Honda Activa, Kanpur', license: 'UP78DEF', totalRides: 389, rating: 4.9, status: 'Active' },
    { id: 'DR003', name: 'Sunita Patel', joinDate: '2023-11-20', vehicle: 'Hero Pleasure, Varanasi', license: 'UP65GHI', totalRides: 512, rating: 4.7, status: 'On-Ride' },
    { id: 'DR004', name: 'Meera Singh', joinDate: '2023-11-25', vehicle: 'Suzuki Access, Agra', license: 'UP80JKL', totalRides: 298, rating: 4.6, status: 'Inactive' },
    { id: 'DR005', name: 'Alia Khan', joinDate: '2023-12-01', vehicle: 'TVS Jupiter, Prayagraj', license: 'UP70MNO', totalRides: 150, rating: 4.5, status: 'Active' },
];

const StatusBadge = ({ status }) => {
    let statusClasses = '';
    switch (status) {
        case 'Active': statusClasses = 'bg-green-100 text-green-700'; break;
        case 'Inactive': statusClasses = 'bg-gray-100 text-gray-700'; break;
        case 'On-Ride': statusClasses = 'bg-blue-100 text-blue-700'; break;
        default: statusClasses = 'bg-gray-100 text-gray-700';
    }
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses}`}>{status}</span>;
};

const DriversTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <div>
                <h2 className="text-xl font-bold">All Drivers</h2>
                <p className="text-sm text-gray-500 mt-1">Manage all registered drivers.</p>
            </div>
            <div className="relative">
                <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search drivers..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none w-64" />
            </div>
        </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Driver</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Vehicle Details</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Total Rides</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Rating</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map(driver => (
              <tr key={driver.id} className="border-b last:border-0">
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{driver.name}</div>
                  <div className="text-xs text-gray-500">Joined: {driver.joinDate}</div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">{driver.vehicle}</div>
                  <div className="text-xs text-gray-500">License: {driver.license}</div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">{driver.totalRides}</td>
                <td className="py-4 px-4 text-sm text-gray-700 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiStar className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                    {driver.rating}
                  </div>
                </td>
                <td className="py-4 px-4 whitespace-nowrap"><StatusBadge status={driver.status} /></td>
                <td className="py-4 px-4 text-gray-500 whitespace-nowrap text-right">
                    <Link 
                        to={`/dashboard/drivers/${driver.id}`}
                        className="text-blue-600 hover:text-blue-900 font-semibold"
                    >
                        View Details
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriversTable; 