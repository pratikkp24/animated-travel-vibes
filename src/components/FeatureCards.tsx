
import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Package, Compass, Users } from 'lucide-react';

const FeatureCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-12">
      <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
        <CardHeader className="p-0 pb-4">
          <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
            <Package className="text-trav-primary" />
          </div>
          <h3 className="text-xl font-semibold">Wander Pack</h3>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-trav-muted">Soon, you'll unlock access to destination guides, packing tips, and travel hacks curated just for you.</p>
        </CardContent>
      </Card>
      
      <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
        <CardHeader className="p-0 pb-4">
          <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
            <Compass className="text-trav-primary" />
          </div>
          <h3 className="text-xl font-semibold">Explore Mode</h3>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-trav-muted">Get ready to experience our upcoming surprise trip planner — drop a pin, get inspired, and see where the wind might take you!</p>
        </CardContent>
      </Card>
      
      <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
        <CardHeader className="p-0 pb-4">
          <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
            <Users className="text-trav-primary" />
          </div>
          <h3 className="text-xl font-semibold">Travel Tribe</h3>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-trav-muted">In the near future, you'll be able to join exclusive traveler groups, connect with like-minded explorers, and start building your travel community.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureCards;
