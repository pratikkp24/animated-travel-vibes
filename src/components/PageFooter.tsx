
import React from 'react';
import { Heart, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactDialog from './ContactDialog';

const PageFooter: React.FC = () => {
  const [contactDialogOpen, setContactDialogOpen] = React.useState(false);
  
  return (
    <footer className="w-full py-8 px-6 border-t border-trav-primary/10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
        {/* Copyright and Made with Love Section */}
        <div className="flex flex-col items-center md:items-start gap-2 text-trav-muted text-sm">
          <p>© {new Date().getFullYear()} trav. All rights reserved.</p>
          <div className="flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> in India
          </div>
        </div>
        
        {/* Contact Information - Moved slightly to the left */}
        <div className="flex items-center text-trav-primary md:mr-auto">
          <Mail className="h-5 w-5 mr-2" />
          <a href="mailto:info@trav.guide" className="hover:underline">
            info@trav.guide
          </a>
        </div>
        
        {/* Contact Button */}
        <Button 
          variant="outline"
          className="flex items-center gap-2 border-trav-primary text-trav-primary hover:bg-trav-primary/10"
          onClick={() => setContactDialogOpen(true)}
        >
          <Send className="h-4 w-4" /> Contact Us
        </Button>
      </div>
      
      <ContactDialog 
        open={contactDialogOpen} 
        onOpenChange={setContactDialogOpen} 
      />
    </footer>
  );
};

export default PageFooter;
