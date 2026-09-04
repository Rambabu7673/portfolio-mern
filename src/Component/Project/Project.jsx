import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../../../api/admin";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await api.get("/add/getAll");
        setProjects(response.data.projects || response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Loading Projects...
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="py-16 md:py-20 bg-white overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4"
        >
          My <span className="text-green-800">Projects</span>
        </motion.h2>
        <div className="flex justify-center gap-10 mb-12 bg-gray-100 p-4 mt-10 rounded-lg flex-wrap gap-y-4">
          <p className="text-black font-medium  text-lg px-4 py-2 bg-gray-100 hover:text-orange-500 cursor-pointer text-gray-500 "> Portfolio</p>
          <p className="text-black font-medium  text-lg px-4 py-2 bg-gray-100  hover:text-orange-500 cursor-pointer text-gray-500"> Hospitalaty </p>
          <p className="text-black font-medium  text-lg px-4 py-2 bg-gray-100 hover:text-orange-500 cursor-pointer text-gray-500"> Business Website</p>
          <p className="text-black font-medium  text-lg px-4 py-2 bg-gray-100 hover:text-orange-500 cursor-pointer text-gray-500"> E-commerce</p>
          <p className="text-black font-medium  text-lg px-4 py-2 bg-gray-100 hover:text-orange-500 cursor-pointer text-gray-500"> All Projects</p>
        </div>

        <p className="text-center text-gray-600 mb-12 px-2 font-medium text-base sm:text-lg">
          Here are some of my recent projects built using MERN Stack and modern
          web technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id || index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="bg-zinc-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-full min-w-0"
            >
              <img
                src={`https://portfolio-backend-ts5k.onrender.com/${project.image}`}
                alt={project.projectName}
                className="w-full h-52 sm:h-60 object-cover p-2 rounded-t-2xl"
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words">
                  {project.projectName}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((item, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 break-words">
                  {project.projectDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-green-800 text-white px-5 py-2 rounded-lg text-center hover:bg-green-900 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="https://github.com/Rambabu7673"
                    target="_blank"
                    rel="noreferrer"
                    className="border border-green-800 text-green-800 px-5 py-2 rounded-lg text-center hover:bg-green-800 hover:text-white transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
