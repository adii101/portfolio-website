import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { teamMembers } from "@/data/teamData";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Received",
        description: "Thank you for contacting UI Elites. We'll be in touch shortly.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      </div>
      
      {/* Floating Blurs */}
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-60 -z-10"></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-luxury-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-foreground/80 text-lg md:text-xl">
            Ready to elevate your digital presence? Reach out to discuss how our premium 
            services can transform your vision into reality.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="luxury-card p-1 rounded-2xl mb-8">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="font-poppins font-semibold text-2xl text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email Us</h4>
                      <ul className="space-y-1">
                        {teamMembers.map(member => (
                          <li key={`email-${member.id}`} className="text-foreground/70">
                            <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                              {member.email}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Call Us</h4>
                      <ul className="space-y-1">
                        {teamMembers.map(member => (
                          <li key={`phone-${member.id}`} className="text-foreground/70">
                            <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                              {member.name}: {member.phone}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Location</h4>
                      <p className="text-foreground/70">
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="luxury-card p-1 rounded-2xl">
              <div className="bg-luxury-gradient p-6 rounded-2xl text-white">
                <h3 className="font-poppins font-semibold text-xl mb-6">Connect With Us</h3>
                <div className="flex justify-center space-x-6">
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="luxury-card p-1 rounded-2xl">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="font-poppins font-semibold text-2xl text-primary mb-6">Send Us a Message</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-foreground/70 mb-2 text-sm">
                        Your Name
                      </label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-200 rounded-lg focus:border-primary focus:ring-primary/30"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-foreground/70 mb-2 text-sm">
                        Your Email
                      </label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-200 rounded-lg focus:border-primary focus:ring-primary/30"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="subject" className="block text-foreground/70 mb-2 text-sm">
                      Subject
                    </label>
                    <Input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-gray-200 rounded-lg focus:border-primary focus:ring-primary/30"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-foreground/70 mb-2 text-sm">
                      Your Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className="resize-none border-gray-200 rounded-lg focus:border-primary focus:ring-primary/30"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-luxury-gradient text-white w-full py-6 rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;