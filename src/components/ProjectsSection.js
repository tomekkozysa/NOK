import React, { useState, useRef } from "react";
import Img from "gatsby-image";
// import linkicon from "../img/linkicon.svg";
const CATEGORIES = ["TV and Theatre", "Short Form and Commercial", "Films"];

const ProjectsSection = ({ projects, featuredProjects }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState(featuredProjects);
  const [filter, setFilter] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const handleFilterChoice = (event) => {
    event.preventDefault();
    scrollUp();
    const filterParam = event.target.id.toLowerCase();
    if (filterParam === filter) {
      setFilter(null);
      setStartAnimation(false);
      setProjectsToDisplay(featuredProjects);
    } else {
      setFilter(filterParam);
      // ToDo  -- refactor two lines below
      const filteredProjects = projects.filter(({ frontmatter: project }) =>
        project.category.map((el) => el.toLowerCase()).includes(filterParam)
      );
      setProjectsToDisplay(filteredProjects);
      setStartAnimation(true);
    }
  };

  const getClassForFilterItem = (category, filter) => {
    const className = "projects-filter-item";
    return category.toLowerCase() === filter
      ? className + " chosen"
      : className;
  };

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 200);
  const allProjects = useRef(null);
  const scrollUp = () => scrollToRef(allProjects);

  return (
    <section>
      <hr className="projects-filter-ruler" role="presentation" />
      <h2 className="projects-filter-headline">Our work</h2>
      <div className="projects-filter-items">
        <ul className="projects-filter-items-list">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <a
                href="#"
                id={category}
                className={getClassForFilterItem(category, filter)}
                onClick={handleFilterChoice}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <section className="home-page-projects" ref={allProjects}>
        <div
          className={startAnimation ? "nok-projects-wrapper" : ""}
          onAnimationEnd={() => setStartAnimation(false)}
        >
          {projectsToDisplay.map(({ frontmatter: project }, index) => (
            <div key={index} className="nok-project isnot_expanded">
              <div className="project-img-wrapper">
                <Img
                  fluid={project.image.childImageSharp.fluid}
                  alt={project.title}
                  placeholderStyle={{ opacity: 0 }}
                  backgroundColor="#333"
                />
              </div>
              <div className="nok-project-text">
                <p className="nok-project-category">{project.category}</p>
                <h3 className="nok-project-heading">{project.title}</h3>
                <p className="nok-project-text-copy">{project.description}</p>
                {project.externalURL &&
                  <a href={project.externalURL} target="_blank">
                    <svg width="43" height="40" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.0555 12C43.0555 10.8954 42.1601 10 41.0555 10H23.0555C21.951 10 21.0555 10.8954 21.0555 12C21.0555 13.1046 21.951 14 23.0555 14H39.0555V30C39.0555 31.1046 39.951 32 41.0555 32C42.1601 32 43.0555 31.1046 43.0555 30V12ZM23.4698 32.4142L42.4697 13.4142L39.6413 10.5858L20.6413 29.5858L23.4698 32.4142Z" fill="var(--c-primary)" />
                      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="17" width="35" height="35">
                        <rect x="2" y="19" width="31" height="31" rx="3" stroke="var(--c-primary)" strokeWidth="4" />
                      </mask>
                      <g mask="url(#mask0)">
                        <path d="M35 36.7436H16.5789V17H0V52H35V36.7436Z" fill="var(--c-primary)" />
                      </g>
                    </svg>
                  </a>
                }
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default ProjectsSection;
