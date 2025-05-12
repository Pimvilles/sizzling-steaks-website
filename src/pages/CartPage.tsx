
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { ShoppingCart, Trash, Plus, Minus } from "lucide-react";
import { 
  CartItem, 
  loadCart, 
  updateCartItemQuantity, 
  removeFromCart, 
  clearCart,
  calculateCartTotal,
  calculateDeliveryFee
} from '../utils/cartUtils';

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [deliveryArea, setDeliveryArea] = useState<string>('');
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');

  // Load cart on initial render
  useEffect(() => {
    const updateCart = () => {
      const cartItems = loadCart();
      setCart(cartItems);
    };

    // Initial load
    updateCart();

    // Listen for updates
    window.addEventListener('cartUpdated', updateCart);
    window.addEventListener('storage', updateCart);

    return () => {
      window.removeEventListener('cartUpdated', updateCart);
      window.removeEventListener('storage', updateCart);
    };
  }, []);

  // Update delivery fee when area changes
  useEffect(() => {
    if (orderType === 'delivery' && deliveryArea) {
      const fee = calculateDeliveryFee(deliveryArea);
      setDeliveryFee(fee);
    } else {
      setDeliveryFee(0);
    }
  }, [deliveryArea, orderType]);

  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    updateCartItemQuantity(item.id, item.size, newQuantity);
  };

  const handleRemoveItem = (item: CartItem) => {
    removeFromCart(item.id, item.size);
    toast.success(`${item.name} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  const handleCheckout = () => {
    // This would integrate with a payment processor in a real app
    toast.success("Proceeding to checkout...");
    // Future implementation: redirect to checkout page or open modal
  };

  const subtotal = calculateCartTotal();
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="container-custom section-padding pt-32 min-h-screen">
        <div className="text-center max-w-xl mx-auto py-12">
          <ShoppingCart size={64} className="mx-auto text-gray-400 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link to="/order-online">
            <Button className="bg-sns-orange hover:bg-orange-600">Start Ordering</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom section-padding pt-32 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={`${item.id}-${item.size}`}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-12 h-12 object-cover rounded-md hidden sm:block" 
                          />
                          <span>{item.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{item.size || 'Regular'}</TableCell>
                      <TableCell>R{item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button 
                            variant="outline" 
                            size="icon"
                            onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>R{item.itemTotal.toFixed(2)}</TableCell>
                      <TableCell>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => handleRemoveItem(item)}
                        >
                          <Trash size={16} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                onClick={handleClearCart}
                className="ml-auto"
              >
                Clear Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Order Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>R{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex gap-4 items-center">
                  <span className="font-medium">Order Type:</span>
                  <div className="flex gap-2">
                    <Button 
                      variant={orderType === 'pickup' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setOrderType('pickup')}
                    >
                      Pickup
                    </Button>
                    <Button 
                      variant={orderType === 'delivery' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setOrderType('delivery')}
                    >
                      Delivery
                    </Button>
                  </div>
                </div>
                
                {orderType === 'delivery' && (
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Delivery Area</label>
                    <select
                      className="w-full p-2 border rounded"
                      value={deliveryArea}
                      onChange={(e) => setDeliveryArea(e.target.value)}
                    >
                      <option value="">Select Area</option>
                      <option value="sonlandpark">Sonlandpark - R15</option>
                      <option value="waldrift">Waldrift - R20</option>
                      <option value="unitas">Unitas - R20</option>
                      <option value="arcon park">Arcon Park - R20</option>
                    </select>
                    
                    {deliveryFee > 0 && (
                      <div className="flex justify-between mt-2">
                        <span>Delivery Fee</span>
                        <span>R{deliveryFee.toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="border-t pt-2">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span>R{total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-sns-orange hover:bg-orange-600"
                onClick={handleCheckout}
                disabled={orderType === 'delivery' && !deliveryArea}
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
