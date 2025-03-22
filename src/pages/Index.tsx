
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import BackgroundEffect from '@/components/BackgroundEffect';
import { Package, Compass, Users, Heart, Mail, Send } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import TypingAnimation from '@/components/TypingAnimation';
import EarlyAccessForm from '@/components/EarlyAccessForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Define contact form schema
  const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    organization: z.string().optional(),
    message: z.string().optional(),
  });
  
  // Initialize form
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    },
  });
  
  // Handle contact form submission
  const onContactSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log("Contact form submitted:", data);
    // In a real application, you would send this data to a server
    setContactSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setContactSuccess(false);
      setContactDialogOpen(false);
      contactForm.reset();
    }, 3000);
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between relative overflow-hidden">
      <BackgroundEffect />
      
      <header className="w-full pt-6 px-6">
        <div className="max-w-screen-xl mx-auto flex justify-start">
          <div className="animate-slide-up">
            <Logo size="md" animated={false} imageSrc="/lovable-uploads/8ef10f67-4be2-44c7-8331-150171b1f4db.png" hideText={true} />
          </div>
        </div>
      </header>
      
      <div className="flex-1 w-full max-w-screen-xl mx-auto px-6 py-10 md:py-16 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className={`mb-4 opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
            <TypingAnimation />
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight opacity-0 ${isVisible ? 'animate-slide-up-delay-1' : ''}`}>
            Something exciting is <span className="text-gradient">coming soon</span>
          </h1>
          
          <p className={`text-lg md:text-xl text-trav-muted max-w-3xl mx-auto mb-8 opacity-0 ${isVisible ? 'animate-slide-up-delay-2' : ''}`}>
            We're working on creating the ultimate travel experience. Get ready to discover the world with us.
          </p>
          
          <div className={`opacity-0 ${isVisible ? 'animate-slide-up-delay-3' : ''}`}>
            <EarlyAccessForm />
          </div>
        </div>
        
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
      </div>
      
      <footer className="w-full py-8 px-6 border-t border-trav-primary/10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
          {/* Copyright and Made with Love Section */}
          <div className="flex flex-col items-center md:items-start gap-2 text-trav-muted text-sm">
            <p>© {new Date().getFullYear()} trav. All rights reserved.</p>
            <div className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> in India
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="flex items-center text-trav-primary">
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
        
        {/* Contact Form Dialog */}
        <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{contactSuccess ? "Thank You!" : "Contact Us"}</DialogTitle>
              <DialogDescription>
                {contactSuccess ? "We will get back to you soon." : "Fill out the form below to get in touch with us."}
              </DialogDescription>
            </DialogHeader>
            
            {contactSuccess ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-8 w-8 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium text-center">Thanks for reaching out!</p>
                <p className="text-trav-muted text-center mt-2">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <Form {...contactForm}>
                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-4">
                  <FormField
                    control={contactForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={contactForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Any Context (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us how we can help you"
                            className="resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button type="submit">Submit</Button>
                  </div>
                </form>
              </Form>
            )}
          </DialogContent>
        </Dialog>
      </footer>
    </div>
  );
};

export default Index;
