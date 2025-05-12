
import { MenuItem } from '../components/MenuItemCard';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  itemTotal: number;
}

// Load cart from localStorage
export const loadCart = (): CartItem[] => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

// Save cart to localStorage
export const saveCart = (cart: CartItem[]): void => {
  localStorage.setItem('cart', JSON.stringify(cart));
  // Dispatch event so other components can update
  window.dispatchEvent(new Event('storage'));
  window.dispatchEvent(new Event('cartUpdated'));
};

// Add item to cart
export const addToCart = (item: MenuItem, size?: string): void => {
  const cart = loadCart();
  
  // Get price based on size
  let price = item.price;
  if (size && item.sizeOptions) {
    const sizeOption = item.sizeOptions.find(option => option.size === size);
    if (sizeOption) {
      price = sizeOption.price;
    }
  }

  // Check if item already exists in cart with same size
  const existingItemIndex = cart.findIndex(
    cartItem => cartItem.id === item.id && cartItem.size === size
  );

  if (existingItemIndex !== -1) {
    // Update quantity if item exists
    cart[existingItemIndex].quantity += 1;
    cart[existingItemIndex].itemTotal = cart[existingItemIndex].quantity * cart[existingItemIndex].price;
  } else {
    // Add new item if it doesn't exist
    cart.push({
      id: item.id,
      name: item.name,
      price: price,
      image: item.image,
      quantity: 1,
      size: size,
      itemTotal: price
    });
  }

  saveCart(cart);
};

// Update item quantity
export const updateCartItemQuantity = (itemId: number, size: string | undefined, quantity: number): void => {
  const cart = loadCart();
  
  const itemIndex = cart.findIndex(
    cartItem => cartItem.id === itemId && cartItem.size === size
  );

  if (itemIndex !== -1) {
    if (quantity <= 0) {
      // Remove item if quantity is 0 or negative
      cart.splice(itemIndex, 1);
    } else {
      // Update quantity
      cart[itemIndex].quantity = quantity;
      cart[itemIndex].itemTotal = cart[itemIndex].quantity * cart[itemIndex].price;
    }
    
    saveCart(cart);
  }
};

// Remove item from cart
export const removeFromCart = (itemId: number, size: string | undefined): void => {
  const cart = loadCart();
  
  const updatedCart = cart.filter(
    cartItem => !(cartItem.id === itemId && cartItem.size === size)
  );
  
  saveCart(updatedCart);
};

// Clear entire cart
export const clearCart = (): void => {
  saveCart([]);
};

// Calculate cart total
export const calculateCartTotal = (): number => {
  const cart = loadCart();
  return cart.reduce((total, item) => total + item.itemTotal, 0);
};

// Calculate delivery fee
export const calculateDeliveryFee = (area: string): number => {
  switch (area.toLowerCase()) {
    case 'sonlandpark':
      return 15;
    case 'waldrift':
    case 'unitas':
    case 'arcon park':
      return 20;
    default:
      return 0; // No delivery fee for pickup
  }
};

// Calculate total items in cart
export const calculateCartItemsCount = (): number => {
  const cart = loadCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
};
