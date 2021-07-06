import React, { useState, useRef } from "react";
import Img from "gatsby-image";
import "./projects-collection.css";

const ProjectsSection = ({ projects, headline  }) => {
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);
  const [startAnimation, setStartAnimation] = useState(false);
  

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 200);
  const allProjects = useRef(null);
  const scrollUp = () => scrollToRef(allProjects);

  return (
    <section className="projects-collection">
      {/* <hr className="projects-filter-ruler" role="presentation" /> */}
      <h2 className="projects-collection-headline">{headline}</h2>
      
      <section ref={allProjects}>
        <div
          className={startAnimation ? "nok-projects-wrapper" : ""}
          onAnimationEnd={() => setStartAnimation(false)}
        >
          {projectsToDisplay.map(({ frontmatter: project }, index) => (
            <div key={index} className="nok-project">
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
