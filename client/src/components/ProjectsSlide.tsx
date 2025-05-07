import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { projects } from "@/data/teamData";

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

const ProjectsSlide = () => {
  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        className="text-center mb-10"
        variants={item}
        initial="hidden"
        animate="show"
      >
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-dark mb-4">Our Projects</h2>
        <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
        <p className="text-dark-light text-lg max-w-3xl mx-auto">
          Explore our collaborative work showcasing our technical expertise and creative problem-solving
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className={`md:col-span-${project.columnSpan || 1}`}
            variants={item}
          >
            <Card className="bg-white rounded-xl overflow-hidden card-shadow hover:-translate-y-1 transition-transform duration-300">
              <CardHeader className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-${project.columnSpan ? "56" : "48"} object-cover`}
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-dark-light mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="px-2 py-1 bg-light text-primary text-xs rounded"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
                <span className="text-sm text-dark-light">{project.attribution}</span>
                <a href={project.link} className="text-primary font-medium text-sm">View Details →</a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSlide;
