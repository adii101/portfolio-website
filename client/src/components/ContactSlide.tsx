import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Link, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { teamMembers } from "@/data/teamData";
import { useToast } from "@/hooks/use-toast";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ContactSlide = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    toast({
      title: "Message Sent!",
      description: "Thanks for contacting UI Elites. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        className="text-center mb-10"
        variants={item}
        initial="hidden"
        animate="show"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4">Get In Touch</h2>
        <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
        <p className="text-dark-light text-lg max-w-3xl mx-auto">
          Have a project in mind? Let's collaborate and create something amazing together.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Email Card */}
        <motion.div variants={item}>
          <Card className="bg-white rounded-xl p-6 card-shadow h-full">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="text-primary text-3xl mb-4 flex items-center justify-center">
                <Mail size={32} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-center">Email Us</h3>
              <ul className="space-y-2 text-center">
                {teamMembers.map(member => (
                  <li key={member.id} className="text-dark-light">
                    <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">
                      {member.email}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Connect Card */}
        <motion.div variants={item}>
          <Card className="bg-gradient rounded-xl p-8 text-white card-shadow h-full">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="text-3xl mb-4 flex items-center justify-center">
                <Link size={32} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-5 text-center">Connect With Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white text-2xl hover:opacity-80 transition">
                  <Github size={24} />
                </a>
                <a href="#" className="text-white text-2xl hover:opacity-80 transition">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white text-2xl hover:opacity-80 transition">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-white text-2xl hover:opacity-80 transition">
                  <Instagram size={24} />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Call Card */}
        <motion.div variants={item}>
          <Card className="bg-white rounded-xl p-6 card-shadow h-full">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="text-primary text-3xl mb-4 flex items-center justify-center">
                <Phone size={32} />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3 text-center">Call Us</h3>
              <ul className="space-y-2 text-center">
                {teamMembers.map(member => (
                  <li key={member.id} className="text-dark-light">
                    <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                      {member.name}: {member.phone}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      
      {/* Contact Form */}
      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <Card className="bg-white rounded-xl p-8 card-shadow max-w-2xl mx-auto">
          <CardContent className="p-0">
            <h3 className="font-heading font-semibold text-2xl mb-6 text-center">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-dark-light mb-2">Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark-light mb-2">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-dark-light mb-2">Subject</label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-dark-light mb-2">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="text-center">
                <Button 
                  type="submit" 
                  className="px-8 py-3 bg-primary text-white font-heading font-semibold rounded-lg hover:bg-opacity-90"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ContactSlide;
