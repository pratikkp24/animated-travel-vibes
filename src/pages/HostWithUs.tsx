import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';
import { 
  Camera, 
  Briefcase, 
  Home, 
  Users, 
  Check, 
  TrendingUp, 
  Shield, 
  Headphones, 
  UserPlus, 
  Globe,
  ChevronDown,
  Instagram,
  Mail,
  MessageSquare,
  Gift,
  PartyPopper
} from 'lucide-react';
import Logo from '@/components/Logo';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { motion } from '@/components/ui/motion';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  propertyName: z.string().optional(),
  location: z.string().min(2, { message: 'Location is required.' }),
  contact: z.string().min(5, { message: 'Email or phone is required.' }),
  instagram: z.string().optional(),
  message: z.string().optional(),
});

const HostWithUs = () => {
  const { toast } = useToast();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      propertyName: '',
      location: '',
      contact: '',
      instagram: '',
      message: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', values);
    setIsSubmitted(true);
    
    // Reset form and toast after submission
    setTimeout(() => {
      form.reset();
      toast({
        title: "Request Submitted",
        description: "Thanks for reaching out! We'll be in touch soon.",
      });
    }, 1000);
  };

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const faqs = [
    {
      id: 'commission',
      question: 'Will Trav charge a commission at launch?',
      answer: "Early hosts will enjoy a commission-free period. After our initial launch phase, a fair fee structure will be implemented to support the platform's growth and services."
    },
    {
      id: 'reach',
      question: 'How does Trav help me reach travelers?',
      answer: "Trav combines story-led content creation with a targeted platform designed for curious travelers. Your property becomes part of curated travel experiences, not just a listing."
    },
    {
      id: 'earlyAccess',
      question: 'What does early access mean?',
      answer: "Early access means you'll be among the first homestays on our platform, with priority visibility, promotional features, and input into how we develop our host tools."
    },
    {
      id: 'listing',
      question: 'How do I list my homestay?',
      answer: "Fill out the form below and our team will reach out to you personally. We'll guide you through the simple process of creating your digital presence on Trav."
    },
    {
      id: 'launch',
      question: 'When is Trav launching?',
      answer: "Trav will launch in phases throughout 2023, beginning with select destinations in India. Early hosts will be onboarded before the full public launch."
    },
    {
      id: 'contact',
      question: 'Can I speak to someone from the team?',
      answer: "Absolutely! After you submit the form below, we'll arrange a personal call to discuss your property and answer any questions you may have."
    }
  ];

  // Images for carousel
  const carouselImages = [
    { url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=2940&auto=format&fit=crop', alt: 'Cozy homestay living room' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2970&auto=format&fit=crop', alt: 'Working remotely from a homestay' },
    { url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=2836&auto=format&fit=crop', alt: 'Beautiful homestay interior' },
    { url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2787&auto=format&fit=crop', alt: 'Nature travel destination' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotation effect for images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Feature cards for "What is Trav?" section
  const featureCards = [
    { 
      icon: <Camera className="h-5 w-5" />, 
      title: 'Story-Led Travel', 
      description: 'Every stay begins with a Trav — a short video + itinerary.'
    },
    { 
      icon: <Briefcase className="h-5 w-5" />, 
      title: 'Built for Explorers', 
      description: 'Tailored for curious, next-gen travelers who lead with inspiration.'
    },
    { 
      icon: <Home className="h-5 w-5" />, 
      title: 'Made for Hosts', 
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
      title: 'Free TravONE Protection', 
      description: 'Get complimentary property insurance on every booking.'
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full py-6 px-6">
        <div className="max-w-screen-xl mx-auto">
          <Link to="/">
            <Logo size="md" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Thinking of Hosting? Let's Build This Together.
            </h1>
            <p className="text-lg text-trav-muted">
              Be part of a new kind of homestay platform — content-first, community-led, and design-forward.
            </p>
            <Button 
              size="lg" 
              className="bg-trav-primary hover:bg-trav-dark text-white"
              onClick={() => {
                document.getElementById('host-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Join the Movement
            </Button>
          </div>
          <div className="hidden md:block bg-trav-light rounded-lg p-6">
            <div className="aspect-square rounded-lg bg-trav-secondary overflow-hidden relative">
              {carouselImages.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <AspectRatio ratio={1/1} className="h-full">
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Is Trav Section - Redesigned with stacked cards */}
      <section className="py-16 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            What is Trav?
          </h2>
          <p className="text-lg text-trav-muted mb-8 text-center max-w-xl mx-auto">
            Your travel universe — built for stories, spontaneity, and connection.
          </p>
          
          <div className="space-y-3">
            {featureCards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-sm border border-trav-primary/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#E5F7EE] flex items-center justify-center mb-2">
                  <div className="text-[#079768]">
                    {card.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-[15px] mb-1">{card.title}</h3>
                <p className="text-[13px] text-trav-muted">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Join Early? Section - Redesigned with horizontal layout cards */}
      <section className="py-16 bg-trav-secondary/10 px-6">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">
            Why Join Early?
          </h2>
          <p className="text-lg text-trav-muted mb-8 text-center max-w-xl mx-auto">
            Founding hosts unlock perks that won't last forever.
          </p>
          
          <div className="space-y-3">
            {earlyAccessBenefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-4 shadow-sm border border-trav-primary/10 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 max-h-[120px] flex"
              >
                <div className="w-10 h-10 rounded-full bg-[#E5F7EE] flex items-center justify-center mr-3 flex-shrink-0">
                  <div className="text-[#079768]">
                    {benefit.icon}
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-[15px] mb-0.5">{benefit.title}</h3>
                  <p className="text-[12px] text-trav-muted">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-xs text-trav-muted mt-3 text-center">
            *Limited-time offer during early access phase
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <Collapsible 
                key={faq.id} 
                open={expandedFaq === faq.id}
                onOpenChange={() => toggleFaq(faq.id)}
                className="border border-trav-primary/20 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="w-full p-4 flex justify-between items-center bg-white hover:bg-trav-light/50 transition-colors">
                  <h3 className="font-medium text-left">{faq.question}</h3>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 pt-0 bg-white">
                    <p className="text-trav-muted">{faq.answer}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section - Redesigned with confetti icon */}
      <section className="py-10 px-6 bg-trav-secondary/5">
        <div className="max-w-md mx-auto flex items-center justify-center">
          <PartyPopper className="h-5 w-5 text-[#079768] mr-2" />
          <p className="text-[13px] font-medium text-trav-muted">
            Over <span className="text-[#079768] font-bold">40+</span> hosts have already joined Trav's early access journey.
          </p>
        </div>
      </section>

      {/* Host Interest Form */}
      <section id="host-form" className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-trav-primary/10">
            <h2 className="text-2xl font-bold text-center mb-2">Let's Talk — We're Here for You</h2>
            <p className="text-center text-trav-muted mb-8">Fill out this form and we'll reach out to discuss how we can work together</p>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-trav-light rounded-full mb-4">
                  <Check className="h-8 w-8 text-trav-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thanks for reaching out!</h3>
                <p className="text-trav-muted">We'll be in touch soon to discuss your property and answer any questions.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="propertyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Property Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Name of your property" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City/State*</FormLabel>
                        <FormControl>
                          <Input placeholder="Where is your property located?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email or Phone*</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we reach you?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="instagram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Instagram (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Instagram handle" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell us more (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us a bit about your property and what you're looking for" 
                            className="min-h-32"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-trav-primary hover:bg-trav-dark text-white"
                  >
                    Let's Talk
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned with pill-shaped buttons */}
      <section className="py-10 bg-trav-secondary/10 px-6">
        <div className="max-w-sm mx-auto flex flex-col items-center space-y-3">
          <Button 
            size="lg" 
            className="w-full py-7 bg-[#079768] hover:bg-[#058257] text-white font-medium rounded-full text-[15px] hover:-translate-y-0.5 transition-transform"
            onClick={() => {
              document.getElementById('host-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Early Access
          </Button>
          
          <Button 
            size="lg"
            variant="outline" 
            className="w-full py-7 border-[#079768] text-[#079768] font-medium rounded-full text-[15px] hover:bg-[#079768] hover:text-white transition-colors"
            onClick={() => {
              document.getElementById('host-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Host With Us
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 px-6">
        <div className="max-w-screen-xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <Mail size={18} className="text-trav-primary" />
            <a href="mailto:support@trav.guide" className="text-trav-primary hover:underline">support@trav.guide</a>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <Instagram size={18} className="text-trav-primary" />
            <a 
              href="https://www.instagram.com/trav.tribe/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-trav-primary hover:underline"
            >
              @trav.tribe
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof footer */}
      <section className="py-8 px-6 border-t border-trav-primary/10">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="text-trav-muted">
            Already speaking with 25+ homestay owners across India's top destinations.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HostWithUs;
