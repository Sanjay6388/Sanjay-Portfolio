import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "../constants";

// Animation variants
const cardVariants = (index) => ({
  initial: { opacity: 0, x: -100, scale: 0.8, rotate: -5 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: index * 0.3,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.3)",
    transition: { duration: 0.3 },
  },
});

const titleVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 },
  },
  hover: {
    y: -5,
    color: "#e5e7eb",
    transition: { duration: 0.3 },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const buttonVariants = (index) => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: 0.3 + index * 0.1 },
  },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
});

const Achievements = () => {
  return (
    <div className="pb-4 lg:mb-36 ml-4 sm:ml-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Achievements
      </motion.h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 justify-center">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              variants={cardVariants(index)}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
            >
              <div className="bg-stone-900 p-6 rounded-lg overflow-hidden flex flex-col h-full">
                <motion.h3
                  variants={titleVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="text-lg font-semibold text-gray-200 mb-2 text-center"
                >
                  {achievement.title}
                </motion.h3>

                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  className="text-sm text-gray-300 mb-5 text-justify"
                >
                  {achievement.description}
                </motion.p>

                <motion.p
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  className="text-sm text-stone-400 mb-4 text-center"
                >
                  {achievement.year}
                </motion.p>

                <div className="flex gap-2 mt-auto justify-center">
                  {achievement.link && (
                    <motion.a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants(0)}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="inline-block bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors"
                    >
                      View Repository
                    </motion.a>
                  )}
                  {achievement.instagram && (
                    <motion.a
                      href={achievement.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={buttonVariants(1)}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      className="inline-block bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
                    >
                      View on Instagram
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
