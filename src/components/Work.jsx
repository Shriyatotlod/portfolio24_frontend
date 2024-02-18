import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Work = ({user}) => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={5000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {user.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.image.url} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View Demo
                  </a>
                  <h1> Tech-Stack : {i.techStack}</h1>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
