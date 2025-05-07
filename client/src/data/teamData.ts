import { FaReact, FaNode, FaJs, FaDatabase, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiTypescript, SiFlutter, SiFirebase, SiMongodb, SiTensorflow, SiRaspberrypi, SiArduino, SiTailwindcss, SiNextdotjs, SiGraphql } from "react-icons/si";

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
    role: "Full Stack Lead",
    phone: "+91 98765 43210",
    email: "aditya@uielites.com",
    focusArea: "Specializing in creating robust and scalable web applications using modern JavaScript frameworks and cloud-native architectures. Expert in frontend optimization and backend system design.",
    skills: [
      { name: "Web Development", percentage: 95 },
      { name: "UI/UX Design", percentage: 85 },
      { name: "Cloud Architecture", percentage: 80 },
      { name: "DevOps", percentage: 75 }
    ],
    technologies: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaNode },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "GraphQL", icon: SiGraphql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "AWS", icon: FaAws }
    ],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#4361ee"
  },
  {
    id: 2,
    name: "Tapish Rajoriya",
    role: "Embedded Systems Expert",
    phone: "+91 96325 87410",
    email: "tapish@uielites.com",
    focusArea: "Developing smart IoT solutions and embedded systems that bridge the physical and digital worlds. Expertise in real-time applications, sensor integration, and low-level programming.",
    skills: [
      { name: "Embedded Systems", percentage: 98 },
      { name: "IoT Development", percentage: 90 },
      { name: "Electronics Design", percentage: 85 },
      { name: "Firmware Development", percentage: 92 }
    ],
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "Arduino", icon: SiArduino },
      { name: "Raspberry Pi", icon: SiRaspberrypi },
      { name: "C/C++", icon: FaJs },
      { name: "Docker", icon: FaDocker },
      { name: "Firebase", icon: SiFirebase }
    ],
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#7209b7"
  },
  {
    id: 3,
    name: "Sujeet Choukikar",
    role: "Data Systems Architect",
    phone: "+91 95142 36870",
    email: "sujeet@uielites.com",
    focusArea: "Engineering advanced data systems and machine learning solutions that transform raw information into strategic business insights. Expert in data pipeline construction and predictive analytics.",
    skills: [
      { name: "Data Engineering", percentage: 96 },
      { name: "Machine Learning", percentage: 88 },
      { name: "Big Data Systems", percentage: 92 },
      { name: "Data Visualization", percentage: 80 }
    ],
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "SQL", icon: FaDatabase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker }
    ],
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
    color: "#f72585"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "VHD Finance Platform",
    description: "A comprehensive financial services platform offering user-friendly interfaces for loans, investments, and financial planning.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "TailwindCSS", "MongoDB", "Express"],
    attribution: "Web Platform",
    link: "https://vhdfinance.onrender.com",
    columnSpan: 6
  },
  {
    id: 2,
    title: "Resume Analyzer for Students",
    description: "An AI-powered resume analysis tool that helps college students optimize their resumes for job applications with actionable feedback.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Python", "NLP", "Machine Learning", "Flask API"],
    attribution: "Education Tool",
    link: "#",
    columnSpan: 6
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description: "A feature-rich admin dashboard for online retailers with inventory management, sales analytics, and customer insights.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TailwindCSS", "Chart.js", "Prisma", "PostgreSQL"],
    attribution: "Web Application",
    link: "#",
    columnSpan: 8
  },
  {
    id: 4,
    title: "Creative Agency Website",
    description: "A visually stunning website for a creative agency featuring interactive animations, portfolio showcases, and lead generation tools.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "GSAP", "Framer Motion", "Styled Components", "Firebase"],
    attribution: "Web Design",
    link: "#",
    columnSpan: 4
  },
  {
    id: 5,
    title: "Real Estate Listing Platform",
    description: "A modern real estate platform with virtual tours, neighborhood analysis, and personalized property recommendations.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Google Maps API", "AWS S3"],
    attribution: "Web Platform",
    link: "#",
    columnSpan: 4
  },
  {
    id: 6,
    title: "Productivity App UI Design",
    description: "A clean, intuitive UI design for a productivity application focusing on task management, time tracking, and progress visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Design System"],
    attribution: "UI/UX Design",
    link: "#",
    columnSpan: 6
  }
];

export const companyValues = [
  {
    id: 1,
    title: "Excellence in Innovation",
    description: "We push boundaries and explore new technologies to craft solutions that are not just effective but revolutionary.",
    icon: "lightbulb"
  },
  {
    id: 2,
    title: "Technical Mastery",
    description: "Our team maintains a relentless pursuit of technical excellence, staying ahead of industry trends and best practices.",
    icon: "code"
  },
  {
    id: 3,
    title: "Client Partnership",
    description: "We form deep partnerships with our clients, understanding their vision and translating it into exceptional digital experiences.",
    icon: "users"
  }
];

export const expertiseAreas = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive, performant web applications with modern frameworks and best practices.",
    icon: "web"
  },
  {
    id: 2,
    title: "IoT Solutions",
    description: "Designing connected device ecosystems that bridge the physical and digital worlds.",
    icon: "iot"
  },
  {
    id: 3,
    title: "Data Engineering",
    description: "Building robust data pipelines and analytics systems that transform information into actionable insights.",
    icon: "data"
  },
  {
    id: 4,
    title: "Mobile Applications",
    description: "Developing native and cross-platform mobile experiences with elegant UIs and robust functionality.",
    icon: "mobile"
  }
];