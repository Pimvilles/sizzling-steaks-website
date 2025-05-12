
import React from 'react';
import VideoHero from '../components/VideoHero';
import PromoSlider from '../components/PromoSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import NewsletterSignup from '../components/NewsletterSignup';

// Placeholder video URL - replace with actual URL later
const placeholderVideoUrl = "https://assets.mixkit.co/videos/preview/mixkit-cooking-meat-on-a-flaming-grill-27994-large.mp4";

// Placeholder promotions data
const promotionsData = [
  {
    id: 1,
    title: "Burger & Shake Combo",
    description: "Get a classic burger and shake combo for just R80. Available Monday to Thursday.",
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/deals"
  },
  {
    id: 2,
    title: "Family Meal Deal",
    description: "Feed the whole family with our special meal deal. 4 burgers, 4 sides, and 4 drinks for R350.",
    imageUrl: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    link: "/deals"
  },
  {
    id: 3,
    title: "Double Trouble Tuesday",
    description: "Buy one burger, get another at half price every Tuesday!",
    imageUrl: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80",
    link: "/deals"
  }
];

// Placeholder testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Mark Johnson",
    rating: 5,
    text: "Steaks & Shakes has the best burgers in the Vaal! The patties are always juicy and the service is amazing."
  },
  {
    id: 2,
    name: "Sarah Williams",
    rating: 5,
    text: "The milkshakes here are incredible. So thick and delicious! My kids love the Shaking Fizzers too."
  },
  {
    id: 3,
    name: "David Thomas",
    rating: 4,
    text: "Great place for family dinners. We love their double steakburgers and the friendly staff."
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <VideoHero
        videoSrc={placeholderVideoUrl}
        title="Steaks & Shakes"
        subtitle="The Best Burger In The Vaal"
      />
      
      {/* Promotions Section */}
      <section className="bg-white">
        <div className="container-custom py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Special Offers & Deals</h2>
        </div>
        <PromoSlider promotions={promotionsData} />
      </section>
      
      {/* Featured Products Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Famous Burgers</h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Handcrafted burgers made with the freshest ingredients and served with a side of happiness.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" 
                  alt="Classic Steakburger" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Classic Steakburger</h3>
                <p className="text-sns-orange font-bold mb-4">R80.00</p>
                <a href="/menu" className="btn-primary inline-block">View Menu</a>
              </div>
            </div>
            
            {/* Featured Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80" 
                  alt="Double Trouble Burger" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Double Trouble Burger</h3>
                <p className="text-sns-orange font-bold mb-4">R110.00</p>
                <a href="/menu" className="btn-primary inline-block">View Menu</a>
              </div>
            </div>
            
            {/* Featured Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Cheese Deluxe Burger" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-2">Cheese Deluxe Burger</h3>
                <p className="text-sns-orange font-bold mb-4">R95.00</p>
                <a href="/menu" className="btn-primary inline-block">View Menu</a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/menu" className="btn-secondary text-lg">Explore Full Menu</a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialSlider testimonials={testimonialsData} />
      
      {/* Delivery Options Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Order Delivery</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            {/* Uber Eats */}
            <a 
              href="https://www.ubereats.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-lg flex items-center justify-center w-full md:w-64 hover:bg-gray-800 transition-colors"
            >
              <span className="font-bold text-lg">Order on Uber Eats</span>
            </a>
            
            {/* Mr D */}
            <a 
              href="https://www.mrdfood.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-sns-orange text-white px-8 py-4 rounded-lg flex items-center justify-center w-full md:w-64 hover:bg-orange-600 transition-colors"
            >
              <span className="font-bold text-lg">Order on Mr D</span>
            </a>
          </div>
          
          <p className="mt-8 text-center text-gray-600">
            Delivery fees: R15 for Sonlandpark, R20 for Waldrift/Unitas/Arcon Park
          </p>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;
