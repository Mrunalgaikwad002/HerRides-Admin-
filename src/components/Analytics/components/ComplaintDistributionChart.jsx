import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Driver Behavior', value: 35 },
  { name: 'Vehicle Condition', value: 20 },
  { name: 'Route Issues', value: 15 },
  { name: 'Payment Problems', value: 13 },
  { name: 'App Issues', value: 10 },
  { name: 'Others', value: 7 },
];

const COLORS = ['#EF4444', '#FBBF24', '#22C55E', '#3B82F6', '#A855F7', '#EC4899'];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border rounded-md shadow-md text-sm">
          <p className="font-bold">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
};

const ComplaintDistributionChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold">Complaint Distribution</h2>
      <p className="text-sm text-gray-500 mt-1">Visual breakdown of complaint types</p>
      <div className="mt-6" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={110}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" layout="vertical" verticalAlign="middle" align="right" 
                    formatter={(value, entry) => <span className="text-gray-600">{`${value}: ${entry.payload.value}%`}</span>}
                />
            </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplaintDistributionChart; 