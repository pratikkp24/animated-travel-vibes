
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Plane } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface EmailSignupProps {
  className?: string;
}

const EmailSignup: React.FC<EmailSignupProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You'll be notified when we launch.",
        variant: "default",
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={cn("w-full max-w-md mx-auto opacity-0 animate-slide-up-delay-4", className)}>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="trav-input w-full px-4 py-3 rounded-lg border border-trav-primary/20 focus:border-trav-primary glassmorphism placeholder:text-gray-400"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="relative px-6 py-3 bg-trav-primary text-white rounded-lg hover:bg-trav-dark transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden group"
          disabled={loading}
        >
          <span className="relative z-10">
            {loading ? 'Sending...' : 'Notify Me'}
          </span>
          <Plane 
            size={18} 
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-trav-primary to-trav-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </form>
      <p className="text-sm text-center text-trav-muted mt-3">
        We'll notify you when we launch. No spam, we promise.
      </p>
    </div>
  );
};

export default EmailSignup;
