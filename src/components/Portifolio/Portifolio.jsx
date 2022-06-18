import React from "react";
import "./portifolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    img: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    img: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 3,
    img: IMG3,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 4,
    img: IMG4,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 5,
    img: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 6,
    img: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "http://github.com",
    demo: "https://dribbble.com/shots/18474832-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];

const Portifolio = () => {
  return (
    <section id="portifolio">
      <h5>My Recent Work</h5>
      <h2>Portifólio</h2>
      <div className="container portifolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portifolio__item">
              <div className="portifolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portifolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portifolio;
