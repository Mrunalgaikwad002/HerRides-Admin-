import React from 'react';
import { FiAlertCircle, FiCheckCircle, FiShield, FiMoreHorizontal, FiFilter } from 'react-icons/fi';

const issuesData = [
    { id: '#TKT-001', reportedBy: 'Kashish Singh', subject: 'Incorrect Fare Charged', date: '2024-05-22', status: 'Open', priority: 'High' },
    { id: '#TKT-002', reportedBy: 'Priya Sharma (Driver)', subject: 'GPS not working in app', date: '2024-05-21', status: 'In Progress', priority: 'High' },
    { id: '#TKT-003', reportedBy: 'Riya Sharma', subject: 'Driver was rude', date: '2024-05-20', status: 'Resolved', priority: 'Medium' },
    { id: '#TKT-004', reportedBy: 'Ananya Reddy', subject: 'App crashed during payment', date: '2024-05-19', status: 'Open', priority: 'Low' },
    { id: '#TKT-005', reportedBy: 'Sunita Patel (Driver)', subject: 'Payout not received', date: '2024-05-18', status: 'Resolved', priority: 'High' },
];

const StatCard = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="font-semibold text-gray-600 mb-2">{title}</h3>
        <div className="flex items-center">
            {icon}
            <p className="text-4xl font-bold">{value}</p>
        </div>
    </div>
);

const StatusBadge = ({ status }) => {
    const statusClasses = {
        Open: 'bg-red-100 text-red-800',
        'In Progress': 'bg-yellow-100 text-yellow-800',
        Resolved: 'bg-green-100 text-green-800',
    };
    return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusClasses[status]}`}>{status}</span>;
};

const PriorityBadge = ({ priority }) => {
    const priorityClasses = {
        High: 'bg-red-500',
        Medium: 'bg-yellow-500',
        Low: 'bg-green-500',
    };
    return (
        <div className="flex items-center">
            <span className={`h-2 w-2 rounded-full mr-2 ${priorityClasses[priority]}`}></span>
            <span>{priority}</span>
        </div>
    );
};

export const Issues = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Issues & Support Tickets</h1>
                <p className="text-sm text-gray-500 mt-1">Track and manage all reported issues.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Open Issues" value="2" icon={<FiAlertCircle className="h-8 w-8 text-red-500 mr-4" />} />
                <StatCard title="Resolved Today" value="5" icon={<FiCheckCircle className="h-8 w-8 text-green-500 mr-4" />} />
                <StatCard title="High Priority" value="2" icon={<FiShield className="h-8 w-8 text-yellow-500 mr-4" />} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">All Tickets</h3>
                    <button className="flex items-center bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">
                        <FiFilter className="mr-2 h-4 w-4" /> Filter
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="text-left text-gray-500">
                            <tr>
                                <th className="py-2 px-3 font-medium">Ticket ID</th>
                                <th className="py-2 px-3 font-medium">Reported By</th>
                                <th className="py-2 px-3 font-medium">Subject</th>
                                <th className="py-2 px-3 font-medium">Date</th>
                                <th className="py-2 px-3 font-medium">Status</th>
                                <th className="py-2 px-3 font-medium">Priority</th>
                                <th className="py-2 px-3 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {issuesData.map((issue) => (
                                <tr key={issue.id} className="border-b last:border-0 hover:bg-gray-50">
                                    <td className="py-3 px-3 font-medium text-gray-800">{issue.id}</td>
                                    <td className="py-3 px-3 text-gray-600">{issue.reportedBy}</td>
                                    <td className="py-3 px-3 text-gray-800">{issue.subject}</td>
                                    <td className="py-3 px-3 text-gray-600">{issue.date}</td>
                                    <td className="py-3 px-3"><StatusBadge status={issue.status} /></td>
                                    <td className="py-3 px-3"><PriorityBadge priority={issue.priority} /></td>
                                    <td className="py-3 px-3 text-gray-500">
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