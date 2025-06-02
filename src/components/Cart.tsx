
import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemsCount } = useCart();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    const phoneNumber = '+256789572007';
    const itemsList = cartItems.map(item => 
      `${item.name} (Qty: ${item.quantity}) - UGX ${parseInt(item.price.replace(/[^\d]/g, '')).toLocaleString()}`
    ).join('\n');
    const total = getCartTotal().toLocaleString();
    const message = `Hello! I would like to order the following items:\n\n${itemsList}\n\nTotal: UGX ${total}`;
    const url = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-24 md:top-28 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        aria-label="Open cart"
      >
        <ShoppingCart size={24} />
        {getCartItemsCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {getCartItemsCount()}
          </span>
        )}
      </button>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400&h=400&fit=crop";
                          }}
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{item.name}</h3>
                          <p className="text-blue-600 font-semibold">{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 rounded"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-red-100 text-red-600 rounded"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold text-blue-600">
                      UGX {getCartTotal().toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    Checkout via WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full border border-gray-300 text-gray-600 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
