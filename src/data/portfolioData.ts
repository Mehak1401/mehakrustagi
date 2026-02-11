// Portfolio data extracted from Mehak Rustagi's resume

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  highlights: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  color: string;
}

export interface Skill {
  name: string;
  category: 'design' | 'development' | 'data' | 'cloud';
  icon?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Publication {
  title: string;
  description: string;
  applicationNo?: string;
}

export const personalInfo = {
  name: "Mehak Rustagi",
  tagline: "UI/UX Developer & Designer",
  location: "Delhi, India",
  email: "mehakrustagi1410@gmail.com",
  phone: "9999889683",
  linkedin: "www.linkedin.com/in/mehak-rustagi",
  portfolio: "https://mehakrustagi.in",
};

export const experiences: Experience[] = [
  {
    id: "divine-labs",
    company: "Divine Labs (IIT Delhi)",
    location: "Delhi, India",
    role: "UI/UX Developer",
    period: "December 2025 - Present",
    highlights: [
      "Synthesized datasets from 50+ user interviews and physical mapping sessions",
      "Designed 3 interactive dashboards reducing data interpretation time by 30%",
      "Leading UI/UX strategy for Fest website handling 1,00,000+ visitors",
      "Mapped 15+ user personas increasing user flow efficiency",
    ],
    color: "#9747FF",
  },
  {
    id: "alfaleus",
    company: "Alfaleus Tech (IIT Hyderabad)",
    location: "Hyderabad, India",
    role: "UI/UX Developer",
    period: "June 2025 – August 2025",
    highlights: [
      "Delivered comprehensive brand toolkit with 20+ unique assets",
      "15% increase in brand recognition during investor pitches",
      "A/B testing led to 25% improvement in task completion rates",
      "Developed 40+ responsive screens in Figma with 100% design fidelity",
    ],
    color: "#0D99FF",
  },
  {
    id: "collab-junction",
    company: "Collab Junction",
    location: "Vellore, India",
    role: "UI/UX Developer",
    period: "July 2024 – February 2025",
    highlights: [
      "Partnered with product managers for user-centric digital experiences",
      "Redesigned website with intuitive user flows",
      "Developed wireframes, high-fidelity mockups in Figma",
      "Streamlined design-to-development hand-off process",
    ],
    color: "#14AE5C",
  },
  {
    id: "internet-company",
    company: "The Internet Company",
    location: "Chennai, India",
    role: "UI/UX Developer",
    period: "September 2024 – October 2024",
    highlights: [
      "Spearheaded 0→1 design strategy for 6+ projects in 4 weeks",
      "Real-time feedback loops via Figma prototypes",
      "100% design fidelity across major browsers",
      "Met rigorous 1-week sprint deadlines",
    ],
    color: "#FF6B6B",
  },
  {
    id: "scholars-merit",
    company: "Scholars Merit Online Pvt. Ltd.",
    location: "Noida, India",
    role: "UI/UX Developer",
    period: "May 2024 – July 2024",
    highlights: [
      "Developed responsive platforms using Bootstrap and WordPress",
      "Site recognized for Global AI Excellence",
      "10% increase in organic traffic via SEO optimization",
      "Leveraged Google Analytics for campaign strategies",
    ],
    color: "#FFC107",
  },
];

export const projects: Project[] = [
  {
    id: "moodbot",
    title: "MoodBot: Sentiment-Integrated AI Chatbot",
    description: "Full-stack sentiment analysis chatbot with ensemble NLP modeling",
    highlights: [
      "Weighted majority voting engine: VADER, RoBERTa, TextBlob, Flair",
      "18% increase in sentiment classification accuracy",
      "Rigorous benchmarking of 4 NLP models",
      "Full-stack React + Vercel + Firebase + Gemini API",
    ],
    tags: ["React", "NLP", "Firebase", "Gemini API", "Figma"],
    color: "#9747FF",
  },
  {
    id: "knoos",
    title: "Knoos Alankaran – E-commerce Fashion Platform",
    description: "Luxury e-commerce platform with 0→1 product design",
    highlights: [
      "End-to-end design translating luxury aesthetic to digital",
      "Custom product filtering and streamlined checkout",
      "Mobile-first high-fidelity wireframes",
      "100% design fidelity across viewports",
    ],
    tags: ["E-commerce", "Figma", "Mobile-First", "IA"],
    color: "#0D99FF",
  },
  {
    id: "surveillance",
    title: "Advanced Multimodal Safety Surveillance",
    description: "Smart surveillance with real-time sentiment and anomaly detection",
    highlights: [
      "Real-time sentiment analysis with Hugging Face models",
      "Audio-visual + environmental sensor integration",
      "MobileNetV2, LSTM, Isolation Forest for detection",
      "ESP32, BMP280, MPU6050, GPS Neo6M integration",
    ],
    tags: ["Python", "Deep Learning", "IoT", "NLP"],
    color: "#14AE5C",
  },
];

export const skills: Skill[] = [
  // Design
  { name: "Figma", category: "design" },
  { name: "Framer", category: "design" },
  { name: "Information Architecture", category: "design" },
  { name: "Dashboard Design", category: "design" },
  { name: "Prototyping", category: "design" },
  { name: "Wireframing", category: "design" },
  { name: "Design Systems", category: "design" },
  { name: "Heuristic Evaluation", category: "design" },
  { name: "A/B Testing", category: "design" },
  { name: "User Mapping", category: "design" },
  // Development
  { name: "React Native", category: "development" },
  { name: "Node.js", category: "development" },
  { name: "JavaScript", category: "development" },
  { name: "Bootstrap", category: "development" },
  { name: "Vite", category: "development" },
  { name: "WordPress", category: "development" },
  { name: "JSON", category: "development" },
  { name: "Java", category: "development" },
  { name: "C/C++", category: "development" },
  // Data
  { name: "Python", category: "data" },
  { name: "R", category: "data" },
  { name: "SQL", category: "data" },
  { name: "NLP", category: "data" },
  { name: "Tableau", category: "data" },
  { name: "Power BI", category: "data" },
  { name: "MATLAB", category: "data" },
  { name: "Google Colab", category: "data" },
  { name: "Jupyter", category: "data" },
  // Cloud
  { name: "Azure (Certified)", category: "cloud" },
  { name: "AWS", category: "cloud" },
  { name: "Firebase", category: "cloud" },
  { name: "Vercel", category: "cloud" },
];

export const education: Education[] = [
  {
    institution: "Vellore Institute of Technology",
    degree: "Integrated M.Tech. in Computer Science (Data Science)",
    period: "2022 - 2027",
    grade: "GPA: 8.36",
  },
  {
    institution: "SLS DAV Public School",
    degree: "Senior Secondary (Class XII)",
    period: "2020 - 2021",
    grade: "96.2%",
  },
  {
    institution: "SLS DAV Public School",
    degree: "Secondary (Class X)",
    period: "2018 - 2019",
    grade: "90.2%",
  },
];

export const certifications: Certification[] = [
  {
    name: "Innovation Think Tank Certification Program",
    issuer: "Siemens Healthineer",
    date: "August 2024",
  },
  {
    name: "Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "July 2024",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "July 2024",
  },
];

export const publications: Publication[] = [
  {
    title: "Automated Fiber Detection System",
    description: "System and method for detecting and counting fiber in fiber images",
    applicationNo: "202541023389",
  },
  {
    title: "Microplastics Research",
    description: "Microplastics in disposable face mask leachates act as vectors of antibiotic toxicity",
  },
];
