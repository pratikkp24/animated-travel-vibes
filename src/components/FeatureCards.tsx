
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
          <h3 className="text-xl font-semibold">🧳 Wander Pack</h3>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-trav-muted">Smart tips. Hidden gems. A travel toolkit crafted just for you — with a little help from AI.</p>
        </CardContent>
      </Card>
      
      <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
        <CardHeader className="p-0 pb-4">
          <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
            <Compass className="text-trav-primary" />
          </div>
          <h3 className="text-xl font-semibold">🌀 Explore Mode</h3>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-trav-muted">Drop a pin. Watch it plan. The way you discover and design trips is about to change.</p>
        </CardContent>
      </Card>
      
      <Card className="p-6 rounded-xl glassmorphism opacity-0 animate-slide-up-delay-4">
        <CardHeader className="p-0 pb-4">
          <div className="w-12 h-12 rounded-lg bg-trav-secondary flex items-center justify-center mb-4">
            <Users className="text-trav-primary" />
          </div>
          <h3 className="text-xl font-semibold">🌍 Travel Tribe</h3>
        </CardHeader>
        <CardContent className="p-0">
          <p className="text-trav-muted">A new kind of travel story is coming. Share your journey, spark someone else's.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureCards;
