import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-lg font-bold">My Platform</h1>
      </header>
      <main className="p-6">{children}</main>
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; {new Date().getFullYear()} My Platform. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
