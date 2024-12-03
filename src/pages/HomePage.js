import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to SAT Platform</h1>
      <p className="text-lg text-gray-600 mb-6">
        A professional solution for managing your organisation's workflows.
      </p>
      <div className="flex space-x-4">
        <a
          href="/login"
          className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Login
        </a>
        <a
          href="/register"
          className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default HomePage;
