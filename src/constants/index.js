
import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Motivated software engineer with expertise
 in Java, C++, JavaScript, and the MERN stack, skilled in both front-end 
 and back-end development. Proficient in building scalable, user-centric
web applications with a strong foundation in data structures and algorithms. Proven ability to lead impactful projects, 
drive client satisfaction, and enhance user experiences.`;


export const EXPERIENCES = [
  {
    year: "NOv 2022 - Jan 2023",
    role: "Full Stack Developer Intern",
    company: "Banao Technologies",
    description: `Increased client acquisition by 40% and improved revenue by 25% within three months by leading key development projects and collaborating with the design and marketing teams.`,
    technologies: ["Growth"],
  },
  {
    year: "Aug 2021 - Feb 2022",
    role: "Bussiness Development Manager",
    company: "Panwar Travels",
    description: `•	Enhanced client satisfaction by 15% and improved operational efficiency through effective management and workflow improvements.`,
    technologies: ["Efficiency"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Node. js"],
  },
  { 
    title: "Real-time Collaborative Drawing App",
    image: project1,
    description:
      "Built a real-time drawing app supporting up to 10 users.Used WebSockets for instant updates and Canvas API for synchronized drawings with <100ms latency.",
    technologies: ["React", "Node.js", "WebSockets", "Canvas API"],
  },
  {
    title: "OTT Subscription WWebsite",
    image: project2,
    description:
      "Built a secure subscription interface for OTT services with payment gateway integration, focusing on transaction security and a seamless user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "APIs"],
  },
];

export const CONTACT = {
  address: "New Delhi, India, 110018 ",
  phoneNo: "+91 6388788100",
  email: "Sanjaysahani2003@gmail.com",
};
