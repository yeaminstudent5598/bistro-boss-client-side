import React from "react";
import { useNavigate } from "react-router-dom";

const LoginErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Redirect to the homepage or any desired page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-4/5 max-w-lg">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-4">
          You're already logged in!
        </h1>
        <p className="text-center text-gray-700 mb-6">
          To use this feature, please log out and sign in with a different account if needed.
        </p>
        <div className="bg-red-50 p-4 border border-red-200 rounded-md mb-6">
          <p className="text-red-500 font-medium text-center">
            Error: You’re already logged in!
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={handleGoBack}
            className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginErrorPage;





