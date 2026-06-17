import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={50} /> },
  { name: "CSS", icon: <FaCss3Alt size={50} /> },
  { name: "JavaScript", icon: <SiJavascript size={50} /> },
  { name: "React JS", icon: <FaReact size={50} /> },
  { name: "Node JS", icon: <FaNodeJs size={50} /> },
  { name: "Express JS", icon: <SiExpress size={50} /> },
  { name: "MongoDB", icon: <SiMongodb size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },
  { name: "Git", icon: <FaGitAlt size={50} /> },
  { name: "GitHub", icon: <FaGithub size={50} /> },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My <span className="text-green-800">Skills</span>
        </motion.h2>

        <p className="text-center text-gray-600 mb-12">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
              }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-4 cursor-pointer"
            >
              <div className="text-green-800 hover:rotate-45 transition duration-300  infinite">{skill.icon}</div>

              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
