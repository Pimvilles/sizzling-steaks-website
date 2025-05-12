
import React from 'react';
import { toast } from 'sonner';
import PromoSlider from '../components/PromoSlider';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Family Feast Deal",
    description: "4 Burgers, 4 Sides & 4 Drinks for only R349. Perfect for the whole family!",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    link: "/order-online"
  },
  {
    id: 2,
    title: "Student Special",
    description: "Show your student ID and get a burger, fries and drink for only R79",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    link: "/order-online"
  },
  {
    id: 3,
    title: "Free Milkshake Wednesday",
    description: "Get a free milkshake with any burger purchase every Wednesday",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    link: "/order-online"
  }
];

const specialDeals = [
  {
    id: 1,
    title: "Weekday Lunch Special",
    description: "Any burger, regular fries and drink for only R89.90. Available Monday to Friday, 11am to 3pm.",
    priceTag: "R89.90",
    dealCode: "LUNCH21"
  },
  {
    id: 2,
    title: "Double Up",
    description: "Add an extra patty to any burger for just R25.",
    priceTag: "R25",
    dealCode: "DOUBLE"
  },
  {
    id: 3,
    title: "Happy Hour Shakes",
    description: "All shakes half price between 2pm and 4pm daily.",
    priceTag: "50% OFF",
    dealCode: "HAPPY50"
  }
];

const OnlineDealsPage: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! You'll receive our exclusive deals soon.");
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-sns-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Online Deals</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get more bang for your buck with our limited-time offers
          </p>
        </div>
      </section>

      {/* Featured Promotions Slider */}
      <section className="bg-white py-8">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Promotions</h2>
          <PromoSlider promotions={promotions} />
        </div>
      </section>

      {/* Current Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Current Specials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialDeals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="bg-sns-orange text-white py-2 px-4 text-right font-bold">
                  <span>{deal.priceTag}</span>
                </div>
                <CardHeader>
                  <CardTitle>{deal.title}</CardTitle>
                  <CardDescription>Use code: <span className="font-bold text-sns-orange">{deal.dealCode}</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{deal.description}</p>
                  <Button className="w-full mt-4 bg-sns-orange hover:bg-orange-600">
                    Get This Deal
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-sns-orange text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Get Exclusive Deals Directly to Your Inbox</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be the first to know about our secret promotions and limited-time offers!
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white text-black w-full"
                required
              />
            </div>
            <Button type="submit" className="bg-black hover:bg-gray-800">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OnlineDealsPage;
