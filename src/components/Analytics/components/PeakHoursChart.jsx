import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiClock } from 'react-icons/fi';

const data = [
    { hour: '12am', rides: 45 }, { hour: '2am', rides: 90 }, { hour: '4am', rides: 170 }, { hour: '6am', rides: 240 },
    { hour: '8am', rides: 185 }, { hour: '10am', rides: 170 }, { hour: '12pm', rides: 195 }, { hour: '2pm', rides: 140 },
    { hour: '4pm', rides: 120 }, { hour: '6pm', rides: 175 }, { hour: '8pm', rides: 230 }, { hour: '10pm', rides: 280 },
    { hour: '11:59pm', rides: 360 },
];

export const PeakHoursChart = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow h-full">
            <div className="flex items-center">
                <FiClock className="h-5 w-5 text-gray-600" />
                <h2 className="text-xl font-bold ml-2">Peak Booking Hours</h2>
            </div>
            <p className="text-sm text-gray-500 mt-1">Hourly ride distribution over the last 7 days</p>
            <div className="mt-6" style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                        <YAxis 
                            domain={[0, 360]} 
                            ticks={[0, 90, 180, 270, 360]}
                            tick={{ fontSize: 12 }} 
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                border: '1px solid #ccc',
                                fontSize: '12px',
                            }}
                        />
                        <Line type="monotone" dataKey="rides" stroke="#EC4899" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}; 