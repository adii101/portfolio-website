import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { companyValues, expertiseAreas } from "@/data/teamData";
import { 
  LightbulbIcon, 
  CodeIcon, 
  UsersIcon, 
  LaptopIcon, 
  SmartphoneIcon, 
  DatabaseIcon, 
  CircuitBoardIcon 
} from "lucide-react";

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "lightbulb": return <LightbulbIcon className="h-8 w-8" />;
    case "code": return <CodeIcon className="h-8 w-8" />;
    case "users": return <UsersIcon className="h-8 w-8" />;
    case "laptop-code": return <LaptopIcon className="h-6 w-6" />;
    case "mobile-alt": return <SmartphoneIcon className="h-6 w-6" />;
    case "database": return <DatabaseIcon className="h-6 w-6" />;
    case "microchip": return <CircuitBoardIcon className="h-6 w-6" />;
    default: return <LightbulbIcon className="h-8 w-8" />;
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TeamIntroSlide = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        className="text-center mb-12"
        variants={item}
        initial="hidden"
        animate="show"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4">Our Team</h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-8"></div>
        <p className="text-dark-light text-lg max-w-3xl mx-auto">
          We're a passionate group of developers focused on creating innovative digital solutions 
          that solve real-world problems through elegant code and thoughtful design.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {companyValues.map((value) => (
          <motion.div key={value.id} variants={item}>
            <Card className="bg-white rounded-xl card-shadow hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-8">
                <div className="text-primary text-3xl mb-4">
                  {getIconComponent(value.icon)}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-dark-light">{value.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-12 bg-white rounded-xl p-8 card-shadow"
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.5 }}
      >
        <h3 className="font-heading font-semibold text-2xl mb-6 text-center">Our Areas of Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {expertiseAreas.map((area) => (
            <div key={area.id} className="text-center">
              <div className="bg-light-pale inline-flex rounded-full p-3 mb-3 mx-auto">
                {getIconComponent(area.icon)}
              </div>
              <p className="font-medium">{area.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamIntroSlide;
