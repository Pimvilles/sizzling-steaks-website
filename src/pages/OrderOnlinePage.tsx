
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DeliveryService {
  name: string;
  logo: string;
  description: string;
  link: string;
}

const deliveryServices: DeliveryService[] = [
  {
    name: "Uber Eats",
    logo: "https://images.unsplash.com/placeholder.svg", // Replace with actual logo
    description: "Fast delivery from Uber Eats, typically within 30-45 minutes.",
    link: "https://www.ubereats.com"
  },
  {
    name: "Mr D",
    logo: "https://images.unsplash.com/placeholder.svg", // Replace with actual logo
    description: "Reliable delivery service with live order tracking.",
    link: "https://www.mrdfood.com"
  }
];

// Delivery areas and fees
const deliveryAreas = [
  { area: "Sonlandpark", fee: 15 },
  { area: "Waldrift", fee: 20 },
  { area: "Unitas", fee: 20 },
  { area: "Arcon Park", fee: 20 },
  { area: "Three Rivers", fee: 15 },
  { area: "Vereeniging Central", fee: 25 }
];

const OrderOnlinePage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-sns-orange text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Order Online</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Delicious food delivered right to your door
          </p>
        </div>
      </section>
      
      {/* Order Options */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          {/* Direct Order */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Order Direct from Us</h2>
            <p className="text-xl mb-8">
              Skip the fees and order directly through our website for pickup or delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="bg-sns-orange hover:bg-orange-600">
                  Browse Our Menu
                </Button>
              </Link>
              <Link to="/cart">
                <Button size="lg" variant="outline" className="border-sns-orange text-sns-orange hover:bg-orange-50">
                  View Your Cart
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Delivery Services */}
          <h2 className="text-3xl font-bold mb-8 text-center">Or Order Through Our Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliveryServices.map((service) => (
              <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-24 h-24 mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <img 
                      src={service.logo} 
                      alt={service.name} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <a 
                    href={service.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-sns-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
                  >
                    Order via {service.name}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Delivery Information */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Delivery Information</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Delivery Areas & Fees */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Delivery Areas & Fees</h3>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-sns-black text-white">
                    <tr>
                      <th className="py-3 px-6 text-left">Area</th>
                      <th className="py-3 px-6 text-right">Delivery Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deliveryAreas.map((item, index) => (
                      <tr key={item.area} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-6">{item.area}</td>
                        <td className="py-3 px-6 text-right font-medium">R{item.fee.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Delivery Policies */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Delivery Policies</h3>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Delivery Hours</h4>
                  <p>We deliver during our normal operating hours:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Monday - Thursday: 10:00 AM - 8:30 PM</li>
                    <li>Friday - Saturday: 10:00 AM - 9:30 PM</li>
                    <li>Sunday: 11:00 AM - 7:30 PM</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Delivery Time</h4>
                  <p>Average delivery time is 30-45 minutes depending on your location and current order volume.</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Minimum Order</h4>
                  <p>Minimum order for delivery is R80 excluding delivery fee.</p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Payment Methods</h4>
                  <p>We accept cash on delivery, credit/debit cards, and mobile payments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-sns-orange text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our menu and place your order now for a delicious meal delivered to your doorstep.
          </p>
          <Link to="/menu">
            <Button size="lg" className="bg-white text-sns-orange hover:bg-gray-100">
              View Our Menu
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OrderOnlinePage;
