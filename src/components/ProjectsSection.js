import React, { useState } from "react";
import Img from "gatsby-image";
const CATEGORIES = ["TV and Theatre", "Short Form and Commercial", "Films"];

const ProjectsSection = ({ projects }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);
  const [filter, setFilter] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const handleFilterChoice = (event) => {
    const filterParam = event.target.id.toLowerCase();
    if (filterParam === filter) {
      setFilter(null);
      setStartAnimation(false);
      setProjectsToDisplay(projects);
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

  return (
    <section className="home-page-projects">
      <div className="home-page-projects-filter">
        <h2 className="projects-filter-headline">Our work</h2>
        <ul className="projects-filter-items">
          {CATEGORIES.map((category) => (
            <li
              key={category}
              className={getClassForFilterItem(category, filter)}
              id={category}
              onClick={handleFilterChoice}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
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
              />
            </div>
            <div className="nok-project-text">
              <p className="nok-project-category">{project.category}</p>
              <p className="nok-project-heading">{project.title}</p>
              <p className="nok-project-text-copy">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
