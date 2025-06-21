import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Overview } from './components/Overview/Overview';
import { KYCVerification } from './components/KYCVerification/KYCVerification';
import { Analytics } from './components/Analytics/Analytics';
import { Earnings } from './components/Earnings/Earnings';
import { Users } from './components/Users/Users';
import { Drivers } from './components/Drivers/Drivers';
import { Rides } from './components/Rides/Rides';
import { Feedback } from './components/Feedback/Feedback';
import { Issues } from './components/Issues/Issues';
import { Reports } from './components/Reports/Reports';
import { Settings } from './components/Settings/Settings';
import { AdminRoles } from './components/AdminRoles/AdminRoles';
import { DriverDetails } from './components/Drivers/DriverDetails';

export function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/kyc" element={<KYCVerification />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/drivers/:driverId" element={<DriverDetails />} />
            <Route path="/rides" element={<Rides />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin-roles" element={<AdminRoles />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
