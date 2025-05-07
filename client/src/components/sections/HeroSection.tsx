import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      </div>
      
      {/* Floating Blurs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
              <span className="text-primary">UI</span>{" "}
              <span className="text-gradient">Elites</span>
            </h1>
            <p className="text-foreground/80 text-xl md:text-2xl mb-8 max-w-xl">
              Transforming visions into exceptional digital experiences with a 
              precision-focused approach and premium design philosophy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-luxury-gradient text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-lg px-8 py-6 rounded-full"
              >
                Our Showcase
              </Button>
              
              <Button 
                onClick={() => scrollToSection("team")}
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-full"
              >
                Meet The Team
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-luxury-gradient rounded-2xl blur opacity-30 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80"
                alt="Premium workspace with advanced technology"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl">
                <span className="font-medium text-sm">Elegant Solutions</span>
                <div className="flex mt-1">
                  <span className="h-2 w-10 bg-primary rounded-full mr-1"></span>
                  <span className="h-2 w-4 bg-secondary rounded-full mr-1"></span>
                  <span className="h-2 w-6 bg-accent rounded-full"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <span className="text-foreground/70 text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;