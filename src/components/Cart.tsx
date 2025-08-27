import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { X, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal, isCartOpen, closeCart } = useCart();

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
    closeCart();
  };

  return (
    <>
      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/70 z-50" onClick={closeCart}>
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background text-foreground border-l border-border shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={closeCart}
                  className="p-2 hover:bg-white/10 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-border">
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
                          <h3 className="font-medium text-sm text-foreground">{item.name}</h3>
                          <p className="text-foreground font-semibold">{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white/10 rounded"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white/10 rounded"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 hover:bg-white/10 text-white rounded"
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
                <div className="border-t border-border p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-xl font-bold text-foreground">
                      UGX {getCartTotal().toLocaleString()}
                    </span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-white/10 text-white py-3 rounded-lg font-medium hover:bg-white/15 hover:shadow-lg transition-all duration-300 border border-white/20"
                  >
                    Checkout via WhatsApp
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full border border-border text-muted-foreground py-2 rounded-lg font-medium hover:bg-white/5 transition-all duration-300"
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
