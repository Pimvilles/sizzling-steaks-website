
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface PromoSliderProps {
  promotions: Promotion[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const PromoSlider: React.FC<PromoSliderProps> = ({
  promotions,
  autoSlide = true,
  slideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + promotions.length) % promotions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      nextSlide();
    }, slideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoSlide, slideInterval]);

  if (!promotions || promotions.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[400px] md:h-[500px]">
        {/* Slides */}
        {promotions.map((promo, index) => (
          <div
            key={promo.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={promo.imageUrl}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-8 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {promo.title}
                </h3>
                <p className="text-lg md:text-xl text-white mb-8 max-w-xl">
                  {promo.description}
                </p>
                <Link to={promo.link} className="btn-primary">
                  Get This Deal
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-20 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-20 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-20 space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-sns-orange w-6' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;
