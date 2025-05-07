import { useEffect } from "react";
import { useSlide } from "./SlideContext";
import CoverSlide from "./CoverSlide";
import TeamIntroSlide from "./TeamIntroSlide";
import MemberProfileSlide from "./MemberProfileSlide";
import ProjectsSlide from "./ProjectsSlide";
import ContactSlide from "./ContactSlide";
import SlideNavigation from "./SlideNavigation";
import { teamMembers } from "@/data/teamData";
import { AnimatePresence, motion } from "framer-motion";

const Presentation = () => {
  const { currentSlide } = useSlide();

  useEffect(() => {
    document.title = `UI Elites - ${getSlideTitle(currentSlide)}`;
  }, [currentSlide]);

  const getSlideTitle = (slideNumber: number) => {
    switch (slideNumber) {
      case 1: return "Team Portfolio";
      case 2: return "Our Team";
      case 3: return `${teamMembers[0].name}`;
      case 4: return `${teamMembers[1].name}`;
      case 5: return `${teamMembers[2].name}`;
      case 6: return "Our Projects";
      case 7: return "Contact Us";
      default: return "Team Portfolio";
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-light-pale">
      <AnimatePresence mode="wait">
        <motion.section
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center px-4 py-16 overflow-y-auto"
        >
          {currentSlide === 1 && <CoverSlide />}
          {currentSlide === 2 && <TeamIntroSlide />}
          {currentSlide === 3 && <MemberProfileSlide member={teamMembers[0]} />}
          {currentSlide === 4 && <MemberProfileSlide member={teamMembers[1]} />}
          {currentSlide === 5 && <MemberProfileSlide member={teamMembers[2]} />}
          {currentSlide === 6 && <ProjectsSlide />}
          {currentSlide === 7 && <ContactSlide />}
        </motion.section>
      </AnimatePresence>

      <SlideNavigation />
    </div>
  );
};

export default Presentation;
