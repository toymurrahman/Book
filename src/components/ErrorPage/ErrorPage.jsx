import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorpage from '../../assets/error.png'

const ErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <img
            src={errorpage}
            alt="Error"
            className="w-96 h-auto"
        />
        <h1 className="text-4xl font-bold text-red-600 mt-4">Oops! Page Not Found</h1>
        <p className="text-gray-600 mt-2">The page you are looking for does not exist.</p>
        <button
            onClick={() => navigate('/')}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
            Go Home
        </button>
    </div>
    );
};

export default ErrorPage;