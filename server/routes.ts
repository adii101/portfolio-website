import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'UI Elites Portfolio Service' });
  });

  // API endpoint to get all team members
  app.get('/api/team-members', (req, res) => {
    res.json({
      members: [
        {
          id: 1,
          name: "Aditya Salve",
          role: "Full Stack Developer",
          phone: "7000779744",
          email: "adityaasalve@hotmail.com",
          focusArea: "Scalable backend systems and interactive web interfaces",
          skills: [
            { name: "Full Stack Web Development", percentage: 90 },
            { name: "UI/UX Design", percentage: 85 },
            { name: "Backend Frameworks", percentage: 92 }
          ],
          technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Ruby", "Express.js", "Flask", "Spring Boot"]
        },
        {
          id: 2,
          name: "Tapish Rajoriya",
          role: "Software & Embedded Systems Engineer",
          phone: "8305572602",
          email: "tapishrajoriya8@gmail.com",
          focusArea: "Embedded systems and cross-language software integration",
          skills: [
            { name: "Programming Languages", percentage: 95 },
            { name: "VLSI & VHDL", percentage: 88 },
            { name: "Frontend Development", percentage: 82 },
            { name: "MATLAB & Simulink", percentage: 90 }
          ],
          technologies: ["C", "C++", "Java", "Python", "VLSI", "VHDL", "MATLAB", "Simulink"]
        },
        {
          id: 3,
          name: "Sujeet Choukikar",
          role: "Data & Full Stack Engineer",
          phone: "9303195611",
          email: "sujeetchoukikar2005@gmail.com",
          focusArea: "Data systems, optimization, and frontend/backend integration",
          skills: [
            { name: "Web Development", percentage: 88 },
            { name: "Database Management", percentage: 93 },
            { name: "Programming Languages", percentage: 90 },
            { name: "Algorithms", percentage: 85 }
          ],
          technologies: ["HTML", "CSS", "JavaScript", "SQL", "C", "Java", "Python", "Algorithms"]
        }
      ]
    });
  });

  // API endpoint to get projects
  app.get('/api/projects', (req, res) => {
    res.json({
      projects: [
        {
          id: 1,
          title: "Smart Logistics Dashboard",
          description: "A comprehensive logistics management system with real-time tracking, analytics, and optimization algorithms.",
          technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
          attribution: "Team Project"
        },
        {
          id: 2,
          title: "Embedded Systems Simulator",
          description: "A sophisticated simulation environment for testing and visualizing embedded systems behavior before hardware implementation.",
          technologies: ["C++", "MATLAB", "Python", "WebGL"],
          attribution: "Led by Tapish"
        },
        {
          id: 3,
          title: "Data Visualization Platform",
          description: "An interactive platform that transforms complex datasets into insightful visualizations, helping businesses make data-driven decisions through intuitive interfaces.",
          technologies: ["D3.js", "Vue.js", "PostgreSQL", "Python", "Express"],
          attribution: "Team Project"
        }
      ]
    });
  });

  // Contact form submission endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // In a real application, you would store the contact form submission
    // or send an email. For this demo, we'll just return success.
    res.json({ 
      success: true, 
      message: 'Thank you for contacting UI Elites. We will get back to you soon!' 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
