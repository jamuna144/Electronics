import React from 'react';
import { ShoppingBag, Heart, Truck, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Electronics at Unbeatable Prices
            </h1>
            <p className="text-lg text-blue-100">
              Discover the latest gadgets and electronics with exclusive deals. Fast shipping and 30-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
                View Deals
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="w-full h-80 bg-white bg-opacity-10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag size={120} className="text-white opacity-50 mx-auto mb-4" />
                <p className="text-white text-lg">Featured Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Truck className="flex-shrink-0" size={32} />
          <div>
            <h3 className="font-bold">Free Shipping</h3>
            <p className="text-blue-100 text-sm">On orders over $50</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Shield className="flex-shrink-0" size={32} />
          <div>
            <h3 className="font-bold">Secure Payment</h3>
            <p className="text-blue-100 text-sm">100% safe transactions</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Heart className="flex-shrink-0" size={32} />
          <div>
            <h3 className="font-bold">Easy Returns</h3>
            <p className="text-blue-100 text-sm">30-day money back</p>
          </div>
        </div>
      </div>
    </section>
  );
}
