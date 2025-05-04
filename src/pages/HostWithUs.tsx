import React, { useState } from 'react';
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
  Mail
} from 'lucide-react';
import Logo from '@/components/Logo';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

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
            <div className="aspect-square rounded-lg bg-trav-secondary flex items-center justify-center">
              <Home className="h-24 w-24 text-trav-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* What Is Trav Section */}
      <section className="py-16 bg-trav-secondary/20 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Is Trav?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-trav-light rounded-full mb-4">
                <Camera className="h-8 w-8 text-trav-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Story-Led Travel</h3>
              <p className="text-trav-muted">Every stay starts with a Trav (video + itinerary)</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-trav-light rounded-full mb-4">
                <Briefcase className="h-8 w-8 text-trav-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Built for Explorers</h3>
              <p className="text-trav-muted">Designed for next-gen travelers</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-trav-light rounded-full mb-4">
                <Home className="h-8 w-8 text-trav-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Made for Hosts</h3>
              <p className="text-trav-muted">Spotlight your unique property</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-trav-light rounded-full mb-4">
                <Users className="h-8 w-8 text-trav-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Powered by You</h3>
              <p className="text-trav-muted">Help shape the platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Early Section */}
      <section className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Why Join Early?</h2>
          <p className="text-center text-trav-muted mb-12 max-w-2xl mx-auto">
            Early hosts enjoy exclusive benefits as we build the platform together.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-trav-light rounded-lg">
                    <Check className="h-6 w-6 text-trav-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Zero Commissions*</h3>
                    <p className="text-trav-muted">No platform fee for early hosts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-trav-light rounded-lg">
                    <TrendingUp className="h-6 w-6 text-trav-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Discovery Boost</h3>
                    <p className="text-trav-muted">Get visibility through content</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-trav-light rounded-lg">
                    <Shield className="h-6 w-6 text-trav-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Host Protection</h3>
                    <p className="text-trav-muted">Built-in guest verification, reviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-trav-light rounded-lg">
                    <Headphones className="h-6 w-6 text-trav-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Personal Onboarding</h3>
                    <p className="text-trav-muted">1:1 support during onboarding</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-trav-light rounded-lg">
                    <UserPlus className="h-6 w-6 text-trav-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Creator Collabs</h3>
                    <p className="text-trav-muted">Pair with creators for travel content</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-2 bg-trav-light rounded-lg">
                    <Globe className="h-6 w-6 text-trav-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Trusted Network</h3>
                    <p className="text-trav-muted">Join a curated group of iconic stays</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-sm text-center mt-6 text-trav-muted">*For a limited time during our early access phase</p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-trav-secondary/10 px-6">
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

      {/* Contact Section */}
      <section className="py-8 bg-trav-secondary/10 px-6">
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

      {/* Social Proof */}
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
