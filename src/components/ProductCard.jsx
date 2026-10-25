


import React, { useState } from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

      {/* Product Image */}
      <div className="relative h-64 bg-gray-50 flex items-center justify-center overflow-hidden group">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageError(true)}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400">
            <ShoppingCart size={42} />
            <span className="text-sm mt-2">Image unavailable</span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label="Toggle favorite"
          className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-red-50 transition"
        >
          <Heart
            size={21}
            className={
              isFavorite
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400'
            }
          />
        </button>

        {/* Sale Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          SALE
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">
          {product.category}
        </p>

        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((number) => (
              <Star
                key={number}
                size={16}
                className={
                  number <= Math.floor(product.rating || 0)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            {product.rating || 0} ({product.reviews || 0} reviews)
          </span>
        </div>

        {/* Price and Cart */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl font-bold text-blue-600">
            ${Number(product.price).toFixed(2)}
          </span>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition text-sm font-medium"
          >
            <ShoppingCart size={17} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

