import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, ShoppingBag, Eye } from 'lucide-react';
import { useSelector } from 'react-redux';
import { productsAPI, categoriesAPI } from '../../api/apiService';

const AdminProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const { token } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    gender: 'unisex',
    images: [''],
    sizes: [{ name: 'M', stock: 0 }],
    colors: [{ name: 'Black', hexCode: '#000000' }],
    isActive: true,
    isFeatured: false,
    tags: []
  });

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()]);
  }, []);

  const fetchProducts = async () => {
    try {
      // For admin panel, fetch ALL products (including inactive ones)
      const response = await productsAPI.getAll({ includeInactive: 'true' });
      console.log('Products fetch response:', response);
      if (response.success) {
        setProducts(response.products);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      // For admin panel, fetch ALL categories (don't filter by isActive)
      const response = await categoriesAPI.getAll({});
      console.log('Products page - Categories fetch response:', response);
      if (response && response.success) {
        setCategories(response.categories);
        console.log('Products page - Categories loaded:', response.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        images: formData.images.filter(img => img.trim() !== ''),
        tags: formData.tags.length > 0 ? formData.tags : []
      };
      
      const response = await productsAPI.create(productData);
      if (response.success) {
        setProducts([...products, response.product]);
        setShowCreateModal(false);
        resetForm();
        alert('Product created successfully!');
      } else {
        alert('Error creating product: ' + response.message);
      }
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product');
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        images: formData.images.filter(img => img.trim() !== ''),
        tags: formData.tags.length > 0 ? formData.tags : []
      };
      
      const response = await productsAPI.update(editingProduct._id, productData);
      if (response.success) {
        setProducts(products.map(prod => 
          prod._id === editingProduct._id ? response.product : prod
        ));
        setEditingProduct(null);
        resetForm();
        alert('Product updated successfully!');
      } else {
        alert('Error updating product: ' + response.message);
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await productsAPI.delete(productId);
      if (response.success) {
        setProducts(products.filter(prod => prod._id !== productId));
        alert('Product deleted successfully!');
      } else {
        alert('Error deleting product: ' + response.message);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      brand: '',
      gender: 'unisex',
      images: [''],
      sizes: [{ name: 'M', stock: 0 }],
      colors: [{ name: 'Black', hexCode: '#000000' }],
      isActive: true,
      isFeatured: false,
      tags: []
    });
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    fetchCategories(); // Refresh categories when opening edit modal
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category?._id || '',
      brand: product.brand,
      gender: product.gender,
      images: product.images.length > 0 ? product.images : [''],
      sizes: product.sizes.length > 0 ? product.sizes : [{ name: 'M', stock: 0 }],
      colors: product.colors.length > 0 ? product.colors : [{ name: 'Black', hexCode: '#000000' }],
      isActive: product.isActive,
      isFeatured: product.isFeatured || false,
      tags: product.tags || []
    });
  };

  const addImageField = () => {
    setFormData({
      ...formData,
      images: [...formData.images, '']
    });
  };

  const removeImageField = (index) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index)
    });
  };

  const updateImageField = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData({
      ...formData,
      images: newImages
    });
  };

  const addSizeField = () => {
    setFormData({
      ...formData,
      sizes: [...formData.sizes, { name: '', stock: 0 }]
    });
  };

  const removeSizeField = (index) => {
    setFormData({
      ...formData,
      sizes: formData.sizes.filter((_, i) => i !== index)
    });
  };

  const updateSizeField = (index, field, value) => {
    const newSizes = [...formData.sizes];
    newSizes[index][field] = field === 'stock' ? parseInt(value) || 0 : value;
    setFormData({
      ...formData,
      sizes: newSizes
    });
  };

  const addColorField = () => {
    setFormData({
      ...formData,
      colors: [...formData.colors, { name: '', hexCode: '#000000' }]
    });
  };

  const removeColorField = (index) => {
    setFormData({
      ...formData,
      colors: formData.colors.filter((_, i) => i !== index)
    });
  };

  const updateColorField = (index, field, value) => {
    const newColors = [...formData.colors];
    newColors[index][field] = value;
    setFormData({
      ...formData,
      colors: newColors
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category?._id === selectedCategory;
    const matchesGender = selectedGender === '' || product.gender === selectedGender;
    
    return matchesSearch && matchesCategory && matchesGender;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
          <p className="text-gray-600">Manage your product inventory</p>
        </div>
        <button
          onClick={() => {
            setShowCreateModal(true);
            fetchCategories(); // Refresh categories when opening create modal
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-full"
          />
        </div>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        
        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Genders</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12">
                      {product.images && product.images[0] ? (
                        <img
                          className="h-12 w-12 rounded-lg object-cover"
                          src={product.images[0]}
                          alt={product.name}
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <ShoppingBag className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.brand}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {product.category?.name || 'No Category'}
                  </div>
                  <div className="text-sm text-gray-500 capitalize">{product.gender}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">${product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col space-y-1">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.isActive ? 'Active' : 'Inactive'}
                    </span>
                    {product.isFeatured && (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        Featured
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => openEditModal(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Get started by creating your first product.</p>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {(showCreateModal || editingProduct) && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-10 mx-auto p-5 border max-w-2xl shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                {editingProduct ? 'Edit Product' : 'Create New Product'}
              </h3>
              
              <form onSubmit={editingProduct ? handleUpdateProduct : handleCreateProduct} className="max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name*</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Brand*</label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData({...formData, brand: e.target.value})}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description*</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      rows="3"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Price*</label>
                      <input
                        type="number"
                        step="0.01"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Category*</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Gender*</label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                        <option value="unisex">Unisex</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Images */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Images*</label>
                    {formData.images.map((image, index) => (
                      <div key={index} className="flex mt-2">
                        <input
                          type="url"
                          value={image}
                          onChange={(e) => updateImageField(index, e.target.value)}
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Image URL"
                        />
                        {formData.images.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeImageField(index)}
                            className="ml-2 text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addImageField}
                      className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      + Add Image
                    </button>
                  </div>
                  
                  {/* Sizes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Sizes*</label>
                    {formData.sizes.map((size, index) => (
                      <div key={index} className="flex mt-2 space-x-2">
                        <input
                          type="text"
                          value={size.name}
                          onChange={(e) => updateSizeField(index, 'name', e.target.value)}
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Size (e.g., S, M, L)"
                        />
                        <input
                          type="number"
                          value={size.stock}
                          onChange={(e) => updateSizeField(index, 'stock', e.target.value)}
                          className="w-24 border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Stock"
                          min="0"
                        />
                        {formData.sizes.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSizeField(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addSizeField}
                      className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      + Add Size
                    </button>
                  </div>
                  
                  {/* Colors */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Colors*</label>
                    {formData.colors.map((color, index) => (
                      <div key={index} className="flex mt-2 space-x-2">
                        <input
                          type="text"
                          value={color.name}
                          onChange={(e) => updateColorField(index, 'name', e.target.value)}
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Color name"
                        />
                        <input
                          type="color"
                          value={color.hexCode}
                          onChange={(e) => updateColorField(index, 'hexCode', e.target.value)}
                          className="w-16 border border-gray-300 rounded-md px-1 py-1 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {formData.colors.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeColorField(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addColorField}
                      className="mt-2 text-blue-600 hover:text-blue-800 text-sm"
                    >
                      + Add Color
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Active
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.isFeatured}
                        onChange={(e) => setFormData({...formData, isFeatured: e.target.checked})}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 block text-sm text-gray-900">
                        Featured
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      setEditingProduct(null);
                      resetForm();
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    {editingProduct ? 'Update' : 'Create'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductsManagement;
