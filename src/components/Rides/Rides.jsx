import React, { useState } from 'react';
import { FiFilter, FiRefreshCw, FiMoreHorizontal, FiMapPin } from 'react-icons/fi';

const ridesData = [
    { id: 'RD565', rider: { name: 'Kashish Singh', phone: '+91 9876543210', avatar: 'https://i.pravatar.cc/150?u=kashish' }, driver: { name: 'Priya Sharma', vehicle: '#4365, TVS Scooty', avatar: 'https://i.pravatar.cc/150?u=priya' }, route: { from: 'Hazratganj, Lucknow', to: 'Gomti Nagar, Lucknow' }, time: { date: '12/5/2025 10:45', duration: '11 min' }, fare: { amount: '₹150', distance: '4.6 Km' }, payment: 'Credit card', status: 'Completed' },
    { id: 'RD566', rider: { name: 'Riya Sharma', phone: '+91 9876543211', avatar: 'https://i.pravatar.cc/150?u=riya' }, driver: { name: 'Anita Verma', vehicle: '#1234, Honda Activa', avatar: 'https://i.pravatar.cc/150?u=anita' }, route: { from: 'Z Square Mall, Kanpur', to: 'Kanpur Central' }, time: { date: '12/5/2025 11:00', duration: '20 min' }, fare: { amount: '₹120', distance: '7.1 Km' }, payment: 'UPI', status: 'Ongoing' },
    { id: 'RD567', rider: { name: 'Sneha Patel', phone: '+91 9876543212', avatar: 'https://i.pravatar.cc/150?u=sneha' }, driver: { name: 'Sunita Patel', vehicle: '#5678, Hero Pleasure', avatar: 'https://i.pravatar.cc/150?u=sunita' }, route: { from: 'Assi Ghat, Varanasi', to: 'Sarnath, Varanasi' }, time: { date: '12/5/2025 11:15', duration: '25 min' }, fare: { amount: '₹250', distance: '12.3 Km' }, payment: 'Cash', status: 'Completed' },
    { id: 'RD568', rider: { name: 'Ananya Reddy', phone: '+91 9876543213', avatar: 'https://i.pravatar.cc/150?u=ananya' }, driver: { name: 'Meera Singh', vehicle: '#9101, Suzuki Access', avatar: 'https://i.pravatar.cc/150?u=meera' }, route: { from: 'Taj Mahal, Agra', to: 'Agra Fort, Agra' }, time: { date: '12/5/2025 11:30', duration: '30 min' }, fare: { amount: '₹100', distance: '15.0 Km' }, payment: 'Credit card', status: 'Cancelled' },
    { id: 'RD569', rider: { name: 'Zara Begum', phone: '+91 9876543215', avatar: 'https://i.pravatar.cc/150?u=zara' }, driver: { name: 'Alia Khan', vehicle: '#UP70XYZ, Jupiter', avatar: 'https://i.pravatar.cc/150?u=alia' }, route: { from: 'Civil Lines, Prayagraj', to: 'New Katra, Prayagraj' }, time: { date: '12/5/2025 12:00', duration: '15 min' }, fare: { amount: '₹75', distance: '3.0 Km' }, payment: 'Credit card', status: 'Completed' },
    { id: 'RD570', rider: { name: 'Ishita Gupta', phone: '+91 9876543216', avatar: 'https://i.pravatar.cc/150?u=ishita' }, driver: { name: 'Alia Khan', vehicle: '#UP70XYZ, Jupiter', avatar: 'https://i.pravatar.cc/150?u=alia' }, route: { from: 'Sangam, Prayagraj', to: 'Anand Bhavan, Prayagraj' }, time: { date: '12/5/2025 14:00', duration: '18 min' }, fare: { amount: '₹90', distance: '4.5 Km' }, payment: 'UPI', status: 'Completed' },
    { id: 'RD571', rider: { name: 'Aditi Mishra', phone: '+91 9876543217', avatar: 'https://i.pravatar.cc/150?u=aditi' }, driver: { name: 'Alia Khan', vehicle: '#UP70XYZ, Jupiter', avatar: 'https://i.pravatar.cc/150?u=alia' }, route: { from: 'Alfred Park, Prayagraj', to: 'Khusro Bagh, Prayagraj' }, time: { date: '12/5/2025 15:30', duration: '12 min' }, fare: { amount: '₹60', distance: '2.8 Km' }, payment: 'Cash', status: 'Ongoing' },
];

