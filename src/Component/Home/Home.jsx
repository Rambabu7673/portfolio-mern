import React from "react";
import profile from "../../assets/aws.png";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-28"
    >
      {" "}
      {/* Content Section */}{" "}
      <div className="md:w-1/2 text-center md:text-left">
        {" "}
        <p className="text-green-800 font-semibold text-lg">
          {" "}
          Hello, Welcome 👋{" "}
        </p>{" "}
        <h1 className="text-4xl md:text-6xl font-bold mt-3">
          Hi, I'm{" "}
          
        </h1>{" "}
        <TypeAnimation
          sequence={[
            "Mern Developer",
            4000,
            "Web Developer",
            4000,
            "Full Stack Developer",
            4000,
          ]}
          speed={10}
          repeat={Infinity}
          className="text-yellow-800 text-3xl md:text-6xl font-bold"
        />{" "}
        <p className="text-gray-600 mt-6 leading-relaxed">
          {" "}
          Passionate Full Stack Developer with experience in React, MongoDB, REST
          API, Node.js and Express.js. I love building scalable and modern web
          applications.{" "}
        </p>{" "}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {" "}
          <button className="bg-green-800 text-white px-6 py-3 rounded-lg">
            {" "}
           <a href="/resume.pdf " target="_blank">   Download Resume </a>{" "}
          </button>{" "}
          <button className="border-2 border-green-800 text-green-800 px-6 py-3 rounded-lg">
            {" "}
            Hire Me{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Image Section */}{" "}
      <div className="md:w-1/2 flex justify-center ">
        {" "}
        <img src={profile} alt="Hero" className="w-[350px] md:w-[450px] h-[350px]" />{" "}
      </div>{" "}
    </section>
  );
};
export default Home;
