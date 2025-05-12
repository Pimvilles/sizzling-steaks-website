
import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! 👋 Welcome to Steaks & Shakes. I'm Devon, your virtual assistant. How can I help you today?",
      isBot: true
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = handleBotResponse(inputMessage);
      setMessages(prevMessages => [
        ...prevMessages, 
        {
          id: prevMessages.length + 1,
          text: botResponse,
          isBot: true
        }
      ]);
    }, 1000);
  };

  const handleBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    // Greeting patterns
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! 😊 Welcome to Steaks & Shakes, home of The Best Burger In The Vaal! How can I assist you today?";
    }
    
    // Menu related queries
    if (lowerMessage.includes('menu') || lowerMessage.includes('eat') || lowerMessage.includes('food')) {
      return "You can check our full menu by clicking on 'Our Menu' in the navigation. We have delicious steak burgers, chicken burgers, and amazing shakes! Would you like to know about our current deals too?";
    }
    
    // Hours related queries
    if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('close')) {
      return "We're open daily from 10:00 AM to 10:00 PM. Is there anything specific you'd like to order today?";
    }
    
    // Location related queries
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return "We're located at 120 General Hertzog Road, Three Rivers, Vereeniging. You can find directions on our Contact page. We have ample parking available!";
    }
    
    // Delivery related queries
    if (lowerMessage.includes('delivery') || lowerMessage.includes('deliver')) {
      return "Yes, we offer delivery! Delivery fee is R15 for Sonlandpark and R20 for Waldrift/Unitas/Arcon Park. You can also order through Uber Eats or Mr D. Would you like to place an order now?";
    }
    
    // Online ordering
    if (lowerMessage.includes('order') || lowerMessage.includes('online')) {
      return "You can order directly from our website by browsing the menu and adding items to your cart. We also partner with Uber Eats and Mr D if you prefer those platforms. Our delivery zones include Sonlandpark (R15 fee) and Waldrift/Unitas/Arcon Park (R20 fee).";
    }
    
    // Payment methods
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('card')) {
      return "We accept various payment methods including credit/debit cards via PayFast, as well as cash on delivery. All online payments are secure and encrypted.";
    }
    
    // Promotions and deals
    if (lowerMessage.includes('deal') || lowerMessage.includes('promo') || lowerMessage.includes('special')) {
      return "Check out our 'Online Deals' page for current specials and promotions! You can also sign up for our newsletter to receive exclusive offers directly to your inbox. Would you like me to tell you how to sign up?";
    }
    
    // About the restaurant
    if (lowerMessage.includes('about') || lowerMessage.includes('story') || lowerMessage.includes('history')) {
      return "Steaks & Shakes is a family-friendly restaurant passionate about serving the best burgers in the Vaal! We focus on quality ingredients and creating a welcoming atmosphere for all our guests. You can learn more on our 'About Us' page.";
    }
    
    // Vegetarian options
    if (lowerMessage.includes('vegetarian') || lowerMessage.includes('vegan')) {
      return "We do offer some vegetarian options on our menu. Please check our menu page or ask our staff for recommendations based on your dietary preferences.";
    }
    
    // Dine-in queries
    if (lowerMessage.includes('dine') || lowerMessage.includes('eat in') || lowerMessage.includes('sit')) {
      return "Yes, we offer dine-in service! Our restaurant has a welcoming atmosphere perfect for families, friends, or even a casual date. No reservations needed - just come on in!";
    }
    
    // Reservation queries
    if (lowerMessage.includes('reservation') || lowerMessage.includes('book') || lowerMessage.includes('reserve')) {
      return "We generally don't require reservations as we can accommodate walk-ins. However, for large groups, you can contact us via WhatsApp at 079 790 7083 to make special arrangements.";
    }
    
    // Parking queries
    if (lowerMessage.includes('parking') || lowerMessage.includes('park')) {
      return "Yes, we have ample parking available right outside our restaurant for your convenience.";
    }
    
    // Job inquiries
    if (lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('hiring') || lowerMessage.includes('work')) {
      return "For job inquiries, please contact us directly via WhatsApp at 079 790 7083 or use the contact form on our website. We're always looking for enthusiastic team members!";
    }
    
    // Matchmaking game
    if (lowerMessage.includes('game') || lowerMessage.includes('match') || lowerMessage.includes('play')) {
      return "Our Matchmaking Game is a fun way to win discounts and prizes! Simply match icons like burgers and shakes to reveal your reward. You can play it on our website under the Games section. Ready to test your luck?";
    }
    
    // Gratitude responses
    if (lowerMessage.includes('thanks') || lowerMessage.includes('thank you')) {
      return "You're welcome! I'm always here to help. Is there anything else you'd like to know about Steaks & Shakes?";
    }
    
    // Default response for unknown queries
    return "I'm not sure I understand. As Devon, I can help you with information about our menu, location, hours, delivery options, or special deals. Is there something specific you're looking for?";
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-sns-orange text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-all z-50 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat Window */}
      <div 
        className={`fixed bottom-6 right-6 w-[350px] max-w-[90vw] bg-white rounded-lg shadow-xl overflow-hidden z-50 transition-transform duration-300 ${
          isOpen ? 'transform-none' : 'transform translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-sns-black text-white p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageCircle size={20} />
            <h3 className="font-semibold">Devon - Steaks & Shakes Assistant</h3>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-sns-orange"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Messages Container */}
        <div className="h-[350px] overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  message.isBot 
                    ? 'bg-gray-200 text-gray-800' 
                    : 'bg-sns-orange text-white'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-3 border-t flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-sns-orange"
          />
          <button
            type="submit"
            className="bg-sns-orange text-white p-2 rounded-r-md hover:bg-orange-600"
            aria-label="Send message"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
