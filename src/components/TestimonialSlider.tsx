
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  autoSlide = true,
  slideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, slideInterval]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden py-16 bg-gray-100">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                {testimonial.image && (
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < testimonial.rating ? 'text-sns-gold fill-sns-gold' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6 max-w-2xl">
                  "{testimonial.text}"
                </blockquote>
                
                <cite className="text-lg font-semibold not-italic text-sns-black">
                  {testimonial.name}
                </cite>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-sns-orange w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
