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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#f72585"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Luxury E-commerce Platform",
    description: "A high-end e-commerce solution for luxury brands with premium UX and sophisticated payment integrations.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "Redux", "MongoDB", "Stripe API"],
    attribution: "Web Platform",
    link: "#",
    columnSpan: 6
  },
  {
    id: 2,
    title: "Smart Home Control System",
    description: "An integrated IoT system for premium residences featuring voice control, security monitoring, and energy optimization.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Raspberry Pi", "Python", "MQTT", "React Native", "AWS IoT"],
    attribution: "IoT Solution",
    link: "#",
    columnSpan: 6
  },
  {
    id: 3,
    title: "Predictive Analytics Dashboard",
    description: "A sophisticated analytics platform for financial institutions that provides real-time insights and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "TensorFlow", "D3.js", "Flask", "PostgreSQL"],
    attribution: "Data Systems",
    link: "#",
    columnSpan: 8
  },
  {
    id: 4,
    title: "Premium Healthcare App",
    description: "A comprehensive mobile application for premium healthcare providers offering telemedicine, appointment scheduling, and health monitoring.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "WebRTC"],
    attribution: "Mobile App",
    link: "#",
    columnSpan: 4
  },
  {
    id: 5,
    title: "Financial Portfolio Manager",
    description: "A sophisticated tool for financial advisors to manage client portfolios with advanced visualization and reporting capabilities.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "GraphQL", "PostgreSQL", "Redis"],
    attribution: "Web Application",
    link: "#",
    columnSpan: 5
  },
  {
    id: 6,
    title: "Industrial Monitoring System",
    description: "An industrial IoT platform that provides real-time monitoring, predictive maintenance, and operational analytics for manufacturing facilities.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Arduino", "C++", "MQTT", "React", "Node.js", "InfluxDB"],
    attribution: "IoT Platform",
    link: "#",
    columnSpan: 7
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