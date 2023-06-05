import React from "react";
import ag from "../assets/aboutImage.png";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";

const About = () => {
  return (
    <container id={"about"}>
      <div className="img">
        <img src={ag} alt="" />
        <div className="social-media">
          <p>Get In Touch</p>
          <div className="links">
            <a
              href="https://linkedin.com/in/prakruthi-manjunath"
              target="blank"
            >
              <AiOutlineLinkedin />
            </a>
            <a href="https://www.instagram.com/prakruthi_21/" target="blank">
              <AiOutlineInstagram />
            </a>
            <a href="#">
              <AiOutlineGooglePlus />
            </a>
          </div>
        </div>
      </div>
      <div className="aboutme">
        <h3>About me</h3>
        <h1>Hello, I'm Prakruthi</h1>
        <h4>Biomedical Engineer, UMich</h4>
        <p>
          I am a passionate biomedical engineering student at UMich Ann Arbor,
          specializing in cancer research. With a strong foundation in Medical
          Electronics Engineering from MSRIT, I have authored several impactful
          research papers in the field. Committed to advancing cancer studies, I
          strive to make a meaningful impact on the lives of patients through
          innovative biomedical solutions.
        </p>
        <div className="info">
          <p>
            <span>Age</span> - 21 Years
          </p>
          <p>
            <span>Email</span> - prakruthim21@gmail.com
          </p>

          <p>
            <span>Phone</span> - +91 9731361160
          </p>
          <p>
            <span>Residence</span> - Bengaluru, IN
          </p>
        </div>
      </div>
    </container>
  );
};

export default About;
