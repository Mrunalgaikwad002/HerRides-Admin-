import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

const InputField = ({ icon, placeholder }) => (
    <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
            {icon}
        </div>
        <input 
            type={placeholder.includes('Password') ? 'password' : 'text'}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
    </div>
);

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Here you would typically have your authentication logic
        // For now, we'll just simulate a successful login and redirect
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Login</h2>
                <p className="text-center text-gray-500 mb-8">Welcome back! Please enter your details.</p>

                <InputField icon={<FiMail />} placeholder="Email *" />
                <InputField icon={<FiLock />} placeholder="Password *" />
                
                <button 
                    onClick={handleLogin}
                    className="w-full bg-pink-500 text-white font-bold py-3 rounded-xl mt-4 hover:bg-pink-600 transition-colors"
                >
                    Login
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account? <Link to="/register" className="font-bold text-pink-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
}; 