import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

export default function Sidebar({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [priceRange, setPriceRange] = React.useState(1000);

  return (
    <div className="space-y-6">
      {/* Filter Header */}
      <div className="flex items-center gap-2 mb-6">
        <Filter size={20} className="text-gray-700" />
        <h3 className="text-lg font-bold text-gray-800">Filters</h3>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Category</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                onCategoryChange(e.target.value);
              }}
              className="w-4 h-4"
            />
            <span className="text-gray-700">All Products</span>
          </label>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  onCategoryChange(e.target.value);
                }}
                className="w-4 h-4"
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
        <input
          type="range"
          min="0"
          max="2000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full accent-blue-600"
        />
        <div className="mt-2 text-gray-700">
          <span className="text-sm">Max: ${priceRange}</span>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-gray-700">
                {rating}★ & above
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Brands</h4>
        <div className="space-y-2">
          {['Samsung', 'Apple', 'Sony', 'LG', 'Dell'].map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition font-medium">
        Clear All Filters
      </button>
    </div>
  );
}
