import React from 'react';
import { Plus, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    showToast(`${product.title} added to cart!`);
  };

  const handleViewDetails = () => {
    console.log(`View details for Product ID: ${product.id}`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex space-x-2 translate-y-12 group-hover:translate-y-0 transition-all duration-300 ease-out">
          <button 
            onClick={handleViewDetails}
            className="bg-white hover:bg-gray-100 text-gray-700 p-3 rounded-full shadow-lg"
            aria-label="View details"
            title="View Details"
          >
            <Eye className="h-5 w-5" />
          </button>
          <button 
            onClick={handleAddToCart}
            className="bg-aura-white hover:bg-aura-blue text-aura-charcoal hover:text-white p-3 rounded-full shadow-lg"
            aria-label="Add to cart"
            title="Add to Cart"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-aura-blue uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-lg font-heading font-bold text-aura-charcoal mb-2 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-aura-charcoal">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;