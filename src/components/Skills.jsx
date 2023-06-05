import React from "react";
import logo1 from "../assets/cpp.png";
import logo2 from "../assets/c.png";
import logo3 from "../assets/python.png";
import logo4 from "../assets/r.png";
import logo5 from "../assets/matlab.png";
import logo6 from "../assets/arduino.png";
import logo7 from "../assets/ltspice.png";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skill-title">
          <h1>Skills</h1>
        </div>

        <div className="skill-images">
          <div>
            <a href="#">
              <img src={logo1} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <img src={logo2} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <img src={logo3} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <img src={logo4} alt="" />
            </a>
          </div>

          <div>
            <a href="#">
              <img src={logo5} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={logo6} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={logo7} alt="" />
            </a>
          </div>
        </div>
        <div className="extra">
          <div className="spec">
            <h2>Specializations</h2>
            <p>
              Machine learning, Medical device development, Medical Imaging and
              Image Processing
            </p>
          </div>
          <div className="hardware">
            <h2>Hardware</h2>
            <p>ARM Cortex-M and MSP430</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
