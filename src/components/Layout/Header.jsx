import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="bg-white shadow-md p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                {/*Site logo/title */}
                <Link to="/" className="text-3xl font-extrabold text-indigo-700 hover:text-indigo-800 transition-colors">
                StyleSphere
                </Link>
            
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="text-gray-700 hover:text-indigo-700 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-700 hover:text-indigo-700 transition-colors">Shop</Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-700 hover:text-indigo-700 transition-colors">Cart (0)</Link>
            </li>
            {/* Future: Login/Profile icon */}
            <li>
              <Link to="/login" className="text-gray-700 hover:text-indigo-700 transition-colors">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
        </header>
    )
}

export default Header;
