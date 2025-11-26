import React from "react";

function Homepage(){
    return(
         <div className="container mx-auto p-8 text-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-6">Welcome to StyleSphere!</h2>
      <p className="text-xl text-gray-600">Your one-stop shop for modern fashion.</p>
      <div className="mt-10 p-6 bg-indigo-50 rounded-lg shadow-inner">
        <p className="text-indigo-700 text-lg">"Fashion is what you buy. Style is what you do with it."</p>
      </div>
      {/* Hero section, featured products, categories will go here later */}
    </div>
  );
}

export default Homepage;