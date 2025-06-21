import React from 'react';
import { FiMapPin } from 'react-icons/fi';

const cities = [
    { name: 'Lucknow', rides: '12.5k', earnings: '₹2.5L', color: 'bg-blue-500' },
    { name: 'Kanpur', rides: '11.2k', earnings: '₹2.2L', color: 'bg-green-500' },
    { name: 'Varanasi', rides: '10.8k', earnings: '₹2.1L', color: 'bg-yellow-500' },
    { name: 'Agra', rides: '9.5k', earnings: '₹1.9L', color: 'bg-red-500' },
    { name: 'Prayagraj', rides: '8.1k', earnings: '₹1.5L', color: 'bg-indigo-500' },
];

const CityRow = ({ rank, name, rides, change, color }) => (
    <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
            <div className={`flex items-center justify-center h-8 w-8 rounded-full ${color} text-pink-600 font-bold text-sm`}>
                {rank}
            </div>
            <div className="ml-4">
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-gray-500">{rides}</p>
            </div>
        </div>
        <p className="text-sm text-green-500 font-semibold">{change}</p>
    </div>
);

export const MostActiveCities = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
            <FiMapPin className="h-5 w-5 text-gray-600" />
            <h2 className="text-xl font-bold ml-2">Most Active Cities</h2>
        </div>
      <p className="text-sm text-gray-500 mt-1">Ride volume by city in the last 7 days</p>
      <div className="mt-4">
        {cities.map((city, index) => (
            <CityRow key={city.name} rank={index + 1} {...city} />
        ))}
      </div>
    </div>
  );
}; 