
import React from 'react';
import { cn } from '@/lib/utils';
import { Heart, Star } from 'lucide-react';

interface TravelCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  index: number;
}

const TravelCard: React.FC<TravelCardProps> = ({ 
  image, 
  title, 
  location, 
  rating, 
  price, 
  index 
}) => {
  return (
    <div 
      className="image-card rounded-xl overflow-hidden relative w-full max-w-xs opacity-0"
      style={{ 
        animationName: 'slideUp', 
        animationDuration: '0.8s', 
        animationDelay: `${0.1 * index}s`, 
        animationFillMode: 'forwards' 
      }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="absolute top-3 right-3 z-10">
        <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 transition-colors hover:bg-white">
          <Heart size={20} className="text-trav-primary" />
        </button>
      </div>
      <div className="content transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-white/80">{location}</p>
          </div>
          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-white">{rating}</span>
          </div>
        </div>
        <div className="mt-2 text-white">
          <span className="font-bold">{price}</span> 
          <span className="text-sm opacity-75"> / night</span>
        </div>
      </div>
    </div>
  );
};

const TravelCards: React.FC = () => {
  const travelDestinations = [
    {
      image: "/lovable-uploads/abface28-3902-4693-ae0e-6849ba5dcd3a.png",
      title: "Modern Beachfront Villa",
      location: "Bali, Indonesia",
      rating: 4.8,
      price: "$220",
    },
    {
      image: "/lovable-uploads/fa7abae9-c337-4f22-bf13-94903ff877f0.png",
      title: "Mountain Lakeside Cabin",
      location: "Dolomites, Italy",
      rating: 4.7,
      price: "$195",
    },
    {
      image: "/lovable-uploads/1ce5f9bf-1142-42ba-ba14-0740de2d9e67.png",
      title: "Tropical Paradise Resort",
      location: "Phuket, Thailand",
      rating: 4.9,
      price: "$250",
    },
  ];

  return (
    <div className="w-full mt-12">
      <div className="flex overflow-x-auto gap-6 py-4 no-scrollbar snap-x snap-mandatory">
        {travelDestinations.map((destination, index) => (
          <div key={index} className="snap-center">
            <TravelCard {...destination} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelCards;
