import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSlide } from "./SlideContext";

const CoverSlide = () => {
  const { goToSlide } = useSlide();

  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col lg:flex-row items-center">
        <motion.div 
          className="w-full lg:w-1/2 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-primary mb-4">
            UI <span className="text-secondary">Elites</span>
          </h1>
          <p className="text-dark-light text-xl md:text-2xl mb-8">
            Crafting exceptional digital experiences
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-heading"
              onClick={() => goToSlide(6)}
            >
              Our Projects
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary/10 font-heading"
              onClick={() => goToSlide(2)}
            >
              Meet The Team
            </Button>
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
            alt="Tech team collaboration workspace"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CoverSlide;
