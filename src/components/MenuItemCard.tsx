
import React from 'react';
import { ShoppingCart } from 'lucide-react';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  sizeOptions?: {
    size: string;
    price: number;
  }[];
  image: string;
  category: string;
}

interface MenuItemCardProps {
  item: MenuItem;
  addToCart: (item: MenuItem, size?: string) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, addToCart }) => {
  const [selectedSize, setSelectedSize] = React.useState(
    item.sizeOptions && item.sizeOptions.length > 0 ? item.sizeOptions[0].size : undefined
  );

  const getCurrentPrice = () => {
    if (!selectedSize || !item.sizeOptions) {
      return item.price;
    }
    
    const sizeOption = item.sizeOptions.find(option => option.size === selectedSize);
    return sizeOption ? sizeOption.price : item.price;
  };

  const handleAddToCart = () => {
    addToCart(item, selectedSize);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-sns-orange text-white px-2 py-1 text-sm font-bold">
          {item.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
        
        {/* Size Options */}
        {item.sizeOptions && item.sizeOptions.length > 0 && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Size:</label>
            <div className="flex gap-2">
              {item.sizeOptions.map((option) => (
                <button
                  key={option.size}
                  onClick={() => setSelectedSize(option.size)}
                  className={`px-3 py-1 text-sm border rounded-full transition-colors ${
                    selectedSize === option.size
                      ? 'bg-sns-black text-white border-sns-black'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-sns-black'
                  }`}
                >
                  {option.size}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-lg font-bold text-sns-black">
            R{getCurrentPrice().toFixed(2)}
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-sns-orange text-white flex items-center gap-2 px-3 py-2 rounded-md hover:bg-orange-600 transition-colors"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
