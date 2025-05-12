
import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would normally send the data to your backend
    console.log('Subscribing email:', email);
    
    // Simulate success
    setSubmitted(true);
    setEmail('');
    
    // Reset submission state after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-sns-black py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get Exclusive Deals</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter to receive special offers, new promotions, and updates!
          </p>
          
          {submitted ? (
            <div className="bg-green-600 text-white p-4 rounded-lg animate-fade-in">
              Thanks for subscribing! You'll receive our next newsletter.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="flex-1 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-sns-orange"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-1 text-left">{error}</p>}
              </div>
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          )}
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails from us. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
