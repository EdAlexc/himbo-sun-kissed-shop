import { useState } from "react";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  color: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Beach Sunset Tee",
      price: 32,
      quantity: 2,
      image: "/placeholder.svg",
      size: "M",
      color: "Rose Quartz"
    },
    {
      id: "2",
      name: "Ocean Wave Hoodie",
      price: 68,
      quantity: 1,
      image: "/placeholder.svg",
      size: "L",
      color: "Serenity Blue"
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 75 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const proceedToCheckout = () => {
    // Integrate with Shopify checkout
    console.log("Proceeding to checkout with items:", cartItems);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-beach rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-white" />
          </div>
          <h1 className="heading-display mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button className="btn-hero">
            Start Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="heading-display mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-3xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gradient-beach rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="text-sm text-muted-foreground mb-3">
                      <p>Size: {item.size}</p>
                      <p>Color: {item.color}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium min-w-[2rem] text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">${item.price} each</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-sunset rounded-3xl p-6 text-white sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/20 pt-3">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={proceedToCheckout}
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold py-3 rounded-full"
              >
                Proceed to Checkout
              </Button>
              
              <p className="text-center text-sm text-white/80 mt-4">
                {shipping === 0 ? 'Free shipping included!' : 'Free shipping on orders over $75'}
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <h3 className="font-semibold mb-3">We Accept</h3>
                <div className="flex space-x-2">
                  <div className="bg-white/20 rounded px-2 py-1 text-xs">Visa</div>
                  <div className="bg-white/20 rounded px-2 py-1 text-xs">Mastercard</div>
                  <div className="bg-white/20 rounded px-2 py-1 text-xs">PayPal</div>
                  <div className="bg-white/20 rounded px-2 py-1 text-xs">Apple Pay</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;