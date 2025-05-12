
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    alt: "Classic burger with cheese",
    caption: "Our signature Classic Steakburger"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1615297216301-7de3143d5a5d",
    alt: "Chicken burger",
    caption: "Crispy chicken burger with fresh vegetables"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
    alt: "Chocolate milkshake",
    caption: "Creamy chocolate shakes made with premium ice cream"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562967915-6ba607ff7d05",
    alt: "Chicken strips",
    caption: "Crispy chicken strips with our signature sauce"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1585109649139-366815a0d713",
    alt: "Loaded fries",
    caption: "Loaded fries with cheese and bacon bits"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1639024471283-03518883512d",
    alt: "Onion rings",
    caption: "Golden fried onion rings"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    alt: "Cheese burger",
    caption: "Our deluxe cheese burger with caramelized onions"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1553979459-d2229ba7433b",
    alt: "Double burger",
    caption: "Double Trouble burger - for serious appetites!"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec",
    alt: "Spicy burger",
    caption: "Our Spicy Buffalo chicken burger"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    alt: "Cola drink",
    caption: "Refreshing fizzy drinks to complement your meal"
  }
];

const GalleryPage: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  
  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-sns-black text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a peek at our delicious food, vibrant atmosphere, and happy customers
          </p>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group h-64"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {image.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 text-white p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p>{image.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white bg-sns-orange p-2 rounded-full"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div 
            className="max-w-4xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {lightboxImage.caption && (
              <div className="bg-black bg-opacity-70 text-white p-4 rounded-b-lg mt-2">
                <p className="text-center">{lightboxImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
