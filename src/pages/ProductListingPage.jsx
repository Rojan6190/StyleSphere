import React from "react";

function ProductioListingPage(){
    return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Shop All Products</h2>
      <p className="text-center text-lg text-gray-600">This is where all our amazing products will be listed.</p>
      {/* Product grid, filters, sorting will go here */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border p-4 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">
          Product Card Placeholder
        </div>
        <div className="border p-4 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">
          Product Card Placeholder
        </div>
        <div className="border p-4 rounded-lg shadow-md h-48 flex items-center justify-center text-gray-500">
          Product Card Placeholder
        </div>
      </div>
    </div>
  );
}

export default ProductioListingPage;