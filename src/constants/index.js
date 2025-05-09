import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `Results-driven software engineer with over 3 years of experience specializing in JavaScript, React.js, and the MERN stack. Proficient in building scalable, responsive web applications with a focus on pixel-perfect UI/UX, seamless API integrations, and optimized performance. Skilled in data structures, algorithms, and modern frontend tools like Tailwind CSS and WebSockets. Passionate about delivering user-centric solutions, collaborating in agile teams, and adopting industry best practices through continuous learning (e.g., TypeScript, Jest).`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Frontend Developer (Freelance & Open-Source)",
    company: "Self-Employed",
    description: `Developed responsive web applications using React.js, HTML5, and Tailwind CSS, delivering pixel-perfect UI components for 6+ projects, including IoT dashboards and e-commerce platforms. Collaborated with designers and backend developers to integrate APIs (e.g., Razorpay, Blynk) and resolve UI bugs, ensuring seamless user experiences across devices. Wrote clean, maintainable code and documented reusable components, reducing onboarding time by 20%. Contributed to open-source projects, participating in code reviews to enhance code quality. Applied TypeScript in personal projects and explored Jest for unit testing to meet industry standards.`,
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "TypeScript", "Jest", "HTML5", "CSS3"],
  },
  {
    year: "Aug 2021 - Feb 2022",
    role: "Business Development Manager",
    company: "Panwar Travels",
    description: `Improved client satisfaction by 15% through effective communication and relationship management. Streamlined operational workflows, enhancing efficiency and reducing process bottlenecks. Developed skills in project coordination and stakeholder collaboration, applicable to agile software development environments.`,
    technologies: ["Client Relations", "Process Optimization"],
  },
];

export const PROJECTS = [
  {
    title: "Nexus Smart Helmet Monitoring System",
    image: project5,
    description:
      "Developed a full-stack IoT-based safety system for coal miners using React.js, Tailwind CSS, Node.js, and MongoDB. Built a responsive dashboard with real-time monitoring of gas, temperature, humidity, and fall detection, featuring GPS-based helmet mapping via React Leaflet and Excel export with XLSX.js. Achieved 5-second auto-refresh using WebSockets for live data visualization.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "WebSockets", "React Leaflet", "XLSX.js", "Blynk IoT"],
    github: "https://github.com/Sanjay6388/Nexus-Smart-Helmet",
  },
  {
    title: "Real-time Collaborative Drawing App",
    image: project1,
    description:
      "Built a real-time drawing application supporting up to 10 concurrent users with <100ms latency. Utilized WebSockets for instant updates and Canvas API for synchronized drawings. Designed responsive UI components with React.js, ensuring cross-device compatibility and a seamless user experience.",
    technologies: ["React.js", "Node.js", "WebSockets", "Canvas API"],
    github: "https://github.com/Sanjay6388/Real-Time-Collaborative-White-Board",
  },
  {
    title: "OTT Subscription Website",
    image: project2,
    description:
      "Created a secure subscription platform for OTT services with Razorpay API integration for payment processing. Implemented responsive, pixel-perfect UI/UX designs using React.js and Tailwind CSS. Documented reusable components to enhance maintainability and team collaboration.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Razorpay API"],
    github: "https://github.com/Sanjay6388/STREAM-ME",
  },
  {
    title: "Breast Cancer Detection Using MATLAB CNN",
    image: project6,
    description:
      "Developed a convolutional neural network (CNN) in MATLAB to classify breast cancer from medical imaging data, achieving 92% accuracy on test datasets. Pre-processed imaging data and visualized model performance using MATLAB’s plotting tools, enhancing interpretability for medical professionals.",
    technologies: ["MATLAB", "CNN", "Image Processing"],
    github: "https://github.com/Sanjay6388/Breast-Cancer_detection-Using-Neural-Network",
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "Designed a responsive weather application that fetches real-time weather data via APIs. Implemented a clean, user-friendly interface with Bootstrap and JavaScript, ensuring compatibility across devices and dynamic data updates.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "APIs"],
    github: "https://github.com/Sanjay6388/Weather", // Add GitHub link if available
  },
  {
    title: "Personal Portfolio Website",
    image: project4,
    description:
      "Built a personal portfolio website to showcase projects, technical skills, and contact information. Designed a modern, responsive UI with React.js and Tailwind CSS, optimized for performance and accessibility.",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    github: "", // Add GitHub link if available
  },
];

export const ACHIEVEMENTS = [
  {
    title: "100 Days of CSS Animation",
    description:
      "Completed a 100-day challenge to create daily CSS animations, showcasing creativity and proficiency in CSS3. Built a collection of interactive animations, documented in a GitHub repository and shared on Instagram to engage a wider audience.",
    year: "2023",
    link: "https://github.com/Sanjay6388/100daysofCss", // Replace with actual repository
    instagram: "https://www.instagram.com/anima8tor?igsh=MXNkYnp4c2NnMjBzeA==", // Replace with your Instagram link
  },
  {
    title: "Vihaan 6.0 Hackathon",
    description:
      "Advanced to the second round among 50+ teams in the Vihaan 6.0 Hackathon organized by IEEE DTU, showcasing frontend development skills and team collaboration.",
    year: "2023",
    link: "https://certificate.givemycertificate.com/c/2c82291a-62e1-4abb-86c7-c0ac3765f480", // Add link if available
  },
  {
    title: "Top 10% Academic Performance",
    description:
      "Ranked in the top 10% of the program at Guru Tegh Bahadur Institute of Technology with a CGPA of 8.85/10.",
    year: "2022 - Present",
    link: "",
  },
];

export const CONTACT = {
  address: "New Delhi, India, 110018",
  phoneNo: "+91 6388788100",
  email: "sanjaysahani2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjay-sahani-96b81b204/",
  github: "https://github.com/Sanjay6388",
};
