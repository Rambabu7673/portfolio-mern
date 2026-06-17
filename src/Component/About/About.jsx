import { motion } from "framer-motion";
import React from "react";
import profile from "../../assets/logo.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen  flex justify-around items-center py-20 lg:p-20"
    >
      <div className="w-full mx-auto px-6 grid md:grid-cols-2 gap-32 items-center ">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center h-[600px]
         lg:w-[458px] w-[400px]  shadow-2xl  rounded-t-full overflow-hidden "
        >
          <img
            src={profile}
            alt="Rambabu Kumar"
            className="w-[460px]     rounded shadow-2xl"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" lg:p-2 p-5"
        >
          <p className="text-green-800  font-semibold text-lg mb-2">About Me</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Passionate
            <span className="text-green-800"> MERN Stack Developer</span>
          </h2>

          <p className="text-gray-600 leading-8 text-lg mb-4">
            Hello! I'm <strong>Rambabu Kumar</strong>, a passionate MERN Stack
            Developer with hands-on experience in building modern, responsive,
            and scalable web applications.
          </p>

          <p className="text-gray-600 leading-8 text-lg mb-4">
            I specialize in React.js, Node.js, Express.js, MongoDB, JavaScript,
            Tailwind CSS, REST APIs, and Full Stack Development.
          </p>

          <p className="text-gray-600 leading-8 text-lg mb-8">
            I have completed multiple real-world projects and internships where
            I developed responsive websites, dashboards, APIs, and full-stack
            applications.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-bold text-2xl text-green-800">6+</h3>
              <p>Months Experience</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-bold text-2xl text-green-800">10+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-bold text-2xl text-green-800">MERN</h3>
              <p>Tech Stack</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-bold text-2xl text-green-800">100%</h3>
              <p>Learning Mindset</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
