import { FaGitAlt, FaNode } from "react-icons/fa6"
import { RiReactjsLine } from "react-icons/ri"
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si"
import { TiHtml5 } from "react-icons/ti"
import { motion } from "framer-motion"
import { TbBrandJavascript } from "react-icons/tb"
const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})


const Technologies = () => {
    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(2.5)}
                    className="p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div 
                 initial ="initial"
                 animate ="animate"
                 variants={iconVariants(3)}
                className="p-4">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div 
                initial ="initial"
                animate ="animate"
                variants={iconVariants(5)} className="p-4">
                    <FaNode className="text-7xl text-green-700" />
                </motion.div>
                <motion.div 
                initial ="initial"
                animate ="animate"
                variants={iconVariants(2)} ///6//4
                className="p-4">
                    <TiHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div 
                initial ="initial"
                animate ="animate"
                variants={iconVariants(6)} className="p-4">
                    <TbBrandJavascript className="text-7xl text-yellow-200" />
                </motion.div>
                <motion.div 
                initial ="initial"
                animate ="animate"
                variants={iconVariants(6)} className="p-4">
                    <SiMysql className="text-7xl text-red-500" />
                </motion.div>
                <motion.div 
                initial ="initial"
                animate ="animate"
                variants={iconVariants(4)} className="p-4">
                    <SiExpress className="text-7xl text-blue-700" />
                </motion.div>
                <motion.div 
                initial ="initial"
                animate ="animate"
                variants={iconVariants(6)} className="p-4">
                    <FaGitAlt className="text-7xl text-red-500" />
                </motion.div>
                
            </motion.div>
        </div>
    )
}

export default Technologies