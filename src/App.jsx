import React from 'react';
import {Routes, Route} from 'react-router-dom';

//Layout components
import MainLayout from './components/Layout/MainLayout';

//Page Components
import HomePage from './pages/Homepage';
import ProductListingPage from './pages/ProductListingPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
   return (
    // Removed min-h-screen and bg-gray-50 from here, MainLayout handles it
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Nested routes will render within the <Outlet /> of MainLayout */}
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductListingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
export default App;