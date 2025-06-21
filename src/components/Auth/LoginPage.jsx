import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

const InputField = ({ icon, placeholder, value, onChange, type = 'text' }) => (
    <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
            {icon}
        </div>
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
    </div>
);

export const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        // Clear any previous errors
        setError('');

        // Validate the specific credentials
        if (email === 'adminherrides@gmail.com' && password === 'AdminHerRides05') {
            // Successful login
            navigate('/dashboard');
        } else {
            // Invalid credentials
            setError('Invalid email or password. Please try again.');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Login</h2>
                <p className="text-center text-gray-500 mb-8">Welcome back! Please enter your details.</p>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <InputField 
                    icon={<FiMail />} 
                    placeholder="Email *" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <InputField 
                    icon={<FiLock />} 
                    placeholder="Password *" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                
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