
import React from 'react';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <header className="w-full pt-6 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="animate-slide-up">
          <Link to="/">
            <Logo size="md" />
          </Link>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full border-trav-primary text-trav-primary hover:bg-trav-primary hover:text-white animate-slide-up"
          onClick={() => {
            window.open('https://www.instagram.com/trav.tribe/', '_blank');
          }}
        >
          <Instagram size={16} className="mr-2" />
          Follow Us
        </Button>
      </div>
    </header>
  );
};

export default PageHeader;
