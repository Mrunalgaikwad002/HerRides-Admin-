import React from 'react';
import { FiX } from 'react-icons/fi';

const WalletManagementModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-xl font-bold">Wallet Management</h2>
                        <p className="text-sm text-gray-500">Add or remove balance from driver's wallet.</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <FiX className="h-6 w-6" />
                    </button>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Select Driver</label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md">
                            <option>Choose driver</option>
                            <option>Priya Sharma</option>
                            <option>Anita Verma</option>
                            <option>Sunita Patel</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Action</label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md">
                            <option>Select action</option>
                            <option>Add Balance</option>
                            <option>Remove Balance</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (₹)</label>
                        <input type="text" name="amount" id="amount" placeholder="Enter amount" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"/>
                    </div>

                    <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
                        <textarea id="reason" name="reason" rows="3" placeholder="Reason for adjustment..." className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"></textarea>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button type="submit" className="px-6 py-2.5 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900">
                            Update Wallet
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WalletManagementModal; 