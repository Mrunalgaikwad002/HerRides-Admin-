import React from 'react';
import { Link } from 'react-router-dom';
import { Bike } from 'lucide-react';

export const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
            <div className="mb-8">
                <Bike className="h-24 w-24 text-pink-500 mx-auto" strokeWidth={1.5} />
            </div>
            <h1 className="text-5xl font-bold text-pink-500 mb-4">
                Welcome to HerRides
            </h1>
            <p className="text-lg text-gray-600 max-w-md mb-8">
                A safe ride-sharing platform for women, by women. 2-wheeler only.
            </p>
            <Link to="/register">
                <button className="bg-pink-500 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105 duration-300">
                    Get Started
                </button>
            </Link>
        </div>
    );
}; 