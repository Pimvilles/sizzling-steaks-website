
import React from 'react';
import { Link } from 'react-router-dom';

interface VideoHeroProps {
  videoSrc: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc,
  title,
  subtitle,
  ctaText = "Order Now",
  ctaLink = "/order-online"
}) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="hero-overlay flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {subtitle}
          </p>
        )}
        
        {ctaText && (
          <Link 
            to={ctaLink} 
            className="btn-primary text-lg animate-fade-in-up"
            style={{animationDelay: '0.4s'}}
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default VideoHero;
