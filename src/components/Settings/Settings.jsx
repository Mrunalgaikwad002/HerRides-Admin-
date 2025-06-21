import React, { useState } from 'react';

const TabButton = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 font-semibold rounded-t-lg transition-colors duration-200
            ${isActive
                ? 'bg-white border-b-2 border-blue-600 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
    >
        {label}
    </button>
);

const Section = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b">{title}</h3>
        <div className="space-y-6">
            {children}
        </div>
    </div>
);

const SettingRow = ({ label, description, children }) => (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-4">
        <div className="mb-2 md:mb-0">
            <label className="block text-md font-medium text-gray-800">{label}</label>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div>
            {children}
        </div>
    </div>
);

const ToggleSwitch = ({ enabled, setEnabled }) => (
    <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 ease-in-out
            ${enabled ? 'bg-blue-600' : 'bg-gray-300'}`}
    >
        <span
            className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out
                ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
        />
    </button>
);

const ProfileSettings = () => (
    <Section title="Profile Information">
        <SettingRow label="Full Name" description="This will be displayed on your profile.">
            <input type="text" defaultValue="Admin User" className="p-2 border rounded-md w-full md:w-80" />
        </SettingRow>
        <SettingRow label="Email Address" description="Used for account-related notifications.">
            <input type="email" defaultValue="admin@herrides.com" className="p-2 border rounded-md w-full md:w-80" />
        </SettingRow>
        <div className="text-right mt-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-semibold shadow-sm">Save Changes</button>
        </div>
    </Section>
);

const NotificationSettings = () => {
    const [emailOnSignup, setEmailOnSignup] = useState(true);
    const [emailOnExpiry, setEmailOnExpiry] = useState(true);
    const [emailForAlerts, setEmailForAlerts] = useState(false);

    return (
        <Section title="Email Notifications">
            <SettingRow label="New User Registrations" description="Send an email when a new user signs up.">
                <ToggleSwitch enabled={emailOnSignup} setEnabled={setEmailOnSignup} />
            </SettingRow>
            <SettingRow label="Driver Document Expiry" description="Notify about documents expiring within 30 days.">
                <ToggleSwitch enabled={emailOnExpiry} setEnabled={setEmailOnExpiry} />
            </SettingRow>
            <SettingRow label="Critical System Alerts" description="Receive alerts for major system issues.">
                <ToggleSwitch enabled={emailForAlerts} setEnabled={setEmailForAlerts} />
            </SettingRow>
        </Section>
    );
};

const SecuritySettings = () => (
    <>
        <Section title="Password Management">
            <SettingRow label="Current Password" description="Enter your current password to make changes.">
                <input type="password" placeholder="••••••••" className="p-2 border rounded-md w-full md:w-80" />
            </SettingRow>
            <SettingRow label="New Password" description="Choose a strong, new password.">
                <input type="password" placeholder="••••••••" className="p-2 border rounded-md w-full md:w-80" />
            </SettingRow>
            <SettingRow label="Confirm New Password" description="Confirm your new password.">
                <input type="password" placeholder="••••••••" className="p-2 border rounded-md w-full md:w-80" />
            </SettingRow>
            <div className="text-right mt-6">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-semibold shadow-sm">Update Password</button>
            </div>
        </Section>
        <Section title="Two-Factor Authentication">
            <SettingRow label="Enable 2FA" description="Add an extra layer of security to your account.">
                <button className="bg-gray-200 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-300 font-semibold">Enable</button>
            </SettingRow>
        </Section>
    </>
);

export const Settings = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'Profile':
                return <ProfileSettings />;
            case 'Notifications':
                return <NotificationSettings />;
            case 'Security':
                return <SecuritySettings />;
            default:
                return <ProfileSettings />;
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <header className="mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                <p className="text-sm text-gray-500 mt-1">Manage your account and system preferences.</p>
            </header>

            <div className="border-b border-gray-200">
                <nav className="flex space-x-2">
                    <TabButton label="Profile" isActive={activeTab === 'Profile'} onClick={() => setActiveTab('Profile')} />
                    <TabButton label="Notifications" isActive={activeTab === 'Notifications'} onClick={() => setActiveTab('Notifications')} />
                    <TabButton label="Security" isActive={activeTab === 'Security'} onClick={() => setActiveTab('Security')} />
                </nav>
            </div>

            <main className="bg-white p-8 rounded-b-lg shadow-sm mt-[-1px]">
                {renderContent()}
            </main>
        </div>
    );
}; 