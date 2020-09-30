import React from "react";

const ProjectPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  return data ? <ProjectView data={data} /> : <div>Loading...</div>;
};

export default ProjectPreview;

const ProjectView = ({ data }) => (
  <div className="nok-project isnot_expanded">
    <div className="project-img-wrapper template">
      <img src={data.image} />
    </div>
    <div className="nok-project-text">
      <p className="nok-project-category">{data.category}</p>
      <h3 className="nok-project-heading">{data.title}</h3>
      <p className="nok-project-text-copy">
        {data.description}&nbsp;
        {data.externalURL && data.externalURLLabel && (
          <a
            href={data.externalURL}
            target="_blank"
            className="nok-project-more-link"
          >
            {data.externalURLLabel}
          </a>
        )}
      </p>
    </div>
  </div>
);
