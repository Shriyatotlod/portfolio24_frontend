import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/85033593?v=4"}
          alt="Founder"
        />

        <h2>Shriya Totlod</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Connect With Me...</h2>

        <article>
          <a href="https://www.linkedin.com/in/shriya-totlod-674442222/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Shriyatotlod" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
