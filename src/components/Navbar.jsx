import React from 'react';
import { ShoppingCart, Search, Menu, X, User, LogOut } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-bold text-xl text-gray-800 hidden sm:inline">
              ElectroHub
            </span>
          </div>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex flex-1 max-w-sm mx-8">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <Search size={20} className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Support
            </a>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            {/* User Account */}
            <button className="hidden sm:inline-flex items-center gap-2 text-gray-700 hover:text-blue-600">
              {isLoggedIn ? (
                <>
                  <User size={20} />
                  <span className="hidden lg:inline text-sm">Account</span>
                </>
              ) : (
                <>
                  <User size={20} />
                  <span className="hidden lg:inline text-sm">Sign In</span>
                </>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative text-gray-700 hover:text-blue-600 transition"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="py-2 px-2 mb-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 rounded border border-gray-300 text-sm"
              />
            </div>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
              Products
            </a>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
              Deals
            </a>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
              Support
            </a>
            <a href="#" className="block px-3 py-2 rounded hover:bg-gray-100">
              Sign In
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
