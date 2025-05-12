
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-sns-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The best burger in the Vaal since 2015
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Steaks & Shakes was born from a passion for great food and community. What started as a small family-run burger stand in 2015 has grown into the Vaal's favorite burger joint, serving thousands of happy customers every month.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey began when our founder, Mark, decided to turn his backyard burger recipe into something everyone could enjoy. Using only the freshest ingredients and perfecting our signature steakburger patty, we quickly became known for serving "The Best Burger In The Vaal."
              </p>
              <p className="text-gray-700">
                Today, we continue that tradition of quality and service, bringing smiles to our customers' faces one burger at a time.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1532635239-06e08db8f247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sns-orange text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on ingredients. From our freshly baked buns to our 100% pure beef patties, quality comes first in everything we do.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sns-orange text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold mb-3">Family</h3>
              <p className="text-gray-600">
                We're a family-owned business that treats our customers like family. We create a welcoming environment where everyone feels at home.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-shadow">
              <div className="text-sns-orange text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We're proud to be part of the Vaal community. We support local suppliers and give back through various community initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Mark Thompson - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-1">Mark Thompson</h3>
                <p className="text-sns-orange mb-3">Founder & Head Chef</p>
                <p className="text-gray-600">
                  With over 20 years of culinary experience, Mark created our signature burger recipes.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Sarah Williams - Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-1">Sarah Williams</h3>
                <p className="text-sns-orange mb-3">Restaurant Manager</p>
                <p className="text-gray-600">
                  Sarah ensures that every customer leaves with a smile on their face.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="John Baker - Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold mb-1">John Baker</h3>
                <p className="text-sns-orange mb-3">Master Grill Chef</p>
                <p className="text-gray-600">
                  John's expertise ensures every patty is cooked to perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="bg-sns-black text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-sns-gold">Our Mission</h2>
              <p className="text-lg mb-4">
                To create the most delicious, high-quality burgers in the Vaal, served in a family-friendly environment that brings people together.
              </p>
              <p>
                We strive to make every customer feel like family, providing exceptional service and food that exceeds expectations.
              </p>
            </div>
            
            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-sns-gold">Our Vision</h2>
              <p className="text-lg mb-4">
                To be the preferred burger destination in the Vaal region, known for our quality, consistency, and community involvement.
              </p>
              <p>
                We aim to expand our footprint while maintaining the personal touch and quality that made us famous.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
