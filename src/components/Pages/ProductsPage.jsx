import React from 'react';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Products Page</h2>
          <p className="text-gray-600">This page will display all products with filtering and search functionality.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
