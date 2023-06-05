import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="author">
        <p>This Portfolio is designed by Nikhil Ramesh</p>
      </div>
      <div className="author-links">
        <a
          href="https://www.linkedin.com/in/nikhil-ramesh-018438197/"
          target="blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="https://www.instagram.com/nikkhil_ram33/" target="blank">
          <AiOutlineInstagram />
        </a>
        <a href="https://github.com/NikkkhilRam" target="blank">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
