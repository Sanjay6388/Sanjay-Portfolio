
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiBootstrap, SiLeaflet, SiNpm, SiVite, SiPaypal, SiPython } from "react-icons/si";
import { FaNode, FaGitAlt, FaJava } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandJavascript, TbBrandCpp } from "react-icons/tb";
import { DiCss3 } from "react-icons/di";

// Animation variants for icons (bouncing effect)
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const technologies = [
    { name: "React.js", icon: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 2.5 },
    { name: "HTML5", icon: <TiHtml5 className="text-7xl text-orange-500" />, duration: 2 },
    { name: "CSS3", icon: <DiCss3 className="text-7xl text-blue-500" />, duration: 3 },
    { name: "JavaScript", icon: <TbBrandJavascript className="text-7xl text-yellow-200" />, duration: 2.8 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-7xl text-teal-500" />, duration: 3.2 },
    { name: "Bootstrap", icon: <SiBootstrap className="text-7xl text-purple-600" />, duration: 3.5 },
    { name: "React Leaflet", icon: <SiLeaflet className="text-7xl text-green-600" />, duration: 3.8 },
    { name: "Vanta.js", icon: <SiVite className="text-7xl text-purple-500" />, duration: 4.0 },
    { name: "Node.js", icon: <FaNode className="text-7xl text-green-700" />, duration: 4.2 },
    { name: "Express.js", icon: <SiExpress className="text-7xl text-blue-700" />, duration: 4.4 },
    { name: "MongoDB", icon: <SiMongodb className="text-7xl text-green-500" />, duration: 4.6 },
    { name: "WebSockets", icon: <SiPython className="text-7xl text-blue-900" />, duration: 4.8 },
    { name: "Razorpay API", icon: <SiPaypal className="text-7xl text-blue-600" />, duration: 5.0 },
    { name: "Git", icon: <FaGitAlt className="text-7xl text-red-500" />, duration: 5.2 },
    { name: "TypeScript", icon: <SiTypescript className="text-7xl text-blue-400" />, duration: 5.4 },
    { name: "Java", icon: <FaJava className="text-7xl text-red-600" />, duration: 5.6 },
    { name: "C++", icon: <TbBrandCpp className="text-7xl text-blue-800" />, duration: 5.8 },
    { name: "XLSX.js", icon: <SiNpm className="text-7xl text-red-600" />, duration: 6.0 },
    { name: "MATLAB", icon: <SiPython className="text-7xl text-orange-600" />, duration: 6.2 },
  ];

  return (
    <div className="pb-4 lg:mb-36 ml-4 sm:ml-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl font-bold text-white"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
      >
        {technologies.map((tech, idx) => (
          <motion.div
            key={idx}
            initial="initial"
            animate="animate"
            variants={iconVariants(tech.duration)}
            className="p-4 relative group"
          >
            <div className="flex items-center justify-center">{tech.icon}</div>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 bg-gray-800 text-white text-sm px-2 py-1 rounded">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
