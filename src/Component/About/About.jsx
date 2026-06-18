import { motion } from "framer-motion";
import React from "react";
import profile from "../../assets/logo.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20"
    >
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-32 items-center">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            flex justify-center
            h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px]
            w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[458px]
            mx-auto
            shadow-2xl
            rounded-t-full
            overflow-hidden
          "
        >
          <img
            src={profile}
            alt="Rambabu Kumar"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="p-2 sm:p-4 lg:p-2 text-center md:text-left"
        >
          <p className="text-green-800 font-semibold text-lg mb-2">About Me</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Passionate
            <span className="text-green-800"> MERN Stack Developer</span>
          </h2>

          <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mb-4">
            Hello! I'm <strong>Rambabu Kumar</strong>, a passionate MERN Stack
            Developer with hands-on experience in building modern, responsive,
            and scalable web applications.
          </p>

          <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mb-4">
            I specialize in React.js, Node.js, Express.js, MongoDB, JavaScript,
            Tailwind CSS, REST APIs, and Full Stack Development.
          </p>

          <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mb-8">
            I have completed multiple real-world projects and internships where
            I developed responsive websites, dashboards, APIs, and full-stack
            applications.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-green-50 p-3 sm:p-4 rounded-xl shadow-md">
              <h3 className="font-bold text-xl sm:text-2xl text-green-800">
                6+
              </h3>
              <p className="text-sm sm:text-base">Months Experience</p>
            </div>

            <div className="bg-green-50 p-3 sm:p-4 rounded-xl shadow-md">
              <h3 className="font-bold text-xl sm:text-2xl text-green-800">
                10+
              </h3>
              <p className="text-sm sm:text-base">Projects Completed</p>
            </div>

            <div className="bg-green-50 p-3 sm:p-4 rounded-xl shadow-md">
              <h3 className="font-bold text-xl sm:text-2xl text-green-800">
                MERN
              </h3>
              <p className="text-sm sm:text-base">Tech Stack</p>
            </div>

            <div className="bg-green-50 p-3 sm:p-4 rounded-xl shadow-md">
              <h3 className="font-bold text-xl sm:text-2xl text-green-800">
                100%
              </h3>
              <p className="text-sm sm:text-base">Learning Mindset</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
