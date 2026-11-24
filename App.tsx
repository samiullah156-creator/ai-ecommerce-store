import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import ScrollToTop from './components/ScrollToTop';

// Helper to scroll top on route change
const ScrollToTopWrapper: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });
    return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <ToastProvider>
        <Router>
          <ScrollToTopWrapper />
          <div className="min-h-screen flex flex-col font-sans bg-aura-white">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              {/* Fallbacks */}
              <Route path="/about" element={<Home />} />
              <Route path="/contact" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </ToastProvider>
    </CartProvider>
  );
};

export default App;