const TabButton = ({ label, count, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            active ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-500 hover:bg-gray-100'
        }`}
    >
        {label} <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${active ? 'bg-gray-300 text-gray-800' : 'bg-gray-200 text-gray-600'}`}>{count}</span>
    </button>
);

const StatusBadge = ({ status }) => {
    const statusClasses = {
        Completed: 'bg-green-100 text-green-800',
        Ongoing: 'bg-blue-100 text-blue-800',
        Cancelled: 'bg-red-100 text-red-800',
    };
    return <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusClasses[status]}`}>{status}</span>;
};

export const Rides = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredRides = ridesData.filter(ride => {
        if (activeTab === 'All') return true;
        return ride.status === activeTab;
    });

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Rides</h1>
                <p className="text-sm text-gray-500 mt-1">Monitor and manage all platform rides</p>
            </header>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">All Rides</h2>
                    <div className="flex items-center space-x-3">
                        <button className="flex items-center bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">
                            <FiFilter className="mr-2 h-4 w-4" /> Filter
                        </button>
                        <button className="flex items-center bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">
                            <FiRefreshCw className="mr-2 h-4 w-4" /> Refresh
                        </button>
                    </div>
                </div>

                <div className="flex space-x-2 border-b mb-4">
                    <TabButton label="All Rides" count={561} active={activeTab === 'All'} onClick={() => setActiveTab('All')} />
                    <TabButton label="Ongoing" count={240} active={activeTab === 'Ongoing'} onClick={() => setActiveTab('Ongoing')} />
                    <TabButton label="Completed" count={305} active={activeTab === 'Completed'} onClick={() => setActiveTab('Completed')} />
                    <TabButton label="Cancelled" count={5} active={activeTab === 'Cancelled'} onClick={() => setActiveTab('Cancelled')} />
                </div>
                
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="border-b text-sm text-gray-600">
                            <tr>
                                <th className="py-3 px-4 text-left font-medium">Ride ID</th>
                                <th className="py-3 px-4 text-left font-medium">Rider</th>
                                <th className="py-3 px-4 text-left font-medium">Driver</th>
                                <th className="py-3 px-4 text-left font-medium">Route</th>
                                <th className="py-3 px-4 text-left font-medium">Time</th>
                                <th className="py-3 px-4 text-left font-medium">Fare</th>
                                <th className="py-3 px-4 text-left font-medium">Payment</th>
                                <th className="py-3 px-4 text-left font-medium">Status</th>
                                <th className="py-3 px-4 text-left font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRides.map(ride => (
                                <tr key={ride.id} className="border-b last:border-0 hover:bg-gray-50 text-sm">
                                    <td className="py-3 px-4 font-medium text-gray-800">{ride.id}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center">
                                            <img src={ride.rider.avatar} alt={ride.rider.name} className="h-8 w-8 rounded-full mr-3" />
                                            <div>
                                                <p className="font-medium text-gray-800">{ride.rider.name}</p>
                                                <p className="text-xs text-gray-500">{ride.rider.phone}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center">
                                            <img src={ride.driver.avatar} alt={ride.driver.name} className="h-8 w-8 rounded-full mr-3" />
                                            <div>
                                                <p className="font-medium text-gray-800">{ride.driver.name}</p>
                                                <p className="text-xs text-gray-500">{ride.driver.vehicle}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-xs text-gray-600 max-w-xs">
                                        <p><span className="font-semibold">From:</span> {ride.route.from}</p>
                                        <p><span className="font-semibold">To:</span> {ride.route.to}</p>
                                    </td>
                                    <td className="py-3 px-4 text-xs text-gray-600">
                                        <p>{ride.time.date}</p>
                                        <p>{ride.time.duration}</p>
                                    </td>
                                    <td className="py-3 px-4 text-xs">
                                        <p className="font-semibold text-gray-800">{ride.fare.amount}</p>
                                        <p className="text-gray-500">{ride.fare.distance}</p>
                                    </td>
                                    <td className="py-3 px-4 text-xs text-gray-700">{ride.payment}</td>
                                    <td className="py-3 px-4"><StatusBadge status={ride.status} /></td>
                                    <td className="py-3 px-4 text-gray-500">
                                        <button className="hover:bg-gray-200 p-2 rounded-full"><FiMoreHorizontal /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}; 