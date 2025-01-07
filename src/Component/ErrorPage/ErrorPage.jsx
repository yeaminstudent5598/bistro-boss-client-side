import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
                <img
                    src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                    alt="Error Illustration"
                    className="w-full max-w-sm mx-auto"
                />
                <h1 className="text-4xl font-bold text-red-600 mt-6">Oops!</h1>
                <p className="text-gray-700 text-lg mt-2">
                    We can't find the page you're looking for.
                </p>
                <p className="text-gray-500 mt-1">
                    It's either been removed or you mistyped the URL.
                </p>
                <div className="mt-6">
                    <Link
                        to={'/'}
                        className="px-6 py-3 text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition duration-300"
                    >
                        Go Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
