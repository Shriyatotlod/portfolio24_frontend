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
          src={"https://media.licdn.com/dms/image/D5603AQGgcdzeco9dcg/profile-displayphoto-shrink_800_800/0/1689103794960?e=1710979200&v=beta&t=Qxo06D5Zq9LH4w38pYZdJfPsMm40spuvun91PdhSz5U"}
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
