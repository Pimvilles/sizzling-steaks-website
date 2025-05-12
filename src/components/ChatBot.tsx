
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
      text: "Hi there! 👋 Welcome to Steaks & Shakes. How can I help you today?",
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
    
    if (lowerMessage.includes('menu') || lowerMessage.includes('eat') || lowerMessage.includes('food')) {
      return "You can check our full menu by clicking on 'Our Menu' in the navigation. We have delicious steak burgers, chicken burgers, and amazing shakes!";
    }
    
    if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('close')) {
      return "We're open daily from 10:00 AM to 10:00 PM.";
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return "We're located at 120 General Hertzog Road, Three Rivers, Vereeniging.";
    }
    
    if (lowerMessage.includes('delivery') || lowerMessage.includes('deliver')) {
      return "Yes, we offer delivery! Delivery fee is R15 for Sonlandpark and R20 for Waldrift/Unitas/Arcon Park. You can also order through Uber Eats or Mr D.";
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello there! How can I help you today?";
    }
    
    if (lowerMessage.includes('thanks') || lowerMessage.includes('thank you')) {
      return "You're welcome! Is there anything else you'd like to know?";
    }
    
    return "I'm not sure I understand. Can you please rephrase your question? You can ask me about our menu, hours, location, or delivery options.";
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
            <h3 className="font-semibold">Steaks & Shakes Assistant</h3>
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
