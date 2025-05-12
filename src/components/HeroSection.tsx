
import React from 'react';
import TypingAnimation from './TypingAnimation';
import EarlyAccessForm from './EarlyAccessForm';
import RocketAnimation from './RocketAnimation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  Compass, 
  User, 
  Users, 
  Gift, 
  MessageSquare,
  Check, 
  TrendingUp, 
  Shield, 
  Headphones, 
  UserPlus, 
  Globe,
  PartyPopper, 
} from 'lucide-react';
import { motion } from './ui/motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible }) => {
  const isMobile = useIsMobile();

  // Feature cards for "What is Trav?" section
  const featureCards = [
    { 
      icon: <Camera className="h-5 w-5" />, 
      title: 'Story-Led Travel', 
      description: 'Every stay begins with a Trav — a short video + itinerary.'
    },
    { 
      icon: <Compass className="h-5 w-5" />, 
      title: 'Built for Explorers', 
      description: 'Tailored for curious, next-gen travelers who lead with inspiration.'
    },
    { 
      icon: <User className="h-5 w-5" />, 
      title: 'Made for Users', 
      description: 'Showcase your space and earn visibility through real stories.'
    },
    { 
      icon: <MessageSquare className="h-5 w-5" />, 
      title: 'Powered by You', 
      description: 'Suggest features. Vote on ideas. Help shape the app you love.'
    },
    { 
      icon: <Gift className="h-5 w-5" />, 
      title: 'Earn & Get Rewarded', 
      description: 'Share itineraries, refer friends, and earn Trav Coins that matter.'
    },
    { 
      icon: <Users className="h-5 w-5" />, 
      title: 'Group Travel, Simplified', 
      description: 'Plan together, split bills, and relive moments with your crew.'
    }
  ];

  // Early access benefits for "Why Join Early?" section
  const earlyAccessBenefits = [
    { 
      icon: <Check className="h-5 w-5" />, 
      title: 'Zero Commission*', 
      description: 'No platform fee — keep 100% of your earnings as an early host.'
    },
    { 
      icon: <TrendingUp className="h-5 w-5" />, 
      title: 'Discovery Boost', 
      description: 'Be featured through content-first visibility and top placement.'
    },
    { 
      icon: <Shield className="h-5 w-5" />, 
      title: 'TravOne Protection', 
      description: 'Get complimentary property insurance on every booking-on us-for free.'
    },
    { 
      icon: <Headphones className="h-5 w-5" />, 
      title: '1:1 Onboarding', 
      description: 'We guide you personally — every step of the way.'
    },
    { 
      icon: <UserPlus className="h-5 w-5" />, 
      title: 'Creator Collabs', 
      description: 'Partner with top travel creators to spotlight your stay.'
    },
    { 
      icon: <Globe className="h-5 w-5" />, 
      title: 'Trusted Network', 
      description: 'Join a curated, community-first group of iconic properties.'
    }
  ];
  
  return (
    <div className="flex flex-col items-center text-center mb-8 md:mb-12 relative">
      <RocketAnimation isVisible={isVisible} />
      
      <div className={`mb-4 opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
        <TypingAnimation />
      </div>
      
      <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
        Something exciting is <span className="text-gradient">coming soon</span>
      </h1>
      
      <p className={`text-lg md:text-xl text-trav-muted max-w-3xl mx-auto mb-8 opacity-0 ${isVisible ? 'animate-slide-up-delay-2' : ''}`}>
        A whole new world of travel is landing soon — are you packed?
      </p>
      
      <div className={`opacity-0 ${isVisible ? 'animate-slide-up-delay-3' : ''}`}>
        <EarlyAccessForm />
        
        <p className="mt-4 text-sm text-center">
          Are you a homestay owner?{" "}
          <Link 
            to="/host-with-us" 
            className="text-trav-primary font-medium border-b border-transparent hover:border-trav-primary transition-all duration-300 hover:-translate-y-0.5 inline-block"
          >
            Host With Us
          </Link>
          {" "}and shape the future of travel.
        </p>
      </div>

      {/* What is Trav? Section */}
      <section className={`w-full pt-16 mt-12 opacity-0 ${isVisible ? 'animate-slide-up-delay-4' : ''}`}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center">
            What is Trav?
          </h2>
          <p className="text-lg text-trav-muted mb-8 text-center max-w-xl mx-auto">
            Your travel universe — built for stories, spontaneity, and connection.
          </p>
          
          <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {featureCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-trav-primary/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-trav-secondary flex items-center justify-center mb-2">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-[15px] mb-1">{card.title}</h3>
                <p className="text-[13px] text-trav-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Join Early? Section */}
      <section className={`w-full pt-16 mt-8 opacity-0 ${isVisible ? 'animate-slide-up-delay-4' : ''}`}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3 text-center">
            Why Join Early?
          </h2>
          <p className="text-lg text-trav-muted mb-8 text-center max-w-xl mx-auto">
            Founding hosts unlock perks that won't last forever.
          </p>
          
          <div className="space-y-3 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {earlyAccessBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 shadow-sm border border-trav-primary/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-trav-secondary flex items-center justify-center mr-3">
                    {benefit.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-[15px] mb-0.5">{benefit.title}</h3>
                    <p className="text-[12px] text-trav-muted">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-xs text-trav-muted mt-3 text-center">
            *Limited-time offer during early access phase
          </p>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className={`w-full py-10 mt-8 opacity-0 ${isVisible ? 'animate-slide-up-delay-5' : ''}`}>
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-center">
          <PartyPopper className="h-5 w-5 text-trav-primary mr-2" />
          <p className="text-[13px] font-medium text-trav-muted">
            Over <span className="text-trav-primary font-bold">40+</span> hosts have already joined Trav's early access journey.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`w-full py-10 opacity-0 ${isVisible ? 'animate-slide-up-delay-5' : ''}`}>
        <div className="max-w-sm mx-auto px-4 flex flex-col items-center space-y-3">
          <Button 
            size="lg" 
            className="w-full py-7 bg-[#079768] hover:bg-trav-dark text-white font-medium rounded-full text-[15px]"
            onClick={() => {
              document.getElementById('early-access-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Early Access
          </Button>
          
          <Link to="/host-with-us">
            <Button 
              size="lg"
              variant="outline" 
              className="w-full py-7 border-trav-primary text-trav-primary font-medium rounded-full text-[15px] hover:bg-trav-primary hover:text-white"
            >
              Host With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
