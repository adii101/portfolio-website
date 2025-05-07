import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava, FaPython, FaDatabase, FaCode, 
         FaMicrochip, FaCogs } from 'react-icons/fa';
import { SiRuby, SiExpress, SiFlask, SiSpringboot, SiCplusplus, SiC } from 'react-icons/si';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  focusArea: string;
  skills: {
    name: string;
    percentage: number;
  }[];
  technologies: {
    name: string;
    icon: any;
  }[];
  image: string;
  color: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  attribution: string;
  link: string;
  columnSpan?: number;
}

export const teamMembers: TeamMember[] = [
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
      { name: "Backend Frameworks", percentage: 92 },
    ],
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Ruby", icon: SiRuby },
      { name: "Express.js", icon: SiExpress },
      { name: "Flask", icon: SiFlask },
      { name: "Spring Boot", icon: SiSpringboot },
    ],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    color: "bg-primary"
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
      { name: "MATLAB & Simulink", percentage: 90 },
    ],
    technologies: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "VLSI", icon: FaMicrochip },
      { name: "VHDL", icon: FaMicrochip },
      { name: "MATLAB", icon: FaCogs },
      { name: "Simulink", icon: FaCogs },
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    color: "bg-secondary"
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
      { name: "Algorithms", percentage: 85 },
    ],
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "SQL", icon: FaDatabase },
      { name: "C", icon: SiC },
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "Algorithms", icon: FaCode },
    ],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500&q=80",
    color: "bg-accent"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Logistics Dashboard",
    description: "A comprehensive logistics management system with real-time tracking, analytics, and optimization algorithms.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
    attribution: "Team Project",
    link: "#"
  },
  {
    id: 2,
    title: "Embedded Systems Simulator",
    description: "A sophisticated simulation environment for testing and visualizing embedded systems behavior before hardware implementation.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=450&q=80",
    technologies: ["C++", "MATLAB", "Python", "WebGL"],
    attribution: "Led by Tapish",
    link: "#"
  },
  {
    id: 3,
    title: "Data Visualization Platform",
    description: "An interactive platform that transforms complex datasets into insightful visualizations, helping businesses make data-driven decisions through intuitive interfaces.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80",
    technologies: ["D3.js", "Vue.js", "PostgreSQL", "Python", "Express"],
    attribution: "Team Project",
    link: "#",
    columnSpan: 2
  }
];

export const companyValues = [
  {
    id: 1,
    title: "Innovation",
    description: "We believe in pushing boundaries and exploring new technologies to create the best possible solutions.",
    icon: "lightbulb"
  },
  {
    id: 2,
    title: "Craftsmanship",
    description: "We take pride in writing clean, efficient code and building robust, scalable systems.",
    icon: "code"
  },
  {
    id: 3,
    title: "Collaboration",
    description: "We leverage our diverse skillsets to tackle complex challenges and deliver exceptional results.",
    icon: "users"
  }
];

export const expertiseAreas = [
  {
    id: 1,
    title: "Full-Stack Development",
    icon: "laptop-code"
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "mobile-alt"
  },
  {
    id: 3,
    title: "Database Systems",
    icon: "database"
  },
  {
    id: 4,
    title: "Embedded Systems",
    icon: "microchip"
  }
];
