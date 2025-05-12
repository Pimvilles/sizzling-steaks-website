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

// Menu items data (authentic Steaks & Shakes menu)
const menuItems: MenuItem[] = [
  // Steak Burgers
  {
    id: 1,
    name: "S & S Burger",
    description: "Our signature steak burger with bacon and cheese. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    category: "Steak Burgers"
  },
  {
    id: 2,
    name: "Texas BBQ",
    description: "Steak burger with bacon, cheese and Texas BBQ sauce. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80",
    category: "Steak Burgers"
  },
  {
    id: 3,
    name: "Smokey BBQ",
    description: "Steak burger with bacon, cheese and smokey BBQ sauce. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Steak Burgers"
  },
  {
    id: 4,
    name: "Mushroom Steak",
    description: "Steak burger with bacon, cheese and mushroom sauce. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "Steak Burgers"
  },
  {
    id: 5,
    name: "Cheddar Melt Steak",
    description: "Steak burger with bacon and cheddar cheese. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Steak Burgers"
  },
  {
    id: 6,
    name: "Pepper Steak",
    description: "Steak burger with bacon, cheese and pepper sauce. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Steak Burgers"
  },
  {
    id: 7,
    name: "Pickle Me Up",
    description: "Steak burger with bacon, cheese and pickle. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
    category: "Steak Burgers"
  },
  {
    id: 8,
    name: "Sweet Chilli 🌶️",
    description: "Spicy steak burger with bacon, cheese and sweet chilli sauce. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=722&q=80",
    category: "Steak Burgers"
  },
  {
    id: 9,
    name: "Shotgun 🌶️",
    description: "Extra spicy steak burger with bacon and cheese. Served with chips.",
    price: 90,
    sizeOptions: [
      { size: "Medium", price: 90 },
      { size: "Large", price: 100 }
    ],
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Steak Burgers"
  },
  {
    id: 10,
    name: "Chilli Cheese Steak 🌶️",
    description: "Spicy steak burger with bacon, cheese and chilli. Served with chips.",
    price: 100,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80",
    category: "Steak Burgers"
  },
  {
    id: 11,
    name: "The Bomb 🌶️🌶️",
    description: "Double-spicy steak burger with bacon and cheese. Served with chips.",
    price: 100,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    category: "Steak Burgers"
  },
  
  // Chicken Burgers
  {
    id: 12,
    name: "Chicken Plain",
    description: "Classic chicken burger with lettuce and mayo. Served with chips.",
    price: 90,
    image: "https://images.unsplash.com/photo-1615297216301-7de3143d5a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Chicken Burgers"
  },
  {
    id: 13,
    name: "Spicy Chicken 🌶️",
    description: "Spicy chicken burger with lettuce and mayo. Served with chips.",
    price: 90,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Chicken Burgers"
  },
  {
    id: 14,
    name: "Chilli Cheese Chicken 🌶️",
    description: "Spicy chicken burger with chilli and cheese. Served with chips.",
    price: 100,
    image: "https://images.unsplash.com/photo-1605402877094-c48ceaec2599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Chicken Burgers"
  },
  {
    id: 15,
    name: "The Bomb Chicken",
    description: "Extra spicy chicken burger with special sauce. Served with chips.",
    price: 100,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Chicken Burgers"
  },
  
  // Kiddies Menu
  {
    id: 16,
    name: "Kiddies Burger",
    description: "Kid-sized burger served with chips.",
    price: 50,
    image: "https://images.unsplash.com/photo-1619881590738-a111aa7c7ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Kiddies Menu"
  },
  {
    id: 17,
    name: "Chicken Nuggets",
    description: "Crispy chicken nuggets served with chips.",
    price: 50,
    image: "https://images.unsplash.com/photo-1562967915-6ba607ff7d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    category: "Kiddies Menu"
  },
  {
    id: 18,
    name: "Chicken Strips",
    description: "Tender chicken strips served with chips.",
    price: 50,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    category: "Kiddies Menu"
  },
  {
    id: 19,
    name: "Chicken Pops",
    description: "Bite-sized chicken pops served with chips.",
    price: 50,
    image: "https://images.unsplash.com/photo-1562967914-01efa7e87a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    category: "Kiddies Menu"
  },
  
  // Finger Foods
  {
    id: 20,
    name: "6 Wings and Chips",
    description: "Six chicken wings served with chips.",
    price: 70,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80",
    category: "Finger Foods"
  },
  {
    id: 21,
    name: "Chilli Cheese Fries",
    description: "Crispy fries topped with chilli and cheese.",
    price: 45,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Finger Foods"
  },
  {
    id: 22,
    name: "Crumbed Mushrooms",
    description: "Crispy crumbed mushrooms.",
    price: 30,
    image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    category: "Finger Foods"
  },
  {
    id: 23,
    name: "Onion Rings",
    description: "Golden fried onion rings.",
    price: 30,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "Finger Foods"
  },
  {
    id: 24,
    name: "Chips",
    description: "Golden crispy chips.",
    price: 30,
    sizeOptions: [
      { size: "Small", price: 30 },
      { size: "Medium", price: 40 }
    ],
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e70031?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    category: "Finger Foods"
  },
  {
    id: 25,
    name: "Toastie",
    description: "Choose from Bacon, Cheese, or Egg filling.",
    price: 45,
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1054&q=80",
    category: "Finger Foods"
  },
  
  // Shaking Fizzers
  {
    id: 26,
    name: "Passion Fruit Fizzer",
    description: "Refreshing passion fruit fizzy drink.",
    price: 30,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1257&q=80",
    category: "Shaking Fizzers"
  },
  {
    id: 27,
    name: "Watermelon Fizzer",
    description: "Refreshing watermelon fizzy drink.",
    price: 30,
    image: "https://images.unsplash.com/photo-1588929473475-30ebb05f61b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    category: "Shaking Fizzers"
  },
  {
    id: 28,
    name: "Blueberry Fizzer",
    description: "Refreshing blueberry fizzy drink.",
    price: 30,
    image: "https://images.unsplash.com/photo-1560508180-03f285f67ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Shaking Fizzers"
  },
  {
    id: 29,
    name: "Cola Tonic Fizzer",
    description: "Refreshing cola tonic fizzy drink.",
    price: 30,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Shaking Fizzers"
  },
  {
    id: 30,
    name: "Lime Fizzer",
    description: "Refreshing lime fizzy drink.",
    price: 30,
    image: "https://images.unsplash.com/photo-1619257103384-a5e469b01d83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Shaking Fizzers"
  },
  {
    id: 31,
    name: "Rose Fizzer",
    description: "Refreshing rose-flavored fizzy drink.",
    price: 30,
    image: "https://images.unsplash.com/photo-1629203432180-71e9b18d855c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    category: "Shaking Fizzers"
  },
  
  // S&S Shakes
  {
    id: 32,
    name: "Cookies & Cream",
    description: "Rich shake with cookies and cream. Choose strawberry or chocolate base.",
    price: 40,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=698&q=80",
    category: "S&S Shakes"
  },
  {
    id: 33,
    name: "Milo Shake",
    description: "Rich shake made with Milo chocolate malt.",
    price: 40,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "S&S Shakes"
  },
  {
    id: 34,
    name: "Chocachino Shake",
    description: "Coffee-infused chocolate shake.",
    price: 40,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "S&S Shakes"
  },
  {
    id: 35,
    name: "Kit-Kat Shake",
    description: "Creamy shake with Kit-Kat pieces.",
    price: 40,
    image: "https://images.unsplash.com/photo-1586917079593-0722b4d836b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "S&S Shakes"
  },
  {
    id: 36,
    name: "Blueberry Cheesecake Shake",
    description: "Creamy shake with blueberry cheesecake flavor.",
    price: 40,
    image: "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "S&S Shakes"
  },
  
  // Milkshakes
  {
    id: 37,
    name: "Strawberry Shake",
    description: "Classic strawberry milkshake.",
    price: 35,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Milkshakes"
  },
  {
    id: 38,
    name: "Chocolate Shake",
    description: "Rich chocolate milkshake.",
    price: 35,
    image: "https://images.unsplash.com/photo-1605613866330-e469430af9b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Milkshakes"
  },
  {
    id: 39,
    name: "Bubblegum Shake",
    description: "Sweet bubblegum flavored milkshake.",
    price: 35,
    image: "https://images.unsplash.com/photo-1584598892391-a92ea9af8523?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Milkshakes"
  },
  {
    id: 40,
    name: "Banana Shake",
    description: "Classic banana milkshake.",
    price: 35,
    image: "https://images.unsplash.com/photo-1553787499-6f9133152484?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Milkshakes"
  },
  {
    id: 41,
    name: "Lime Shake",
    description: "Refreshing lime milkshake.",
    price: 35,
    image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    category: "Milkshakes"
  },
  {
    id: 42,
    name: "Salted Caramel Shake",
    description: "Sweet and salty caramel milkshake.",
    price: 35,
    image: "https://images.unsplash.com/photo-1603903631918-a6b65462fe01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    category: "Milkshakes"
  },
  {
    id: 43,
    name: "Rum & Raisin Shake",
    description: "Classic rum and raisin flavored milkshake.",
    price: 35,
    image: "https://images.unsplash.com/photo-1626198226928-95228a815c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
