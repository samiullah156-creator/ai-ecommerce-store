import React, { useState } from 'react';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-aura-charcoal text-white shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-heading font-bold text-white tracking-wider">
            Aura<span className="text-aura-blue">Cart</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-300 hover:text-aura-blue transition-colors font-medium text-sm uppercase tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center relative w-64">
          <input
            type="text"
            placeholder="Search gadgets..."
            className="w-full bg-gray-700 text-sm rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-aura-blue text-white placeholder-gray-400"
          />
          <Search className="absolute right-3 h-4 w-4 text-gray-400" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
           <button className="lg:hidden text-gray-300 hover:text-white">
            <Search className="h-6 w-6" />
          </button>

          <Link to="/cart" className="relative group cursor-pointer">
            <ShoppingCart className="h-6 w-6 text-gray-300 group-hover:text-aura-blue transition-colors" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-aura-blue text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          <button className="hidden md:block text-gray-300 hover:text-aura-blue transition-colors">
            <User className="h-6 w-6" />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-aura-charcoal border-t border-gray-700">
          <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-aura-blue font-medium block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href="#" className="text-gray-300 hover:text-aura-blue font-medium block">Account</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;