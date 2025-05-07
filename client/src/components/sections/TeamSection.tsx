import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { teamMembers } from "@/data/teamData";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Phone, Mail, ChevronLeft, ChevronRight, Award, Star, Briefcase, Code } from "lucide-react";

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMember = () => {
    setActiveIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-100/30 via-indigo-100/20 to-background"></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-tr from-purple-200/20 to-blue-200/20 blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-indigo-200/20 to-pink-200/20 blur-3xl"
        />
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
            <Badge variant="outline" className="px-4 py-1 border-blue-300 text-blue-600 font-medium rounded-full">
              Our Talent
            </Badge>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-primary mb-4">
            The <span className="text-vibrant-gradient">Creative Minds</span> Behind Our Work
          </h2>
          <div className="h-1 w-20 bg-vibrant-gradient mx-auto mb-8 rounded-full"></div>
          <p className="text-foreground/80 text-lg md:text-xl">
            Meet the web design specialists who transform ideas into stunning digital experiences.
            Each member brings their unique skills and creativity to every project.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="glass-luxury-card p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-medium text-lg mb-2">Award-Winning</h3>
            <p className="text-sm text-foreground/70">Recognized for excellence in web design and development</p>
          </div>
          
          <div className="glass-luxury-card p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-4 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-medium text-lg mb-2">Top Talent</h3>
            <p className="text-sm text-foreground/70">Industry professionals with years of specialized experience</p>
          </div>
          
          <div className="glass-luxury-card p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-4 rounded-full bg-pink-500/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-pink-500" />
            </div>
            <h3 className="font-medium text-lg mb-2">Project Success</h3>
            <p className="text-sm text-foreground/70">Track record of over 100+ successful client projects</p>
          </div>
          
          <div className="glass-luxury-card p-6 text-center flex flex-col items-center">
            <div className="w-12 h-12 mb-4 rounded-full bg-teal-500/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-teal-500" />
            </div>
            <h3 className="font-medium text-lg mb-2">Technical Mastery</h3>
            <p className="text-sm text-foreground/70">Expertise in the latest web technologies and frameworks</p>
          </div>
        </motion.div>

        <div className="relative mt-10">
          <div className="hidden lg:flex absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 z-20">
            <button 
              onClick={prevMember}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-50"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-6 w-6 text-indigo-500" />
            </button>
          </div>

          <div className="hidden lg:flex absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 z-20">
            <button 
              onClick={nextMember}
              className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-indigo-50"
              aria-label="Next team member"
            >
              <ChevronRight className="h-6 w-6 text-indigo-500" />
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
                    <div className="absolute -inset-1 bg-vibrant-gradient rounded-2xl blur opacity-30 -z-10"></div>
                    <div className="relative glass-luxury-card border-none rounded-2xl p-1">
                      <div className="bg-white rounded-2xl p-6">
                        <div className="group relative mb-6 overflow-hidden rounded-xl">
                          <img
                            src={teamMembers[activeIndex].image}
                            alt={`${teamMembers[activeIndex].name} portrait`}
                            className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white">
                                {teamMembers[activeIndex].name}
                              </h3>
                              <p className="text-white/90 font-medium">
                                {teamMembers[activeIndex].role}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-3 mb-3 bg-indigo-50 rounded-lg">
                          <div className="text-indigo-500 mr-3 w-6">
                            <Phone size={20} />
                          </div>
                          <p className="text-indigo-700 font-medium">{teamMembers[activeIndex].phone}</p>
                        </div>
                        
                        <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-purple-500 mr-3 w-6">
                            <Mail size={20} />
                          </div>
                          <p className="text-purple-700 font-medium">{teamMembers[activeIndex].email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6 lg:hidden">
                    <button 
                      onClick={prevMember} 
                      className="mx-1 p-2 bg-white rounded-full shadow"
                      aria-label="Previous team member"
                    >
                      <ChevronLeft className="h-5 w-5 text-indigo-500" />
                    </button>
                    {teamMembers.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${
                          activeIndex === index
                            ? "bg-indigo-500"
                            : "bg-indigo-200"
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
                      <ChevronRight className="h-5 w-5 text-indigo-500" />
                    </button>
                  </div>
                </div>
                
                <div className="w-full lg:w-3/5">
                  <div className="glass-luxury-card p-1 rounded-2xl">
                    <div className="bg-white p-8 rounded-2xl">
                      <h3 className="font-poppins font-semibold text-2xl text-vibrant-gradient mb-2">Area of Expertise</h3>
                      <p className="text-foreground/80 mb-6 text-lg">{teamMembers[activeIndex].focusArea}</p>
                      
                      <h3 className="font-poppins font-semibold text-2xl text-vibrant-gradient mb-4">Core Skills</h3>
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
                      
                      <h3 className="font-poppins font-semibold text-2xl text-vibrant-gradient mb-3">Technology Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {teamMembers[activeIndex].technologies.map((tech, index) => {
                          const Icon = tech.icon;
                          return (
                            <Badge 
                              key={index} 
                              variant="outline" 
                              className="px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-sm"
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
                    ? "bg-indigo-500 scale-125" 
                    : "bg-indigo-200 hover:bg-indigo-300"
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