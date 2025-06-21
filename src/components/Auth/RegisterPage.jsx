import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiPhone, FiMail, FiLock } from 'react-icons/fi';

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

export const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        // Here you would typically have your registration logic
        // For now, we'll just simulate a successful registration and redirect
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Register</h2>
                <p className="text-center text-gray-500 mb-8">Create your account to get started</p>

                <InputField icon={<FiUser />} placeholder="Full Name *" />
                <InputField icon={<FiPhone />} placeholder="Phone Number *" />
                <InputField icon={<FiMail />} placeholder="Email *" />
                <InputField icon={<FiLock />} placeholder="Password *" />
                
                <button 
                    onClick={handleRegister}
                    className="w-full bg-gray-200 text-gray-500 font-bold py-3 rounded-xl mt-4 hover:bg-pink-500 hover:text-white transition-colors duration-200"
                >
                    Continue
                </button>

                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account? <Link to="/login" className="font-bold text-pink-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}; 