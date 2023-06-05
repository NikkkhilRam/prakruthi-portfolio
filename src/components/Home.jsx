import React from "react";
import vg from "../assets/profileImage.png";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Activities from "./Activities";

const Home = () => {
  return (
    <>
      <main>
        <div className="bio">
          <h3>Hi There! My Name Is</h3>
          <h1>Prakruthi Manjunatha</h1>
          <p>B. E. in Medical Electronics Engineering - MSRIT, IN</p>
          <p>M. S. in Biomedical Engineering - University of Michigan, US</p>
        </div>
        <div className="img">
          <img src={vg} alt="" />
        </div>
      </main>

      <About />
      <Experience />
      <Skills />
      <Projects />
      <Activities />
    </>
  );
};

export default Home;
