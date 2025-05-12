
import React, { useState } from 'react';
import MenuItemCard, { MenuItem } from '../components/MenuItemCard';
import { addToCart } from '../utils/cartUtils';
import { toast } from 'sonner';

// Menu categories
const categories = [
  "All",
  "Steak Burgers",
  "Chicken Burgers",
  "Kiddies Menu",
  "Finger Foods",
  "Shaking Fizzers",
  "S&S Shakes",
  "Milkshakes"
];

// Menu items data (placeholder)
const menuItems: MenuItem[] = [
  // Steak Burgers
  {
    id: 1,
    name: "Classic Steakburger",
    description: "Our signature beef patty with lettuce, tomato, and our special sauce.",
    price: 80,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    category: "Steak Burgers"
  },
  {
    id: 2,
    name: "Double Trouble",
    description: "Two juicy beef patties stacked with cheese, bacon, and all the fixings.",
    price: 110,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80",
    category: "Steak Burgers"
  },
  {
    id: 3,
    name: "Cheese Deluxe",
    description: "Beef patty topped with three types of cheese and caramelized onions.",
    price: 95,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Steak Burgers"
  },
  
  // Chicken Burgers
  {
    id: 4,
    name: "Classic Chicken",
    description: "Grilled or crispy chicken breast with lettuce, tomato, and mayo.",
    price: 75,
    sizeOptions: [
      { size: "Regular", price: 75 },
      { size: "Large", price: 90 }
    ],
    image: "https://images.unsplash.com/photo-1615297216301-7de3143d5a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Chicken Burgers"
  },
  {
    id: 5,
    name: "Spicy Buffalo",
    description: "Crispy chicken coated in buffalo sauce with blue cheese dressing.",
    price: 85,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Chicken Burgers"
  },
  
  // Kiddies Menu
  {
    id: 6,
    name: "Mini Burger",
    description: "Kid-sized burger with cheese and a small side of fries.",
    price: 55,
    image: "https://images.unsplash.com/photo-1619881590738-a111aa7c7ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Kiddies Menu"
  },
  {
    id: 7,
    name: "Chicken Strips",
    description: "Tender chicken strips with a choice of dipping sauce.",
    price: 60,
    image: "https://images.unsplash.com/photo-1562967915-6ba607ff7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    category: "Kiddies Menu"
  },
  
  // Finger Foods
  {
    id: 8,
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, bacon bits, and sour cream.",
    price: 65,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Finger Foods"
  },
  {
    id: 9,
    name: "Onion Rings",
    description: "Golden fried onion rings with our signature dipping sauce.",
    price: 45,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Finger Foods"
  },
  
  // Shaking Fizzers
  {
    id: 10,
    name: "Classic Cola",
    description: "Our signature fizzy cola with a secret twist.",
    price: 30,
    sizeOptions: [
      { size: "Regular", price: 30 },
      { size: "Large", price: 40 }
    ],
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
    category: "Shaking Fizzers"
  },
  
  // S&S Shakes
  {
    id: 11,
    name: "Chocolate Delight",
    description: "Rich chocolate shake topped with whipped cream and chocolate chips.",
    price: 45,
    sizeOptions: [
      { size: "Regular", price: 45 },
      { size: "Large", price: 55 }
    ],
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80",
    category: "S&S Shakes"
  },
  
  // Milkshakes
  {
    id: 12,
    name: "Vanilla Dream",
    description: "Creamy vanilla milkshake made with premium ice cream.",
    price: 40,
    sizeOptions: [
      { size: "Regular", price: 40 },
      { size: "Large", price: 50 }
    ],
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Milkshakes"
  }
];

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter menu items based on active category and search query
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Handle add to cart
  const handleAddToCart = (item: MenuItem, size?: string) => {
    addToCart(item, size);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-sns-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Delicious burgers, shakes, and more, made fresh to order
          </p>
        </div>
      </section>
      
      {/* Menu Filters */}
      <section className="bg-white py-8 sticky top-20 z-30 shadow-md">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sns-orange"
            />
          </div>
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-sns-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Menu Items */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuItemCard 
                  key={item.id} 
                  item={item} 
                  addToCart={handleAddToCart} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your search or filter.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Promotions */}
      <section className="bg-sns-orange text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Get More For Less!</h2>
          <p className="text-xl mb-8">
            Check out our special deals and promotions for extra value.
          </p>
          <a href="/deals" className="bg-white text-sns-orange px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors">
            View Our Deals
          </a>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
