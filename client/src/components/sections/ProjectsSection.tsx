import { motion } from "framer-motion";
import { projects } from "@/data/teamData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            Our <span className="text-gradient">Premium Work</span>
          </h2>
          <div className="h-1 w-20 bg-luxury-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-foreground/80 text-lg md:text-xl">
            Explore our portfolio of exceptional projects. Each represents our commitment to 
            quality, innovation, and transformative solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`md:col-span-${project.columnSpan || 6}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="luxury-card border-none p-1 rounded-2xl h-full overflow-hidden group">
                <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <Badge
                          className="bg-white text-primary font-medium px-3 py-1"
                        >
                          {project.attribution}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-3">{project.title}</h3>
                    <p className="text-foreground/70 mb-6 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="px-2 py-1 bg-slate-100 text-primary/80 text-xs rounded"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center justify-center border-primary text-primary hover:bg-primary/5 w-full"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-block py-8 px-12 max-w-3xl">
            <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">Ready for a Premium Digital Experience?</h3>
            <p className="text-foreground/80 mb-6">
              We're constantly crafting new digital masterpieces. Get in touch to discuss how 
              we can create one together that elevates your brand.
            </p>
            <Button 
              className="bg-luxury-gradient text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 px-8 rounded-full"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;