import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/data/teamData";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <section id="team" className="section-padding bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            Our <span className="text-gradient">Elite Team</span>
          </h2>
          <div className="h-1 w-20 bg-luxury-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-foreground/80 text-lg md:text-xl">
            Meet the exceptional team behind our work. Each member brings unique expertise 
            and passion to create solutions that exceed expectations.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl opacity-70"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-70"></div>
          </div>

          <div className="hidden lg:flex absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 z-20">
            <button 
              onClick={prevMember}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 z-20">
            <button 
              onClick={nextMember}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Next team member"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>

          <div className="relative overflow-hidden pb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                <div className="w-full lg:w-2/5">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-luxury-gradient rounded-2xl blur opacity-30"></div>
                    <div className="bg-white rounded-2xl p-6 relative z-10 luxury-card border-none">
                      <div className="relative mb-6 overflow-hidden rounded-xl">
                        <img
                          src={teamMembers[activeIndex].image}
                          alt={`${teamMembers[activeIndex].name} portrait`}
                          className="w-full h-auto rounded-xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white">
                            {teamMembers[activeIndex].name}
                          </h3>
                          <p className="text-white/90 font-medium">
                            {teamMembers[activeIndex].role}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-3">
                        <div className="text-primary mr-3 w-6">
                          <Phone size={20} />
                        </div>
                        <p className="text-foreground/80">{teamMembers[activeIndex].phone}</p>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="text-primary mr-3 w-6">
                          <Mail size={20} />
                        </div>
                        <p className="text-foreground/80">{teamMembers[activeIndex].email}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6 lg:hidden">
                    <button 
                      onClick={prevMember} 
                      className="mx-1 p-2 bg-white rounded-full shadow"
                      aria-label="Previous team member"
                    >
                      <ChevronLeft className="h-5 w-5 text-primary" />
                    </button>
                    {teamMembers.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${
                          activeIndex === index
                            ? "bg-primary"
                            : "bg-primary/20"
                        }`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to team member ${index + 1}`}
                      />
                    ))}
                    <button 
                      onClick={nextMember} 
                      className="mx-1 p-2 bg-white rounded-full shadow"
                      aria-label="Next team member"
                    >
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </button>
                  </div>
                </div>
                
                <div className="w-full lg:w-3/5">
                  <div className="luxury-card border-none p-1 rounded-2xl">
                    <div className="bg-white p-8 rounded-2xl">
                      <h3 className="font-poppins font-semibold text-2xl text-primary mb-2">Expertise Focus</h3>
                      <p className="text-foreground/80 mb-6">{teamMembers[activeIndex].focusArea}</p>
                      
                      <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">Core Skills</h3>
                      <div className="mb-8">
                        {teamMembers[activeIndex].skills.map((skill, index) => (
                          <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium text-foreground">{skill.name}</span>
                              <span className="text-foreground/70">{skill.percentage}%</span>
                            </div>
                            <Progress 
                              value={skill.percentage} 
                              className="h-2.5" 
                              indicatorColor={teamMembers[activeIndex].color}
                            />
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="font-poppins font-semibold text-2xl text-primary mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {teamMembers[activeIndex].technologies.map((tech, index) => {
                          const Icon = tech.icon;
                          return (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-primary text-sm"
                            >
                              <Icon className="mr-1 h-3.5 w-3.5" /> {tech.name}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Navigation Dots */}
          <div className="hidden lg:flex justify-center mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-primary scale-125" 
                    : "bg-primary/20 hover:bg-primary/40"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;