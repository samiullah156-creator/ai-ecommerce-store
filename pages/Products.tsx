import React, { useState, useMemo } from 'react';
import ProductCard from '../components/Product/ProductCard';
import { Product } from '../types';
import { Filter } from 'lucide-react';

// Extended Mock Data
const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Aura Noise-Cancelling Headphones",
    description: "Experience pure silence with our next-gen active noise cancellation technology.",
    price: 299.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Smart Home Hub Pro",
    description: "Control your entire home with a single voice command. Compatible with over 50,000 devices.",
    price: 149.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Ultra-Slim 4K Monitor",
    description: "Crystal clear resolution in a bezel-less design. Perfect for creative professionals.",
    price: 459.00,
    category: "Computing",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "VR Headset Elite",
    description: "Step into new worlds with 8K resolution per eye and ultra-low latency tracking.",
    price: 799.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "Aura Watch Series 5",
    description: "Track your health metrics in real-time with our most advanced wearable sensor technology.",
    price: 399.00,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Mechanical Keyboard RGB",
    description: "Tactile switches and customizable per-key lighting for the ultimate typing experience.",
    price: 129.50,
    category: "Computing",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 7,
    title: "Portable Bluetooth Speaker",
    description: "360-degree sound with 24-hour battery life. Waterproof and rugged for any adventure.",
    price: 89.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 8,
    title: "Gaming Mouse Pro",
    description: "Ultra-lightweight design with a 25K DPI sensor for pixel-perfect accuracy.",
    price: 79.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 9,
    title: "Smart Security Camera",
    description: "Keep an eye on your home from anywhere with 1080p HD video and night vision.",
    price: 59.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 10,
    title: "True Wireless Earbuds",
    description: "Seamless connectivity and crystal clear call quality in a compact charging case.",
    price: 119.00,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const CATEGORIES = ["All", "Audio", "Smart Home", "Computing", "Gaming", "Wearables"];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-heading font-bold text-aura-charcoal mb-3">Our Collection</h1>
          <p className="text-gray-600">Explore the latest innovations in technology.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filter Area */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center space-x-2 mb-6 border-b pb-4">
                <Filter className="h-5 w-5 text-aura-blue" />
                <h3 className="font-heading font-bold text-lg text-aura-charcoal">Filters</h3>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Categories</h4>
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                      selectedCategory === category 
                        ? 'bg-aura-blue text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 text-sm">Showing {filteredProducts.length} products</span>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
};

export default Products;