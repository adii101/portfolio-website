import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/teamData";
import { Phone, Mail } from "lucide-react";
import SkillBar from "./SkillBar";

interface MemberProfileSlideProps {
  member: TeamMember;
}

const MemberProfileSlide = ({ member }: MemberProfileSlideProps) => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <motion.div 
          className="w-full lg:w-2/5"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient rounded-xl p-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={`${member.name} portrait`}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-dark mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-4">{member.role}</p>
                
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-3 w-6">
                    <Phone size={20} />
                  </div>
                  <p>{member.phone}</p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-primary mr-3 w-6">
                    <Mail size={20} />
                  </div>
                  <p>{member.email}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-3/5"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-heading font-semibold text-2xl mb-2">Focus Area</h3>
          <p className="text-dark-light mb-6">{member.focusArea}</p>
          
          <h3 className="font-heading font-semibold text-2xl mb-4">Skills</h3>
          
          <div className="mb-8">
            {member.skills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
                color={member.color}
              />
            ))}
          </div>
          
          <Card className="bg-light-pale p-5 rounded-lg border-0">
            <h4 className="font-heading font-semibold mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {member.technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="px-3 py-1 bg-white rounded-full text-primary text-sm"
                  >
                    <Icon className="mr-1 h-3 w-3" /> {tech.name}
                  </Badge>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default MemberProfileSlide;
