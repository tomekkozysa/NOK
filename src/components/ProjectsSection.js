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
    <section className="home-page-content">
      {/* <hr className="projects-filter-ruler" role="presentation" />
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
      </div> */}
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
                {/* <p className="nok-project-category">{project.category}</p> */}
                <h3 className="nok-project-heading">{project.title}</h3>
                <p className="nok-project-text-copy">{project.description}</p>             
                {project.externalURL && project.externalURLLabel && 
                  <a href={project.externalURL} target="_blank" className="nok-project-more-link"> {project.externalURLLabel}</a>
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
