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
          src={"https://res.cloudinary.com/dvlr0nsmw/image/upload/v1708186921/portfolio/kq6l4peeb5yekzx0xxe3.jpg"}
          alt="Founder"
        />

        <h2>Saikiran Narawad</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Connect With Me...</h2>

        <article>
          <a href="https://www.linkedin.com/in/saikiran-narawad-88aab91b4/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/saikirannarawad?tab=repositories" target={"blank"}>
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
