import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
    FiHome, FiUsers, FiUserCheck, FiTruck, FiDollarSign, FiPieChart, FiCheckSquare,
    FiMessageSquare, FiAlertTriangle, FiFileText, FiSettings, FiShield 
} from 'react-icons/fi';

const NavItem = ({ icon, children, to, badge, badgeColor }) => {
    let badgeClasses = 'ml-auto text-xs font-semibold px-2 py-0.5 rounded-full';
    if (badgeColor === 'red') {
        badgeClasses += ' bg-red-500 text-white';
    } else {
        badgeClasses += ' bg-gray-200 text-gray-600';
    }

    const baseLinkClasses = "flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 text-base";
    const activeLinkClasses = "bg-gray-100 text-gray-900 font-semibold";
  
    return (
      <NavLink 
        to={to} 
        className={({ isActive }) => `${baseLinkClasses} ${isActive ? activeLinkClasses : ''}`}
      >
        {icon}
        <span className="ml-3">{children}</span>
        {badge && <span className={badgeClasses}>{badge}</span>}
      </NavLink>
    );
  };
  
const SectionTitle = ({ children }) => (
    <p className="px-3 pt-4 pb-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
        {children}
    </p>
);

export const Sidebar = () => {
    return (
        <div className="w-64 bg-white shadow-md flex flex-col flex-shrink-0">
            {/* Header */}
            <div className="h-20 flex items-center px-4 border-b">
                <div className="bg-pink-600 text-white font-bold rounded-md p-3 text-lg flex items-center justify-center">
                    HR
                </div>
                <div className="ml-3">
                    <p className="text-xl font-bold text-gray-800">HerRides</p>
                    <p className="text-base text-gray-500">Admin Panel</p>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto">
                <nav className="p-3">
                    <SectionTitle>Main Menu</SectionTitle>
                    <NavItem icon={<FiHome className="h-5 w-5" />} to="/dashboard">Overview</NavItem>
                    <NavItem icon={<FiUsers className="h-5 w-5" />} to="/dashboard/users" badge="1,247">Users</NavItem>
                    <NavItem icon={<FiUserCheck className="h-5 w-5" />} to="/dashboard/drivers" badge="342">Drivers</NavItem>
                    <NavItem icon={<FiTruck className="h-5 w-5" />} to="/dashboard/rides" badge="23">Rides</NavItem>
                    <NavItem icon={<FiDollarSign className="h-5 w-5" />} to="/dashboard/earnings">Earnings</NavItem>
                    <NavItem icon={<FiPieChart className="h-5 w-5" />} to="/dashboard/analytics">Analytics</NavItem>
                    
                    <SectionTitle>Support & Monitoring</SectionTitle>
                    <NavItem icon={<FiMessageSquare className="h-5 w-5" />} to="/dashboard/feedback" badge="12" badgeColor="red">Feedback</NavItem>
                    <NavItem icon={<FiAlertTriangle className="h-5 w-5" />} to="/dashboard/issues" badge="5" badgeColor="red">Issues</NavItem>
                    <NavItem icon={<FiFileText className="h-5 w-5" />} to="/dashboard/reports">Reports</NavItem>

                    <SectionTitle>System</SectionTitle>
                    <NavItem icon={<FiSettings className="h-5 w-5" />} to="/dashboard/settings">Settings</NavItem>
                    <NavItem icon={<FiShield className="h-5 w-5" />} to="/dashboard/admin-roles">Admin Roles</NavItem>
                </nav>
            </div>
        </div>
    );
};
