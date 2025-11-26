import React from "react";  
import { Link } from "react-router-dom";

function NotFoundPage(){
     return (
    <div className="container mx-auto p-8 text-center flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="text-6xl font-bold text-red-600 mb-4">404</h2>
      <p className="text-2xl text-gray-700 mb-6">Page Not Found</p>
      <p className="text-lg text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;
