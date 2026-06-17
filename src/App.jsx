import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Skill from "./Component/Skill/Skill";
import Project from "./Component/Project/Project";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import AddProject from "./Component/AddProject/AddProject";

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/add" element={<AddProject />} />
      </Routes>
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
