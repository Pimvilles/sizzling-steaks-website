
import React, { useState } from 'react';
import { toast } from 'sonner';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormState({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-sns-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions? Reach out to our friendly team
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-sns-orange p-3 rounded-full text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <CardTitle>Our Location</CardTitle>
                      <CardDescription>Find us here</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">120 General Hertzog Road, Three Rivers, Vereeniging</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-sns-orange p-3 rounded-full text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <CardTitle>WhatsApp / Call</CardTitle>
                      <CardDescription>We're just a call away</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+27797907083" className="text-sns-orange hover:underline">
                      079 790 7083
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-sns-orange p-3 rounded-full text-white">
                      <Mail size={24} />
                    </div>
                    <div>
                      <CardTitle>Email Us</CardTitle>
                      <CardDescription>For inquiries and feedback</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <a href="mailto:info@steaksandshakes.co.za" className="text-sns-orange hover:underline">
                      info@steaksandshakes.co.za
                    </a>
                  </CardContent>
                </Card>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span className="font-medium">10:00 AM - 9:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday - Saturday:</span>
                      <span className="font-medium">10:00 AM - 10:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">11:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sns-orange"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Order Issue">Order Issue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sns-orange"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-sns-orange hover:bg-orange-600">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="h-[400px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.9363811635253!2d28.10107491538965!3d-26.6562954761967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9465e3a10d0449%3A0xf066bc97033090ca!2s120%20General%20Hertzog%20Rd%2C%20Three%20Rivers%2C%20Vereeniging%2C%201939!5e0!3m2!1sen!2sza!4v1622015607251!5m2!1sen!2sza" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy"
          title="Steaks & Shakes Location"
        />
      </section>
    </div>
  );
};

export default ContactPage;
