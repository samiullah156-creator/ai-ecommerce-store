import React from 'react';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, cartTotal } = useCart();

  const shippingCost = cartTotal > 500 ? 0 : 15.00;
  const taxRate = 0.08;
  const taxAmount = cartTotal * taxRate;
  const grandTotal = cartTotal + shippingCost + taxAmount;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="bg-gray-100 p-6 rounded-full mb-6">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-2xl font-heading font-bold text-aura-charcoal mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-md">Looks like you haven't added any cutting-edge gadgets to your cart yet.</p>
        <Link 
          to="/products" 
          className="bg-aura-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-colors inline-flex items-center"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-heading font-bold text-aura-charcoal mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items List */}
          <div className="flex-grow bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b text-sm font-semibold text-gray-500 uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>

            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <div key={item.id} className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-center">
                  {/* Product Info */}
                  <div className="col-span-1 md:col-span-6 flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-20 h-20 object-cover rounded-lg bg-gray-100 flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold text-aura-charcoal text-lg md:text-base">{item.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm">{item.category}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm flex items-center mt-2 md:hidden"
                      >
                        <Trash2 className="h-3 w-3 mr-1" /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-1 md:col-span-2 md:text-center text-gray-600 font-medium">
                    <span className="md:hidden text-gray-400 text-xs mr-2">Price:</span>
                    ${item.price.toFixed(2)}
                  </div>

                  {/* Quantity Controls */}
                  <div className="col-span-1 md:col-span-2 flex items-center md:justify-center">
                    <span className="md:hidden text-gray-400 text-xs mr-4">Quantity:</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 text-gray-600 transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  {/* Total & Remove */}
                  <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-center">
                     <span className="md:hidden text-gray-400 text-xs">Total:</span>
                     <div className="flex items-center space-x-4">
                        <span className="font-bold text-aura-charcoal">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors hidden md:block"
                          title="Remove Item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-heading font-bold text-aura-charcoal mb-6">Order Summary</h2>
              
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{shippingCost === 0 ? <span className="text-green-600 font-medium">Free</span> : `$${shippingCost.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Estimated Tax (8%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-aura-charcoal">Total</span>
                  <span className="font-bold text-2xl text-aura-blue">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="w-full bg-aura-blue hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2">
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                Secure checkout powered by AuraCart.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Cart;