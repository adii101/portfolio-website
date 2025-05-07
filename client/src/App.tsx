import { useRef } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Import the new sections
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-gradient-to-br from-indigo-50 to-white text-foreground">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50"></div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 left-0 w-full h-full opacity-5">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#grid-gradient)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[10%] right-[20%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-indigo-200/20 to-purple-200/20 filter blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-blue-200/20 to-indigo-200/20 filter blur-3xl"></div>
          <div className="absolute bottom-[50%] right-[30%] w-[25rem] h-[25rem] rounded-full bg-gradient-to-br from-purple-200/20 to-pink-200/20 filter blur-3xl"></div>
        </div>
      </div>
      
      <Navbar scrollToSection={scrollToSection} />
      
      <div className="relative z-10">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <TeamSection />
        <ProjectsSection />
        <ContactSection />
        
        <footer className="bg-white shadow-lg border-t border-indigo-100 py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-4">
              <h2 className="text-2xl font-poppins font-bold">
                <span className="text-primary">UI</span>
                <span className="text-creative-gradient">Elites</span>
              </h2>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              Creating exceptional digital experiences for businesses worldwide
            </p>
            <div className="w-24 h-1 bg-creative-gradient mx-auto mb-4 rounded-full"></div>
            <p className="text-sm text-foreground/70">
              &copy; {new Date().getFullYear()} UI Elites. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage}/>
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
