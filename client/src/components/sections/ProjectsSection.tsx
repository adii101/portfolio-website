import { motion } from "framer-motion";
import { projects } from "@/data/teamData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, LayoutGrid, Laptop, MousePointer, Zap } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100/30 via-indigo-100/10 to-background"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <LayoutGrid className="w-24 h-24 text-purple-500" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Code className="w-16 h-16 text-blue-500" />
      </div>
      
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
              Our Portfolio
            </Badge>
          </div>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            Showcasing <span className="text-creative-gradient">Our Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-creative-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-foreground/80 text-lg md:text-xl">
            Browse through our collection of successful web design and development projects. 
            Each solution is crafted with attention to detail and focused on achieving our clients' goals.
          </p>
        </motion.div>
        
        {/* Key features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-luxury-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-lg mb-2">Responsive Design</h3>
            <p className="text-sm text-foreground/70">Websites that look stunning on all devices, from mobile to desktop</p>
          </div>
          
          <div className="glass-luxury-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-lg mb-2">Performance Optimized</h3>
            <p className="text-sm text-foreground/70">Lightning-fast loading speeds for better user experience and SEO</p>
          </div>
          
          <div className="glass-luxury-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-lg mb-2">Clean Code</h3>
            <p className="text-sm text-foreground/70">Maintainable, well-structured code following industry best practices</p>
          </div>
          
          <div className="glass-luxury-card p-6 text-center hover-scale">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <MousePointer className="w-5 h-5" />
            </div>
            <h3 className="font-medium text-lg mb-2">Intuitive UX</h3>
            <p className="text-sm text-foreground/70">User-centered designs that enhance engagement and conversion</p>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className={`md:col-span-${project.columnSpan || 6}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="gradient-border h-full overflow-hidden group">
                <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
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
                    <h3 className="font-poppins font-semibold text-xl mb-3 text-creative-gradient">{project.title}</h3>
                    <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="px-2 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 text-xs rounded-full border border-indigo-100"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center justify-center border-indigo-500 text-indigo-500 hover:bg-indigo-50 w-full rounded-full"
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
          className="mt-24"
        >
          <div className="bg-creative-gradient rounded-2xl p-1">
            <div className="bg-white rounded-2xl py-12 px-8 md:px-12 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="font-poppins font-bold text-3xl text-creative-gradient mb-4">Ready to Transform Your Online Presence?</h3>
                <p className="text-foreground/80 text-lg mb-8">
                  Let's collaborate to create a stunning website that captures your brand's essence
                  and drives results. Our team is ready to turn your vision into reality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-creative-gradient text-white hover:shadow-lg transition-all duration-300 px-8 py-6 rounded-full text-lg"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Start Your Project
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50 px-8 py-6 rounded-full text-lg"
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Get a Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;