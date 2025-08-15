import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Edit, 
  Save, 
  X, 
  Lock, 
  CreditCard, 
  Package, 
  Heart, 
  Settings,
  LogOut,
  Camera,
  Shield,
  Bell
} from 'lucide-react';

const ProfilePage = () => {
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: user?.phone || '+1 (555) 123-4567',
    address: '123 Fashion Street, Style City, SC 12345'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const mockOrders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 89.99,
      items: 2
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 129.99,
      items: 3
    },
    {
      id: 'ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: 59.99,
      items: 1
    }
  ];

  const mockWishlist = [
    {
      id: 1,
      name: 'Vintage Denim Jacket',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=150'
    },
    {
      id: 2,
      name: 'Elegant Evening Dress',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=150'
    }
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold mb-4">
            {user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
            <Camera className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{user?.name || 'John Doe'}</h2>
        <p className="text-gray-600">Member since January 2024</p>
      </div>

      {/* Profile Form */}
      <div className="card-modern">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-secondary flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="btn-primary flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn-secondary flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-modern w-full"
              />
            ) : (
              <p className="text-gray-900">{formData.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-modern w-full"
              />
            ) : (
              <p className="text-gray-900">{formData.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Phone
            </label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input-modern w-full"
              />
            ) : (
              <p className="text-gray-900">{formData.phone}</p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Address
            </label>
            {isEditing ? (
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="input-modern w-full resize-none"
              />
            ) : (
              <p className="text-gray-900">{formData.address}</p>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="card-modern text-center p-6 hover-lift transition-all duration-300">
          <Lock className="h-8 w-8 text-purple-600 mx-auto mb-3" />
          <h4 className="font-semibold mb-2">Change Password</h4>
          <p className="text-sm text-gray-600">Update your account security</p>
        </button>
        
        <button className="card-modern text-center p-6 hover-lift transition-all duration-300">
          <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-3" />
          <h4 className="font-semibold mb-2">Payment Methods</h4>
          <p className="text-sm text-gray-600">Manage your payment options</p>
        </button>
        
        <button className="card-modern text-center p-6 hover-lift transition-all duration-300">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
          <h4 className="font-semibold mb-2">Privacy Settings</h4>
          <p className="text-sm text-gray-600">Control your data privacy</p>
        </button>
      </div>
    </div>
  );

  const renderOrdersTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900">Order History</h3>
        <p className="text-sm text-gray-600">{mockOrders.length} orders</p>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="card-modern">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="font-semibold text-gray-900">{order.id}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">Ordered on {order.date}</p>
                <p className="text-sm text-gray-600">{order.items} item(s)</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">${order.total}</p>
                <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlistTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-900">My Wishlist</h3>
        <p className="text-sm text-gray-600">{mockWishlist.length} items</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWishlist.map((item) => (
          <div key={item.id} className="card-modern group">
            <div className="relative mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </button>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
            <p className="text-lg font-bold text-purple-600 mb-4">${item.price}</p>
            <button className="btn-primary w-full">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900">Account Settings</h3>
      
      <div className="space-y-4">
        <div className="card-modern">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-gray-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-600">Receive updates about orders and promotions</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-gray-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
              </div>
            </div>
            <button className="btn-secondary">
              Enable
            </button>
          </div>
        </div>

        <div className="card-modern">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogOut className="h-5 w-5 text-red-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Sign Out</h4>
                <p className="text-sm text-gray-600">Sign out of your account</p>
              </div>
            </div>
            <button className="btn-secondary text-red-600 hover:bg-red-50">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">My Account</h1>
          <p className="text-gray-600">Manage your profile, orders, and preferences</p>
        </div>

        {/* Mobile Tabs */}
        <div className="md:hidden mb-6">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="card-modern sticky top-8">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'orders' && renderOrdersTab()}
            {activeTab === 'wishlist' && renderWishlistTab()}
            {activeTab === 'settings' && renderSettingsTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
