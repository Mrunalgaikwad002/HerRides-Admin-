import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiPhone, FiMail, FiStar, FiMapPin, FiTruck, FiFileText, FiDollarSign } from 'react-icons/fi';

// Mock data - in a real app, you'd fetch this based on the ID
const drivers = [
    { 
        id: 'DR001', name: 'Priya Sharma', joinDate: '2023-11-10', vehicle: 'TVS Scooty, Lucknow', license: 'UP32ABC', totalRides: 452, rating: 4.8, status: 'Active', 
        phone: '+91 98765 43210', email: 'priya.sharma@example.com', address: 'Hazratganj, Lucknow, UP', kycStatus: 'Verified', documents: { adhaar: 'Verified', pan: 'Verified', license: 'Verified' },
        earnings: { total: '₹45,250', thisMonth: '₹12,800' },
        pastTrips: [
            { id: 'TRIP001', date: '2024-05-20', from: 'Hazratganj', to: 'Gomti Nagar', fare: '₹150', status: 'Completed' },
            { id: 'TRIP002', date: '2024-05-19', from: 'Alambagh', to: 'Charbagh Station', fare: '₹80', status: 'Completed' },
        ]
    },
    { 
        id: 'DR002', name: 'Anita Verma', joinDate: '2023-11-15', vehicle: 'Honda Activa, Kanpur', license: 'UP78DEF', totalRides: 389, rating: 4.9, status: 'Active', 
        phone: '+91 98765 43211', email: 'anita.verma@example.com', address: 'The Mall, Kanpur, UP', kycStatus: 'Verified', documents: { adhaar: 'Verified', pan: 'Verified', license: 'Verified' },
        earnings: { total: '₹39,800', thisMonth: '₹11,200' },
        pastTrips: [
            { id: 'TRIP004', date: '2024-05-20', from: 'Z Square Mall', to: 'Kanpur Central', fare: '₹120', status: 'Completed' },
        ]
    },
    { 
        id: 'DR003', name: 'Sunita Patel', joinDate: '2023-11-20', vehicle: 'Hero Pleasure, Varanasi', license: 'UP65GHI', totalRides: 512, rating: 4.7, status: 'On-Ride', 
        phone: '+91 98765 43212', email: 'sunita.patel@example.com', address: 'Ghats of Varanasi, UP', kycStatus: 'Pending', documents: { adhaar: 'Verified', pan: 'Pending', license: 'Verified' },
        earnings: { total: '₹51,500', thisMonth: '₹14,100' },
        pastTrips: [
            { id: 'TRIP005', date: '2024-05-20', from: 'Assi Ghat', to: 'Sarnath', fare: '₹250', status: 'Completed' },
        ]
    },
    { 
        id: 'DR004', name: 'Meera Singh', joinDate: '2023-11-25', vehicle: 'Suzuki Access, Agra', license: 'UP80JKL', totalRides: 298, rating: 4.6, status: 'Inactive', 
        phone: '+91 98765 43213', email: 'meera.singh@example.com', address: 'Taj Ganj, Agra, UP', kycStatus: 'Rejected', documents: { adhaar: 'Verified', pan: 'Verified', license: 'Rejected' },
        earnings: { total: '₹28,300', thisMonth: '₹5,400' },
        pastTrips: [
            { id: 'TRIP006', date: '2024-04-15', from: 'Taj Mahal', to: 'Agra Fort', fare: '₹100', status: 'Completed' },
        ]
    },
    { 
        id: 'DR005', name: 'Alia Khan', joinDate: '2023-12-01', vehicle: 'TVS Jupiter, Prayagraj', license: 'UP70MNO', totalRides: 150, rating: 4.5, status: 'Active', 
        phone: '+91 98765 43214', email: 'alia.khan@example.com', address: 'Civil Lines, Prayagraj, UP', kycStatus: 'Verified', documents: { adhaar: 'Verified', pan: 'Verified', license: 'Verified' },
        earnings: { total: '₹15,000', thisMonth: '₹4,500' },
        pastTrips: [
            { id: 'TRIP007', date: '2024-05-21', from: 'Civil Lines', to: 'Sangam', fare: '₹200', status: 'Completed' },
        ]
    },
];

