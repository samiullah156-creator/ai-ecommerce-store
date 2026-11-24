import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

// Mock Data
const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Aura Noise-Cancelling Headphones",
    description: "Experience pure silence with our next-gen active noise cancellation technology and premium immersive audio drivers.",
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
    description: "Crystal clear resolution in a bezel-less design. Perfect for creative professionals and gamers alike.",
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
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-20 bg-aura-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-aura-charcoal mb-4">
            Featured Products
          </h2>
          <div className="h-1 w-20 bg-aura-blue mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hand-picked selection of our most innovative and popular technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
           <button className="inline-block border-2 border-aura-charcoal text-aura-charcoal hover:bg-aura-charcoal hover:text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300">
             View All Products
           </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;