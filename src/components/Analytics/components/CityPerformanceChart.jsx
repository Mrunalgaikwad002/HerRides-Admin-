import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Lucknow', earnings: 4000, rides: 2400 },
  { name: 'Kanpur', earnings: 3000, rides: 1398 },
  { name: 'Varanasi', earnings: 2000, rides: 9800 },
  { name: 'Agra', earnings: 2780, rides: 3908 },
  { name: 'Prayagraj', earnings: 1890, rides: 4800 },
];

const CityPerformanceChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">City Performance Chart</h2>
      <p className="text-sm text-gray-500 mt-1">Rides distribution across cities</p>
      <div className="mt-6" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid #ccc',
                fontSize: '12px',
              }}
            />
            <Bar dataKey="rides" fill="#EC4899" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CityPerformanceChart; 