const InfoCard = ({ title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
        {children}
    </div>
);

const InfoRow = ({ icon, label, value }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center text-sm">
            <div className="text-gray-400 mr-4">{icon}</div>
            <span className="text-gray-600">{label}</span>
        </div>
        <span className="text-sm text-gray-800 font-medium text-right">{value}</span>
    </div>
);

export const DriverDetails = () => {
    const { driverId } = useParams();
    const [activeTab, setActiveTab] = useState('Past Trips');
    const driver = drivers.find(d => d.id === driverId);

    if (!driver) {
        return (
            <div className="text-center p-10">
                <h2 className="text-2xl font-bold">Driver not found</h2>
                <Link to="/dashboard/drivers" className="text-blue-500 mt-4 inline-block">Go back to drivers list</Link>
            </div>
        );
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <Link to="/dashboard/drivers" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    <FiArrowLeft className="mr-2" />
                    Back to all drivers
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column - Profile */}
                <div className="lg:col-span-1">
                    <InfoCard title="Driver Profile">
                        <div className="flex flex-col items-center text-center">
                            <div className="h-24 w-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                                <FiUser className="h-12 w-12 text-gray-500" />
                            </div>
                            <h2 className="text-2xl font-bold">{driver.name}</h2>
                            <p className="text-sm text-gray-500">Joined on {driver.joinDate}</p>
                            <div className="flex items-center mt-2 text-yellow-500">
                                <FiStar className="fill-current" />
                                <span className="ml-1 font-bold text-lg">{driver.rating}</span>
                                <span className="ml-2 text-sm text-gray-500">({driver.totalRides} rides)</span>
                            </div>
                        </div>
                    </InfoCard>
                </div>

                {/* Right Column - Details */}
                <div className="lg:col-span-2 space-y-8">
                    <InfoCard title="Contact Information">
                        <InfoRow icon={<FiPhone size={20} />} label="Phone Number:" value={driver.phone} />
                        <InfoRow icon={<FiMail size={20} />} label="Email Address:" value={driver.email} />
                        <InfoRow icon={<FiMapPin size={20} />} label="Address:" value={driver.address} />
                    </InfoCard>

                    <InfoCard title="Vehicle & License">
                        <InfoRow icon={<FiTruck size={20} />} label="Vehicle:" value={driver.vehicle} />
                        <InfoRow icon={<FiFileText size={20} />} label="License No.:" value={driver.license} />
                    </InfoCard>

                    <InfoCard title="Earnings Summary">
                        <InfoRow icon={<FiDollarSign size={20} />} label="Total Earnings:" value={driver.earnings.total} />
                        <InfoRow icon={<FiDollarSign size={20} />} label="This Month:" value={driver.earnings.thisMonth} />
                    </InfoCard>
                    
                    <InfoCard title="Recent Trips">
                         <div className="overflow-x-auto">
                            <table className="min-w-full text-sm">
                                <thead className="text-left">
                                    <tr>
                                        <th className="py-2 px-3 text-gray-600 font-semibold">Trip ID</th>
                                        <th className="py-2 px-3 text-gray-600 font-semibold">Date</th>
                                        <th className="py-2 px-3 text-gray-600 font-semibold">Route</th>
                                        <th className="py-2 px-3 text-gray-600 font-semibold text-right">Fare</th>
                                        <th className="py-2 px-3 text-gray-600 font-semibold text-center">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {driver.pastTrips.map(trip => (
                                        <tr key={trip.id} className="border-b border-gray-100 last:border-0">
                                            <td className="py-3 px-3 font-medium text-gray-800">{trip.id}</td>
                                            <td className="py-3 px-3 text-gray-600">{trip.date}</td>
                                            <td className="py-3 px-3 text-gray-600">{`${trip.from} to ${trip.to}`}</td>
                                            <td className="py-3 px-3 text-gray-800 text-right">{trip.fare}</td>
                                            <td className="py-3 px-3 text-center">
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${trip.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                    {trip.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </InfoCard>
                    
                    <InfoCard title="KYC Status">
                         <div className="space-y-3">
                            {Object.entries(driver.documents).map(([doc, status]) => (
                                <div key={doc} className="flex justify-between items-center py-2">
                                    <span className="capitalize text-sm font-medium text-gray-700">{doc}</span>
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                                        status === 'Verified' ? 'bg-green-100 text-green-800' :
                                        status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'
                                    }`}>{status}</span>
                                </div>
                            ))}
                        </div>
                    </InfoCard>
                </div>
            </div>
        </div>
    );
}; 