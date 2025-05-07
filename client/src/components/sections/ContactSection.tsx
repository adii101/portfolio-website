import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { teamMembers } from "@/data/teamData";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Monitor, MessageCircle, MousePointer, ArrowRight, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-50 via-indigo-50/20 to-white"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 opacity-5">
        <Monitor className="w-64 h-64 text-indigo-500" />
      </div>
      <div className="absolute top-20 left-10 opacity-5">
        <MessageCircle className="w-48 h-48 text-purple-500" />
      </div>
      
      {/* Floating Blurs */}
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full filter blur-3xl opacity-40 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-300/20 rounded-full filter blur-3xl opacity-40 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block mb-4">
            <Badge variant="outline" className="px-4 py-1 border-purple-300 text-purple-600 font-medium rounded-full">
              Contact Us
            </Badge>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            Let's Create <span className="text-creative-gradient">Something Amazing</span>
          </h2>
          <div className="h-1 w-20 bg-creative-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-foreground/80 text-lg md:text-xl">
            Ready to transform your digital presence? Reach out to discuss how our web design experts 
            can bring your vision to life with stunning aesthetics and powerful functionality.
          </p>
        </motion.div>
        
        {/* Service options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="glass-luxury-card p-6 hover-scale">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white mr-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Website Design</h3>
            </div>
            <p className="text-foreground/70 mb-4">Custom website design with responsive layouts and seamless user experience.</p>
            <a href="#" className="flex items-center text-indigo-500 font-medium text-sm hover:text-indigo-600 transition-colors">
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
          
          <div className="glass-luxury-card p-6 hover-scale">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mr-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">Web Development</h3>
            </div>
            <p className="text-foreground/70 mb-4">Full-stack web development with modern technologies and robust backend systems.</p>
            <a href="#" className="flex items-center text-indigo-500 font-medium text-sm hover:text-indigo-600 transition-colors">
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
          
          <div className="glass-luxury-card p-6 hover-scale">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white mr-4">
                <MousePointer className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg">UI/UX Design</h3>
            </div>
            <p className="text-foreground/70 mb-4">Intuitive user interfaces and engaging user experiences that drive conversions.</p>
            <a href="#" className="flex items-center text-indigo-500 font-medium text-sm hover:text-indigo-600 transition-colors">
              Learn more <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-creative-gradient p-1 rounded-2xl mb-8">
              <div className="bg-white p-8 rounded-2xl">
                <h3 className="font-poppins font-semibold text-2xl text-creative-gradient mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Email Us</h4>
                      <ul className="space-y-1">
                        {teamMembers.map(member => (
                          <li key={`email-${member.id}`} className="text-foreground/70">
                            <a href={`mailto:${member.email}`} className="hover:text-indigo-600 transition-colors">
                              {member.email}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Call Us</h4>
                      <ul className="space-y-1">
                        {teamMembers.map(member => (
                          <li key={`phone-${member.id}`} className="text-foreground/70">
                            <a href={`tel:${member.phone}`} className="hover:text-purple-600 transition-colors">
                              {member.name}: {member.phone}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pink-100 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-pink-600" />
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
            
            <div className="bg-creative-gradient p-1 rounded-2xl">
              <div className="bg-white p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-poppins font-semibold text-xl text-creative-gradient">Connect With Us</h3>
                  <div className="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-600 font-medium">Follow Us</div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#" className="flex flex-col items-center space-y-2 group">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#6e5494] to-[#4078c0] text-white transform group-hover:scale-110 transition-transform duration-200">
                      <Github className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-gray-500">GitHub</span>
                  </a>
                  
                  <a href="#" className="flex flex-col items-center space-y-2 group">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#0077b5] to-[#0a66c2] text-white transform group-hover:scale-110 transition-transform duration-200">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-gray-500">LinkedIn</span>
                  </a>
                  
                  <a href="#" className="flex flex-col items-center space-y-2 group">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#1DA1F2] to-[#0D8BD9] text-white transform group-hover:scale-110 transition-transform duration-200">
                      <Twitter className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-gray-500">Twitter</span>
                  </a>
                  
                  <a href="#" className="flex flex-col items-center space-y-2 group">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white transform group-hover:scale-110 transition-transform duration-200">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <span className="text-xs text-gray-500">Instagram</span>
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
            <div className="bg-creative-gradient p-1 rounded-2xl">
              <div className="bg-white p-8 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-poppins font-semibold text-2xl text-creative-gradient">Start Your Project</h3>
                  <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium">
                    Free Quote
                  </Badge>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-foreground/70 mb-2 text-sm font-medium">
                        Your Name
                      </label>
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-200"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-foreground/70 mb-2 text-sm font-medium">
                        Your Email
                      </label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-200"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <label htmlFor="subject" className="block text-foreground/70 mb-2 text-sm font-medium">
                      Project Type
                    </label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange as any}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select a project type</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Web Application">Web Application</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-foreground/70 mb-2 text-sm font-medium">
                      Project Details
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className="resize-none border-gray-200 rounded-lg focus:border-indigo-500 focus:ring-indigo-200"
                      placeholder="Tell us about your project and requirements..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-creative-gradient text-white w-full py-6 rounded-lg hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Request a Free Quote <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-foreground/60 mt-4">
                    We typically respond within 24 hours. Your information is kept confidential.
                  </p>
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