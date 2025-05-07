import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Layout, Globe, Palette, Tablet } from "lucide-react";

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
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-blue-500/10 to-background"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute top-[10%] right-[15%] w-[25rem] h-[25rem] rounded-full bg-purple-300/30 filter blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[20rem] h-[20rem] rounded-full bg-blue-300/20 filter blur-3xl"></div>
          <div className="absolute top-[35%] left-[25%] w-[30rem] h-[30rem] rounded-full bg-teal-300/20 filter blur-3xl"></div>
        </div>
        
        {/* Animated objects */}
        <motion.div 
          className="absolute top-[15%] left-[10%] w-24 h-24 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-full filter blur-xl"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.4, 0.6, 0.4]
          }} 
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-[20%] right-[15%] w-32 h-32 bg-gradient-to-br from-blue-500/40 to-teal-500/40 rounded-full filter blur-xl"
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }} 
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* SVG Shapes */}
        <div className="absolute top-[10%] right-[10%] opacity-10">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="#4361ee" strokeWidth="2" className="animate-spin-slow" />
            <circle cx="50" cy="50" r="25" stroke="#7209b7" strokeWidth="2" className="animate-spin-slow" />
          </svg>
        </div>
        <div className="absolute bottom-[15%] left-[10%] opacity-10">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" stroke="#fc466b" strokeWidth="2" className="animate-spin-slow" />
            <rect x="30" y="30" width="40" height="40" stroke="#3f5efb" strokeWidth="2" className="animate-spin-slow" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Premier Web Design Agency</span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-6">
              <span className="text-primary">UI</span>{" "}
              <span className="text-creative-gradient">Elites</span>
            </h1>
            <p className="text-foreground/80 text-xl md:text-2xl mb-8 max-w-xl">
              Transforming business visions into stunning digital experiences with cutting-edge design and development expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-creative-gradient text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-lg px-8 py-6 rounded-full"
              >
                View Our Work
              </Button>
              
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500/5 text-lg px-8 py-6 rounded-full"
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white shadow-sm">
                <Layout size={14} className="text-blue-500" />
                <span className="text-xs font-medium">Web Design</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white shadow-sm">
                <Code size={14} className="text-purple-500" />
                <span className="text-xs font-medium">Development</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white shadow-sm">
                <Globe size={14} className="text-teal-500" />
                <span className="text-xs font-medium">SEO</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white shadow-sm">
                <Palette size={14} className="text-pink-500" />
                <span className="text-xs font-medium">Branding</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white shadow-sm">
                <Tablet size={14} className="text-amber-500" />
                <span className="text-xs font-medium">Responsive</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-creative-gradient rounded-2xl blur opacity-50 -z-10"></div>
              
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=800&q=80"
                alt="Premium web design workspace with creative designs"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-xl animate-float">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <Code size={16} className="text-purple-500" />
                  </div>
                  <span className="ml-2 text-sm font-medium">Clean Code</span>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-xl animate-float-delayed">
                <span className="font-medium text-sm">Modern UI Design</span>
                <div className="flex mt-1">
                  <span className="h-2 w-10 bg-blue-500 rounded-full mr-1"></span>
                  <span className="h-2 w-4 bg-purple-500 rounded-full mr-1"></span>
                  <span className="h-2 w-6 bg-pink-500 rounded-full"></span>
                </div>
              </div>
              
              {/* Stats display */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-xs text-gray-700">30+ Happy Clients</span>
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