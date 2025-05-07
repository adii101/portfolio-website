import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { companyValues } from "@/data/teamData";
import { Lightbulb, Code, Users } from "lucide-react";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "lightbulb": return <Lightbulb className="h-8 w-8" />;
    case "code": return <Code className="h-8 w-8" />;
    case "users": return <Users className="h-8 w-8" />;
    default: return <Lightbulb className="h-8 w-8" />;
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            About <span className="text-gradient">UI Elites</span>
          </h2>
          <div className="h-1 w-20 bg-luxury-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-foreground/80 text-lg md:text-xl">
            Founded on a passion for excellence, UI Elites brings together a 
            team of exceptional developers with diverse skill sets but a 
            shared vision: to craft digital solutions that elevate brands and 
            deliver extraordinary user experiences.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companyValues.map((value) => (
            <motion.div key={value.id} variants={item}>
              <Card className="luxury-card border-none p-1 h-full">
                <div className="bg-white rounded-xl h-full">
                  <CardContent className="p-8">
                    <div className="text-gradient mb-6">
                      {getIconComponent(value.icon)}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-3">{value.title}</h3>
                    <p className="text-foreground/80">{value.description}</p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-24 bg-white rounded-xl p-8 luxury-card border-none overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-primary mb-4">Our Approach to Excellence</h3>
              <p className="text-foreground/80 mb-6">
                We believe that exceptional results come from a meticulous process and an 
                unwavering commitment to perfection. Every project we undertake follows our 
                signature approach:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-luxury-gradient flex items-center justify-center text-white text-sm mr-3 mt-0.5">1</span>
                  <span className="text-foreground/90"><span className="font-medium">Discovery</span> — Understanding your unique vision and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-luxury-gradient flex items-center justify-center text-white text-sm mr-3 mt-0.5">2</span>
                  <span className="text-foreground/90"><span className="font-medium">Strategy</span> — Crafting a precise plan for execution</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-luxury-gradient flex items-center justify-center text-white text-sm mr-3 mt-0.5">3</span>
                  <span className="text-foreground/90"><span className="font-medium">Design</span> — Creating elegant and intuitive interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-luxury-gradient flex items-center justify-center text-white text-sm mr-3 mt-0.5">4</span>
                  <span className="text-foreground/90"><span className="font-medium">Development</span> — Building with cutting-edge technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-luxury-gradient flex items-center justify-center text-white text-sm mr-3 mt-0.5">5</span>
                  <span className="text-foreground/90"><span className="font-medium">Refinement</span> — Polishing every detail to perfection</span>
                </li>
              </ul>
            </div>
            
            <div className="w-full lg:w-3/5 lg:pl-16">
              <div className="relative">
                <div className="absolute -inset-1 bg-luxury-gradient rounded-xl blur opacity-30"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                  alt="Premium team workspace"
                  className="w-full h-auto rounded-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;