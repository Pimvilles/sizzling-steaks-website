import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Facebook, Instagram } from 'lucide-react';
import logoPlaceholder from '../assets/logo-placeholder.png';
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  // Update cart items count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(cart.reduce((total: number, item: any) => total + item.quantity, 0));
    };

    // Initial count
    updateCartCount();

    // Listen for storage events (when cart is updated)
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-black bg-opacity-80'}`}>
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="z-10">
          <img src={logoPlaceholder} alt="Steaks & Shakes" className="h-12 md:h-16" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-sns-gold">Home</Link>
          <Link to="/about" className="text-white hover:text-sns-gold">About Us</Link>
          <Link to="/menu" className="text-white hover:text-sns-gold">Our Menu</Link>
          <Link to="/gallery" className="text-white hover:text-sns-gold">Gallery</Link>
          <Link to="/deals" className="text-white hover:text-sns-gold">Online Deals</Link>
          <Link to="/contact" className="text-white hover:text-sns-gold">Contact</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Social Icons */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sns-gold">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sns-gold">
            <Instagram size={20} />
          </a>

          {/* Order Now Button */}
          <Link to="/order-online" className="btn-primary">
            Order Now
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative text-white hover:text-sns-orange">
            <ShoppingCart size={24} />
            {cartItems > 0 && <span className="absolute -top-2 -right-2 bg-sns-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>}
          </Link>

          {/* Auth Link */}
          <Link to="/login" className="text-white hover:text-sns-gold">
            Sign In
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          {/* Cart Icon - Mobile */}
          <Link to="/cart" className="relative text-white hover:text-sns-orange">
            <ShoppingCart size={24} />
            {cartItems > 0 && <span className="absolute -top-2 -right-2 bg-sns-orange text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>}
          </Link>
          
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-sns-gold">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-sns-gold">About Us</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-sns-gold">Our Menu</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-sns-gold">Gallery</Link>
          <Link to="/deals" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-sns-gold">Online Deals</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-sns-gold">Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="text-white text-xl hover:text-sns-gold">Sign In</Link>
          
          <Link to="/order-online" onClick={() => setIsOpen(false)} className="btn-primary mt-4">
            Order Now
          </Link>
          
          <div className="flex space-x-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sns-gold">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sns-gold">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </nav>
    </header>;
};
export default Navigation;