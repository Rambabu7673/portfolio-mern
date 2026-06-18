import React from "react";
import profile from "../../assets/aws.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 lg:pt-28 gap-10"
    >
      {/* Content Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-green-800 font-semibold text-base sm:text-lg">
          Hello, Welcome 👋
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-3">
          Hi, I'm <span className="text-green-800">Rambabu Kumar</span>
        </h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            3000,
            "Web Developer",
            3000,
            "Full Stack Developer",
            3000,
          ]}
          speed={30}
          repeat={Infinity}
          className="block text-yellow-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
        />

        <p className="text-gray-600 mt-6 leading-7 text-sm sm:text-base md:text-lg">
          Passionate Full Stack Developer with experience in React.js, MongoDB,
          Node.js, Express.js, and REST APIs. I enjoy building modern, scalable,
          and responsive web applications that deliver excellent user
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-900 transition duration-300"
          >
            Download Resume
          </a>

          <button className="border-2 border-green-800 text-green-800 px-6 py-3 rounded-lg hover:bg-green-800 hover:text-white transition duration-300">
            Hire Me
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={profile}
          alt="Hero"
          className="
            w-[250px]
            sm:w-[320px]
            md:w-[400px]
            lg:w-[500px]
            h-auto
            object-contain
          "
        />
      </div>
    </section>
  );
};

export default Home;
